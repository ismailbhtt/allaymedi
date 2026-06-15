import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { LocationMap } from "@/components/marketing/location-map";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email, or visit Allay Medical Solutions in Lake Oswego. Walk-ins welcome. FSA/HSA accepted.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-page py-16">
        <Badge tone="copper">Contact</Badge>
        <h1 className="mt-3">Get in touch</h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">
          For medical recommendations please speak with your provider. For
          product questions, sizing, or rentals — we&apos;re here.
        </p>
        <form className="mt-10 grid max-w-xl gap-4" action="/api/contact" method="post">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Your name</span>
            <input
              name="name"
              required
              className="h-11 rounded-full border border-[var(--color-border)] px-4"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Email</span>
            <input
              type="email"
              name="email"
              required
              className="h-11 rounded-full border border-[var(--color-border)] px-4"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Phone (optional)</span>
            <input
              name="phone"
              className="h-11 rounded-full border border-[var(--color-border)] px-4"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">How can we help?</span>
            <textarea
              name="message"
              rows={5}
              required
              className="rounded-2xl border border-[var(--color-border)] p-3"
            />
          </label>
          <p className="text-xs text-[var(--color-muted)]">
            Please do not include medical history, prescriptions, or other
            protected health information in this form.
          </p>
          <button
            type="submit"
            className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--color-navy-700)] px-6 font-medium text-white hover:bg-[var(--color-navy-800)] sm:w-auto"
          >
            Send message
          </button>
        </form>
      </section>
      <LocationMap />
    </>
  );
}
