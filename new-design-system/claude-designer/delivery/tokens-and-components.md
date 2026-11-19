# Tokens and components: Katechs design update (delivery)

All four pages share one stylesheet: the `:root` tokens and the `kt-*` components at the top of each HTML file. Scope everything under the `.kt-page` wrapper; add `.has-subnav` on pages with the sticky section nav (`--wsv-nav-h` becomes 172px). The same tokens and components are in the **Katechs** Design System artifact, with live previews.

Legend: **NEW** = new token or component · **REPLACES x** = takes the place of something in `02-current-design-system.md` · **CHANGED** = same name, new value.

## Tokens

### Colour

| Token | Value | Use | Status |
|---|---|---|---|
| `--ds-ground` | `#F2F2F2` | Page background. The page is never white. | NEW (replaces `--ds-white` as page ground) |
| `--ds-band` | `#E9E9E9` | Alternate section, placeholders, input fill, tone pills, switch track. | CHANGED (was #f5f6f8) |
| `--ds-white` | `#FFFFFF` | White panels on the grey page; text on navy. | CHANGED role (no longer the page) |
| `--ds-navy` | `#0A1F44` | Ink, primary pill, featured plan, navy CTA band, top bar. | stays |
| `--ds-navy-hover` | `#0F2E68` | Hover of navy pills. | NEW (was `lighten()` in `.ds-new-btn-dark`) |
| `--ds-heading` | `var(--ds-navy)` | Headings; first tone of two-tone headings. | CHANGED (was #212121) |
| `--ds-quiet` | `#7D8693` | Second tone of headings, **24px+ only** (3.29:1 on ground, 3.68:1 on white). | NEW |
| `--ds-body` | `#3A4454` | Body text (8.8:1 on ground). | CHANGED (was #4d4d4d) |
| `--ds-muted` | `#5F6878` | Small secondary text, labels; second tone under 24px (5.0:1 ground, 4.6:1 band). | CHANGED (was #6084a4) |
| `--ds-faint` | `#C9CDD3` | Big decorative numbers, 32px dash. Never text to read. | NEW (darkened from the draft #D9DDE3) |
| `--ds-on-navy` | `#FFFFFF` | Text on navy. | NEW |
| `--ds-on-navy-quiet` | `#A2AAB8` | Second tone and body text on navy (7:1). | NEW |
| `--ds-cyan` | `—` | Not used. | RETIRED |
| `--ds-accent` | `—` | None (decided). | — |
| `--ds-line` | `—` | No outlines. | RETIRED |

### Shape and elevation

| Token | Value | Use | Status |
|---|---|---|---|
| `--ds-r-card` | `20px` | Panels, plan cards, CTA band. | CHANGED (was 16px) |
| `--ds-r-media` | `16px` | Images, placeholders, FAQ rows, dropdowns. | NEW, REPLACES `--ds-r-well` |
| `--ds-r-btn` | `100px` | Buttons are pills. | CHANGED (was 10px) |
| `--ds-r-pill` | `100px` | Tags, eyebrows, switches, inputs. | stays |
| `--ds-shadow-card` | `none` | Default: panels stand out by shade alone. | CHANGED (was the 4-layer emboss) |
| `--ds-shadow-hover` | `0 10px 30px rgba(10,31,68,.06)` | **Open alternative**: clickable panels, hover only, with a 2px rise. Shown on the SEO page via `.kt-lift`. | NEW, REPLACES `--ds-shadow-card-hover`, `--ds-shadow-lift` |

### Type (Almarai 300 / 400 / 700 / 800 only, letter-spacing always 0)

| Token | Value | Use | Status |
|---|---|---|---|
| `--ds-display` | `clamp(34px, min(4.4vw, 7.2vh), 64px) · 300 · lh 1.3` | Hero titles: light and large. | NEW |
| `--ds-h2` | `clamp(26px, min(3.2vw, 5vh), 44px) · 700 · lh 1.35` | Section titles: bold. | CHANGED |
| `--ds-h3` | `clamp(18px, min(1.6vw, 2.7vh), 24px) · 700 · lh 1.45` | Panel titles. | NEW (was `.ds-h3` 20px) |
| `--ds-lead` | `clamp(17px, min(1.5vw, 2.5vh), 22px) · lh 1.75` | The line under a title. | NEW |
| `--ds-body-size` | `clamp(15px, min(1.15vw, 2.05vh), 18px) · lh 1.8` | Body text. | CHANGED (was 15px / 1.95) |
| `--ds-small` | `clamp(13px, 1.8vh, 14px)` | Panel text, labels, notes. | NEW |
| `eyebrow` | `14px · 400 · `--ds-muted` in a `--ds-band` pill` | Label above a title. | CHANGED (was 13px / 700 / cyan) |

Type sizes use `min(vw, vh)` so a section still fits one screen on short laptops (720–800px tall).

### Rhythm and layout

| Token | Value | Use | Status |
|---|---|---|---|
| `--ds-gap-section` | `clamp(20px, 5.5vh, 96px)` | Space above and below content inside a one-screen section. **Height-based** so short screens fit. | CHANGED (was width-based) |
| `--ds-gap-area` | `clamp(64px, 8vw, 140px)` | Between areas. | stays |
| `--ds-gap-panel` | `clamp(12px, 1.4vw, 24px)` | Between panels in a row. | NEW (was 22px) |
| `--ds-pad-panel` | `clamp(18px, 3.4vh, 40px)` | Inside a panel. | NEW (was 32px 26px) |
| `--kt-bar` | `90px (72px phone)` | Sticky navy top bar. | NEW |
| `--kt-sub` | `82px (64px phone)` | Sticky section nav. | NEW |
| `--wsv-nav-h` | `90px, or 172px with `.has-subnav`` | Section height = `calc(100vh - var(--wsv-nav-h))`. | stays |

Spacing steps (8px base): `8 · 16 · 24 · 32 · 48 · 64 · 96 · 128`. Breakpoints: 991px (one column, sections flow), 575px.

## Components

### Section `.kt-sec`
One section = one screen on desktop; flows on phones. `.kt-sec--band` = grey band. **REPLACES `.ds-section`, `.ds-band`.**

```html
<section class="kt-sec kt-sec--band" id="plans"><div class="kt-wrap">…</div></section>
```

### Two-tone heading `.kt-display` / `.kt-h2` / `.kt-h3` + `.kt-q`
First phrase navy, rest grey, split at a natural break. `.kt-q` only at 24px+; `.kt-q-sm` (muted) below. **NEW.**

```html
<h2 class="kt-h2">خطط تناسب <span class="kt-q">احتياجات شركتك</span></h2>
```

### Section head `.kt-head--center` / `.kt-head--split` / `.kt-head--fold`
Centred for openers (plans, FAQ, logos, CTA); title-right / text-left for content sections. `--fold`: centred that folds to split on screens ≤ 820px tall. **REPLACES `.ds-head`.**

```html
<div class="kt-head kt-head--center"><span class="kt-eyebrow">الخطط</span><h2 class="kt-h2">…</h2><p class="kt-lead">…</p></div>
```

### Eyebrow `.kt-eyebrow`
Small tone-pill label. No border, no icon. **REPLACES cyan eyebrow and outlined pill eyebrow.**

```html
<span class="kt-eyebrow">المميزات</span>
```

### Pill button `.kt-btn`
Navy pill, ground text, `←` after the label (CSS). Hover: lighter navy, arrow moves 4px left. `--light` on navy. **REPLACES `.ds-btn-solid`, `.ds-new-btn-dark`, `.default-btn`.**

```html
<a class="kt-btn" href="#quote">اطلب الخدمة</a>
```

### Text link `.kt-link`
Secondary action with arrow; underline on hover. Inside a sentence (`.kt-note`) it has no arrow. **REPLACES `.ds-new-btn-outline` (removed) and `.ds-link`.**

```html
<a class="kt-link" href="#">تحدث معنا على واتساب</a>
```

### Panel `.kt-panel`
White, radius 20, no border, no shadow; only for sibling items. `.kt-lift` on the row = hover-shadow alternative. **REPLACES `.ds-card`, `.cn-card`, `.cn-feat`, `.ds-new-stat-card` border.**

```html
<div class="kt-panel"><span class="kt-num">01</span><span class="kt-dash"></span><h3 class="kt-h3">…</h3><p>…</p></div>
```

### Big number `.kt-num` + dash `.kt-dash`
Pale decorative number and a 32px rule: structure without icons. **REPLACES `.ds-icon` and cyan number tiles.**

```html
<span class="kt-num" aria-hidden="true">02</span><span class="kt-dash"></span>
```

### Dot list `.kt-list`
Small grey dot instead of a check icon. **REPLACES `.ds-list` ticks.**

```html
<ul class="kt-list"><li>بريد باسم نطاقك</li></ul>
```

### Expand row `.kt-expand`
Signature interaction: the hovered or focused panel grows. **NEW.**

```html
<div class="kt-expand"><div class="kt-panel is-open" tabindex="0">…</div>…</div>
```

### Plan card `.kt-plan`
Name, for-whom, price, 3 lines, `details.kt-more` (opens as a layer over the card, so the section keeps its height) + pill. Featured: `.is-featured.kt-on-navy`. **REPLACES `.cn-pkg`, cyan "best" button, `.email-plan-card` beam.**

```html
<article class="kt-panel kt-plan is-featured kt-on-navy"><span class="kt-badge">الأكثر طلباً</span>…</article>
```

### Badge `.kt-badge`, tag `.kt-tag`
Navy pill; two-tone tone pill. **REPLACES `.ds-badge`, `.ds-new-combo-tag`.**

```html
<span class="kt-tag"><b>مفعّل</b><span>SSL</span></span>
```

### Switch `.kt-switch`
Segmented pill (tabs, currency, section nav). Selected = navy pill. **REPLACES `.ds-switch`, cyan sub-nav.**

```html
<div class="kt-switch" role="tablist" data-tabs><button role="tab" aria-selected="true">بريد كاتكس</button>…</div>
```

### Section nav `.kt-subnav`
Sticky under the bar, 82px; scroll-spy highlights the current section. **REPLACES sub-navbar / `.hp-nav`.**

```html
<nav class="kt-subnav"><div class="kt-wrap"><div class="kt-switch"><a href="#plans">الخطط</a>…</div></div></nav>
```

### FAQ `details.kt-faq`
White rows, text `+` / `−`; `name="faq"` keeps one open. **REPLACES `.ds-accordion`, `.cn-faq`.**

```html
<details class="kt-faq" name="faq"><summary>…</summary><p>…</p></details>
```

### Field `.kt-field` / `.kt-input` / `.kt-check`
Filled pill inputs without borders; 2px navy focus ring; rounded-square checkbox. **NEW.**

```html
<label class="kt-field">الاسم<input class="kt-input" type="text"></label>
```

### Placeholder `.kt-ph`
Rounded `--ds-band` block at the real ratio, labelled with the photo or mockup to make. `data-dur` adds a video length chip. **REPLACES `.ds-frame` (removed).**

```html
<div class="kt-ph" style="aspect-ratio:16/10">Mockup: laptop 3/4، صفحة البريد</div>
```

### Navy CTA `.kt-cta.kt-on-navy`
Closing band, one per page. **REPLACES `.ds-cta`.**

```html
<div class="kt-cta kt-on-navy kt-cta-in">…</div>
```

### Top bar `.kt-bar`
Sticky navy bar, logo, menu, ground pill; CSS three-line toggle on phones. **CHANGED (cyan button → pill).**

```html
<header class="kt-bar">…</header>
```

### Slider `.kt-slider` (homepage)
Cross-fading text slides with pill indicators. **NEW.**

```html
<div class="kt-slider"><div class="kt-slides">…</div><div class="kt-dots">…</div></div>
```

### Drag row `.kt-works-row`, `.kt-testi-row`, `.kt-phones` (homepage)
Horizontal row that starts at the right, scroll-snap + mouse drag. **NEW.**

```html
<div class="kt-testi-row" tabindex="0">…</div>
```

### Service index `.kt-svcs` (SEO page)
Numbered list on the right, the selected service in a panel on the left. **REPLACES the horizontal accordion.**

```html
<div class="kt-svcs"><article class="kt-svc is-active"><h3><button>…</button></h3><div class="kt-svc-body kt-panel">…</div></article>…</div>
```

### WhatsApp `.kt-wa`
Floating mark, bottom right. The only icon. **stays.**

```html
<a class="kt-wa" href="https://wa.me/+201555085828">…</a>
```

## Removed

`.ds-icon` (icon wells), icons in tags and lists, `.ds-frame`, `.ds-new-btn-outline`, the `.default-btn` shine sweep, the cyan eyebrow, cyan number tiles, cyan underline bars, emboss shadows, hairline borders, particle and glow backgrounds, the keyword-highlight bar on the content pages.

## Motion

Fade-and-rise on scroll is pure CSS (`animation-timeline: view()`), so no script is needed and older browsers simply show the content. There is one signature interaction per page: the expanding features row (emails-new), the service index (SEO), the plan tabs (emails), and the drag rows (homepage). `prefers-reduced-motion` turns all motion off.
