"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { useCart } from "@/lib/cart-context";

export function CartLink() {
  const { count, isHydrated } = useCart();
  return (
    <Link
      href="/cart"
      aria-label={`Cart${count > 0 ? ` (${count} items)` : ""}`}
      className="relative inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] hover:bg-[var(--color-surface-warm)]"
    >
      <ShoppingBag className="size-5" aria-hidden />
      {isHydrated && count > 0 ? (
        <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-[var(--color-copper-600)] px-1.5 text-xs font-semibold text-white">
          {count}
        </span>
      ) : null}
    </Link>
  );
}
