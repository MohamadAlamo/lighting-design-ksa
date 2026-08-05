# Lighting Design

Two stacks live in this repository.

## Current production site (vanilla)

`Lighting Design.dc.html`, `Gallery.dc.html`, `assets/`, and `deploy-form/` (the
Arabic installation form + PHP endpoints + Telegram bot). This is what is on
lightingdesign-ksa.com today. Untouched.

## New stack (React + TypeScript)

| Folder | What |
| --- | --- |
| `react-app/` | Vite + React 18 + TypeScript + Tailwind + React Router — the site |
| `server/` | Express + TypeScript — installation-survey API, Telegram delivery, single-use links |
| `DEPLOY.md` | SmarterASP.NET (IIS) deployment, step by step |
| `project-compass-spec.md` | agreed spec for the engineer project-intake system |

```bash
npm install          # installs both workspaces
npm run dev          # site on :5173
npm run dev:api      # API on :8080  (needs server/.env)
npm run build        # type-check + build both
```

Read `react-app/README.md` and `server/README.md` for details, then `DEPLOY.md`
before uploading.
