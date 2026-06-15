import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const rentalEquipment = defineType({
  name: "rentalEquipment",
  title: "Rental equipment",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "equipmentType",
      type: "string",
      options: {
        list: [
          { title: "Hospital bed", value: "hospital-bed" },
          { title: "Wheelchair", value: "wheelchair" },
          { title: "Knee scooter", value: "knee-scooter" },
          { title: "Ramp", value: "ramp" },
          { title: "Lift", value: "lift" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
        },
      ],
      validation: (r) => r.min(1),
    }),
    defineField({ name: "description", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "specs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "dailyRateCents", type: "number" }),
    defineField({ name: "weeklyRateCents", type: "number" }),
    defineField({ name: "monthlyRateCents", type: "number" }),
    defineField({ name: "depositCents", type: "number" }),
    defineField({ name: "availableUnits", type: "number", initialValue: 1 }),
    defineField({ name: "deliveryAvailable", type: "boolean", initialValue: false }),
    defineField({ name: "pickupInstructions", type: "text", rows: 3 }),
    seoField,
  ],
  preview: { select: { title: "name", subtitle: "equipmentType", media: "images.0" } },
});
