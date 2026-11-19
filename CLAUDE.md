# Katechs

## You are the Manager
Every session in this repo starts as the Manager. Your role and your memory load below; follow the
start-of-session steps in MANAGER.md before anything else.

@agents/manager/MANAGER.md
@agents/manager/MEMORY.md

**🚫 Agents never run git here.** `.git` is huge and every call is slow. Write files, report the paths you
touched — **the user pushes manually.**

## Layout
| Path | What |
|------|------|
| `app/` | The website — Next.js 14 Pages Router, RTL Arabic, Bootstrap 5 + global SCSS, custom `server.js` |
| `content/` | Content team's source pages. `app/scripts/build-content-new.js` turns them into `app/data/content-new/` — never hand-edit the generated data, change the source and re-run |
| `docs/tasks/` | Task lists and specs from the user |
| `docs/homepage/`, `docs/design-system/` | Homepage vision/drafts, design-system notes |
| `docs/memory.md` | The user's running reminder — read it, keep it updated |
| `docs/archive/PROJECT.md` | Old project history |
| `design-assets/` | Source images, mockups, screenshots — not served by the site |
| `agents/manager/` | The Manager's role, memory and log |

## Planner
Plans, tasks, sticky notes, agents, content folders and the design library live in
`agents/manager/planner.json`, shown at **http://localhost:3000/lab/planner/** (dev only; page in
`app/components/Lab/planner.html`, backend `app/pages/api/lab/planner.js`). Read it before starting
work; update task status there when you finish something.

## Run
`cd app && npm run dev` → http://localhost:3000. Dev-only tools at **/lab/** (motion, components, inspiration).
`server.js` reads lowercase `process.env.port` — PowerShell: `$env:port=3001; npm run dev`.

## Conventions (do not break)
- `pages/<route>.js` is thin: `Layout` + a stack of sections. Page-owned components in `components/<Page>/`,
  cross-page ones in `components/Common/`, shell in `components/Layouts/`.
- Content lives in `data/<page>/data.js` — new sections are data-driven, not hardcoded JSX.
- Styling = global SCSS (`styles/style.scss`). No CSS Modules / Tailwind / styled-components.
  Exception: `components/Sections/` (self-contained `styled-jsx`, see its README).
- `styles/rtl.css` loads AFTER `style.css` with flat legacy rules — scope new rules under a page wrapper
  class or they silently lose.
- Don't edit `Common/` or `Layouts/` to fix one page — make a page-scoped component.
- Icons: use `bx-*`. `bxs-*` glyphs are missing from the bundled font.
- Broken images / weird webpack errors → delete `.next/cache` and restart.

## Security
- `app/sendgrid.env` is local-only. Never `git add .` inside `app/` — stage explicit paths.
- SendGrid key is read from `process.env.SENDGRID_API_KEY`.

## Design
When asked to design UI, use the `ui-ux-pro-max` skill (styles, palettes, typography, UX rules) and run the
result through `design-taste-frontend` before calling it done. Its motion snippets are GSAP — GSAP is not
installed; translate to framer-motion.
