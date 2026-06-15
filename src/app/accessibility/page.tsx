import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { SITE } from "@/lib/site";

const UPDATED = "June 15, 2026";

export const metadata: Metadata = {
  title: "Accessibility",
  description: `${SITE.name} is committed to making both our store and our website usable for everyone. Read our accessibility commitment and how to request assistance.`,
  alternates: { canonical: `${SITE.url}/accessibility` },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Our accessibility commitment"
      intro="We serve customers managing mobility, vision, and dexterity challenges every day. Making our website and store usable for everyone isn't a checkbox for us — it's the job."
      updated={UPDATED}
    >
      <h2>What we&rsquo;re working toward</h2>
      <p>
        We aim to meet the{" "}
        <a
          href="https://www.w3.org/WAI/WCAG21/quickref/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
        </a>
        . These guidelines explain how to make web content more accessible to people with a
        wide range of disabilities, including visual, motor, auditory, and cognitive
        differences.
      </p>

      <h2>Steps we&rsquo;ve taken</h2>
      <ul>
        <li>A readable base type size (17px) and generous line spacing, chosen with our
          older customers in mind.</li>
        <li>Strong color contrast and visible keyboard focus indicators throughout.</li>
        <li>Full keyboard navigation, including a &ldquo;skip to content&rdquo; link.</li>
        <li>Descriptive text alternatives for meaningful images.</li>
        <li>Semantic headings and landmarks so screen readers can navigate the page.</li>
        <li>Respect for the &ldquo;reduce motion&rdquo; setting in your browser or device.</li>
      </ul>

      <h2>In our store</h2>
      <p>
        Our Lake Oswego location is wheelchair accessible, and our staff is glad to help you
        find, reach, or carry anything you need. If it&rsquo;s easier to handle your order
        by phone, just call us.
      </p>

      <h2>Need help, or hit a barrier?</h2>
      <p>
        Accessibility is ongoing work, and we know some areas may fall short. If you have
        trouble using any part of this website, or you&rsquo;d like assistance placing an
        order, we want to hear from you and we&rsquo;ll help directly:
      </p>
      <ul>
        <li>
          Call <a href={`tel:${SITE.phoneHref}`}>{SITE.phoneDisplay}</a> during business
          hours.
        </li>
        <li>
          Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and describe what
          you&rsquo;re running into.
        </li>
      </ul>
      <p>
        Please tell us the page and what you were trying to do, so we can both help you
        right away and fix the underlying issue for everyone.
      </p>

      <h2>Ongoing improvement</h2>
      <p>
        We review accessibility as we add features and content, and we treat reported
        barriers as bugs to be fixed. This statement will be updated as our site evolves.
      </p>
    </LegalPage>
  );
}
