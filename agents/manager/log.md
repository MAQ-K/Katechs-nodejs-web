# Manager log

Newest first. One entry per session: what we did, files touched, what's open.

## 2026-11-19
- Reviewed the project: production build broken (`offers.js`), contact API gaps, knoztech.com domain,
  19,500-line `style.scss`, 17 unused component folders.
- Reorganized the repo: deleted junk and logs, moved backup archives to `D:\Work\katechs-backups`,
  moved notes into `docs/`, content into `content/`, images into `design-assets/`. Removed `brain/` and
  the old agents. App rename to `app/` still pending (VS Code lock).
- Built the Katechs Planner (dark, tabs: Manager, Design, Content, Agents, Archive) and filled it with
  12 plans, 41 tasks, 7 planned agents, 8 content folders and the design library.
- Created the Manager: `agents/manager/MANAGER.md`, `MEMORY.md`, this log; loaded from `CLAUDE.md`.
- Files touched: `CLAUDE.md`, `agents/manager/*`, `.claude/launch.json`, lab pages and `utils/labData.js`,
  `scripts/build-content-new.js`, two code comments.
- Later: moved `Web/Backup/ar` contents into `app/` item by item (the folder itself was locked by an old
  dev server on port 3000). Verified on port 3001: /, /lab/*, /services/, /hp-new/, /web-design-new/ all 200.
- Fixed the production build (T-022): `app/pages/offers.js` had a raw Google Ads `<script>` pasted into
  JSX plus a nested `<Head>`. Kept one `<Script>` tag with the conversion event inside it.
  `npm run build` passes. Added `/manager` command (`.claude/commands/manager.md`); the Manager now opens
  with "Manager here."
- Moved the planner into the project: exported the claude.ai data to `agents/manager/planner.json`,
  page at `/lab/planner/` (`app/pages/lab/planner.js` iframe → `app/pages/api/lab/planner.js` serving
  `app/components/Lab/planner.html` + a small db adapter that reads/writes the JSON, polling every 3 s).
  Tested on port 3001: page renders, all data present, set/update/delete work, bad input → 400.
  Added Planner to the lab nav and hub.
- Archived all 12 old plans (user: lots to do, short time). Planner page: plans can be `archived`
  (Archive tab → Old plans, Restore button); tasks of archived plans are hidden from the Manager tab;
  "+ New plan" on the plan card (first new plan becomes current); per-plan **diagram** under the plan
  card (boxes + arrows, saved as `plan.diagram = {nodes:[{id,x,y,text}], edges:[{id,from,to}]}`).
  Tested with a temporary plan + diagram on port 3001, then restored planner.json.
- Reviewed the user's new plan L1st "Pages Finish" (19–26 Nov). User correction: they want a thinking
  partner on plans, not a schedule (saved to memory). Designer = a human who needs a brief.
- Created the **Art Director** agent (`.claude/agents/art-director.md`, `agents/art-director/NOTES.md`),
  added to the planner's Agents tab.
- Planner Design tab: the old hand-drawn specimens (written when the planner lived on claude.ai, with no
  access to the site CSS) are gone. "Current system" now embeds the real `/lab/design-system/`; new
  "New design system" sub-tab embeds the new `/lab/new-design-system/` page. LabShell got `?embed=1`
  (no lab bar/head, hides WhatsApp + back-to-top). Tested on 3001.
- Art Director analysed the 5 inspirations (`new-design-system/inspiration-analysis.md`).
- Prepared the **Claude designer** handoff in `new-design-system/claude-designer/`: Art Director wrote
  README / 01-design-direction (update, not new) / 02-current-design-system / 03-inspirations; Manager
  exported 6 pages as static HTML + desktop/mobile screenshots (`pages/`, script in scratchpad
  `export-pages.mjs`: CDP, scroll, inline CSS, copy assets) + the lab DS page, and filled README §7.
  Folder ~130 MB (homepage videos/screenshots). User: the homepage for the designer is `/hp-new/`
  (`pages/01-homepage/`); the live `/` moved to `pages/01b-homepage-live-old/` for comparison.
- Open: discuss the new design system (7 open questions on the page); stop the old port-3000 server and
  delete the empty `Web/`; start the Designer Brief; T-004, T-039, T-037, T-038.
