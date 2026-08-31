# STATE — the NOW board
> Updated on every start, finish, and surprise. Push immediately after editing.

**As of:** 2026-08-24 — Manager

## Active right now
| Agent | Device | Branch | Doing | Zone | Since |
|-------|--------|--------|-------|------|-------|
| Manager | PC1 | main | Brain, agents, Lab, parallel workflow — done | `brain/`, `.claude/`, `pages/lab/` | 2026-08-24 |

## Broadcast — read before you start
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
