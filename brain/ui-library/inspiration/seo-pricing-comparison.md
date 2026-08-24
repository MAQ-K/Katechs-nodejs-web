# SEO Pricing — 3-tier cards with an optional compare-table fallback

**Type:** pricing
**For page:** `pages/services/seo/` (`components/Seo/Pricing.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/landing.csv` row 14 — **Pricing-Focused Landing**: "Popular plan highlighted
  (brand color border/bg). Free: grey. Enterprise: dark/premium," "Recommend mid-tier (most popular
  badge). Address objections in FAQ." — confirms the current build's "is-popular" middle-card pattern
  is the right call, keep it.
- `ui-ux-pro-max/data/landing.csv` row 8 — **Pricing Page + CTA**: section order "Hero → Price
  comparison cards → Feature comparison table → FAQ → Final CTA" — the piece currently *missing* on
  this page is the feature-comparison table between the cards and the FAQ.
- `data/seo/structure.md` open question #3 (monthly retainer vs quote-based) — unresolved; this entry
  designs for the retainer-tiers model already built, since that's what research (Backlinko, cited in
  the same doc) confirms is the market norm, and flags the fallback if the client says otherwise.

## Why it fits Katechs
Three tiered cards with an unresolved price is already a defensible MVP — the open question is
legitimately blocked on the client. The addition worth proposing now (so it's ready the moment pricing
is confirmed) is a **compact feature-comparison table** below the three cards: rows = the union of all
features across tiers, columns = the three plans, cell = checkmark or dash. This answers "what exactly
do I lose by not choosing the top tier" in one glance instead of three separate lists a visitor has to
mentally diff — directly addresses the FAQ's implicit question before the visitor has to ask it.

## Fit with our stack
- Bootstrap 5 + global SCSS — a plain `<table>` with `.seo-compare-table`, striped rows via existing
  SCSS conventions, no CSS Modules, no Tailwind. On mobile, collapse to the existing card list only
  (hide the table below a breakpoint — a comparison table under ~500px is unreadable regardless of
  framework, this is a universal constraint, not a Bootstrap limitation).
- RTL: table columns must reverse (`الأساسية` rightmost, `الشركات` leftmost, or vice versa — whichever
  matches how the cards above are ordered under `dir="rtl"`) so the table and the cards agree on plan
  order; don't let the browser's default LTR table rendering silently disagree with the RTL card row
  above it.
- Motion: none needed beyond the existing card-grid stagger — a comparison table should not animate
  row-by-row, that's a readability tax on a reference tool.
- Reuse: the existing `plans` array in `Pricing.js` already has `features: []` per plan — the
  comparison table is a *derived view* of the same data (union of all `features[]`, cross-referenced),
  not new content Content has to author twice.

## Structure
Existing 3-card row unchanged. New: a comparison table section directly below, collapsible/hidden on
mobile, sourced from the same `plans` data.

## Data it needs
No new fields — derive the table from the existing `plans[].features` arrays. If tiers eventually have
features with different *labels* for the same capability across tiers, Content should normalize the
labels first so the union produces clean rows, not near-duplicate rows.

## Risks
- Building this before question #3 (retainer vs quote) is answered risks throwaway work if the pricing
  model changes shape entirely (e.g., moves to "starting at" + a quote form, which doesn't need a
  comparison table at all). Recommend the Manager confirms the pricing model **before** T-011 spends
  time on the compare table specifically — the 3-card layer is safe to build now regardless.
