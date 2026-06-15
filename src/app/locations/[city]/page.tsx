import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { PortableText } from "@/components/sanity/portable-text";
import { JsonLdScript } from "@/lib/seo/jsonld";
import { getAllLocations, getLocationBySlug } from "@/sanity/fetch";
import { SITE } from "@/lib/site";

export async function generateMetadata(
  props: PageProps<"/locations/[city]">
): Promise<Metadata> {
  const { city } = await props.params;
  const doc = await getLocationBySlug(city);
  const pretty =
    doc?.city ?? city.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: doc?.seo?.title ?? `Medical supply & DME in ${pretty}`,
    description:
      doc?.seo?.description ??
      doc?.heroIntro ??
      `Allay Medical Solutions serves ${pretty} with mobility aids, CPAP, bath safety, compression, rentals and more. Same-day pickup from our Lake Oswego store.`,
  };
}

export async function generateStaticParams() {
  const docs = await getAllLocations();
  const fromSanity = docs.map((d) => ({ city: d.slug }));
  const fromFallback = SITE.areasServed.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, "-"),
  }));
  const unique = new Map<string, { city: string }>();
  [...fromSanity, ...fromFallback].forEach((p) => unique.set(p.city, p));
  return Array.from(unique.values());
}

export default async function LocationPage(
  props: PageProps<"/locations/[city]">
) {
  const { city } = await props.params;
  const doc = await getLocationBySlug(city);
  const pretty =
    doc?.city ??
    city.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const headline =
    doc?.heroHeadline ??
    `Home medical equipment serving ${pretty}`;
  const intro =
    doc?.heroIntro ??
    `We're a short drive away with same-day pickup, curated product expertise, and local delivery into ${pretty} and surrounding neighborhoods.`;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    name: `${SITE.name} — serving ${pretty}`,
    parentOrganization: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
    url: `${SITE.url}/locations/${city}`,
    telephone: SITE.phoneHref,
    areaServed: { "@type": "City", name: pretty },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
  };

  return (
    <>
      <section className="container-page py-14">
        <Badge tone="navy">Serving {pretty}</Badge>
        <h1 className="mt-3">{headline}</h1>
        <p className="mt-4 max-w-2xl text-[var(--color-ink-soft)]">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <a href={SITE.socials.google} target="_blank" rel="noopener">
              <MapPin className="size-4" aria-hidden /> Directions from {pretty}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${SITE.phoneHref}`}>
              <Phone className="size-4" aria-hidden /> {SITE.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>

      {doc?.neighborhoods && doc.neighborhoods.length > 0 ? (
        <section className="container-page pb-10">
          <h2 className="mb-4">Neighborhoods we serve</h2>
          <ul className="flex flex-wrap gap-2">
            {doc.neighborhoods.map((n) => (
              <li
                key={n}
                className="rounded-full bg-[var(--color-surface-warm)] px-4 py-1.5 text-sm"
              >
                {n}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {doc?.localBody ? (
        <section className="container-page py-10">
          <div className="prose-editorial">
            <PortableText value={doc.localBody} />
          </div>
        </section>
      ) : null}

      {doc?.drivingDirections ? (
        <section className="container-page py-10">
          <h2 className="mb-4">How to find us from {pretty}</h2>
          <div className="prose-editorial">
            <PortableText value={doc.drivingDirections} />
          </div>
        </section>
      ) : null}

      {doc?.featuredTestimonials && doc.featuredTestimonials.length > 0 ? (
        <section className="container-page py-16">
          <h2 className="mb-8">What your neighbors say</h2>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {doc.featuredTestimonials.map((t) => (
              <li key={t._id}>
                <TestimonialCard
                  name={t.name}
                  location={t.location}
                  quote={t.quote}
                  rating={t.rating}
                  product={t.productOrService}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="container-page py-16">
        <div className="rounded-[var(--radius-2xl)] bg-[var(--color-surface-warm)] p-8 md:p-12">
          <h2>Prefer to call first?</h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">
            We&apos;re on Boones Ferry Rd, six minutes from the I-5 / Boones
            Ferry exit. Mon–Fri 10a–6p, Sat 10a–4p.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="accent">
              <a href={`tel:${SITE.phoneHref}`}>
                <Phone className="size-4" aria-hidden /> {SITE.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Send a message</Link>
            </Button>
          </div>
        </div>
      </section>

      <JsonLdScript data={localBusinessJsonLd} id={`ld-loc-${city}`} />
    </>
  );
}
