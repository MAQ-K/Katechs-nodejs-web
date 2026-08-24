# SEO Closing Block — objection-handling FAQ feeding one final CTA

**Type:** FAQ + CTA (closing block)
**For page:** `pages/services/seo/` (`components/Seo/Faq.js` + `components/Seo/CtaBand.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/landing.csv` row 16 — **FAQ/Documentation Landing**: "Reduce support tickets...
  Contact/support CTA" for unresolved questions — confirms FAQ-directly-before-CTA is the right
  sequence (already the current page order), and that the CTA should read as "still have a question →
  talk to us," not a disconconnected generic close.
- `ui-ux-pro-max/data/landing.csv` row 1 — **Hero + Features + CTA**: "Deep CTA placement... contrasting
  accent color (≥7:1 contrast ratio). Sticky navbar CTA" for the final conversion band — confirms the
  `seo-btn-invert` treatment already used in `CtaBand.js` (light button on the dark closing section) is
  the correct contrast strategy, keep it.
- `ui-ux-pro-max/data/ux-guidelines.csv` — Interaction rows 28–32 (Focus/Hover/Active/Disabled/Loading
  states) apply directly to the accordion buttons and the CTA button; verify all five states exist,
  not just hover.

## Why it fits Katechs
Both pieces are already structurally sound (5-question accordion via `react-accessible-accordion`,
a centered CTA band with dual buttons) — this is a **connect the two, don't redesign either** proposal.
The specific idea: end the FAQ list with a 6th "item" that isn't a question but a bridge — "لسه عندك
سؤال؟" — inline, styled distinctly (no `+` sign, just a link into the CTA band's anchor) so the visitor
who scrolls past all 5 answered questions still unanswered has an explicit next step instead of hitting
a dead accordion and then a disconnected CTA band a scroll later.

## Fit with our stack
- Bootstrap 5 + global SCSS — the 6th "bridge" row is a plain `.seo-faq-bridge` link styled inside the
  existing `.seo-accordion` container, not a real `AccordionItem` (it shouldn't expand/collapse).
- RTL: no change needed — the accordion and CTA already work correctly in RTL per the current build;
  only confirm the `+`/`-` accordion sign doesn't need mirroring (it's a symbol, not directional).
- Motion: none new — accordion open/close is already CSS-driven via the library; the CTA already uses
  `Magnetic.js`.
- Reuse: `react-accessible-accordion` (already a dependency, keep using it — don't replace with a
  hand-rolled accordion), `Magnetic.js`, `Reveal.js`.

## Structure
FAQ accordion (5 items, unchanged) → bridge link → CTA band (unchanged: heading, supporting line, dual
CTA). The only new element is the one-line bridge.

## Data it needs
One string in `data/seo/data.js` for the bridge link text, if FAQ becomes data-driven (currently
hardcoded in `Faq.js` — worth flagging to Content as a "should be data-driven per the Brief's own rule"
item, independent of this proposal).

## Risks
- Low risk section — the existing mechanic is solid. The only real risk is scope creep: resist adding
  a search bar (`landing.csv` row 16's "Hero with search bar" idea) to a 5-question FAQ — that pattern
  is for documentation-scale FAQ (20+ questions), not this page.
