# Lighting Design — website (Vite + React + TypeScript)

Public marketing site: home (3-slide hero, collections, selected pieces, projects,
gallery teaser, about + team, materials, bespoke, showrooms) and a filterable
gallery page.

## Stack

- **Vite 5** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS** — brand tokens live in `tailwind.config.ts` (ink / cream / gold /
  copper, Cormorant Garamond + Jost)
- **React Router** — `/` and `/gallery` (`/gallery?cat=chand|wall|lamp` deep-links
  the collection filters)
- **Lenis** — inertial smooth scrolling, routed through `useLenis`

## Commands

```bash
npm install
npm run dev      # http://localhost:5173  (proxies /api → localhost:8080)
npm run build    # type-check + production build into dist/
npm run preview  # serve the build locally
```

## Structure

```
src/
  App.tsx            routes: / and /gallery
  pages/             Home (mounts the legacy page), GalleryPage
  legacy/            HomeMarkup.tsx, legacy.css, motion.ts — the original
                     hand-authored home page, ported intact
  components/        Nav, Footer, Floaters, Lightbox (used by the gallery)
  hooks/             useLenis, useReveal, useReducedMotion
  data/              site (contact, socials, nav), gallery
  types.ts           gallery content model
@shared             → server/src/contract.ts (API request/response contract)
```

## The home page

The home page is the original markup carried over as-is: `HomeMarkup.tsx`
renders it, and `mountLegacyMotion()` from `motion.ts` drives the hero slider,
intro sequence, particles, scroll reveals, parallax, pinned projects,
lightboxes, menu and counters. Both files are a verbatim port — edit content in
`HomeMarkup.tsx`, but don't restructure them by hand.

## Motion

All motion is skipped under `prefers-reduced-motion`. Smooth scrolling is Lenis,
set up app-wide in `App.tsx` via `useLenis`; the gallery page's scroll reveals use
`useReveal` (`data-reveal`, `data-stagger`).

## Assets

`public/assets/` — `hero/ collections/ pieces/ projects/ gallery/ team/ site/`.
Adding a gallery photo = drop the file in `public/assets/gallery/` and add one row
to `src/data/gallery.ts` (`src`, `cat`, `mat`, `title`).

`public/form/` — the Arabic installation-survey form (static page), pointed at
`/api/install`.
