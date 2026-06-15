import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { categories } from "./data/categories";
import { locations } from "./data/locations";
import { conditions } from "./data/conditions";
import { products } from "./data/products";
import { rentalEquipment } from "./data/rentals";
import { services } from "./data/services";
import { testimonials } from "./data/testimonials";
import { faqs } from "./data/faqs";
import { blogPosts } from "./data/blog";
import { siteSettings } from "./data/site-settings";
import { appointmentTypes, appointmentSlots } from "./data/appointments";

const here = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(here, "all.ndjson");

const documents: unknown[] = [
  ...faqs, // FAQs first so other docs can reference them by _id on import
  ...categories,
  ...locations,
  ...conditions,
  ...products,
  ...rentalEquipment,
  ...services,
  ...testimonials,
  ...blogPosts,
  ...appointmentTypes,
  ...appointmentSlots,
  siteSettings,
];

const ndjson = documents.map((d) => JSON.stringify(d)).join("\n") + "\n";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ndjson, "utf8");

console.log(`Wrote ${documents.length} documents to ${outPath}`);
