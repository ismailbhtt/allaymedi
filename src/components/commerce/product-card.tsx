import Link from "next/link";

import type { ProductSummary } from "@/sanity/fetch";
import { Badge } from "@/components/ui/badge";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { formatPrice } from "@/lib/utils";

export function ProductCard({
  product,
  categorySlug,
}: {
  product: ProductSummary;
  categorySlug?: string;
}) {
  const slug = categorySlug ?? product.categorySlug;
  const href = slug
    ? `/shop/${slug}/${product.slug}`
    : `/shop/all/${product.slug}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface-cool)]">
        {product.image ? (
          <SanityImageRender
            image={product.image}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform group-hover:scale-[1.03]"
          />
        ) : null}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.fsaEligible ? <Badge tone="copper">FSA/HSA</Badge> : null}
          {product.rentalAvailable ? <Badge tone="sage">Rent it</Badge> : null}
        </div>
        {!product.inStock ? (
          <div className="absolute right-3 top-3">
            <Badge tone="neutral">Out of stock</Badge>
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        {product.manufacturer ? (
          <span className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
            {product.manufacturer}
          </span>
        ) : null}
        <h3 className="mt-1 text-base font-semibold leading-snug text-[var(--color-ink)]">
          {product.name}
        </h3>
        {product.shortDescription ? (
          <p className="mt-2 line-clamp-2 text-sm text-[var(--color-muted)]">
            {product.shortDescription}
          </p>
        ) : null}
        <div className="mt-auto flex items-end justify-between pt-4">
          <span className="text-base font-semibold text-[var(--color-navy-800)]">
            {product.regulated ? "Call for pricing" : formatPrice(product.priceCents)}
          </span>
          {product.regulated ? (
            <span className="text-xs text-[var(--color-muted)]">Rx / fitting</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
