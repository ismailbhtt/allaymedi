import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({
      name: "coverImage",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
    }),
    defineField({
      name: "author",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "credentials", type: "string", description: "e.g. RN, Certified Respiratory Therapist" }),
      ],
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Caregiver tips", value: "caregiver-tips" },
          { title: "Product guides", value: "product-guides" },
          { title: "Condition support", value: "condition-support" },
          { title: "Insurance & FSA/HSA", value: "insurance" },
          { title: "Store news", value: "store-news" },
        ],
      },
    }),
    defineField({ name: "publishedAt", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({
      name: "relatedProducts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    seoField,
  ],
  orderings: [
    {
      title: "Most recent",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
