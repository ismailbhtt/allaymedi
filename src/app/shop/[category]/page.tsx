import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NAV } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/commerce/product-card";
import { PortableText } from "@/components/sanity/portable-text";
import { BookingCTA } from "@/components/appointments/booking-cta";
import { getAllSlugs, getCategoryBySlug } from "@/sanity/fetch";

export async function generateMetadata(
  props: PageProps<"/shop/[category]">
): Promise<Metadata> {
  const { category } = await props.params;
  const doc = await getCategoryBySlug(category);
  const fallback = NAV.categories.find((c) => c.href === `/shop/${category}`);
  const title = doc?.seo?.title ?? doc?.name ?? fallback?.label ?? "Category";
  const description =
    doc?.seo?.description ??
    doc?.description ??
    `Shop ${title.toLowerCase()} in Lake Oswego and across the Portland metro. Same-day pickup and FSA/HSA accepted.`;
  return { title, description };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  const fromSanity = slugs.categories.map((slug) => ({ category: slug }));
  const fromNav = NAV.categories.map((c) => ({
    category: c.href.replace("/shop/", ""),
  }));
  const unique = new Map<string, { category: string }>();
  [...fromSanity, ...fromNav].forEach((p) => unique.set(p.category, p));
  return Array.from(unique.values());
}

export default async function CategoryPage(props: PageProps<"/shop/[category]">) {
  const { category } = await props.params;
  const doc = await getCategoryBySlug(category);
  const fallback = NAV.categories.find((c) => c.href === `/shop/${category}`);
  if (!doc && !fallback) notFound();

  const name = doc?.name ?? fallback!.label;
  const headline = doc?.heroHeadline ?? name;
  const description =
    doc?.description ??
    `Everything we stock in ${name.toLowerCase()} — with same-day pickup in Lake Oswego.`;

  const showBookingCta = category === "cpap";

  return (
    <>
      <section className="container-page py-14">
        <Badge tone="navy">Category</Badge>
        <h1 className="mt-3">{headline}</h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">{description}</p>
        {showBookingCta ? (
          <div className="mt-8 max-w-2xl">
            <BookingCTA tone="compact" />
          </div>
        ) : null}
      </section>

      <section className="container-page pb-16">
        {doc?.products && doc.products.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doc.products.map((p) => (
              <li key={p._id}>
                <ProductCard product={p} categorySlug={category} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-10 text-center text-sm text-[var(--color-muted)]">
            Product catalog will appear here once seeded in Sanity.
          </div>
        )}
      </section>

      {doc?.educationalContent ? (
        <section className="container-page py-16">
          <div className="prose-editorial">
            <PortableText value={doc.educationalContent} />
          </div>
        </section>
      ) : null}

      {doc?.buyingGuide && doc.buyingGuide.length > 0 ? (
        <section className="container-page py-12">
          <h2 className="mb-6">Buying guide</h2>
          <dl className="grid gap-6 md:grid-cols-2">
            {doc.buyingGuide.map((f) => (
              <div key={f._id} className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-6">
                <dt className="text-lg font-semibold">{f.question}</dt>
                <dd className="prose-editorial mt-2">
                  <PortableText value={f.answer} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
    </>
  );
}
