# Project Compass — agreed spec (say "start Project Compass" to build)

Engineer project-intake system for Lighting Design. All English, site's dark/gold look.

## Flow
- Salesman sends link `…/projects/?ref=<salesman>` (fikry/mahmoud/saad) — sales name auto-recorded.
- Multi-step form the engineer fills:
  1. About you: name, company, phone, email, role (Engineer / Interior designer / Contractor / Owner's rep)
  2. Project: type (Villa, Palace, Office, Restaurant, Hotel, Mosque, Other), city, levels, stage (Design / Under construction / Finishing)
  3. Spaces: "+ Add space" cards — type (Majlis, Ladies' majlis, Dining, Living, Bedroom, Entrance/Lobby, Staircase, Corridor, Office, Outdoor…), qty, L×W (m), ceiling height, note. Inside each card "+ Add fixture": type (Chandelier, Wall light, Table lamp, Floor lamp, Pendant, Spotlights, Strip/cove, Outdoor…) + qty + note.
  4. Files: DWG/DXF/PDF + images, multiple, up to ~200MB server-side.
  5. Timing & budget (optional): needed-by date, budget range / "prefer to discuss".
- Submit → reference number **LD-2026-NNN**, success screen shows it + edit link (secret token). Data saved per-project on server (folder per ref).

## Telegram (separate "Projects" forum group, NOT the install group)
- Bot creates a topic per project: `LD-2026-014 · Villa · Al Khobar · Eng. Ahmed`
- Posts summary (engineer, project, spaces+fixtures table with totals, Sales: X), files ≤50MB as documents, >50MB as server download links.
- Assign buttons (Fikry / Mahmoud / Saad) — tap renames topic + announces. Status buttons (Quoted/Won/Lost) optional later.
- Revisions: engineer reopens edit link, resubmits → bot posts "🔄 Revision N — changed: …" diff in same topic. History kept.

## Later phases (agreed, not yet in scope)
- Read-only dashboard on same data (password page: list/search/filter projects).
- WhatsApp internal channel rejected (paid API, no topics/buttons; WhatsApp stays customer-facing).

## Open details to confirm at build time
- Final space-type list, budget ranges, ref numbering reset (yearly vs forever).
- PHP backend (same stack as deploy-form), new bot group id + token reuse or new bot.
