import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const location = defineType({
  name: "location",
  title: "Location page",
  type: "document",
  description: "Local SEO landing pages for each city we serve",
  fields: [
    defineField({ name: "city", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "city" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "heroHeadline", type: "string" }),
    defineField({ name: "heroIntro", type: "text", rows: 3 }),
    defineField({
      name: "neighborhoods",
      type: "array",
      of: [{ type: "string" }],
      description: "Neighborhoods we serve in this city",
    }),
    defineField({ name: "drivingDirections", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "localBody",
      type: "array",
      of: [{ type: "block" }],
      description: "Unique content for this city page",
    }),
    defineField({
      name: "featuredTestimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
    seoField,
  ],
  preview: { select: { title: "city" } },
});
