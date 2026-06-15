import "server-only";
import { cache } from "react";

import { client } from "./client";
import {
  siteSettingsQuery,
  allCategoriesQuery,
  categoryBySlugQuery,
  productBySlugQuery,
  allProductsStaticParamsQuery,
  allRentalEquipmentQuery,
  rentalEquipmentBySlugQuery,
  serviceBySlugQuery,
  allServicesQuery,
  conditionBySlugQuery,
  allConditionsQuery,
  locationBySlugQuery,
  allLocationsQuery,
  allBlogPostsQuery,
  blogPostBySlugQuery,
  allSlugsQuery,
  allAppointmentTypesQuery,
  appointmentTypeBySlugQuery,
  upcomingSlotsQuery,
  appointmentByIdQuery,
} from "./queries";

async function safeFetch<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[sanity] fetch failed — returning fallback", err instanceof Error ? err.message : err);
    }
    return fallback;
  }
}

export const getSiteSettings = cache(async () =>
  safeFetch(() => client.fetch<SiteSettings | null>(siteSettingsQuery), null)
);

export const getAllCategories = cache(async () =>
  safeFetch(() => client.fetch<Category[]>(allCategoriesQuery), [])
);

export const getCategoryBySlug = cache(async (slug: string) =>
  safeFetch(() => client.fetch<CategoryDetail | null>(categoryBySlugQuery, { slug }), null)
);

export const getProductBySlug = cache(async (slug: string) =>
  safeFetch(() => client.fetch<ProductDetail | null>(productBySlugQuery, { slug }), null)
);

export const getAllProductsStaticParams = cache(async () =>
  safeFetch(
    () =>
      client.fetch<{ productSlug: string; categorySlug: string }[]>(allProductsStaticParamsQuery),
    []
  )
);

export const getAllRentalEquipment = cache(async () =>
  safeFetch(() => client.fetch<RentalEquipmentSummary[]>(allRentalEquipmentQuery), [])
);

export const getRentalEquipmentBySlug = cache(async (slug: string) =>
  safeFetch(
    () => client.fetch<RentalEquipmentDetail | null>(rentalEquipmentBySlugQuery, { slug }),
    null
  )
);

export const getServiceBySlug = cache(async (slug: string) =>
  safeFetch(() => client.fetch<ServiceDetail | null>(serviceBySlugQuery, { slug }), null)
);

export const getAllServices = cache(async () =>
  safeFetch(() => client.fetch<ServiceSummary[]>(allServicesQuery), [])
);

export const getConditionBySlug = cache(async (slug: string) =>
  safeFetch(() => client.fetch<ConditionDetail | null>(conditionBySlugQuery, { slug }), null)
);

export const getAllConditions = cache(async () =>
  safeFetch(() => client.fetch<ConditionSummary[]>(allConditionsQuery), [])
);

export const getLocationBySlug = cache(async (slug: string) =>
  safeFetch(() => client.fetch<LocationDetail | null>(locationBySlugQuery, { slug }), null)
);

export const getAllLocations = cache(async () =>
  safeFetch(() => client.fetch<LocationSummary[]>(allLocationsQuery), [])
);

export const getAllBlogPosts = cache(async () =>
  safeFetch(() => client.fetch<BlogPostSummary[]>(allBlogPostsQuery), [])
);

export const getBlogPostBySlug = cache(async (slug: string) =>
  safeFetch(() => client.fetch<BlogPostDetail | null>(blogPostBySlugQuery, { slug }), null)
);

export const getAllAppointmentTypes = cache(async () =>
  safeFetch(() => client.fetch<AppointmentTypeSummary[]>(allAppointmentTypesQuery), [])
);

export const getAppointmentTypeBySlug = cache(async (slug: string) =>
  safeFetch(
    () => client.fetch<AppointmentTypeDetail | null>(appointmentTypeBySlugQuery, { slug }),
    null
  )
);

export const getUpcomingSlots = async (typeId: string) =>
  safeFetch(
    () =>
      client.fetch<AppointmentSlot[]>(
        upcomingSlotsQuery,
        { typeId, now: new Date().toISOString() },
        { next: { revalidate: 60 } }
      ),
    []
  );

export const getAppointmentById = cache(async (id: string) =>
  safeFetch(() => client.fetch<AppointmentRecord | null>(appointmentByIdQuery, { id }), null)
);

export const getAllSlugs = cache(async () =>
  safeFetch(
    () =>
      client.fetch<{
        categories: string[];
        products: { product: string; category: string }[];
        rentals: string[];
        services: string[];
        conditions: string[];
        locations: string[];
        blog: string[];
        appointmentTypes: string[];
      }>(allSlugsQuery),
    {
      categories: [],
      products: [],
      rentals: [],
      services: [],
      conditions: [],
      locations: [],
      blog: [],
      appointmentTypes: [],
    }
  )
);

// Types

export type SanityImage = {
  asset?: { _ref?: string; _id?: string };
  alt: string;
  lqip?: string;
  dimensions?: { width: number; height: number; aspectRatio: number };
  hotspot?: unknown;
  crop?: unknown;
};

