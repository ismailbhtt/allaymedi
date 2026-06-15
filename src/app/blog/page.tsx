import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { getAllBlogPosts } from "@/sanity/fetch";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides, product walkthroughs, and caregiver advice from the floor staff at Allay Medical Solutions.",
};

export default async function BlogIndex() {
  const posts = await getAllBlogPosts();
  return (
    <section className="container-page py-14">
      <Badge tone="sage">Blog</Badge>
      <h1 className="mt-3">Guides from our floor staff</h1>
      <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">
        Caregiver checklists, product comparisons, and real advice from people
        who fit, size, and set up this equipment every day.
      </p>
      {posts.length === 0 ? (
        <div className="mt-10 rounded-[var(--radius-xl)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-warm)] p-10 text-center text-sm text-[var(--color-muted)]">
          Articles will appear here once published in Sanity.
        </div>
      ) : (
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-copper-100)]">
                  {post.coverImage ? (
                    <SanityImageRender
                      image={post.coverImage}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                    {post.category?.replace(/-/g, " ") ?? "Guide"}
                  </div>
                  <h2 className="mt-2 text-lg font-semibold leading-snug">
                    {post.title}
                  </h2>
                  {post.excerpt ? (
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--color-muted)]">
                      {post.excerpt}
                    </p>
                  ) : null}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
