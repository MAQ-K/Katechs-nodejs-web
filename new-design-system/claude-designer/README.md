# Katechs: design update brief for the Claude designer

_Prepared by the Art Director, 2026-11-19. Start here._

## 1. Who Katechs is

Katechs (katechs.com) is an Arabic web agency. It sells:
- **Websites:** custom websites, WordPress sites, online stores, Salla stores.
- **Business email** on the company's own domain.
- **SEO** (search engine optimisation) packages.
- **Hosting.**

The customers are **Arabic-speaking businesses**: small and medium companies, shops and service
providers that need a professional web presence. Many are not technical. The site must make them feel
three things: _this company is serious_, _I understand what I am buying_, and _it is easy to start_.

Technical facts you need:
- The whole site is in **Arabic** and reads **right-to-left (RTL)**. `<html dir="rtl" lang="ar">`.
- Built with **Next.js** (React). Styling is global SCSS. You do not need to write Next.js; plain HTML/CSS is fine.
- One font family everywhere: **Almarai** (Google Fonts). It ships only weights **300, 400, 700, 800**.
  A rule asking for 500 renders as 400; 600 renders as 700. Use only the four real weights.

## 2. What we are asking

Apply the **design update** to the real pages in `pages/` and show us how they would look.

**This is an update, not a rebrand.** The current design system stays as the base: the navy ink, the
Almarai font, the RTL rules, the rounded-corner family, the section structure. We are changing the
ground colour, how content is separated, headings, buttons, spacing and imagery. File
`01-design-direction.md` lists exactly **what stays** and **what changes**.

The user **decided the open choices on 2026-11-19** (section 4 of `01-design-direction.md`). Apply
them as written. Only one is still open: **shadows**. Use no shadow by default, and show the soft
hover-lift alternative on one page so the user can pick by eye.

## 3. What is in this folder (read in this order)

| # | File / folder | What it is |
|---|---|---|
| 1 | `README.md` | This file. Context, rules, what to deliver. |
| 2 | `01-design-direction.md` | **The update.** What stays, what changes, draft tokens, the open choices. |
| 3 | `02-current-design-system.md` | The current system as it is today: tokens, type, components, rules. |
| 4 | `02-current-design-system-refs/` | 4 reference images the current components were built from. |
| 5 | `03-inspirations/` | The user's 5 inspiration images, a one-line Take/Avoid per image (`README.md`), and the full analysis (`inspiration-analysis.md`). |
| 6 | `pages/` | The real pages to redesign (exported by the Manager). See section 7. |

## 4. Hard rules

1. **Keep all Arabic copy word for word.** Do not rewrite, shorten, translate or "improve" any text.
   Headings, paragraphs, prices, button labels: all stay exactly as in the exported page. If a text
   does not fit your layout, change the layout, not the text. If you think a text should change,
   write it in your note; do not change it in the file.
2. **Right-to-left.** Text is right-aligned by default. Reading starts at the top right. A visual
   usually sits on the opposite side (left) of the Arabic text. Arrows that mean "go / next" point
   **left** (or up-left), not right. Never add letter-spacing to Arabic text. Do not use
   italic on Arabic.
3. **One section = one screen (desktop, 992px and wider).** Every major section fills exactly the
   screen height below the sticky bars: `height: calc(100vh - var(--wsv-nav-h))`. `--wsv-nav-h` is
   90px on most pages and 172px on desktop for pages with a sub-navigation bar. **Never shrink** a
   section to its content (no half-empty screens with the next section peeking in) and **never
   overflow** it (no section taller than the screen). Scale type and spacing with `clamp()` and `vh`
   so it holds from about 720px to 1080px screen height. On phones (below 992px) sections flow
   naturally.
4. **No icons.** No icon fonts, no pictograms, no emoji, no decorative symbols. Structure comes from
   type, numbers, tone and space. (Functional arrows on buttons are an open question, see
   `01-design-direction.md`.)
5. **No outlined or bordered boxes.** No 1px border lines around cards, inputs groups, pills or
   sections. If items need grouping, use a borderless panel separated by **tone** (see the direction).
6. **Nothing that looks AI-generated.** No glowing gradients, glass blobs, 3D renders, abstract
   ribbons, grid-texture backgrounds, "futuristic" UI.
7. **No AI images, ever.** All imagery will be **real edited photos and device mockups** made by a
   human designer later. Use **neutral placeholders**: a plain rounded rectangle in a panel tone,
   with a small label inside saying what goes there, for example `صورة: فريق العمل` or
   `Mockup: laptop, 3/4 angle`. Keep the placeholder at the real aspect ratio you intend.
8. **No pure white page ground.** The page background is neutral light grey `#F2F2F2`. White is
   fine for panels (cards) on top of it.
