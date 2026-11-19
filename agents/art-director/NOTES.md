# Art Director — notes

## Status
_2026-11-19_ — Agent created. The Designer Brief (`docs/designer-brief/BRIEF.md`) does not exist yet.

_2026-11-19 (session 2)_ — Analysed the 5 design-system inspirations →
`new-design-system/inspiration-analysis.md` (per image, shared patterns, options for each OPEN item
in `app/pages/lab/new-design-system.js`, DRAFT tokens, 9 questions for the user). Nothing decided.
Key findings: all 5 use **borderless rounded panels** (tone shift, not lines); all use a light grey
ground `#EFEFEF`–`#F6F7F8`, never white page; two-tone headings in 4/5; pill buttons; the
references' imagery is mostly AI/3D-looking (user likes layouts, not images). UX Creatives
(`7234704e…jpg`) is the model for device mockups: real laptop, 3/4 angle, tight crop, deep backdrop.
My leaning: ground `#F5F6F8` (cool grey) with navy-black ink; panels darker than ground, no shadow.
Next: wait for the user's answers, then start the Designer Brief visual-language section from them.

_2026-11-19 (session 3)_ — Prepared the hand-off pack for **the Claude designer** (AI designer, Claude
Design) in `new-design-system/claude-designer/` (Manager exports the real pages into `pages/`, not mine).
User's key point: it is an **UPDATE of the current system, not a rebrand** → written as what stays /
what changes. Wrote `README.md` (context, hard rules, delivery = self-contained HTML per page +
notes + tokens list into `delivery/`; "Pages" section left for the Manager), `01-design-direction.md`
(stays / changes, 8 "Default — to confirm" items with an alternative to show, DRAFT token table
current → updated), `02-current-design-system.md` (3 layers: legacy cyan, `.ds-*` navy/cyan emboss,
`.ds-new-*` 2026-09-01 bordered monochrome), `03-inspirations/README.md`; copied the 5 inspirations +
`inspiration-analysis.md` into `03-inspirations/` and `docs/design-system/inspirations/*` into
`02-current-design-system-refs/`.
Defaults I set (all "to confirm" with the user): tone panels for siblings only; no white surfaces
(panels `#ECEEF1` darker than ground `#F5F6F8`); cool ground; headings stay 700 two-tone; no accent in
UI (alternative shows existing cyan `#1dd3f8`, final accent PENDING); right-aligned titles; plain
arrow glyph in pill, no circle; no shadows. Draft colours chosen for contrast: `--ds-muted #5F6878`
(≥4.5:1 on both grounds), `--ds-quiet #7D8693` (large text only, 3.4:1), `--ds-navy-hover #0F2E68`
(= Sass `lighten(#0a1f44, 8%)`).
Found: the live content pages (`/services/emails-new/` theme) use the navy/cyan + emboss look, not
the `.ds-new-*` bordered layer.
Next: review the Claude designer's delivery against the hard rules; feed the user's picks on the
8 defaults into `app/pages/lab/new-design-system.js` (via the Manager) and the Designer Brief.

_2026-11-19 (Manager)_ — The user decided 7 of the 8 "to confirm" items: ground `#F2F2F2`, white panels
OK, borderless panels for siblings, no accent, headline weight by level (display light / section bold),
titles centred for openers + right-aligned for content, plain arrow in navy pill. Shadows still open.
Written into `claude-designer/01-design-direction.md` §4 and README. Use these in the Designer Brief.

## Where we work
- **`new-design-system/`** (repo root) — the user's working folder for the new design system
  (created 2026-11-19). Everything for the new system goes here.
- `new-design-system/design system inspirations/` — the user's inspiration images (5 on 2026-11-19).
- Analyses you write go in `new-design-system/` too, as Markdown.

## Decided (by the user)
- The site's visuals are made by a human designer who doesn't know web design. They work from this brief.
- Visual types: **edited photos** and **device mockups** (screens showing websites).
- There will be **a lot** of visuals.
- The brief is written in **English**.
- It must contain at least: service brief, design goals, inspirations.
- User taste: pure white is too harsh; no boxes, no borders, no icons; nothing AI-looking.
- The design system is being recreated (plan L1st "Pages Finish", 2026-11-19 → 2026-11-26).

## Open questions
- The 8 "Default — to confirm" items in `new-design-system/claude-designer/01-design-direction.md` §4.
- Design direction (background colour, mood) is not decided yet. Mark dependent parts PENDING.
- From the inspiration analysis (see section 5 there): does "no boxes" allow borderless tone panels?
  Is white OK as a small surface? Ground temperature? Light vs bold headlines? Accent or none?
  Centred vs right-aligned titles? Are arrow circles "icons"? What did the user like in each image?
- Which pages and sections get visuals first?
- Designer's tools (Photoshop? Illustrator? 3D?) → decides which source formats to ask for.
- Delivery: where does the designer send files, and how?

## Sources
- Service content: `content/Email-Services/`, `content/SEO-Services/`, `content/Website-Services/`,
  `content/web services/`
- Service briefs: `app/data/<page>/brief.md`
- Existing inspiration images: `docs/homepage/inspirations/`, `docs/design-system/inspirations/`,
  `app/public/images/*inspiration*`
- Pages with the ready content: `/web-design-new/**`, `/services/emails-new/`, `/seo-new/*`
