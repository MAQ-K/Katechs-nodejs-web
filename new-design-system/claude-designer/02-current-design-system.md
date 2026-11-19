# 02. The current design system (as it is today)

_Art Director, 2026-11-19. Snapshot of what is live, not a proposal. The update is in
`01-design-direction.md`._

Source of truth: `app/styles/style.scss` (one global stylesheet, about 19,500 lines). Search for the
banners `DESIGN SYSTEM TOKENS` and `DESIGN SYSTEM — COMPONENT LAYER`. The live documentation page is
`/lab/design-system/` (dev only). Reference images: `02-current-design-system-refs/`.

## 0. Three layers, one site

The current system grew in three steps. All three exist in the code at the same time.

| Layer | Prefix | When | Look | Status today |
|---|---|---|---|---|
| **Legacy theme** | `.default-btn`, Sass `$main-color` etc. | Original template | Cyan `#1dd3f8` buttons with a shine sweep, 4px radius, soft drop shadow | Still on older pages. Not the target. |
| **Navy / cyan system** | `.ds-*` + `--ds-*` tokens | Lifted from the Web Services page (`/services`), Aug–Sep 2026 | Navy ink, cyan accent on hover, white cards with an **emboss shadow** (no border), 16px radius | The token set every page can read. Cyan accent and emboss shadows still used. |
| **Monochrome "new" layer** | `.ds-new-*` | **2026-09-01** | One ink (navy), no cyan, white cards with a **1px hairline border**, outline + dark button pair | Was chosen as the live direction on 2026-09-01. **No longer the target** since 2026-11-19 (the user dislikes its borders). |

The content pages you will redesign (`/services/emails-new/`, `/seo-new/*`, `/web-design-new/**`)
use their own `.cn-*` classes plus a per-page theme. The email page's theme copies the **navy / cyan**
look: cyan accents, cyan number tiles, emboss-shadow cards, cyan underline bars under titles. So what
you see on the exported pages is mostly the second layer.

## 1. Tokens (`:root`, `--ds-*`)

### Colour
| Token | Value | Used for |
|---|---|---|
| `--ds-navy` | `#0a1f44` | Primary ink, solid buttons, dark sections, "recommended" plan card |
| `--ds-cyan` | `#1dd3f8` | Accent. Meant to arrive on hover, but used at rest on many pages |
| `--ds-heading` | `#212121` | All headings |
| `--ds-body` | `#4d4d4d` | Paragraph text |
| `--ds-muted` | `#6084a4` | Secondary text, labels |
| `--ds-white` | `#ffffff` | **Page ground** and card fill |
| `--ds-band` | `#f5f6f8` | Alternate section ground (light grey band) |
| `--ds-line` | `rgba(15,23,42,.08)` | Hairline borders (cards, inputs, pills) |

Dark-ground hairline: `rgba(255,255,255,.12)`. Status colours (stat pills only): green `#15803d` on
`rgba(22,163,74,.12)`, red `#b91c1c` on `rgba(220,38,38,.1)`.

### Type
| Token / rule | Value |
|---|---|
| `--ds-font` | `"Almarai", sans-serif` — the only family since 2026-09-02. Weights 300 / 400 / 700 / 800 |
| `--ds-h2` | `clamp(1.7rem, 2.8vw, 2.3rem)`, weight 700, line-height 1.45 |
| `.ds-h3` | 20px, weight 700, line-height 1.5 |
| `--ds-body-size` / `--ds-body-line` | 15px / 1.95 |
| `--ds-eyebrow` | 13px, weight 700, cyan, letter-spacing .5px |
| `.ds-note` | 13px, line-height 1.8, muted |
| Hero headline (`.ds-new-hero-split h2`) | `clamp(2rem, 4.2vw, 3.2rem)`, 700, line-height 1.12 |

### Radii
| Token | Value | Used for |
|---|---|---|
| `--ds-r-card` | 16px | Cards |
| `--ds-r-btn` | 10px | Buttons |
| `--ds-r-well` | 12px | Icon wells, small surfaces |
| `--ds-r-pill` | 100px | Badges, tags, switches |
| (others in use) | 14px stat/media cards, 18px CTA band, 24px media frame | |

