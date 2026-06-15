import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { VaccineScreeningForm } from "@/components/forms/vaccine-screening-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vaccine Screening & Consent Form",
  description:
    "Complete your vaccine screening questionnaire and consent before your visit to Allay Medical Solutions.",
  // Intake form — keep out of search indexes.
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE.url}/vaccine-screening` },
};

export default function VaccineScreeningPage() {
  return (
    <section className="container-page py-14">
      <Badge tone="navy">Vaccinations</Badge>
      <h1 className="mt-3 max-w-3xl">Vaccine screening &amp; consent form</h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)]">
        Completing this before your visit saves time at the counter. Your pharmacist will
        review it with you and answer any questions before administering a vaccine.
      </p>

      <div className="mt-6 flex items-start gap-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-5 text-sm text-[var(--color-ink-soft)]">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[var(--color-sage-700)]" aria-hidden />
        <p>
          This form asks for protected health information. It is submitted only to our
          secure, HIPAA-compliant intake system &mdash; never stored in our website&rsquo;s
          email or content tools. Read our{" "}
          <Link href="/hipaa">HIPAA &amp; health information notice</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>

      <div className="mt-10 max-w-3xl">
        <VaccineScreeningForm />
      </div>

      <p className="mt-10 max-w-2xl text-xs text-[var(--color-muted)]">
        Prefer paper? You can also complete this screening when you arrive in store, or call{" "}
        <a href={`tel:${SITE.phoneHref}`} className="underline">
          {SITE.phoneDisplay}
        </a>{" "}
        with any questions. The pharmacy-use section (vaccine lot, administration details) is
        completed by our staff at the time of your visit.
      </p>
    </section>
  );
}
