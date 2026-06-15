import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  updated: string;
  children: ReactNode;
};

/**
 * Shared shell for policy / legal pages (privacy, HIPAA, accessibility,
 * returns, shipping). Keeps heading, "last updated" line, and prose width
 * consistent across all of them.
 */
export function LegalPage({ eyebrow, title, intro, updated, children }: LegalPageProps) {
  return (
    <section className="container-page py-16">
      <Badge tone="navy">{eyebrow}</Badge>
      <h1 className="mt-3 max-w-3xl">{title}</h1>
      {intro ? (
        <p className="mt-4 max-w-2xl text-lg text-[var(--color-ink-soft)]">{intro}</p>
      ) : null}
      <p className="mt-4 text-sm text-[var(--color-muted)]">Last updated {updated}</p>
      <div className="prose-editorial mt-10">{children}</div>
    </section>
  );
}
