import { p, pt, slug } from "../helpers";

export const services = [
  {
    _id: "service-sharps-disposal",
    _type: "service",
    name: "Sharps disposal",
    slug: slug("sharps-disposal"),
    summary:
      "Safe walk-in disposal of insulin needles, lancets, and other sharps. No appointment needed.",
    body: pt(
      p(
        "Drop off your filled sharps container at the counter during store hours. We handle the regulated disposal process so you don't have to ship it or worry about municipal trash restrictions."
      ),
      p(
        "If you don't have a sharps container, we sell FDA-approved 1-quart, 2-quart, and 1-gallon containers. We recommend picking up one size bigger than you think you need — most households fill theirs faster than expected."
      ),
      p(
        "Please do NOT bring glass vials, aerosol cans, pharmaceuticals, or household hazardous waste. For those, contact Metro Hazardous Waste at metro.org/hazardouswaste."
      )
    ),
    pricingNote: "$5 per 1-quart container, $8 per 2-quart, $15 per 1-gallon.",
    bookingEnabled: false,
    walkInOnly: true,
    seo: {
      title: "Walk-in sharps disposal in Lake Oswego",
      description: "Drop off filled sharps containers at our counter. FDA-approved, regulated disposal.",
    },
  },
  {
    _id: "service-notary",
    _type: "service",
    name: "Notary public",
    slug: slug("notary"),
    summary:
      "Walk-in notary services for medical directives, releases, powers of attorney, and healthcare forms.",
    body: pt(
      p(
        "One of our team members is a commissioned notary public. We can notarize most single-signer documents on the spot during regular store hours."
      ),
      p(
        "Bring government-issued photo ID (driver's license, passport). The document should be unsigned when you arrive — the notary must witness the signature. For documents with multiple signers, all signers must be present and have valid ID."
      )
    ),
    pricingNote: "$10 per notarization. Free for Allay customers with a same-day purchase.",
    bookingEnabled: false,
    walkInOnly: true,
    seo: {
      title: "Notary public in Lake Oswego — medical directives & POA",
      description: "Walk-in notary for medical directives, releases, and healthcare POAs.",
    },
  },
  {
    _id: "service-vaccinations",
    _type: "service",
    name: "Vaccinations",
    slug: slug("vaccinations"),
    summary:
      "Seasonal vaccinations when available. Call ahead for current inventory and eligibility.",
    body: pt(
      p(
        "We offer seasonal vaccinations (typically flu, COVID-19, and occasionally shingles) through a partnership with a local provider. Availability is seasonal and inventory-dependent — please call before coming in."
      ),
      p(
        "Most insurance covers these vaccinations at no out-of-pocket cost. Bring your insurance card. We cannot bill Medicare Part B directly for vaccinations; we can bill Medicare Part D and most commercial plans."
      )
    ),
    pricingNote: "Call for current pricing and insurance options.",
    bookingEnabled: false,
    walkInOnly: false,
    seo: {
      title: "Vaccinations in Lake Oswego — flu, COVID, shingles",
      description: "Seasonal vaccination availability. Call for current inventory.",
    },
  },
];
