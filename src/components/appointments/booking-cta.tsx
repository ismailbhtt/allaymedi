import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BookingCTA({
  headline = "Book a CPAP fitting",
  description = "90% of CPAP failures are mask-fit failures. We give every fitting 30 minutes in person — no rushed handoff.",
  ctaLabel = "Pick a time",
  href = "/appointments/cpap-fitting",
  tone = "default",
}: {
  headline?: string;
  description?: string;
  ctaLabel?: string;
  href?: string;
  tone?: "default" | "compact";
}) {
  if (tone === "compact") {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-xl)] border border-[var(--color-copper-200)] bg-[var(--color-copper-50)] p-5">
        <div className="flex items-center gap-3">
          <Calendar className="size-5 text-[var(--color-copper-700)]" aria-hidden />
          <div>
            <div className="text-sm font-semibold text-[var(--color-ink)]">{headline}</div>
            <div className="text-xs text-[var(--color-muted)]">{description}</div>
          </div>
        </div>
        <Button asChild variant="accent" size="sm">
          <Link href={href}>
            {ctaLabel}
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="container-page py-16">
      <div className="grid gap-8 rounded-[var(--radius-2xl)] bg-[var(--color-navy-800)] p-8 text-white md:grid-cols-[1.2fr_1fr] md:p-12">
        <div>
          <Badge tone="copper" className="mb-4">
            <Calendar className="size-3.5" aria-hidden /> Appointments
          </Badge>
          <h2 className="text-white">{headline}</h2>
          <p className="mt-3 text-white/80">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <Link href={href}>
                {ctaLabel} <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Link href="/appointments">All appointment types</Link>
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 text-sm text-white/90">
          <li className="rounded-xl bg-white/10 p-4">
            <div className="font-semibold">30-minute appointment</div>
            <div className="mt-1 text-white/70">Long enough to try 2–3 mask styles.</div>
          </li>
          <li className="rounded-xl bg-white/10 p-4">
            <div className="font-semibold">HIPAA-compliant medical intake</div>
            <div className="mt-1 text-white/70">
              Secure intake form emailed after booking — your data never passes through this site.
            </div>
          </li>
          <li className="rounded-xl bg-white/10 p-4">
            <div className="font-semibold">No medical questions on booking</div>
            <div className="mt-1 text-white/70">We only need contact info to reserve your slot.</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
