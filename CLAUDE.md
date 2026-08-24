# Katechs — read this first

## Picking up where you left off

**Same machine** — chats are saved automatically to `~/.claude/projects/d--Work-katechs-nodejs-web/`:
```bash
claude --continue        # continue the most recent chat in this folder
claude --resume          # picker of every past chat here (accepts a search term)
claude --resume <id>     # one specific chat, by session id
claude --resume <id> --fork-session   # branch off it instead of continuing in place
```

**Another machine** — chat transcripts are local files and do **not** sync. Don't chase them.
`git pull` and start a fresh chat: `brain/` is the handoff, and it's designed to make the transcript
unnecessary. Read `brain/MANAGEMENT.md` → `brain/STATE.md` → today's `brain/logs/`, and you have every
decision, constraint and next step without replaying a conversation.

**This only works if the brain is pushed.** Claim/finish → commit → push, every time. An unpushed brain is
a brain the other machine cannot see.


**Before doing anything in this repo:**
1. `git pull --rebase origin main`
2. Read `brain/MANAGEMENT.md` — brief, goals, tasks, history, agents, work assigned
3. Read `brain/STATE.md` — what is happening right now, and the Broadcast section
4. Read `brain/README.md` — the working protocol (claim → work → record → release)

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
- **Claim before you write.** `brain/locks/<zone>.lock.md` + a row in *Work Assigned*, pushed on its own,
  before touching app code. Release when done.
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
