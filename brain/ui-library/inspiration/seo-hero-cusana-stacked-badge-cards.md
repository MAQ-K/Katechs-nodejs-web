# SEO Hero — Cusana CRM split hero (proof pill + dual CTA + stacked overlapping data cards)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/24873176-Saas-Hero-Section-CRM-Dashboard-Cusana — "Saas Hero Section - CRM
  Dashboard (Cusana)" by Ali Husni for Enver Studio. Layout/composition reference only — **no code taken**.
- Screenshot: `assets/seo-hero-cusana-stackedcards.png`

## Why it fits Katechs — compared directly to the built Hero.js
- **Badge:** close match — small orange "New" pill + short label, left-aligned above the headline, same role
  as our "نمو 240%"-style micro-announcement, just positioned on the text side instead of the media side.
- **Ranked-row mechanic:** **partial, not literal.** Cusana's media panel is **three separate floating cards
  stacked with slight overlap** (avatar-row card → tabbed metric card with a bar chart → "Total Revenue" card
  with a dark export-button badge), not one single card holding three ranked #1/#2/#3 rows like our SERP card.
  What *does* transfer directly: the **overlapping-card depth mechanic** (each card sits partly behind/above
  the next, exactly like our badge floats above the card) and the **dark pill badge inside the bottom card**
  ("Export Data") sitting in the same visual register as our rank-1 highlighted row.
- **Button pairing:** matches almost exactly — solid dark pill ("Start 7 Days free trial") + white-outline
  ghost pill ("Learn More" with a leading chevron), same order, same weight as our solid + ghost pair.

## Fit with our stack
- Tailwind/shadcn used? Unknown source stack (Figma export) — pure CSS translation, straightforward: 3
  absolutely-positioned `.card` blocks in a relatively-positioned wrapper, Bootstrap grid columns for the split.
- RTL: mirror the whole split (text right, cards left) and the card overlap direction; do not mirror the
  small avatar row or numerals inside the cards (LTR-safe, per proof-pill entries already filed).
- Motion: Lab tier B — staggered `Reveal` per card (same primitive already used in `Hero.js`), no GSAP needed.
- Reusable existing pieces: `Common/Reveal.js` for staged entrance, `.seo-serp-badge` styling as a base for
  the "Export Data"-style corner pill.

## Structure
Text column: pill badge → H1 (2 lines) → paragraph → dual CTA row.
Media column: 3 stacked cards, each offset ~40px lower and slightly narrower than the one above it, top card
peeking out from behind the headline, bottom card carrying a solid dark badge in its corner.

## Data it needs
Per-card: label, 1–2 metrics with a trend arrow/percent, and one badge string (e.g. "تصدير البيانات").
Content must keep each card's numbers short — long Arabic labels will force the cards to grow and break the
overlap spacing.

## Risks
- Three-card stack is visually busier than our current single-card SERP mockup — needs restraint (max 2 data
  points per card) or it reads cluttered next to a dense Arabic paragraph.
- Overlap depth relies on fixed pixel offsets — must be re-tuned per breakpoint, easy to collapse ugly on
  mobile (stack flat, no overlap, below ~768px).
- Long Arabic card labels will wrap and misalign the metric/trend row — cap at ~18 characters.