### Elevation
```css
--ds-shadow-card:        /* the "emboss": 2 outer layers + 2 inset layers */
  0 7.77px 16px rgba(15,23,42,.06), 0 3px 3px rgba(15,23,42,.08),
  inset 0 -8px 0 rgba(0,0,0,.03), inset 0 4px 0 rgba(255,255,255,.6);
--ds-shadow-card-hover:  /* deeper version on hover, card also lifts 8px */
--ds-shadow-lift:        0 18px 40px -22px rgba(10,31,68,.28), ...  /* navy-tinted */
```
The `.ds-*` layer uses the emboss **instead of** a border. The `.ds-new-*` layer does the opposite:
**border instead of** shadow.

### Rhythm
| Token | Value | Meaning |
|---|---|---|
| `--ds-gap-section` | `clamp(32px, 4vw, 48px)` | Between sections inside one area |
| `--ds-gap-area` | `clamp(64px, 8vw, 140px)` | Between areas (about 3–4× the section gap, on purpose) |

## 2. Components

### Buttons
**Legacy `.default-btn`:** `padding: 18px 35px; border-radius: 10px; background: #1dd3f8; color: #fff;`
plus two white diagonal "shine" bars that sweep across on hover.

**`.ds-btn` (navy / cyan layer):** base shape only, always with a variant.
```html
<a class="ds-btn ds-btn-solid">ابدأ الآن</a>   <!-- navy fill, navy shadow; hover: cyan fill, navy text -->
<a class="ds-btn ds-btn-light">ابدأ الآن</a>   <!-- the same on a dark ground: white fill -->
<a class="ds-link">اعرف المزيد</a>             <!-- secondary: underlined text link -->
```
Padding 15px 34px, radius 10px, 15px / 700. Hover lifts 2px.

**`.ds-new-btn` (monochrome, 2026-09-01):** 48px tall, radius 10px, 14px / 700.
```html
<a class="ds-new-btn ds-new-btn-dark">احجز مكالمة</a>     <!-- navy fill, shadow; hover: navy 8% lighter -->
<a class="ds-new-btn ds-new-btn-outline">اعرف أكثر</a>    <!-- white fill, hairline border, navy text; hover: navy border -->
```
Reference: `02-current-design-system-refs/split-img style.png` (the outline + dark pair).

### Cards
**`.ds-card`:** white, radius 16px, padding 32px 26px, emboss shadow, no border. Usually starts with
an icon well (`.ds-icon`: 50px square, radius 12px, pale cyan fill, cyan icon). `.ds-card-hover` lifts
8px. `.ds-card.is-dark` is the navy "recommended" variant with white text.
```html
<div class="ds-card ds-card-hover">
  <div class="ds-icon"><i class="bx bx-buildings"></i></div>
  <h3 class="ds-h3">موقع تعريفي</h3>
  <p class="ds-p">…</p>
  <ul class="ds-list"><li><i class="bx bx-check"></i> …</li></ul>
  <div class="ds-card-foot"><a class="ds-btn ds-btn-solid ds-btn-block">…</a></div>
</div>
```

**Content-page cards (`.cn-card`, `.cn-feat`):** same emboss recipe, radius 16px. On the email page
each feature card gets a cyan number tile (`01`, `02`) and a cyan bar that grows along the top on hover.

### Stat card — `.ds-new-stat-card` (2026-09-01)
White, radius 14px, **1px `--ds-line` border**. Label + "…" icon on top, big number (26px / 700) with a
green or red `%` pill, a hairline line, then "vs last month" in muted text.
Reference: `02-current-design-system-refs/cards style.png`.

### Media card — `.ds-new-media-card` (2026-09-01)
The image **is** the card: 260px tall, radius 14px, background image, a dark gradient on the lower
60%, white title + short line + a small white pill button at the bottom.
Reference: `02-current-design-system-refs/img style.png`.

### Combo tag — `.ds-new-combo-tag` (2026-09-01)
A white pill with a hairline border, split into two parts by a hairline divider: a strong status word
| a plain descriptor. Each part has an icon; `.is-good` / `.is-bad` colour the icon green / red.
```html
<span class="ds-new-combo-tag">
  <span class="ds-new-combo-tag-part is-strong is-good"><i class="bx bx-check-circle"></i> مفعّل</span>
  <span class="ds-new-combo-tag-part">SSL</span>
</span>
```
Reference: `02-current-design-system-refs/tags style .png`.

