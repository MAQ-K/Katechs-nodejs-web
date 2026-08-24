# SEO Hero — AI Field Intelligence Hub split hero (badge + headline + dual CTA, stacked card panel)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/27545370--AI-Field-Intelligence-Hub-Split-Hero-UI-Layout-Landing —
  "🎙️ AI Field Intelligence Hub — Split Hero UI Layout | Landing", Dribbble shot explicitly tagged as a
  "Split Hero" layout study. Layout/composition reference only — **no code taken**.
- Screenshot: `assets/seo-hero-aifieldhub-split.png`

## Why it fits Katechs — compared directly to the reference image
Third candidate, chosen specifically because its **left-column mechanic is the most literal match** to the
reference's proportions and spacing, even though its right panel is the most different of the three:
- **Badge:** matches — small pill tag, left-aligned above the headline, plain text with a small icon
  ("AI FIELD INTELLIGENCE & EXECUTION PLATFORM"), same weight and placement as the reference's "We're live!"
  pill, just longer copy (a label, not an announcement — closer to the reference's *shape*, less close to its
  *tone*; the reference's badge is a short 2-word micro-announcement).
- **Headline:** matches closely — bold black serif-adjacent/sans headline, 2 lines, same scale relative to
  the page as the reference, generous line-height.
- **Paragraph:** matches — short 2-line grey body copy directly under the headline, slightly shorter than the
  reference's 3-4 lines but same visual role and position.
- **Button pair:** matches the mechanic (two buttons side by side directly under the paragraph) but not the
  exact styling — here it's solid-blue primary + white-outline secondary (both text-only, no icons), whereas
  the reference has icon-decorated buttons (phone icon on the outline button, arrow icon on the solid one).
  Still the closest of the three candidates on **spacing**: identical gap between paragraph and button row,
  and identical button height/padding rhythm to the reference's proportions.
- **Right panel:** the most divergent element — this is not a single blank rectangle but a **stack of
  small cards** (a live-call card, a status icon, and a metrics card) arranged vertically with a soft
  gradient background behind them, filling the same column width and roughly the same height as the
  reference's panel. This proves the same column footprint can hold a **card-stack composition** instead of
  either a blank rectangle or a single screenshot — a third real option for what eventually fills that space,
  distinct from the other two candidates in this batch.
- Cites `ui-ux-pro-max/data/landing.csv` "Trust-First (Above-the-fold Proof)" pattern keywords (trust,
  proof, credibility) — the card-stack panel is a trust-proof mechanic, structurally comparable to (but
  denser than) the current Hero.js's single SERP card. Cites `ui-ux-pro-max/data/ux-guidelines.csv` on
  content density — flags that a 3-card stack is a **higher-density** panel than the reference's intentional
  emptiness; if minimalism is the goal, this is the wrong panel treatment even though the left column is a
  strong match.

## Fit with our stack
- No Tailwind/shadcn dependency — pure visual reference, plain flex/grid layout, cards are simple bordered
  boxes with shadow, buildable as vanilla SCSS components with no special primitives.
- **RTL:** same mirroring approach as the other two entries in this batch — panel first in DOM (lands
  visually left in RTL), text column second (lands visually right). The card stack's internal elements
  (status dots, small labels) are short enough to be RTL-safe without layout risk — this is actually the
  **safest of the three panel treatments for Arabic**, since none of its text is long-form (short labels,
  numbers, short badges only), unlike a dashboard screenshot which would need real Arabic UI mockup content
  or stay untranslated (visual-only, acceptable, but worth flagging).
- **Motion:** Lab **Tier A** for the text column stagger (same as current `Hero.js`). The card stack is a
  good candidate for a **staggered card entrance** (each card reveals with a slight delay/offset) — still
  Tier A, just three `Reveal` instances instead of one panel reveal.
- **Reusable existing pieces:** `Common/Reveal.js`, `Common/Magnetic.js`. The current `.seo-serp-card` /
  `.seo-serp-row` markup is structurally close to what a card-stack panel would need — this direction could
  reuse that card's visual language (rounded card, small icon badge, colored accent) rather than building a
  new card component from scratch, just rearranged as 2-3 stacked cards instead of one SERP-style card.

## Structure
- Left/text column: pill badge → H1 (2 lines) → paragraph (2 lines) → button row (solid primary + outline
  secondary, no icons in source but reference wants icons — add them)
- Right column: 2-3 small stacked cards over a soft gradient/neutral backdrop, roughly matching the text
  column's height, generous gap between cards

## Data it needs
- Badge label (short, reference-faithful length preferred over this candidate's longer label)
- H1, paragraph, two button labels/hrefs — reuse existing `Hero.js` copy
- If the card-stack panel is adopted: 2-3 short card contents (icon + label + 1 stat each) — could reuse the
  existing three proof-row items (`تقارير أداء شهرية`, `عمل حقيقي على الموقع`, `متابعة بعد بدء النتائج`) as
  card content instead of a horizontal pill row, consolidating proof into the panel rather than the text
  column

## Risks
- The card-stack panel is the **least minimal** of the three panel options in this batch — if the Manager's
  intent in referencing this image was specifically "give us breathing room, stop cramming proof into the
  hero," this candidate's panel works against that goal even though its text column is the closest match.
  Recommend treating this one as "text-column reference, panel is a fallback option" rather than a full
  package.
- Card-stack panels need real content (icons, short labels, a believable stat) — more content prep than a
  blank panel or a single reused SERP card, flag to Content & Data Manager if picked.
- Button icons are missing in the source and must be added to match the reference — as filed this is a
  partial match on buttons, same caveat as the other two entries in this batch.
