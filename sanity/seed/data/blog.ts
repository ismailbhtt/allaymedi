import { h2, h3, p, pt, bullets, slug } from "../helpers";

const author = { name: "Allay Floor Staff", credentials: "Fitters & caregivers" };

export const blogPosts = [
  {
    _id: "post-rollator-vs-walker",
    _type: "blogPost",
    title: "Rollator vs. walker: which one's right for you?",
    slug: slug("rollator-vs-walker"),
    excerpt:
      "The honest difference, who should pick each, and the one question that settles it in thirty seconds.",
    category: "product-guides",
    publishedAt: "2026-03-01T10:00:00Z",
    author,
    body: pt(
      p(
        "We have this conversation five times a week: a customer comes in and points at the aisle full of rolling four-wheeled things and the aisle full of two-handled frames, and asks which they actually need. Let's make it simple."
      ),
      h2("The thirty-second answer"),
      p(
        "Do you need to **lean heavily on the device for stability**? If yes, you want a walker — the ones with two rubber-tipped feet and two wheels, or four feet. If you mostly need something to **hold onto for balance and give you somewhere to rest**, you want a rollator."
      ),
      h2("Walker — when it's the right pick"),
      p(
        "A walker requires you to partially lift it and place it forward with each step. That's a feature, not a bug: the lift-and-place motion is what anchors the device and gives you something solid to push against."
      ),
      ...bullets([
        "You've had significant leg weakness or balance loss",
        "You need to lean noticeably forward during use",
        "You're recovering from a major lower-body surgery",
        "A physical therapist has specifically recommended a walker",
      ]),
      h2("Rollator — when it's the right pick"),
      p(
        "A rollator rolls on four wheels, so you walk through it rather than lifting it. Hand brakes let you control speed. Most have a seat for rest breaks. Most also have a basket for groceries."
      ),
      ...bullets([
        "You can maintain an upright posture",
        "You walk longer distances (grocery store, neighborhood walks)",
        "You need somewhere to rest mid-walk",
        "You're more worried about fatigue than instability",
      ]),
      h2("The in-between case: a hybrid or upgraded walker"),
      p(
        "There's a middle category: a walker with front wheels and back glides. It gives you the anchoring motion of a walker but rolls slightly when you push. If you're genuinely torn, this is often the answer."
      ),
      h2("Come try both"),
      p(
        "We have the full floor of both. A five-minute walk-around on each tells you more than any article. Bring the shoes you'd actually wear, and — honestly — bring the stairs-to-door-to-car thought in your head so we can check the footprint."
      )
    ),
    relatedProducts: [
      { _ref: "product-nova-rollator", _type: "reference", _key: "r1" },
    ],
    seo: {
      title: "Rollator vs. walker — which do you actually need?",
      description:
        "A plain-English comparison from people who fit both every day. One question settles it in thirty seconds.",
    },
  },
  {
    _id: "post-cpap-mask-sizing",
    _type: "blogPost",
    title: "CPAP mask sizing: a complete guide",
    slug: slug("cpap-mask-sizing"),
    excerpt:
      "Why mask fit matters more than the machine, how to size each of the three mask types, and the mistakes that cause most failures.",
    category: "product-guides",
    publishedAt: "2026-03-05T10:00:00Z",
    author,
    body: pt(
      p(
        "90% of people who abandon CPAP therapy do so because of their mask, not the machine. If you're just starting out or you're on your second machine and still struggling, the problem is almost certainly mask fit. Here's how we approach it."
      ),
      h2("The three types"),
      h3("Nasal pillow"),
      p(
        "Smallest footprint. Two soft inserts sit just inside the nostrils. Best for people who breathe through their nose, side sleepers, and people who don't want anything across the face."
      ),
      h3("Nasal mask"),
      p(
        "Covers the nose only with a triangular cushion. The most common starting mask. Good for mild beards. You must breathe through your nose for it to work."
      ),
      h3("Full face mask"),
      p(
        "Covers both nose and mouth. Required for mouth-breathers, people with frequent nasal congestion, or those with high-pressure therapy needs. Larger, slightly louder, but the right choice for a third of users."
      ),
      h2("Why sizing matters"),
      p(
        "Too small and the cushion digs in and leaves marks. Too large and air escapes at the seal and the therapy stops working. 'Sort of fits' is not acceptable — mask fit needs to be correct or therapy fails."
      ),
      h2("Our fitting process"),
      ...bullets([
        "Ask about your sleep position, breathing pattern, and facial hair",
        "Try two or three candidate masks from different sizes",
        "Run the actual CPAP at your prescribed pressure with each mask",
        "Lie down on our demo surface — mask behavior changes when horizontal",
        "Confirm no leaks at the eyes, cheeks, or lips",
      ]),
      h2("The five most common mistakes we see"),
      ...bullets([
        "Tightening headgear straps to stop leaks — almost always the wrong answer. The wrong cushion size is.",
        "Keeping a mask that leaves red marks 'because it works' — those marks mean it's too tight",
        "Buying a cheap mask online before trying it in person",
        "Not replacing cushions on schedule — they stretch and lose seal",
        "Shaving to make a mask fit instead of choosing a mask that handles facial hair",
      ])
    ),
    relatedProducts: [
      { _ref: "product-airfit-p10", _type: "reference", _key: "r1" },
      { _ref: "product-airfit-f30i", _type: "reference", _key: "r2" },
    ],
    seo: {
      title: "CPAP mask sizing — the complete guide",
      description:
        "Why fit matters more than the machine, how to choose between nasal pillow, nasal, and full-face masks.",
    },
  },
  {
    _id: "post-bath-safety-checklist",
    _type: "blogPost",
    title: "Bath safety checklist for aging in place",
    slug: slug("bath-safety-checklist"),
    excerpt:
      "Print this, walk through the bathroom, and you'll prevent the majority of falls. Done in one afternoon.",
    category: "caregiver-tips",
    publishedAt: "2026-03-08T10:00:00Z",
    author,
    body: pt(
      p(
        "The bathroom is the most dangerous room in the house for anyone over 65. Wet surfaces, low sit-to-stand heights, and narrow spaces combine to create falls — and bathroom falls cause more fractures than any other kind. Here's the checklist."
      ),
      h2("Bolt-in grab bars"),
      p(
        "Not suction mounts. Suction mounts are convenient; they are **not** load-bearing. Every grab bar that actually prevents falls is bolted into studs or with rated drywall anchors."
      ),
      ...bullets([
        "One grab bar beside the toilet, vertical or diagonal",
        "One grab bar at the shower entrance, vertical",
        "One grab bar on the shower wall, horizontal at shoulder height for seated use",
      ]),
      h2("Raised toilet seat with arms"),
      p(
        "Adds 3–4 inches to the toilet height, making the sit-stand motion much gentler on knees and hips. The arms give push-off leverage."
      ),
      h2("Shower chair or transfer bench"),
      p(
        "Choose a transfer bench if the bathroom has a tub — it straddles the tub wall so you don't step over. Choose a shower chair if it's a walk-in shower."
      ),
      h2("Non-slip surfaces"),
      ...bullets([
        "Non-slip mat inside the tub/shower",
        "Non-slip bath mat outside the shower",
        "Remove any throw rugs or secure them with non-slip backing",
      ]),
      h2("Good lighting"),
      p(
        "Bathrooms often have one overhead bulb. Add a night light that comes on automatically and a task light at the sink. Falls at night, on the way to the bathroom, are the most common."
      ),
      h2("The afternoon plan"),
      p(
        "One Saturday afternoon. Two people. A trip to us to pick up the equipment, an hour to install the grab bars (we'll loan you the stud finder), and a quick swap of mats. Done."
      )
    ),
    relatedProducts: [
      { _ref: "product-raised-toilet-seat", _type: "reference", _key: "r1" },
      { _ref: "product-shower-bench", _type: "reference", _key: "r2" },
    ],
    seo: {
      title: "Bath safety checklist for aging in place",
      description:
        "Print-and-walk checklist. The four items that prevent most bathroom falls.",
    },
  },
  {
    _id: "post-what-to-buy-before-knee-surgery",
    _type: "blogPost",
    title: "What to buy (and rent) before knee surgery",
    slug: slug("what-to-buy-before-knee-surgery"),
    excerpt:
      "Your surgeon handed you a list. Here's what actually matters, what's worth renting, and what you can skip.",
    category: "condition-support",
    publishedAt: "2026-03-12T10:00:00Z",
    author,
    body: pt(
      p(
        "After a total knee replacement, most people are non-weight-bearing or partial-weight-bearing for 2–6 weeks and need mobility aids for 8–12 weeks. Here's our ortho-patient shopping list, honest."
      ),
      h2("Rent, don't buy"),
      ...bullets([
        "**Knee scooter or walker** — you'll use it for 4–8 weeks, then never again",
        "**Elevated toilet seat** — useful for 4–6 weeks",
        "**Ice machine** (cold therapy unit) — typically 1–2 weeks",
      ]),
      h2("Buy — you'll use it forever"),
      ...bullets([
        "**Grabber/reacher** — cheap, useful indefinitely",
        "**Sock aid and long-handled shoehorn** — you can't bend to put socks on for weeks",
        "**Compression stockings** — per surgeon's prescription",
      ]),
      h2("Buy only if you don't already own"),
      ...bullets([
        "Shower chair or transfer bench",
        "Grab bars (install before surgery)",
        "Wedge pillow for leg elevation",
      ]),
      h2("Timing"),
      p(
        "Pick up equipment 5–7 days before surgery, not the day of. You'll want to practice using the knee scooter or walker before you're in post-op fog."
      ),
      p(
        "Drop by the store and we'll walk through your surgeon's list item by item."
      )
    ),
    relatedProducts: [],
    seo: {
      title: "What to buy before knee surgery — the honest list",
      description:
        "What to rent, what to buy, what to skip. From people who outfit surgery recoveries every week.",
    },
  },
  {
    _id: "post-fsa-hsa-what-dme-is-covered",
    _type: "blogPost",
    title: "FSA/HSA: what medical equipment is actually covered?",
    slug: slug("fsa-hsa-what-dme-is-covered"),
    excerpt:
      "The short list of yes, maybe, and no — based on IRS Publication 502, not marketing copy.",
    category: "insurance",
    publishedAt: "2026-03-15T10:00:00Z",
    author,
    body: pt(
      p(
        "Most DME is FSA/HSA eligible. Some of it requires a Letter of Medical Necessity (LMN). A few items are tricky. Here's our plain-language guide — confirm anything uncertain with your plan administrator."
      ),
      h2("Definitely eligible (no LMN needed)"),
      ...bullets([
        "CPAP machines, masks, tubing, filters, chamber cleaners",
        "Mobility aids: canes, walkers, rollators, wheelchairs, crutches",
        "Bath safety: grab bars, shower chairs, transfer benches, raised toilet seats",
        "Compression stockings (15 mmHg and above)",
        "Wound care: gauze, bandages, antiseptic",
        "Incontinence products",
        "Blood pressure monitors, glucose meters, thermometers",
      ]),
      h2("Eligible with a Letter of Medical Necessity"),
      ...bullets([
        "Air purifiers (if prescribed for allergy/asthma)",
        "Orthopedic shoes (partial — only the specific medical portion)",
        "Some home modifications (grab bar *installation* may be eligible even when the bar is)",
      ]),
      h2("Not eligible"),
      ...bullets([
        "Weight-loss products (unless LMN)",
        "Vitamins and supplements (with some narrow exceptions)",
        "Cosmetic items",
        "Hygiene products not specifically medical",
      ]),
      h2("Using your card at our store"),
      p(
        "We accept FSA/HSA debit cards at the register. If your card is declined, it's usually because the merchant isn't coded as DME in the IRS IIAS system — call your plan administrator and we can provide an itemized receipt for reimbursement."
      )
    ),
    relatedProducts: [],
    seo: {
      title: "FSA/HSA — what DME is actually covered?",
      description:
        "Based on IRS Pub 502. The yes, maybe, and no list for HSA/FSA eligibility on medical equipment.",
    },
  },
  {
    _id: "post-how-to-sanitize-cpap",
    _type: "blogPost",
    title: "How to sanitize a CPAP machine (and what to skip)",
    slug: slug("how-to-sanitize-cpap"),
    excerpt:
      "Warm water, mild soap, air dry. Why the fancy ozone cleaners aren't worth it.",
    category: "product-guides",
    publishedAt: "2026-03-19T10:00:00Z",
    author,
    body: pt(
      p(
        "CPAP hygiene matters: you're inhaling through the mask and tubing for 8 hours a night. But it's also simpler than the marketing around ozone cleaners would have you believe. Here's the protocol."
      ),
      h2("Daily"),
      ...bullets([
        "Wipe the mask cushion with a damp cloth",
        "Empty the humidifier water chamber and refill with distilled water",
      ]),
      h2("Weekly"),
      ...bullets([
        "Hand-wash the mask cushion and frame with warm water and mild dish soap, rinse thoroughly, air dry",
        "Hand-wash the tubing the same way",
        "Wipe the outside of the machine with a dry cloth",
      ]),
      h2("Monthly"),
      ...bullets([
        "Fully wash the humidifier water chamber, let air dry completely before reassembling",
        "Check and replace the air filter (white disposable filter inside the back of the machine)",
      ]),
      h2("What to skip"),
      p(
        "Ozone and UV cleaning devices (SoClean and similar) are marketed aggressively but not FDA-approved for CPAP cleaning, and ResMed specifically voids warranty on machines that show signs of ozone residue. Stick with the warm-water-and-soap method — it works and costs $0."
      )
    ),
    relatedProducts: [],
    seo: {
      title: "How to clean your CPAP — the simple, FDA-aligned protocol",
      description:
        "Daily, weekly, monthly. Skip the ozone cleaners.",
    },
  },
  {
    _id: "post-transfer-wheelchair-to-bed",
    _type: "blogPost",
    title: "Transferring a loved one from wheelchair to bed safely",
    slug: slug("transfer-wheelchair-to-bed"),
    excerpt:
      "The body mechanics, the equipment that helps, and the injuries to avoid — for caregivers doing this alone.",
    category: "caregiver-tips",
    publishedAt: "2026-03-22T10:00:00Z",
    author,
    body: pt(
      p(
        "If you're transferring someone from a wheelchair to a bed or vice versa multiple times a day, your back is at risk. Here's how to do it without injury — to you or the person you're caring for."
      ),
      h2("The equipment that helps"),
      ...bullets([
        "**Gait belt** — a wide belt around the waist you can grip for pulling leverage",
        "**Transfer board** — a slick board that bridges the wheelchair and bed so you slide instead of lift",
        "**Hoyer lift** — powered lift for anyone who can't bear weight at all; required if the person is 160+ lb and you're alone",
      ]),
      h2("The sit-to-stand transfer (person can bear some weight)"),
      ...bullets([
        "Lock the wheelchair brakes",
        "Put a gait belt on the person",
        "Put your foot against the outside of their foot to block their knee from collapsing",
        "Count to three together — on three, they push off the chair arms while you pull up on the belt",
        "Pivot ninety degrees; sit them on the bed",
      ]),
      h2("Your body"),
      ...bullets([
        "Feet shoulder-width apart, knees bent, back straight — lift with the legs",
        "Never twist while lifting; pivot with your feet",
        "If you feel back strain more than once, you need a mechanical lift — this is not sustainable",
      ])
    ),
    relatedProducts: [],
    seo: {
      title: "Transferring a loved one from wheelchair to bed safely",
      description:
        "Body mechanics, equipment, and injury avoidance for at-home caregivers.",
    },
  },
  {
    _id: "post-choosing-compression-stockings",
    _type: "blogPost",
    title: "Choosing compression stockings: mmHg explained",
    slug: slug("choosing-compression-stockings"),
    excerpt:
      "A plain-English chart from 8-15 mmHg casual support through 40 mmHg therapeutic.",
    category: "product-guides",
    publishedAt: "2026-03-26T10:00:00Z",
    author,
    body: pt(
      p(
        "Compression stocking packaging is covered in numbers that only make sense if you already know what they mean. Here's the translation."
      ),
      h2("The ranges"),
      ...bullets([
        "**8–15 mmHg (mild):** Everyday support. For travel, long standing days, mild leg fatigue. No prescription needed.",
        "**15–20 mmHg (firm):** Mild medical compression. Tired, achy legs, mild swelling, early varicose veins. Most common OTC medical compression.",
        "**20–30 mmHg (class 1 medical):** Standard post-surgical and chronic venous insufficiency compression. Typically prescribed.",
        "**30–40 mmHg (class 2 medical):** Heavy therapeutic compression. Severe venous disease, active ulcers. Always prescribed.",
        "**40+ mmHg (class 3 medical):** Specialist-prescribed only. Rare.",
      ]),
      h2("Wrong level = wrong effect"),
      p(
        "Going *too high* in mmHg can actually reduce circulation in someone with arterial disease. That's why high-mmHg compression requires a prescription and a check that you don't have peripheral arterial disease first."
      ),
      h2("Sizing"),
      p(
        "Always measured in the morning before swelling starts. Ankle circumference, calf circumference, and — for thigh-high styles — thigh circumference. We measure in store."
      )
    ),
    relatedProducts: [
      { _ref: "product-jobst-ultrasheer", _type: "reference", _key: "r1" },
    ],
    seo: {
      title: "Compression stockings explained — mmHg by level",
      description: "From 8-15 mmHg casual to 30-40 mmHg therapeutic. Plain English.",
    },
  },
  {
    _id: "post-knee-scooter-or-crutches",
    _type: "blogPost",
    title: "Knee scooter or crutches after foot surgery?",
    slug: slug("knee-scooter-or-crutches"),
    excerpt:
      "The question every foot-surgery patient asks. Here's our honest answer.",
    category: "condition-support",
    publishedAt: "2026-03-29T10:00:00Z",
    author,
    body: pt(
      p(
        "For non-weight-bearing foot surgery (Achilles, bunionectomy, metatarsal surgery, calcaneal fractures), you have two options for getting around: crutches or a knee scooter. We rent out roughly fifty knee scooters a month and a handful of crutches. There's a reason."
      ),
      h2("Knee scooter wins for most people"),
      ...bullets([
        "No upper-body strength required — your knee rests on the padded platform",
        "No armpit or hand soreness like crutches cause",
        "Faster and more stable over distance",
        "Can carry a basket or cup holder",
      ]),
      h2("Crutches win if..."),
      ...bullets([
        "You need to navigate many stairs",
        "Your home has narrow hallways (under 32 inches) that a scooter can't fit through",
        "You only need them for a short period (under a week) — easier to just grab and go",
      ]),
      h2("The hybrid plan"),
      p(
        "Many patients rent a knee scooter for daily use and keep a set of crutches on hand for stairs. We rent knee scooters for $35/week with a $50 deposit; crutches are $15/week."
      )
    ),
    relatedProducts: [],
    seo: {
      title: "Knee scooter vs crutches after foot surgery",
      description: "When each wins — and the hybrid plan most patients actually use.",
    },
  },
  {
    _id: "post-hospital-bed-at-home",
    _type: "blogPost",
    title: "Hospital bed at home: what to expect",
    slug: slug("hospital-bed-at-home"),
    excerpt:
      "Setup, placement, rental timeline, and the questions families ask before they bring one home.",
    category: "caregiver-tips",
    publishedAt: "2026-04-02T10:00:00Z",
    author,
    body: pt(
      p(
        "Bringing a hospital bed home is a decision families often resist even when it would obviously help. Here's what to actually expect."
      ),
      h2("Placement"),
      ...bullets([
        "Plan for 3–4 feet of clearance on one side for caregiver access",
        "Near an outlet — the bed plugs in",
        "Near the bathroom if mobility is limited",
        "On the main floor — avoid requiring stairs",
      ]),
      h2("Setup"),
      p(
        "We deliver and set up. Takes 20 minutes. Mattress is included (a basic foam; we can swap for pressure-relief if pressure sores are a concern). We walk you through the remote — head, foot, and overall height functions."
      ),
      h2("Typical rental periods"),
      ...bullets([
        "**Post-op recovery:** 4–8 weeks",
        "**Hospice:** until no longer needed",
        "**Chronic care:** long-term — we sell used beds for long-term use at 40–60% of new",
      ]),
      h2("The conversation families have"),
      p(
        "Hospital beds at home often feel like a defeat. Reframe: it's the piece of equipment that lets someone stay **in their own home** instead of moving to a facility. Most families, in hindsight, wish they'd brought one in earlier."
      )
    ),
    relatedProducts: [],
    seo: {
      title: "Hospital bed at home — what to expect",
      description:
        "Placement, setup, rental timelines. The honest guide for families.",
    },
  },
  {
    _id: "post-incontinence-starter",
    _type: "blogPost",
    title: "Starting with incontinence products: a practical guide",
    slug: slug("incontinence-starter"),
    excerpt:
      "Absorbency, fit, skin care. What to buy first and how to avoid waste.",
    category: "caregiver-tips",
    publishedAt: "2026-04-05T10:00:00Z",
    author,
    body: pt(
      p(
        "The first few weeks of managing incontinence (yours or a loved one's) involves a lot of over-buying, under-buying, and trial-and-error. Here's how to skip most of it."
      ),
      h2("Start with the right absorbency"),
      p(
        "Light pads (150–400ml) are often enough for occasional stress incontinence. Overnight briefs (1500ml+) are what you need if you're managing overnight heavy incontinence. Don't buy one size fits all."
      ),
      h2("Buy a variety pack first"),
      p(
        "Skin sensitivities, fit preferences, and absorbency needs are personal. Buy two or three small packs of different brands before committing to a case. We'll help you pick the trial mix."
      ),
      h2("Non-negotiable: skin care"),
      ...bullets([
        "Zinc-based barrier cream at every change",
        "Gentle cleanser (no fragrance, no alcohol)",
        "Change products as soon as practical — not later",
      ]),
      h2("FSA/HSA"),
      p("Most incontinence products are FSA/HSA eligible. Use the card at our register.")
    ),
    relatedProducts: [
      { _ref: "product-medline-briefs", _type: "reference", _key: "r1" },
    ],
    seo: {
      title: "Starting incontinence products — a practical guide",
      description:
        "Absorbency, skin care, and how to avoid over-buying in the first month.",
    },
  },
  {
    _id: "post-cpap-travel-tips",
    _type: "blogPost",
    title: "Traveling with a CPAP: practical tips",
    slug: slug("cpap-travel-tips"),
    excerpt:
      "Airline rules, battery options, water hacks, and when to use the AirMini.",
    category: "product-guides",
    publishedAt: "2026-04-08T10:00:00Z",
    author,
    body: pt(
      p(
        "Traveling with a CPAP is simpler than people think. Here's the practical guide — airlines, destinations, and the AirMini argument."
      ),
      h2("Airlines"),
      p(
        "CPAP machines are medical devices. They travel in your carry-on and **don't count toward your carry-on limit**. Tell TSA it's a CPAP during screening; it'll go through as a medical device."
      ),
      h2("Water"),
      p(
        "Use distilled water in the humidifier where possible. At a hotel, bottled water is fine for one or two nights; don't use tap for longer — scale buildup damages the machine."
      ),
      h2("Power"),
      p(
        "Most machines auto-detect 100–240V globally. Bring a plug adapter, not a voltage converter. For camping or flights over 6 hours, ResMed's Power Station II gives you about a night of therapy."
      ),
      h2("Use the AirMini for extended travel"),
      p(
        "If you travel more than 3–4 times a year, the AirMini pays for itself in suitcase space and setup time."
      )
    ),
    relatedProducts: [
      { _ref: "product-resmed-airmini", _type: "reference", _key: "r1" },
    ],
    seo: {
      title: "Traveling with a CPAP — practical tips",
      description:
        "Airline rules, water hacks, power options, and the AirMini argument.",
    },
  },
  // Shorter posts / seeds — plenty for initial SEO, refinable in a writer's pass
  {
    _id: "post-grab-bar-placement",
    _type: "blogPost",
    title: "Grab bar placement: where they actually belong",
    slug: slug("grab-bar-placement"),
    excerpt: "Three locations that prevent most bathroom falls — and one place people install them by mistake.",
    category: "caregiver-tips",
    publishedAt: "2026-04-10T10:00:00Z",
    author,
    body: pt(
      p(
        "Where you place a grab bar matters more than how many you install. Here's the short version."
      ),
      h2("The three high-impact spots"),
      ...bullets([
        "Vertical bar at the shower entrance (for the step-in transition)",
        "Horizontal bar inside the shower at shoulder height (for seated use)",
        "Vertical or diagonal bar beside the toilet (for sit-to-stand)",
      ]),
      h2("The mistake"),
      p(
        "Installing a horizontal bar across the back wall of the tub. It looks helpful. It's not well-positioned for how people actually fall — forward or sideways as they step into the tub. Vertical at the entrance beats horizontal across the back, every time."
      )
    ),
    seo: {
      title: "Grab bar placement that actually prevents falls",
      description: "Three spots, one common mistake.",
    },
  },
  {
    _id: "post-choosing-cane",
    _type: "blogPost",
    title: "Choosing a cane: single-point vs. quad",
    slug: slug("choosing-cane"),
    excerpt: "Single-point for mild balance help, quad for real stability. Here's how to choose.",
    category: "product-guides",
    publishedAt: "2026-04-12T10:00:00Z",
    author,
    body: pt(
      p(
        "Canes come in two families. Single-point canes give you mild balance support and add reach. Quad canes (four tips at the base) give you meaningfully more stability and stand up by themselves."
      ),
      h2("Single-point"),
      p(
        "Right if you mostly want something to touch the ground for balance reassurance. Comes in adjustable-height and fixed-height. Foldable options exist for travel."
      ),
      h2("Quad cane"),
      p(
        "Right if you actually need the cane to bear weight. The four-point base gives you a stable platform. Slightly heavier and slower. Small-base quad for indoors; large-base quad for more support outdoors."
      ),
      h2("How to size"),
      p("Standing upright with arms at your side, the cane should come up to the crease of your wrist. Slightly shorter is okay; too tall strains the shoulder.")
    ),
    seo: {
      title: "Single-point vs quad cane — how to choose",
      description: "Plain-English sizing and selection guide.",
    },
  },
  {
    _id: "post-winter-mobility",
    _type: "blogPost",
    title: "Winter mobility: ice cleats, cane tips, and when to stay home",
    slug: slug("winter-mobility"),
    excerpt: "Portland ice days are rare but real. Here's how to handle them.",
    category: "caregiver-tips",
    publishedAt: "2026-04-14T10:00:00Z",
    author,
    body: pt(
      p("Portland gets a handful of ice days a year. For anyone using a rollator or cane, here's what to do."),
      ...bullets([
        "Ice cleats that slip over your shoes — we stock a few styles",
        "Swap your standard cane tip for a retractable ice-point tip",
        "Rollators with 6-inch wheels handle light slush; larger 8-inch wheels handle packed snow",
        "When in doubt — stay in. One icy walk isn't worth a broken hip.",
      ])
    ),
    seo: {
      title: "Winter mobility in the Portland metro",
      description: "Ice cleats, cane tips, and the rollator wheel size that matters.",
    },
  },
  {
    _id: "post-reading-insurance-denial",
    _type: "blogPost",
    title: "Reading a DME insurance denial letter",
    slug: slug("reading-insurance-denial"),
    excerpt: "What the denial codes mean and how to appeal in plain English.",
    category: "insurance",
    publishedAt: "2026-04-16T10:00:00Z",
    author,
    body: pt(
      p(
        "Insurance denials on DME claims are usually fixable. Most denials fall into three patterns:"
      ),
      ...bullets([
        "**Missing documentation** — usually the Letter of Medical Necessity. Ask your provider to resubmit.",
        "**Wrong HCPCS code** — the biller used the wrong code for the equipment. Call the supplier to recode.",
        "**Non-covered item** — the plan genuinely doesn't cover this equipment. Options: appeal with additional justification, pay out-of-pocket, or use FSA/HSA.",
      ]),
      p("We don't bill insurance for retail — you'd pay us and seek reimbursement. We'll provide a detailed itemized receipt with the right HCPCS codes on request.")
    ),
    seo: {
      title: "Insurance denial on DME? Here's how to read and appeal it",
      description: "Plain-English guide to DME insurance denials.",
    },
  },
  {
    _id: "post-preventing-pressure-sores",
    _type: "blogPost",
    title: "Preventing pressure sores at home",
    slug: slug("preventing-pressure-sores"),
    excerpt: "Repositioning schedules, mattress options, and the early signs to catch.",
    category: "caregiver-tips",
    publishedAt: "2026-04-18T10:00:00Z",
    author,
    body: pt(
      p(
        "For anyone spending most of their day in a bed or wheelchair, pressure sores are a real risk. Prevention is dramatically easier than treatment."
      ),
      h2("Reposition on a schedule"),
      ...bullets([
        "Bed-bound: every 2 hours",
        "Wheelchair-bound: every 30 minutes when able",
      ]),
      h2("Mattress upgrades"),
      p("For anyone bed-bound more than 4–6 weeks, swap the basic mattress for a pressure-relief foam or alternating-pressure air mattress. We rent both."),
      h2("Early signs to catch"),
      ...bullets([
        "Red or darker skin over a bony area that doesn't fade within 30 minutes of removing pressure",
        "Skin that feels warmer or cooler than surrounding areas",
        "Any skin breakdown — clinician immediately",
      ])
    ),
    seo: {
      title: "Preventing pressure sores at home",
      description: "Repositioning, mattress options, and early warning signs.",
    },
  },
  {
    _id: "post-walker-fit",
    _type: "blogPost",
    title: "How to size a walker or rollator correctly",
    slug: slug("walker-fit"),
    excerpt: "The elbow-bend rule and why it matters for your shoulders.",
    category: "product-guides",
    publishedAt: "2026-04-20T10:00:00Z",
    author,
    body: pt(
      p(
        "A walker or rollator set to the wrong height doesn't just feel off — it causes shoulder and back pain over weeks of use."
      ),
      h2("The rule"),
      p(
        "Stand upright with arms relaxed at your sides. The handles of the walker should come up to your wrist crease. When you grip the handles, your elbows should bend at about 15 degrees."
      ),
      h2("Signs it's wrong"),
      ...bullets([
        "Shoulders hunching upward — handles too high",
        "Leaning forward at the hips to reach — handles too low",
        "Lower back pain after using — almost always height",
      ])
    ),
    seo: {
      title: "How to size a walker or rollator",
      description: "The elbow-bend rule and what happens if you get it wrong.",
    },
  },
  {
    _id: "post-oxygen-concentrator-vs-tank",
    _type: "blogPost",
    title: "Oxygen at home: concentrator or tank?",
    slug: slug("oxygen-concentrator-vs-tank"),
    excerpt: "The decision we walk through with every new oxygen patient.",
    category: "condition-support",
    publishedAt: "2026-04-22T10:00:00Z",
    author,
    body: pt(
      p(
        "Note: home oxygen is highly regulated and we coordinate with your provider rather than selling directly. But here's the framework."
      ),
      h2("Concentrator (stationary)"),
      p("Plugs into the wall, produces oxygen from room air. Ideal for home use. Some patients never need anything else."),
      h2("Portable oxygen concentrator (POC)"),
      p("Battery-powered, airline-approved. Right if you travel or leave home for hours at a stretch. More expensive; usually coordinated through insurance."),
      h2("Oxygen tanks"),
      p("Filled with compressed oxygen. Portable, silent, no batteries. Heavier than a POC. Used as backup or for patients with specific oxygen flow needs a concentrator can't match."),
      p("Call us with your prescription and flow-rate requirements; we'll connect you with a local oxygen provider we trust.")
    ),
    seo: {
      title: "Home oxygen — concentrator vs. tank vs. POC",
      description: "Plain-English framework for the oxygen decision.",
    },
  },
  {
    _id: "post-aging-in-place-guide",
    _type: "blogPost",
    title: "Aging in place: a 30-minute planning checklist",
    slug: slug("aging-in-place-guide"),
    excerpt: "Walk through your parent's home with this checklist. It changes the conversation.",
    category: "caregiver-tips",
    publishedAt: "2026-04-23T10:00:00Z",
    author,
    body: pt(
      p(
        "Adult children often know something needs to change but don't know where to start. This is a concrete 30-minute walkthrough."
      ),
      h2("Bedroom"),
      ...bullets(["Bed handle or rail", "Nightlight to the bathroom", "Phone within reach from bed"]),
      h2("Bathroom"),
      ...bullets([
        "Bolted grab bars (shower entrance, shower wall, toilet)",
        "Raised toilet seat with arms",
        "Shower chair or transfer bench",
        "Non-slip mats inside and outside tub",
      ]),
      h2("Kitchen"),
      ...bullets([
        "Remove throw rugs",
        "Move frequently-used items to waist-to-shoulder height",
        "Reacher/grabber for higher items",
      ]),
      h2("Living areas"),
      ...bullets([
        "Clear pathways of cords and clutter",
        "Firm chair with arms near the TV",
        "Stairs: handrails on both sides, non-slip treads",
      ]),
      h2("Technology"),
      ...bullets(["Medical alert pendant", "Easy-to-dial phone", "Medication reminder system"]),
      p(
        "Bring this list in, and we'll go through it item by item."
      )
    ),
    seo: {
      title: "Aging in place — a 30-minute planning checklist",
      description: "Room by room, what to change so someone can stay home safely.",
    },
  },
];
