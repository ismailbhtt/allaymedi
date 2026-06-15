import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations we serve across the Portland metro",
  description:
    "Allay Medical Solutions serves Lake Oswego, Portland, Tigard, Tualatin, West Linn, Beaverton, Oregon City and Milwaukie with same-day pickup and local delivery.",
};

export default function LocationsIndex() {
  return (
    <section className="container-page py-16">
      <Badge tone="navy">Locations</Badge>
      <h1 className="mt-3">Portland metro home medical equipment</h1>
      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SITE.areasServed.map((city) => {
          const slug = city.toLowerCase().replace(/\s+/g, "-");
          return (
            <li key={slug}>
              <Link
                href={`/locations/${slug}`}
                className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <h2 className="text-xl font-semibold">{city}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
