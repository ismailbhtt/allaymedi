import { PortableText as Base, type PortableTextComponents } from "next-sanity";
import Link from "next/link";

import type { PortableTextBlock } from "@/sanity/fetch";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 mb-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[var(--color-copper-400)] bg-[var(--color-surface-warm)] px-6 py-4 italic text-[var(--color-ink)]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const external = /^https?:/.test(href);
      return external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="text-[var(--color-navy-700)] underline underline-offset-4 hover:text-[var(--color-copper-700)]"
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className="text-[var(--color-navy-700)] underline underline-offset-4 hover:text-[var(--color-copper-700)]"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--color-ink)]">{children}</strong>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-5 marker:text-[var(--color-copper-500)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-5 marker:text-[var(--color-navy-600)]">
        {children}
      </ol>
    ),
  },
};

export function PortableText({ value }: { value?: PortableTextBlock[] }) {
  if (!value || value.length === 0) return null;
  // next-sanity's PortableText expects its own typed value. We cast because our wrapper types stay narrow.
  return <Base value={value as unknown as Parameters<typeof Base>[0]["value"]} components={components} />;
}
