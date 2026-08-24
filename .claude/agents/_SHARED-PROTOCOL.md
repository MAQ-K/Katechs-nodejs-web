# Shared protocol (every Katechs agent inherits this)

Working root: `Web/Backup/ar` (Next.js 14 Pages Router, RTL Arabic, Bootstrap 5 + global SCSS, custom `server.js`).
Brain: `brain/` at the repo root.

## ⚡ Speed rules — these override anything below

**1. 🚫 NEVER RUN GIT. Not once, not for any reason.**
No `pull`, `push`, `add`, `commit`, `status`, `checkout`, `stash`, `branch`, `merge`, `log`, `diff`.
This repo's `.git` is **1.6 GB** (1.2 GB LFS + 434 MB loose objects) and every call is slow.
**The user pushes manually.** You write files and report what changed. That is the entire handoff.
There is no exception to this and no task that grants one — if a task seems to require git, say so in your
report and stop.

**2. Never read the ui-ux-pro-max CSVs. Query them.**
They total **1.16 MB** (`google-fonts.csv` alone is 745 KB) and will eat your context before you produce
anything. The skill ships a search tool that answers in 0.4s with ~7 KB:
```bash
python ~/.claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> --max-results 3
```
Budget 3–5 calls. Never `cat`/`Read`/`Grep` a `.csv` in that skill.

**3. Read little.** Only what your task needs. Reading is cheap only in small quantities.

## Start of every run
1. `brain/MANAGEMENT.md` — brief, goals, tasks, gotchas
2. `brain/STATE.md` — the Broadcast section
3. Your own agent notes, if you have any

Skip the logs, `brain/README.md` and `brain/locks/` unless the Manager tells you a concurrent run is active.

## Claiming — only when the Manager says the run is concurrent
With one or two agents on disjoint paths, the naming conventions already prevent collisions and a lock is
pure overhead. When the Manager *does* say your zone overlaps someone else's: write
`brain/locks/<zone-slug>.lock.md` and add your row to *Work Assigned* in `MANAGEMENT.md`.

**A lock file needs no git.** Sessions running in the same folder read each other's files instantly — that is
why locks still work with git switched off. Before claiming, `ls brain/locks/`; if one already covers your
path, stop and report rather than working around it.

## If you are in a parallel slot — see `brain/PARALLEL.md`
Several agents may run at once, each in its own folder.
- **Check where you are** with `pwd` before doing anything. Never `cd` out of your folder.
- **Never assume port 3000.** `server.js` reads **lowercase** `process.env.port`. PowerShell:
  `$env:port=3001; npm run dev`. Slot ports: main 3000 · worktree 3001 · PC2 3002.
- Your worktree has its own `node_modules` and `.next` — `npm install` once, and clearing your own
  `.next/cache` never affects another slot.
- **`styles/style.scss` is a lock zone of its own** (12,733 lines, shared by every page). Hold
  `brain/locks/styles-style-scss.lock.md` before touching it, whatever page you're on. Take it, write your
  banner block, recompile, release. Never hold it while you think.

## Files, not commits
- **Never `git add .`** — you are not running git at all, but if you ever see someone about to:
  `sendgrid.env` is not ignored and holds a live key.
- `styles/style.scss`: append only, under `// === Page: Section ===`. Never reformat another block.
- Report every path you created or changed, so the user knows what to stage.

## End of every run
1. Append what you did to `brain/logs/<YYYY-MM-DD>.md` — short: what changed, why, what's left, gotchas
2. Update your task row in `brain/MANAGEMENT.md`
3. Add a line to `brain/STATE.md` → Broadcast **only if another agent must know something**
4. Delete your lock file + Work Assigned row, if you took one
5. **Report back.** What you did, every path you touched, what you did NOT do, what the next agent needs.
   Keep it short. **Never commit** — the user pushes manually.

## Always
- Ambiguous instruction, sketch, or annotation → **ask the user before implementing.** A confident wrong guess is expensive here.
- Reuse first: `brain/components/REGISTRY.md`, `brain/animation/LAB.md`.
- Nothing is "Done" because it compiles — it is `REVIEW` until the user has looked at it.
- Stay in your zone. If the fix belongs to another agent, write it into `brain/STATE.md` → Broadcast and say so in your report.
