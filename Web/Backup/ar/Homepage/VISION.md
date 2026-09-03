# Homepage — vision & decisions

> The user's vision for the new homepage, plus every decision made along the way.
> Filled in as we go. This is the file a future session reads to understand *why* the
> homepage looks the way it does.

## Vision

_(awaiting the user's description)_

## Goals for the page

_(what the homepage must accomplish — who it speaks to, what action it should drive)_

## Decisions log

| Date | Decision | Why |
|------|----------|-----|
| 2026-09-03 | Rebuild on an independent route `pages/hp-new.js` + `components/HpNew/`, leaving `pages/index.js` live and untouched | 8 of the current homepage's 12 sections are `components/Common/**`, shared sitewide — editing them in place would change every page at once |
| 2026-09-03 | Sections are self-contained `styled-jsx`, no `styles/style.scss` | `style.scss` is 12,733 lines and its own lock zone; staying out of it means the rebuild cannot break another page and is trivially reversible |
| 2026-09-03 | Hero is a SLIDER, not a static banner | The sketch shows 3 dots bottom-right. One background video stays put; only the text cross-fades |
| 2026-09-03 | Domain search button sits on the RIGHT | User's explicit call, matching the sketch as drawn. Noted trade-off: in RTL the caret starts at the right edge, so the button sits where typing begins — given a hard min-width and a divider so the two do not read as one field |
| 2026-09-03 | Domain search hands off to WHMCS, no inline availability check | No domain API exists in this codebase, and WHMCS already owns the cart, pricing and TLD list. A plain GET form means it works with JS disabled |
| 2026-09-03 | The pill row is a floating section navigator, not decoration | User: "to make it better UX moving between the sections of the homepage". Five targets: domain, web services, app dev, mail, marketing |
| 2026-09-03 | Web services brief puts the talk LEFT, image RIGHT | The sketch as drawn, user's call. This is the MIRROR of `components/Services/ServiceArea/Overview.js`, which deliberately puts text right so an Arabic reader meets the headline first. Both are intentional — do not reconcile them without asking |
| 2026-09-03 | Web services content is imported from `data/services/data.js`, not copied | One source for the plan cards, client list and brief copy. Copying is how two pages start quoting different prices for the same package |
| 2026-09-03 | The homepage gets its OWN top nav, `components/HpNew/HeroNav.js` | The brief asked for tabs on the hero slide. `Layouts/Navbar.js` is rendered by every page and is the Manager-gated T-013 zone — the project rule is never to edit a shared component for one page. Promoting this sitewide is a separate, deliberate run |
| 2026-09-03 | Nav is transparent over the hero, glassy after it | `descrition.md` said "invisable navbar or glassy" — this is both, in that order. Keeping it fixed means site navigation does not disappear once you scroll |
| 2026-09-03 | Plan prices stay as "—" | The source data marks them `TODO(prices)` with an explicit note that published prices are a commitment to customers and must never be inferred |

## Open questions

- Which of the 12 current sections survive into the new homepage, and in what order?
- **The "custom" plans tab has no content.** The services page has four areas and none of them is "custom" — it renders an empty state pending copy and plans.
- **The hero design notes in `descrition.md` are not applied yet** (dark blue shade, glassy/invisible navbar with white tabs + logo, hero + domain together at 100vh, modern, one h1 — the h1 rule is already satisfied). Those are the hero DESIGN pass.
- **What is the real WHMCS host for domain search?** `data/home-new/data.js` ships
  `https://clients.katechs.com/cart.php` as a placeholder. The repo references two client hosts
  (`clients.katechs.com`, `clients.knoztech.com/client/`) and neither is provably the cart. One line to fix.
