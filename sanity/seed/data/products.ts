import { p, pt, slug } from "../helpers";

export const products = [
  {
    _id: "product-resmed-airsense-11",
    _type: "product",
    name: "ResMed AirSense 11 AutoSet",
    slug: slug("resmed-airsense-11"),
    sku: "RES-39000",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "The gold-standard auto-adjusting CPAP — touchscreen, built-in humidifier, and quiet night-long therapy.",
    longDescription: pt(
      p(
        "The AirSense 11 is ResMed's current flagship auto-CPAP, replacing the long-running AirSense 10. It automatically adjusts pressure through the night as your breathing changes and ships with a built-in heated humidifier."
      ),
      p(
        "Requires a current CPAP prescription from your provider. We fit and configure the machine in store so you leave ready to use it the first night."
      )
    ),
    specs: [
      { label: "Pressure range", value: "4–20 cmH2O" },
      { label: "Modes", value: "AutoSet, CPAP, AutoSet for Her" },
      { label: "Humidifier", value: "Integrated, heated" },
      { label: "Weight", value: "2.48 lb" },
    ],
    priceCents: 95000,
    inStock: true,
    regulated: true,
    fsaEligible: true,
    relatedProducts: [
      { _ref: "product-airfit-p10", _type: "reference", _key: "r1" },
      { _ref: "product-airfit-f30i", _type: "reference", _key: "r2" },
    ],
  },
  {
    _id: "product-resmed-airmini",
    _type: "product",
    name: "ResMed AirMini Travel CPAP",
    slug: slug("resmed-airmini"),
    sku: "RES-38800",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "The world's smallest auto-adjusting CPAP — fits in your hand, ideal for travel, camping, and second homes.",
    longDescription: pt(
      p(
        "At 0.66 lb, the AirMini is designed for people who actually travel with their therapy. No built-in humidifier — instead it uses waterless HumidX exhalation heat-and-moisture exchangers that sit in the tubing."
      )
    ),
    specs: [
      { label: "Weight", value: "0.66 lb" },
      { label: "Power", value: "100–240V + optional battery pack" },
      { label: "Humidification", value: "Waterless HumidX" },
    ],
    priceCents: 90000,
    inStock: true,
    regulated: true,
    fsaEligible: true,
  },
  {
    _id: "product-airfit-p10",
    _type: "product",
    name: "ResMed AirFit P10 Nasal Pillow Mask",
    slug: slug("airfit-p10"),
    sku: "RES-62901",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "Lightweight nasal pillow mask for side sleepers and minimalists — our most-fitted CPAP mask.",
    longDescription: pt(
      p(
        "The P10's headgear-free design is ideal for people who sleep on their side or who want the least mask footprint possible. Comes with three pillow sizes (small, medium, large) so we can fit you in store."
      )
    ),
    specs: [
      { label: "Type", value: "Nasal pillow" },
      { label: "Sizes", value: "S, M, L pillows included" },
    ],
    priceCents: 12500,
    inStock: true,
    regulated: true,
    fsaEligible: true,
  },
  {
    _id: "product-airfit-f30i",
    _type: "product",
    name: "ResMed AirFit F30i Full Face Mask",
    slug: slug("airfit-f30i"),
    sku: "RES-63835",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "Top-of-head tubing connection with a full-face cushion — great for mouth-breathers who want side-sleep freedom.",
    longDescription: pt(
      p(
        "The F30i uses a cushion that sits under the nose rather than over it, reducing pressure on the bridge of the nose while still sealing for mouth-breathing. Tubing connects at the top of the head for cable-free sleeping."
      )
    ),
    specs: [
      { label: "Type", value: "Full face (under-nose cushion)" },
      { label: "Sizes", value: "S, M, L, XW cushions" },
    ],
    priceCents: 17500,
    inStock: true,
    regulated: true,
    fsaEligible: true,
  },
  {
    _id: "product-nova-rollator",
    _type: "product",
    name: "Nova Vibe 6 Rollator",
    slug: slug("nova-vibe-6-rollator"),
    sku: "NOV-4215",
    manufacturer: "Nova",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "A four-wheel rollator with 6-inch wheels, folding seat, and 300-lb capacity. Our top-selling rollator three years running.",
    longDescription: pt(
      p(
        "The Vibe 6 is the right-sized rollator for 80% of customers: it rolls well indoors, handles short grass and gravel, folds flat for a car trunk, and has a cushioned seat for rest breaks. Height-adjustable in 1-inch increments."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Weight (folded)", value: "15 lb" },
      { label: "Seat height", value: "21 in" },
      { label: "Handle height", value: "31–37 in" },
    ],
    priceCents: 22000,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-transport-wheelchair",
    _type: "product",
    name: "Drive Medical 19\" Transport Wheelchair",
    slug: slug("drive-transport-wheelchair"),
    sku: "DRV-TR37E-SV",
    manufacturer: "Drive Medical",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Lightweight transport chair for caregiver push — folds into a trunk, ideal for appointments and outings.",
    longDescription: pt(
      p(
        "At 19 lb, the Drive TR37 is the wheelchair caregivers reach for when they need to move someone from the car to an appointment. Smaller rear wheels require a pusher — not self-propelled."
      )
    ),
    specs: [
      { label: "Seat width", value: "19 in" },
      { label: "Weight capacity", value: "300 lb" },
      { label: "Weight (folded)", value: "19 lb" },
    ],
    priceCents: 18000,
    inStock: true,
    regulated: false,
    fsaEligible: true,
    rentalAvailable: true,
  },
  {
    _id: "product-shower-bench",
    _type: "product",
    name: "Moen DN7110 Shower Chair",
    slug: slug("moen-shower-chair"),
    sku: "MOE-DN7110",
    manufacturer: "Moen",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Adjustable-height shower chair with a drainage-slotted seat. 400-lb capacity, slip-resistant feet.",
    longDescription: pt(
      p(
        "Moen's DN7110 is the quality upgrade to a basic shower chair — better rubber feet, a cleaner aesthetic, and an easy-adjust height slider. 400-lb capacity covers most bariatric cases without going to a dedicated bariatric bench."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "400 lb" },
      { label: "Seat height", value: "16–21 in" },
    ],
    priceCents: 8500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-raised-toilet-seat",
    _type: "product",
    name: "Carex 3.5\" Raised Toilet Seat with Arms",
    slug: slug("carex-raised-toilet-seat"),
    sku: "CAR-B318",
    manufacturer: "Carex",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Raises the toilet seat 3.5 inches and adds sturdy side arms. The single best fall-prevention item in the bathroom.",
    longDescription: pt(
      p(
        "A raised toilet seat with arms is, pound-for-pound, the most effective fall-prevention purchase for an aging-in-place household. Adds 3.5 inches of height so the sit-stand motion is gentler on knees and hips, and gives you something to push off from."
      )
    ),
    specs: [
      { label: "Added height", value: "3.5 in" },
      { label: "Weight capacity", value: "300 lb" },
      { label: "Fits", value: "Elongated and round bowls" },
    ],
    priceCents: 7500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-jobst-ultrasheer",
    _type: "product",
    name: "JOBST UltraSheer 15-20 mmHg Knee-High",
    slug: slug("jobst-ultrasheer-15-20"),
    sku: "JOB-119408",
    manufacturer: "JOBST",
    category: { _ref: "category-compression", _type: "reference" },
    shortDescription:
      "Mild medical compression for tired legs, mild swelling, and travel. Sheer — wears like a dress hosiery.",
    longDescription: pt(
      p(
        "15-20 mmHg is the range most people mean when they say 'compression stockings.' Enough to reduce end-of-day leg fatigue and mild swelling; sheer enough to wear under a dress or slacks."
      )
    ),
    specs: [
      { label: "Compression", value: "15–20 mmHg" },
      { label: "Style", value: "Knee-high, closed toe" },
    ],
    priceCents: 4500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-medline-briefs",
    _type: "product",
    name: "Medline Protection Plus Overnight Briefs (Large)",
    slug: slug("medline-briefs-large"),
    sku: "MED-MSC33001A",
    manufacturer: "Medline",
    category: { _ref: "category-incontinence", _type: "reference" },
    shortDescription:
      "Tab-style briefs, overnight-level absorbency. Sold by the case — FSA/HSA eligible.",
    longDescription: pt(
      p(
        "Medline Protection Plus is our baseline overnight brief for adults who need 8+ hours of protection. Tab closures, breathable back, and leg gathers for side-sleepers."
      )
    ),
    specs: [
      { label: "Absorbency", value: "Overnight" },
      { label: "Size", value: "Large (waist 45–58 in)" },
      { label: "Case qty", value: "72 briefs" },
    ],
    priceCents: 6800,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
];