### Split hero — `.ds-new-hero-split` (2026-09-01)
Two equal columns, 56px gap. Text side: outlined pill eyebrow (white, hairline border) → very large
black headline → muted paragraph (max 46ch) → outline button + dark button. Media side: a flat grey
placeholder plate (`#f2f3f5`, radius 14px). Media first in the DOM so RTL puts it on the left.
Stacks to one column at 991px.

### Other `.ds-*` parts (navy / cyan layer)
| Class | What it is |
|---|---|
| `.ds-section`, `.ds-band`, `.ds-head` | Section rhythm; grey band ground; centred header (eyebrow + h2 + one line, max 640px) |
| `.ds-split`, `.ds-grid-3`, `.ds-grid-2` | Two columns (56px gap); 3-up and 2-up grids (22px gap) |
| `.ds-list` | Ticked list (check icon in a tinted circle) |
| `.ds-badge` | Cyan pill, white text ("most popular") |
| `.ds-tag` | Small status pill, `rgba(10,31,68,.07)` fill |
| `.ds-frame` > `.ds-frame-media` | White 14px plate with emboss around an image or iframe, radius 24px outer / 16px inner |
| `.ds-accordion` | FAQ: white rows, soft shadow, a `+` in a navy-tinted circle that turns 45° when open |
| `.ds-cta` | Navy band, radius 18px, centred white heading + text + button |
| `.ds-switch` | Segmented pill switch (currency, billing period); white track, navy selected |

### Page-level parts
- **Sticky navbar:** about 109px tall, about 75px once scrolled. `--wsv-nav-h` holds the total sticky
  height: 90px by default; pages with a sub-navigation bar use 138px (phone) / 172px (desktop).
- **Sub-navbar:** sticky pill tabs under the main navbar on long pages; the active tab (scroll-spy) is
  cyan. Clicking scrolls smoothly to the section.
- **Hero band (older pages):** dark navy gradient over a background photo, H1 + a trust row.
- **Horizontal accordion (SEO page):** numbered vertical strips that expand on hover / click.

## 3. Rules that matter to a designer

1. **RTL first.** `dir="rtl"`. Put the visually primary element (usually the media) first in the DOM;
   the RTL grid places it on the left, and on phones the text column is ordered first.
2. **One section = one screen on desktop (≥ 992px):** each section is exactly
   `calc(100vh - var(--wsv-nav-h))` tall. All spacing and type use `clamp()` / `vh`, with extra
   `@media (max-height: …)` trims for 720–800px screens. Never shrink, never overflow.
3. **Almarai only, four weights** (300 / 400 / 700 / 800). No letter-spacing on Arabic.
4. **Monochrome rule (2026-09-01):** one hue; hover is the same ink lighter / darker or a lift, never a
   colour swap. (The navy / cyan layer breaks this with its cyan hover.)
5. **Icons today are Boxicons `bx-*`** (the `bxs-*` solid set is missing from the bundled font). The
   update removes icons, so you will not need them.
6. **Load order:** `styles/rtl.css` loads after `style.css` and contains flat legacy rules that can
   override yours. In the real build every new rule is scoped under a page wrapper class. For your
   self-contained HTML this does not apply, but keep your CSS scoped under one wrapper class (e.g.
   `.kt-page`) so it can be ported.
7. **Content is data.** Copy lives in data files, not in the markup. Treat every text as fixed.
8. **Breakpoints:** 991px (desktop / tablet split), 767px (phone), 575px (small phone). Content width
   caps at about 1320–1360px on wide screens.

## 4. Known problems (why the update matters)
- The navy / grey / hairline palette is copy-pasted into several Sass groups (`$wsv-*`, `$dm-*`,
  `$tr-*`, `$seopal-*`) and re-declared in each content page's theme. One token set is the goal.
- Three button styles and two card philosophies (emboss vs border) live side by side.
- The page ground is pure white everywhere.
