import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, MapPin, ShieldCheck, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${SITE.name} is a family-operated home medical equipment store in Lake Oswego, Oregon, serving the Portland metro with mobility aids, CPAP, bath safety, and rentals — fitted by people, not a call center.`,
  alternates: { canonical: `${SITE.url}/about` },
};

const values = [
  {
    icon: Wrench,
    title: "We fit it, we don't just sell it",
    body: "A walker at the wrong height or a CPAP mask that leaks is worse than nothing. Our staff sizes, adjusts, and shows you how to use what you take home.",
  },
  {
    icon: ShieldCheck,
    title: "Honest about what you need",
    body: "Sometimes the right answer is the cheaper item, a rental instead of a purchase, or nothing at all. We'd rather earn a neighbor than make a sale.",
  },
  {
    icon: MapPin,
    title: "Local and accountable",
    body: "We live and work here. When something needs adjusting or replacing, you talk to the same people who helped you the first time — in the store or on the phone.",
  },
  {
    icon: HeartHandshake,
    title: "Here after the sale",
    body: "Supplies run out, needs change, and recovery has setbacks. We keep your equipment going and help you adjust as things change.",
  },
];

const brands = ["ResMed", "Medline", "Nova", "Pride Mobility", "JOBST"];

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="container-page py-16">
        <Badge tone="navy">About</Badge>
        <h1 className="mt-3 max-w-3xl">Neighbors who care.</h1>
        <p className="mt-6 max-w-2xl text-xl text-[var(--color-ink-soft)]">
          {SITE.legalName} is a family-operated home medical equipment store in{" "}
          {SITE.address.city}, Oregon. We help people recover, age in place, and care for
          the people they love — with equipment fitted by hand and advice you can trust.
        </p>
      </section>

      {/* Story */}
      <section className="bg-[var(--color-surface-warm)] py-20">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <Badge tone="copper">Our story</Badge>
            <h2 className="mt-3">Built for the moments that matter</h2>
          </div>
          <div className="prose-editorial">
            <p>
              Most people don&rsquo;t plan to buy medical equipment. It comes after a
              diagnosis, a fall, a surgery, or the slow realization that a parent needs more
              help at home. Those are stressful moments — and the last thing you need is a
              website cart and a call center.
            </p>
            <p>
              We built {SITE.name} to be the opposite of that: a real store, staffed by real
              people, where you can put your hands on the equipment, ask the awkward
              questions, and leave with something that actually fits your life. When you
              call, a neighbor answers. When you visit, someone walks the floor with you.
            </p>
            <p>
              We&rsquo;re proud to serve {SITE.address.city} and the greater Portland metro —
              including {SITE.areasServed.slice(1, -1).join(", ")}, and{" "}
              {SITE.areasServed[SITE.areasServed.length - 1]}.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20">
        <div className="max-w-2xl">
          <Badge tone="sage">What makes us different</Badge>
          <h2 className="mt-3">How we do business</h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <Icon className="size-6 text-[var(--color-copper-600)]" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-[var(--color-ink-soft)]">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Brands */}
      <section className="bg-[var(--color-navy-50)] py-16">
        <div className="container-page text-center">
          <h2 className="text-2xl">Brands we stand behind</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-ink-soft)]">
            We carry equipment from the manufacturers clinicians actually recommend — chosen
            for durability and fit, not just price.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-[var(--color-navy-700)]">
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="container-page py-20">
        <div className="grid items-center gap-12 rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] md:grid-cols-2 md:p-12">
          <div>
            <Badge tone="navy">Come say hello</Badge>
            <h2 className="mt-3">Stop by the store</h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              The easiest way to find the right equipment is to come in and try it. No
              appointment needed for our walk-in services, and there&rsquo;s always someone
              here to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <Link href="/contact">Get directions &amp; hours</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <address className="not-italic text-[var(--color-ink-soft)]">
            <div className="font-semibold text-[var(--color-ink)]">{SITE.name}</div>
            <div className="mt-2">
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            </div>
            <dl className="mt-6 space-y-1 text-sm">
              {SITE.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-6">
                  <dt>{h.day}</dt>
                  <dd className="text-[var(--color-muted)]">
                    {h.open && h.close ? `${h.open} – ${h.close}` : "Closed"}
                  </dd>
                </div>
              ))}
            </dl>
          </address>
        </div>
      </section>
    </>
  );
}
