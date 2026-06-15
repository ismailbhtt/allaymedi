import { defineField, defineType } from "sanity";
import { seoField } from "./fields/seo";

export const appointmentType = defineType({
  name: "appointmentType",
  title: "Appointment type",
  type: "document",
  description:
    "A bookable appointment (e.g. CPAP fitting). Slots are created separately as appointmentSlot documents.",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "durationMinutes",
      type: "number",
      initialValue: 30,
      validation: (r) => r.required().min(5).max(240),
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      rows: 2,
      validation: (r) => r.max(280),
    }),
    defineField({
      name: "longDescription",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "requiresPrescription",
      type: "boolean",
      initialValue: false,
      description:
        "If true, the booking flow prompts the customer to confirm they have a current prescription.",
    }),
    defineField({
      name: "whatToBring",
      type: "array",
      of: [{ type: "string" }],
      description: "Displayed on the confirmation page and in the email.",
    }),
    defineField({
      name: "hipaaIntakeUrl",
      title: "HIPAA intake URL (BAA-signed tool)",
      type: "url",
      description:
        "Link to a HIPAA-compliant intake form (Paubox Forms, Jotform HIPAA, Formstack HIPAA, etc.). Emailed to the customer after booking for medical history. Leave blank if no medical intake is needed.",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this appointment type from the booking page.",
    }),
    seoField,
  ],
  preview: {
    select: { title: "name", subtitle: "durationMinutes" },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle ? `${subtitle} min` : "No duration",
    }),
  },
});
