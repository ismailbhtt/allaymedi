import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { PortableText } from "@/components/sanity/portable-text";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { RentalBookingForm } from "@/components/forms/rental-booking-form";
import { getAllRentalEquipment, getRentalEquipmentBySlug } from "@/sanity/fetch";
import { formatPrice } from "@/lib/utils";

export async function generateMetadata(
  props: PageProps<"/rentals/[equipment]">
): Promise<Metadata> {
  const { equipment } = await props.params;
  const doc = await getRentalEquipmentBySlug(equipment);
  return {
    title: doc?.seo?.title ?? doc?.name ?? "Rental",
    description: doc?.seo?.description ?? `Rent a ${doc?.name ?? "piece of equipment"} in the Portland metro.`,
  };
}

export async function generateStaticParams() {
  const docs = await getAllRentalEquipment();
  return docs.map((d) => ({ equipment: d.slug }));
}

export default async function RentalDetailPage(
  props: PageProps<"/rentals/[equipment]">
) {
  const { equipment } = await props.params;
  const doc = await getRentalEquipmentBySlug(equipment);
  if (!doc) notFound();

  return (
    <section className="container-page py-12">
      <Badge tone="copper">Rental</Badge>
      <h1 className="mt-3">{doc.name}</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-surface-cool)]">
            {doc.images?.[0] ? (
              <SanityImageRender
                image={doc.images[0]}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-6"
              />
            ) : null}
          </div>
          {doc.description ? (
            <div className="prose-editorial">
              <PortableText value={doc.description} />
            </div>
          ) : null}
        </div>
        <div>
          <dl className="grid gap-0 divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
            {doc.dailyRateCents ? (
              <div className="flex items-center justify-between p-4">
                <dt className="text-sm text-[var(--color-muted)]">Daily</dt>
                <dd className="font-semibold">{formatPrice(doc.dailyRateCents)}</dd>
              </div>
            ) : null}
            {doc.weeklyRateCents ? (
              <div className="flex items-center justify-between p-4">
                <dt className="text-sm text-[var(--color-muted)]">Weekly</dt>
                <dd className="font-semibold">{formatPrice(doc.weeklyRateCents)}</dd>
              </div>
            ) : null}
            {doc.monthlyRateCents ? (
              <div className="flex items-center justify-between p-4">
                <dt className="text-sm text-[var(--color-muted)]">Monthly</dt>
                <dd className="font-semibold">{formatPrice(doc.monthlyRateCents)}</dd>
              </div>
            ) : null}
            {doc.depositCents ? (
              <div className="flex items-center justify-between p-4 text-sm text-[var(--color-muted)]">
                <dt>Refundable deposit</dt>
                <dd>{formatPrice(doc.depositCents)}</dd>
              </div>
            ) : null}
          </dl>

          {doc.specs && doc.specs.length > 0 ? (
            <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {doc.specs.map((s, i) => (
                <div key={i}>
                  <dt className="text-[var(--color-muted)]">{s.label}</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{s.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-8 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6">
            <h2 className="mb-3 text-lg font-semibold">Reserve this equipment</h2>
            <p className="mb-5 text-sm text-[var(--color-muted)]">
              We&apos;ll confirm availability by phone the same day. No PHI or
              insurance info collected here.
            </p>
            <RentalBookingForm
              equipmentId={doc._id}
              equipmentName={doc.name}
              equipmentSlug={doc.slug}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
