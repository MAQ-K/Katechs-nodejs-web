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

## 🚫 Agents never run git. The user pushes manually.

No `pull`, `push`, `add`, `commit`, `status`, `checkout`, `branch`, `merge`, `log`, `diff` — not once, not
for any reason. `.git` here is **1.6 GB** and every call is slow enough to make an agent feel useless.
Agents write files and report the paths they touched. The user stages and pushes when it suits them.

The only exception is `/ag-sync`, which the user invokes deliberately.

## The 5-step loop — every agent, every session

1. **READ** — `brain/MANAGEMENT.md` → `brain/STATE.md` (Broadcast) → `ls brain/locks/`
2. **CLAIM** — *only if the Manager says the run is concurrent and your zone overlaps* — write
   `brain/locks/<zone>.lock.md` and add your row to *Work Assigned*. **A lock needs no git:** sessions in the
   same folder see each other's files instantly.
3. **WORK** — only inside your zone
4. **RECORD** — append to `brain/logs/<today>.md`, update your task row in `MANAGEMENT.md`, and add to
   `STATE.md` → Broadcast only if another agent must know
5. **RELEASE & REPORT** — delete your lock, then report **every path you created or changed** so the user
   knows what to stage

Step 5's path list is what replaces the commit. Do not skip it.

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

## File rules (these replace the old git rules)

- `styles/style.scss` — append only, under your own `// === Page: Section ===` banner. Never reformat, never
  re-sort, never touch another banner's block. Shared tokens are a Manager decision.
- Compiled `styles/style.css` + `.map` — regenerate from the `.scss`; never hand-edit or hand-merge.
- `package-lock.json` — never hand-edit. Re-run `npm install`.
- **Never `git add .`** in `Web/Backup/ar` — `sendgrid.env` is not actually ignored and holds a live key.
  Agents don't stage anything anyway; this is here so the user knows why explicit paths matter.
- Filenames are the collision-prevention mechanism now. `<page>-<section>-<slug>` prefixes mean two agents
  physically cannot write the same file — and **binaries cannot be merged**, so a screenshot name collision
  destroys one silently.

### For the user, when you do push
Stage explicit paths, never `git add .`. Commit message `[<agent>] <what> (T-0xx)` keeps the log readable.
Git housekeeping and why it's slow: `brain/WORKFLOW.md` Part 1.

---

## Staying in sync in the same moment

- `brain/STATE.md` is the pulse. Update it when you start, when you finish, and when you learn something that changes another agent's work.
- Anything another agent must know **right now** → *Broadcast* section in `STATE.md`. In the same folder that's
  visible immediately; across machines it's visible after the user pushes. Don't bury it in the log.
- Before you start: skim today's `brain/logs/<today>.md`. It is the fastest way to know what just happened.
- If you're about to do something that would surprise another agent (renaming a component, changing a data shape, moving an image) → broadcast **first**, act second.

---

## House rules

- **Look before you build.** `brain/components/REGISTRY.md` and `brain/animation/LAB.md` first. Reuse beats rebuild.
- Ambiguous sketch, annotation, or instruction? **Ask the user before implementing.** A confident wrong guess costs more than a question.
- Wireframe/structure gets confirmed before the pretty pass, section by section.
- Nothing is "Done" because it compiles. It's `REVIEW` until the user has seen it.
- Reverted work stays in the log with the reason. That's how nobody repeats it.
