# Allay Medical Solutions — Web

Production site for Allay Medical Solutions, LLC. Next.js 16 (App Router) + Sanity CMS + Tailwind v4 + Stripe + Mux.

## Stack

- **Framework**: Next.js 16.2 (App Router, React 19)
- **CMS**: Sanity v3, embedded Studio at `/studio`
- **Styling**: Tailwind CSS v4 (CSS-first theme), shadcn-style primitives
- **Commerce**: Stripe Checkout (OTC categories), Stripe Tax
- **Email**: Resend for transactional
- **Media**: Mux for product/condition video, Sanity for images
- **Analytics**: Plausible (wire via env at launch — no PHI risk)
- **Hosting**: Vercel

## Getting started

1. Copy `.env.example` to `.env.local` and fill in at minimum:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (typically `production`)
2. Install + run:
   ```bash
   npm install
   npm run dev
   ```
3. Open <http://localhost:3000> for the site, <http://localhost:3000/studio> for the CMS.

## Structure

```
src/
  app/                 # Routes (App Router)
    page.tsx           # Homepage (12 sections)
    shop/              # Catalog — category + product routes
    rentals/           # Rental catalog + booking
    services/          # Sharps, notary, vaccinations
    conditions/        # Condition hubs (SEO flagship)
    locations/         # Local SEO pages (Portland metro)
    blog/              # Editorial
    about/ contact/    # Company pages
    api/contact/       # Contact form route
    studio/[[...tool]] # Embedded Sanity Studio
    sitemap.ts robots.ts
  components/
    layout/            # Header, Footer, AnnouncementBar
    marketing/         # Hero, QuickActionRow, CategoryTile, TrustBar,
                       #   TestimonialCard, ConditionCard, LocationMap
    ui/                # Button, Badge (shadcn-style)
  lib/
    site.ts            # NAP, hours, nav config — single source of truth
    utils.ts           # cn, formatPrice, absoluteUrl
    seo/jsonld.tsx     # JSON-LD helpers (LocalBusiness, MedicalBusiness,
                       #   Organization)
  sanity/
    env.ts client.ts   # Connection + image URL builder
    structure.ts       # Studio left-rail organization
    schemas/           # 11 schemas: product, category, rentalEquipment,
                       #   service, condition, location, blogPost,
                       #   testimonial, siteSettings, faq, rentalRequest
```

## HIPAA boundary (Phase 1)

- **Zero PHI collected.** Public catalog, non-medical contact form, rental form captures only name/phone/email/equipment/date.
- **Do not add GA4** — Google will not sign a BAA. Use Plausible.
- Prescription-required items (CPAP machines) route to call/visit CTAs — no upload UI.

## Phased rollout

| Phase | Weeks | Scope |
|---|---|---|
| 0 | 1-2 | Brand refresh, design tokens, IA, content production kickoff |
| 1 | 3-7 | Site launch — catalog-only CTAs, 50 products, 3 condition hubs, 3 location pages |
| 2 | 8-10 | Stripe OTC checkout, FSA/HSA, rental booking automation |
| 3 | 11-14 | All condition/location pages, video library, review collection, backlink outreach |
| 4 | ongoing | 2 blog posts/week, quarterly audit, A/B tests |

Full plan: `C:\Users\PC\.claude\plans\so-bro-we-close-happy-nest.md`.

## Verification

```bash
npm run build           # TypeScript + Next build
npm run start           # Production server
```

Pre-launch checklist:

- Lighthouse ≥ 90 perf, 100 SEO, ≥ 95 a11y on home + top category + top product
- Rich Results Test passes for LocalBusiness, Product, FAQ schemas
- axe DevTools: 0 WCAG AA violations
- Stripe test + live mode $1 test purchase
- All Wix URLs 301 redirected (configure in `next.config.ts`)
- Google Search Console + Business Profile linked, NAP consistent
