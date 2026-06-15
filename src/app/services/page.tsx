import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sharps disposal, notary public, vaccinations and more — offered alongside our medical supply store in Lake Oswego.",
};

const services = [
  { slug: "sharps-disposal", name: "Sharps disposal" },
  { slug: "notary", name: "Notary public" },
  { slug: "vaccinations", name: "Vaccinations" },
];

export default function ServicesIndex() {
  return (
    <section className="container-page py-16">
      <Badge tone="sage">Services</Badge>
      <h1 className="mt-3">Walk-in services</h1>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-semibold">{s.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
