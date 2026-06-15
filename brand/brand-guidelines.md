# Allay Medical Solutions — Brand Guidelines

A short, practical reference. For the full token values, see `design-tokens.json`.

## Positioning

**Home medical equipment, from neighbors who care.**

A family-operated medical supply store in Lake Oswego, OR, serving the Portland metro. Selling and renting DME to real families navigating real care transitions: a new CPAP diagnosis, a knee surgery, an aging parent, a hospice stretch.

We are **warm-clinical**: expert enough to trust, personal enough to come back to. We are not stock-medical, not boutique-wellness, not pharmacy-chain.

## Audience

Primary decision-makers are **45-75 years old**: adult children buying for parents, post-surgical patients, caregivers, retirees. Readability and accessibility are non-negotiable.

## Voice

- **Direct, not corporate.** "Call us" beats "please contact our team."
- **Expert, not jargon.** Use the medical term, then explain it in plain English.
- **Confident, not salesy.** Tell them when a cheaper product is better for them.
- **Compassionate, not pitying.** Elderly users are customers, not patients. Adult children are allies, not marks.
- **Specific, not vague.** "Six minutes from Bridgeport Village" beats "conveniently located."

## Typography

- **Display (headlines):** Fraunces — warm serif with an editorial quality. Weight 500-600 for headlines.
- **UI & body:** Inter — neutral geometric sans. Weight 400 body, 500 UI, 600 labels.
- **Body size:** 17px / 1.0625rem minimum. Line-height 1.65. Our audience reads at arm's length.
- **Headings:** text-balance on all h1-h3; text-pretty on paragraphs.

## Color

| Token | Use |
|---|---|
| `navy-700` / `navy-800` | Primary CTA, navigation text, headings |
| `navy-900` | Footer, deep backgrounds |
| `copper-500` / `copper-600` | Accent CTAs, badges, focus rings, hero highlights |
| `sage-500` / `sage-700` | Success states, "in stock" / "rental available" badges |
| `surface-warm` (cream) | Section backgrounds that need warmth |
| `surface-cool` (near-white blue) | Section backgrounds that need separation |

WCAG AA contrast minimums are maintained across all text / background pairings. When in doubt, use navy-700 or ink on white.

## Iconography

- Lucide React icons only. Stroke-based, matches Inter visually.
- 1.5px stroke, round caps.
- Icons next to CTA text are `size-4` (16px). Standalone accent icons are `size-5` (20px).
- Avoid decorative medical iconography (syringes, pill bottles, stethoscopes).

## Imagery rules

- Real people, real homes. See `photography-brief.md`.
- Product shots on `surface-warm` (cream). Never pure white — too clinical.
- No stock handshakes, no dated "senior in hammock" archetypes, no pharmacy product-database crops.

## Components

- Buttons are pill-shaped (`radius-full`). Primary = navy. Accent = copper. Outline = navy border on transparent.
- Cards use `radius-xl` (20px) with `shadow-card` on hover.
- Badges are pill-shaped at `size-xs` text with generous padding.
- Announcement bar lives at the top of the page, navy-800 background.

## Motion

- Reduced-motion is fully respected (globals.css handles it).
- Hover translates cards up 2px with 200ms ease. No flashy transitions.
- No carousels that auto-advance — accessibility and the 55+ audience deserve better.

## Don'ts

- No emojis in product or marketing copy. Exception: occasional use in social captions.
- No all-caps marketing headlines. Small-caps for labels only.
- No stock models. No stock hospital imagery.
- No "click here" — use descriptive link text.
- No modal popups on page load.

## Assets

- Logo: `public/logo.svg` (horizontal wordmark)
- Logo mark: `public/logo-mark.svg` (square, for favicons / social avatars)
- Design tokens: `brand/design-tokens.json`
- Photography brief: `brand/photography-brief.md`
