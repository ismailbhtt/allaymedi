import { NextResponse } from "next/server";
import { z } from "zod";

import { client } from "@/sanity/client";
import { sendRentalRequestNotification } from "@/lib/email/send";

const bodySchema = z.object({
  equipmentId: z.string().min(1),
  equipmentName: z.string().min(1),
  equipmentSlug: z.string().min(1),
  customerName: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(40),
  pickupDate: z.string().min(1),
  duration: z.enum(["daily", "weekly", "monthly"]),
  notes: z.string().max(2000).optional(),
});

export async function POST(request: Request) {
  let parsed;
  try {
    const json = await request.json();
    parsed = bodySchema.parse(json);
  } catch {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const token = process.env.SANITY_WRITE_TOKEN;
  if (token) {
    try {
      const writeClient = client.withConfig({ token, useCdn: false });
      await writeClient.create({
        _type: "rentalRequest",
        equipment: { _type: "reference", _ref: parsed.equipmentId },
        customerName: parsed.customerName,
        phone: parsed.phone,
        email: parsed.email,
        pickupDate: parsed.pickupDate,
        duration: parsed.duration,
        notes: parsed.notes ?? "",
        status: "new",
        submittedAt: new Date().toISOString(),
      });
    } catch (err) {
      console.error("[rental-request] Sanity write failed", err);
    }
  }

  try {
    await sendRentalRequestNotification(parsed);
  } catch (err) {
    console.error("[rental-request] email failed", err);
  }

  return NextResponse.json({ ok: true });
}
