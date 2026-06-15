import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { getAllRentalEquipment } from "@/sanity/fetch";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Equipment rentals in Lake Oswego & Portland",
  description:
    "Rent hospital beds, wheelchairs, knee scooters and ramps. Daily, weekly, and monthly rates. Pickup or delivery across the Portland metro.",
};

export default async function RentalsIndex() {
  const items = await getAllRentalEquipment();
  return (
    <>
      <section className="container-page py-14">
        <Badge tone="copper">Rentals</Badge>
        <h1 className="mt-3">Reserve equipment by the day, week, or month</h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">
          Pickup in Lake Oswego or delivery across Portland, Tigard, Tualatin,
          West Linn, Beaverton and surrounding areas. Submit a reservation —
          we confirm availability the same day.
        </p>
      </section>

      <section className="container-page pb-16">
        {items.length === 0 ? (
          <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-10 text-center text-sm text-[var(--color-muted)]">
            Rental catalog will appear here once seeded in Sanity.
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((r) => (
              <li key={r._id}>
                <Link
                  href={`/rentals/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="relative aspect-[4/3] bg-[var(--color-surface-cool)]">
                    {r.image ? (
                      <SanityImageRender
                        image={r.image}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold">{r.name}</h2>
                    <div className="mt-3 text-sm text-[var(--color-muted)]">
                      From {formatPrice(r.dailyRateCents ?? 0)}/day
                    </div>
                    <Button variant="link" className="mt-auto self-start pt-4">
                      See rates &amp; reserve
                    </Button>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
