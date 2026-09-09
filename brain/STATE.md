# STATE — the NOW board
> Updated on every start, finish, and surprise. Push immediately after editing.

**As of:** 2026-08-24 — Manager

## Active right now
| Agent | Device | Branch | Doing | Zone | Since |
|-------|--------|--------|-------|------|-------|
| Manager | PC1 | main | Brain, agents, Lab, parallel workflow — done | `brain/`, `.claude/`, `pages/lab/` | 2026-08-24 |

## Broadcast — read before you start
- **2026-09-09 · Manager — the web services side-rail experiment is fully REVERTED; a headless
  browser exists here after all.**
  **(1)** `components/HpNew/SectionNav.js` briefly took a `mode="inline"|"bar"|"rail"` prop and
  morphed into a vertical sidebar over `#web-services`. **The user rejected it outright** ("cancel
  sidesubnavbar make it like it was") and it is fully gone — back to `floating={bool}`, one shape,
  byte-for-byte the original component. `pages/hp-new.js` and `WebServicesScreen.js` are reverted
  to match (no `navMode`, no rail gutter). Do not reintroduce a rail without being asked by name.
  **(2)** `#web-services` is a light `#f7f7f7` band with the three blocks stacked in their natural
  order (talk-left/image-right brief, projects, plans) — two other layouts (one-screen grid, then
  the rail gutter) were tried and rejected the same day. Full history in `brain/logs/2026-09-09.md`.
  **(3) There IS a headless browser on this machine** — Chrome + Node 22's global `WebSocket` drive
  CDP with a zero-dependency script (`--headless=new --remote-debugging-port=9222`, then
  `fetch('/json/list')` and `Runtime.evaluate` / `Page.captureScreenshot`). Several older logs say
  visual verification was impossible; it isn't.
- **2026-09-07 · Content & Data Manager — team briefs written for every remaining service page**
  (`data/<page>/brief.md` for app-development, digital-marketing, emails, seo, vps-hosting,
  wordprees-hosting, security, ssl-certificate, website-design, and `data/services/brief.md` for the Web
  Services hub's 4 built areas). Read the relevant one before touching any of these pages next. **Two
  urgent flags for the Implementer:** (1) 🔴 every order button on `vps-hosting` and `wordprees-hosting`
  links to `clients.knoztech.com` — a different company's domain, not Katechs' own client area — and the
  shared `components/Services/hostingFeature.js` body copy says "كنوز تك" instead of Katechs; (2) the
  `security` page (`pages/services/security/`) is third-party vendor marketing copy (Veritas Backup Exec,
  Sophos XG/XDR) with zero pricing of any kind — needs a business decision before any design/content work,
  not a content edit. Full detail in `brain/logs/2026-09-07.md`.
- **2026-09-03 · Sub-pages (T-015) — two rules for anyone restyling a legacy page.**
  **1. `styles/rtl.css` is imported AFTER `styles/style.css` in `_app.js`**, and it carries FLAT rules for
  classes the legacy pages use (`.choose-card`, `.about-content ul li`, `.single-business`, `.single-news`…).
  A flat selector appended to the end of `style.scss` **loses that tie and silently does nothing.** Scope every
  new rule under a page wrapper — `.about-page .choose-card` (0,2,0) beats rtl.css's (0,1,0) whatever the load
  order. `pages/about-us.js` is the precedent. Bonus: it also lets rtl.css's hand-flipped `padding-right`/`right`
  values be replaced with logical properties.
  **2. That same wrapper is how a `components/Common/**` section gets restyled on one page without touching the
  others** — `MakeYourBusiness` and `Testimonials` were restyled on /about-us with **zero edits to
  `components/Common/`**, which keeps the frozen homepage (T-018) safe.
  `/about-us` is migrated but **has not been seen rendering** — :3000 was stuck when the pass finished.
  Still TODO: `news/*`, `useful-articles`, `case-studies-details`. See `brain/logs/2026-09-03.md`.
- **2026-09-03 · styled-jsx: never put a backtick in a CSS comment.** A `` `order` `` inside a `/* … */` comment
  in `components/HpNew/DomainSearch.js` terminated the template literal and took the whole dev server down —
  SWC reports it as `Expected '}', got 'order'`, which points at the wrong line. Fixed by the homepage session.
- **2026-09-03 · Manager — the homepage rebuild has started, on its own route. `pages/index.js` is
  frozen.** New homepage is being built section by section (sketch → design → finish, user confirms
  each) at **`pages/hp-new.js` → `http://localhost:3000/hp-new`**, with sections in
  **`components/HpNew/`**. Working folder, vision and the section tracker:
  `Web/Backup/ar/Homepage/` (`README.md`, `VISION.md`, `structure-drafts/`, `inspirations/`).
  **Why a parallel route:** eight of the live homepage's twelve sections come from
  `components/Common/**` — restyling in place would restyle the whole site at once.
  **`components/HomeOne/` is orphaned, nothing imports it** — the old T-018 zone was wrong, now fixed.
  `components/HpNew/` follows the `components/Sections/` isolation contract: styled-jsx only,
  **zero writes to `styles/style.scss`**, so the SCSS lock zone stays free for T-023. Anyone touching
  the homepage next: read `Web/Backup/ar/Homepage/README.md` and `brain/logs/2026-09-03.md` first.
- **2026-08-30 · 10 more Motion Lab specimens — `components/Motion/`, ambient + CSS-3D.**
  Pure CSS, no rAF, no WebGL, reduced-motion respected: `FloatingBlobs`, `GradientAurora`,
  `FloatingIcons`, `WaveDivider`, `OrbitRing` (always-moving ambient loops) and `Cube3D`,
  `FlipCard3D`, `CardStack3D`, `OrbitSphere3D`, `ParallaxLayers3D` (CSS-3D). Demoed at
  `/lab/motion/`. See `brain/components/REGISTRY.md` and `brain/animation/LAB.md` → Tier C.
- **2026-08-30 · New dependency: `animejs` ^4.5.0 installed (user's call).** New Tier D in
  `brain/animation/LAB.md`, 9 new specimens under `components/AnimeJs/` demoed at
  `/lab/motion/` (tween, easings, stagger, timeline, SVG line-draw, motion path, draggable,
  scroll-scrub, text-split). Tier A (`Reveal.js`/`Magnetic.js`) is still the default for a plain
  reveal/hover — reach for anime.js only when its API is genuinely the better tool. See
  `brain/components/REGISTRY.md` for the index.
- **2026-08-29 · New zone: `components/Sections/` — standalone, portable one-file sections.**
  Different contract from the rest of `components/`: zero dependency on `style.scss`, icon
  fonts, or `data/**`, fully self-contained via `styled-jsx`, one file per section, built from a
  user-supplied reference image on request. **Read `components/Sections/README.md` first**
  before adding or touching anything here. First one landed: `Sections/HeroBuildSmarter.js`.
  Preview all of them at `http://localhost:3000/lab/sections/` (new "Sections" tab in the
  `/lab/` nav — `pages/lab/sections.js`). See `brain/components/REGISTRY.md` for the index.
- **2026-08-28 · UI Implementer — Services page hero (`.wsv-hero*`) restyled to match the approved
  reference (T-014e).** Glassy badge with a mirrored RTL chevron (`bx-chevron-left`), headline enlarged to
  `clamp(36px,6vw,72px)`, primary CTA now a dominant solid-white rounded-rect, secondary CTA now an
  underlined text link, new `.wsv-hero-arc-glow` blurred radial shadow layered above the existing flat
  `.wsv-hero-sweep` seam into `$wsv-band`. Background video/overlay and Arabic copy untouched. Full diff in
  `brain/logs/2026-08-28.md`. Anyone touching `components/Services/Hero.js` or `.wsv-hero*` next should
  read that log first.
- **2026-08-25 · UI Implementer — Training page's `.tr-*` visual system reskinned to match AppDev.**
  Same pass as SEO/DM: `.tr-*` block (styles/style.scss ~L12160-13097) rebuilt with its own
  `$tr-*` token set (was riding on `$seo-*`), cards dropped hover-lift/border-darken for
  AppDev's shadow-only-on-hover feature-card recipe, `.tr-card-dark` (Instructors) went from a
  literal dark card to white+emboss on the navy section (same "no black cards" fix SEO/DM got),
  buttons went from full-pill/black to 10px-radius/cyan. Two `bxs-*` solid-icon bugs fixed along
  the way (Outcomes.js, Certificate.js — rendered as empty boxes). **All three G1 service pages
  now share one visual system — T-011 is REVIEW, T-017 (delete `ux-prototype.css`) can run once
  the user has looked.** Full diff in `brain/logs/2026-08-25.md`. Anyone touching
  `components/Training/**` or `.tr-*` next should read that log first.
- **2026-08-25 · UI Implementer — SEO page's `.seo-*` visual system reskinned to match AppDev.**
  Cards/media panels/faq accordion dropped their `1px solid $seo-line` borders for AppDev's
  layered emboss box-shadow (radius 18px → 16px), `.seo-btn`/`.seo-btn-ghost` went from a full
  pill (100px) to AppDev's 10px rounded-rect, headings 800 → 700. Full diff in
  `brain/logs/2026-08-25.md`. Section list/copy/data untouched — visual only. Anyone touching
  `components/Seo/**` or the `.seo-*` SCSS block next should read that log first so it isn't
  reverted by accident.
- **2026-08-24 · Manager — 🔴 THE PRODUCTION BUILD IS BROKEN.** `npm run build` fails on
  `pages/offers.js`: a raw Google Ads `<script>` block pasted into JSX after a correct `<Script>` block.
  Committed 2026-08-19 (`08a0d78`) — **the site has not been buildable since**. Task **T-022**. Nothing can
  ship until it's fixed. Not touched yet: it's live conversion tracking, deleting the wrong copy breaks
  ad attribution.
- **2026-08-24 · Manager — the Lab is live.** `npm run dev` → **http://localhost:3000/lab/**
  (motion · components · ui-library). Real components, real motion, viewport + RTL + freeze toggles.
  Dev only — 404s in production. **Look here before rebuilding anything.**
- **2026-08-24 · Manager — the design database is wired in.** `ui-ux-pro-max` + `design-taste-frontend` are
  now **required sources** for `/ag-anim`, `/ag-ui-search`, `/ag-ui-build` and `/ag-test`. See `brain/ui-library/SOURCES.md`.
  ⚠️ motion.csv snippets are **GSAP; GSAP is not installed** — translate to framer-motion. Presets #9 and
  #12 need paid plugins → unavailable.
- **2026-08-24 · Manager — 3 agents can now run at once.** Read `brain/PARALLEL.md` before starting a second
  session. Two rules: **`styles/style.scss` is its own lock** (one holder, any page), and **`server.js`
  reads lowercase `process.env.port`** — `PORT=3001` does nothing.
- **2026-08-24 · Manager:** SEO / Digital Marketing / Training are **UX prototypes with an ad-hoc visual
  pass**, not wireframes. Decision: rebuild properly (T-010 → T-012), replacing the `seo-`/`dm-`/`tr-`
  SCSS blocks in place. `styles/ux-prototype.css` gets deleted when the last lands (T-017).
- **2026-08-24 · Manager:** `Web/Backup/ar/PROJECT.md` is the **archive**. New history → `brain/logs/`.
- **2026-08-24 · Manager:** `sendgrid.env` is NOT ignored and contains a live key. No `git add .` inside
  `Web/Backup/ar`. Stage explicit paths only.

## Waiting on
| Who | Needs | From | Since |
|-----|-------|------|-------|
| Manager | Go-ahead on the `offers.js` build fix (T-022) — which gtag block to keep | User | 2026-08-24 |
| Manager | SendGrid key rotation (T-004) | User | 2026-08-24 |
| Manager | Pick a Hero direction from the 4 filed `seo-hero-*.md` entries (T-010 trial), or confirm the "9 prior entries" discrepancy | User | 2026-08-24 |

## Freshly landed on `main`
| When | Agent | What |
|------|-------|------|
| 2026-08-24 | UI Library Searcher | 4 SEO Hero references filed (Dribbble, T-010 trial) — `brain/ui-library/inspiration/seo-hero-*.md` |
| 2026-08-24 | Manager | `brain/` + `.claude/agents` + `.claude/commands` (T-001) |
| 2026-08-24 | Manager | Design/motion database wired into the agents + `SOURCES.md` (T-005) |
| 2026-08-24 | Manager | Live Lab at `/lab/` — 63 components, 10 motion specimens (T-006) |
| 2026-08-24 | Manager | `brain/PARALLEL.md` — 3-slot parallel workflow (T-007) |

- 2026-09-08: Codex completed requested hp-new hero typography/button edits; REVIEW. HeroSlider.js now uses Almarai/--ds-font, 820px copy column, shared DS outline CTA, no badge. Route verified HTTP 200. See today's log.

- 2026-09-08: User corrected hp-new hero styling: Cairo font and cyan default-btn per screenshot supersede the earlier Almarai/DS-outline edit. Implemented in HeroSlider.js; HTTP 200 verified.

- 2026-09-08: hp-new opening viewport now groups navbar space, hero, and domain search into 100vh/100dvh; short screens may grow for content. Changes in hp-new.js and HeroSlider.js; HTTP 200 checked.

- 2026-09-08: DomainSearch.js on hp-new restyled to simple navy strip, light input text, Cairo and shared cyan button. Responsive layout and form behavior retained; HTTP 200 verified. REVIEW.

- 2026-09-08: DomainSearch.js updated per reference to full-width near-black navy pill field with traveling blue border light; search input left/button right at all breakpoints. Replaces prior cyan domain button styling. HTTP 200 verified; REVIEW.

- 2026-09-08: Domain search refined to solid navy input, softer cyan border glow, restored shared cyan default-btn. Opening group +1vh allocated to hero in hp-new.js. REVIEW.
