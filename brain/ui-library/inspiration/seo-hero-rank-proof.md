# SEO Hero — split value prop + live "rank proof" panel

**Type:** hero
**For page:** `pages/services/seo/` (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/products.csv` row 5 — **B2B Service**: style `Trust & Authority + Minimal`,
  secondary `Feature-Rich, Conversion-Optimized`, colors `Professional blue + neutral grey`, note
  "Credibility essential. Clear ROI messaging." This is the correct product archetype for an SEO
  retainer sold to business owners, not row 69 "Marketing Agency" (`Brutalism + Motion-Driven` — see
  Rejected below).
- `ui-ux-pro-max/data/colors.csv` row 1 — **SaaS (General)**: primary `#2563EB` on `#FFFFFF`,
  accent `#EA580C`, note "Trust blue + orange CTA contrast [WCAG-adjusted]". Use as the *accent logic*
  (one confident blue, one warm CTA), not literal hex — Katechs' own palette/tokens stay as-is.
- `ui-ux-pro-max/data/landing.csv` row 25 — **Enterprise Gateway** pattern: hero mission statement,
  primary CTA "Contact Sales" pattern, "Corporate: Navy/Grey. High integrity. Conservative accents,"
  "Trust signals prominent."
- Client-supplied reference: `assets/seo-hero-client-ref.png` (repo's own
  `seo page inspiration/1st section.png`) — the SERP-rank card mechanic the current ad-hoc pass
  (`components/Seo/Hero.js`) already built from. This entry keeps that mechanic and upgrades what's
  *inside* the card.
- WebFX `/seo/services/` (cited in `data/seo/structure.md`) — leads with a hard stat + rating badge
  next to the headline, not just a decorative graphic.

## Why it fits Katechs
The current Hero already has the right skeleton (split layout, SERP mock card, proof pills, dual CTA) —
the gap is that the card is a static illustration with an invented "240%" number, which is exactly the
kind of unverified stat the Manager's own `seo-flag` pattern (used lower on the page) is built to avoid.
The fix is a **mechanic change, not a re-skin**: turn the card into a live-feeling "rank movement" widget
— three keyword rows, each with a *before → after* position pill and a small sparkline, sourced from
`data/seo/data.js` so Content can drop in real client keywords later, and today it ships with an honest
placeholder state (dashes, not an invented percentage) using the same `seo-stat-pending` shimmer already
built for the Results section. That reuses an existing pattern instead of inventing a new "fake number"
problem in a second place on the page.

## Fit with our stack
- Bootstrap 5 + global SCSS only — this is a `.seo-serp-card` / `.seo-rank-row` class pair appended
  under the existing `seo-hero-*` block in `styles/style.scss`. No Tailwind, no CSS Modules.
- RTL: the rank-arrow icons (`bx-up-arrow-alt`) must **not** mirror (up is up in both directions);
  the row itself (label → sparkline → rank pill) reverses direction automatically via `flex-direction`
  inherited from the RTL container — verify with the Lab's RTL toggle before shipping. Arabic keyword
  strings can be long ("خدمات تحسين محركات البحث لمواقع التجارة الإلكترونية") — the row needs
  `text-overflow: ellipsis` with a `title` attribute fallback, not a fixed-height clamp that clips a word.
- Motion: Lab Tier B (the existing `Reveal` stagger is enough for the row-by-row reveal; a sparkline
  draw-in is optional Tier B `strokeDashoffset`, not Tier A). None of this needs GSAP.
- Reuse: `components/Common/Reveal.js`, `components/Common/Magnetic.js` (both already used in
  `Hero.js`), and the `seo-stat-pending` shimmer class already shipped in `Results.js` for the
  no-real-numbers state.

## Structure
1. Eyebrow + H1 + supporting paragraph + 3 proof pills + dual CTA (unchanged from current build).
2. Media panel, upgraded: badge row ("عدد الكلمات في الصفحة الأولى" — no invented %) → 3× rank rows
   (keyword label, sparkline, before/after pill) → footnote ("بيانات تجريبية إلى أن تتوفر أرقام حقيقية"
   while placeholder, swapped for real client data once available).

## Data it needs
`data/seo/data.js` → `hero.rankProof`: array of `{ keyword, before, after, trend: number[] }`.
Until real numbers exist, Content ships this as `null`/empty and the component falls back to the
pending-shimmer state — never a static invented number.

## Risks
- If the sparkline is built as an SVG per row × 3 rows, watch bundle/paint cost on low-end mobile —
  keep it a simple 5–8 point polyline, not a charting library (`charts.csv` row 1 "Trend Over Time"
  agrees: under 4 points, use a stat card instead of a chart — so if real data has <4 points, drop the
  sparkline and show the before/after pill alone).
- Long Arabic keyword strings are the real risk here, not the visual — test with the longest realistic
  keyword phrase, not "SEO" as a placeholder.
