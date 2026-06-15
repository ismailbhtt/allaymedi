import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CategoryTile({
  label,
  href,
  description,
  accent = false,
}: {
  label: string;
  href: string;
  description?: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-xl)] border p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)] ${
        accent
          ? "border-[var(--color-copper-200)] bg-[var(--color-copper-50)]"
          : "border-[var(--color-border)] bg-[var(--color-surface-warm)]"
      } min-h-40`}
    >
      <div>
        <h3 className="text-xl font-semibold text-[var(--color-ink)]">
          {label}
        </h3>
        {description ? (
          <p className="mt-2 text-sm text-[var(--color-muted)]">{description}</p>
        ) : null}
      </div>
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-[var(--color-navy-700)]">
        Browse
        <ArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </div>
    </Link>
  );
}
