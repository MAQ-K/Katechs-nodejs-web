# SEO Hero — Frameblox UI kit rounded-card split (badge-with-button, outline+solid pair, soft grey panel)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/25215653-Dark-landing-page-website-hero-section-for-Framer-Frameblox-UI —
  "Dark landing page website hero section for Framer - Frameblox UI" (title says "Dark", the shot itself is a
  light theme). Dribbble shot for a commercial Framer UI kit ("Frameblox"). Layout/visual reference only —
  **no code taken**, and this is not a Framer-only pattern, it is a plain 2-column split any framework can
  build.
- Screenshot: `assets/seo-hero-frameblox-split.jpg`

## Why it fits Katechs — compared directly to the reference image
Second-closest match, and the **single closest match on button styling specifically**:
- **Badge:** close but not identical — the reference's badge is a plain text pill ("We're live!"). This
  candidate's badge is a **compound pill**: stat text ("1000+ customers joined today") + an inline button
  ("Join now →") baked into the same pill shape. Worth filing because it's a legitimate upgrade path — same
  badge footprint, but doubles as a micro-CTA — while still being simple enough to downgrade to the
  reference's plain-text pill if the Manager doesn't want the extra click target.
- **Headline:** matches — bold black sans-serif, left-aligned, this one runs 3 lines instead of 2, which is
  actually a **useful stress-test for Arabic**, since Arabic headlines commonly run longer than the English
  original.
- **Paragraph:** matches — grey, 2-3 lines, directly under the headline.
- **Button pair:** the **closest match of all three candidates** to the reference's exact button treatment —
  white/outline pill button with a trailing arrow icon ("Get it now →") **paired with** a solid-black pill
  button ("Learn more"), same rounded-pill radius, same side-by-side placement. This is effectively the
  reference's button row with the two button roles reversed (reference: outline is secondary, solid-black is
  primary with arrow; here: outline is primary with arrow, solid-black is secondary) — the *shapes and
  pairing* are what to take, the role assignment should follow the reference (arrow icon goes on the primary
  action).
- **Right panel:** like the shadcnblocks candidate, this panel is **not blank** — it holds a product/brand
  image (a robot illustration for the "Frameblox" AI-flavoured pitch). But the **container itself** — a large
  rounded, soft light-grey card with generous internal padding, roughly matching the text column's height —
  is visually the single closest match to the reference's blank grey rectangle of any candidate found. If the
  image were removed, this card *is* the reference's panel almost exactly (same corner radius, same soft
  neutral fill, same proportions).
- Cites `ui-ux-pro-max/data/styles.csv` — clean/minimal SaaS style row (generous whitespace, rounded soft
  cards, high-contrast black-on-white type) — this and the reference both sit in that family. Cites
  `ui-ux-pro-max/data/colors.csv` — neutral/mono palette (black, white, one light-grey fill, no accent color
  needed) matches the reference's palette exactly; this candidate adds no color either.

## Fit with our stack
- No Tailwind/shadcn dependency to translate — this is a Dribbble visual shot, not a code library. Structure
  is a plain flex/grid two-column layout inside one large rounded outer card (the whole hero sits inside a
  soft-grey rounded "wrapper" in this shot, which the reference does **not** do — the reference's page
  background stays plain white and only the right panel gets the grey fill). **Recommend NOT copying the
  full-bleed rounded outer wrapper** — keep the reference's plain white section background, and only apply
  the rounded-soft-grey treatment to the right panel itself, per the reference.
- **RTL:** same mirroring approach as the other two SEO Hero candidates in this batch — text column second in
  DOM so it lands on the visual right in the RTL grid, panel first so it lands on the visual left. The
  compound badge-with-button needs its internal arrow icon flipped for RTL, same convention as the primary
  CTA. Test the 3-line headline specifically against Arabic — this candidate is proof the design tolerates a
  taller headline block without breaking the button row's position, useful if Arabic runs long.
- **Motion:** Lab **Tier A** — badge, headline, paragraph, buttons, stat row can each get their own `Reveal`
  delay step, same stagger pattern already in `Hero.js`. The inline "Join now" micro-CTA inside the badge
  could get a `Magnetic` wrapper like the primary button already has, but that is a nice-to-have, not a
  requirement.
- **Reusable existing pieces:** `Common/Reveal.js`, `Common/Magnetic.js` as above. `.seo-eyebrow` would need
  a variant if the compound badge-with-button direction is picked (current `.seo-eyebrow` is plain-text
  only); if the Manager prefers the reference's plain-text badge instead, no new component is needed at all.

## Structure
- Left/text column: compound badge (stat + inline button) → H1 (2-3 lines) → paragraph (2-3 lines) →
  button row (outline-pill primary with arrow icon + solid-black pill secondary) → optional stat row below
  (this candidate has one; the reference does not — treat as optional, not required)
- Right column: single large rounded soft-grey card, generous padding, roughly text-column height — content
  inside is this candidate's choice (product image), not mandated by the mechanic

## Data it needs
- Badge: either plain text (reference-faithful) or stat + micro-CTA label + href (this candidate's upgrade)
- H1, paragraph — same copy as currently in `Hero.js`, no new copy required
- Button labels/hrefs — reuse existing `احصل على تحليل مجاني` / `شاهد الباقات`, reassign which one carries the
  arrow icon to match "primary = arrow" convention
- Optional stat row (4 numbers + labels) only if adopted — not required by the reference

## Risks
- The compound badge-with-button is a genuine UX change (two click targets in the badge zone instead of one
  visual-only pill) — flag to the Manager as an explicit choice, don't default to it just because this
  candidate has it.
- The candidate's full-bleed rounded outer wrapper card is **not** part of the reference and should be
  explicitly rejected if this candidate is picked — otherwise it silently changes the section's whole visual
  frame (rounded card floating on a page background) instead of the reference's plain flat white section.
- As with the shadcnblocks candidate, the panel needs an explicit content decision (blank vs. filled) before
  build — this screenshot alone doesn't answer that, it only proves the container shape works.
