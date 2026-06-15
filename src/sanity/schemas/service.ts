import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "summary", type: "text", rows: 3 }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
    }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "pricingNote", type: "string" }),
    defineField({ name: "bookingEnabled", type: "boolean", initialValue: false }),
    defineField({ name: "walkInOnly", type: "boolean", initialValue: true }),
    defineField({
      name: "faqs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    seoField,
  ],
  preview: { select: { title: "name", media: "heroImage" } },
});
