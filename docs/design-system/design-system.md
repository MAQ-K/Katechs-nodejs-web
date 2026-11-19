# Katechs Design System — quick reference

**Live direction (decided 2026-09-01): monochrome.** One ink colour, no cyan
accent. Full docs + live examples: `http://localhost:3000/lab/design-system/`.
Source: `styles/style.scss`, search `--ds-` and `.ds-new-`.

## Tokens (`--ds-*`, usable everywhere)

```
--ds-navy:   #0a1f44   ink — text, fills, borders-on-hover
--ds-white:  #ffffff
--ds-line:   rgba(15,23,42,.08)   hairline borders (cards, inputs)
--ds-band:   #f5f6f8   alternate section background
--ds-muted:  #6084a4   secondary text
--ds-heading:#212121
--ds-body:   #4d4d4d
--ds-font:   "Almarai", sans-serif

--ds-r-card: 16px   --ds-r-btn: 10px   --ds-r-well: 12px   --ds-r-pill: 100px
--ds-h2: clamp(1.7rem, 2.8vw, 2.3rem)
--ds-body-size: 15px   --ds-body-line: 1.95   --ds-eyebrow: 13px
--ds-gap-section: clamp(32px, 4vw, 48px)   (vertical rhythm between sections)
```

`--ds-cyan` and `--ds-shadow-card*` still exist (old layer) — **don't use them
in new work.** No box-shadow on cards; a 1px `--ds-line` border instead.

## Buttons — `.ds-new-btn`

```html
<a class="ds-new-btn ds-new-btn-dark">Solid</a>     <!-- navy fill, hover = lighten(navy,8%) -->
<a class="ds-new-btn ds-new-btn-outline">Outline</a> <!-- white fill, line border, navy text -->
```

## Cards — no shadow, real border

```css
.card {
  border: 1px solid var(--ds-line);
  border-radius: var(--ds-r-card);
  background: var(--ds-white);
  transition: border-color .3s, transform .3s;
}
.card:hover { border-color: var(--ds-navy); transform: translateY(-4px); }
```

## Stat card — `.ds-new-stat-card`
Number + up/down `%` pill (`.is-up` green / `.is-down` red) + hairline footer.

## Media card — `.ds-new-media-card`
Image is the card; bottom gradient carries a title + `.ds-new-btn` CTA.

## Combo tag — `.ds-new-combo-tag` / `.ds-new-combo-tag-part`
Pill split by a hairline divider: strong word | plain descriptor.
`.is-good` / `.is-bad` colour the icon only, not the whole pill.

## Split hero — `.ds-new-hero-split`
Two columns, media first in DOM (RTL puts it left). Eyebrow pill
(`.ds-new-hero-pill`: white bg, `--ds-line` border, navy text) → h2 → p →
dark button + outline button pair.

## Rules
- One hue. No cyan, no gradients as an accent — navy vs. white vs. grey only.
- Hover = same ink going lighter/darker, or a border/lift — never a colour swap.
- RTL: put the visually-primary element first in the DOM; let the grid mirror it.
