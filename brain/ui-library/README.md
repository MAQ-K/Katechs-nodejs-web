# UI Library
> Owner: UI Library Searcher. Consumers: Manager (picks), UI Implementer (builds), UI Animator (motions).

`inspiration/` holds one file per idea — a section pattern, a reference site, a layout, a component concept.
Nothing here is code for the app. It is the menu the Manager orders from.

## Index
| File | Section type | For page | Verdict |
|------|--------------|----------|---------|
| _(empty — first search pending)_ | | | |

**Verdict vocabulary:** `Proposed` · `Approved` (Manager/user picked it) · `Built` (link the component) · `Rejected` (say why)

Rules:
- Every entry must state **how it survives this stack**: no Tailwind, no shadcn, Bootstrap 5 + global SCSS,
  RTL Arabic, Pages Router. An idea that only exists as a Tailwind snippet needs a vanilla-CSS translation plan.
- Screenshots/reference images → `brain/ui-library/inspiration/assets/`. Never into `public/`.
- Link the source. Say what specifically is good about it, not "looks modern".
