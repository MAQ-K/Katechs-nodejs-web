---
description: Pull, refresh the brain, and broadcast — run when switching device or picking work back up
---

Act as **Manager**. Sync this device with everyone else.

⚠️ **This is the only command that runs git, and it is slow** — `.git` is 1.6 GB. The user invoked it
deliberately, so go ahead, but do not pull or push anywhere else, in any other command, or in any agent.

1. `git status` — if the tree is dirty, stop and show the user before pulling.
2. `git pull --rebase origin main`
3. Read `brain/STATE.md` (Broadcast + Active), `brain/locks/`, today's `brain/logs/`.
4. Reconcile: does `brain/STATE.md` still match reality (`git log`, open branches, lock ages)? Fix drift —
   clear stale locks, move finished rows out of *Work Assigned*, update *Freshly landed*.
5. If anything changed that another agent or device must know, add it to *Broadcast* in `brain/STATE.md`.
6. Stage explicit paths and commit the brain updates on their own (`[manager] sync brain`).
   **Ask before pushing** — never push unprompted.

Then tell the user in 5 lines or fewer: what changed since last time, and what is safe to start now. $ARGUMENTS
