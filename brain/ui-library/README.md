# UI Library — the rules of this folder

**This file is the contract, not the content.** It says what a good entry looks like and what every idea has
to survive. It holds no list of entries and never will.

- **The content** is `inspiration/*.md` — one file per idea.
- **The index** is `http://localhost:3000/lab/ui-library/` — it reads those files directly, so saving a file
  publishes it. Nothing to register anywhere.
- **The format** is `_TEMPLATE.md`.
- **The sources** are `SOURCES.md`.

Owner: Manager. Written by: UI Library Searcher (entry files only). Read by: Manager and you (pick),
UI Implementer (builds), UI Animator (motions).

> ⚠️ **Searchers: never edit this file, and never add a table to it.** Two Searchers appending rows to one
> shared table conflict on every run, and the table shows nothing the Lab doesn't already show.
> **One idea = one new file. That's the whole registration step.**

---

## What every entry must do

1. **Survive this stack.** No Tailwind, no shadcn, no CSS Modules — Bootstrap 5 + global SCSS, RTL Arabic,
   Next.js Pages Router. An idea that exists only as a Tailwind snippet needs a concrete vanilla-SCSS
   translation plan, or it's `Rejected`.
2. **Cite its sources.** The `ui-ux-pro-max` row (file + row), the reference URL, the screenshot. An idea with
   no citation is an opinion, and opinions don't go in the library.
3. **Say what is specifically good** — the layout mechanic, the hierarchy, the density. Never "looks modern".
4. **Name the fix it is.** A hierarchy fix, a density fix, a trust fix. If it's only decoration, say so
   honestly and let it be judged as decoration.
5. **Point at the real component** it would replace (`components/<Page>/<Section>.js`).
6. **State the motion tier** from `brain/animation/LAB.md`, or "none".
7. **List the data it needs** so Content can prepare `data/<page>/data.js`.
8. **Name the risks** — heavy assets, long Arabic strings breaking a tight layout, mobile collapse, a11y.

## Naming — this is what keeps two Searchers from destroying each other's work

```
inspiration/<page>-<section>-<slug>.md
inspiration/assets/<page>-<section>-<source>.png
```

`seo-*` and `dm-*` can never collide. **Screenshots especially: binary files cannot be merged**, so a name
collision silently destroys one of them rather than raising a conflict you get to resolve.
Reference images go in `inspiration/assets/` — **never** in `public/`.

## Verdicts

`Proposed` · `Approved` (Manager/user picked it) · `Built` (link the component) · `Rejected` (say why)

Set it on the `**Verdict:**` line inside the entry. The Lab renders it as a coloured chip.
Only the Manager or the user moves something off `Proposed`.

## Working alongside the other Searcher

The pages ship together and must read as one site. Before starting, read the sibling page's filed entries and
either **match the established direction or say explicitly why you're departing from it**. What carries across
pages: the `styles.csv` / `colors.csv` rows in play, the card / radius / shadow conventions from the Lab's UI
Kit, the motion tiers, and which existing primitives get reused.
