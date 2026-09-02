# Region-based pricing — build spec

> Companion to `tasks-FR.md` → "Price for each region". Any Claude session building this: read this
> whole file first. It has everything needed except the actual business numbers, which are left
> blank on purpose — see the bottom section.

## Locked decisions (user, 2026-08-30 — do not re-litigate these)

1. **Fully automatic, no manual switcher.** A visitor's region is detected from their request —
   they never pick a currency themselves, and there is no UI to see another region's price.
2. **Fully locked, no override.** If detection gets it wrong (VPN, misrouted IP, whatever), the
   visitor still only sees the price for the region that was detected. No "not your region?"
   link, no fallback picker. This was an explicit choice over a safer "small override" option —
   don't add one back in without asking.
3. This means pricing must resolve **server-side, per request**, before the page renders. Any
   page that shows a regional price can no longer be statically generated — it needs
   `getServerSideProps` (or middleware) to resolve the region first.

## What already exists — reuse, don't rebuild

- **`data/services/data.js`** — Business Websites pricing already has exactly the shape this
  needs: `pricing.currencies.EG` / `pricing.currencies.SA`, each holding its own `plans` array.
  Every `price` field in it is currently the placeholder `"—"` with a `priceNote: "TODO(prices)"`
  — see the fill-in section below.
- **`components/Services/ServiceArea/Plans.js`** — currently reads `pricing.currencies` and
  renders a manual EG/SA switcher (`useState` + buttons). Per decision #1 above, **this switcher
  needs to be removed entirely**, not hidden — the component should take the already-resolved
  region as a prop and render only `pricing.currencies[region]`, with no other currency reachable
  from the client at all.
- **`data/hosting-services/data.js`** — same `currencies.EG` / `currencies.SA` shape, and unlike
  Business Websites it already has real-looking numbers. **But there's a known, already-flagged
  bug**: the `SA` block is priced in `ج.م` (Egyptian pounds) instead of `ر.س` (Saudi riyals) — see
  the note at `data/hosting-services/brief.md` open question #2 and the inline comment at
  `data/hosting-services/data.js:98`. **Fix this as part of this work — don't build automatic
  region detection on top of a currency that's already wrong.** Find and update whichever
  component renders hosting pricing (search for `pricing.currencies` usage) the same way as
  `Plans.js`.

## What needs to be built

1. **Region resolution (server-side)**
   - Decide the detection method: a header the eventual production host/CDN provides for free
     (check once hosting is finalized), vs. a third-party IP-geolocation API (has a cost, adds an
     external dependency, and IP-based location is personal data — flag for privacy review).
   - Fallback for a visitor outside every listed region — **see the blank in the fill-in section**,
     this must be decided, not guessed.
   - Implement once, as a shared helper (e.g. `utils/resolveRegion.js`) — every page that needs a
     region calls the same function, not five copies of the same logic.

2. **Data model — extend `pricing.currencies` to every in-scope service**
   - `data/services/data.js` — already shaped correctly, just needs real numbers (below) and the
     `Plans.js` switcher removed.
   - `data/hosting-services/data.js` — already shaped correctly, needs the SA-currency bug fixed
     and real SA numbers confirmed (below).
   - `data/emails/data.js` — **not shaped for this yet.** It currently has a single flat price
     list in `ج.م` only (`priceYear`/`priceMonth`), with no region split, and one plan has a
     literal stray `"$8"` where every other plan has an EGP figure (an existing bug, unrelated to
     this feature, but fix it in the same pass since you'll be touching this file anyway). Needs
     rebuilding into the same `currencies.{region}` shape as the other two files.

3. **Component changes**
   - `Plans.js`: remove the `useState` currency switcher and its buttons entirely. Accept a
     `region` prop (resolved by the page, not the component) and render
     `pricing.currencies[region]` directly. If `region` isn't a key that exists in the data, fall
     back per whatever the fallback decision below says — don't crash.
   - Whichever component renders hosting pricing: same treatment.
   - Whichever component ends up rendering emails pricing once that data is reshaped: same
     treatment.

4. **Wiring**
   - Every `pages/**` route that renders one of the above pricing components needs
     `getServerSideProps` added (if it doesn't have it already) to resolve the region via the
     shared helper and pass it down as a prop.
   - Confirm the exact routes at build time — check `brain/components/REGISTRY.md` and the
     `pages/services/**` / `pages/hosting*` / `pages/*email*` tree, since page structure may have
     moved since this spec was written.

## Out of scope for now

- **App Development** — no fixed prices anywhere in `data/app-development/data.js`, it's
  quote-only ("حسب نطاق المشروع" — depends on project scope). Nothing to regionalize until that
  changes.
- **SEO / Digital Marketing / Training** — no pricing data files exist for these yet (only
  `structure.md` planning notes). Out of scope until real pricing content exists for them.

---

## ⬜ Fill in before building — do not invent any of this

Every value below is a placeholder. Published prices are a commitment to real customers — do not
guess or infer numbers to fill gaps.

### Regions in scope

| # | Region / country | Currency code | Currency symbol |
|---|-------------------|---------------|------------------|
| 1 |                   |               |                  |
| 2 |                   |               |                  |
| _(add rows if there are more than 2 regions)_ |

**Fallback region** for a visitor outside every row above:
`____________` (which region's price shows them — or should they get a distinct "contact us for
pricing" state instead of any guessed number? decide one.)

### Business Websites prices (`data/services/data.js`)
Every plan currently reads `price: "—"`. Fill in per plan, per region (duplicate columns if a
third region gets added above).

| Plan | Region 1 price | Region 2 price |
|------|-----------------|------------------|
|      |                 |                  |
|      |                 |                  |
|      |                 |                  |

### Hosting prices (`data/hosting-services/data.js`)
The `EG` numbers already exist (verify they're still current before reusing). The `SA` numbers
that exist today are **wrong currency** (priced in ج.م, labeled ر.س) — need real SA figures, not a
currency-converted guess.

| Plan | Region 1 (EG) price | Region 2 (SA) price |
|------|----------------------|------------------------|
|      |                      |                        |
|      |                      |                        |
|      |                      |                        |

### Emails prices (`data/emails/data.js`)
Currently one flat EGP list, no region split. Fill in what the per-region prices should be —
this also replaces the existing numbers, which may need re-confirming even for the home region.

| Plan | Region 1 price | Region 2 price |
|------|-----------------|------------------|
|      |                 |                  |
|      |                 |                  |
