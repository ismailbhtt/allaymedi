import { Phone, MapPin, Clock, Store } from "lucide-react";

import { SITE } from "@/lib/site";

const isOpenNow = () => {
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "short", timeZone: "America/Los_Angeles" });
  const today = SITE.hours.find((h) => h.day === day);
  if (!today?.open || !today?.close) return false;
  const time = now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", timeZone: "America/Los_Angeles" });
  return time >= today.open && time <= today.close;
};

export function QuickActionRow() {
  const open = isOpenNow();
  return (
    <section
      aria-label="Quick actions"
      className="border-y border-[var(--color-border)] bg-white"
    >
      <div className="container-page grid gap-px bg-[var(--color-border)] sm:grid-cols-2 md:grid-cols-4">
        <a
          href={`tel:${SITE.phoneHref}`}
          className="flex items-center gap-3 bg-white p-6 transition-colors hover:bg-[var(--color-surface-warm)]"
        >
          <Phone className="size-5 text-[var(--color-copper-600)]" aria-hidden />
          <div>
            <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Call us</div>
            <div className="font-semibold text-[var(--color-ink)]">{SITE.phoneDisplay}</div>
          </div>
        </a>
        <a
          href={SITE.socials.google}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-3 bg-white p-6 transition-colors hover:bg-[var(--color-surface-warm)]"
        >
          <MapPin className="size-5 text-[var(--color-copper-600)]" aria-hidden />
          <div>
            <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Visit us</div>
            <div className="font-semibold text-[var(--color-ink)]">{SITE.address.street}</div>
          </div>
        </a>
        <div className="flex items-center gap-3 bg-white p-6">
          <Clock className="size-5 text-[var(--color-copper-600)]" aria-hidden />
          <div>
            <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Hours today</div>
            <div className="font-semibold text-[var(--color-ink)]">
              {open ? "Open now · until 6pm" : "Closed"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-6">
          <Store className="size-5 text-[var(--color-copper-600)]" aria-hidden />
          <div>
            <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">In-store today</div>
            <div className="font-semibold text-[var(--color-ink)]">
              Same-day pickup available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
