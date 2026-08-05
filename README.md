# Lighting Design

Website and installation-survey system for [Lighting Design](https://lightingdesign-ksa.com),
a bespoke lighting atelier with showrooms in Al Khobar and Riyadh.

Two deliverables in one repository: the public marketing site, and an internal
tool that replaced a paper-and-WhatsApp process for surveying a customer's home
before an installation crew is dispatched.

| | |
| --- | --- |
| **Site** | React 18 · TypeScript · Vite · Tailwind · React Router |
| **API** | Node · Express · TypeScript (ESM) · Telegram Bot API |
| **Deploy** | Windows / IIS (SmarterASP.NET) via `httpPlatformHandler` |
| **Bundle** | 93 KB gzipped JS, 5.6 KB CSS |

---

## The site

A dark, typographic showcase built around the product photography.

- **Hero carousel** — three slides: a gold-leaf pendant, a glass-leaf
  installation, and an objets d'art carousel of eight hand-cut crystal pieces
  with its own picker. Each slide restacks for phones.
- **Gallery** — 22 installation photographs in a masonry grid, filterable by
  fixture type and material, with live text search and a keyboard-navigable
  lightbox.
- **Motion** — Lenis smooth scrolling, scroll-triggered reveals, and a canvas
  particle field, all gated behind `prefers-reduced-motion`.
- Fully responsive from 390 px phones to wide desktop.

The home page is a port of an earlier hand-authored markup, kept intact inside
`src/legacy/` so the original design survived the move to React unchanged.

## The installation survey

A salesperson mints a **single-use link** and sends it to the customer on
WhatsApp. The customer opens a right-to-left Arabic form, answers questions the
install crew needs (voltage, ceiling type and height, access obstacles, whether
a ladder is required), pins the location on a map, and attaches three photos of
the space.

On submit, the API formats an Arabic report and delivers it to a private
Telegram group along with the captioned photos, then burns the link.

Design decisions worth noting:

- **Nothing personal is stored.** Photos are held in memory and streamed
  straight to Telegram — they never touch the disk. The only file written is
  `data/tokens.json`, which records a link's salesperson and whether it has been
  used. No customer data.
- **The link is consumed only after delivery succeeds.** If Telegram is
  unreachable, the token stays valid so the customer can retry instead of losing
  a completed form.
- **Two payload shapes, one endpoint.** `/api/install` accepts both the typed
  `InstallSurvey` contract and the legacy Arabic form's JSON blob, so the
  already-deployed form kept working during the migration.
- **Paths resolve against the app directory, never `process.cwd()`.** IIS does
  not guarantee the working directory, and a cwd-relative `.env` or token store
  means the process either fails to boot or silently writes nowhere.

## Layout

```
react-app/     Vite + React + TypeScript — the public site
  src/legacy/    ported original markup + motion engine
  public/form/   the Arabic installation form (vanilla, RTL)
server/        Express + TypeScript — survey API, Telegram delivery
DEPLOY.md      IIS deployment, step by step
```

## Running it

npm workspaces — one install at the root covers both packages.

```bash
npm install
npm run dev       # site → :5173
npm run dev:api   # API  → :8080  (needs server/.env)
npm run build     # type-check + build both
```

The API needs `server/.env`; copy `server/.env.example` and fill in a Telegram
bot token, the destination group id, and an admin secret. See
[`server/README.md`](server/README.md) for the endpoints and
[`DEPLOY.md`](DEPLOY.md) for putting it on the server.

---

Built by [Mohamad Alamo](https://www.linkedin.com/in/mohamad-alamo/).
