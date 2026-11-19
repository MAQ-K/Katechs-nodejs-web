# 01. Design direction: the update

_Art Director, 2026-11-19. Read `README.md` first._

This is an **update of the current Katechs design system**, not a new one. Most of the system stays.
We change the surfaces, the separation of content, headings, buttons, spacing and imagery.
The current system is documented in `02-current-design-system.md`.

## 1. Why we are updating

The user's feedback on the current pages:
1. **Pure white is too harsh** on the eyes. The pages sit on `#ffffff`.
2. **Boxes and borders everywhere.** Cards with hairline outlines, outlined buttons, outlined pills,
   lines under titles.
3. **Icons.** Icon wells in cards, icons in tags, check icons in lists.
4. **AI-looking things.** Glows, cyan gradients, particle backgrounds, generic stock visuals.

The user likes the **layouts** of 5 reference sites (see `03-inspirations/`). They do **not** like
the images in them (most are AI or 3D renders).

## 2. What stays

| Area | What stays | Detail |
|---|---|---|
| Ink | The **navy family** | `--ds-navy: #0a1f44` stays the main ink for headings, primary buttons and dark surfaces. |
| Font | **Almarai**, one family | Weights 300 / 400 / 700 / 800 only. No second family unless the user asks. |
| Direction | **RTL rules** | Right-aligned text, reading starts top right, media opposite the text. No letter-spacing on Arabic. In the code, the media element comes first in the DOM so the RTL grid puts it on the left; on phones the text comes first. |
| Radii | The **rounded family** | Soft corners on every surface: `--ds-r-pill: 100px` stays; card and media radii grow a little (see tokens). No sharp corners. |
| Restraint | **Monochrome** | Navy, greys, and the ground. Colour comes from photos. No accent colour (decided 2026-11-19). Hover = the same ink lighter or darker, never a colour swap. |
| Structure | **Section structure** | Same sections, same order, same content. One section = one screen on desktop (`calc(100vh - var(--wsv-nav-h))`). |
| Rhythm | **Two-step rhythm** | A small gap between sections inside an area, a much larger gap between areas (`--ds-gap-area: clamp(64px, 8vw, 140px)` stays). |
| Content | **Data-driven** | All copy comes from data files. You restyle; you do not change words. |
| Dark band | **Navy CTA band** | A full navy section for the closing call to action (`.ds-cta`) stays. One per page at most. |
| Phones | Breakpoints | 991px (stack to one column), 767px, 575px. |

## 3. What changes

### 3.1 Ground: off pure white
- The page ground moves from white `#ffffff` to a **neutral light grey `#F2F2F2`** (decided).
- **Panels are white `#FFFFFF`** on that grey (decided). White is fine as a surface; only the page
  itself must not be white.
- Sections are separated by **space** and, where needed, by **alternating ground tone**
  (`#F2F2F2` ↔ a slightly darker neutral, about `#E9E9E9`; tune by eye). Never by lines.

### 3.2 Borderless panels, separated by tone
- No card has a border. No card has the current emboss shadow (`--ds-shadow-card`).
- When items are siblings (services, plans, steps, testimonials, FAQ rows), they sit in **panels**:
  a rounded rectangle (radius 20px), **white on the grey ground**. Nothing else: no border.
- Text-only sections use **no panel at all**: just type and space.
- Inside a panel, structure comes from **big pale numbers** (`01`, `02` in a faint tone), type size,
  and at most a **short 1px dash** (about 32px wide) above body text. Never a full line.
- Lists: no check icons. Use a small dot, a number, or simply spacing.

### 3.3 Two-tone headings
- A heading is split into two tones: the first part in ink (`--ds-navy`), the rest in a quieter grey
  (`--ds-quiet`). Example: **"بريد باسم شركتك"** in navy, **"بدل حساب جيميل شخصي"** in grey.
  Split at a natural phrase break. Do not change any word to make it split.
- If a heading cannot be split naturally, keep it one tone.
- The same device works on short statements inside panels (first words ink, the rest quiet).

### 3.4 Pill buttons with an arrow
- Primary button: **dark navy pill** (fully round ends), ground-coloured text, no border, no shadow.
- An arrow that means "go" sits at the **end of the label**, which in RTL is the **left** side, and it
  **points left** (`←`) or up-left (`↖`). Mirror any LTR reference. Draw it with a text glyph or CSS,
  not an icon font.
- Secondary action: **text link** with an arrow, underline on hover. No outlined button.
- Hover: the pill lightens a little (`--ds-navy-hover`) and the arrow moves 4px further left.

### 3.5 More space
- Larger headings, larger body text, more empty space inside panels and around section titles.
- But: **every desktop section still fills exactly one screen**. More space means fewer things
  competing on one screen, not taller sections. If a section is too full, use a horizontal row or
  an expand-one-panel pattern, not overflow.

### 3.6 Imagery
- All imagery will be **real edited photos** and **device mockups**, made later by a human designer.
- **Device mockups follow UX Creatives** (`03-inspirations/7234704e161681c7a3eff00ce42d1573.jpg`):
  a real laptop or phone, **three-quarter angle slightly from above**, **tight crop** that runs off
  one or two edges of the frame, soft real reflections, a deep-toned backdrop or the site ground.
  The screen shows a **real Katechs page**, never invented UI.
