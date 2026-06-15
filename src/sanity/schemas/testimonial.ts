import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", type: "string", description: "e.g. Lake Oswego, OR" }),
    defineField({
      name: "photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string" })],
    }),
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "rating", type: "number", validation: (r) => r.min(1).max(5), initialValue: 5 }),
    defineField({ name: "productOrService", type: "string" }),
    defineField({ name: "verified", type: "boolean", initialValue: false }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "name", subtitle: "productOrService", media: "photo" } },
});
