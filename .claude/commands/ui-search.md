---
description: UI Library Searcher — find section/UI ideas and file them into brain/ui-library/
argument-hint: [section or page to find ideas for]
---

Launch the **ui-searcher** agent (subagent_type: `ui-searcher`) in the background for: **$ARGUMENTS**

Pass it: the target page/section, the relevant brief lines from `brain/MANAGEMENT.md`, and anything already
approved or rejected for this section in `brain/ui-library/README.md`.

Before launching, check `brain/STATE.md` for anything that changes the ask.
When it returns, relay the shortlist and its recommendation to the user — the user picks, not you.
