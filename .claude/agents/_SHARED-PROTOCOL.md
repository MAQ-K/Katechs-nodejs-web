# Shared protocol (every Katechs agent inherits this)

Working root: `Web/Backup/ar` (Next.js 14 Pages Router, RTL Arabic, Bootstrap 5 + global SCSS, custom `server.js`).
Brain: `brain/` at the repo root.

## Start of every run — do this before anything else
1. `git pull --rebase origin main`
2. Read `brain/MANAGEMENT.md` (brief, goals, tasks, work assigned)
3. Read `brain/STATE.md` (Broadcast + Active right now) and `ls brain/locks/`
4. Read `brain/agents/<your-file>.md` and today's `brain/logs/<YYYY-MM-DD>.md`
5. Read `brain/README.md` if you have not this session

## Claiming
Do not write a single file in the app until you have:
- created `brain/locks/<zone-slug>.lock.md` (format in `brain/README.md`),
- added your row to *Work Assigned* in `brain/MANAGEMENT.md`,
- committed and pushed **that alone**.
If a lock already covers your path: stop, record the conflict in `brain/STATE.md` → *Waiting on*, report to the Manager.

## If you are in a worktree (parallel slot) — see `brain/PARALLEL.md`
Up to three agents run at once: two on PC1 (main clone + a git worktree), one on PC2.
- **Check where you are** (`git worktree list`, `pwd`) before doing anything. Never `cd` out of your slot.
- **Never assume port 3000.** `server.js` reads **lowercase** `process.env.port`. PowerShell:
  `$env:port=3001; npm run dev`. Slot ports: main 3000 · worktree 3001 · PC2 3002.
- Your worktree has its own `node_modules` and `.next` — `npm install` once, and clearing your own
  `.next/cache` never affects another slot.
- **`styles/style.scss` is a lock zone of its own** (12,733 lines, shared by every page). Hold
  `brain/locks/styles-style-scss.lock.md` before touching it, whatever page you're on. Take it, write your
  banner block, recompile, push, release. Never hold it while you think.

## Branch + commits
- Branch `agent/<shortcut>/<topic>`. Never commit to `main`.
- Commit `[<shortcut>] <what> (T-0xx)`. Small, frequent, pushed.
- **Never `git add .` inside `Web/Backup/ar`** — `sendgrid.env` is not ignored and holds a live key. Stage explicit paths.
- `styles/style.scss`: append only, under `// === Page: Section ===`. Never reformat another block.
- Never force-push, never rewrite pushed history, never merge to `main` (Manager does that).

## End of every run
1. Append what you did to `brain/logs/<YYYY-MM-DD>.md` (`## HH:MM — <agent> — <task>` + what changed, why, what's left, gotchas)
2. Update your task row in `brain/MANAGEMENT.md`
3. Update `brain/STATE.md` (Active / Broadcast / Freshly landed)
4. Delete your lock file + your Work Assigned row
5. Commit, push, and report back: **what you did, what you touched, what you did NOT do, what the next agent needs**

## Always
- Ambiguous instruction, sketch, or annotation → **ask the user before implementing.** A confident wrong guess is expensive here.
- Reuse first: `brain/components/REGISTRY.md`, `brain/animation/LAB.md`.
- Nothing is "Done" because it compiles — it is `REVIEW` until the user has looked at it.
- Stay in your zone. If the fix belongs to another agent, write it into `brain/STATE.md` → Broadcast and say so in your report.
