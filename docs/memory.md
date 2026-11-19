# memory — Web Services split (hub + one page per service)

> Shared reminder for you and Claude: what we're doing right now and where we left off.
> Update the **Where we left off** section at the end of every session.

## The goal
- `/services/` becomes a **hub**: same design as before, but each service shows only a short brief and
  a button to its own page.
- **Every service gets its own page** with the full detail (plans, FAQ, store journey).
- **Web consulting (استشارات وتحسين) stays on the hub exactly as it was.** Don't touch it, and it gets no page.
- The navbar's **مواقع ويب** item becomes a dropdown list.
- The old page is kept as **old-web-services**.

## Done — 2026-10-15
| What | Where |
|---|---|
| Old page snapshot (frozen copy of `/services/` before the split) | `pages/services/old-web-services.js` → `/services/old-web-services/` |
| Hub: the button goes to the service page, the checklist is removed, consulting is untouched | `pages/services/index.js` (`BUILT_AREAS[].page` + the `AreaOverview` override) |
| Service pages (one shared file): hero → overview → plans → FAQ, and for the store: journey → capabilities → store plans → CTA | `pages/services/[area].js` → `/services/custom-website/`, `/services/wordpress/`, `/services/online-store/` |
| Navbar dropdown: all web services, custom website, WordPress, online store, consulting (`/services/#type-4`) | `components/Layouts/Navbar.js` (`webServices` list at the top) |
| Smooth-scroll ownership for the old page | `pages/_app.js` (`pageOwnsScroll`) |

All five routes return 200. An unknown slug like `/services/nope/` returns 404.

## Decisions we made (change them if they're wrong)
- **Slugs:** `custom-website`, `wordpress`, `online-store`. To rename one, edit the `SERVICES` map in
  `[area].js`, the `page:` values in `index.js` and the hrefs in `Navbar.js`.
- **Hub "less detail"** means the checklist (`points`) is hidden and the main button reads "تفاصيل الخدمة والباقات".
  The heading, body, image and the "تحدث معنا" link stay. Data in `data/services/data.js` is unchanged.
- **The service page hero** reuses `HeroBuildSmarter`, with the title and brief from `serviceNav`. The background
  is still the placeholder image (`heroMedia`).
- **`/services/website-design/`** (the navbar's old target for مواقع ويب) is **no longer in the navbar**.
  The page still exists. Decide whether to delete it or redirect it.

## Open / next
- [ ] Look at all of it in the browser: hub, the 3 service pages, and the dropdown on desktop and mobile.
- [ ] Give each service page its own hero image and its own copy (it currently reuses the hub placeholder and nav brief).
- [ ] What to do with `/services/website-design/`: redirect it to `/services/`, or keep it?
- [ ] The hub's `ServiceNav` cards still scroll to the in-page areas. Decide whether they should link to the service pages instead.
- [ ] The prices on the plan cards are still `TODO(prices)` placeholders.

## Where we left off
2026-10-15 — The first version of the split is built. Nobody has checked it visually yet. Next step: user review.
