import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { PortableText } from "@/components/sanity/portable-text";
import { BookingFlow } from "@/components/appointments/booking-flow";
import {
  getAllAppointmentTypes,
  getAppointmentTypeBySlug,
  getUpcomingSlots,
} from "@/sanity/fetch";

export async function generateMetadata(
  props: PageProps<"/appointments/[type]">
): Promise<Metadata> {
  const { type } = await props.params;
  const doc = await getAppointmentTypeBySlug(type);
  return {
    title: doc?.seo?.title ?? doc?.name ?? "Book an appointment",
    description:
      doc?.seo?.description ??
      doc?.shortDescription ??
      "Book an appointment at Allay Medical Solutions in Lake Oswego.",
  };
}

export async function generateStaticParams() {
  const types = await getAllAppointmentTypes();
  return types.map((t) => ({ type: t.slug }));
}

export const revalidate = 60;

export default async function AppointmentTypePage(
  props: PageProps<"/appointments/[type]">
) {
  const { type } = await props.params;
  const doc = await getAppointmentTypeBySlug(type);
  if (!doc) notFound();

  const slots = await getUpcomingSlots(doc._id);

  return (
    <section className="container-page py-12">
      <Badge tone="copper">Appointment</Badge>
      <h1 className="mt-3">{doc.name}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <span className="inline-flex items-center gap-1">
          <Clock className="size-4" aria-hidden /> {doc.durationMinutes} minutes
        </span>
        {doc.requiresPrescription ? (
          <span className="inline-flex items-center gap-1 text-[var(--color-copper-700)]">
            <ShieldCheck className="size-4" aria-hidden /> Prescription required
          </span>
        ) : null}
      </div>

      {doc.shortDescription ? (
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)]">
          {doc.shortDescription}
        </p>
      ) : null}

      {doc.longDescription ? (
        <div className="prose-editorial mt-8 max-w-3xl">
          <PortableText value={doc.longDescription} />
        </div>
      ) : null}

      {doc.whatToBring && doc.whatToBring.length > 0 ? (
        <div className="mt-10 max-w-2xl rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
          <h2 className="text-lg font-semibold">What to bring</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-soft)]">
            {doc.whatToBring.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ShieldCheck className="mt-1 size-4 shrink-0 text-[var(--color-sage-700)]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_420px]">
        <BookingFlow
          appointmentTypeId={doc._id}
          appointmentTypeName={doc.name}
          appointmentTypeSlug={doc.slug}
          requiresPrescription={!!doc.requiresPrescription}
          slots={slots}
        />
        <aside className="h-fit rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6 text-sm text-[var(--color-ink-soft)]">
          <h2 className="text-base font-semibold text-[var(--color-ink)]">
            Your privacy
          </h2>
          <p className="mt-2">
            This booking form collects only your name, email, phone, and purpose of visit.
            It does <strong>not</strong> collect medical history.
          </p>
          {doc.hipaaIntakeUrl ? (
            <p className="mt-3">
              After you book, we&apos;ll email you a secure, HIPAA-compliant intake form
              where you can share prescription details and medical information your fitter
              needs before your appointment.
            </p>
          ) : (
            <p className="mt-3">
              Please do not include medical history or insurance details in the notes
              field — we&apos;ll cover those at your appointment.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
