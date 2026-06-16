# Product image sourcing checklist

**Goal:** collect official, licensed product photography for all 52 catalog products.

## How to use this

1. Allay is an **authorized dealer** of the brands below. Each brand provides
   dealer/marketing image assets — log into each portal once and pull every SKU
   listed under it.
2. Save each image to **`public/products/<slug>.jpg`** (or `.webp`) using the
   exact slug shown. That filename is how the site wires the photo to the product.
3. Tell Claude when images are in `public/products/` and it will switch the cards
   and detail pages from the branded placeholder tiles to the real photos (one
   small code change) and redeploy.

## Image specs

- **Shape:** square (1:1) preferred; 4:3 acceptable. The site crops to fit.
- **Background:** white or light neutral, product centered, soft shadow.
- **Size:** ≥ 1200 px on the long edge; export web-optimized (`.webp` or `.jpg`, < 300 KB).
- **Consistency:** same background/lighting across products reads as a real catalog.

## ⚠️ Licensing note

Only use images the manufacturer **explicitly licenses to dealers** (dealer
portals, marketing/asset kits, or product pages that grant reseller use). Do
**not** scrape images from Google, Amazon, or competitor sites — those are
copyrighted and create real liability for the store. When unsure, ask your brand
rep for the "product image / marketing asset kit."

---

## Source by manufacturer

| Brand | # | Where to get assets |
|---|---|---|
| ResMed | 8 | ResMed.com product pages + ResMed dealer/brand portal (login) |
| Drive Medical | 9 | DriveMedical.com → product page "Resources/Images"; Drive dealer portal |
| Medline | 9 | Medline.com (Medline account) → high-res image per item number |
| JOBST (Essity) | 6 | JOBST-USA.com product pages / Essity dealer portal |
| Moen | 2 | Moen.com → Home Care collection product pages |
| Carex (Compass Health) | 2 | Carex.com / Compass Health Brands dealer assets |
| 3M | 2 | 3M.com Health Care product pages |
| RMS (Royal Medical) | 3 | Amazon brand — limited dealer assets; consider AI/own photo |
| Pride Mobility | 1 | Pride "Provider Lounge" dealer portal / PrideMobility.com |
| Lumex (Graham-Field) | 1 | Graham-Field.com (GF Health) dealer assets |
| Hugo (Drive) | 1 | HugoAnywhere.com product pages |
| Tranquility | 1 | TranquilityProducts.com product pages |
| Depend (Kimberly-Clark) | 1 | Depend.com product pages |
| Calmoseptine | 1 | CalmoseptineInc.com |
| Cardinal Health (Telfa) | 1 | Cardinalhealth.com catalog (account) |
| Contour | 1 | Manufacturer site or substitute |
| Stander | 1 | Stander.com product pages |
| Allay Medical (own) | 1 | In-house — client photographs the kit in store |

---

## Per-product checklist (grouped by brand)

### ResMed — 8
- [ ] ResMed AirSense 11 AutoSet — SKU RES-39000 → `public/products/resmed-airsense-11.jpg` _(CPAP)_
- [ ] ResMed AirMini Travel CPAP — SKU RES-38800 → `public/products/resmed-airmini.jpg` _(CPAP)_
- [ ] ResMed AirFit P10 Nasal Pillow Mask — SKU RES-62901 → `public/products/airfit-p10.jpg` _(CPAP)_
- [ ] ResMed AirFit F30i Full Face Mask — SKU RES-63835 → `public/products/airfit-f30i.jpg` _(CPAP)_
- [ ] ResMed AirFit N20 Nasal Mask — SKU RES-63550 → `public/products/airfit-n20.jpg` _(CPAP)_
- [ ] ResMed ClimateLineAir Heated Tubing — SKU RES-37296 → `public/products/climatelineair-tubing.jpg` _(CPAP)_
- [ ] ResMed AirSense 11 Air Filters (6-pack) — SKU RES-39102 → `public/products/airsense-11-filters.jpg` _(CPAP)_
- [ ] ResMed AirSense 11 Humidifier Tub — SKU RES-39103 → `public/products/airsense-11-humidifier-tub.jpg` _(CPAP)_

