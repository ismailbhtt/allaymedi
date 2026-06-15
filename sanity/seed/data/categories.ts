import { h2, p, pt, slug } from "../helpers";

export const categories = [
  {
    _id: "category-mobility-aids",
    _type: "category",
    name: "Mobility Aids",
    slug: slug("mobility-aids"),
    order: 10,
    heroHeadline: "Mobility aids that fit real homes",
    description:
      "Rollators, walkers, canes, wheelchairs, and scooters — sized and tested in our Lake Oswego store before you take them home.",
    educationalContent: pt(
      h2("How we help you pick the right mobility aid"),
      p(
        "The right aid depends on three things: how much support your body needs, how much arm strength you have to operate it, and where you'll use it (narrow hallways, stairs, gravel driveways, the car trunk). We walk through all three with every customer before you buy."
      ),
      p(
        "Some folks come in thinking they need a wheelchair when a rollator with a seat would work. Others need more stability than a cane can offer. A ten-minute fitting prevents a returned device — and a fall."
      ),
      h2("Our bestsellers"),
      p(
        "Nova and Drive rollators dominate our floor because they hold up. Lightweight transport wheelchairs from Drive are the #1 request from caregivers. For power, we stock Pride Mobility Go-Go scooters that can be broken down for a sedan trunk."
      )
    ),
    buyingGuide: [
      { _ref: "faq-rollator-vs-walker", _type: "reference", _key: "bg1" },
      { _ref: "faq-wheelchair-sizing", _type: "reference", _key: "bg2" },
      { _ref: "faq-scooter-weight-capacity", _type: "reference", _key: "bg3" },
    ],
    seo: {
      title: "Mobility aids — Lake Oswego & Portland Metro",
      description:
        "Rollators, walkers, transport chairs, wheelchairs, and power scooters — fitted in store by people who use them every day.",
    },
  },
  {
    _id: "category-cpap",
    _type: "category",
    name: "CPAP & Sleep",
    slug: slug("cpap"),
    order: 20,
    heroHeadline: "CPAP supplies, fitted in person",
    description:
      "ResMed machines, masks, and replacement supplies. Fittings by staff who size them every week — not a catalog.",
    educationalContent: pt(
      h2("CPAP is about the mask, not the machine"),
      p(
        "90% of CPAP therapy failures are mask fit failures. A leak means the air isn't getting where it needs to go. We stock the three mask types — full face, nasal, and nasal pillow — and try multiple until one seals right for your face, your sleep position, and your beard (yes, it matters)."
      ),
      p(
        "ResMed AirSense 11 and AirMini are our core machines. We handle ResMed supplies eligible for insurance replacement (usually every 3 months) as well as cash retail."
      ),
      h2("Bring your prescription"),
      p(
        "CPAP machines are FDA class II devices and require a current prescription. If you don't have one handy, your sleep specialist or primary care provider can fax it to us. Bring paperwork and we'll set up the machine on our counter before you leave."
      )
    ),
    buyingGuide: [
      { _ref: "faq-cpap-mask-sizing", _type: "reference", _key: "bg1" },
      { _ref: "faq-cpap-cleaning", _type: "reference", _key: "bg2" },
      { _ref: "faq-cpap-prescription", _type: "reference", _key: "bg3" },
    ],
    seo: {
      title: "CPAP machines, masks & supplies — ResMed AirSense in Lake Oswego",
      description:
        "ResMed AirSense 11 & AirMini, masks, filters, tubing. Real fittings in store. Prescription required.",
    },
  },
  {
    _id: "category-bath-safety",
    _type: "category",
    name: "Bath Safety",
    slug: slug("bath-safety"),
    order: 30,
    heroHeadline: "Bathroom equipment that fits your bathroom",
    description:
      "Grab bars, shower chairs, raised toilet seats, transfer benches, commodes — chosen for the actual shape of your bathroom.",
    educationalContent: pt(
      h2("Measure first"),
      p(
        "Most returns on bath safety happen because the equipment didn't fit the shower. Bring a photo of your tub or walk-in shower, plus a rough measurement of the opening and the inside depth. We'll pick the right width bench and clamp-on grab bar."
      ),
      h2("Non-negotiable safety pieces"),
      p(
        "If someone in your household is over 70 or recovering from surgery, three items prevent the majority of falls: a bolted grab bar near the shower entrance, a non-slip mat, and a raised toilet seat with arms. Start there."
      )
    ),
    buyingGuide: [
      { _ref: "faq-grab-bar-install", _type: "reference", _key: "bg1" },
      { _ref: "faq-shower-chair-tub", _type: "reference", _key: "bg2" },
    ],
    seo: {
      title: "Bath safety equipment — grab bars, shower chairs, commodes",
      description:
        "Everything you need to prevent falls in the bathroom, sized for your shower, installed with clear instructions.",
    },
  },
  {
    _id: "category-compression",
    _type: "category",
    name: "Compression",
    slug: slug("compression"),
    order: 40,
    heroHeadline: "Compression wear — by mmHg, not by guess",
    description:
      "JOBST and other medical-grade compression stockings, FarrowWraps, sleeves, and everyday support — sized in store.",
    educationalContent: pt(
      h2("mmHg, explained"),
      p(
        "Compression is measured in millimeters of mercury. 8-15 mmHg is everyday travel support. 15-20 is mild medical compression for tired legs and mild swelling. 20-30 is standard post-surgical and chronic venous insufficiency. 30-40 is heavier therapeutic compression. Going too tight can actually reduce circulation — we measure and size."
      ),
      p(
        "We're a JOBST partner and stock UltraSheer, Opaque, Relief, and FarrowWrap product lines. Bring your prescription if you have one; we'll hold compression levels to whatever your provider ordered."
      )
    ),
    seo: {
      title: "Compression stockings & sleeves — JOBST, FarrowWrap",
      description:
        "Medical-grade compression at every mmHg range. Measured and fitted in our Lake Oswego store.",
    },
  },
  {
    _id: "category-wound-care",
    _type: "category",
    name: "Wound Care",
    slug: slug("wound-care"),
    order: 50,
    heroHeadline: "Wound care supplies for home recovery",
    description:
      "Dressings, antiseptics, surgical tape, gauze, and consumables for post-op and chronic wound care.",
    educationalContent: pt(
      h2("Stocking the basics"),
      p(
        "Most home wound care comes down to four things: a gentle cleanser, non-stick dressings, an absorbent secondary dressing, and medical tape that holds but doesn't tear skin on removal. We keep a post-op basics kit on the counter — ask for it by name."
      )
    ),
    seo: {
      title: "Home wound care supplies — dressings, gauze, antiseptic",
      description:
        "Post-op and chronic wound care consumables. Covered by most FSA/HSA.",
    },
  },
  {
    _id: "category-incontinence",
    _type: "category",
    name: "Incontinence",
    slug: slug("incontinence"),
    order: 60,
    heroHeadline: "Incontinence products without judgement",
    description:
      "Briefs, underwear, bladder pads, underpads, and skin barriers. We'll help you pick discretely.",
    educationalContent: pt(
      h2("Bring someone discreet"),
      p(
        "We keep incontinence products in a quieter part of the store and we'll walk you through options privately. Bring a weight and waist measurement; we'll match to absorbency."
      )
    ),
    seo: {
      title: "Incontinence briefs, pads & underpads",
      description:
        "Medline, Depend, and Tranquility — FSA/HSA eligible.",
    },
  },
  {
    _id: "category-daily-living",
    _type: "category",
    name: "Daily Living",
    slug: slug("daily-living"),
    order: 70,
    heroHeadline: "Small tools that keep you independent",
    description:
      "Reachers, dressing aids, bed assist handles, gait belts — the low-cost items that keep someone home instead of in a facility.",
    educationalContent: pt(
      h2("Aging in place starts with little things"),
      p(
        "A $20 reacher prevents the reach-and-fall accident that sends someone to the ER. A bed assist handle stops the slide off the mattress. These aren't glamorous, but they work."
      )
    ),
    seo: {
      title: "Daily living aids — reachers, bed handles, gait belts",
      description:
        "The small, unfancy items that keep you independent at home.",
    },
  },
  {
    _id: "category-ppe",
    _type: "category",
    name: "PPE",
    slug: slug("ppe"),
    order: 80,
    heroHeadline: "Gloves, masks & caregiver PPE",
    description:
      "Exam gloves, N95 and surgical masks, gowns — for home caregivers and small clinics.",
    educationalContent: pt(
      p(
        "Bulk packs available at store pricing. Ask about caregiver family discount if you're providing care for a loved one at home."
      )
    ),
    seo: {
      title: "PPE — gloves, masks, caregiver supplies",
      description: "Caregiver PPE at retail and bulk pricing.",
    },
  },
];
