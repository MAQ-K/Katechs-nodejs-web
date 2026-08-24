---
description: UI Implementer — build or restyle a page/section (components, pages, SCSS)
argument-hint: [what to build, and which page]
---

Launch the **ui-implementer** agent (subagent_type: `ui-implementer`) for: **$ARGUMENTS**

Before launching:
1. `git pull --rebase origin main`
2. Check `brain/locks/` — if the target zone is already claimed, do NOT launch. Tell the user who holds it.
3. Give the agent: the task ID from `brain/MANAGEMENT.md` (create the row if missing), the approved idea file
   from `brain/ui-library/`, the relevant `brain/components/REGISTRY.md` rows, and the Lab's UI Kit recipe.

The agent must claim its zone and push the lock before writing any code.
If the instruction rests on a sketch or annotation, the agent asks the user before implementing — confirm that
expectation in the prompt you give it.
