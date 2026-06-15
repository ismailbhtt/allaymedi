# Sanity seed data

These files seed a fresh Sanity dataset with real launch content.

## Prerequisites

1. Create a Sanity project: <https://www.sanity.io/manage>
2. In your project's dashboard, copy the **Project ID** into `.env.local` as `NEXT_PUBLIC_SANITY_PROJECT_ID`, and set `NEXT_PUBLIC_SANITY_DATASET=production`.
3. Create an **API token** with *Editor* access. Do NOT commit it. Use:
   - `SANITY_READ_TOKEN` (for server reads; optional for public datasets)
   - `SANITY_WRITE_TOKEN` (only needed for the rental-request API route)
4. Install the Sanity CLI: `npm install -g sanity`
5. From the project root: `sanity login`

## Importing

From the project root:

```bash
# creates the Sanity project link (only needed the first time)
npx sanity@latest init --coupon dev --env --bare

# import all seed documents
npx sanity dataset import sanity/seed/all.ndjson production --replace
```

The `--replace` flag makes the import idempotent: re-running overwrites existing documents by `_id`.

## Files

- `all.ndjson` — one canonical file with every document, newline-delimited JSON
- One `_type` per line, with stable `_id` values (`category-<slug>`, `product-<slug>`, etc.) so re-imports are safe
- Images in seed docs reference placeholder Unsplash URLs via `_type: "image"` with an `_sanityAsset` property — Sanity's CLI uploads them on import

## After import

1. Open the embedded Studio at <http://localhost:3000/studio>
2. Verify `siteSettings` has the featured categories, rentals, and blog posts populated
3. Add real product photography (3 angles per SKU, neutral background)
4. Record Mux videos and paste the playback IDs into the `muxVideo` field on top products / condition hubs

## Regenerating

Seed content is intentionally hand-written (not generated) because tone and
caregiver-specific language matter. Update the NDJSON directly, re-run import.
