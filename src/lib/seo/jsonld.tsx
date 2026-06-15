import { SITE } from "@/lib/site";

type JsonLd = Record<string, unknown>;

function escape(value: string) {
  return value.replace(/</g, "\\u003c");
}

export function JsonLdScript({ data, id }: { data: JsonLd | JsonLd[]; id?: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: escape(JSON.stringify(data)),
      }}
    />
  );
}

export function localBusinessJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneHref,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: weekdayFull(h.day),
        opens: h.open,
        closes: h.close,
      })),
    areaServed: SITE.areasServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home medical equipment",
      itemListElement: [
        "Mobility aids",
        "CPAP & sleep equipment",
        "Bath safety",
        "Compression wear",
        "Wound care",
        "Incontinence",
        "Daily living aids",
        "Equipment rentals",
      ].map((cat) => ({
        "@type": "OfferCatalog",
        name: cat,
      })),
    },
  };
}

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#org`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneHref,
      email: SITE.email,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

function weekdayFull(short: string) {
  const map: Record<string, string> = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };
  return map[short] ?? short;
}
