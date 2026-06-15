import { defineField, defineType } from "sanity";

export const appointmentSlot = defineType({
  name: "appointmentSlot",
  title: "Appointment slot",
  type: "document",
  description:
    "A single bookable time slot. Staff creates these in bulk (see structure view) and marks inactive to cancel.",
  fields: [
    defineField({
      name: "appointmentType",
      type: "reference",
      to: [{ type: "appointmentType" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "startAt",
      title: "Starts at",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "booked",
      type: "boolean",
      initialValue: false,
      description: "Automatically set to true when a customer books this slot.",
    }),
    defineField({
      name: "bookedBy",
      type: "reference",
      to: [{ type: "appointment" }],
      readOnly: true,
      description: "Populated after booking via the public API.",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this slot from the booking page (e.g. staff sick day).",
    }),
  ],
  orderings: [
    {
      title: "Earliest first",
      name: "startAtAsc",
      by: [{ field: "startAt", direction: "asc" }],
    },
  ],
  preview: {
    select: { type: "appointmentType.name", startAt: "startAt", booked: "booked" },
    prepare: ({ type, startAt, booked }) => {
      const when = startAt
        ? new Date(startAt).toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        : "(no time set)";
      return {
        title: `${type ?? "Appointment"} · ${when}`,
        subtitle: booked ? "Booked" : "Available",
      };
    },
  },
});
