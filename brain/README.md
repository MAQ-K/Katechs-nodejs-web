# brain/ — how this works

Shared memory for the Manager and all six agents, across every device, synced through GitHub.

```
brain/
├── MANAGEMENT.md      ← brief · goals · tasks · history · agents · work assigned  (READ FIRST)
├── STATE.md           ← the NOW board: what is happening this minute
├── README.md          ← this protocol
├── ui-library/        ← UI Library Searcher's output: section ideas, references, patterns
│   ├── inspiration/   ← one file per idea/reference
│   └── _TEMPLATE.md
├── components/
│   └── REGISTRY.md    ← index of every component that exists (before you build, look here)
├── animation/
│   ├── LAB.md         ← the Motion/3D/UI Kit Lab — the motion language of this site
│   └── presets/       ← ready-to-paste motion recipes
├── logs/YYYY-MM-DD.md ← append-only daily history (one file per day = no merge conflicts)
├── locks/<zone>.lock.md ← active claims, one file per zone
└── agents/<agent>.md  ← each agent's own scratch notes / queue
```

---

## The 6-step loop — every agent, every session

1. **SYNC** — `git pull --rebase origin main`
2. **READ** — `brain/MANAGEMENT.md` → `brain/STATE.md` → `brain/locks/` → your own `brain/agents/<you>.md`
3. **CLAIM** — write `brain/locks/<zone>.lock.md`, add your row to *Work Assigned*, commit + push **immediately** (this is the announcement — it must land before you write code)
4. **WORK** — only inside your claimed zone
5. **RECORD** — append to `brain/logs/<today>.md`, update your task row in MANAGEMENT.md, update `brain/STATE.md`
6. **RELEASE** — delete your lock file and your *Work Assigned* row, commit, push

Skipping step 3 or 6 is the only way this system breaks. Do not skip them.

---

## Lock file format — `brain/locks/<zone-slug>.lock.md`

```markdown
agent: UI Implementer
zone: Web/Backup/ar/components/Emails/**
device: Mohamed-PC
branch: agent/ui-build/emails-features
task: T-012
started: 2026-08-24T14:20+03:00
eta: ~2h
touching:
  - components/Emails/Features.js
  - styles/style.scss  (append-only, banner "=== Emails: Features ===")
```

Zone slug = the path with `/` → `-` (e.g. `components-Emails.lock.md`).

**Before claiming:** if a lock already covers your path, do **not** take it. Options: pick another zone, or write your request into `brain/STATE.md` under *Waiting On* and tell the Manager.
**Stale lock** (older than ~4h with no commits on its branch) → the Manager, and only the Manager, may clear it.

---

## Git rules (multi-device, multi-agent — this is the part that protects you)

- **Never commit straight to `main`.** Branch per unit of work: `agent/<shortcut>/<short-topic>` e.g. `agent/ui-build/emails-features`, `agent/content/hosting-copy`.
- `git pull --rebase origin main` at the start of every session **and** before every push.
- **Small commits, pushed often.** A long-lived unpushed branch is how two devices collide.
- Commit message: `[<agent>] <what> (T-0xx)` — e.g. `[ui-build] Emails features grid (T-012)`.
- **Brain commits are separate from code commits.** Push the lock/claim on its own, instantly.
- `styles/style.scss` — append only, under your own `// === Page: Section ===` banner. Never reformat, never re-sort, never touch another banner's block. If you must change shared tokens, that is a Manager decision.
- Compiled `styles/style.css` + `.map`: regenerate, and if it conflicts, take **yours after re-compiling from the merged `.scss`** — never hand-merge compiled CSS.
- `package-lock.json` conflict → re-run `npm install` on the merged `package.json`, don't hand-merge.
- Merge to `main` = Manager, after the Tester's report.
- **Never** `git add .` in `Web/Backup/ar` until Known Issue #2 is fixed — `sendgrid.env` is not actually ignored and holds a live key. Stage explicit paths.
- Never `git push --force` to `main`. Never rewrite pushed history someone else may have pulled.

---

## Staying in sync in the same moment

- `brain/STATE.md` is the pulse. Update it when you start, when you finish, and when you learn something that changes another agent's work.
- Anything another agent must know **right now** → *Broadcast* section in `STATE.md`, then push. Don't bury it in the log.
- Before you start: skim today's `brain/logs/<today>.md`. It is the fastest way to know what just happened.
- If you're about to do something that would surprise another agent (renaming a component, changing a data shape, moving an image) → broadcast **first**, act second.

---

## House rules

- **Look before you build.** `brain/components/REGISTRY.md` and `brain/animation/LAB.md` first. Reuse beats rebuild.
- Ambiguous sketch, annotation, or instruction? **Ask the user before implementing.** A confident wrong guess costs more than a question.
- Wireframe/structure gets confirmed before the pretty pass, section by section.
- Nothing is "Done" because it compiles. It's `REVIEW` until the user has seen it.
- Reverted work stays in the log with the reason. That's how nobody repeats it.
