import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClipboardList } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PortableText } from "@/components/sanity/portable-text";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { JsonLdScript } from "@/lib/seo/jsonld";
import { getServiceBySlug, getAllServices } from "@/sanity/fetch";
import { SITE } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/services/[service]">
): Promise<Metadata> {
  const { service } = await props.params;
  const doc = await getServiceBySlug(service);
  return {
    title: doc?.seo?.title ?? doc?.name ?? service.replace(/-/g, " "),
    description:
      doc?.seo?.description ?? doc?.summary ?? "Walk-in service at Allay Medical Solutions.",
  };
}

export async function generateStaticParams() {
  const docs = await getAllServices();
  const fromSanity = docs.map((s) => ({ service: s.slug }));
  const fallback = [
    { service: "sharps-disposal" },
    { service: "notary" },
    { service: "vaccinations" },
  ];
  const unique = new Map<string, { service: string }>();
  [...fromSanity, ...fallback].forEach((p) => unique.set(p.service, p));
  return Array.from(unique.values());
}

export default async function ServiceDetailPage(
  props: PageProps<"/services/[service]">
) {
  const { service } = await props.params;
  const doc = await getServiceBySlug(service);
  if (!doc) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: doc.name,
    description: doc.summary,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: SITE.areasServed.map((c) => ({ "@type": "City", name: c })),
  };

  return (
    <>
      <section className="container-page py-14">
        <Badge tone="sage">Service</Badge>
        <h1 className="mt-3">{doc.name}</h1>
        {doc.summary ? (
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            {doc.summary}
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <a href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay}</a>
          </Button>
          <Button asChild variant="outline">
            <a href={SITE.socials.google} target="_blank" rel="noopener">
              Directions
            </a>
          </Button>
        </div>
        {doc.pricingNote ? (
          <p className="mt-6 text-sm text-[var(--color-muted)]">{doc.pricingNote}</p>
        ) : null}

        {service === "vaccinations" ? (
          <div className="mt-8 flex flex-col gap-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ClipboardList className="mt-0.5 size-5 shrink-0 text-[var(--color-navy-700)]" aria-hidden />
              <div>
                <p className="font-semibold text-[var(--color-ink)]">
                  Save time — complete your screening form first
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  Submitted securely to our HIPAA-compliant intake system.
                </p>
              </div>
            </div>
            <Button asChild variant="accent">
              <Link href="/vaccine-screening">Start screening form</Link>
            </Button>
          </div>
        ) : null}
      </section>

      {doc.heroImage ? (
        <section className="container-page">
          <div className="relative aspect-[2/1] overflow-hidden rounded-[var(--radius-2xl)]">
            <SanityImageRender
              image={doc.heroImage}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </section>
      ) : null}

      {doc.body ? (
        <section className="container-page py-10">
          <div className="prose-editorial">
            <PortableText value={doc.body} />
          </div>
        </section>
      ) : null}

      {doc.faqs && doc.faqs.length > 0 ? (
        <section className="container-page py-10">
          <h2 className="mb-6">Frequently asked</h2>
          <dl className="divide-y divide-[var(--color-border)] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
            {doc.faqs.map((f) => (
              <div key={f._id} className="p-6">
                <dt className="text-lg font-semibold">{f.question}</dt>
                <dd className="prose-editorial mt-2">
                  <PortableText value={f.answer} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <JsonLdScript data={schema} id={`ld-service-${service}`} />
    </>
  );
}
