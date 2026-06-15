import type { MetadataRoute } from "next";

import { SITE, NAV } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: string[] = [
    "/",
    "/shop",
    "/rentals",
    "/appointments",
    "/services",
    "/conditions",
    "/locations",
    "/blog",
    "/about",
    "/contact",
  ];

  const categoryRoutes = NAV.categories.map((c) => c.href);
  const conditionRoutes = NAV.conditions.map((c) => c.href);
  const serviceRoutes = NAV.services.map((s) => s.href);
  const locationRoutes = SITE.areasServed.map(
    (city) => `/locations/${city.toLowerCase().replace(/\s+/g, "-")}`
  );
  const legalRoutes = NAV.legal.map((l) => l.href);

  const primary = [
    ...staticRoutes,
    ...categoryRoutes,
    ...conditionRoutes,
    ...serviceRoutes,
    ...locationRoutes,
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const legal = legalRoutes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...primary, ...legal];
}
