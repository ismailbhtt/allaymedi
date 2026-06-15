import type { Metadata } from "next";
import Link from "next/link";

import { NAV } from "@/lib/site";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Shop medical equipment & supplies",
  description:
    "Browse mobility aids, CPAP, bath safety, compression, wound care, incontinence and daily living supplies. Same-day pickup in Lake Oswego.",
};

export default function ShopIndexPage() {
  return (
    <section className="container-page py-16">
      <Badge tone="navy">Shop</Badge>
      <h1 className="mt-3">All categories</h1>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {NAV.categories.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-semibold">{c.label}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
