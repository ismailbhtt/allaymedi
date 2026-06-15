import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/layout/legal-page";
import { SITE } from "@/lib/site";

const UPDATED = "June 15, 2026";

export const metadata: Metadata = {
  title: "HIPAA & Health Information",
  description: `How ${SITE.name} protects your health information. This website collects no protected health information; our full Notice of Privacy Practices is available in store.`,
  alternates: { canonical: `${SITE.url}/hipaa` },
};

export default function HipaaPage() {
  return (
    <LegalPage
      eyebrow="Health information"
      title="HIPAA & your health information"
      intro="A plain-language summary of how we treat health information — and a clear note on what this website does and doesn't do."
      updated={UPDATED}
    >
      <h2>This website does not collect health information</h2>
      <p>
        {SITE.legalName} built this site to be a storefront and a resource — not a medical
        portal. You cannot, and should not, submit prescriptions, insurance information,
        diagnoses, or any other protected health information (PHI) through it. Our forms ask
        only for a name, contact details, the product or service you&rsquo;re interested in,
        and a preferred date.
      </p>
      <p>
        Because no PHI is collected online, the website itself falls outside the scope of a
        HIPAA-covered transaction. For how we handle the limited, non-medical information
        the site does collect, see our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Where HIPAA does apply</h2>
      <p>
        When you fill a prescription, set up insurance-billed equipment, or share health
        details with our staff in the store or over the phone, that information{" "}
        <strong>is</strong> protected health information and is handled under HIPAA and
        applicable Oregon law. We:
      </p>
      <ul>
        <li>Use and disclose PHI only for treatment, payment, and health-care operations,
          or as you authorize.</li>
        <li>Share only the minimum necessary information to do the job.</li>
        <li>Train our staff on safeguarding health information.</li>
        <li>Keep physical, technical, and administrative protections in place.</li>
      </ul>

      <h2>Prescription-required products</h2>
      <p>
        Items that require a prescription — such as CPAP machines and certain complex
        equipment — are never sold through online checkout. We arrange them with you
        directly so a qualified team member can verify the prescription and fit the
        equipment properly. Call{" "}
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> or visit us to get started.
      </p>

      <h2>Your rights over your health information</h2>
      <p>When we hold PHI about you, you have the right to:</p>
      <ul>
        <li>Inspect and request a copy of your records.</li>
        <li>Request corrections to information you believe is inaccurate.</li>
        <li>Request restrictions on certain uses and disclosures.</li>
        <li>Ask for confidential communications through a specific channel.</li>
        <li>Receive an accounting of certain disclosures.</li>
        <li>Get a paper copy of our full Notice of Privacy Practices on request.</li>
      </ul>

      <h2>Our Notice of Privacy Practices</h2>
      <p>
        Our complete Notice of Privacy Practices describes in detail how we may use and
        disclose health information and your rights regarding it. A copy is available at the
        counter and on request — call{" "}
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> or email{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and we&rsquo;ll provide one.
      </p>

      <h2>Questions or concerns</h2>
      <p>
        If you have a question about your health information, or believe your privacy rights
        have been violated, please contact us. You will not be penalized for raising a
        concern.
      </p>
      <p>
        {SITE.legalName}
        <br />
        {SITE.address.street}, {SITE.address.city}, {SITE.address.region}{" "}
        {SITE.address.postalCode}
        <br />
        <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> &middot;{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <p className="text-sm text-[var(--color-muted)]">
        This page is a plain-language summary for your convenience and is not a substitute
        for our full Notice of Privacy Practices.
      </p>
    </LegalPage>
  );
}
