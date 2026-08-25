# STATE — the NOW board
> Updated on every start, finish, and surprise. Push immediately after editing.

**As of:** 2026-08-24 — Manager

## Active right now
| Agent | Device | Branch | Doing | Zone | Since |
|-------|--------|--------|-------|------|-------|
| Manager | PC1 | main | Brain, agents, Lab, parallel workflow — done | `brain/`, `.claude/`, `pages/lab/` | 2026-08-24 |

## Broadcast — read before you start
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
