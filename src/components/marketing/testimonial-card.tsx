import { Star } from "lucide-react";

export function TestimonialCard({
  name,
  location,
  quote,
  rating = 5,
  product,
}: {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  product?: string;
}) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-1 text-[var(--color-copper-500)]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" aria-hidden />
        ))}
      </div>
      <blockquote className="mt-5 text-lg leading-relaxed text-[var(--color-ink)]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-[var(--color-border)] pt-4 text-sm">
        <span className="font-semibold text-[var(--color-ink)]">{name}</span>
        {location ? (
          <span className="text-[var(--color-muted)]"> · {location}</span>
        ) : null}
        {product ? (
          <div className="mt-1 text-xs uppercase tracking-wide text-[var(--color-muted)]">
            {product}
          </div>
        ) : null}
      </figcaption>
    </figure>
  );
}
