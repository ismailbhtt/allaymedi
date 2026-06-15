import { NextResponse } from "next/server";
import { z } from "zod";

import { client } from "@/sanity/client";
import { SITE } from "@/lib/site";
import { sendAppointmentConfirmation, sendAppointmentNotification } from "@/lib/email/send";

const bodySchema = z.object({
  slotId: z.string().min(1),
  slotRev: z.string().min(1),
  appointmentTypeId: z.string().min(1),
  appointmentTypeName: z.string().min(1),
  appointmentTypeSlug: z.string().min(1),
  customerName: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(40),
  role: z.enum(["patient", "caregiver"]),
  hasPrescription: z.enum(["yes", "bringing", "needs-help", "na"]),
  notes: z.string().max(2000).optional(),
  acknowledgeNoPhi: z.literal(true),
});

export async function POST(request: Request) {
  let parsed;
  try {
    parsed = bodySchema.parse(await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const token = process.env.SANITY_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json(
      {
        error:
          "Booking is temporarily unavailable. Please call us at (971) 233-8121 and we'll book you directly.",
      },
      { status: 503 }
    );
  }

  const writeClient = client.withConfig({ token, useCdn: false });

  // Re-fetch the slot to confirm it's still available and matches the expected revision.
  const freshSlot = await writeClient.fetch<
    { _id: string; _rev: string; booked: boolean; isActive: boolean; startAt: string } | null
  >(
    `*[_type == "appointmentSlot" && _id == $id][0]{ _id, _rev, booked, isActive, startAt }`,
    { id: parsed.slotId }
  );

  if (!freshSlot || !freshSlot.isActive) {
    return NextResponse.json(
      { error: "That time slot is no longer available. Please pick another." },
      { status: 409 }
    );
  }
  if (freshSlot.booked) {
    return NextResponse.json(
      { error: "That slot was just taken. Please pick another time." },
      { status: 409 }
    );
  }

  // Create the appointment record first so we can reference it from the slot.
  const appointment = await writeClient.create({
    _type: "appointment",
    slot: { _type: "reference", _ref: parsed.slotId },
    appointmentType: { _type: "reference", _ref: parsed.appointmentTypeId },
    startAt: freshSlot.startAt,
    customerName: parsed.customerName,
    email: parsed.email,
    phone: parsed.phone,
    role: parsed.role,
    hasPrescription: parsed.hasPrescription,
    notes: parsed.notes ?? "",
    status: "new",
    submittedAt: new Date().toISOString(),
  });

  // Atomic book: only flip the slot to booked if the revision still matches what the
  // customer loaded. If someone else booked in the meantime, this throws and we roll back.
  try {
    await writeClient
      .patch(parsed.slotId, { ifRevisionID: freshSlot._rev })
      .set({ booked: true, bookedBy: { _type: "reference", _ref: appointment._id } })
      .commit();
  } catch (err) {
    // Concurrency loss — roll back the orphaned appointment doc.
    await writeClient.delete(appointment._id).catch(() => undefined);
    const message =
      err instanceof Error && err.message.includes("revision")
        ? "That slot was just taken. Please pick another time."
        : "We couldn't complete the booking. Please try again or call (971) 233-8121.";
    return NextResponse.json({ error: message }, { status: 409 });
  }

  // Notifications: best-effort, don't fail the booking if email is down.
  try {
    await Promise.all([
      sendAppointmentConfirmation({
        to: parsed.email,
        customerName: parsed.customerName,
        appointmentTypeName: parsed.appointmentTypeName,
        startAt: freshSlot.startAt,
        confirmationUrl: `${SITE.url}/appointments/confirmed/${appointment._id}`,
      }),
      sendAppointmentNotification({
        customerName: parsed.customerName,
        customerEmail: parsed.email,
        customerPhone: parsed.phone,
        appointmentTypeName: parsed.appointmentTypeName,
        startAt: freshSlot.startAt,
        role: parsed.role,
        hasPrescription: parsed.hasPrescription,
        notes: parsed.notes,
      }),
    ]);
  } catch (err) {
    console.error("[appointment-book] email failed", err);
  }

  return NextResponse.json({
    ok: true,
    appointmentId: appointment._id,
    confirmationUrl: `/appointments/confirmed/${appointment._id}`,
  });
}
