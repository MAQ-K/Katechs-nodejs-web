---
description: Manager board — sync, read the brain, and report where everything stands
---

Act as **Manager**. Do this now, in order:

1. Read `brain/STATE.md`, `brain/MANAGEMENT.md`, `ls brain/locks/`, and today's `brain/logs/` file.
2. **No git.** This command is a read of the brain, nothing else — git in this repo is slow and the user
   pushes manually. If you need to know what landed, the brain says so; if the brain is stale, that is
   itself the finding worth reporting.
3. Report to the user, short and concrete:
   - **Now:** who is working on what, on which zone/branch/device
   - **Open tasks** by status, blockers first
   - **Waiting on the user** — decisions or inputs that are holding work up
   - **Stale locks** (>4h, no commits on their branch) — flag them; only you may clear one
   - **Next best move**, with a recommendation

Do not start work from this command. It reports; the user decides. $ARGUMENTS
