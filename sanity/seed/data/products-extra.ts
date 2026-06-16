import { p, pt, slug } from "../helpers";

// Catalog expansion. New documents only (stable product-<slug> IDs) so they
// import additively with `sanity dataset import --missing` without touching the
// original ten products.
export const productsExtra = [
  // ---------------------------------------------------------------- Mobility
  {
    _id: "product-drive-folding-cane",
    _type: "product",
    name: "Drive Aluminum Folding Cane",
    slug: slug("drive-folding-cane"),
    sku: "DRV-10301",
    manufacturer: "Drive Medical",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Lightweight folding cane with a soft foam grip — folds into four sections to tuck in a bag or glovebox.",
    longDescription: pt(
      p(
        "The right first step for someone who needs a little balance support but isn't ready for a walker. Height-adjustable in 1-inch increments and folds down so it's there when you need it and out of the way when you don't."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "250 lb" },
      { label: "Height", value: "33–37 in, adjustable" },
      { label: "Folds", value: "4 sections" },
    ],
    priceCents: 1800,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-hugo-quad-cane",
    _type: "product",
    name: "Hugo Quad Cane",
    slug: slug("hugo-quad-cane"),
    sku: "HUG-731-862",
    manufacturer: "Hugo",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Four-point base for people who need a cane that stands on its own and offers more stability than a single tip.",
    longDescription: pt(
      p(
        "A quad cane bridges the gap between a standard cane and a walker. The four-point base self-stands, so it's there when you reach for it, and offers meaningfully more lateral stability — a common recommendation after a stroke or for one-sided weakness."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Base", value: "Small footprint quad" },
    ],
    priceCents: 3200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-drive-standard-walker",
    _type: "product",
    name: "Drive Two-Button Folding Walker",
    slug: slug("drive-standard-walker"),
    sku: "DRV-10210-1",
    manufacturer: "Drive Medical",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Classic dual-release folding walker — maximum stability for indoor use, with optional glide caps.",
    longDescription: pt(
      p(
        "When stability matters more than speed, a standard walker is still the most supportive option. Two-button release folds it flat for the car. We'll add 5-inch glides or tennis-ball-style caps to the front legs so it slides instead of lifts."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "350 lb" },
      { label: "Handle height", value: "32–39 in" },
    ],
    priceCents: 4200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-drive-nitro-rollator",
    _type: "product",
    name: "Drive Nitro Euro-Style Rollator",
    slug: slug("drive-nitro-rollator"),
    sku: "DRV-RTL10266",
    manufacturer: "Drive Medical",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Front-angled wheels and a sleek frame that maneuvers tight corners — the rollator customers pick for looks and turning.",
    longDescription: pt(
      p(
        "The Nitro's angled front casters turn on a dime, making it the easiest rollator we stock for apartments and narrow hallways. Cross-brace folds it slim enough to stand on its own against a wall."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Weight", value: "17.5 lb" },
      { label: "Seat height", value: "23.5 in" },
    ],
    priceCents: 26000,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-pride-gogo-scooter",
    _type: "product",
    name: "Pride Go-Go Elite Traveller Scooter",
    slug: slug("pride-gogo-elite-traveller"),
    sku: "PRD-SC40E",
    manufacturer: "Pride Mobility",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Travel power scooter that breaks into five pieces for a car trunk — no lift required.",
    longDescription: pt(
      p(
        "The Go-Go is the scooter caregivers can actually load alone. It disassembles into five lightweight pieces, the heaviest around 30 lb, so it fits in a sedan trunk. Great for someone who walks at home but needs range for the store, church, or a parade."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Top speed", value: "4 mph" },
      { label: "Range", value: "~7.5 mi per charge" },
      { label: "Heaviest piece", value: "~30 lb" },
    ],
    priceCents: 99500,
    inStock: true,
    regulated: false,
    fsaEligible: false,
  },
  {
    _id: "product-drive-cruiser-wheelchair",
    _type: "product",
    name: "Drive Cruiser III Standard Wheelchair",
    slug: slug("drive-cruiser-wheelchair"),
    sku: "DRV-K316DDA-SF",
    manufacturer: "Drive Medical",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Durable self-propel wheelchair with flip-back desk arms and swing-away footrests for daily home use.",
    longDescription: pt(
      p(
        "A full-size self-propelled chair for someone who'll use it daily and has the upper-body strength to push. Flip-back desk arms slide under a table; swing-away footrests make transfers safer."
      )
    ),
    specs: [
      { label: "Seat width", value: "18 in" },
      { label: "Weight capacity", value: "300 lb" },
    ],
    priceCents: 24500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
    rentalAvailable: true,
  },
  {
    _id: "product-lumex-upright-walker",
    _type: "product",
    name: "Lumex UpWalker Upright Walker",
    slug: slug("lumex-upright-walker"),
    sku: "LUM-UPRIGHT",
    manufacturer: "Lumex",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Stand-tall walker with forearm supports that encourages upright posture and takes weight off the wrists.",
    longDescription: pt(
      p(
        "An upright walker lets you walk looking forward instead of hunched over handlebars. Forearm rests shift the load off sore wrists and shoulders, and the higher posture reduces back strain. A favorite for arthritis and spinal stenosis."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "User height", value: "5'4\"–6'4\"" },
    ],
    priceCents: 54500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-bariatric-rollator",
    _type: "product",
    name: "Drive Bariatric Heavy-Duty Rollator",
    slug: slug("drive-bariatric-rollator"),
    sku: "DRV-10215RD-1",
    manufacturer: "Drive Medical",
    category: { _ref: "category-mobility-aids", _type: "reference" },
    shortDescription:
      "Reinforced rollator with a wider seat and a 500-lb capacity for heavier users who need a rest seat.",
    longDescription: pt(
      p(
        "A wider, reinforced frame rated to 500 lb with a 12-inch padded seat. Built for bariatric users who've outgrown a standard rollator's weight rating but still want the four-wheel-and-seat convenience."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "500 lb" },
      { label: "Seat width", value: "12 in" },
    ],
    priceCents: 29500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // -------------------------------------------------------------------- CPAP
  {
    _id: "product-airfit-n20",
    _type: "product",
    name: "ResMed AirFit N20 Nasal Mask",
    slug: slug("airfit-n20"),
    sku: "RES-63550",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "The most-fitted nasal mask — soft InfinitySeal cushion that flexes with movement, for nose-breathers.",
    longDescription: pt(
      p(
        "If you breathe through your nose and find pillows irritating, the N20 is usually the answer. Its cushion seals across a wide range of face shapes, which is why it's the nasal mask we reach for first. Comes with multiple cushion sizes to fit in store."
      )
    ),
    specs: [
      { label: "Type", value: "Nasal mask" },
      { label: "Sizes", value: "S, M, L cushions" },
    ],
    priceCents: 14500,
    inStock: true,
    regulated: true,
    fsaEligible: true,
  },
  {
    _id: "product-climatelineair-tubing",
    _type: "product",
    name: "ResMed ClimateLineAir Heated Tubing",
    slug: slug("climatelineair-tubing"),
    sku: "RES-37296",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "Heated tubing for the AirSense 11 that prevents rainout — no more cold condensation in the morning.",
    longDescription: pt(
      p(
        "If you wake up to water in your tube or mask, heated tubing fixes it. The ClimateLineAir warms the air path so humidity stays vapor instead of condensing. A standard insurance-eligible replacement item."
      )
    ),
    specs: [
      { label: "Fits", value: "AirSense 11 / AirCurve 11" },
      { label: "Replace", value: "Every 6–12 months" },
    ],
    priceCents: 3900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-airsense-filters",
    _type: "product",
    name: "ResMed AirSense 11 Air Filters (6-pack)",
    slug: slug("airsense-11-filters"),
    sku: "RES-39102",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "Standard disposable filters for the AirSense 11. Swap monthly — a six-pack covers half a year.",
    longDescription: pt(
      p(
        "Clean filters keep dust and pollen out of your therapy air and protect the motor. We recommend changing them monthly, or sooner if you have pets. A six-pack is the simplest way to stay ahead of it."
      )
    ),
    specs: [
      { label: "Fits", value: "AirSense 11" },
      { label: "Quantity", value: "6 filters" },
    ],
    priceCents: 1500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-cpap-humidifier-tub",
    _type: "product",
    name: "ResMed AirSense 11 Humidifier Tub",
    slug: slug("airsense-11-humidifier-tub"),
    sku: "RES-39103",
    manufacturer: "ResMed",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "Replacement water chamber for the AirSense 11 — mineral buildup is normal; swap every 6 months.",
    longDescription: pt(
      p(
        "Even with distilled water, humidifier tubs cloud and scale over time. A fresh chamber keeps your humidification consistent and your machine clean. Dishwasher-safe on the top rack between replacements."
      )
    ),
    specs: [
      { label: "Fits", value: "AirSense 11" },
      { label: "Replace", value: "Every ~6 months" },
    ],
    priceCents: 2400,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-cpap-mask-wipes",
    _type: "product",
    name: "CPAP Mask Cleaning Wipes (62 ct)",
    slug: slug("cpap-mask-wipes"),
    sku: "CTL-CW62",
    manufacturer: "Contour",
    category: { _ref: "category-cpap", _type: "reference" },
    shortDescription:
      "Unscented daily wipes that lift facial oils off the cushion so your mask seals better and lasts longer.",
    longDescription: pt(
      p(
        "Skin oil is the enemy of a good mask seal — it breaks down silicone and causes leaks. A quick wipe each morning roughly doubles cushion life. Alcohol-free and unscented so there's nothing to irritate skin overnight."
      )
    ),
    specs: [
      { label: "Count", value: "62 wipes" },
      { label: "Formula", value: "Alcohol-free, unscented" },
    ],
    priceCents: 1300,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // ------------------------------------------------------------- Bath safety
  {
    _id: "product-moen-grab-bar",
    _type: "product",
    name: "Moen 24\" Bathroom Grab Bar",
    slug: slug("moen-grab-bar"),
    sku: "MOE-LR8724D",
    manufacturer: "Moen",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Stainless 24-inch grab bar rated to 500 lb — the single most important bolt-in safety upgrade.",
    longDescription: pt(
      p(
        "A properly anchored grab bar is the difference between a stumble and a fall. This 24-inch bar mounts into studs (or with proper anchors) and is rated to 500 lb. We'll show you exactly where to place it for the shower entry or beside the toilet."
      )
    ),
    specs: [
      { label: "Length", value: "24 in" },
      { label: "Weight capacity", value: "500 lb" },
      { label: "Finish", value: "Stainless / concealed screw" },
    ],
    priceCents: 3500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-drive-transfer-bench",
    _type: "product",
    name: "Drive Tub Transfer Bench",
    slug: slug("drive-transfer-bench"),
    sku: "DRV-12011KD-1",
    manufacturer: "Drive Medical",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Sit, slide, and swing your legs over the tub wall — the safest way in and out of a bathtub.",
    longDescription: pt(
      p(
        "For anyone who can't safely step over a tub wall, a transfer bench is the answer: you sit on the outboard seat, then slide across. Two legs sit outside the tub, two inside. Height-adjustable, with a backrest and a reversible design for either-side tubs."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "400 lb" },
      { label: "Seat height", value: "17.5–22.5 in" },
    ],
    priceCents: 9500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-drive-bedside-commode",
    _type: "product",
    name: "Drive 3-in-1 Bedside Commode",
    slug: slug("drive-bedside-commode"),
    sku: "DRV-11148KD-1",
    manufacturer: "Drive Medical",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Works three ways: bedside commode, raised toilet seat, or toilet safety frame. A recovery staple.",
    longDescription: pt(
      p(
        "One of the most useful single items for recovery at home. Use it as a standalone commode beside the bed at night, drop the pail and place it over the existing toilet as a raised seat with arms, or use the frame alone for stability. Adjustable height."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "350 lb" },
      { label: "Modes", value: "Commode, raised seat, safety frame" },
    ],
    priceCents: 7900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-carex-toilet-frame",
    _type: "product",
    name: "Carex Toilet Safety Rails",
    slug: slug("carex-toilet-safety-rails"),
    sku: "CAR-B204",
    manufacturer: "Carex",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Bolt-on arms that give you something sturdy to push up from — installs on most existing toilets.",
    longDescription: pt(
      p(
        "If the toilet height is fine but the sit-to-stand is the problem, safety rails add the arms without raising the seat. They attach under the existing seat bolts and adjust for width and height."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Width", value: "Adjustable" },
    ],
    priceCents: 4300,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-handheld-shower",
    _type: "product",
    name: "Handheld Shower Spray with 6-ft Hose",
    slug: slug("handheld-shower-spray"),
    sku: "DRV-12440",
    manufacturer: "Drive Medical",
    category: { _ref: "category-bath-safety", _type: "reference" },
    shortDescription:
      "Lets a seated bather rinse without standing or twisting — pairs with any shower chair or transfer bench.",
    longDescription: pt(
      p(
        "A handheld sprayer is the quiet hero of a safe shower. Once someone is seated on a bench, a 6-foot hose lets them — or a caregiver — rinse every area without standing up. Tool-free install on a standard shower arm."
      )
    ),
    specs: [
      { label: "Hose length", value: "6 ft" },
      { label: "Install", value: "Tool-free, standard fitting" },
    ],
    priceCents: 2900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // ------------------------------------------------------------- Compression
  {
    _id: "product-jobst-ultrasheer-20-30",
    _type: "product",
    name: "JOBST UltraSheer 20-30 mmHg Knee-High",
    slug: slug("jobst-ultrasheer-20-30"),
    sku: "JOB-119412",
    manufacturer: "JOBST",
    category: { _ref: "category-compression", _type: "reference" },
    shortDescription:
      "Standard therapeutic compression for venous insufficiency and post-surgical swelling — sheer finish.",
    longDescription: pt(
      p(
        "20-30 mmHg is the most commonly prescribed range for chronic venous insufficiency, varicose veins, and post-surgical swelling. The UltraSheer finish keeps it discreet. We measure your ankle, calf, and length to size it correctly — fit is everything at this compression."
      )
    ),
    specs: [
      { label: "Compression", value: "20–30 mmHg" },
      { label: "Style", value: "Knee-high, closed toe" },
    ],
    priceCents: 5500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-jobst-relief-thigh",
    _type: "product",
    name: "JOBST Relief 20-30 mmHg Thigh-High",
    slug: slug("jobst-relief-thigh-high"),
    sku: "JOB-114215",
    manufacturer: "JOBST",
    category: { _ref: "category-compression", _type: "reference" },
    shortDescription:
      "Thigh-high therapeutic compression with a silicone band — for swelling that extends above the knee.",
    longDescription: pt(
      p(
        "When swelling reaches the thigh, a knee-high isn't enough. The Relief line is JOBST's value workhorse — durable, with a silicone top band that holds it up without rolling. Fitted in store to your measurements."
      )
    ),
    specs: [
      { label: "Compression", value: "20–30 mmHg" },
      { label: "Style", value: "Thigh-high, silicone band" },
    ],
    priceCents: 6900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-jobst-men-15-20",
    _type: "product",
    name: "JOBST for Men 15-20 mmHg Socks",
    slug: slug("jobst-for-men-15-20"),
    sku: "JOB-110304",
    manufacturer: "JOBST",
    category: { _ref: "category-compression", _type: "reference" },
    shortDescription:
      "Ribbed dress-sock styling in mild medical compression — looks like a normal sock under slacks.",
    longDescription: pt(
      p(
        "Designed to look like a standard ribbed dress sock so men actually wear them. 15-20 mmHg handles tired legs, mild swelling, and long days on your feet or in a plane seat."
      )
    ),
    specs: [
      { label: "Compression", value: "15–20 mmHg" },
      { label: "Style", value: "Knee-high, ribbed" },
    ],
    priceCents: 3900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-arm-sleeve-20-30",
    _type: "product",
    name: "JOBST Bella Strong Arm Sleeve 20-30 mmHg",
    slug: slug("jobst-bella-arm-sleeve"),
    sku: "JOB-102262",
    manufacturer: "JOBST",
    category: { _ref: "category-compression", _type: "reference" },
    shortDescription:
      "Lymphedema arm sleeve for post-mastectomy and chronic swelling — durable knit with a comfort band.",
    longDescription: pt(
      p(
        "A common need after breast-cancer surgery and for chronic upper-limb lymphedema. We carry it with and without a gauntlet and fit it to your arm length and circumference. Bring your prescription so we hold the ordered compression."
      )
    ),
    specs: [
      { label: "Compression", value: "20–30 mmHg" },
      { label: "Use", value: "Lymphedema, post-mastectomy" },
    ],
    priceCents: 8900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-stocking-donner",
    _type: "product",
    name: "Stocking Donner / Doffer Aid",
    slug: slug("stocking-donner-aid"),
    sku: "JOB-DONNER",
    manufacturer: "JOBST",
    category: { _ref: "category-compression", _type: "reference" },
    shortDescription:
      "The tool that makes compression stockings actually wearable when hands or back won't cooperate.",
    longDescription: pt(
      p(
        "The number-one reason people abandon compression therapy is they can't get the stockings on. A donner aid solves that — slide the stocking over the frame, then guide your foot and leg in. We'll demo it at the counter."
      )
    ),
    specs: [
      { label: "Use", value: "Donning knee/thigh-high stockings" },
    ],
    priceCents: 3400,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // -------------------------------------------------------------- Wound care
  {
    _id: "product-gauze-pads-4x4",
    _type: "product",
    name: "Sterile Gauze Pads 4\" x 4\" (100 ct)",
    slug: slug("sterile-gauze-pads-4x4"),
    sku: "MED-PRM21408",
    manufacturer: "Medline",
    category: { _ref: "category-wound-care", _type: "reference" },
    shortDescription:
      "The workhorse of home wound care — individually wrapped, sterile, 12-ply absorbency.",
    longDescription: pt(
      p(
        "Sterile 4x4 gauze is the basis of most home dressing changes. Individually wrapped so each pad stays sterile until you open it. We stock these by the box because nobody ever buys too few."
      )
    ),
    specs: [
      { label: "Size", value: "4 in x 4 in" },
      { label: "Count", value: "100, individually wrapped" },
      { label: "Sterility", value: "Sterile, 12-ply" },
    ],
    priceCents: 1900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-telfa-nonstick",
    _type: "product",
    name: "Telfa Non-Stick Pads 3\" x 4\" (50 ct)",
    slug: slug("telfa-nonstick-pads"),
    sku: "COV-7591D",
    manufacturer: "Cardinal Health",
    category: { _ref: "category-wound-care", _type: "reference" },
    shortDescription:
      "Pads that don't fuse to the wound — so the dressing change doesn't undo the healing.",
    longDescription: pt(
      p(
        "Plain gauze can dry into a wound and tear it open on removal. Telfa's perforated film face lifts away cleanly, which is why it's the go-to for surgical incisions and abrasions. Pair with gauze and tape."
      )
    ),
    specs: [
      { label: "Size", value: "3 in x 4 in" },
      { label: "Count", value: "50" },
    ],
    priceCents: 2200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-micropore-tape",
    _type: "product",
    name: "3M Micropore Paper Tape 1\" (2-pack)",
    slug: slug("micropore-paper-tape"),
    sku: "MMM-1530-1",
    manufacturer: "3M",
    category: { _ref: "category-wound-care", _type: "reference" },
    shortDescription:
      "Gentle paper tape that holds a dressing but peels off without tearing fragile skin.",
    longDescription: pt(
      p(
        "Older and post-surgical skin is fragile, and aggressive tape causes its own wounds. Micropore holds securely yet releases cleanly — the tape we recommend for daily dressing changes and sensitive skin."
      )
    ),
    specs: [
      { label: "Width", value: "1 in" },
      { label: "Pack", value: "2 rolls" },
    ],
    priceCents: 1100,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-wound-cleanser",
    _type: "product",
    name: "Saline Wound Cleanser Spray (7.4 oz)",
    slug: slug("saline-wound-cleanser"),
    sku: "MED-MSC097044",
    manufacturer: "Medline",
    category: { _ref: "category-wound-care", _type: "reference" },
    shortDescription:
      "No-rinse saline spray to flush a wound clean without the sting of harsher antiseptics.",
    longDescription: pt(
      p(
        "Gentle, no-rinse, and non-stinging — a controlled saline spray clears debris from a wound bed without damaging healing tissue the way alcohol or peroxide can. The first step in most dressing changes."
      )
    ),
    specs: [
      { label: "Volume", value: "7.4 oz" },
      { label: "Formula", value: "Saline, no-rinse" },
    ],
    priceCents: 1600,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-hydrocolloid-dressings",
    _type: "product",
    name: "Hydrocolloid Dressings 4\" x 4\" (5 ct)",
    slug: slug("hydrocolloid-dressings"),
    sku: "MED-MSC5544EP",
    manufacturer: "Medline",
    category: { _ref: "category-wound-care", _type: "reference" },
    shortDescription:
      "Waterproof, self-adhesive dressings that hold a moist healing environment for pressure sores and blisters.",
    longDescription: pt(
      p(
        "Hydrocolloids create the moist, protected environment that speeds healing for early-stage pressure injuries, blisters, and shallow wounds — and they're waterproof, so they stay put for days. Ask us about staging before using these on a pressure sore."
      )
    ),
    specs: [
      { label: "Size", value: "4 in x 4 in" },
      { label: "Count", value: "5" },
    ],
    priceCents: 2600,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-postop-kit",
    _type: "product",
    name: "Allay Post-Op Wound Care Kit",
    slug: slug("post-op-wound-care-kit"),
    sku: "ALY-POSTOP1",
    manufacturer: "Allay Medical",
    category: { _ref: "category-wound-care", _type: "reference" },
    shortDescription:
      "Everything for two weeks of dressing changes in one box — cleanser, non-stick pads, gauze, and gentle tape.",
    longDescription: pt(
      p(
        "We got tired of customers leaving the hospital and hunting for five separate items, so we kit them together. Includes saline cleanser, Telfa non-stick pads, 4x4 gauze, Micropore tape, and gloves — enough for a typical two-week post-op course. Ask for it by name."
      )
    ),
    specs: [
      { label: "Covers", value: "~2 weeks of changes" },
      { label: "Includes", value: "Cleanser, non-stick pads, gauze, tape, gloves" },
    ],
    priceCents: 3900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // ------------------------------------------------------------ Incontinence
  {
    _id: "product-depend-underwear",
    _type: "product",
    name: "Depend Pull-On Protective Underwear (Maximum)",
    slug: slug("depend-protective-underwear"),
    sku: "KIM-53745",
    manufacturer: "Depend",
    category: { _ref: "category-incontinence", _type: "reference" },
    shortDescription:
      "Pull-on underwear for active, mobile adults — pulls up and down like regular underwear.",
    longDescription: pt(
      p(
        "For someone who's up and about and manages their own toileting, pull-on underwear preserves dignity and independence — it looks and works like regular underwear. We carry men's and women's cuts. Bring a waist measurement and we'll match absorbency."
      )
    ),
    specs: [
      { label: "Style", value: "Pull-on, unisex options" },
      { label: "Absorbency", value: "Maximum / daytime" },
    ],
    priceCents: 4200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-bladder-pads",
    _type: "product",
    name: "Bladder Control Pads (Heavy, 39 ct)",
    slug: slug("bladder-control-pads"),
    sku: "MED-BCPH39",
    manufacturer: "Medline",
    category: { _ref: "category-incontinence", _type: "reference" },
    shortDescription:
      "Discreet liners for light-to-moderate leakage — worn inside regular underwear.",
    longDescription: pt(
      p(
        "For light to moderate leakage, a pad inside regular underwear is all most people need. Adhesive backing keeps it in place, and the profile is thin enough to be invisible under clothing."
      )
    ),
    specs: [
      { label: "Absorbency", value: "Heavy" },
      { label: "Count", value: "39" },
    ],
    priceCents: 2300,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-underpads",
    _type: "product",
    name: "Tranquility Disposable Underpads 30\" x 36\" (40 ct)",
    slug: slug("tranquility-underpads"),
    sku: "TRQ-2078",
    manufacturer: "Tranquility",
    category: { _ref: "category-incontinence", _type: "reference" },
    shortDescription:
      "Heavy-duty bed and chair pads (\"chux\") that protect the mattress overnight.",
    longDescription: pt(
      p(
        "Underpads protect the mattress, chair, or car seat and make cleanup a single step. Tranquility's are more absorbent than the thin hospital versions, with a soft top sheet that's gentler on skin for overnight use."
      )
    ),
    specs: [
      { label: "Size", value: "30 in x 36 in" },
      { label: "Count", value: "40" },
    ],
    priceCents: 3600,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-barrier-cream",
    _type: "product",
    name: "Calmoseptine Skin Barrier Cream (4 oz)",
    slug: slug("calmoseptine-barrier-cream"),
    sku: "CAL-00799",
    manufacturer: "Calmoseptine",
    category: { _ref: "category-incontinence", _type: "reference" },
    shortDescription:
      "Protects and soothes skin against moisture damage — essential alongside any incontinence routine.",
    longDescription: pt(
      p(
        "Prolonged moisture breaks skin down fast. A zinc-based barrier cream protects against incontinence-associated dermatitis and soothes already-irritated skin. A small amount at each change goes a long way."
      )
    ),
    specs: [
      { label: "Size", value: "4 oz" },
      { label: "Active", value: "Menthol + zinc oxide" },
    ],
    priceCents: 1400,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // ------------------------------------------------------------- Daily living
  {
    _id: "product-reacher-grabber",
    _type: "product",
    name: "RMS 32\" Reacher Grabber",
    slug: slug("reacher-grabber-32"),
    sku: "RMS-G32",
    manufacturer: "RMS",
    category: { _ref: "category-daily-living", _type: "reference" },
    shortDescription:
      "Grab dropped keys, reach a top shelf, or pull on socks — without the bend that ends in a fall.",
    longDescription: pt(
      p(
        "A $20 reacher prevents the bend-and-fall and the climb-and-fall — two of the most common ways people end up in the ER. Rotating jaw with a magnetic tip for keys and coins, and enough grip to hold a water bottle."
      )
    ),
    specs: [
      { label: "Length", value: "32 in" },
      { label: "Tip", value: "Rotating jaw, magnetic" },
    ],
    priceCents: 1900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-dressing-aid-kit",
    _type: "product",
    name: "Dressing Aid Kit (sock aid, shoehorn, dressing stick)",
    slug: slug("dressing-aid-kit"),
    sku: "RMS-DRESS5",
    manufacturer: "RMS",
    category: { _ref: "category-daily-living", _type: "reference" },
    shortDescription:
      "Get dressed without bending past a new hip or knee — sock aid, long shoehorn, and dressing stick.",
    longDescription: pt(
      p(
        "After a hip or knee replacement, you're told not to bend past 90 degrees — which makes getting dressed surprisingly hard. This kit (sock aid, 24-inch shoehorn, button hook, and dressing stick) is the standard recommendation from occupational therapists."
      )
    ),
    specs: [
      { label: "Includes", value: "Sock aid, shoehorn, dressing stick, button hook" },
      { label: "Great for", value: "Post hip/knee surgery" },
    ],
    priceCents: 2400,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-bed-assist-rail",
    _type: "product",
    name: "Stander Bed Assist Rail",
    slug: slug("bed-assist-rail"),
    sku: "STD-8000",
    manufacturer: "Stander",
    category: { _ref: "category-daily-living", _type: "reference" },
    shortDescription:
      "A handle that slides under the mattress and gives you something to grab getting in and out of bed.",
    longDescription: pt(
      p(
        "Getting out of bed is a daily fall risk. A bed assist rail slides under the mattress and provides a sturdy handhold for the sit-to-stand, plus an organizer pouch for the phone and glasses. No tools, fits most home beds."
      )
    ),
    specs: [
      { label: "Weight capacity", value: "300 lb" },
      { label: "Install", value: "Slides under mattress, no tools" },
    ],
    priceCents: 4900,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-gait-belt",
    _type: "product",
    name: "Gait Belt with Quick-Release Buckle (60\")",
    slug: slug("gait-belt-60"),
    sku: "MED-MDT828203",
    manufacturer: "Medline",
    category: { _ref: "category-daily-living", _type: "reference" },
    shortDescription:
      "Gives a caregiver a safe, firm hold during transfers and walking — protects both of you.",
    longDescription: pt(
      p(
        "A gait belt is the single most important caregiver tool for safe transfers. It gives you a firm handhold around the person's waist so you're not pulling on an arm or under the shoulders. Quick-release buckle and a washable woven belt."
      )
    ),
    specs: [
      { label: "Length", value: "60 in" },
      { label: "Buckle", value: "Quick-release" },
    ],
    priceCents: 1500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-pill-organizer",
    _type: "product",
    name: "Weekly AM/PM Pill Organizer",
    slug: slug("weekly-pill-organizer"),
    sku: "RMS-PILL14",
    manufacturer: "RMS",
    category: { _ref: "category-daily-living", _type: "reference" },
    shortDescription:
      "Fourteen compartments — morning and evening for all seven days — with easy-open lids.",
    longDescription: pt(
      p(
        "Missed and doubled doses are a real hazard with a long medication list. A clear AM/PM organizer makes it obvious at a glance whether today's pills were taken. Large compartments and lids that open without a fight for arthritic hands."
      )
    ),
    specs: [
      { label: "Layout", value: "7 days, AM + PM" },
      { label: "Lids", value: "Easy-open" },
    ],
    priceCents: 1200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },

  // --------------------------------------------------------------------- PPE
  {
    _id: "product-nitrile-gloves",
    _type: "product",
    name: "Nitrile Exam Gloves (Box of 100)",
    slug: slug("nitrile-exam-gloves"),
    sku: "MED-486802",
    manufacturer: "Medline",
    category: { _ref: "category-ppe", _type: "reference" },
    shortDescription:
      "Powder-free, latex-free exam gloves for dressing changes and personal care. Sold by the box.",
    longDescription: pt(
      p(
        "The everyday glove for home caregiving — powder-free and latex-free so there's no allergy worry. Textured fingertips for grip during dressing changes and personal care. Tell us your size; we stock S through XL."
      )
    ),
    specs: [
      { label: "Material", value: "Nitrile, powder-free, latex-free" },
      { label: "Count", value: "100 per box" },
      { label: "Sizes", value: "S, M, L, XL" },
    ],
    priceCents: 1500,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-n95-masks",
    _type: "product",
    name: "3M N95 Respirator Masks (10-pack)",
    slug: slug("n95-respirator-masks"),
    sku: "MMM-8210-10",
    manufacturer: "3M",
    category: { _ref: "category-ppe", _type: "reference" },
    shortDescription:
      "NIOSH-approved N95 respirators for higher-risk caregiving and immunocompromised households.",
    longDescription: pt(
      p(
        "When a surgical mask isn't enough — caring for someone immunocompromised, or during respiratory illness season — an N95 filters at least 95% of airborne particles. NIOSH-approved, individually usable for several wears if undamaged."
      )
    ),
    specs: [
      { label: "Rating", value: "NIOSH N95" },
      { label: "Pack", value: "10 masks" },
    ],
    priceCents: 2200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-surgical-masks",
    _type: "product",
    name: "Procedure Masks, Level 1 (Box of 50)",
    slug: slug("procedure-masks-50"),
    sku: "MED-NON27375",
    manufacturer: "Medline",
    category: { _ref: "category-ppe", _type: "reference" },
    shortDescription:
      "Everyday earloop masks for general caregiving and clinic visits. Box of 50.",
    longDescription: pt(
      p(
        "The standard disposable earloop mask for routine caregiving, appointments, and waiting rooms. Three-ply with a soft inner layer and an adjustable nose wire. Box of 50 for households that go through them."
      )
    ),
    specs: [
      { label: "Type", value: "Level 1 earloop, 3-ply" },
      { label: "Count", value: "50" },
    ],
    priceCents: 1200,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
  {
    _id: "product-isolation-gowns",
    _type: "product",
    name: "Disposable Isolation Gowns (10-pack)",
    slug: slug("isolation-gowns"),
    sku: "MED-NONLV325",
    manufacturer: "Medline",
    category: { _ref: "category-ppe", _type: "reference" },
    shortDescription:
      "Fluid-resistant gowns for messier care tasks — keeps clothing clean during wound or incontinence care.",
    longDescription: pt(
      p(
        "For the messier parts of caregiving — wound irrigation, incontinence cleanup — a disposable gown keeps your clothes clean and reduces cross-contamination. Full-back coverage with tie closures, one size fits most."
      )
    ),
    specs: [
      { label: "Material", value: "Fluid-resistant" },
      { label: "Pack", value: "10 gowns" },
    ],
    priceCents: 2800,
    inStock: true,
    regulated: false,
    fsaEligible: true,
  },
];
