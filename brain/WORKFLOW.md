# The guide — keeping everything safe, without the pain

Read `brain/MANAGEMENT.md` for *what* we're building. This file is *how to work* without losing anything,
breaking anything, or waiting on a slow repo.

---

## Part 1 — Why git is slow here, and how to fix it

It isn't GitHub. It's this repo. Measured 2026-08-24:

| | Size | What it is |
|---|---|---|
| `.git/lfs` | **1.2 GB** | Git LFS cache — the `.rar` backups. `.gitattributes` routes `*.rar` through LFS |
| `.git/objects` loose | **434 MB** | Never garbage-collected. Only 1.1 MB is actually packed |
| tracked files | 686 | The real project is *small*. The weight is all history and LFS |

**434 MB of loose objects is the day-to-day killer.** Every git command has to stat tens of thousands of
individual files. The 1.2 GB of LFS is what makes push and pull crawl.

### Fix it once (safe, local, no history rewrite)

```bash
git gc                 # packs the loose objects. Takes a few minutes, once.
git count-objects -vH  # before/after, to see it worked
```

Then stop feeding it:

1. **Don't commit `.rar` backups.** That's the 1.2 GB. Keep backups outside the repo — a synced folder or a
   drive. `*.rar` is already in `.gitignore`, but `.gitattributes` still routes any that slip through to LFS.
2. **Exclude `.git` from your antivirus scan.** On Windows this alone often halves git times.
3. If push/pull is still slow, it's LFS pulling objects. `git lfs prune` clears old local LFS files you no
   longer need (it does **not** touch the server).

---

## Part 2 — Fix these two things before anything else

### 🔴 `.gitignore` is corrupted, and a live API key is exposed by it
`Web/Backup/ar/.gitignore` **line 75** reads:

```
builds<NUL>e<NUL>n<NUL>d<NUL>g<NUL>r<NUL>i<NUL>d<NUL>.<NUL>e<NUL>n<NUL>v
```

Someone appended `sendgrid.env` with a UTF-16 writer (Windows PowerShell `>>` does this) onto a UTF-8 file,
with no newline first. Two consequences:

- the `builds` rule is destroyed, and
- **`sendgrid.env` is NOT actually ignored** — it holds a live SendGrid key, and one `git add .` publishes it.

14 stray NUL bytes make the whole file read as binary to tooling.

**Fix:** delete line 75 and re-add the two rules on their own clean lines (`builds`, `sendgrid.env`), saved as
**UTF-8**. In PowerShell use `Set-Content -Encoding utf8`, never bare `>>`.
Then rotate the SendGrid key regardless — assume it's burned (`MANAGEMENT.md` Known Issues #1 and #2).

### 🟠 Three commits are stranded on a branch
```bash
git merge --ff-only agent/ui-search/seo-page-library
git push origin main
```
Clean fast-forward, nothing to resolve. Until this runs, the SEO UI library (T-010) and the interaction
library (T-023) exist **only on this machine**.

---

## Part 3 — The daily rhythm

**Start**
1. `git pull --rebase origin main`
2. Read `brain/STATE.md` (Broadcast + Active) and `ls brain/locks/`
3. Skim today's `brain/logs/`

**Before touching app code** — claim it:
- write `brain/locks/<zone>.lock.md`, add your row to *Work Assigned* in `MANAGEMENT.md`
- commit and push **that alone**, immediately. An unpushed lock is not a lock.

**While working**
- Stay in your zone. Small commits. `[<agent>] <what> (T-0xx)`.
- **Never `git add .`** in `Web/Backup/ar` — see the `.gitignore` problem above. Stage explicit paths.

**Finish**
1. Append to `brain/logs/<today>.md` — what changed, why, what's left, what bit you
2. Update your task row in `MANAGEMENT.md` and the board in `STATE.md`
3. Delete your lock and your *Work Assigned* row
4. Commit, push

The unglamorous step 4 is the whole system. Everything else is recoverable; unpushed work on one machine is not.

---

## Part 4 — The rules that prevent every collision we can actually predict

1. **`styles/style.scss` is its own lock.** 12,733 lines, every page in it. One holder at a time, whatever
   page they're on. Append under `// === Page: Section ===`; never reformat another block.
2. **Compiled CSS is never hand-merged.** On conflict in `style.css`/`.map`: recompile from the merged
   `.scss` and take that.
3. **Never two agents on the same `pages/<route>.js`.**
4. **`components/Common/**` and `components/Layouts/**` are Manager-gated.** Changing one changes every page.
5. **Data shape is a contract.** Announce a change in `STATE.md` → Broadcast *before* making it, and keep the
   old key until the Implementer has moved.
6. **`package-lock.json` conflict** → re-run `npm install` on the merged `package.json`. Don't hand-merge.
7. **Shared-component tasks (T-013, T-016) run alone.** Never parallel with page work.

Running more than one agent at once: `brain/PARALLEL.md`. Two worktrees on one PC, own ports
(`server.js` reads **lowercase** `process.env.port`), own `node_modules`.

---

## Part 5 — Not losing work

- **Committed is safe.** Even on the wrong branch, even unpushed — `git reflog` finds anything from the last
  ~90 days. Nothing that's been committed has ever actually been lost.
- **Uncommitted is not safe.** Switching branches, a bad merge, a stray `git checkout .` all discard it.
  Commit before you switch anything.
- **Not sure? Commit first, tidy after.** A messy commit you can amend beats work you can't get back.
- `git stash` is a drawer people forget they opened. Prefer a throwaway commit on a branch.
- Never `git push --force` to `main`. Never rewrite history someone else may have pulled.

---

## Part 6 — Across machines and across chats

**Chats do not sync.** Transcripts are local files in `~/.claude/projects/<folder-slug>/`. On the same
machine: `claude --continue`, or `claude --resume` for a picker. On another machine, don't chase them.

**`brain/` is the handoff.** A fresh chat on PC2 that reads `MANAGEMENT.md` → `STATE.md` → today's log knows
every decision, constraint and next step — no transcript needed. That only holds if the brain is pushed,
which is why "finish → commit → push" is the one step that can't be skipped.

**See the work:** `npm run dev` → `http://localhost:3000/lab/` — motion, components, UI library.
Dev only; `/lab/` 404s in production.

---

## Part 7 — Known landmines

| | |
|---|---|
| Production build is **broken** | `pages/offers.js` — raw `<script>` in JSX since 2026-08-19. Nothing can ship until it's fixed (T-022) |
| `sendgrid.env` not ignored | Live key. Stage explicit paths, never `git add .` |
| `bxs-*` icons | Glyphs missing from the bundled font — render as empty boxes. Use `bx-*` |
| Broken images / odd webpack errors | Clear `.next/cache` and restart before debugging anything else |
| `npm audit` | 32 vulnerabilities, 9 critical, incl. prototype pollution in `swiper` |