### Drive Medical — 9
- [ ] Drive Medical 19" Transport Wheelchair — SKU DRV-TR37E-SV → `public/products/drive-transport-wheelchair.jpg` _(Mobility Aids)_
- [ ] Drive Aluminum Folding Cane — SKU DRV-10301 → `public/products/drive-folding-cane.jpg` _(Mobility Aids)_
- [ ] Drive Two-Button Folding Walker — SKU DRV-10210-1 → `public/products/drive-standard-walker.jpg` _(Mobility Aids)_
- [ ] Drive Nitro Euro-Style Rollator — SKU DRV-RTL10266 → `public/products/drive-nitro-rollator.jpg` _(Mobility Aids)_
- [ ] Drive Cruiser III Standard Wheelchair — SKU DRV-K316DDA-SF → `public/products/drive-cruiser-wheelchair.jpg` _(Mobility Aids)_
- [ ] Drive Bariatric Heavy-Duty Rollator — SKU DRV-10215RD-1 → `public/products/drive-bariatric-rollator.jpg` _(Mobility Aids)_
- [ ] Drive Tub Transfer Bench — SKU DRV-12011KD-1 → `public/products/drive-transfer-bench.jpg` _(Bath Safety)_
- [ ] Drive 3-in-1 Bedside Commode — SKU DRV-11148KD-1 → `public/products/drive-bedside-commode.jpg` _(Bath Safety)_
- [ ] Handheld Shower Spray with 6-ft Hose — SKU DRV-12440 → `public/products/handheld-shower-spray.jpg` _(Bath Safety)_

