# Lighting Design — API (Express + TypeScript)

Replaces the PHP endpoints. Receives the installation survey, formats it and
delivers it to the private Telegram group. **Nothing is stored**: photos live in
memory only and go straight to Telegram; the only file on disk is
`data/tokens.json` (single-use link bookkeeping, no personal data).

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | liveness |
| `POST` | `/api/token` | mint a single-use form link (header `x-admin-secret`) |
| `GET` | `/api/token/:token` | link status — `{ ok, valid, used, salesperson }` |
| `POST` | `/api/install` | submit the survey + 3 photos, consumes the token |

`/api/install` accepts **both** payload shapes: the typed `InstallSurvey` from
`src/contract.ts`, and the already-live Arabic form's `data` JSON blob with
`photo_full / photo_ceiling / photo_power`.

## Commands

```bash
npm install
cp .env.example .env    # fill BOT_TOKEN, INSTALL_CHAT_ID, ADMIN_SECRET
npm run dev             # tsx watch on :8080
npm run build           # → dist/
npm start               # node dist/index.js
```

## Minting a link for a customer

```bash
curl -X POST https://lightingdesign-ksa.com/api/token \
  -H 'content-type: application/json' \
  -H 'x-admin-secret: <ADMIN_SECRET>' \
  -d '{"salesperson":"Fikri"}'
# → { "token": "…", "url": "https://lightingdesign-ksa.com/form/?t=…" }
```

Send that URL to the customer on WhatsApp. It works once.
