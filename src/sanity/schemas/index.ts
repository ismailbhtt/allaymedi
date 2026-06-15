import type { SchemaTypeDefinition } from "sanity";

import { product } from "./product";
import { category } from "./category";
import { rentalEquipment } from "./rentalEquipment";
import { service } from "./service";
import { condition } from "./condition";
import { location } from "./location";
import { blogPost } from "./blogPost";
import { testimonial } from "./testimonial";
import { siteSettings } from "./siteSettings";
import { faq } from "./faq";
import { rentalRequest } from "./rentalRequest";
import { appointmentType } from "./appointmentType";
import { appointmentSlot } from "./appointmentSlot";
import { appointment } from "./appointment";

export const schemaTypes: SchemaTypeDefinition[] = [
  product,
  category,
  rentalEquipment,
  service,
  condition,
  location,
  blogPost,
  testimonial,
  siteSettings,
  faq,
  rentalRequest,
  appointmentType,
  appointmentSlot,
  appointment,
];
