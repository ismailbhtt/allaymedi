import { p, pt, slug } from "../helpers";

// Rental fleet expansion — additive, new rental-<slug> IDs only.
export const rentalEquipmentExtra = [
  {
    _id: "rental-semi-electric-bed",
    _type: "rentalEquipment",
    name: "Semi-electric hospital bed",
    slug: slug("semi-electric-hospital-bed"),
    equipmentType: "hospital-bed",
    description: pt(
      p(
        "Head and foot adjust by remote; height is set manually with a crank. The economical choice when the patient is fairly stationary and a caregiver handles repositioning. Includes mattress and half-rails."
      ),
      p(
        "Delivered and set up within the Portland metro. We'll talk through whether semi- or full-electric fits your situation before you commit to a rate."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "450 lb" },
      { label: "Powered functions", value: "Head + foot (height manual)" },
      { label: "Delivery", value: "Included in Portland metro" },
    ],
    dailyRateCents: 2000,
    weeklyRateCents: 10000,
    monthlyRateCents: 32000,
    depositCents: 10000,
    availableUnits: 3,
    deliveryAvailable: true,
    pickupInstructions:
      "We deliver, assemble, and pick up. Same or next business day in most of the metro.",
  },
  {
    _id: "rental-patient-lift",
    _type: "rentalEquipment",
    name: "Patient lift (Hoyer-style)",
    slug: slug("patient-lift"),
    equipmentType: "patient-lift",
    description: pt(
      p(
        "Hydraulic or electric sit-to-stand and full-sling lifts for safely moving someone who can't bear weight — bed to chair, chair to commode. Protects both the patient and the caregiver's back."
      ),
      p(
        "We size the sling and show your family exactly how to use it at delivery. Renting is ideal for a recovery or hospice period where you don't want to buy."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "400 lb" },
      { label: "Sling", value: "Sized and included" },
      { label: "Delivery", value: "Included with training" },
    ],
    dailyRateCents: 2500,
    weeklyRateCents: 12000,
    monthlyRateCents: 38000,
    depositCents: 12500,
    availableUnits: 2,
    deliveryAvailable: true,
    pickupInstructions:
      "Delivery includes a hands-on lesson for the caregiver. We won't leave until you're comfortable operating it.",
  },
  {
    _id: "rental-transport-chair",
    _type: "rentalEquipment",
    name: "Lightweight transport chair",
    slug: slug("transport-chair"),
    equipmentType: "wheelchair",
    description: pt(
      p(
        "A 19-lb caregiver-pushed chair for getting to appointments and outings. Folds into a trunk. The short-term answer when someone can't walk far but doesn't need a chair full time."
      )
    ),
    specs: [
      { label: "Seat width", value: "19 in" },
      { label: "Weight capacity", value: "300 lb" },
      { label: "Weight (folded)", value: "19 lb" },
    ],
    dailyRateCents: 800,
    weeklyRateCents: 3500,
    monthlyRateCents: 9500,
    depositCents: 4000,
    availableUnits: 5,
    deliveryAvailable: true,
  },
  {
    _id: "rental-mobility-scooter",
    _type: "rentalEquipment",
    name: "Travel mobility scooter",
    slug: slug("mobility-scooter"),
    equipmentType: "scooter",
    description: pt(
      p(
        "A four-wheel travel scooter for a visit, a vacation week, or a big event where someone needs range they don't have at home. Disassembles for a car trunk."
      ),
      p(
        "Popular for out-of-town family visiting, recovery periods, and trial-before-you-buy. Picked up in store or delivered locally; we fit and demo before you go."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Top speed", value: "4 mph" },
      { label: "Disassembles", value: "For sedan trunk" },
    ],
    dailyRateCents: 2000,
    weeklyRateCents: 9000,
    monthlyRateCents: 27000,
    depositCents: 10000,
    availableUnits: 2,
    deliveryAvailable: true,
  },
];
