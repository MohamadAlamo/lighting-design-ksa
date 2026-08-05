# Deploying to SmarterASP.NET (Windows / IIS)

Two folders, one domain:

| URL | Serves |
| --- | --- |
| `/` | the built React site (`react-app/dist`) |
| `/api` | the Node API (`server`) |
| `/form` | the Arabic survey form (ships inside `dist/form`) |

## 1. Enable Node for the API folder only

Control Panel → Websites → Manage Website → **NodeJs**.

⚠️ With Node enabled on a folder, **every `.js` file in it is executed by Node
instead of being served to the browser**. Enable it on `/api` only — never at the
site root, or the React bundle stops loading.

## 2. Build and upload the site

```bash
cd react-app
npm install
npm run build      # → dist/  (includes web.config, assets/, form/)
```

Upload the **contents** of `dist/` to the site root. `web.config` is included and
does two things: rewrites unknown paths to `index.html` (so `/gallery` survives a
refresh) and leaves `/api/*` alone.

## 3. Build and upload the API

```bash
cd server
npm install
npm run build      # → dist/
```

Upload to `/api`: `dist/`, `node_modules/`, `package.json`, `web.config`, and a
`.env` filled in from `.env.example`. IIS starts `node dist/index.js` through
httpPlatformHandler and injects `PORT` — the app already reads
`process.env.PORT`.

Check: `https://lightingdesign-ksa.com/api/health` → `{"ok":true,…}`

## 4. Telegram

Same bot and group as before. The API calls the Bot API directly — **no webhook
needed** for delivery. Put the bot token and the group id (starts with `-100`) in
`.env`.

## 5. GitHub deploy (recommended)

SmarterASP.NET can build from a connected repo on push. Point it at this
repository with two build targets — root: `react-app` (build `npm run build`,
output `dist`); `/api`: `server` (build `npm run build`, start `node dist/index.js`).
Then a `git push` ships the site.

## What is still the old stack

The current live site (`Lighting Design.dc.html`, `Gallery.dc.html`, `deploy-form/`
with PHP) keeps running untouched. Cut over only when the React build has been
checked on the server; the PHP form can stay live in parallel — the Node API uses
its own token store, so mint new links after the switch.

## Project Compass

The engineer project-intake system (`project-compass-spec.md`) targets this same
stack — React + TS pages under `/projects`, Express routes beside the install
form, Telegram forum topics per project.
