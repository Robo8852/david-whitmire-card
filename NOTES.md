# Project Notes / TODOs

## Footer agency credit needs its link restored
The footer says "Card by **Proclaim Agency**" but is intentionally **plain text, not a link** right now.
The old link pointed to `https://costadelsolweb.com`, which is the wrong site for the
Proclaim Agency branding. Once the correct Proclaim Agency URL exists/is decided:

1. Edit `src/components/Footer.tsx` — wrap the agency name back in an `<a>` with
   `target="_blank" rel="noopener"` and the classes `font-semibold text-primary no-underline`.
2. Remove this section from the notes.

## Other open items
- **og:image / icons at custom domain**: `index.html` has a `TODO(deploy)` — `og:image`
  should become an absolute URL when the final domain is decided (social scrapers
  ignore relative paths).
- **Canonical URL**: `src/lib/site.ts` hardcodes `https://david-whitmire-card.vercel.app`
  (used by the Connect SMS and Share buttons). Update it if a custom domain is attached.
- **Get a Quote domain question**: that button links to `paverspalmsparadise.com/contact-us/`
  while every other business link uses `paverssrq.com` — inherited from the original page,
  canonical domain unconfirmed with the client.
