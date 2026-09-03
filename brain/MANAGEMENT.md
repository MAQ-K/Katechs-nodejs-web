# KATECHS — MANAGEMENT
> The single source of truth for every agent and every device.
> **Read this file first. Every session. No exceptions.**
> Sections: [Brief](#brief) · [Goals](#goals) · [Tasks](#tasks) · [History](#history) · [Agents](#agents) · [Work Assigned](#work-assigned)

Last updated: 2026-08-24 — by: Manager

---

## Brief

**Product:** Katechs website — Arabic build at `Web/Backup/ar`.
**Stack:** Next.js 14 (Pages Router, *not* App Router), custom `server.js` (plain http wrapping Next, not `next start`), Bootstrap 5 + SCSS (`styles/style.scss`, `styles/responsive.scss`, `styles/rtl.css`), RTL Arabic layout, AOS + Framer Motion, Swiper carousels. Template base: "Jumpx".
**Repo:** https://github.com/MAQ-K/Katechs-nodejs-web — default branch `main`.
**Run:** `npm run dev` (port 3000) · `npm run build`.

**Structure conventions (do not break):**
- `pages/<route>.js` — thin page file, composes `Layout` + a stack of sections.
- `components/<PageName>/` — components owned by a single page.
- `components/Common/` — cross-page sections (CTA, Testimonials, PageBanner, Newsletter, Partner…).
- `components/Layouts/` — `Navbar.js`, `Footer.js` shell.
- `data/<page>/data.js` — page content/data, separated from JSX. **New sections must be data-driven, not hardcoded JSX.**
- Styling = global SCSS classes. No CSS Modules, no Tailwind, no styled-components.
- `components/Sections/` — the one deliberate exception: standalone, portable, one-file sections
  built from a reference image on request, self-contained via `styled-jsx`, zero dependency on
  SCSS/data/icon-fonts. Different contract — read `components/Sections/README.md` before touching
  it. Preview at `http://localhost:3000/lab/sections/`.

**Direction:** keep the existing theme/shell (colors, fonts, Navbar, Footer, SCSS tokens); give *new* page content a distinct, more modern UI/UX treatment.

**Standing rule (2026-08-29, user) — before designing any UI, in any session:** read
`brain/ui-library/README.md` + skim `brain/ui-library/inspiration/*.md` for a reusable idea first,
pull from the `ui-ux-pro-max` skill (styles/palettes/typography/UX rules), then run the result
through `design-taste-frontend` before calling it done. See `CLAUDE.md` → Design intelligence for
the full sequence.

**Hard-earned gotchas:**
- Icons: prefer `bx-*` (regular Boxicons). `bxs-*` (solid) codepoints exist in CSS but glyphs are missing from the bundled font — they render as empty boxes.
- New-section headings use **Cairo** (already loaded in `_document.js`). Do not change the sitewide `$heading-font-family`.
- Broken images / weird webpack errors → clear `.next/cache` and restart. The files are usually fine.
- Never edit shared components (`Common/`, `Layouts/`) to fix one page. Make a page-scoped component instead.
- SCSS is committed compiled (`.css` + `.css.map`). Recompile, don't hand-edit the `.css`.

---

## Goals

In priority order, as set 2026-08-24.

| # | Goal | Owner | Status |
|---|------|-------|--------|
| G1 | **Finish all service pages** — SEO, Digital Marketing, Training are the last three | Implementer + Animator | In progress |
| G2 | **Web services page at the highest level** — `pages/services/index.js` is still a grey-box wireframe; UX first, then UI, then motion | Manager → all | Not started |
| G3 | **Finish sub-pages** — design, UX, content | Implementer + Content | Not started |
| G4 | **Finish main common components** — header, plan cards, buttons, font | UI Implementer | Not started |
| G5 | **Finish the homepage** | UI Implementer | Not started |
| G6 | **Test the whole site** | Tester | Not started |
| G7 | **Finish content** — real Arabic copy everywhere, no lorem, all data-driven | Content & Data | In progress |
| G8 | **Finish implementing visuals** — motion, 3D, hover, interactivity across the site | UI Animator | In progress |
| G9 | **Sitewide monochrome design system rollout** — the `.ds-new-*` layer (`/lab/design-system/`) is now the site's real direction, replacing navy/cyan `.ds-*`/`.wsv-*`/page-specific button-card-tag styling everywhere. Decision 2026-09-01 (user). See Known Issues below — almost nothing on real pages uses `.ds-*` yet, this is a full page-by-page visual rebuild, not a class rename. | Manager → UI Implementer | In progress — Web Services page first |

Standing constraints, not goals: every section data-driven from `data/<page>/data.js`; motion language
unified from `brain/animation/LAB.md`; nothing merges without a Tester report; the security debt below
must be cleared before further pushes.

### Current state of the last three service pages — read before planning work on them
They are **not** wireframes. Each is a Stage-2.5 **UX prototype** (real layout/hierarchy/interaction,
deliberately greyscale via `styles/ux-prototype.css`) that has since received an **ad-hoc visual pass**
in `styles/style.scss` under `seo-` / `dm-` / `tr-` prefixes (lines ~10821–12733).
Decision 2026-08-24: **rebuild those properly** through library → implement → animate. The prefixed blocks
get replaced in place. `styles/ux-prototype.css` and its `_app.js` import get deleted when the last one lands (T-017).
The genuine wireframe is `pages/services/index.js` — the web services hub (G2).

### Web Services page — area numbering (canonical)

The user counts the **intro block (hero + carousel + navigator) as area 1**. Use this mapping in
all communication; internal code ids differ:

| User says | Service | id |
|---|---|---|
| area 1 | intro (hero, carousel, navigator) | — |
| area 2 | مواقع الشركات | `business-websites` |
| area 3 | ووردبريس | `type-2` |
| area 4 | E-commerce Development | `type-3` |
| area 5 | Website Consulting & Performance | `type-4` |

There are four SERVICE areas, not five — the fifth number is the intro. Adding a built area is one
row in `BUILT_AREAS` (pages/services/index.js) plus a data key; the section components in
`components/Services/ServiceArea/` are generic and must not be forked per area.

### Known Issues / Debt (open)
1. **[Critical]** Hardcoded live SendGrid API key in `pages/api/contact.js:7` and `pages/api/web.js:7` → rotate + `process.env.SENDGRID_API_KEY`.
2. **[Critical]** `.gitignore` line meant to ignore `sendgrid.env` is corrupted — a plain `git add .` can commit a raw API key.
3. **[Critical]** `npm audit`: 32 vulns (9 critical, 14 high), incl. prototype pollution in `swiper`.
4. **[Medium]** reCAPTCHA never verified server-side — the API routes are callable directly.
5. **[Medium]** No input escaping before form fields are interpolated into email HTML.
6. **[Critical]** **`npm run build` fails** — `pages/offers.js` has a raw Google Ads `<script>` block pasted
   into JSX after a correct `<Script>` block (duplicate gtag). Committed 2026-08-19 (`08a0d78`); the site has
   **not been production-buildable since**. Task T-022.
7. **[Low]** Junk committed: `stderr.log`, `dev-*.log`, `pages/contact.zip`, `check-mockup.png`, `tmp/restart.txt`.

---

## Tasks

Status vocabulary: `TODO` · `CLAIMED` · `IN PROGRESS` · `REVIEW` (waiting on the user's eyes) · `DONE` · `REVERTED` · `BLOCKED`

| ID | Task | Agent | Status | Files / Zone | Notes |
|----|------|-------|--------|--------------|-------|
| T-001 | Stand up the brain + agent system | Manager | DONE | `brain/`, `.claude/` | This system |
| T-002 | Port the Motion/3D/UI Kit Lab into `brain/animation/LAB.md` | UI Animator | TODO | `brain/animation/` | ⏳ items only. Preset index + sources now done |
| T-003 | Index every component into `brain/components/REGISTRY.md` | UI Implementer | TODO | `brain/components/` | Seeded from dir names; needs a file-by-file sweep |
| T-004 | Fix credential exposure | Manager | BLOCKED | `pages/api/*`, `.gitignore` | Needs the user to rotate the SendGrid key |
| T-005 | Wire `ui-ux-pro-max` + `design-taste-frontend` into the agents | Manager | DONE | `.claude/agents/`, `brain/ui-library/SOURCES.md` | The animation database the user already had |
| T-006 | Live Lab at `/lab/` — motion, components, inspiration | Manager | DONE | `pages/lab/`, `components/Lab/` | Dev only, 404s in production |
| T-007 | Parallel-agent workflow (worktrees, ports, SCSS lock) | Manager | DONE | `brain/PARALLEL.md` | 3 slots: 2 on PC1, 1 on PC2 |
| **G1 — last three service pages** |
| T-010 | UI library for SEO / Digital Marketing / Training | `/ag-ui-search` | IN PROGRESS | `brain/ui-library/` | Trial run 2026-08-24: SEO **Hero only**, 4 Dribbble-sourced entries filed (`seo-hero-*.md`). Remaining SEO sections + all of DM/Training still TODO. No prior "9 entries" found on this clone — see log 15:50 |
| T-011 | Implement UI for those 3 pages | `/ag-ui-build` | REVIEW | `components/{Seo,DigitalMarketing,Training}/**` + SCSS lock | Rebuild the `seo-`/`dm-`/`tr-` blocks **in place**. 2026-08-25: SEO and Digital Marketing `.seo-*`/`.dm-*` blocks reskinned in place to match AppDev's card/button/border/font system exactly. 2026-08-25 (2): Training's `.tr-*` block reskinned the same way — all three service pages now share one visual system. Ready for T-017 (delete `ux-prototype.css`) once the user has looked. See today's log for both runs |
| T-012 | Animations + interactivity for those 3 pages | `/ag-anim` | TODO | motion layer | After T-011 per page, not before |
| T-017 | Delete `styles/ux-prototype.css` + its `_app.js` import | `/ag-ui-build` | TODO | `styles/`, `pages/_app.js` | Only once all of T-011 has landed |
| **G2 — web services page** (`pages/services/index.js`) |
| T-014a | Finish the page's UX design | Manager + `/ag-ui-search` | TODO | — | Acceptance test = the 5-second rule in `web services page ins.md` |
| T-014b | Implement the UX (structure, still grey) | `/ag-ui-build` | TODO | `pages/services/index.js` | Currently a grey-box wireframe |
| T-014c | Prepare the UI library for the page | `/ag-ui-search` | TODO | `brain/ui-library/` | |
| T-014d | Prepare the animation / 3D / motion library for the page | `/ag-anim` | TODO | `brain/animation/presets/` | |
| T-014e | Implement the UI design | `/ag-ui-build` | REVIEW | `components/Services*/` + SCSS lock | Hero restyled to reference (`brain/ui-library/inspiration/web services  page hero .png`), see `brain/logs/2026-08-28.md` |
| T-014f | Implement animations and everything on top | `/ag-anim` | TODO | motion layer | |
| **G3–G5** |
| T-013 | Main components UI — header, plan cards, buttons, font | `/ag-ui-build` | TODO | `components/Layouts/**`, `Common/**` | ⚠️ **Shared. Manager-gated. Runs alone** |
| T-015 | Sub-pages — design, UX, content | `/ag-ui-build` + `/ag-content` | TODO | per page | |
| T-016 | Refactor pattern — all common components look the same | `/ag-ui-build` | TODO | `components/Common/**` | ⚠️ **Audit first. Runs alone** |
| T-018 | Homepage | `/ag-ui-build` | IN PROGRESS | `pages/hp-new.js`, `components/HpNew/**`, `Homepage/**` | **Rebuild started 2026-09-03, section by section (sketch → design → finish) on an independent route `/hp-new`.** WARNING zone corrected: `components/HomeOne/**` is **orphaned — nothing imports it**. The live homepage is `HomeTwo/` + `Services/Services.js` + `PricingWebsite/**` + **8 sections from `components/Common/**`** — which is exactly why the rebuild runs on a parallel route instead of in place. `pages/index.js` untouched until the swap is approved. Working folder + section tracker: `Web/Backup/ar/Homepage/README.md`. See `brain/logs/2026-09-03.md` |
| **G6–G7** |
| T-019 | Full-site strict test sweep | `/ag-test` | TODO | — | After G1–G5 |
| T-020 | Content sweep — kill remaining lorem ipsum, all copy data-driven | `/ag-content` | TODO | `data/**` | Known: `AboutTwo/*`, `degital-markiting-/WhatWeOffer/*`, `ComingSoon/*` |
| T-022 | **Fix the broken production build** — `pages/offers.js` raw `<script>` in JSX | Manager | **BLOCKED** | `pages/offers.js` | Live conversion tracking. Needs the user to say which gtag block to keep |
| T-021 | `robots.txt` — disallow `/lab/`, exclude from sitemap | `/ag-seo` | TODO | `public/`, sitemap | Small; do it with the next SEO pass |
| **G9 — sitewide monochrome design system** |
| T-023 | Roll the `.ds-new-*` monochrome system (buttons/cards/tags/media-cards/split-hero, `/lab/design-system/`) out across the whole site, page by page | `/ag-ui-build` | IN PROGRESS | `styles/style.scss`, every page's components | ⚠️ **Real footprint check (2026-09-01): almost nothing on a live page uses `.ds-*` yet** — only `pages/hosting-order.js` (`.ds-frame`). Even `/services` runs on its own separate `.wsv-*` classes. This is a full page-by-page visual rebuild of each page's actual buttons/cards/tags, not a find-and-replace of class names. Starting with Web Services (`components/Services/**`) since it's the system's origin and the most-worked page. |

> **Scheduling rule:** T-013 and T-016 touch shared components and can break every page at once — they run
> **alone**, never in parallel with page work. Everything else follows `brain/PARALLEL.md`.

> Add rows at the **bottom**. Never renumber. Never delete a row — move it to DONE/REVERTED.

---

## History

Full detail lives in `brain/logs/YYYY-MM-DD.md` (one file per day, append-only — keeps git merges conflict-free).
Only **milestones** go here.

| Date | Milestone |
|------|-----------|
| 2026-08-18 | Full review of `Web/Backup/ar`; security debt catalogued; direction agreed (reuse theme shell, new UI/UX for new content) |
| 2026-08-18 | Hosting services page: Hero, Pricing, cPanel banner, Feature grid rebuilt section-by-section |
| 2026-08-19 | Emails page: wireframe pass then real UI (hero, option cards, synced tab bar, plan cards) |
| 2026-08-24 | `brain/` + 6-agent system created. `Web/Backup/ar/PROJECT.md` history retained as the pre-brain archive |
| 2026-08-24 | `ui-ux-pro-max` + `design-taste-frontend` wired in as required agent sources (`brain/ui-library/SOURCES.md`); all 16 motion presets indexed in `animation/LAB.md` |
| 2026-08-24 | Live Lab shipped at `/lab/` — 63 real components + 10 motion specimens, dev only |
| 2026-08-24 | `brain/PARALLEL.md` — three agents at once (2 on PC1 via git worktree, 1 on PC2) |
| 2026-08-24 | Discovered the production build has been broken since 2026-08-19 (`pages/offers.js`) — T-022 |

---

## Agents

| Shortcut | Agent | Owns | Never touches |
|----------|-------|------|---------------|
| *(this chat)* | **Manager** | Planning, assigning, merging, the brain itself, final say | — |
| `/ag-ui-search` | **UI Library Searcher** | Section ideas, references, patterns → `brain/ui-library/` | Never writes app code |
| `/ag-ui-build` | **UI Implementer** | Page + component code, SCSS → `components/`, `pages/`, `styles/` | Animation internals, content copy |
| `/ag-anim` | **UI Animator** | Motion, 3D, hover, interactivity → `brain/animation/`, motion components | Layout/structure decisions |
| `/ag-content` | **Content & Data Manager** | Copy, Arabic text, `data/**`, images, assets | Never edits JSX layout or SCSS |
| `/ag-test` | **Tester** | Strict reports: build, render, RTL, responsive, a11y, console, links | Never fixes — reports only |
| `/ag-seo` | **SEO Manager** | Meta/head plumbing, sitemap, structured data, perf, handing the real SEO specialist a clean surface | Never writes keyword strategy — a human does that |

Full role definitions: `.claude/agents/*.md`. Shortcut commands: `.claude/commands/*.md`.

**Protocol every agent follows:** `brain/README.md` (read it before your first action).

---

## Work Assigned

Live claims. **One zone, one agent, at a time.** Claiming = creating `brain/locks/<zone>.lock.md` *and* adding a row here.

| Zone (path glob) | Agent | Device | Branch | Since | Task |
|------------------|-------|--------|--------|-------|------|
| _(none yet)_ | | | | | |

**Zones are paths, not pages.** Standard split so two agents can work the same page at once:
- `components/<Page>/**` + `styles/style.scss` → UI Implementer
- `data/<page>/**` + `public/images/<page>/**` → Content & Data Manager
- `components/Common/Reveal.js`, `Magnetic.js`, `ParticleField.js`, motion utils → UI Animator
- `pages/<route>.js` → whoever wires the section in; announce it, it is the collision hot-spot
- `styles/style.scss` is **one file, high collision risk** → append your block at the end, under a `// === <Page>: <Section> ===` banner, and never reformat someone else's block.
