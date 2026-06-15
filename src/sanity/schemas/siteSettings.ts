import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "announcement", type: "string", description: "Top-bar text. Leave blank to hide." }),
    defineField({ name: "announcementHref", type: "string" }),
    defineField({
      name: "partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", type: "string" }),
            defineField({
              name: "logo",
              type: "image",
              fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
            }),
            defineField({ name: "url", type: "url" }),
          ],
        },
      ],
    }),
    defineField({
      name: "certifications",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. BBB A+, Accredited Medicare DMEPOS Supplier",
    }),
    defineField({
      name: "featuredTestimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
      validation: (r) => r.max(6),
    }),
    defineField({
      name: "homeCategoryOrder",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (r) => r.max(8),
    }),
    defineField({
      name: "homeRentalFeatured",
      type: "array",
      of: [{ type: "reference", to: [{ type: "rentalEquipment" }] }],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: "homeBlogFeatured",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
      validation: (r) => r.max(3),
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
