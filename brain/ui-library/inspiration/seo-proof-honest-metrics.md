# SEO Results Strip — "verified metric" cards, not a shimmering blank

**Type:** proof / stats
**For page:** `pages/services/seo/` (`components/Seo/Results.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/charts.csv` row 8 — **Performance vs Target**: "Always show numerical value + %
  of target as text beside chart. Never rely on color position alone" — the print here is: a stat with
  no number is not a stat, it's an empty state, and empty states need explicit guidance
  (`ux-guidelines.csv` row 79 — Feedback/Empty States: "Show helpful message and action," "Blank empty
  screens" is the anti-pattern to avoid).
- `ui-ux-pro-max/data/landing.csv` row 2 — **Hero + Testimonials + CTA**: "Social proof before CTA...
  Include photo + name + role" — the general principle that proof sections earn trust through
  *specificity*, which a shimmering placeholder actively withholds.
- Existing precedent already in this codebase: `components/AppDev/Stats.js` — a working
  scroll-triggered count-up built on `framer-motion`'s `animate()`, no GSAP, with a `useReducedMotion`
  fallback that jumps straight to the final value. This is the mechanic to reuse once real numbers
  land.
- Client-supplied reference: `assets/seo-results-client-ref.png` (`seo page inspiration/numbers
  section 2nd.png`).

## Why it fits Katechs
`Results.js` already does the right thing by refusing to invent a number — the `seo-flag` calling out
"مطلوب من العميل: أرقام حقيقية" is honest and should stay. But the *visual* state (four shimmering
bars) reads as a loading spinner, not a "we're waiting on you" message — a first-time visitor sees a
site that looks broken, not a site that's asking a question. The fix: replace the shimmer with an
explicit **"سيتم عرض الأرقام هنا"** label styled as a real empty-state card (icon + one line), and once
real numbers exist, swap in `AppDev/Stats.js`'s exact count-up mechanic — it already exists, it's
already framer-motion-only, and it already respects reduced motion.

## Fit with our stack
- Bootstrap 5 + global SCSS — the empty-state card is a `.seo-stat-empty` class variant of the
  existing `.seo-stat` card, appended under the current `seo-` banner.
- RTL: no directional concerns — this is centered content and numerals. Arabic numeral formatting
  (٪ / % and Eastern Arabic digits vs Western) should be confirmed with Content — most Arabic tech
  sites in this market use Western digits (1,234) not Eastern (١٬٢٣٤); check what the rest of the site
  already does before deciding here (consistency > either being "more correct").
- Motion: Lab Tier B — `AppDev/Stats.js`'s `animate()` + `useInView` pattern, reused verbatim.
- Reuse: `components/AppDev/Stats.js` (the counter logic), `components/Common/Reveal.js` (stagger).
  **This section should not invent a second count-up implementation** — extract `Stats.js`'s `Counter`
  into `components/Common/` if it's going to be used on a second page, flagging that as a T-011 note
  rather than doing it here.

## Structure
Same 4-up row. Each cell: icon (new) → value (count-up once real, empty-state icon+label until then)
→ label. No structural change, only the two states (empty vs populated) get designed on purpose
instead of the shimmer standing in for both.

## Data it needs
`data/seo/data.js` → `results.stats`: array of `{ icon, to: number, suffix, label }`, defaulting to
`null`/empty until Content has real client figures — **do not fill with estimates**, this section
exists specifically to hold that line.

## Risks
- The temptation once a build deadline looms is to fill this with a plausible-looking number "just to
  ship" — that is explicitly the thing `structure.md` and the current build's own comment warn against.
  Flag this again in the Implementer's task if the number still isn't available at build time.
