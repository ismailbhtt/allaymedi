import Link from "next/link";
import { Phone, Menu } from "lucide-react";

import { SITE, NAV } from "@/lib/site";
import { AnnouncementBar } from "./announcement-bar";
import { CartLink } from "@/components/commerce/cart-link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <AnnouncementBar />
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={SITE.name}>
          <span className="font-[var(--font-display)] text-xl font-semibold tracking-tight text-[var(--color-navy-800)]">
            Allay
          </span>
          <span className="hidden text-sm text-[var(--color-muted)] sm:inline">
            · Medical Solutions
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {NAV.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-navy-700)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneHref}`}
            className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-warm)] sm:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <CartLink />
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] lg:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
