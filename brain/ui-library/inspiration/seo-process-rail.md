# SEO Process — connected rail instead of 4 loose cards

**Type:** process / how-it-works
**For page:** `pages/services/seo/` (`components/Seo/Process.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/landing.csv` row 5 — **Funnel (3-Step Conversion)**: "Progressive disclosure...
  Use progress indicators," effects "Step number animations, progress bar fill, step transitions smooth
  scroll." Adapted here to 4 steps (this page's real process), keeping the *progress-indicator*
  mechanic, not the 3-step count.
- `ui-ux-pro-max/data/ux-guidelines.csv` — Animation category rows 10/13 (Loading States, Transform
  Performance): favor a CSS `transform`/`scaleX` line-draw over anything JS-timer-driven, keeps this
  section cheap.
- Precedent already in this codebase: `components/AppDev/Stats.js` uses a `scaleX: 0 → 1` "rule" line
  animated with `whileInView` — the exact primitive this section needs for a connecting rail, already
  proven, already framer-motion-only.

## Why it fits Katechs
`Process.js` currently renders four cards in a plain grid with a numbered badge — clear, but it doesn't
communicate that step 4 (reporting) feeds back into step 1 (re-analysis) for the next month, which is
the actual selling point of an ongoing retainer versus a one-time audit. A horizontal rail — a single
line connecting four numbered nodes, with the line drawing in on scroll — makes the *sequence* and
*continuity* visible instead of implied by four cards in a row that could be read in any order.

## Fit with our stack
- Bootstrap 5 + global SCSS — the rail is one `::before` pseudo-element line positioned behind the
  `.seo-grid-4` row (desktop), collapsing to a vertical line on mobile (`flex-direction: column` +
  border-inline instead of border-block). No Tailwind, no CSS Modules.
- RTL: the line-draw animation must originate from the **reading-start edge**, i.e. `transform-origin:
  right` under `dir="rtl"` (mirror of the LTR default `left`) — this is the one thing that's easy to
  get backwards and worth a Lab RTL-toggle check before shipping.
- Motion: Lab Tier B — reuse `AppDev/Stats.js`'s `scaleX` rule-line pattern exactly (`whileInView`,
  `once: true`, `EASE` from `Reveal.js`). No GSAP.
- Reuse: `Reveal.js` (`staggerParent`/`staggerItem`, already imported), the rule-line primitive from
  `Stats.js` (copy the pattern, or extract it — implementer's call).

## Structure
Four numbered nodes on a horizontal line (desktop) / vertical line (mobile), each with the existing
title + text, node number in a filled circle over the line rather than as free-floating card badge.

## Data it needs
No new fields — `Process.js`'s existing `steps` array (title, text) is sufficient.

## Risks
- A drawn connecting line is a nice-to-have; on `prefers-reduced-motion` it must render pre-drawn
  (`scaleX: 1` immediately), not stuck at 0 — `Reveal.js`'s reduced-motion handling already covers
  this pattern elsewhere, confirm it's wired the same way here.
- Four unevenly-long Arabic step titles ("تحليل الموقع والمنافسين" vs "التنفيذ والتحسين") sitting under
  evenly-spaced nodes can look lopsided — keep node spacing fixed (25/50/75/100%) and let text wrap
  under each node rather than trying to center-balance text length.
