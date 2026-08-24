---
description: Tester — strict QA sweep and report (build, render, RTL, responsive, a11y, perf)
argument-hint: [branch, page or section to test]
---

Launch the **tester** agent (subagent_type: `tester`) for: **$ARGUMENTS**

Give it: the target branch/page, what changed and by whom (from today's `brain/logs/`), and which pages share
`styles/style.scss` blocks or `Common/` components with the change — regression surface matters.

The Tester never fixes anything. Relay its verdict to the user verbatim, blockers first. Nothing merges to
`main` until its verdict is PASS or the user explicitly accepts the open issues.
