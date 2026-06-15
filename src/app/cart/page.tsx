import type { Metadata } from "next";

import { CartView } from "@/components/commerce/cart-view";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your items and check out securely.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <section className="container-page py-12">
      <h1>Your cart</h1>
      <div className="mt-8">
        <CartView />
      </div>
    </section>
  );
}
