# Running several agents at the same time

**Start here: most of the time you don't need a worktree.**

Agents run no git (see `_SHARED-PROTOCOL.md`), so the thing that used to force separate folders — two
sessions fighting over `.git/index.lock` — is gone. Two sessions in the **same folder** now work fine and see
each other's files instantly, which makes locks and Broadcast lines work with zero setup.

| Situation | What you need |
|---|---|
| Two researchers (`/ag-ui-search`), or anything writing only to `brain/` | **Same folder.** Nothing to set up |
| Agents editing *different* files, no dev server needed | **Same folder** |
| Two agents that each need `npm run dev` | Separate folders — different ports |
| Two agents editing the *same* files | Don't. Re-split the work by page |

Only set up a worktree when the table says so. It costs a clone-sized copy and a second `npm install`.

---

## Worktree setup — only if you actually need one

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
| 1 | PC1 | `katechs-nodejs-web` (main clone) | `/ag-ui-build` | **3000** |
| 2 | PC1 | `../katechs-ui` (worktree) | `/ag-anim` | **3001** |
| 3 | PC2 | normal clone | `/ag-content` | **3002** |

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
- Don't hold it while you think. Take it, write the block, recompile, release.

### Two agents of the *same* kind (e.g. two Searchers)

The zone system assumes different agents own different paths. Two Searchers both write to
`brain/ui-library/` — same zone. Locks can't help. What works instead:

1. **Split by page, never by section.** One page, one researcher. Splitting a page between two produces two
   design directions stitched together, which is worse than either one alone.
2. **Files, not tables.** Nobody edits `brain/ui-library/README.md`. `/lab/ui-library/` reads the entry files
   directly, so saving a file publishes it. Two agents appending rows to one table conflict every run.
3. **Prefix everything with the page** — `<page>-<section>-<slug>.md` and `<page>-<section>-<source>.png`.
   Disjoint names can't collide. **Screenshots especially: binaries cannot be merged**, so a name collision
   silently destroys one.
4. **Neither one runs git.** They write files and report paths; the user pushes. This is also why they can
   share one folder — there is no `.git/index.lock` to fight over.
5. **Cross-brief them.** Each reads the other's filed entries for the sibling page before starting, so the
   pages feel like one site.

### Never
- Two agents on the same `pages/<route>.js`.
- Two agents on `components/Common/**` or `components/Layouts/**` — those are Manager-gated anyway.
- Shared-component tasks (T-013 main components, T-016 pattern refactor) running parallel with page work.
  They can break every page at once, so they get scheduled **alone**.

---

## Keeping the brain in sync across the slots

**Agents run no git.** The user pushes manually. That changes how sync works, and mostly simplifies it:

- **Same folder, two sessions** — they see each other's files *instantly*. Locks, Broadcast lines and filed
  entries need no git at all. This is the cheapest way to run two agents and should be the default.
- **Separate worktrees or separate machines** — they only see each other after the user commits and pushes.
  So don't run overlapping zones across machines; give each machine whole, separate pages.
- **Broadcast still matters**: a data-shape change or a renamed component goes into `brain/STATE.md` →
  *Broadcast* before you act, so whoever reads it next isn't surprised.
- **The user pushes at the end of a working session**, batching several agent runs into one commit. Uncommitted
  work is the only kind that can be lost, so don't let it sit for days.

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

**Same folder (the normal case):** start both agents, have each write one file with its own prefix, and
confirm both files exist and neither overwrote the other.

**Worktrees:** run slot 1 on 3000 and slot 2 on `$env:port=3001` at the same time and confirm both serve
independently. `git worktree list` should show one line per slot.
