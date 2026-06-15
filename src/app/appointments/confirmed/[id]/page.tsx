import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAppointmentById } from "@/sanity/fetch";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Appointment confirmed",
  robots: { index: false, follow: false },
};

export default async function AppointmentConfirmedPage(
  props: PageProps<"/appointments/confirmed/[id]">
) {
  const { id } = await props.params;
  const appt = await getAppointmentById(id);
  if (!appt) notFound();

  const start = new Date(appt.startAt);
  const dateDisplay = start.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  });
  const timeDisplay = start.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  });
  const duration = appt.appointmentType?.durationMinutes ?? 30;
  const hipaaUrl = appt.appointmentType?.hipaaIntakeUrl;

  return (
    <section className="container-page py-14">
      <Badge tone="sage">Confirmed</Badge>
      <h1 className="mt-3">You&apos;re booked — see you soon.</h1>
      <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">
        A confirmation email is on its way. Bring what&apos;s listed below and
        we&apos;ll have the fitting room ready.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7">
          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                Appointment
              </dt>
              <dd className="mt-1 text-lg font-semibold">
                {appt.appointmentType?.name ?? "Appointment"}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                For
              </dt>
              <dd className="mt-1 text-lg font-semibold">{appt.customerName}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                When
              </dt>
              <dd className="mt-1 inline-flex items-center gap-2 text-lg font-semibold">
                <Calendar className="size-4 text-[var(--color-copper-600)]" aria-hidden />
                {dateDisplay}
              </dd>
              <dd className="mt-1 inline-flex items-center gap-2 text-lg font-semibold">
                <Clock className="size-4 text-[var(--color-copper-600)]" aria-hidden />
                {timeDisplay} ({duration} min)
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                Where
              </dt>
              <dd className="mt-1 font-semibold">{SITE.address.street}</dd>
              <dd className="text-[var(--color-ink-soft)]">
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </dd>
            </div>
          </dl>

          {appt.appointmentType?.whatToBring && appt.appointmentType.whatToBring.length > 0 ? (
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <h2 className="text-lg font-semibold">What to bring</h2>
              <ul className="mt-3 space-y-2 text-[var(--color-ink-soft)]">
                {appt.appointmentType.whatToBring.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--color-sage-700)]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-6">
            <Button asChild variant="outline">
              <a href={`tel:${SITE.phoneHref}`}>Call to reschedule</a>
            </Button>
            <Button asChild variant="ghost">
              <a href={SITE.socials.google} target="_blank" rel="noopener">
                Get directions
              </a>
            </Button>
          </div>
        </div>

        <aside className="h-fit rounded-[var(--radius-xl)] border border-[var(--color-copper-200)] bg-[var(--color-copper-50)] p-7">
          <ShieldCheck className="size-6 text-[var(--color-copper-700)]" aria-hidden />
          <h2 className="mt-3 text-lg font-semibold">Your medical intake</h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            {hipaaUrl
              ? "Complete a short, HIPAA-compliant intake form before your appointment. It's hosted by a BAA-signed partner — your information is encrypted and never passes through our website."
              : "We'll gather medical history and prescription details in person at your appointment."}
          </p>
          {hipaaUrl ? (
            <Button asChild variant="primary" className="mt-5 w-full">
              <a href={hipaaUrl} target="_blank" rel="noopener">
                Open secure intake form
              </a>
            </Button>
          ) : null}
          <p className="mt-4 text-xs text-[var(--color-muted)]">
            This intake is hosted externally by Allay&apos;s HIPAA-compliant partner.
            It is not stored on this website.
          </p>
        </aside>
      </div>

      <div className="mt-12 flex gap-3">
        <Button asChild variant="primary">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/shop/cpap">Browse CPAP supplies</Link>
        </Button>
      </div>
    </section>
  );
}
