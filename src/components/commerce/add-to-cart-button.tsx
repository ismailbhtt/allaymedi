"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShoppingBag, Store } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

type Props = {
  productId: string;
  productName: string;
  priceCents: number;
  stripePriceId?: string;
  inStoreOnly: boolean;
  slug: string;
  categorySlug: string;
  image?: { src: string; alt: string };
};

export function AddToCartButton({
  productId,
  productName,
  priceCents,
  stripePriceId,
  inStoreOnly,
  slug,
  categorySlug,
}: Props) {
  const { add, isHydrated } = useCart();
  const [added, setAdded] = useState(false);

  if (inStoreOnly) {
    return (
      <Button asChild variant="primary" size="lg">
        <Link href={`/contact?product=${encodeURIComponent(productName)}`}>
          <Store className="size-4" aria-hidden />
          In-store pickup only · Reserve
        </Link>
      </Button>
    );
  }

  return (
    <>
      <Button
        type="button"
        variant="primary"
        size="lg"
        disabled={!isHydrated}
        onClick={() => {
          add(
            {
              productId,
              name: productName,
              priceCents,
              stripePriceId,
              inStoreOnly,
              slug,
              categorySlug,
            },
            1
          );
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1800);
        }}
      >
        {added ? (
          <>
            <Check className="size-4" aria-hidden />
            Added
          </>
        ) : (
          <>
            <ShoppingBag className="size-4" aria-hidden />
            Add to cart
          </>
        )}
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link href="/cart">View cart</Link>
      </Button>
    </>
  );
}
