export function TrustBar() {
  const partners = ["ResMed", "Medline", "Nova", "Pride Mobility", "JOBST", "McKesson"];
  return (
    <section
      aria-label="Trusted partners"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface-warm)]"
    >
      <div className="container-page flex flex-wrap items-center justify-between gap-y-4 py-8">
        <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Trusted partners
        </span>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {partners.map((p) => (
            <li
              key={p}
              className="text-sm font-semibold tracking-wide text-[var(--color-ink-soft)]"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
