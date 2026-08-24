# Running 3 agents at the same time

Two Claude Code sessions **cannot share one working tree** — they'd overwrite each other's files and fight
over port 3000. **Git worktrees** fix it: separate folders, separate branches, one shared git history.

---

## One-time setup on PC1

```bash
cd d:/Work/katechs-nodejs-web

git worktree add ../katechs-ui      -b agent/ui-build/<topic>
git worktree add ../katechs-content -b agent/content/<topic>

# node_modules is NOT shared between worktrees — install once per worktree
cd ../katechs-ui/Web/Backup/ar      && npm install
cd ../katechs-content/Web/Backup/ar && npm install
```

Then open a Claude Code session in each folder. Each one is a separate agent slot.

## The slot map

| Slot | Machine | Folder | Agent | Dev port |
|------|---------|--------|-------|----------|
| 1 | PC1 | `katechs-nodejs-web` (main clone) | `/ui-build` | **3000** |
| 2 | PC1 | `../katechs-ui` (worktree) | `/anim` | **3001** |
| 3 | PC2 | normal clone | `/content` | **3002** |

### ⚠️ Port gotcha — verified, costs an hour if you miss it
`server.js` reads **`process.env.port`** — *lowercase*. `PORT=3001` does nothing; you get a silent
"port already in use" fight on 3000.

```powershell
# PowerShell (this machine)
$env:port=3001; npm run dev
```
```bash
# Git Bash
port=3001 npm run dev
```

---

## Zones — who may touch what, simultaneously

| Agent | Zone | |
|-------|------|---|
| UI Implementer | `components/<Page>/**`, `pages/<route>.js` | + the SCSS lock (below) |
| Content & Data | `data/**`, `public/images/**` | never JSX, never SCSS |
| UI Animator | `brain/animation/**`, `components/Common/` motion primitives | |

That triple is safe to run at the same moment on the same page. Anything else needs the Manager.

### 🔒 `styles/style.scss` is its own lock zone
12,733 lines. One file. Every page is in it. **This is the highest-collision surface in the repo** — a
parallel session that ignores this will produce a merge conflict in compiled CSS, which cannot be
hand-merged safely.

- Only one agent holds `brain/locks/styles-style-scss.lock.md` at a time — **no matter which page they're on.**
- Holding it means: append your block at the end under `// === <Page>: <Section> ===`. Never reformat,
  never re-sort, never touch another banner's block.
- Recompile to `.css` / `.css.map`. If those conflict: **discard both sides and recompile from the merged
  `.scss`.** Never hand-merge compiled CSS.
- Don't hold it while you think. Take it, write the block, recompile, push, release.

### Never
- Two agents on the same `pages/<route>.js`.
- Two agents on `components/Common/**` or `components/Layouts/**` — those are Manager-gated anyway.
- Shared-component tasks (T-013 main components, T-016 pattern refactor) running parallel with page work.
  They can break every page at once, so they get scheduled **alone**.

---

## Keeping the brain in sync across the slots

`brain/` is duplicated in every worktree and on every machine. There is no shared live file — so the
protocol *is* the sync:

1. **`/sync` at the start of every slot.** `git pull --rebase origin main`, read `STATE.md` + `locks/`.
2. **Claim → commit → push immediately**, on its own commit, before writing any code. An unpushed lock is
   not a lock; the other slot cannot see it.
3. Broadcast anything cross-cutting (a data-shape change, a renamed component, a moved image) to
   `brain/STATE.md` → *Broadcast*, push, **then** act.
4. **Release → commit → push** the moment you finish. A forgotten lock blocks a teammate for hours.
5. Manager merges to `main` after the Tester's report. Slots never merge each other's branches.

Re-pull before every push (`git pull --rebase origin main`) — three slots means `main` moves while you work.

---

## Cleanup

```bash
git worktree list                       # what exists
git worktree remove ../katechs-ui       # after its branch is merged
git worktree prune                      # if a folder was deleted by hand (don't do that)
```

Each worktree has its own `.next/` and `node_modules/` — a corrupted `.next/cache` in one slot doesn't
touch the others, and `rm -rf .next/cache` is always safe to do in your own slot only.

---

## Sanity check before you trust it

```bash
git worktree list                 # 3 lines, 3 different branches
```
Run slot 1 on 3000 and slot 2 on `$env:port=3001` at the same time — both serve independently.
Take a lock in each, push, and confirm the other slot sees it after `/sync`.
