# STATE — the NOW board
> Updated on every start, finish, and surprise. Push immediately after editing.

**As of:** 2026-08-24 — Manager

## Active right now
| Agent | Device | Branch | Doing | Zone | Since |
|-------|--------|--------|-------|------|-------|
| Manager | PC1 | main | Brain, agents, Lab, parallel workflow — done | `brain/`, `.claude/`, `pages/lab/` | 2026-08-24 |

## Broadcast — read before you start
- **2026-08-24 · Manager — 🔴 THE PRODUCTION BUILD IS BROKEN.** `npm run build` fails on
  `pages/offers.js`: a raw Google Ads `<script>` block pasted into JSX after a correct `<Script>` block.
  Committed 2026-08-19 (`08a0d78`) — **the site has not been buildable since**. Task **T-022**. Nothing can
  ship until it's fixed. Not touched yet: it's live conversion tracking, deleting the wrong copy breaks
  ad attribution.
- **2026-08-24 · Manager — the Lab is live.** `npm run dev` → **http://localhost:3000/lab/**
  (motion · components · ui-library). Real components, real motion, viewport + RTL + freeze toggles.
  Dev only — 404s in production. **Look here before rebuilding anything.**
- **2026-08-24 · Manager — the design database is wired in.** `ui-ux-pro-max` + `design-taste-frontend` are
  now **required sources** for `/anim`, `/ui-search`, `/ui-build` and `/test`. See `brain/ui-library/SOURCES.md`.
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
