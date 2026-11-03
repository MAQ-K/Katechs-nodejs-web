# Katechs — Current Design System (extracted for designer review)

Source: `Web/Backup/ar/styles/style.scss` (global theme) + the per-page theme
overrides used on the new content pages (`components/ContentNew/themes/*.js`).
This is a snapshot of what's live today — not a proposal.

## 1. Typography

- **Font:** Almarai (sans-serif), used for both body and headings everywhere.
- **Base body text:** 15px, line-height 1.8, color `#4d4d4d`.
- **Headings (h1–h6):** weight 700, color `#212121`. `h3` defaults to 22px;
  most section titles are set per-component with `clamp()` (see §4).

## 2. Color palette

| Token | Hex | Used for |
|---|---|---|
| Main / accent (cyan) | `#1dd3f8` | links, buttons, active states, icon accents |
| Heading ink | `#212121` | all headings |
| Body text | `#4d4d4d` | paragraph text |
| White | `#ffffff` | text-on-dark, card backgrounds |
| Black | `#000000` | rarely used directly |
| Navy (dark band / "most popular" plan) | `#0a1f44` | dark sections, highlighted pricing cards |
| Surface alt (light gray band) | `#f5f6f8` | alternate section background |
| Hairline border (light) | `rgba(15,23,42,.08)` | card borders |
| Hairline border (dark) | `rgba(255,255,255,.12)` | card borders on dark backgrounds |

Newer pages (SEO/App-Dev family) reuse this same navy/gray/hairline set under
different variable names (`$dm-*`, `$tr-*`, `$seopal-*`) — it's one palette,
duplicated per page rather than shared from one place today (worth fixing
when you revisit the system).

## 3. Shape, elevation, motion

- **Border radius:** 4px default (`$border-radius`); buttons use 10px; cards
  on the newer pages use 16px, small controls 10px.
- **Box shadow (default):** `0 0 20px 3px rgba(0,0,0,.05)` — very soft.
- **Card shadow (newer pages):** `0 18px 40px -18px rgba(15,23,64,.18)`.
- **Transition:** `all .6s ease` is the site-wide default; newer hover/scroll
  work uses shorter, purpose-built transitions (`.25s`–`.5s`) with
  `cubic-bezier(.22,1,.36,1)` for anything that should feel like a glide.

## 4. The primary button (`.default-btn`)

```
padding: 18px 35px; border-radius: 10px; background: #1dd3f8; color: #fff;
font-size: 15px; font-weight: 600;
```
Two diagonal white "shine" bars (`::before`/`::after`) sit off-canvas and
sweep across on hover — this is the one signature micro-interaction reused
on every CTA site-wide. `.active` state inverts to white bg / cyan text.

## 5. Layout rules

- **Breakpoints in practice:** 767px (mobile), 991px (tablet/desktop split),
  1500px (wide desktop — content max-width caps at ~1320–1360px above this).
- **Sticky navbar:** ~109px tall, collapses to ~75px once scrolled
  (`.is-sticky`). A global CSS var tracks total sticky-header height so
  anchors/scroll land in the right place: `--wsv-nav-h` (default 90px;
  pages with a sub-nav override it to 138px mobile / 172px desktop).
- **"One section = one screen" rule (desktop, ≥992px):** every major section
  on the newer pages is built to exactly fill `calc(100vh - var(--wsv-nav-h))`
  — not shrink to fit, not overflow — using flex layout + `clamp()` for all
  spacing/type so it scales smoothly between viewport heights, with extra
  `@media (max-height: …)` trims for short screens (720–800px).

## 6. Components in the current library

- **`.default-btn`** — primary CTA (cyan), `.default-btn-ghost` outline
  variant on dark backgrounds.
- **Cards (`.cn-feat` / `.cn-card` family)** — white panel, hairline border,
  soft shadow, hover lifts/deepens the shadow.
- **Sub-navbar** — sticky pill-tab bar under the main navbar on long pages,
  scroll-spy highlighted active tab (cyan background on current section),
  smooth animated scroll between sections.
- **Hero band** — dark navy gradient over a background photo, H1 + trust
  row, shorter than a full viewport.
- **Horizontal accordion** (SEO page, "gains" section) — numbered vertical
  strips that expand on hover/click to reveal title + text + icon tile.

## 7. Known inconsistency (flag for your design pass)

The navy/gray/hairline palette is currently copy-pasted into 4+ separate
SCSS variable groups (`$dm-*`, `$tr-*`, `$seopal-*`, `$seo-*`) instead of one
shared source, and each new page's theme (`themes/emails.js`, `themes/seo-v2.js`)
re-declares its own color variables rather than pulling from one token file.
If you're unifying the system, this is the first thing to collapse into a
single palette/token source.
