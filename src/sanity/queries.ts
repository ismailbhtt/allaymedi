import { groq } from "next-sanity";

const imageFragment = `{
  ...,
  "alt": coalesce(alt, ""),
  "lqip": asset->metadata.lqip,
  "dimensions": asset->metadata.dimensions
}`;

const seoFragment = `seo{
  title, description, noIndex,
  "ogImage": ogImage${imageFragment}
}`;

export const siteSettingsQuery = groq`
*[_type == "siteSettings"][0]{
  announcement, announcementHref,
  partners[]{ name, url, "logo": logo${imageFragment} },
  certifications,
  "featuredTestimonials": featuredTestimonials[]->{ _id, name, location, quote, rating, productOrService, "photo": photo${imageFragment} },
  "homeCategoryOrder": homeCategoryOrder[]->{ _id, name, "slug": slug.current, "heroImage": heroImage${imageFragment} },
  "homeRentalFeatured": homeRentalFeatured[]->{ _id, name, "slug": slug.current, equipmentType, dailyRateCents, weeklyRateCents, "image": images[0]${imageFragment} },
  "homeBlogFeatured": homeBlogFeatured[]->{ _id, title, "slug": slug.current, excerpt, publishedAt, "coverImage": coverImage${imageFragment} }
}`;

export const allCategoriesQuery = groq`
*[_type == "category" && !defined(parent)] | order(order asc){
  _id, name, "slug": slug.current, order, description,
  "heroImage": heroImage${imageFragment}
}`;

export const categoryBySlugQuery = groq`
*[_type == "category" && slug.current == $slug][0]{
  _id, name, "slug": slug.current, heroHeadline, description,
  "heroImage": heroImage${imageFragment},
  educationalContent,
  "buyingGuide": buyingGuide[]->{ _id, question, answer },
  ${seoFragment},
  "products": *[_type == "product" && references(^._id)] | order(inStock desc, name asc){
    _id, name, "slug": slug.current, priceCents, inStock, regulated, fsaEligible, rentalAvailable, shortDescription, manufacturer,
    "image": images[0]${imageFragment}
  }
}`;

export const productBySlugQuery = groq`
*[_type == "product" && slug.current == $slug][0]{
  _id, name, "slug": slug.current, sku, manufacturer,
  "category": category->{ name, "slug": slug.current },
  "images": images[]${imageFragment},
  muxVideo,
  shortDescription, longDescription, specs,
  priceCents, stripePriceId, inStock, inStoreOnly, regulated, fsaEligible, rentalAvailable,
  "faqs": faqs[]->{ _id, question, answer },
  "relatedProducts": relatedProducts[]->{ _id, name, "slug": slug.current, priceCents, "image": images[0]${imageFragment}, "categorySlug": category->slug.current },
  ${seoFragment}
}`;

export const allProductsStaticParamsQuery = groq`
*[_type == "product" && defined(slug.current)]{
  "productSlug": slug.current,
  "categorySlug": category->slug.current
}`;

export const allRentalEquipmentQuery = groq`
*[_type == "rentalEquipment"] | order(name asc){
  _id, name, "slug": slug.current, equipmentType,
  "image": images[0]${imageFragment},
  dailyRateCents, weeklyRateCents, monthlyRateCents,
  availableUnits
}`;

export const rentalEquipmentBySlugQuery = groq`
*[_type == "rentalEquipment" && slug.current == $slug][0]{
  _id, name, "slug": slug.current, equipmentType,
  "images": images[]${imageFragment},
  description, specs,
  dailyRateCents, weeklyRateCents, monthlyRateCents, depositCents,
  availableUnits, deliveryAvailable, pickupInstructions,
  ${seoFragment}
}`;

export const serviceBySlugQuery = groq`
*[_type == "service" && slug.current == $slug][0]{
  _id, name, "slug": slug.current,
  summary, body, pricingNote, bookingEnabled, walkInOnly,
  "heroImage": heroImage${imageFragment},
  "faqs": faqs[]->{ _id, question, answer },
  ${seoFragment}
}`;

export const allServicesQuery = groq`
*[_type == "service"] | order(name asc){
  _id, name, "slug": slug.current, summary
}`;

