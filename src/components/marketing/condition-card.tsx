import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ConditionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[var(--color-navy-300)] hover:shadow-[var(--shadow-card)]"
    >
      <h3 className="text-xl font-semibold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-3 flex-1 text-[var(--color-muted)]">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-navy-700)]">
        See what you&apos;ll need
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden
        />
      </span>
    </Link>
  );
}
