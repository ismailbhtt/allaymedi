import { defineField, defineType } from "sanity";

export const rentalRequest = defineType({
  name: "rentalRequest",
  title: "Rental request",
  type: "document",
  description: "Submitted from the rental booking form. Staff calls back to confirm. No PHI collected.",
  readOnly: true,
  fields: [
    defineField({ name: "equipment", type: "reference", to: [{ type: "rentalEquipment" }] }),
    defineField({ name: "customerName", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "pickupDate", type: "date" }),
    defineField({
      name: "duration",
      type: "string",
      options: {
        list: [
          { title: "Daily", value: "daily" },
          { title: "Weekly", value: "weekly" },
          { title: "Monthly", value: "monthly" },
        ],
      },
    }),
    defineField({ name: "notes", type: "text", rows: 3 }),
    defineField({
      name: "status",
      type: "string",
      options: { list: ["new", "contacted", "confirmed", "completed", "cancelled"] },
      initialValue: "new",
    }),
    defineField({ name: "submittedAt", type: "datetime" }),
  ],
  preview: {
    select: { title: "customerName", subtitle: "equipment.name", description: "pickupDate" },
  },
});
