import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { PortableText } from "@/components/sanity/portable-text";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { ProductCard } from "@/components/commerce/product-card";
import { JsonLdScript } from "@/lib/seo/jsonld";
import { getAllBlogPosts, getBlogPostBySlug } from "@/sanity/fetch";
import { SITE } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const doc = await getBlogPostBySlug(slug);
  if (!doc) return { title: "Article" };
  return {
    title: doc.seo?.title ?? doc.title,
    description: doc.seo?.description ?? doc.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const doc = await getBlogPostBySlug(slug);
  if (!doc) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: doc.title,
    description: doc.excerpt,
    datePublished: doc.publishedAt,
    author: doc.author?.name
      ? {
          "@type": "Person",
          name: doc.author.name,
          ...(doc.author.credentials ? { jobTitle: doc.author.credentials } : {}),
        }
      : { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.svg` },
    },
    mainEntityOfPage: `${SITE.url}/blog/${doc.slug}`,
  };

  return (
    <article className="container-page py-12">
      <nav className="text-sm text-[var(--color-muted)]" aria-label="Breadcrumb">
        <a href="/blog" className="hover:text-[var(--color-ink)]">Blog</a> /{" "}
        <span className="text-[var(--color-ink)]">{doc.title}</span>
      </nav>
      <div className="mt-6 max-w-3xl">
        <Badge tone="sage">
          {doc.category?.replace(/-/g, " ") ?? "Guide"}
        </Badge>
        <h1 className="mt-3 text-balance">{doc.title}</h1>
        {doc.author?.name ? (
          <div className="mt-4 text-sm text-[var(--color-muted)]">
            By {doc.author.name}
            {doc.author.credentials ? `, ${doc.author.credentials}` : ""} ·{" "}
            {new Date(doc.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        ) : null}
      </div>

      {doc.coverImage ? (
        <div className="mt-8 overflow-hidden rounded-[var(--radius-2xl)]">
          <div className="relative aspect-[16/9]">
            <SanityImageRender
              image={doc.coverImage}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      ) : null}

      <div className="prose-editorial mt-10 max-w-none lg:mx-auto lg:max-w-3xl">
        <PortableText value={doc.body} />
      </div>

      {doc.relatedProducts && doc.relatedProducts.length > 0 ? (
        <section className="mt-20">
          <h2 className="mb-6">Products mentioned in this guide</h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {doc.relatedProducts.map((p) => (
              <li key={p._id}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <JsonLdScript data={articleJsonLd} id={`ld-article-${doc._id}`} />
    </article>
  );
}
