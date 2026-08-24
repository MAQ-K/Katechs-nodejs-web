# SEO Hero — shadcnblocks "Hero 1" split panel (badge + headline + dual CTA, framed right panel)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://www.shadcnblocks.com/blocks/hero → block **"Hero 1 — Split hero with image on the right"**
  (https://www.shadcnblocks.com/block/hero1), shown live on shadcnblocks.com's own homepage. Layout/
  composition reference only — this is a shadcn/ui + Tailwind block gallery; **no code taken**, only the
  visual arrangement (badge → headline → paragraph → dual button row, left; framed panel, right).
- Screenshot: `assets/seo-hero-shadcnblocks-split.png` (their homepage hero, which uses the Hero 1 pattern to
  sell the Hero 1 block — badge "Changelog v1.1", headline "Blocks Built With Shadcn & Tailwind", paragraph,
  solid-black + ghost-text button pair, framed dashboard screenshot on the right)

## Why it fits Katechs — compared directly to the reference image
This is the **closest structural match** of the three candidates to
`public/images/seo page inspiration/1st section.png`:
- **Badge placement:** matches exactly — small pill/tag sits above the headline, left-aligned with the text
  column, not centered. (Reference: "We're live!" pill. Candidate: "Changelog v1.1" pill.)
- **Headline scale and weight:** matches — large, bold, black, 2-line sans-serif headline, no gradient or
  color accent, exactly like the reference's "This is the start of something!"
- **Paragraph:** matches — 2-3 line grey body copy directly under the headline, no bullet list, same as the
  reference's grey paragraph block.
- **Dual button row:** matches the *pairing mechanic* (two buttons side by side, one visually heavier) but
  **not the exact styling** — the reference pairs a white/outline button (with icon) + a solid black button
  (with arrow icon); this candidate pairs a solid black button + a plain ghost-text link, not a bordered
  outline pill. The mechanic (primary + secondary CTA side by side under the paragraph) is identical; the
  secondary button's visual treatment needs adjusting to match the reference's outline-pill look.
- **Right panel:** the one place this candidate diverges most — the reference's panel is **deliberately
  blank** (a placeholder rectangle, no content drawn), while this candidate's panel is a **framed dashboard
  screenshot with a browser-style top bar**. Structurally the panel occupies the identical footprint (a large
  soft-edged rectangle filling the second grid column, roughly matching the text column's height), so the
  *container mechanic* transfers directly — what goes inside it does not.
- Cites `ui-ux-pro-max/data/products.csv` — "SaaS Landing Page" convention: badge + headline + subhead +
  primary/secondary CTA pair above the fold, visual proof to the side. Cites
  `ui-ux-pro-max/data/ux-guidelines.csv` general guidance on a single clear visual hierarchy per section (one
  headline, one CTA pair, no competing focal points) — this layout keeps that discipline better than the
  currently-built Hero.js, which adds a third focal point (a floating proof-pill row) between the paragraph
  and the buttons.

## Fit with our stack
- **Tailwind/shadcn dependency:** the source block is shadcn/ui + Tailwind. Translation to vanilla SCSS is
  direct because the layout is a plain 2-column CSS grid/flex with no shadcn-specific primitives beyond
  `Button` and `Badge` (both trivial `<span>`/`<a>` + class in our stack) — **no shadcn component is needed**,
  only the grid shape and spacing rhythm. Reuse the existing `.seo-btn` / `.seo-btn-ghost` classes already in
  `styles/style.scss`, restyle the ghost button to the reference's actual outline-pill look (border, rounded,
  icon) rather than borrowing this candidate's plain-link secondary button.
- **RTL:** mirror the whole split — in `Hero.js`, the text column already renders **second** in DOM order
  (`.seo-split` → media panel div first, text div second), which is what currently puts the media panel on
  the right and text on the left in the RTL grid. To match the reference's text-first reading order in
  Arabic, **keep that DOM order** (media/blank-panel first, text second) so Arabic readers hit the headline
  before the empty panel, same as the reference's LTR readers hit the headline before the panel. Button icons
  must flip side (already the site's convention via `bx-left-arrow-alt` in the existing `Hero.js`). Long
  Arabic headlines risk wrapping to 3 lines instead of 2 — test the actual Arabic H1 copy at this column width
  before locking the two-line badge/headline vertical rhythm.
- **Motion:** Lab **Tier A** (`Reveal` stagger) — already wired up in the current `Hero.js`, directly reusable
  for badge → headline → paragraph → buttons in sequence. No new primitive needed.
- **Reusable existing pieces:** `Common/Reveal.js` (stagger), `Common/Magnetic.js` (primary CTA hover) — both
  already used in `components/Seo/Hero.js` and carry straight over. The `.seo-eyebrow`, `.seo-h1`, `.seo-p`
  classes already exist and match this candidate's text-block sizing intent; only `.seo-actions` /
  `.seo-btn-ghost` need restyling to the outline-pill look, and a **new** `.seo-media-panel` blank-state
  variant needs adding (currently that class always renders the SERP card — this candidate proves the panel
  can legitimately ship blank/soft-grey with no illustrative content).

## Structure
- Two-column grid, generous gutters, generous vertical whitespace above/below
- Left/text column: pill badge → H1 (2 lines) → paragraph (3-4 lines) → button row (outline-pill secondary +
  solid-black primary, arrow icon on primary)
- Right column: single large rounded soft-grey rectangle, no content — same footprint/height as the text
  column, not full-bleed

## Data it needs
- Badge label text (short, e.g. "متاح الآن" / "نطلق الخدمة" — something announcement-shaped, not a stat)
- H1 (2-line budget in Arabic — needs length testing), paragraph (3-4 lines)
- Two button labels + hrefs (primary solid, secondary outline) — content already exists in current
  `Hero.js` (`احصل على تحليل مجاني` / `شاهد الباقات`), no new copy required if this direction is picked
- No image/illustration asset required for the panel itself if shipped blank — if the Manager wants it filled
  later, that's a separate content decision, not blocking this layout

## Risks
- **This candidate's own panel is not blank** — it's a real dashboard screenshot. If picked, the Manager
  must decide explicitly what goes in the panel (truly blank soft rectangle, matching the reference exactly;
  or the current SERP card reused as-is; or something new) — don't let "the reference had it blank" get
  silently reinterpreted as "leave it empty in production," a shipped page needs *something* there even if
  it's a subtle brand pattern/texture rather than a literal illustration.
- Removing the current proof-pill row (`.seo-proof-row`) from between paragraph and buttons is a real content
  decision, not just a visual one — it currently carries three trust claims. Flag to Content/Manager before
  dropping it, or fold it into the panel instead of the button row.
- Secondary button needs restyling from ghost-text to outline-pill to actually match the reference — as
  filed, this candidate's own button pair is a partial match, not a straight copy.
