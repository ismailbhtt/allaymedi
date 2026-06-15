import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", type: "array", of: [{ type: "block" }], validation: (r) => r.required() }),
    defineField({
      name: "topic",
      type: "string",
      options: {
        list: [
          "mobility",
          "cpap",
          "bath-safety",
          "compression",
          "wound-care",
          "incontinence",
          "rental",
          "insurance-fsa-hsa",
          "shipping-returns",
          "general",
        ],
      },
    }),
  ],
  preview: { select: { title: "question", subtitle: "topic" } },
});