- Photos: real people and places, natural light, a neutral to slightly cool grade, no stock clichés
  (handshakes, glowing brains, holograms, chess pieces).
- Placement options: a cut-out photo on a panel tone bleeding off one edge (Luxura), or a rounded
  image inside a panel (Ocamba, Whenevr). The image itself is the visual. No frame around it, no
  white plate (`.ds-frame` goes).
- **You use placeholders only**: a rounded block in `--ds-band` with a small label of what goes
  there (e.g. `Mockup: laptop 3/4, صفحة البريد`). Keep the real aspect ratio.

### 3.7 Removed
- Icon wells (`.ds-icon`), icons in tags and lists, the cyan eyebrow, cyan number tiles, cyan
  underline bars under titles, particle and glow backgrounds, the shine-sweep on `.default-btn`,
  outlined buttons and outlined pills.

### 3.8 Motion (light touch)
- Calm reveals on scroll (fade + small rise), plus **one signature interaction** per page where it
  fits: one panel in a row expands to show more (Metafore), or a horizontal row that can be dragged.
- Horizontal rows start at the **right** and move left (RTL).
- Respect `prefers-reduced-motion`.

## 4. Decisions (the user, 2026-11-19)

Seven of the eight open choices are now **decided**. Apply them; don't show alternatives for these.

| # | Question | **Decision** |
|---|---|---|
| 1 | Boxes | **Borderless panels**, only for groups of sibling items (services, plans, steps, testimonials, FAQ rows). Text-only sections have no panel. No border lines anywhere. |
| 2 | White | **White panels are OK**: white `#FFFFFF` cards on the grey page. Only the page ground must not be white. |
| 3 | Page ground | **Neutral light grey `#F2F2F2`.** |
| 4 | Headline weight | **Depends on the heading level.** Hero / display titles: **light** (Almarai 300 or 400), large. Section titles: **bold** (700). Panel titles: bold. Two-tone (3.3) still applies where a heading splits naturally. |
| 5 | Accent colour | **None.** Navy ink + greys only; colour comes from the photos and mockups. Don't use the cyan. |
| 6 | Section title alignment | **Both, by section.** **Centred** title block (small label → title → one line) for section openers whose content runs full-width below (e.g. plans, FAQ, client logos, final call to action). **Right-aligned, asymmetric** (title right, short text or action left) for content sections where the title sits beside the content. Say in your notes which you used where. |
| 7 | Arrows on buttons | **A plain arrow inside the pill**, after the label, pointing left (RTL). No circle. Arrows are fine; they're functional, not icons. |
| 8 | Shadows | **Still open — show both.** Default: **no shadow**, white cards stand out by shade alone. Alternative on one page: a very soft lift **on hover only** for clickable panels, `0 10px 30px rgba(10,31,68,.06)`. The user will pick by eye. |

## 5. DRAFT token table: current → updated

> **DRAFT. Nothing here is final.** Left column = what exists today in `app/styles/style.scss`
> (`:root`, "DESIGN SYSTEM TOKENS"). Right column = the proposed update. Names are kept where the
> role is the same, so it reads as an update. New tokens are marked _new_.

### Colour

