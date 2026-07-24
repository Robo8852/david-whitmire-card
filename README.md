# David Whitmire — Digital Business Card

A single-page digital business card for **David Whitmire**, owner of **Pavers, Palms, & Paradise**, a family-owned outdoor living contractor in Sarasota / Bradenton, FL. The page is a phone-shaped dark card with quick contact actions (email / call / text), social links, a services grid, an about section, a scroll-snap testimonial carousel, a project gallery with lightbox, and share / add-to-contacts CTAs.

The original hand-written single-file version is preserved at `reference/index-original.html` and remains the source of truth for copy and visuals.

## Tech stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config via `@theme` in `src/index.css` — there is no `tailwind.config.js`)
- [shadcn/ui](https://ui.shadcn.com/) (radix-nova preset; `Button` extended with `brand` / `brandSecondary` / `brandGhost` variants)
- [lucide-react](https://lucide.dev/) for the quick-action icons (the social icons are inline solid SVGs copied from the original)
- Fonts: Inter + Playfair Display (italic, testimonials only) via Google Fonts

## Commands

```sh
npm install       # once
npm run dev       # dev server with HMR
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # serve the production build locally
```

## Notes

- **vCard**: `public/David-Whitmire.vcf` must stay a real static file served next to the page — iOS Safari cannot download Blob-generated vCards, so the "Add to Contacts" button is a plain anchor with a `download` attribute.
- **og:image TODO**: before deploying, change the `og:image` meta in `index.html` to an **absolute** URL (e.g. `https://yourdomain.com/assets/profile.png`) — social scrapers ignore relative paths.
- The "Get a Quote" button links to `paverspalmsparadise.com` while every other link uses `paverssrq.com`; the canonical domain is unconfirmed — check with the owner before "fixing" either way.
- All static assets live in `public/assets/` and are referenced by literal string paths.
