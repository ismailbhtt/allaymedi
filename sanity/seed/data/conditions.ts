import { h2, h3, p, pt, slug } from "../helpers";

export const conditions = [
  {
    _id: "condition-sleep-apnea",
    _type: "condition",
    name: "Sleep Apnea",
    slug: slug("sleep-apnea"),
    heroHeadline: "New CPAP user? We fit you in person.",
    heroIntro:
      "90% of CPAP failures are mask fit failures. We spend the time to try multiple masks with you — no rushed handoff.",
    educationalContent: pt(
      h2("Why CPAP prescriptions come to our counter"),
      p(
        "The moment your sleep specialist hands you a CPAP prescription, you have choices. You can mail-order a machine you've never touched, wait for it to arrive, try it, have it leak, and spend weeks figuring out the problem. Or you can walk into our store, hand us the prescription, and walk out with a machine sized to your face that you've already exhaled into under our supervision."
      ),
      p("We carry ResMed AirSense 11 and ResMed AirMini travel machines. Both are gold-standard auto-adjusting CPAP devices."),
      h2("What to bring to your first fitting"),
      p(
        "Your current CPAP prescription (a fax or photo from your provider is fine), your insurance information if you're using benefits, and a rough idea of how you sleep — side, back, stomach, mouth-breather, beard, glasses."
      ),
      h2("The three mask types — and who each one fits"),
      h3("Nasal pillow (smallest)"),
      p(
        "Sits just inside the nostrils. Best for side sleepers who don't want anything across their face. Requires nose-only breathing."
      ),
      h3("Nasal mask (middle)"),
      p(
        "Covers just the nose. The most common starting mask. Good for mild beards."
      ),
      h3("Full face mask"),
      p(
        "Covers nose and mouth. Mandatory if you breathe through your mouth while sleeping, or if you have nasal congestion. Heavier and louder, but it's the right choice for a third of CPAP users."
      ),
      h2("Supply replacement cadence"),
      p(
        "Most insurance covers CPAP supplies replacement on a schedule: mask cushions every 2 weeks, full masks every 3 months, tubing every 3 months, filters monthly. We track it for you and remind you when you're due."
      ),
      h2("Cleaning — the question we get asked most"),
      p(
        "Warm water, mild dish soap, air dry. Daily for the mask cushion, weekly for the tubing, monthly for the machine's water chamber. Never use bleach. The ozone cleaners sold online aren't FDA-approved; we recommend against them."
      )
    ),
    faqs: [
      { _ref: "faq-cpap-prescription", _type: "reference", _key: "f1" },
      { _ref: "faq-cpap-mask-sizing", _type: "reference", _key: "f2" },
      { _ref: "faq-cpap-cleaning", _type: "reference", _key: "f3" },
      { _ref: "faq-cpap-travel", _type: "reference", _key: "f4" },
    ],
    recommendedProducts: [
      { _ref: "product-resmed-airsense-11", _type: "reference", _key: "r1" },
      { _ref: "product-resmed-airmini", _type: "reference", _key: "r2" },
      { _ref: "product-airfit-p10", _type: "reference", _key: "r3" },
      { _ref: "product-airfit-f30i", _type: "reference", _key: "r4" },
    ],
    seo: {
      title: "New to CPAP? In-person mask fitting in Lake Oswego",
      description:
        "ResMed CPAP machines, real fittings, supplies replacement on insurance cadence. Bring your prescription.",
    },
  },
  {
    _id: "condition-post-surgical-recovery",
    _type: "condition",
    name: "Post-Surgical Recovery",
    slug: slug("post-surgical-recovery"),
    heroHeadline: "Everything you need before you come home from surgery",
    heroIntro:
      "Rent what you'll only use for a few weeks. Buy the consumables once. We coordinate pickup when you're done.",
    educationalContent: pt(
      h2("Why surgeons send patients here"),
      p(
        "Local orthopedic, bariatric, and general surgeons refer their patients to us because we rent. Most equipment you need for post-surgical recovery — a knee scooter after a foot surgery, a hospital bed after a spinal procedure, a wheelchair after a hip replacement — is only needed for 2 to 8 weeks. Buying it is a waste of money and storage."
      ),
      h2("The typical post-op setup"),
      p(
        "Depending on what you're recovering from, you'll want some combination of: a rolling walker or knee scooter, a transfer bench or shower chair, a raised toilet seat, a grabber, ice packs, and (for major recovery) a hospital bed and wedge pillow. We have a pre-surgery consultation checklist — call ahead and we'll pull it together."
      ),
      h2("How rental works"),
      p(
        "You reserve by phone or through this site. We confirm availability the same day. Pay the rental fee and a refundable deposit when you pick up. When you're done, call us — we pick up at your home or you drop off at the store. The deposit comes back the same day."
      ),
      h2("When to pick up"),
      p(
        "Most surgeons send you home with a list and expect you to have equipment in place before the procedure. Call us 7–10 days ahead so we can reserve the right rentals. Last-minute arrangements are usually possible but inventory is tighter."
      )
    ),
    faqs: [
      { _ref: "faq-rental-deposit", _type: "reference", _key: "f1" },
      { _ref: "faq-rental-delivery", _type: "reference", _key: "f2" },
      { _ref: "faq-insurance-rental", _type: "reference", _key: "f3" },
    ],
    recommendedProducts: [
      { _ref: "product-transport-wheelchair", _type: "reference", _key: "r3" },
      { _ref: "product-shower-bench", _type: "reference", _key: "r4" },
    ],
    seo: {
      title: "Post-surgical recovery equipment — rentals & supplies",
      description:
        "Hospital beds, knee scooters, transfer benches, shower chairs. Rent what you only need short-term.",
    },
  },
  {
    _id: "condition-mobility-support",
    _type: "condition",
    name: "Mobility Support",
    slug: slug("mobility-support"),
    heroHeadline: "Stay mobile — at home, in the yard, in the world",
    heroIntro:
      "The right mobility aid is the one that fits your body, your home, and the places you want to go. We'll help you sort it out.",
    educationalContent: pt(
      h2("Start with the question of how much stability"),
      p(
        "A cane supports about 25% of body weight. A walker supports significantly more and gives bilateral support. A rollator is a walker with wheels — it rolls instead of lifts. A transport chair needs a pusher. A wheelchair is self-propelled. A scooter is electric."
      ),
      h2("Transitioning between aids"),
      p(
        "Most people under-use their aid at the start and over-rely on it later. Work with your PT to size to your current function, not your worst day. Re-evaluate every six months."
      ),
      h2("Home fit matters as much as body fit"),
      p(
        "Measure your narrowest hallway. Measure your bathroom door. Check if your car trunk holds the folded version. A great rollator that doesn't fit through your bathroom door is worse than a merely-adequate one that does."
      )
    ),
    faqs: [
      { _ref: "faq-rollator-vs-walker", _type: "reference", _key: "f1" },
      { _ref: "faq-wheelchair-sizing", _type: "reference", _key: "f2" },
    ],
    recommendedProducts: [
      { _ref: "product-nova-rollator", _type: "reference", _key: "r1" },
      { _ref: "product-transport-wheelchair", _type: "reference", _key: "r2" },
    ],
    seo: {
      title: "Mobility aids — canes, walkers, rollators, wheelchairs",
      description:
        "Fitted in person for your body, your home, and your daily routines.",
    },
  },
  {
    _id: "condition-caring-for-elderly-parent",
    _type: "condition",
    name: "Caring for an elderly parent",
    slug: slug("caring-for-elderly-parent"),
    heroHeadline: "Caring for a parent at home? Start here.",
    heroIntro:
      "We've walked hundreds of adult children through the same conversation. Here's the equipment that actually matters.",
    educationalContent: pt(
      h2("Four items that keep someone home instead of in a facility"),
      p("If your parent is showing unsteady balance, occasional confusion, or has had a small fall, the four pieces of equipment that most reduce risk are:"),
      h3("1. Bolted grab bars"),
      p("Near the toilet, inside the shower, and at the shower entrance. Suction-mount bars are not acceptable for load-bearing use."),
      h3("2. Raised toilet seat with arms"),
      p("Lowers the distance of the sit-and-stand, which is where most bathroom falls happen."),
      h3("3. Shower chair or transfer bench"),
      p("Stops the in-shower standing that causes slip-and-fall injuries."),
      h3("4. Bed handle or rail"),
      p("Prevents the roll-out-of-bed injury, one of the most common late-night falls."),
      h2("When you need more than equipment"),
      p(
        "If your parent has fallen more than once in the past year, can't manage medications, or is losing weight unintentionally, talk with their primary care provider. Equipment reduces risk; it doesn't replace supervision."
      ),
      h2("Conversations that are hard but necessary"),
      p(
        "Most adult children wait too long to buy incontinence products. Buy them. Have them on hand. Don't ask permission. Your parent may object at first; they'll adapt fast."
      )
    ),
    faqs: [
      { _ref: "faq-grab-bar-install", _type: "reference", _key: "f1" },
      { _ref: "faq-shower-chair-tub", _type: "reference", _key: "f2" },
    ],
    recommendedProducts: [
      { _ref: "product-raised-toilet-seat", _type: "reference", _key: "r1" },
      { _ref: "product-shower-bench", _type: "reference", _key: "r2" },
      { _ref: "product-nova-rollator", _type: "reference", _key: "r3" },
    ],
    seo: {
      title: "Caring for an elderly parent — the equipment that matters",
      description:
        "Straightforward guidance on mobility, bath safety, and what actually prevents falls.",
    },
  },
  {
    _id: "condition-incontinence-management",
    _type: "condition",
    name: "Incontinence management",
    slug: slug("incontinence-management"),
    heroHeadline: "Incontinence products, sized without judgement",
    heroIntro:
      "Bring a waist and weight measurement. We'll match to absorbency and skin-safety needs in the quieter back section of the store.",
    educationalContent: pt(
      h2("Absorbency matters more than brand"),
      p(
        "Compare products by milliliter absorbency, not marketing. Light is 150–400ml, moderate is 400–800ml, heavy is 800–1500ml, overnight is 1500ml+. We carry the full range."
      ),
      h2("Skin health is non-negotiable"),
      p(
        "Pair every product with a barrier cream (zinc-based) and gentle skin cleansers. Skin breakdown happens fast with incontinence and is much harder to reverse than it is to prevent."
      ),
      h2("FSA/HSA coverage"),
      p(
        "Most adult incontinence products are FSA/HSA eligible. We process FSA/HSA cards at the counter."
      )
    ),
    faqs: [],
    recommendedProducts: [],
    seo: {
      title: "Adult incontinence products — fitted for absorbency",
      description:
        "Medline, Depend, and Tranquility — sized to weight and absorbency need.",
    },
  },
  {
    _id: "condition-at-home-wound-care",
    _type: "condition",
    name: "At-home wound care",
    slug: slug("at-home-wound-care"),
    heroHeadline: "Wound care supplies for home recovery",
    heroIntro:
      "Post-op dressings, chronic wound supplies, and the basics of keeping a wound clean and healing at home.",
    educationalContent: pt(
      h2("The home wound care stock list"),
      p(
        "For most post-op wounds, you need: sterile saline or a gentle wound cleanser, non-stick pads, gauze, self-adhesive wrap or medical tape, and clean gloves. We carry all of these individually and as a pre-assembled post-op basics kit."
      ),
      h2("Signs a wound needs a clinician"),
      p(
        "Increased redness, warmth, swelling, foul-smelling discharge, fever, or significant pain change — don't self-manage. Call the surgeon or primary care provider."
      )
    ),
    faqs: [],
    recommendedProducts: [],
    seo: {
      title: "At-home wound care supplies — dressings, tape, cleansers",
      description:
        "Everything you need for post-op and chronic wound care at home.",
    },
  },
  {
    _id: "condition-bariatric-support",
    _type: "condition",
    name: "Bariatric support",
    slug: slug("bariatric-support"),
    heroHeadline: "Bariatric-rated equipment when weight capacity matters",
    heroIntro:
      "Heavy-duty wheelchairs, rollators, shower chairs, and bed equipment rated for 300–600+ lb. Sized for strength and stability.",
    educationalContent: pt(
      h2("Standard vs. bariatric ratings"),
      p(
        "Most standard mobility and bath safety equipment is rated to 250 or 300 lb. Bariatric-rated equipment starts at 400 lb and goes up to 600+. Using standard equipment above its rating causes frame failure and injury."
      ),
      h2("What we stock"),
      p(
        "Bariatric transport chairs (400–500 lb), heavy-duty rollators, wide shower benches (400+ lb), reinforced bed rails and transfer poles. If we don't have a specific item in stock, we can usually bring it in within a few days."
      )
    ),
    faqs: [],
    recommendedProducts: [],
    seo: {
      title: "Bariatric mobility & bath safety equipment",
      description:
        "Heavy-duty equipment rated for 400–600+ lb. Sized and tested in store.",
    },
  },
];
