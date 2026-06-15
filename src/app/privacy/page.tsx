import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { SITE } from "@/lib/site";

const UPDATED = "June 15, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects the limited information you share with us online. We collect no protected health information through this website.`,
  alternates: { canonical: `${SITE.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="We keep this short and honest. This website collects only what it needs to answer your questions and process orders — and no medical information."
      updated={UPDATED}
    >
      <p>
        This Privacy Policy explains how {SITE.legalName} (&ldquo;Allay,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us&rdquo;) handles information collected through{" "}
        <strong>{SITE.url.replace(/^https?:\/\//, "")}</strong>. It applies to this
        website only. Information you share with us in the store, over the phone, or as
        part of a pharmacy or insurance-billed transaction is governed separately — see
        our <Link href="/hipaa">HIPAA Notice</Link>.
      </p>

      <h2>No protected health information online</h2>
      <p>
        This website is not a patient portal. We do <strong>not</strong> collect
        prescriptions, insurance details, diagnoses, or any other protected health
        information (PHI) through it. Products that require a prescription — such as CPAP
        machines — are arranged by phone or in person, never through an online upload form.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact form.</strong> When you send us a message, we collect your name,
          email, phone (if provided), and what you write. Please don&rsquo;t include
          medical details in this form.
        </li>
        <li>
          <strong>Rental &amp; appointment requests.</strong> To reserve equipment or book
          a fitting, we collect your name, phone, email, the equipment or service, and your
          preferred date.
        </li>
        <li>
          <strong>Purchases.</strong> Online payments are processed by Stripe. Your card
          number is entered on Stripe&rsquo;s secure checkout and is never stored on our
          servers. We receive only an order confirmation, the items, and a billing
          contact.
        </li>
        <li>
          <strong>Analytics.</strong> We use Plausible Analytics, which is
          privacy-friendly: it sets no cookies and does not track or identify you across
          sites. We do <strong>not</strong> use Google Analytics.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To answer your questions and provide quotes or availability.</li>
        <li>To fulfill rentals, appointments, and online orders.</li>
        <li>To send transactional email (order and booking confirmations) via Resend.</li>
        <li>To understand, in aggregate, which pages are useful — never to profile you.</li>
      </ul>

      <h2>What we never do</h2>
      <ul>
        <li>We never sell or rent your personal information.</li>
        <li>We never run advertising trackers or third-party ad pixels on this site.</li>
        <li>We never share your information except with the service providers below, as
          needed to operate the site.</li>
      </ul>

      <h2>Service providers we rely on</h2>
      <p>
        We share the minimum necessary information with vetted vendors that help us run the
        site: <strong>Stripe</strong> (payments), <strong>Resend</strong> (email
        delivery), <strong>Sanity</strong> (content), <strong>Vercel</strong> (hosting),
        and <strong>Plausible</strong> (cookieless analytics). Each processes data only on
        our behalf.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can ask us what information we hold about you, request a correction, or ask us
        to delete it. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> and we&rsquo;ll take care
        of it. Because the site sets no advertising cookies, there is nothing to opt out of
        for tracking.
      </p>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep order and rental records as long as needed for service, warranty, and
        recordkeeping obligations, then dispose of them securely. We use industry-standard
        safeguards, but no method of transmission over the internet is perfectly secure.
      </p>

      <h2>Children</h2>
      <p>
        This site is intended for adults. We do not knowingly collect information from
        children under 13.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as our services change. We&rsquo;ll revise the
        &ldquo;last updated&rdquo; date above when we do.
      </p>

      <h2>Contact us</h2>
      <p>
        {SITE.legalName}
        <br />
        {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
        {SITE.address.postalCode}
        <br />
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> &middot;{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
    </LegalPage>
  );
}
