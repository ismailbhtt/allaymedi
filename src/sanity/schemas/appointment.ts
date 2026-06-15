import { defineField, defineType } from "sanity";

export const appointment = defineType({
  name: "appointment",
  title: "Appointment booking",
  type: "document",
  description:
    "A customer booking record. NO PHI — medical intake is handled via a linked HIPAA-compliant form.",
  readOnly: true,
  fields: [
    defineField({ name: "slot", type: "reference", to: [{ type: "appointmentSlot" }] }),
    defineField({ name: "appointmentType", type: "reference", to: [{ type: "appointmentType" }] }),
    defineField({ name: "startAt", type: "datetime" }),
    defineField({ name: "customerName", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({
      name: "role",
      type: "string",
      options: {
        list: [
          { title: "Patient", value: "patient" },
          { title: "Caregiver booking for patient", value: "caregiver" },
        ],
      },
    }),
    defineField({
      name: "hasPrescription",
      type: "string",
      options: {
        list: [
          { title: "Yes, I have it", value: "yes" },
          { title: "Bringing it to the appointment", value: "bringing" },
          { title: "Need help obtaining", value: "needs-help" },
          { title: "Not applicable", value: "na" },
        ],
      },
    }),
    defineField({
      name: "notes",
      type: "text",
      rows: 3,
      description:
        "Customer-provided notes. Customers are instructed NOT to include medical history here.",
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: ["new", "confirmed", "completed", "no-show", "cancelled"],
      },
      initialValue: "new",
    }),
    defineField({ name: "submittedAt", type: "datetime" }),
  ],
  orderings: [
    {
      title: "Upcoming first",
      name: "startAtAsc",
      by: [{ field: "startAt", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      customerName: "customerName",
      startAt: "startAt",
      type: "appointmentType.name",
      status: "status",
    },
    prepare: ({ customerName, startAt, type, status }) => ({
      title: customerName ?? "(unknown)",
      subtitle: `${type ?? "—"} · ${
        startAt ? new Date(startAt).toLocaleString("en-US") : "—"
      } · ${status ?? "new"}`,
    }),
  },
});
