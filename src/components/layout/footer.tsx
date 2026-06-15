import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

import { SITE, NAV } from "@/lib/site";

const hoursLine = (day: string, open: string | null, close: string | null) =>
  open && close
    ? `${day} · ${formatTime(open)} – ${formatTime(close)}`
    : `${day} · Closed`;

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${hour}${m > 0 ? `:${m.toString().padStart(2, "0")}` : ""}${period}`;
}

export function Footer() {
  return (
    <footer className="mt-24 bg-[var(--color-navy-900)] text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-[var(--font-display)] text-2xl font-semibold">Allay</div>
          <p className="mt-4 text-sm text-white/70">{SITE.tagline}</p>
          <address className="mt-6 not-italic text-sm text-white/80 space-y-2">
            <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="size-4" aria-hidden /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="size-4" aria-hidden /> {SITE.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5" aria-hidden />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </span>
            </div>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Shop
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.categories.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-white/90">
            Hours
          </h3>
          <ul className="mt-4 space-y-1 text-sm text-white/70">
            {SITE.hours.map((h) => (
              <li key={h.day}>{hoursLine(h.day, h.open, h.close)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/90">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/locations/lake-oswego" className="hover:text-white">Locations we serve</Link></li>
          </ul>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-white/90">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </span>
          <span>
            Proudly serving {SITE.areasServed.slice(0, 4).join(", ")} and surrounding areas.
          </span>
        </div>
      </div>
    </footer>
  );
}
