import Link from "next/link";
import { ArrowRight, Bed, Hand, Truck } from "lucide-react";

import { SITE, NAV } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/marketing/hero";
import { QuickActionRow } from "@/components/marketing/quick-action-row";
import { CategoryTile } from "@/components/marketing/category-tile";
import { TrustBar } from "@/components/marketing/trust-bar";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { ConditionCard } from "@/components/marketing/condition-card";
import { LocationMap } from "@/components/marketing/location-map";
import { SanityImageRender } from "@/components/sanity/sanity-image";
import { getSiteSettings, getAllBlogPosts } from "@/sanity/fetch";
import type { SanityImage } from "@/sanity/fetch";

type HomeTestimonial = {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  product?: string;
};

type HomePost = {
  title: string;
  slug: string;
  coverImage?: SanityImage;
};

// Curated fallbacks — shown until real reviews and posts are published in
// Sanity. The homepage reads CMS data first and only falls back to these.
const fallbackTestimonials: HomeTestimonial[] = [
  {
    name: "Margaret W.",
    location: "Lake Oswego, OR",
    quote:
      "After my knee replacement, Allay had a knee scooter ready the same afternoon. The staff even adjusted the height for me on the spot.",
    product: "Knee scooter rental",
  },
  {
    name: "David & Susan K.",
    location: "West Linn, OR",
    quote:
      "We furnished my mom's bathroom for safety in a single visit. They knew exactly what would fit in her small shower.",
    product: "Bath safety package",
  },
  {
    name: "Robert C.",
    location: "Tigard, OR",
    quote:
      "CPAP fitting that actually fit. They took the time to try three masks instead of pushing the cheapest one.",
    product: "ResMed AirSense 11",
  },
];

const fallbackPosts: HomePost[] = [
  { title: "Rollator vs. walker: which one's right for you?", slug: "rollator-vs-walker" },
  { title: "CPAP mask sizing: a complete guide", slug: "cpap-mask-sizing" },
  { title: "Bath safety checklist for aging in place", slug: "bath-safety-checklist" },
];

const conditions = [
  {
    title: "New CPAP user?",
    href: "/conditions/sleep-apnea",
    description:
      "Masks, machines, and sizing support from people who fit them every day — not a call center.",
  },
  {
    title: "Recovering from surgery?",
    href: "/conditions/post-surgical-recovery",
    description:
      "Rent the equipment you need for 2 weeks, buy the consumables once, and we'll pick it all up.",
  },
  {
    title: "Caring for a loved one?",
    href: "/conditions/caring-for-elderly-parent",
    description:
      "Bath safety, mobility, and transfer equipment vetted for real homes — not catalog photos.",
  },
];

export default async function HomePage() {
  const [settings, allPosts] = await Promise.all([
    getSiteSettings(),
    getAllBlogPosts(),
  ]);

  const cmsTestimonials: HomeTestimonial[] = (settings?.featuredTestimonials ?? []).map(
    (t) => ({
      name: t.name,
      location: t.location,
      quote: t.quote,
      rating: t.rating,
      product: t.productOrService,
    })
  );
  const testimonials = cmsTestimonials.length ? cmsTestimonials : fallbackTestimonials;

  const cmsPosts: HomePost[] = allPosts
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug, coverImage: p.coverImage }));
  const posts = cmsPosts.length ? cmsPosts : fallbackPosts;

  return (
    <>
      <Hero />
      <QuickActionRow />

      {/* Category grid */}
      <section className="container-page py-20" aria-labelledby="categories-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="navy">Shop the store</Badge>
            <h2 id="categories-heading" className="mt-3">
              Equipment for every stage of care
            </h2>
          </div>
          <Button asChild variant="link">
            <Link href="/shop">
              View all categories
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NAV.categories.slice(0, 8).map((c, i) => (
            <CategoryTile
              key={c.href}
              label={c.label}
              href={c.href}
              accent={i === 0}
            />
          ))}
        </div>
      </section>

      {/* Rental teaser */}
      <section className="bg-[var(--color-navy-50)] py-20">
        <div className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Badge tone="copper">Rentals</Badge>
            <h2 className="mt-3">Need it short-term? Rent it instead.</h2>
            <p className="mt-4 max-w-xl text-[var(--color-ink-soft)]">
              Hospital beds, wheelchairs, knee scooters, ramps. Reserve online —
              pickup in Lake Oswego or we can arrange delivery across the
              Portland metro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <Link href="/rentals">
                  Reserve equipment <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${SITE.phoneHref}`}>Call about availability</a>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Bed, title: "Hospital beds", note: "Full-electric, semi-electric" },
              { icon: Truck, title: "Ramps", note: "Threshold & modular" },
              { icon: Hand, title: "Wheelchairs", note: "Transport & standard" },
              { icon: Bed, title: "Knee scooters", note: "Post-op favorite" },
            ].map(({ icon: Icon, title, note }) => (
              <li
                key={title}
                className="rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-5"
              >
                <Icon className="size-5 text-[var(--color-copper-600)]" aria-hidden />
                <div className="mt-3 font-semibold text-[var(--color-ink)]">{title}</div>
                <div className="text-sm text-[var(--color-muted)]">{note}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services strip */}
      <section className="container-page py-20" aria-labelledby="services-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="sage">Beyond supplies</Badge>
            <h2 id="services-heading" className="mt-3">
              Services our neighbors rely on
            </h2>
          </div>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Sharps disposal",
              description:
                "Safe, walk-in disposal of insulin needles and lancets. No appointment needed.",
              href: "/services/sharps-disposal",
            },
            {
              title: "Notary public",
              description:
                "Walk-in notary services for medical directives, releases, and healthcare forms.",
              href: "/services/notary",
            },
            {
              title: "Vaccinations",
              description:
                "Flu, COVID, shingles. Check current availability — call ahead for inventory.",
              href: "/services/vaccinations",
            },
          ].map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 text-[var(--color-muted)]">{s.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-navy-700)]">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <TrustBar />

      {/* Conditions */}
      <section className="container-page py-20" aria-labelledby="conditions-heading">
        <div className="max-w-2xl">
          <Badge tone="navy">Start with what you&apos;re facing</Badge>
          <h2 id="conditions-heading" className="mt-3">
            Guides built around real situations
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Skip the catalog browse. Tell us what&apos;s going on and we&apos;ll
            show you the exact equipment — and the reasons behind each
            recommendation.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {conditions.map((c) => (
            <li key={c.href}>
              <ConditionCard {...c} />
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-surface-warm)] py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <Badge tone="copper">Reviews</Badge>
            <h2 className="mt-3">Real neighbors, real results</h2>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <li key={`${t.name}-${i}`}>
                <TestimonialCard {...t} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="container-page py-20" aria-labelledby="blog-heading">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Badge tone="sage">Learn</Badge>
            <h2 id="blog-heading" className="mt-3">
              Guides from our floor staff
            </h2>
          </div>
          <Button asChild variant="link">
            <Link href="/blog">All articles <ArrowRight className="size-4" aria-hidden /></Link>
          </Button>
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-navy-100)] to-[var(--color-copper-100)]">
                  {post.coverImage ? (
                    <SanityImageRender
                      image={post.coverImage}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : null}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{post.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-navy-700)]">
                  Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <LocationMap />
    </>
  );
}
