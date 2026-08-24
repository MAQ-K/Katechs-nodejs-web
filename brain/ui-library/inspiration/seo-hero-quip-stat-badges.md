# SEO Hero — Quip split hero (floating stat badges + input-as-CTA)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/search/seo-dashboard (title: "SEO Management Tool Landing Page", project "Quip") —
  Dribbble shot, layout/composition reference only, no code taken.
- Screenshot: `assets/seo-hero-quip-dribbble.jpg` (top-of-page hero crop; the shot's lower charts/pricing
  rows are a different section, not part of this candidate)

## Why it fits Katechs
Different split from the other two: **centered copy, not side-by-side** — headline + subhead centered, with
two small stat badges ("300 Vendors Onboarded", "€60K Profits Earned") floating at the left/right edges of
the text block, and the CTA is a **URL input row** ("Enter Your Website Url" + "Boost My Rankings" button)
instead of a plain button. This is worth filing even though it's a structurally different hero shape,
because:
1. The **input-as-CTA pattern directly matches our audit-form intent** — this page already has a separate
   `AuditForm` section; this hero shows what it looks like to pull that "type your URL" action up into the
   hero itself as the primary CTA, which is a real alternative to our current "احصل على تحليل مجاني" button.
2. The floating stat badges are a lighter-weight proof mechanic than our current 3-pill proof row — worth
   comparing side by side, not necessarily replacing it.
- Cites `ui-ux-pro-max/data/landing.csv` row 5 "Funnel (3-Step Conversion)" keywords (funnel, conversion,
  action) — the URL-input-as-hero-CTA is a funnel-style "start the action right here" pattern from that row.
- Cites `ui-ux-pro-max/data/ux-guidelines.csv` general CTA-placement guidance (single, unambiguous primary
  action above the fold) — an input+button combo is still one action, not two competing CTAs.

## Fit with our stack
- No Tailwind dependency to translate — centered flex column + two absolutely-positioned badge cards, plain
  CSS.
- RTL: centered layout has **no mirroring risk** (nothing to flip when centered) — this is actually the
  safest of the three candidates for RTL. The input+button row needs the icon/arrow on the button to flip
  side (already handled site-wide via existing `bx-left-arrow-alt`/RTL CSS pattern used elsewhere in
  `Hero.js`).
- Motion: Lab **Tier A** — badges can reuse the same `Reveal` stagger already in place; no new primitive
  needed.
- Reusable existing pieces: if adopted, this would **replace** the current `seo-actions` button row with an
  input row — a genuinely new component (`SeoHeroAuditInput` or similar), not a reskin of what exists.
  Cross-reference `components/Seo/AuditForm.js` before building — the goal would be one shared "start audit"
  input component used in both places, not two divergent implementations.

## Structure
- Centered column: eyebrow → H1 → subhead → input+button row
- Two floating stat badge cards, one near each side of the text block (desktop only)
- No SERP/ranking card at all in this version — the "proof" comes from the stat badges, not a fake ranking

## Data it needs
- Two stat badges: `{ icon, value, label }` × 2 (e.g. "+240% نمو" / "٣٠٠+ عميل راضٍ") — could reuse the
  existing "نمو 240%" badge value already in `Hero.js` instead of inventing new numbers
- Input placeholder copy + button label — copy already close to existing (`احصل على تحليل مجاني` → button
  label on an input row instead of a standalone button)

## Risks
- **This is the one candidate that changes the hero's primary CTA mechanic**, not just its visual skin — an
  input-as-CTA has real UX tradeoffs (typing a URL is more friction than clicking a button that scrolls to
  the existing `AuditForm`) and duplicates that section's job. Recommend treating this as "interesting but
  probably Rejected" unless the Manager specifically wants to collapse the audit-start action into the hero
  and remove/shorten the separate `AuditForm` section — flag this explicitly rather than build it
  speculatively.
- Losing the ranked-results/SERP visual removes the single strongest "we get you to #1" visual proof this
  page currently has — the stat badges are weaker proof than a ranking list for an SEO-specific audience.
- Floating badges at the text block's edges need real content-width testing with Arabic — Arabic numerals
  and short labels are usually fine, but verify against the H1's line length so a badge never overlaps
  wrapped Arabic text.
