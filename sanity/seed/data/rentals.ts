import { p, pt, slug } from "../helpers";

export const rentalEquipment = [
  {
    _id: "rental-hospital-bed",
    _type: "rentalEquipment",
    name: "Electric hospital bed (full-electric)",
    slug: slug("hospital-bed"),
    equipmentType: "hospital-bed",
    description: pt(
      p(
        "Full-electric three-function hospital bed — adjustable head, foot, and overall height via a handheld remote. Includes mattress, half-rails, and a trapeze if you need assistance sitting up."
      ),
      p(
        "We deliver, set up, and pick up within the Portland metro. Most rentals are 4–12 weeks during recovery from a major procedure or a hospice period."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "450 lb" },
      { label: "Bed functions", value: "Head, foot, height" },
      { label: "Delivery", value: "Included in Portland metro" },
    ],
    dailyRateCents: 2500,
    weeklyRateCents: 12500,
    monthlyRateCents: 39500,
    depositCents: 10000,
    availableUnits: 3,
    deliveryAvailable: true,
    pickupInstructions:
      "We'll call to schedule delivery and setup. Typical delivery window is same or next business day.",
  },
  {
    _id: "rental-knee-scooter",
    _type: "rentalEquipment",
    name: "Knee scooter",
    slug: slug("knee-scooter"),
    equipmentType: "knee-scooter",
    description: pt(
      p(
        "Four-wheel knee scooter for post-foot-surgery non-weight-bearing recovery. Steering column, hand brake, and padded knee platform. Our #1 rental."
      ),
      p(
        "Pickup at our Lake Oswego store. Delivery available for additional fee. We fit height before you leave — the seat should put the knee at a natural 90°."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Height adjustment", value: "Handlebar + knee platform" },
    ],
    dailyRateCents: 1000,
    weeklyRateCents: 3500,
    monthlyRateCents: 10000,
    depositCents: 5000,
    availableUnits: 6,
    deliveryAvailable: true,
  },
  {
    _id: "rental-wheelchair",
    _type: "rentalEquipment",
    name: "Standard wheelchair (self-propelled)",
    slug: slug("wheelchair"),
    equipmentType: "wheelchair",
    description: pt(
      p(
        "Standard 18-inch self-propelled wheelchair with swing-away footrests. Ideal for medium-term recovery where the user can self-propel."
      )
    ),
    specs: [
      { label: "Seat width", value: "18 in" },
      { label: "Weight capacity", value: "300 lb" },
    ],
    dailyRateCents: 1000,
    weeklyRateCents: 4500,
    monthlyRateCents: 12500,
    depositCents: 5000,
    availableUnits: 4,
    deliveryAvailable: true,
  },
  {
    _id: "rental-ramp",
    _type: "rentalEquipment",
    name: "Threshold & modular ramp",
    slug: slug("ramp"),
    equipmentType: "ramp",
    description: pt(
      p(
        "Threshold ramps (single-step) and modular aluminum ramps for multi-step entries. We come out and measure first to recommend the right slope (minimum 1:12 for ADA; steeper is unsafe)."
      )
    ),
    specs: [
      { label: "Threshold ramp lengths", value: "1', 2', 3'" },
      { label: "Modular ramp", value: "4'–16' configurations" },
    ],
    dailyRateCents: 1000,
    weeklyRateCents: 6000,
    monthlyRateCents: 18000,
    depositCents: 15000,
    availableUnits: 2,
    deliveryAvailable: true,
    pickupInstructions:
      "We'll come out and measure before quoting a monthly rate. Rates depend on ramp length and whether installation requires ground anchoring.",
  },
];