### Medline — 9
- [ ] Medline Protection Plus Overnight Briefs (Large) — SKU MED-MSC33001A → `public/products/medline-briefs-large.jpg` _(Incontinence)_
- [ ] Sterile Gauze Pads 4" x 4" (100 ct) — SKU MED-PRM21408 → `public/products/sterile-gauze-pads-4x4.jpg` _(Wound Care)_
- [ ] Saline Wound Cleanser Spray (7.4 oz) — SKU MED-MSC097044 → `public/products/saline-wound-cleanser.jpg` _(Wound Care)_
- [ ] Hydrocolloid Dressings 4" x 4" (5 ct) — SKU MED-MSC5544EP → `public/products/hydrocolloid-dressings.jpg` _(Wound Care)_
- [ ] Bladder Control Pads (Heavy, 39 ct) — SKU MED-BCPH39 → `public/products/bladder-control-pads.jpg` _(Incontinence)_
- [ ] Gait Belt with Quick-Release Buckle (60") — SKU MED-MDT828203 → `public/products/gait-belt-60.jpg` _(Daily Living)_
- [ ] Nitrile Exam Gloves (Box of 100) — SKU MED-486802 → `public/products/nitrile-exam-gloves.jpg` _(PPE)_
- [ ] Procedure Masks, Level 1 (Box of 50) — SKU MED-NON27375 → `public/products/procedure-masks-50.jpg` _(PPE)_
- [ ] Disposable Isolation Gowns (10-pack) — SKU MED-NONLV325 → `public/products/isolation-gowns.jpg` _(PPE)_

### JOBST (Essity) — 6
- [ ] JOBST UltraSheer 15-20 mmHg Knee-High — SKU JOB-119408 → `public/products/jobst-ultrasheer-15-20.jpg` _(Compression)_
- [ ] JOBST UltraSheer 20-30 mmHg Knee-High — SKU JOB-119412 → `public/products/jobst-ultrasheer-20-30.jpg` _(Compression)_
- [ ] JOBST Relief 20-30 mmHg Thigh-High — SKU JOB-114215 → `public/products/jobst-relief-thigh-high.jpg` _(Compression)_
- [ ] JOBST for Men 15-20 mmHg Socks — SKU JOB-110304 → `public/products/jobst-for-men-15-20.jpg` _(Compression)_
- [ ] JOBST Bella Strong Arm Sleeve 20-30 mmHg — SKU JOB-102262 → `public/products/jobst-bella-arm-sleeve.jpg` _(Compression)_
- [ ] Stocking Donner / Doffer Aid — SKU JOB-DONNER → `public/products/stocking-donner-aid.jpg` _(Compression)_

### Moen — 2
- [ ] Moen DN7110 Shower Chair — SKU MOE-DN7110 → `public/products/moen-shower-chair.jpg` _(Bath Safety)_
- [ ] Moen 24" Bathroom Grab Bar — SKU MOE-LR8724D → `public/products/moen-grab-bar.jpg` _(Bath Safety)_

### Carex (Compass Health) — 2
- [ ] Carex 3.5" Raised Toilet Seat with Arms — SKU CAR-B318 → `public/products/carex-raised-toilet-seat.jpg` _(Bath Safety)_
- [ ] Carex Toilet Safety Rails — SKU CAR-B204 → `public/products/carex-toilet-safety-rails.jpg` _(Bath Safety)_

### 3M — 2
- [ ] 3M Micropore Paper Tape 1" (2-pack) — SKU MMM-1530-1 → `public/products/micropore-paper-tape.jpg` _(Wound Care)_
- [ ] 3M N95 Respirator Masks (10-pack) — SKU MMM-8210-10 → `public/products/n95-respirator-masks.jpg` _(PPE)_

### RMS (Royal Medical Solutions) — 3
- [ ] RMS 32" Reacher Grabber — SKU RMS-G32 → `public/products/reacher-grabber-32.jpg` _(Daily Living)_
- [ ] Dressing Aid Kit (sock aid, shoehorn, dressing stick) — SKU RMS-DRESS5 → `public/products/dressing-aid-kit.jpg` _(Daily Living)_
- [ ] Weekly AM/PM Pill Organizer — SKU RMS-PILL14 → `public/products/weekly-pill-organizer.jpg` _(Daily Living)_

### Pride Mobility — 1
- [ ] Pride Go-Go Elite Traveller Scooter — SKU PRD-SC40E → `public/products/pride-gogo-elite-traveller.jpg` _(Mobility Aids)_

### Lumex (Graham-Field) — 1
- [ ] Lumex UpWalker Upright Walker — SKU LUM-UPRIGHT → `public/products/lumex-upright-walker.jpg` _(Mobility Aids)_

### Hugo (Drive) — 1
- [ ] Hugo Quad Cane — SKU HUG-731-862 → `public/products/hugo-quad-cane.jpg` _(Mobility Aids)_

### Nova — 1
- [ ] Nova Vibe 6 Rollator — SKU NOV-4215 → `public/products/nova-vibe-6-rollator.jpg` _(Mobility Aids)_

### Tranquility — 1
- [ ] Tranquility Disposable Underpads 30" x 36" (40 ct) — SKU TRQ-2078 → `public/products/tranquility-underpads.jpg` _(Incontinence)_

### Depend (Kimberly-Clark) — 1
- [ ] Depend Pull-On Protective Underwear (Maximum) — SKU KIM-53745 → `public/products/depend-protective-underwear.jpg` _(Incontinence)_

### Calmoseptine — 1
- [ ] Calmoseptine Skin Barrier Cream (4 oz) — SKU CAL-00799 → `public/products/calmoseptine-barrier-cream.jpg` _(Incontinence)_

### Cardinal Health — 1
- [ ] Telfa Non-Stick Pads 3" x 4" (50 ct) — SKU COV-7591D → `public/products/telfa-nonstick-pads.jpg` _(Wound Care)_

### Contour — 1
- [ ] CPAP Mask Cleaning Wipes (62 ct) — SKU CTL-CW62 → `public/products/cpap-mask-wipes.jpg` _(CPAP)_

### Stander — 1
- [ ] Stander Bed Assist Rail — SKU STD-8000 → `public/products/bed-assist-rail.jpg` _(Daily Living)_

### Allay Medical (own product) — 1
- [ ] Allay Post-Op Wound Care Kit — SKU ALY-POSTOP1 → `public/products/post-op-wound-care-kit.jpg` _(Wound Care)_ — shoot in-house

---

**Total: 52 products.** When the images are dropped into `public/products/`, tell Claude
and it will wire them into the catalog and redeploy.
