import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "basic", title: "Basic" },
    { name: "content", title: "Content" },
    { name: "commerce", title: "Commerce" },
    { name: "media", title: "Media" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({ name: "name", type: "string", group: "basic", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      group: "basic",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "sku", type: "string", group: "basic" }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      group: "basic",
      validation: (r) => r.required(),
    }),
    defineField({ name: "manufacturer", type: "string", group: "basic" }),
    defineField({
      name: "images",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
        },
      ],
      validation: (r) => r.min(1).error("At least one image is required"),
    }),
    defineField({ name: "muxVideo", title: "Product video (Mux asset id)", type: "string", group: "media" }),
    defineField({
      name: "shortDescription",
      type: "text",
      rows: 3,
      group: "content",
      validation: (r) => r.max(280),
    }),
    defineField({
      name: "longDescription",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "specs",
      type: "array",
      group: "content",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "value", type: "string", validation: (r) => r.required() }),
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      type: "array",
      group: "content",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
    }),
    defineField({
      name: "priceCents",
      title: "Price (cents)",
      type: "number",
      group: "commerce",
      description: "Leave blank for call-for-pricing items",
    }),
    defineField({ name: "stripePriceId", type: "string", group: "commerce" }),
    defineField({ name: "inStock", type: "boolean", group: "commerce", initialValue: true }),
    defineField({
      name: "inStoreOnly",
      type: "boolean",
      group: "commerce",
      initialValue: false,
      description: "Only available for in-store pickup",
    }),
    defineField({
      name: "regulated",
      type: "boolean",
      group: "commerce",
      initialValue: false,
      description: "Requires prescription, fitting, or in-person consult — hides checkout button",
    }),
    defineField({
      name: "fsaEligible",
      type: "boolean",
      group: "commerce",
      initialValue: false,
      description: "Displays FSA/HSA eligible badge",
    }),
    defineField({
      name: "rentalAvailable",
      type: "boolean",
      group: "commerce",
      initialValue: false,
    }),
    defineField({
      name: "relatedProducts",
      type: "array",
      group: "commerce",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      validation: (r) => r.max(6),
    }),
    seoField,
  ],
  preview: {
    select: { title: "name", subtitle: "category.name", media: "images.0" },
  },
});
