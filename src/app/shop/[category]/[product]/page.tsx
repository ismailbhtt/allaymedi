import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ShieldCheck, Store, Truck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/commerce/product-card";
import { AddToCartButton } from "@/components/commerce/add-to-cart-button";
import { PortableText } from "@/components/sanity/portable-text";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { JsonLdScript } from "@/lib/seo/jsonld";
import { SITE } from "@/lib/site";
import { formatPrice } from "@/lib/utils";
import {
  getAllProductsStaticParams,
  getProductBySlug,
} from "@/sanity/fetch";

export async function generateMetadata(
  props: PageProps<"/shop/[category]/[product]">
): Promise<Metadata> {
  const { product } = await props.params;
  const doc = await getProductBySlug(product);
  if (!doc) return { title: "Product" };
  return {
    title: doc.seo?.title ?? doc.name,
    description:
      doc.seo?.description ??
      doc.shortDescription ??
      `${doc.name} — available at Allay Medical Solutions in Lake Oswego.`,
  };
}

export async function generateStaticParams() {
  const params = await getAllProductsStaticParams();
  return params
    .filter((p) => p.productSlug && p.categorySlug)
    .map((p) => ({ category: p.categorySlug, product: p.productSlug }));
}

export default async function ProductPage(
  props: PageProps<"/shop/[category]/[product]">
) {
  const { category, product } = await props.params;
  const doc = await getProductBySlug(product);
  if (!doc) notFound();

  const heroImage = doc.images?.[0] ?? doc.image;
  const price = doc.regulated ? null : doc.priceCents;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: doc.name,
    sku: doc.sku,
    brand: doc.manufacturer ? { "@type": "Brand", name: doc.manufacturer } : undefined,
    description: doc.shortDescription,
    offers:
      price != null
        ? {
            "@type": "Offer",
            priceCurrency: "USD",
            price: (price / 100).toFixed(2),
            availability: doc.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
            url: `${SITE.url}/shop/${category}/${doc.slug}`,
            seller: { "@type": "Organization", name: SITE.name },
          }
        : undefined,
  };

  return (
    <>
      <section className="container-page py-10">
        <nav className="text-sm text-[var(--color-muted)]" aria-label="Breadcrumb">
          <Link href="/shop" className="hover:text-[var(--color-ink)]">Shop</Link>
          {" / "}
          <Link
            href={`/shop/${category}`}
            className="capitalize hover:text-[var(--color-ink)]"
          >
            {doc.category?.name ?? category.replace(/-/g, " ")}
          </Link>
          {" / "}
          <span className="text-[var(--color-ink)]">{doc.name}</span>
        </nav>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-[var(--radius-xl)] bg-[var(--color-surface-cool)]">
              {heroImage ? (
                <SanityImageRender image={heroImage} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-6" />
              ) : null}
            </div>
            {doc.images && doc.images.length > 1 ? (
              <ul className="grid grid-cols-4 gap-3">
                {doc.images.slice(1, 5).map((img, i) => (
                  <li
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-xl bg-[var(--color-surface-cool)]"
                  >
                    <SanityImageRender image={img} fill sizes="160px" className="object-contain p-2" />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              {doc.manufacturer ? (
                <Badge tone="neutral">{doc.manufacturer}</Badge>
              ) : null}
              {doc.fsaEligible ? <Badge tone="copper">FSA/HSA eligible</Badge> : null}
              {doc.inStock ? (
                <Badge tone="sage">In stock today</Badge>
              ) : (
                <Badge tone="neutral">Out of stock</Badge>
              )}
              {doc.rentalAvailable ? <Badge tone="navy">Available to rent</Badge> : null}
            </div>

            <h1 className="mt-4 text-balance">{doc.name}</h1>

            {doc.shortDescription ? (
              <p className="mt-3 text-lg text-[var(--color-ink-soft)]">
                {doc.shortDescription}
              </p>
            ) : null}

            <div className="mt-6 text-2xl font-semibold text-[var(--color-navy-800)]">
              {doc.regulated ? "Call or visit for pricing" : formatPrice(doc.priceCents)}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {doc.regulated ? (
                <>
                  <Button asChild variant="primary" size="lg">
                    <a href={`tel:${SITE.phoneHref}`}>
                      <Phone className="size-4" aria-hidden />
                      Call {SITE.phoneDisplay}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={SITE.socials.google} target="_blank" rel="noopener">
                      <Store className="size-4" aria-hidden /> Visit in store
                    </a>
                  </Button>
                </>
              ) : (
                <AddToCartButton
                  productId={doc._id}
                  productName={doc.name}
                  priceCents={doc.priceCents ?? 0}
                  stripePriceId={doc.stripePriceId}
                  inStoreOnly={!!doc.inStoreOnly}
                  image={heroImage?.asset ? { src: "", alt: heroImage.alt } : undefined}
                  slug={doc.slug}
                  categorySlug={category}
                />
              )}
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-[var(--color-ink-soft)]">
              <li className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-[var(--color-sage-500)]" aria-hidden />
                Sold by a family-run medical supply store since 2011
              </li>
              <li className="flex items-center gap-2">
                <Store className="size-4 text-[var(--color-copper-600)]" aria-hidden />
                Free in-store pickup at our Lake Oswego location
              </li>
              {!doc.inStoreOnly ? (
                <li className="flex items-center gap-2">
                  <Truck className="size-4 text-[var(--color-navy-600)]" aria-hidden />
                  Ships across Oregon, flat-rate via USPS or UPS
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </section>

      {doc.longDescription ? (
        <section className="container-page py-10">
          <div className="prose-editorial">
            <h2>About this product</h2>
            <PortableText value={doc.longDescription} />
          </div>
        </section>
      ) : null}

      {doc.specs && doc.specs.length > 0 ? (
        <section className="container-page py-10">
          <h2 className="mb-6">Specifications</h2>
          <dl className="grid gap-0 divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white md:grid-cols-2 md:divide-x md:divide-y-0">
            {doc.specs.map((s, i) => (
              <div key={i} className="flex items-center justify-between gap-4 p-4">
                <dt className="text-sm font-medium text-[var(--color-muted)]">
                  {s.label}
                </dt>
                <dd className="text-sm font-semibold text-[var(--color-ink)]">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {doc.relatedProducts && doc.relatedProducts.length > 0 ? (
        <section className="container-page py-16">
          <h2 className="mb-6">Often bought together</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {doc.relatedProducts.map((p) => (
              <li key={p._id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <JsonLdScript data={jsonLd} id={`ld-product-${doc._id}`} />
    </>
  );
}
