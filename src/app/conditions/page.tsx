import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { NAV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Condition guides",
  description:
    "Equipment recommendations and caregiver guides by condition — sleep apnea, post-surgical recovery, mobility support, and more.",
};

export default function ConditionsIndex() {
  return (
    <section className="container-page py-16">
      <Badge tone="navy">Conditions</Badge>
      <h1 className="mt-3">Start with what you&apos;re facing</h1>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {NAV.conditions.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-semibold">{c.label}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
