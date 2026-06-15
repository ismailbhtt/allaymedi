import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/commerce/product-card";
import { PortableText } from "@/components/sanity/portable-text";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { BookingCTA } from "@/components/appointments/booking-cta";
import { JsonLdScript } from "@/lib/seo/jsonld";
import { getAllConditions, getConditionBySlug } from "@/sanity/fetch";
import { NAV } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/conditions/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = await getConditionBySlug(slug);
  if (!doc) {
    const fallback = NAV.conditions.find((c) => c.href === `/conditions/${slug}`);
    return { title: fallback?.label ?? "Condition guide" };
  }
  return {
    title: doc.seo?.title ?? doc.name,
    description:
      doc.seo?.description ??
      doc.heroIntro ??
      `Equipment and caregiver guidance for ${doc.name.toLowerCase()}.`,
  };
}

export async function generateStaticParams() {
  const conditions = await getAllConditions();
  const fromSanity = conditions.map((c) => ({ slug: c.slug }));
  const fromNav = NAV.conditions.map((c) => ({
    slug: c.href.replace("/conditions/", ""),
  }));
  const unique = new Map<string, { slug: string }>();
  [...fromSanity, ...fromNav].forEach((p) => unique.set(p.slug, p));
  return Array.from(unique.values());
}

export default async function ConditionPage(
  props: PageProps<"/conditions/[slug]">
) {
  const { slug } = await props.params;
  const doc = await getConditionBySlug(slug);
  const fallback = NAV.conditions.find((c) => c.href === `/conditions/${slug}`);
  if (!doc && !fallback) notFound();

  // Filter out any references that didn't resolve (e.g. a product removed in
  // the CMS) so a dangling ref can't crash the render.
  const recommendedProducts = (doc?.recommendedProducts ?? []).filter(Boolean);

  const name = doc?.name ?? fallback!.label;
  const headline = doc?.heroHeadline ?? name;
  const intro =
    doc?.heroIntro ??
    `Clear, stocked-today equipment for ${name.toLowerCase()} — plus caregiver guidance, all in one place.`;

  const faqJsonLd =
    doc?.faqs && doc.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: doc.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: extractPlainText(f.answer),
            },
          })),
        }
      : null;

  return (
    <>
      <section className="bg-[var(--color-surface-cool)]">
        <div className="container-page grid items-center gap-12 py-16 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Badge tone="navy">Condition guide</Badge>
            <h1 className="mt-3">{headline}</h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">{intro}</p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[var(--radius-2xl)] bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-copper-100)]">
            {doc?.heroImage ? (
              <SanityImageRender
                image={doc.heroImage}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : null}
          </div>
        </div>
      </section>

      {slug === "sleep-apnea" ? <BookingCTA /> : null}

      {recommendedProducts.length > 0 ? (
        <section className="container-page py-16">
          <h2 className="mb-8">What you&apos;ll need</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {recommendedProducts.map((p) => (
              <li key={p._id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {doc?.educationalContent ? (
        <section className="container-page py-16">
          <div className="prose-editorial">
            <PortableText value={doc.educationalContent} />
          </div>
        </section>
      ) : null}

      {doc?.faqs && doc.faqs.length > 0 ? (
        <section className="container-page py-16">
          <h2 className="mb-8">Frequently asked</h2>
          <dl className="divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
            {doc.faqs.map((f) => (
              <div key={f._id} className="p-6">
                <dt className="text-lg font-semibold text-[var(--color-ink)]">
                  {f.question}
                </dt>
                <dd className="prose-editorial mt-2 max-w-none text-[var(--color-ink-soft)]">
                  <PortableText value={f.answer} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {faqJsonLd ? <JsonLdScript data={faqJsonLd} id={`ld-faq-${slug}`} /> : null}
    </>
  );
}

function extractPlainText(blocks: unknown): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((b) => {
      const block = b as { _type?: string; children?: { text?: string }[] };
      if (block._type !== "block") return "";
      return block.children?.map((c) => c.text ?? "").join("") ?? "";
    })
    .filter(Boolean)
    .join(" ");
}
