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
  components/        Nav, Footer, Floaters, ui primitives, ProjectOverlay, Lightbox
  components/hero/   Hero, ParticleField, HeroDecor, SplitHeadline
  sections/          Philosophy, Collections, Pieces, Projects, QuoteBand,
                     GalleryTeaser, About, Materials, Bespoke, Visit
  pages/             Home, GalleryPage
  hooks/             useLenis, useReveal, useParallax, useReducedMotion
  data/              site, collections, pieces, projects, gallery, team,
                     materials, heroMarkup
  types.ts           content models
@shared             → server/src/contract.ts (API request/response contract)
```

## Motion

Every effect is opt-out under `prefers-reduced-motion`:

| Effect | Where |
| --- | --- |
| Smooth scroll (ease-out cubic, 1.15s) | `useLenis` |
| Ambient warm motes, density by viewport area | `ParticleField` (hero slide 1 only) |
| Word-mask headline reveal (115% → 0, staggered) | `SplitHeadline` |
| Fade + rise on scroll, 90ms child stagger | `useReveal` (`data-reveal`, `data-stagger`) |
| Clip-path wipe | `useReveal` (`data-wipe`) |
| Parallax photo layers | `useParallax` (`data-speed`) |
| Pinned project reel | `sections/Projects.tsx` (wide screens only) |

### heroMarkup.ts

Hero slides 2 and 3 are hand-tuned absolute compositions (17 suspended glass
leaves on cables; 8 cut-crystal objets with captions). They are carried over as
markup and animated by reference in `HeroDecor` — do not re-flow them by hand;
adjust positions in that file.

## Assets

`public/assets/` — `hero/ collections/ pieces/ projects/ gallery/ team/ site/`.
Adding a gallery photo = drop the file in `public/assets/gallery/` and add one row
to `src/data/gallery.ts` (`src`, `cat`, `mat`, `title`).

`public/form/` — the Arabic installation-survey form (static page), pointed at
`/api/install`.
