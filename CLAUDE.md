# Katechs — read this first

**How to work here without breaking things: `brain/WORKFLOW.md`.** Start there if git feels slow, if you're
about to commit, or if you're not sure who owns a file.

**🚫 Agents never run git here.** No pull, push, add, commit, status, checkout, branch, merge, log or diff.
`.git` is 1.6 GB and every call is slow. Write files, report the paths you touched — **the user pushes
manually.** The only exception is the user invoking `/sync` themselves.

**Before doing anything in this repo:**
1. Read `brain/MANAGEMENT.md` — brief, goals, tasks, history, agents, work assigned
2. Read `brain/STATE.md` — the Broadcast section
3. Read `brain/README.md` — the working protocol (read → work → record → report)

`brain/` is the shared memory for the Manager and all agents, across every device, synced through GitHub.
Nothing is remembered anywhere else. If it isn't written to `brain/`, the next session and the other device
will not know it happened.

## Agents & shortcuts
| Shortcut | Agent |
|----------|-------|
| `/board` | Manager status report |
| `/sync` | Pull + reconcile the brain + broadcast |
| `/ui-search` | UI Library Searcher — section ideas → `brain/ui-library/` |
| `/ui-build` | UI Implementer — components, pages, SCSS |
| `/anim` | UI Animator — motion, 3D, hover, interactivity |
| `/content` | Content & Data Manager — copy, `data/**`, images |
| `/test` | Tester — strict QA report (never fixes) |
| `/seo` | SEO Manager — technical SEO surface only |

Definitions: `.claude/agents/`. Shared rules every agent inherits: `.claude/agents/_SHARED-PROTOCOL.md`.

## Two rules that protect everyone
- **Claim before you write, when a run is concurrent.** `brain/locks/<zone>.lock.md` + a row in
  *Work Assigned*. No git needed — sessions in the same folder see each other's files instantly.
- **Never `git add .` inside `Web/Backup/ar`** — `sendgrid.env` is not actually ignored and contains a live
  API key. Stage explicit paths until that is fixed (`brain/MANAGEMENT.md` → Known Issues #1, #2).

## Where the app is
`Web/Backup/ar` — Next.js 14 Pages Router, RTL Arabic, Bootstrap 5 + global SCSS, custom `server.js`.
`npm run dev` → port 3000. Conventions and gotchas: `brain/MANAGEMENT.md` → Brief.

## See the work
`cd Web/Backup/ar && npm run dev` → **http://localhost:3000/lab/**
- `/lab/motion/` — every motion primitive running, mapped to the `ui-ux-pro-max` motion.csv presets
- `/lab/components/` — the real components in isolation, any viewport width, RTL or LTR
- `/lab/ui-library/` — reference screenshots + the ideas filed in `brain/ui-library/`

Dev only — `/lab/` 404s in a production build. **Look here before rebuilding anything.**

## Running more than one agent at once
Read `brain/PARALLEL.md` first. Two rules decide whether it works:
- **`styles/style.scss` is its own lock zone** — 12,733 lines shared by every page, one holder at a time,
  whatever page you're on.
- **`server.js` reads lowercase `process.env.port`.** `PORT=3001` silently does nothing.
  PowerShell: `$env:port=3001; npm run dev`.

## Design intelligence
`brain/ui-library/SOURCES.md` — `ui-ux-pro-max` (motion presets, styles, palettes, UX rules) and
`design-taste-frontend` are **required sources** for the design agents, not optional.
⚠️ Its motion snippets are GSAP; **GSAP is not installed here** — translate to framer-motion.
