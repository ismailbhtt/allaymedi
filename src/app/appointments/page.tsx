import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllAppointmentTypes } from "@/sanity/fetch";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an appointment",
  description:
    "Book a CPAP fitting or in-store consultation at Allay Medical Solutions in Lake Oswego.",
};

export default async function AppointmentsIndexPage() {
  const types = await getAllAppointmentTypes();

  return (
    <>
      <section className="container-page py-14">
        <Badge tone="copper">Appointments</Badge>
        <h1 className="mt-3">Book an in-store appointment</h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">
          Some things are worth an appointment. CPAP mask fittings, in particular — 90%
          of therapy failures are mask-fit failures, and we want the time to get it right.
          Pick a slot below.
        </p>
      </section>

      <section className="container-page pb-16">
        {types.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {types.map((type) => (
              <li key={type._id}>
                <Link
                  href={`/appointments/${type.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-full bg-[var(--color-copper-100)]">
                      <Calendar className="size-5 text-[var(--color-copper-700)]" aria-hidden />
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-[var(--color-muted)]">
                      <Clock className="size-3.5" aria-hidden /> {type.durationMinutes} min
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold">{type.name}</h2>
                  {type.shortDescription ? (
                    <p className="mt-2 flex-1 text-sm text-[var(--color-muted)]">
                      {type.shortDescription}
                    </p>
                  ) : null}
                  <Button variant="link" className="mt-5 self-start">
                    Pick a time
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="container-page pb-16">
        <div className="rounded-[var(--radius-2xl)] bg-[var(--color-surface-warm)] p-8 md:p-12">
          <h2>Prefer to call?</h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">
            We&apos;ll book you directly over the phone. Mon–Fri 10a–6p, Sat 10a–4p.
          </p>
          <Button asChild variant="accent" className="mt-6">
            <a href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay}</a>
          </Button>
        </div>
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-10 text-center">
      <p className="text-[var(--color-muted)]">
        Appointment types will appear here once an admin creates them in the CMS.
      </p>
      <Button asChild variant="outline" className="mt-6">
        <a href={`tel:${SITE.phoneHref}`}>Call to book — {SITE.phoneDisplay}</a>
      </Button>
    </div>
  );
}
