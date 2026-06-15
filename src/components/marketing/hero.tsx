import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-cool)]">
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
        <div>
          <Badge tone="copper" className="mb-5">
            Lake Oswego · Serving the Portland metro
          </Badge>
          <h1 className="text-balance text-[var(--color-navy-900)]">
            Home medical equipment,
            <br />
            <span className="text-[var(--color-copper-700)]">from neighbors who care.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-ink-soft)]">
            Mobility aids, CPAP, bath safety, compression, rentals and everyday
            supplies — curated, stocked, and ready the same day. Expert advice
            at our Boones Ferry storefront or over the phone.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary" size="lg">
              <Link href="/shop">
                Browse categories
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/rentals">Rent equipment</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={`tel:${SITE.phoneHref}`}>
                <Phone className="size-4" aria-hidden />
                {SITE.phoneDisplay}
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
            <div>
              <dt className="text-[var(--color-muted)]">FSA / HSA</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink)]">Accepted</dd>
            </div>
            <div>
              <dt className="text-[var(--color-muted)]">Same-day</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink)]">In-store pickup</dd>
            </div>
            <div>
              <dt className="text-[var(--color-muted)]">Rentals</dt>
              <dd className="mt-1 font-semibold text-[var(--color-ink)]">Daily & weekly</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[var(--radius-2xl)] bg-gradient-to-br from-[var(--color-navy-100)] via-[var(--color-surface-warm)] to-[var(--color-copper-100)] shadow-[var(--shadow-card)]">
            {/* Placeholder for hero imagery — replace with photographed storefront + staff shot */}
            <div className="flex h-full items-center justify-center text-sm text-[var(--color-muted)]">
              Hero photography placeholder
            </div>
          </div>
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
            <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
              Rated on Google
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-2xl font-semibold">4.9</span>
              <span className="text-sm text-[var(--color-muted)]">· 200+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