9. **No accent colour.** Navy ink and greys only; colour comes from the photos and mockups. Don't use
   the old cyan and don't invent a new colour.

## 5. What to deliver back

Put everything in a new folder `new-design-system/claude-designer/delivery/`.

1. **One HTML file per page**, named after the source page (e.g. `emails-new.html`).
   - **Self-contained:** all CSS inside the file in a `<style>` tag. Load Almarai from Google Fonts
     with a `<link>`. No other external files, no JavaScript frameworks. A little vanilla JS is fine
     for interactions (tabs, accordions).
   - `<html dir="rtl" lang="ar">`.
   - Put your tokens at the top as CSS custom properties in `:root`, using the names from
     `01-design-direction.md` where they exist.
   - It must look right at **1440×900** and at **390×844** (phone).
2. **A short note per page** (`<page>.notes.md`, 5–15 lines): what changed and why, section by
   section. Say which sections got a centred title and which a right-aligned one, and where you
   showed the shadow alternative.
3. **Keep the section order** of the original page. Change it only for a strong reason, and say why
   in the note.
4. **One `tokens-and-components.md`** for the whole delivery: every new token (name, value, what it
   is for) and every new component (name, what it does, a short markup example). Mark which of them
   replace an existing one from `02-current-design-system.md`.

## 6. How we will review

The user opens your HTML files in a browser at desktop and phone size, next to the current page. They
judge: Is it softer on the eyes? Are the boxes and borders gone? Does it still feel like Katechs? Is
the Arabic copy untouched? Does each section fill exactly one screen?

## 7. Pages

Each page folder holds:
- `index.html` — a **static snapshot** of the live page: the real rendered HTML with all its CSS inlined
  and its images in `assets/`. It opens straight from disk in any browser. Scripts are removed, so
  sliders, tabs and animations don't move; everything is shown in its resting state.
- `desktop.png` — full-page screenshot at 1440 px wide.
- `mobile.png` — full-page screenshot at 390 px wide.

Use the snapshot for the **content and section order** (copy text from it word for word) and the
screenshots for **how it looks today**. Don't edit the snapshots; deliver new files (section 5).

**The four pages to redesign**

| # | Folder | Live URL | What it is | Sections, in order |
|---|---|---|---|---|
| 1 | `pages/01-homepage/` | `/hp-new/` | The **new homepage**, rebuilt section by section (replaces the live `/` once approved). Several services sections came from an earlier Claude Design handoff. | Hero slider (with its own top nav) → domain search → floating section nav → web services (brief, projects strip, plans) → app development → email services → online stores → marketing / SEO → why choose us |
| 2 | `pages/02-email-services-old/` | `/services/emails/` | The **current email services page** (older content) | Hero → plans → features → FAQ |
| 3 | `pages/03-email-services-new/` | `/services/emails-new/` | The **new email services page**, written by the content team (copy is final) | Hero → why an email with your company name → features → plans → help me choose a plan → steps → client logos → FAQ → final call to action |
| 4 | `pages/04-seo-new-packages-v1/` | `/seo-new/packages-v1/` | The **new SEO page**, written by the content team (copy is final) | What SEO achieves → SEO services → packages → steps → why Katechs → how we measure results → GEO (visibility in AI answers) → FAQ → final call to action |

**Extras, for reference only (don't redesign unless asked)**

| Folder | Live URL | Why it's here |
|---|---|---|
| `pages/01b-homepage-live-old/` | `/` | The homepage that's live today. It will be replaced by page 1; here only for comparison. |
| `pages/04b-seo-new-packages-v2/` | `/seo-new/packages-v2/` | Version 2 of the SEO page: same content plus a "projects with results" section. The user hasn't picked V1 or V2 yet. |
| `02-current-design-system-lab/` | `/lab/design-system/` | The current design system's live documentation page, as a snapshot + screenshots. Pairs with `02-current-design-system.md`. |

**Suggested order:** start with **page 3 (new email services)**. It's the shortest of the new pages
and has the most kinds of sections (plans, steps, logos, FAQ), so it tests the update quickly. Then
page 4 (SEO), page 2 (old email, to compare against page 3), and the homepage last.

**Notes per page**
- **Homepage (`/hp-new/`):** long, and the hero slider has a background video (`assets/default-*.mp4`,
  17 MB). Two illustration slots in the online-stores section are empty on purpose, and the email
  panel images are placeholders — design those slots with neutral placeholders. The homepage folders
  are large (~40–50 MB) because of the project screenshots and videos.
- **Email old vs new:** same service, different content. Redesign both so the user can compare the
  update on old content and new content side by side.
- **Plans / prices:** keep every price, plan name and feature line exactly as written, even where
  something looks like a placeholder.
- The site's floating WhatsApp button and the sticky top bar appear on every page. Keep them; restyle
  them with the update.
