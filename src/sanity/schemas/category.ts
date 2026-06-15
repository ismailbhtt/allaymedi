import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", type: "number", initialValue: 10 }),
    defineField({
      name: "parent",
      type: "reference",
      to: [{ type: "category" }],
      description: "Optional parent category for nesting",
    }),
    defineField({ name: "heroHeadline", type: "string" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
      ],
    }),
    defineField({
      name: "educationalContent",
      title: "Educational content (SEO)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "buyingGuide",
      title: "Buying guide FAQs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    seoField,
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "parent.name", media: "heroImage" },
  },
});
