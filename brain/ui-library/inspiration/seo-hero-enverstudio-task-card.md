# SEO Hero — Enver Studio task-management hero (badge pill + split-adjacent card w/ list rows)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/24085379-Hero-Section-for-SaaS-Landing-Page — "Hero Section for SaaS Landing
  Page" by Ali Husni for Enver Studio. Layout/composition reference only — **no code taken**.
- Screenshot: `assets/seo-hero-enverstudio-taskcard.png`

## Why it fits Katechs — compared directly to the built Hero.js
- **Badge:** matches well — a small rounded pill top-left of the headline reading "✨What's New — Announcing
  our AI Feature" with a trailing chevron, same shape/weight/position role as our "نمو 240%" badge, just
  positioned above the headline (text side) rather than on the media card.
- **Ranked-row mechanic:** partial — the hero is centered/stacked, not split, and the card below the headline
  is a **task-management view** (a tab bar: Kanban / Task List / Timeline, then a "Craftboard Project" panel
  with an assignee-avatar row and a search/filter bar). The **tab-bar-then-list-row structure directly maps**
  onto our search-bar-then-ranked-rows structure — same two-part anatomy (a control bar, then rows below it)
  — but the rows themselves are tasks with avatars, not ranked search results with rank numbers.
- **Button pairing:** only one visible primary CTA ("Get Started") in the captured crop — the reference likely
  has a secondary link in its nav ("Login") rather than a true button pair, so this **does not match** our
  dual-button row; noted as a gap.

## Fit with our stack
- Bootstrap-friendly composition: pill badge, large sans headline, single CTA, full-width card below — no
  Tailwind-only tricks visible.
- RTL: mirror pill position and the tab bar order (active tab stays visually first in reading direction);
  avatar stack and any Latin project names stay LTR internally.
- Motion: Lab tier A/B — pill badge fade-in, tab bar can be a simple active-state swap (no animation needed,
  or a Lab-tier-A underline slide).
- Reusable existing pieces: `.seo-serp-bar` maps directly onto the tab-bar row; `.seo-eyebrow` pill styling
  already matches this badge closely.

## Structure
Centered: badge pill → large 2-line headline → subhead → single CTA → full-width card (tab bar → project
header row with avatar stack → search/filter row, rows continue below the fold).

## Data it needs
Badge text + link, one CTA label, and for the card: a tab-bar label set (3 tabs) plus a project/row title and
an avatar list — a different data shape than our current 3 ranked rows, closer to a project-list dataset.

## Risks
- Single-CTA hero is a real gap against the two-button target — use this reference for the **badge and
  tab-bar/list anatomy only**, not the button row.
- Centered, not split — adapting the card into our existing split-panel position is a layout change the
  Implementer must make deliberately, not a drop-in.
- Avatar-stack + task-row content doesn't map to Arabic SEO copy without new iconography; Content would need
  to supply a genuinely different row dataset than the current proof/rank strings.
