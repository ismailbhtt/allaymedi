import { refArray } from "../helpers";

export const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  announcement:
    "Free same-day pickup in Lake Oswego · FSA/HSA cards accepted · Call (971) 233-8121",
  announcementHref: "/contact",
  partners: [
    { _key: "p1", name: "ResMed", url: "https://www.resmed.com" },
    { _key: "p2", name: "Medline", url: "https://www.medline.com" },
    { _key: "p3", name: "Nova", url: "https://novajoy.com" },
    { _key: "p4", name: "Pride Mobility", url: "https://www.pridemobility.com" },
    { _key: "p5", name: "JOBST", url: "https://www.jobst-usa.com" },
    { _key: "p6", name: "McKesson", url: "https://www.mckesson.com" },
  ],
  certifications: [
    "Family-operated since 2011",
    "FSA/HSA merchant (SIGIS)",
    "ResMed Authorized Retailer",
    "JOBST Premium Partner",
  ],
  featuredTestimonials: refArray([
    "testimonial-margaret-w",
    "testimonial-david-susan-k",
    "testimonial-robert-c",
    "testimonial-jean-m",
    "testimonial-thomas-r",
  ]),
  homeCategoryOrder: refArray([
    "category-mobility-aids",
    "category-cpap",
    "category-bath-safety",
    "category-compression",
    "category-wound-care",
    "category-incontinence",
    "category-daily-living",
    "category-ppe",
  ]),
  homeRentalFeatured: refArray([
    "rental-hospital-bed",
    "rental-knee-scooter",
    "rental-wheelchair",
    "rental-ramp",
  ]),
  homeBlogFeatured: refArray([
    "post-rollator-vs-walker",
    "post-cpap-mask-sizing",
    "post-bath-safety-checklist",
  ]),
};
