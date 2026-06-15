import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Allay Medical")
    .items([
      S.listItem()
        .title("Site settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      S.listItem()
        .title("Catalog")
        .child(
          S.list()
            .title("Catalog")
            .items([
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("product").title("Products"),
              S.documentTypeListItem("rentalEquipment").title("Rental equipment"),
            ])
        ),
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("blogPost").title("Blog posts"),
              S.documentTypeListItem("condition").title("Condition hubs"),
              S.documentTypeListItem("location").title("Location pages"),
              S.documentTypeListItem("service").title("Services"),
              S.documentTypeListItem("testimonial").title("Testimonials"),
              S.documentTypeListItem("faq").title("FAQs"),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Bookings")
        .child(
          S.list()
            .title("Bookings")
            .items([
              S.documentTypeListItem("appointmentType").title("Appointment types"),
              S.documentTypeListItem("appointmentSlot").title("Appointment slots"),
              S.documentTypeListItem("appointment").title("Appointments (customer bookings)"),
              S.divider(),
              S.documentTypeListItem("rentalRequest").title("Rental requests"),
            ])
        ),
    ]);