export const conditionBySlugQuery = groq`
*[_type == "condition" && slug.current == $slug][0]{
  _id, name, "slug": slug.current, heroHeadline, heroIntro,
  "heroImage": heroImage${imageFragment},
  explainerVideoMuxId,
  educationalContent,
  "recommendedProducts": recommendedProducts[]->{ _id, name, "slug": slug.current, priceCents, "image": images[0]${imageFragment}, "categorySlug": category->slug.current, shortDescription },
  "faqs": faqs[]->{ _id, question, answer },
  ${seoFragment}
}`;

export const allConditionsQuery = groq`
*[_type == "condition"] | order(name asc){
  _id, name, "slug": slug.current, heroHeadline, heroIntro,
  "heroImage": heroImage${imageFragment}
}`;

export const locationBySlugQuery = groq`
*[_type == "location" && slug.current == $slug][0]{
  _id, city, "slug": slug.current, heroHeadline, heroIntro,
  neighborhoods, drivingDirections, localBody,
  "featuredTestimonials": featuredTestimonials[]->{ _id, name, location, quote, rating, productOrService, "photo": photo${imageFragment} },
  ${seoFragment}
}`;

export const allLocationsQuery = groq`
*[_type == "location"] | order(city asc){
  _id, city, "slug": slug.current, heroIntro
}`;

export const allBlogPostsQuery = groq`
*[_type == "blogPost"] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, category, publishedAt,
  author,
  "coverImage": coverImage${imageFragment}
}`;

export const blogPostBySlugQuery = groq`
*[_type == "blogPost" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, excerpt, category, publishedAt,
  author, body,
  "coverImage": coverImage${imageFragment},
  "relatedProducts": relatedProducts[]->{ _id, name, "slug": slug.current, priceCents, "image": images[0]${imageFragment}, "categorySlug": category->slug.current },
  ${seoFragment}
}`;

export const allAppointmentTypesQuery = groq`
*[_type == "appointmentType" && isActive == true] | order(name asc){
  _id, name, "slug": slug.current,
  durationMinutes, shortDescription, requiresPrescription, whatToBring, hipaaIntakeUrl,
  ${seoFragment}
}`;

export const appointmentTypeBySlugQuery = groq`
*[_type == "appointmentType" && slug.current == $slug && isActive == true][0]{
  _id, name, "slug": slug.current,
  durationMinutes, shortDescription, longDescription,
  requiresPrescription, whatToBring, hipaaIntakeUrl,
  ${seoFragment}
}`;

// Upcoming, unbooked, active slots for a given type, starting from now.
// $now is expected to be an ISO datetime string.
export const upcomingSlotsQuery = groq`
*[_type == "appointmentSlot"
  && appointmentType._ref == $typeId
  && isActive == true
  && booked == false
  && startAt > $now] | order(startAt asc)[0...60]{
    _id, _rev, startAt
}`;

export const slotByIdQuery = groq`
*[_type == "appointmentSlot" && _id == $id][0]{
  _id, _rev, startAt, booked, isActive,
  "appointmentType": appointmentType->{
    _id, name, "slug": slug.current, durationMinutes, whatToBring, hipaaIntakeUrl
  }
}`;

export const appointmentByIdQuery = groq`
*[_type == "appointment" && _id == $id][0]{
  _id, customerName, email, phone, role, hasPrescription, notes, startAt, status,
  "appointmentType": appointmentType->{ name, "slug": slug.current, durationMinutes, whatToBring, hipaaIntakeUrl }
}`;

export const allSlugsQuery = groq`{
  "categories": *[_type == "category" && defined(slug.current)].slug.current,
  "products": *[_type == "product" && defined(slug.current)]{ "product": slug.current, "category": category->slug.current },
  "rentals": *[_type == "rentalEquipment" && defined(slug.current)].slug.current,
  "services": *[_type == "service" && defined(slug.current)].slug.current,
  "conditions": *[_type == "condition" && defined(slug.current)].slug.current,
  "locations": *[_type == "location" && defined(slug.current)].slug.current,
  "blog": *[_type == "blogPost" && defined(slug.current)].slug.current,
  "appointmentTypes": *[_type == "appointmentType" && isActive == true && defined(slug.current)].slug.current
}`;