export type PortableTextBlock = {
  _type: string;
  [key: string]: unknown;
};

export type Category = {
  _id: string;
  name: string;
  slug: string;
  order?: number;
  description?: string;
  heroImage?: SanityImage;
};

export type CategoryDetail = Category & {
  heroHeadline?: string;
  educationalContent?: PortableTextBlock[];
  buyingGuide?: { _id: string; question: string; answer: PortableTextBlock[] }[];
  products: ProductSummary[];
  seo?: Seo;
};

export type ProductSummary = {
  _id: string;
  name: string;
  slug: string;
  priceCents: number | null;
  inStock: boolean;
  regulated: boolean;
  fsaEligible: boolean;
  rentalAvailable: boolean;
  shortDescription?: string;
  manufacturer?: string;
  image?: SanityImage;
  categorySlug?: string;
};

export type ProductDetail = ProductSummary & {
  sku?: string;
  images?: SanityImage[];
  muxVideo?: string;
  longDescription?: PortableTextBlock[];
  specs?: { label: string; value: string }[];
  faqs?: { _id: string; question: string; answer: PortableTextBlock[] }[];
  relatedProducts?: ProductSummary[];
  category?: { name: string; slug: string };
  stripePriceId?: string;
  inStoreOnly?: boolean;
  seo?: Seo;
};

export type RentalEquipmentSummary = {
  _id: string;
  name: string;
  slug: string;
  equipmentType?: string;
  image?: SanityImage;
  dailyRateCents?: number;
  weeklyRateCents?: number;
  monthlyRateCents?: number;
  availableUnits?: number;
};

export type RentalEquipmentDetail = RentalEquipmentSummary & {
  images?: SanityImage[];
  description?: PortableTextBlock[];
  specs?: { label: string; value: string }[];
  depositCents?: number;
  deliveryAvailable?: boolean;
  pickupInstructions?: string;
  seo?: Seo;
};

export type ServiceSummary = {
  _id: string;
  name: string;
  slug: string;
  summary?: string;
};

export type ServiceDetail = ServiceSummary & {
  body?: PortableTextBlock[];
  pricingNote?: string;
  bookingEnabled?: boolean;
  walkInOnly?: boolean;
  heroImage?: SanityImage;
  faqs?: { _id: string; question: string; answer: PortableTextBlock[] }[];
  seo?: Seo;
};

export type ConditionSummary = {
  _id: string;
  name: string;
  slug: string;
  heroHeadline?: string;
  heroIntro?: string;
  heroImage?: SanityImage;
};

export type ConditionDetail = ConditionSummary & {
  explainerVideoMuxId?: string;
  educationalContent?: PortableTextBlock[];
  recommendedProducts?: ProductSummary[];
  faqs?: { _id: string; question: string; answer: PortableTextBlock[] }[];
  seo?: Seo;
};

export type LocationSummary = {
  _id: string;
  city: string;
  slug: string;
  heroIntro?: string;
};

export type LocationDetail = LocationSummary & {
  heroHeadline?: string;
  neighborhoods?: string[];
  drivingDirections?: PortableTextBlock[];
  localBody?: PortableTextBlock[];
  featuredTestimonials?: {
    _id: string;
    name: string;
    location?: string;
    quote: string;
    rating?: number;
    productOrService?: string;
    photo?: SanityImage;
  }[];
  seo?: Seo;
};

export type BlogPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt: string;
  author?: { name?: string; credentials?: string };
  coverImage?: SanityImage;
};

export type BlogPostDetail = BlogPostSummary & {
  body?: PortableTextBlock[];
  relatedProducts?: ProductSummary[];
  seo?: Seo;
};

export type SiteSettings = {
  announcement?: string;
  announcementHref?: string;
  partners?: { name: string; url?: string; logo?: SanityImage }[];
  certifications?: string[];
  featuredTestimonials?: LocationDetail["featuredTestimonials"];
  homeCategoryOrder?: Category[];
  homeRentalFeatured?: RentalEquipmentSummary[];
  homeBlogFeatured?: BlogPostSummary[];
};

export type AppointmentTypeSummary = {
  _id: string;
  name: string;
  slug: string;
  durationMinutes: number;
  shortDescription?: string;
  requiresPrescription?: boolean;
  whatToBring?: string[];
  hipaaIntakeUrl?: string;
  seo?: Seo;
};

export type AppointmentTypeDetail = AppointmentTypeSummary & {
  longDescription?: PortableTextBlock[];
};

export type AppointmentSlot = {
  _id: string;
  _rev: string;
  startAt: string;
};

export type AppointmentRecord = {
  _id: string;
  customerName: string;
  email: string;
  phone: string;
  role?: "patient" | "caregiver";
  hasPrescription?: string;
  notes?: string;
  startAt: string;
  status: string;
  appointmentType?: {
    name: string;
    slug: string;
    durationMinutes: number;
    whatToBring?: string[];
    hipaaIntakeUrl?: string;
  };
};

export type Seo = {
  title?: string;
  description?: string;
  noIndex?: boolean;
  ogImage?: SanityImage;
};