| Token | Current value | Updated value | Note |
|---|---|---|---|
| `--ds-ground` _new_ | page is `--ds-white` `#ffffff` | `#F2F2F2` | Page background. **Decided** (#3). |
| `--ds-band` | `#f5f6f8` (alternate section) | about `#E9E9E9` | Alternate-section tone, slightly darker than the ground. Tune by eye. |
| `--ds-white` | `#ffffff` (page, cards) | `#ffffff`, **panels + text on navy** | Panels are white (#2 decided). Never the page ground. |
| `--ds-navy` | `#0a1f44` | `#0a1f44` (**stays**) | Ink, primary button, dark band. |
| `--ds-navy-hover` _new_ | `lighten(#0a1f44, 8%)` in `.ds-new-btn-dark` | `#0F2E68` | Button hover. Same ink, lighter. |
| `--ds-heading` | `#212121` | `#0a1f44` | Headings move into the navy family (first tone of two-tone). |
| `--ds-quiet` _new_ | — | `#7D8693` | Second tone of headings. **Large text only** (3.4:1 on ground). |
| `--ds-body` | `#4d4d4d` | `#3A4454` | Body text, a navy-tinted grey instead of neutral. |
| `--ds-muted` | `#6084a4` | `#5F6878` | Small secondary text, labels, notes (≥ 4.5:1 on both ground tones). |
| `--ds-faint` _new_ | — | `#D9DDE3` | Big decorative numbers, the short dash rule. Never for text you must read. |
| `--ds-line` | `rgba(15,23,42,.08)` (borders) | **retired for outlines** | Only allowed for the short dash rule, if at all. |
| `--ds-cyan` | `#1dd3f8` (accent) | **not used** | No accent in the UI (#5 decided). |
| `--ds-accent` _new_ | — | **none** | No accent (#5 decided). Colour comes from imagery. |

The greys above were drafted against a cool `#F5F6F8` ground. On the decided neutral `#F2F2F2` ground,
check contrast again (body and muted ≥ 4.5:1) and nudge them toward neutral if they look blue.

### Shape and elevation

| Token | Current value | Updated value | Note |
|---|---|---|---|
| `--ds-r-card` | `16px` | `20px` | Panels. |
| `--ds-r-well` | `12px` (icon wells) | `16px`, renamed role: **media** | Icon wells are gone; this becomes the image / placeholder radius. |
| `--ds-r-btn` | `10px` | `100px` | Buttons become pills. |
| `--ds-r-pill` | `100px` | `100px` (**stays**) | Tags, labels, switches. |
| `--ds-shadow-card` | 4-layer emboss | `none` | White on grey does the separating (#8 still open: show both). |
| `--ds-shadow-card-hover` | 4-layer emboss | `none`, or `0 10px 30px rgba(10,31,68,.06)` on hover | The #8 alternative. |
| `--ds-shadow-lift` | navy lift | `none` | |

### Type (Almarai, desktop sizes; scale down with `clamp()`)

| Token | Current value | Updated value | Note |
|---|---|---|---|
| `--ds-display` _new_ | hero h2 `clamp(2rem, 4.2vw, 3.2rem)` | `clamp(2.5rem, 4.4vw, 4rem)` (40–64px), line-height 1.3 | Page hero only. |
| `--ds-h2` | `clamp(1.7rem, 2.8vw, 2.3rem)` | `clamp(2rem, 3.2vw, 2.75rem)` (32–44px), line-height 1.35 | Section titles. |
| `--ds-h3` _new_ | `.ds-h3` 20px | `clamp(1.25rem, 1.6vw, 1.5rem)` (20–24px), line-height 1.45 | Panel titles. |
| `--ds-body-size` | `15px` | `clamp(16px, 1.15vw, 18px)` | Arabic needs larger body text than Latin. |
| `--ds-body-line` | `1.95` | `1.8` | |
| `--ds-eyebrow` | `13px`, 700, cyan | `14px`, 400, `--ds-muted`, in a `--ds-band` pill | Small label above a title. No border, no icon. |
| weights | headings 700, body 400 | display 300/400 (light, large) · section and panel titles 700 · body 400 (#4 decided) | Letter-spacing always 0. |

### Rhythm

| Token | Current value | Updated value | Note |
|---|---|---|---|
| `--ds-gap-section` | `clamp(32px, 4vw, 48px)` | `clamp(48px, 6vw, 96px)` | Space **inside** the one-screen section (above/below content). |
| `--ds-gap-area` | `clamp(64px, 8vw, 140px)` | stays | |
| `--ds-gap-panel` _new_ | grid gap `22px` | `16px`–`24px` | Between panels in a row. |
| `--ds-pad-panel` _new_ | card padding `32px 26px` | `32px`–`40px` | Inside a panel. |

Spacing steps (8px base): `8 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.

## 6. Component changes in one view

| Current component | Update |
|---|---|
| `.ds-btn-solid` / `.ds-new-btn-dark` (navy, 10px radius, shadow) | Navy **pill**, no shadow, arrow after the label (pointing left). |
| `.ds-new-btn-outline` (white, hairline border) | **Removed.** Secondary action = text link + arrow. |
| `.ds-link` | Stays. Hover darkens instead of turning cyan. |
| `.ds-card` (white, emboss shadow) and `.cn-card` / `.cn-feat` on the content pages | **Panel**: white fill on the `#F2F2F2` ground (#2 decided), radius 20px, no border, no icon well; shadow per #8. |
| `.ds-new-stat-card` (white, border, hairline footer) | Panel without border; footer separated by space, not a line. |
| `.ds-new-combo-tag` (outlined two-part pill with icons) | Tone pill (`--ds-band`), two words in two tones (ink / muted), no divider line, no icons. |
| `.ds-new-media-card` (image + dark gradient + text) | Stays as an idea; radius 20px; placeholder instead of the image. |
| `.ds-new-hero-split` (outlined pill eyebrow, black headline, outline + dark buttons) | Tone-pill label, two-tone headline in navy / quiet, one navy pill + one text link, mockup placeholder opposite the text. |
| `.ds-frame` (white plate with emboss around media) | **Removed.** The media sits directly on the ground or a panel. |
| `.ds-icon` (icon well) | **Removed.** Replace with a big pale number or nothing. |
| `.ds-badge` (cyan pill) | Navy pill with ground-coloured text, or a `--ds-band` pill. |
| `.ds-accordion` (white rows with shadow, plus icon in a circle) | Rows on `--ds-band` without shadow, or rows separated by space only; the open/close sign is a simple `+` / `−` text glyph. |
| `.ds-cta` (navy band) | Stays. Pill button in ground colour on navy. |
| `.ds-switch` / tabs (white pill with emboss, cyan selected) | `--ds-band` track, selected option = navy pill with ground-coloured text. |
| Sub-navbar (pill tabs, cyan active) | Same behaviour; active tab = navy pill, others plain text. |
