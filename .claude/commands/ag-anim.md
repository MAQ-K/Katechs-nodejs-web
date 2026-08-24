---
description: UI Animator — motion, 3D, hover and interactivity (Motion Lab)
argument-hint: [what should move, and where]
---

Launch the **ui-animator** agent (subagent_type: `ui-animator`) for: **$ARGUMENTS**

Before launching, check `brain/locks/` and point the agent at
`brain/animation/LAB.md` plus the specific component(s) involved.

Remind it in the prompt: reduced-motion fallback is mandatory, no always-on rAF loops, no new heavy
dependency without asking, RTL-aware direction. If it uses a ⏳ item from the Lab, it ports that item into
`LAB.md` in the same run (task T-002).
