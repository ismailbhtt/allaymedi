import { h2, p, pt, slug, bullets } from "../helpers";

type LocationSeed = {
  _id: string;
  _type: string;
  city: string;
  slug: ReturnType<typeof slug>;
  heroHeadline: string;
  heroIntro: string;
  neighborhoods: string[];
  localBody: ReturnType<typeof pt>;
  drivingDirections: ReturnType<typeof pt>;
  seo: { title: string; description: string };
};

export const locations: LocationSeed[] = [
  {
    _id: "location-lake-oswego",
    _type: "location",
    city: "Lake Oswego",
    slug: slug("lake-oswego"),
    heroHeadline: "Lake Oswego's hometown medical supply store",
    heroIntro:
      "We're right on Boones Ferry Road — the store locals send their parents to when a walker, a CPAP refill, or a knee scooter is suddenly part of life.",
    neighborhoods: [
      "First Addition",
      "Lake Grove",
      "Mountain Park",
      "Westlake",
      "Palisades",
      "Bryant",
    ],
    localBody: pt(
      h2("A proper DME store in town"),
      p(
        "Most Lake Oswego residents don't realize they have a full-service medical supply store four minutes from the Lake Oswego library. When the surgeon hands you a list of equipment to pick up before your procedure, or your mom's CPAP mask is leaking at 4am, driving to a big-box pharmacy 25 minutes away isn't reasonable. We're the closer option."
      ),
      p(
        "We stock rentals alongside retail: the knee scooter you'll need for two weeks after an ACL repair, the hospital bed you need for eight weeks while someone recovers at home, the wheelchair ramp that bridges the front step. We deliver within Lake Oswego for free."
      ),
      h2("Walk-in services"),
      p(
        "Beyond supplies, we handle sharps disposal, notary public services for medical directives and powers of attorney, and seasonal vaccinations. All walk-in — no appointment."
      )
    ),
    drivingDirections: pt(
      p(
        "From Lake Oswego town center: head south on Boones Ferry Rd past Mercato Grove. We're on the right-hand side about three minutes past the Albertsons plaza."
      ),
      ...bullets([
        "Free parking directly in front of the store",
        "Wheelchair accessible entry — no step up",
        "Dedicated pickup parking spot for rentals",
      ])
    ),
    seo: {
      title: "Medical supply & DME store in Lake Oswego",
      description:
        "Your local CPAP, mobility, bath safety, and equipment rental store on Boones Ferry Rd. Free delivery in Lake Oswego.",
    },
  },
  {
    _id: "location-portland",
    _type: "location",
    city: "Portland",
    slug: slug("portland"),
    heroHeadline: "Portland's closest DME store for the SW corridor",
    heroIntro:
      "We're a 12-minute drive from SW Portland neighborhoods — shorter than most big-box pharmacies you'd drive to for the same equipment.",
    neighborhoods: [
      "SW Portland",
      "Hillsdale",
      "Multnomah Village",
      "Sellwood",
      "Johns Landing",
      "Burlingame",
    ],
    localBody: pt(
      p(
        "Portland's SW neighborhoods don't have a dedicated medical supply store. For most SW Portlanders, we're the nearest option — an easy shot south on Barbur or I-5 to the Boones Ferry exit. The drive from Hillsdale or Multnomah Village is 12–15 minutes in normal traffic."
      ),
      p(
        "We handle post-surgical equipment rentals for surgeons at OHSU, Providence, and Good Sam whose patients come home to SW Portland. Hospital beds, knee scooters, transfer aids — delivered or picked up at our store."
      )
    ),
    drivingDirections: pt(
      p(
        "From SW Portland: take I-5 south to Exit 290 (Lower Boones Ferry). Turn right onto Lower Boones Ferry Rd, then left onto Boones Ferry Rd. We're 1.2 miles on the right."
      ),
      p("From Sellwood / Milwaukie: take 99E south, then OR-43 through Lake Oswego to Boones Ferry Rd.")
    ),
    seo: {
      title: "Medical supply near SW Portland — 12 minutes from Hillsdale",
      description:
        "Your Portland-metro DME store. CPAP, mobility, rentals, delivery across SW Portland neighborhoods.",
    },
  },
  {
    _id: "location-tigard",
    _type: "location",
    city: "Tigard",
    slug: slug("tigard"),
    heroHeadline: "Tigard's medical supply store, minutes from Bridgeport",
    heroIntro:
      "Six minutes from Bridgeport Village, eight minutes from downtown Tigard. We're the closest DME store for King City, Bull Mountain, and Metzger residents.",
    neighborhoods: [
      "Downtown Tigard",
      "Bull Mountain",
      "Bridgeport",
      "King City",
      "Metzger",
      "Summerfield",
    ],
    localBody: pt(
      p(
        "Tigard's closest full-service medical supply is right next door in Lake Oswego. We're particularly popular with King City and Summerfield residents — communities where aging in place matters and a walker or bath bench purchase shouldn't involve a 30-minute drive."
      ),
      p(
        "We deliver rental equipment (hospital beds, wheelchairs, knee scooters, ramps) to Tigard addresses, often same-day. Post-surgical pickups are common — if you're recovering from a Bridgeport-area orthopedic surgery, your equipment can be waiting before you're discharged."
      )
    ),
    drivingDirections: pt(
      p(
        "From Bridgeport Village: take Lower Boones Ferry Rd south across I-5 to Boones Ferry Rd. We're three minutes on the right."
      ),
      p("From Bull Mountain / King City: Pacific Hwy 99W north to Durham Rd, then right on Boones Ferry.")
    ),
    seo: {
      title: "Medical supply in Tigard — 6 minutes from Bridgeport",
      description:
        "Tigard's closest DME store. CPAP, mobility, rental hospital beds delivered to Bull Mountain, King City.",
    },
  },
  {
    _id: "location-tualatin",
    _type: "location",
    city: "Tualatin",
    slug: slug("tualatin"),
    heroHeadline: "Tualatin's DME store, ten minutes away",
    heroIntro:
      "From Tualatin, we're a quick shot up Lower Boones Ferry. Mobility aids, rentals, and same-day pickup without crossing the river.",
    neighborhoods: ["Downtown Tualatin", "Byrom", "Ibach", "Hazelbrook", "Victoria Gardens"],
    localBody: pt(
      p(
        "Tualatin residents often don't know we're here — ten minutes away, across the Lake Oswego line. When your surgeon tells you to pick up a knee scooter tomorrow, we're a closer option than most big pharmacy DME counters."
      ),
      p(
        "We stock the full range of ResMed CPAP products, the highest-volume mobility aids, and post-op rental equipment. Tualatin delivery runs daily."
      )
    ),
    drivingDirections: pt(
      p(
        "From downtown Tualatin: take Lower Boones Ferry Rd north over I-5 to Boones Ferry Rd. We're four minutes on your right."
      )
    ),
    seo: {
      title: "Medical supply in Tualatin — 10 minutes to Boones Ferry Rd",
      description:
        "Tualatin's nearest DME store. Rentals, CPAP, mobility aids, free local delivery.",
    },
  },
  {
    _id: "location-west-linn",
    _type: "location",
    city: "West Linn",
    slug: slug("west-linn"),
    heroHeadline: "West Linn's home for medical equipment",
    heroIntro:
      "West Linn residents are among our most loyal customers. We're across the river — a short drive over the Arch Bridge and down through Lake Oswego.",
    neighborhoods: ["Willamette", "Bolton", "Sunset", "Rosemont", "Hidden Springs"],
    localBody: pt(
      p(
        "West Linn's proximity to downtown Lake Oswego makes us the default option for home medical equipment. Our delivery van crosses the Arch Bridge most days — hospital beds, wheelchairs, ramps, and transfer benches all make the trip."
      ),
      p(
        "We also see a steady stream of West Linn post-op patients: knee and hip replacement recoveries, rotator cuff surgeries, and foot surgeries that all need short-term equipment."
      )
    ),
    drivingDirections: pt(
      p(
        "From West Linn: take Willamette Falls Dr to OR-43 north, cross the Arch Bridge into Lake Oswego, then continue on A Ave to Boones Ferry Rd. We're ten minutes from downtown West Linn."
      )
    ),
    seo: {
      title: "Medical supply in West Linn — DME, CPAP, rentals",
      description:
        "West Linn's closest medical equipment store. Free delivery across West Linn for rental equipment.",
    },
  },
  {
    _id: "location-beaverton",
    _type: "location",
    city: "Beaverton",
    slug: slug("beaverton"),
    heroHeadline: "Beaverton caregivers: we deliver",
    heroIntro:
      "Beaverton's a bit of a hike for a retail visit — which is why we focus on rental equipment delivery into Beaverton neighborhoods.",
    neighborhoods: ["Downtown Beaverton", "Cedar Hills", "Progress Ridge", "Raleigh Hills", "Aloha"],
    localBody: pt(
      p(
        "We run rental deliveries into Beaverton 2–3 times a week — hospital beds, wheelchairs, knee scooters, and modular ramps. Most Beaverton residents use us for post-surgical rentals coordinated through their surgical coordinator; we pick up at the end of the recovery period."
      ),
      p(
        "For retail purchases, Beaverton customers generally do best ordering online with curbside pickup from our Lake Oswego store, or calling to arrange delivery if the item is large."
      )
    ),
    drivingDirections: pt(
      p(
        "From Beaverton: take OR-217 south to I-5 south, exit at Lower Boones Ferry (Exit 290). Turn right on Lower Boones Ferry, left on Boones Ferry Rd. 25–30 minutes in typical traffic."
      )
    ),
    seo: {
      title: "Medical equipment rentals delivered to Beaverton",
      description:
        "Hospital bed, wheelchair, and knee scooter rentals delivered into Beaverton, Cedar Hills, Aloha.",
    },
  },
  {
    _id: "location-oregon-city",
    _type: "location",
    city: "Oregon City",
    slug: slug("oregon-city"),
    heroHeadline: "Oregon City home equipment store — a river away",
    heroIntro:
      "Oregon City residents cross the river for us because we're the nearest full-selection DME store without going into Portland.",
    neighborhoods: ["Downtown Oregon City", "Hilltop", "Beavercreek", "Park Place"],
    localBody: pt(
      p(
        "Oregon City's options for medical supplies are limited — we're typically the nearest full-selection store that isn't a pharmacy DME counter. Customers from the Hilltop and Park Place neighborhoods make the trip regularly for rentals and specialty items."
      )
    ),
    drivingDirections: pt(
      p(
        "From Oregon City: take OR-213 or 99E north to I-205, then west to I-5 north, exit at Lower Boones Ferry (Exit 290)."
      )
    ),
    seo: {
      title: "Medical supply store near Oregon City",
      description:
        "Nearest full-selection DME store for Oregon City residents.",
    },
  },
  {
    _id: "location-milwaukie",
    _type: "location",
    city: "Milwaukie",
    slug: slug("milwaukie"),
    heroHeadline: "Milwaukie's closest DME store",
    heroIntro:
      "From Milwaukie, we're a quick trip down OR-224 and across OR-43 — twelve minutes to a full-selection medical equipment store.",
    neighborhoods: ["Downtown Milwaukie", "Ardenwald", "Oak Grove", "Jennings Lodge"],
    localBody: pt(
      p(
        "Milwaukie and Oak Grove residents are regulars for mobility and bath safety equipment. We deliver rental equipment into Milwaukie and can coordinate pickups from Providence Milwaukie Hospital discharge."
      )
    ),
    drivingDirections: pt(
      p(
        "From Milwaukie: OR-224 west to OR-43 south, through Lake Oswego to Boones Ferry Rd."
      )
    ),
    seo: {
      title: "Medical supply near Milwaukie — DME & rentals",
      description:
        "Milwaukie's closest medical equipment store. Delivery and pickup from Providence Milwaukie Hospital.",
    },
  },
];
