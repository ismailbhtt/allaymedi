import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { SITE } from "@/lib/site";

const UPDATED = "June 15, 2026";

export const metadata: Metadata = {
  title: "Shipping & Local Pickup",
  description: `${SITE.name} shipping, local delivery, and in-store pickup options across Lake Oswego and the Portland metro.`,
  alternates: { canonical: `${SITE.url}/shipping` },
};

export default function ShippingPage() {
  return (
    <LegalPage
      eyebrow="Shipping & pickup"
      title="Shipping, delivery & pickup"
      intro="We're a local store first. That means free same-day pickup in Lake Oswego, delivery across the Portland metro, and shipping when that's what works best for you."
      updated={UPDATED}
    >
      <h2>In-store pickup &mdash; free</h2>
      <p>
        Order online and pick up at our Lake Oswego store at no charge. Most in-stock items
        are ready the same day. We&rsquo;ll let you know when your order is ready, and our
        staff can help you load anything bulky into your vehicle.
      </p>
      <p>
        {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
        {SITE.address.postalCode}
      </p>

      <h2>Local delivery &mdash; Portland metro</h2>
      <p>
        We offer local delivery and equipment setup throughout the Portland metro, including{" "}
        {SITE.areasServed.slice(0, -1).join(", ")}, and{" "}
        {SITE.areasServed[SITE.areasServed.length - 1]}.
        Delivery is ideal for larger items like hospital beds, ramps, and wheelchairs.
        Delivery fees depend on the item and your location — we&rsquo;ll confirm the cost and
        a delivery window when you order, or you can call{" "}
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> to arrange it.
      </p>

      <h2>Rentals</h2>
      <p>
        Rental equipment can be picked up in Lake Oswego or delivered locally. Reserve online
        and we&rsquo;ll coordinate the timing with you. See{" "}
        <Link href="/rentals">our rental catalog</Link> for available equipment and rates.
      </p>

      <h2>Standard shipping</h2>
      <p>
        For eligible packaged products, we ship within the contiguous United States.
      </p>
      <ul>
        <li>
          <strong>Processing:</strong> in-stock orders are prepared within 1&ndash;2
          business days.
        </li>
        <li>
          <strong>Transit:</strong> typically 3&ndash;7 business days after processing,
          depending on destination.
        </li>
        <li>
          <strong>Rates:</strong> calculated at checkout based on weight and destination.
        </li>
      </ul>
      <p>
        Bulky, oversized, or specialized equipment may not be available for standard
        shipping — for those, local delivery or pickup is the better route, and we&rsquo;ll
        make that clear before you order.
      </p>

      <h2>Prescription &amp; special-order items</h2>
      <p>
        Prescription equipment such as CPAP machines isn&rsquo;t sold through online checkout
        or shipped blindly. We arrange these with you directly so the equipment is verified
        and fitted properly. Call{" "}
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> to get started.
      </p>

      <h2>Tracking &amp; questions</h2>
      <p>
        You&rsquo;ll receive a confirmation when your order ships or is ready for pickup. If
        anything looks off, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call
        us — a real person here will sort it out.
      </p>
    </LegalPage>
  );
}
