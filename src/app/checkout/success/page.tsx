import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ClearCartOnMount } from "@/components/commerce/clear-cart-on-mount";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function CheckoutSuccessPage() {
  return (
    <section className="container-page py-20 text-center">
      <ClearCartOnMount />
      <CheckCircle2 className="mx-auto size-12 text-[var(--color-sage-700)]" aria-hidden />
      <h1 className="mt-4">Thank you for your order.</h1>
      <p className="mt-4 mx-auto max-w-xl text-[var(--color-ink-soft)]">
        You&apos;ll receive a confirmation email from Stripe. We&apos;ll pack and
        ship (or set aside for pickup) within one business day. Questions?
        Call us at (971) 233-8121.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button asChild variant="primary">
          <Link href="/shop">Keep shopping</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Home</Link>
        </Button>
      </div>
    </section>
  );
}
