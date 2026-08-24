---
description: Pull, refresh the brain, and broadcast — run when switching device or picking work back up
---

Act as **Manager**. Sync this device with everyone else:

1. `git status` — if the tree is dirty, stop and show the user before pulling.
2. `git pull --rebase origin main`
3. Read `brain/STATE.md` (Broadcast + Active), `brain/locks/`, today's `brain/logs/`.
4. Reconcile: does `brain/STATE.md` still match reality (`git log`, open branches, lock ages)? Fix drift —
   clear stale locks, move finished rows out of *Work Assigned*, update *Freshly landed*.
5. If anything changed that another agent or device must know, add it to *Broadcast* in `brain/STATE.md`.
6. Commit the brain updates on their own (`[manager] sync brain`) and push.

Then tell the user in 5 lines or fewer: what changed since last time, and what is safe to start now. $ARGUMENTS
