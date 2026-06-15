import "server-only";
import { Resend } from "resend";

import { SITE } from "@/lib/site";

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;
const storeEmail = process.env.CONTACT_FORM_TO ?? SITE.email;
const fromEmail = `Allay Medical <${process.env.EMAIL_FROM ?? "orders@allay-medical.com"}>`;

export type OrderItem = {
  name: string;
  quantity: number;
  amountCents: number;
};

export async function sendOrderNotification(payload: {
  sessionId: string;
  customerEmail: string | null;
  amountTotalCents: number;
  shippingName: string | null;
  items: OrderItem[];
}) {
  if (!resend) {
    console.warn("[email] Resend not configured — skipping order notification");
    return;
  }
  await resend.emails.send({
    from: fromEmail,
    to: storeEmail,
    subject: `New web order · ${payload.shippingName ?? payload.customerEmail ?? "(unknown)"} · ${formatMoney(payload.amountTotalCents)}`,
    html: renderOrder(payload),
  });
}

export async function sendRentalRequestNotification(payload: {
  equipmentName: string;
  equipmentSlug: string;
  customerName: string;
  email: string;
  phone: string;
  pickupDate: string;
  duration: string;
  notes?: string;
}) {
  if (!resend) return;
  await resend.emails.send({
    from: fromEmail,
    to: storeEmail,
    subject: `Rental request · ${payload.equipmentName} · ${payload.customerName}`,
    html: renderRental(payload),
    replyTo: payload.email,
  });
}

export async function sendAppointmentConfirmation(payload: {
  to: string;
  customerName: string;
  appointmentTypeName: string;
  startAt: string;
  confirmationUrl: string;
}) {
  if (!resend) return;
  const when = formatAppointmentTime(payload.startAt);
  await resend.emails.send({
    from: fromEmail,
    to: payload.to,
    subject: `Confirmed · ${payload.appointmentTypeName} on ${when.date}`,
    html: `<h2>You're booked — see you ${when.date} at ${when.time}.</h2>
<p>Hi ${escape(payload.customerName)},</p>
<p>Your ${escape(payload.appointmentTypeName)} at ${escape(SITE.name)} is confirmed.</p>
<p><strong>${escape(when.date)} at ${escape(when.time)} (Pacific)</strong><br/>
${escape(SITE.address.street)}<br/>${escape(SITE.address.city)}, ${escape(SITE.address.region)} ${escape(SITE.address.postalCode)}</p>
<p><a href="${escape(payload.confirmationUrl)}">View appointment details</a></p>
<p>Need to reschedule? Call us at ${escape(SITE.phoneDisplay)}.</p>
<p>— The ${escape(SITE.name)} team</p>`,
  });
}

export async function sendAppointmentNotification(payload: {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  appointmentTypeName: string;
  startAt: string;
  role: string;
  hasPrescription: string;
  notes?: string;
}) {
  if (!resend) return;
  const when = formatAppointmentTime(payload.startAt);
  await resend.emails.send({
    from: fromEmail,
    to: storeEmail,
    subject: `New appointment · ${payload.appointmentTypeName} · ${payload.customerName} · ${when.date}`,
    html: `<h2>New appointment booking</h2>
<p><strong>${escape(payload.appointmentTypeName)}</strong></p>
<p><strong>When:</strong> ${escape(when.date)} at ${escape(when.time)} Pacific</p>
<p><strong>Customer:</strong> ${escape(payload.customerName)} (${escape(payload.role)})</p>
<p><strong>Contact:</strong> ${escape(payload.customerEmail)} · ${escape(payload.customerPhone)}</p>
<p><strong>Prescription status:</strong> ${escape(payload.hasPrescription)}</p>
${payload.notes ? `<p><strong>Notes:</strong><br/>${escape(payload.notes).replace(/\n/g, "<br/>")}</p>` : ""}
<hr/>
<p><small>Customer acknowledged that no PHI was included in the notes field. Medical intake (if any) is handled via the HIPAA-compliant link in the confirmation email.</small></p>`,
    replyTo: payload.customerEmail,
  });
}

function formatAppointmentTime(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "America/Los_Angeles",
    }),
    time: d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "America/Los_Angeles",
    }),
  };
}

export async function sendContactNotification(payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  if (!resend) return;
  await resend.emails.send({
    from: fromEmail,
    to: storeEmail,
    subject: `Contact form · ${payload.name}`,
    html: renderContact(payload),
    replyTo: payload.email,
  });
}

function renderOrder(p: {
  sessionId: string;
  customerEmail: string | null;
  amountTotalCents: number;
  shippingName: string | null;
  items: OrderItem[];
}) {
  const rows = p.items
    .map(
      (i) =>
        `<tr><td>${escape(i.name)}</td><td align="right">${i.quantity}</td><td align="right">${formatMoney(i.amountCents)}</td></tr>`
    )
    .join("");
  return `<h2>New web order</h2>
<p><strong>Customer:</strong> ${escape(p.shippingName ?? "—")} &lt;${escape(p.customerEmail ?? "—")}&gt;</p>
<p><strong>Total:</strong> ${formatMoney(p.amountTotalCents)}</p>
<p><strong>Stripe session:</strong> ${escape(p.sessionId)}</p>
<table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
<thead><tr><th align="left">Item</th><th>Qty</th><th>Total</th></tr></thead>
<tbody>${rows}</tbody></table>
<p>Fulfill at ${SITE.address.street}.</p>`;
}

function renderRental(p: {
  equipmentName: string;
  equipmentSlug: string;
  customerName: string;
  email: string;
  phone: string;
  pickupDate: string;
  duration: string;
  notes?: string;
}) {
  return `<h2>Rental reservation request</h2>
<p><strong>Equipment:</strong> ${escape(p.equipmentName)} (<code>${escape(p.equipmentSlug)}</code>)</p>
<p><strong>Customer:</strong> ${escape(p.customerName)}</p>
<p><strong>Email:</strong> ${escape(p.email)}</p>
<p><strong>Phone:</strong> ${escape(p.phone)}</p>
<p><strong>Pickup date:</strong> ${escape(p.pickupDate)}</p>
<p><strong>Duration:</strong> ${escape(p.duration)}</p>
${p.notes ? `<p><strong>Notes:</strong><br/>${escape(p.notes).replace(/\n/g, "<br/>")}</p>` : ""}
<p>Call the customer within 2 business hours to confirm.</p>`;
}

function renderContact(p: { name: string; email: string; phone?: string; message: string }) {
  return `<h2>Contact form</h2>
<p><strong>From:</strong> ${escape(p.name)} &lt;${escape(p.email)}&gt;</p>
${p.phone ? `<p><strong>Phone:</strong> ${escape(p.phone)}</p>` : ""}
<p>${escape(p.message).replace(/\n/g, "<br/>")}</p>`;
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMoney(cents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}
