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

## Open questions

- Which of the 12 current sections survive into the new homepage, and in what order?
