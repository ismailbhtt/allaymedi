"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartView() {
  const { items, updateQuantity, remove, subtotalCents, isHydrated } = useCart();
  const [checkoutState, setCheckoutState] = useState<"idle" | "loading" | "error">("idle");

  if (!isHydrated) {
    return <div className="text-[var(--color-muted)]">Loading cart…</div>;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-10 text-center">
        <p className="text-[var(--color-muted)]">Your cart is empty.</p>
        <Button asChild variant="primary" className="mt-6">
          <Link href="/shop">Browse the shop</Link>
        </Button>
      </div>
    );
  }

  async function checkout() {
    setCheckoutState("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.productId,
            name: i.name,
            priceCents: i.priceCents,
            stripePriceId: i.stripePriceId,
            quantity: i.quantity,
          })),
        }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL");
      }
    } catch {
      setCheckoutState("error");
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-[var(--color-border)] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white">
        {items.map((item) => (
          <li key={item.productId} className="flex items-center gap-4 p-5">
            <div className="h-16 w-16 shrink-0 rounded-lg bg-[var(--color-surface-cool)]" />
            <div className="flex-1">
              <Link
                href={`/shop/${item.categorySlug}/${item.slug}`}
                className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-navy-700)]"
              >
                {item.name}
              </Link>
              <div className="mt-1 text-sm text-[var(--color-muted)]">
                {formatPrice(item.priceCents)} each
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] p-1">
              <button
                type="button"
                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                className="grid size-8 place-items-center rounded-full hover:bg-[var(--color-surface-warm)]"
                aria-label="Decrease quantity"
              >
                <Minus className="size-4" aria-hidden />
              </button>
              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                className="grid size-8 place-items-center rounded-full hover:bg-[var(--color-surface-warm)]"
                aria-label="Increase quantity"
              >
                <Plus className="size-4" aria-hidden />
              </button>
            </div>
            <div className="w-24 text-right font-semibold">
              {formatPrice(item.priceCents * item.quantity)}
            </div>
            <button
              type="button"
              onClick={() => remove(item.productId)}
              className="grid size-8 place-items-center rounded-full text-[var(--color-muted)] hover:bg-[var(--color-surface-warm)] hover:text-[var(--color-danger)]"
              aria-label={`Remove ${item.name}`}
            >
              <Trash2 className="size-4" aria-hidden />
            </button>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
        <h2 className="text-lg font-semibold">Summary</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-[var(--color-muted)]">Subtotal</dt>
            <dd className="font-semibold">{formatPrice(subtotalCents)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-[var(--color-muted)]">Tax &amp; shipping</dt>
            <dd className="text-[var(--color-muted)]">Calculated at checkout</dd>
          </div>
        </dl>
        <Badge tone="copper" className="mt-4">
          FSA/HSA cards accepted
        </Badge>
        <Button
          type="button"
          onClick={checkout}
          variant="accent"
          size="lg"
          className="mt-6 w-full"
          disabled={checkoutState === "loading"}
        >
          {checkoutState === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Starting checkout…
            </>
          ) : (
            "Secure checkout"
          )}
        </Button>
        {checkoutState === "error" ? (
          <p className="mt-3 text-sm text-[var(--color-danger)]">
            Checkout couldn&apos;t start — please call (971) 233-8121.
          </p>
        ) : null}
        <p className="mt-4 text-xs text-[var(--color-muted)]">
          Stripe handles all payments. Allay never sees your card details.
        </p>
      </aside>
    </div>
  );
}
