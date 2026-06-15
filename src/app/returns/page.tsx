import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { SITE } from "@/lib/site";

const UPDATED = "June 15, 2026";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description: `${SITE.name} return policy for home medical equipment. 30 days on unopened items, with health and safety exceptions explained clearly.`,
  alternates: { canonical: `${SITE.url}/returns` },
};

export default function ReturnsPage() {
  return (
    <LegalPage
      eyebrow="Returns"
      title="Returns & exchanges"
      intro="Medical supplies come with health-and-safety rules that ordinary retail returns don't. Here's exactly what can come back, what can't, and why."
      updated={UPDATED}
    >
      <h2>The short version</h2>
      <ul>
        <li>
          <strong>Unopened, unused items:</strong> return or exchange within{" "}
          <strong>30 days</strong> with your receipt.
        </li>
        <li>
          <strong>Opened hygiene &amp; personal-care items:</strong> non-returnable once the
          seal is broken — for everyone&rsquo;s safety.
        </li>
        <li>
          <strong>Defective items:</strong> we&rsquo;ll repair, replace, or refund per the
          manufacturer&rsquo;s warranty.
        </li>
      </ul>

      <h2>Items we cannot accept back once opened</h2>
      <p>
        For health and safety reasons — and in line with standard practice for home medical
        equipment — the following cannot be returned or exchanged once opened, used, or with
        a broken seal:
      </p>
      <ul>
        <li>CPAP masks, cushions, tubing, filters, and other respiratory supplies</li>
        <li>Incontinence products</li>
        <li>Wound-care dressings and supplies</li>
        <li>Compression garments that have been worn</li>
        <li>Bathroom safety items that contact the body (commodes, bath benches once used)</li>
        <li>Any item marked &ldquo;final sale&rdquo; or &ldquo;non-returnable&rdquo; at
          purchase</li>
      </ul>
      <p>
        If you&rsquo;re unsure whether something will work for you, ask us before you open
        it — we&rsquo;re happy to help you choose right the first time.
      </p>

      <h2>Items eligible for return</h2>
      <p>
        Unopened, unused products in their original packaging may be returned or exchanged
        within 30 days of purchase with proof of purchase. Mobility equipment (walkers,
        rollators, wheelchairs, scooters) may be returned within 30 days if unused and in
        resalable condition; a restocking fee may apply to large or special-order items.
      </p>

      <h2>Prescription &amp; special-order equipment</h2>
      <p>
        Prescription items (such as CPAP machines) and made-to-order or specially ordered
        equipment are generally non-returnable except for a verified manufacturer defect.
        Because these are arranged with you directly rather than through online checkout,
        we&rsquo;ll always confirm the terms with you before placing the order.
      </p>

      <h2>Defective or damaged on arrival</h2>
      <p>
        If an item is defective or arrives damaged, contact us within{" "}
        <strong>7 days</strong>. We&rsquo;ll arrange a repair, replacement, or refund and
        coordinate any manufacturer warranty claim on your behalf.
      </p>

      <h2>Refunds</h2>
      <p>
        Approved refunds are issued to your original payment method. Online card payments
        are refunded through Stripe and typically post within 5&ndash;10 business days,
        depending on your bank. Original shipping charges are non-refundable unless the
        return is due to our error.
      </p>

      <h2>FSA / HSA purchases</h2>
      <p>
        Many of our products are FSA/HSA eligible. Refunds on items bought with an FSA or
        HSA card are returned to that same card to keep your account records consistent.
      </p>

      <h2>How to start a return</h2>
      <ol>
        <li>Bring your item and receipt to our Lake Oswego store, or call us first if
          that&rsquo;s easier.</li>
        <li>
          Reach us at <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> or{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </li>
        <li>We&rsquo;ll confirm eligibility and walk you through the next step.</li>
      </ol>

      <p>
        Questions about a specific item? <Link href="/contact">Contact us</Link> — it&rsquo;s
        almost always faster to ask before you buy.
      </p>
    </LegalPage>
  );
}
