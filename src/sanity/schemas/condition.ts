import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const condition = defineType({
  name: "condition",
  title: "Condition hub",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "heroHeadline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroIntro", type: "text", rows: 3 }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
    }),
    defineField({ name: "explainerVideoMuxId", type: "string" }),
    defineField({
      name: "recommendedProducts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      validation: (r) => r.max(12),
    }),
    defineField({
      name: "educationalContent",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "faqs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    seoField,
  ],
  preview: { select: { title: "name", media: "heroImage" } },
});
