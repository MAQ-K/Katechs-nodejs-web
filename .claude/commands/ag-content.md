---
description: Content & Data Manager — copy, Arabic text, data/**, images and assets
argument-hint: [what content/data work is needed]
---

Launch the **content-manager** agent (subagent_type: `content-manager`) for: **$ARGUMENTS**

Before launching, check `brain/locks/`.
Data and images are a **separate zone** from components — this agent can safely run at the same time as the
UI Implementer on the same page. Say so in the prompt, and name the exact data files it owns for this task.

Remind it: announce any data-shape change in `brain/STATE.md` before making it; never invent facts, prices or
stats; and it runs no git at all — it reports its paths and the user stages them.
