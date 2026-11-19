# Manager memory

## Where we left off
_Updated 2026-11-19_
- Manager created today. Next step: **build the rest of the team together**, one agent at a time.
- 2026-11-19: app moved to `app/` and verified (all main routes 200 on port 3001). Leftover: an empty
  `Web\Backup\ar` folder held open by an old dev server (node pid 7892 under cmd 7044, started 10:42 from
  the old folder, still on port 3000 and returning 500). User stops it, then deletes `Web/`.
- 2026-11-19: `pages/offers.js` fixed, `npm run build` passes (T-022 in review). After the next deploy,
  check the Google Ads "مشاهدة صفحة" conversion still records.
- 2026-11-19: Planner moved into the project: `localhost:3000/lab/planner/`, data in
  `agents/manager/planner.json`. The claude.ai copy (artifact MiDKuYoSVdduEany33P8tm) is retired and no
  longer updated; delete it only if the user asks.
- 2026-11-19: User archived all 12 old plans (G1–G12) — "a lot to do in a short time", starting fresh.
  Their 41 tasks are now all marked `done` in the planner (not confirmed with the user, see below).
- 2026-11-19: Current plan is L1st "Pages Finish" (2026-11-19 → 2026-11-26). The Claude designer delivered
  (`claude-designer/delivery/`); **the user is not satisfied with the result**. Parked: we work on it later
  (T-045). Start by finding out what's wrong with it before asking for a new round.
- Urgent and open: SendGrid key rotation (T-004),
  confirm the knoztech.com domain (T-039), server-side reCAPTCHA + escaping on the contact APIs (T-037, T-038).

## The user
- Owns the Katechs website project (RTL Arabic site for katechs.com). Writes to the Manager in English.
- Works from more than one device. Syncs by pushing and pulling git manually. Agents never run git.
- Likes things simple. Asked for a simpler, dark planner over a feature-heavy one.
- Wants to plan *with* the Manager and decide, not be handed finished surprises.

## Design update — decided 2026-11-19 (user answered the 8 questions)
- An **update** of the current system, not a new one.
- Ground `#F2F2F2` neutral grey · white panels OK · borderless panels for sibling items only ·
  **no accent** (cyan retired) · headline weight by level (display light, section titles bold) ·
  titles centred for openers / right-aligned for content sections · navy pill + plain left arrow.
- **Shadows still open**: user "doesn't know" — decide by eye from the Claude designer's versions.
- Recorded in `new-design-system/claude-designer/01-design-direction.md` §4 and the lab page.

## Design taste (from plan L1st, 2026-11-19)
- Pure white backgrounds are too harsh on the eye — wants a softer ground.
- Dislikes boxes and borders, dislikes icons, dislikes anything that looks AI-generated.
- The design system is being recreated; the 2026-09-01 monochrome `.ds-new-*` (bordered cards) is
  no longer the target.
- **`new-design-system/`** (repo root, created by the user 2026-11-19) is the working folder for the new
  system: inspirations in `design system inspirations/`, analyses as Markdown there.
- The new system's live page is `app/pages/lab/new-design-system.js` (WHY / DECISIONS / OPEN lists, then real
  CSS + specimens as decisions land). Planner → Design → "New design system" embeds it; "Current system"
  embeds the real `/lab/design-system/`. Record every decision there.
- Site visuals are made by a **human designer** who doesn't know web design. They need a written
  document (not made yet): service brief, design goals, inspirations. That's the "designs / visuals"
  part of plan L1st.

## How we work
- **Think with the user, don't jump to execution** (2026-11-19, user correction). When they share a plan
  or a problem, help figure out the solution: ask, lay out options and trade-offs, point out gaps. Don't
  answer with a schedule or start building unless they ask for that.
- Ask before building a guess from an ambiguous sketch or annotation; the user reverts hard on misses.
- Desktop sections fill exactly one screen below the sticky bars. Never shrink, never overflow.
- UI references: 21st.dev and dribbble.com, section by section, several picks, as screenshots, not code.
- Design passes use the `ui-ux-pro-max` skill, then a `design-taste-frontend` check.
- Show work before calling it done (`review` status until the user has seen it).

## Standing decisions
- 2026-11-19: `brain/` and the old 6-agent system removed. The planner and this memory replace them.
- 2026-11-19: Repo layout is `app/`, `content/`, `docs/`, `design-assets/`. Backups moved out to
  `D:\Work\katechs-backups` (delete later, T-044).
- 2026-11-19: The Manager is the default identity of every session in this repo, memory kept in the repo.
- 2026-10-15: Web services split into a hub + one page per service. The consulting area on the hub
  stays untouched.
- 2026-09-01: Design direction is monochrome (`.ds-new-*`, navy ink, no cyan). Rolling out page by page.

## Team
- **Claude designer** — third-party AI designer (Claude Design), added 2026-11-19. Handoff folder
  `new-design-system/claude-designer/` (README, 01 direction = an UPDATE not a new system, 02 current
  system, 03 inspirations, pages/ snapshots). Delivers back into `claude-designer/delivery/`. The 8
  "Default — to confirm" items in 01-design-direction.md are for the user to decide from its versions.
- **Art Director** (`.claude/agents/art-director.md`, notes in `agents/art-director/NOTES.md`) —
  created 2026-11-19. Writes the Designer Brief (`docs/designer-brief/BRIEF.md`) for the human designer:
  edited photos + device mockups, English, many visuals. Brief not started yet.
- Before the Art Director, only the Manager existed. The planner's Agents tab lists the planned roles (Prism, Forge,
  Pulse, Quill, Beacon, Lens). Each becomes real when the user and the Manager build it together.
