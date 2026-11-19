# Business Email — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/emails/index.js`, `components/Emails/*`, `data/emails/data.js`.
> Route: `/services/emails/`

## 1. What the service is

Professional business email under the client's own domain (`you@your-domain.com`), sold in three
flavours: a Katechs-branded professional webmail, Google Workspace, and Microsoft 365 — each with its own
plan ladder.

## 2. All types / tiers / variants

**Type 1 — بريد إلكتروني احترافي (Katechs webmail), 2 plans, yearly + monthly price shown:**
| Plan | Price/year | Price/month | Badge | Features included (of 15-item list) |
|---|---|---|---|---|
| بريد إلكتروني احترافي | 1,039ج.م | 86ج.م | — | first 10 of the list (uptime, antivirus/spam, custom address, inbox size, full webmail, mobile+browser, calendars/contacts, CardDAV/CalDAV, portal page, migration tool) |
| بريد إلكتروني احترافي + الإنتاجية | 1,559ج.م | 130ج.م | **الأكثر طلبا** | first 15 (adds cloud file storage, online office suite, Word/Excel/PowerPoint create-edit) |

**Type 2 — Google Workspace, 3 plans, yearly + monthly:**
| Plan | Price/year | Price/month | Badge | Key specs |
|---|---|---|---|---|
| بزنس استارتر | 4,199ج.م | 349ج.م | — | 100-participant video meetings, 30GB storage |
| بزنس استاندر | 8,711ج.م | 725ج.م | **الأكثر طلبا** | 150-participant meetings, 2TB storage |
| بزنس بلس | 12,611ج.م | 1,050ج.م | — | 500-participant meetings, 5TB storage |

**Type 3 — Microsoft 365, 3 plans, yearly + monthly:**
| Plan | Price/year | Price/month | Badge | Included features (of 11-item list) |
|---|---|---|---|---|
| اساسية | 4,199ج.م | 349ج.م | — | first 4 |
| بزنس استارتر | 6,839ج.م | **$8 (USD, not ج.م)** | **الأكثر طلبا** | first 6 |
| بزنس استارتر *(same name again)* | 8,711ج.م | 725ج.م | — | first 11 |

⚠️ Two data bugs carried over verbatim from the live page, flagged in the data file itself, not silently
fixed: (1) the last two Microsoft plans are **both named "بزنس استارتر"** — likely should be "استاندر"
or similar for the second one; (2) the middle Microsoft plan's monthly price is in **USD ($8)** while every
other price on the page is in **ج.م** — an inconsistency, not a real 8-pound price.

**Shared feature claims across all types**, restated in the Features section: 99.9% uptime, antivirus/spam
protection, full-spec webmail, cross-device (mobile/browser/Outlook), self-service migration tool,
calendars/contacts.

## 3. Target audience

Any business that wants professional email at their own domain instead of a free Gmail/Outlook address —
the three-type split serves different needs: basic professional webmail (cheapest), or full productivity
suites (Google Workspace / Microsoft 365) for teams that need docs/meetings/cloud storage bundled in.

## 4. Current page sections (live today)

1. **Hero** (`components/Emails/Hero.js`) — intro to the service.
2. **PricingFlow** (`components/Emails/PricingFlow.js`) — renders the 3 email types × their plans from
   `emailTypes` in `data.js`, each type with its own icon (`/images/email1.png`, `/images/googleicon.webp`,
   `/images/microsoft.png`), description, and a comparison feature list where features included in a plan
   are checked and others are shown greyed/unchecked (via `buildFeatures`'s `included` flag) — a genuine
   feature-comparison ladder, not just a bullet list per plan.
3. **Features** — 4 top claims (99.9% uptime, حماية متقدمة, أداء فائق السرعة, متوافق مع كل أجهزتك) plus a
   support block naming 3 teams: الدعم الفني، المبيعات، فريق العمل.
4. **FAQ** — 5 real Q&A pairs (custom domain email, migrating old email, mobile+browser compatibility,
   antivirus/spam protection, difference between the three types). Data file notes these are newly
   written but every claim only restates facts already shown elsewhere on the page — not invented.

All CTAs go to `https://katechs.com/contactWeb/`.

## 5. For the designer

- The core visual challenge is the **feature-comparison ladder** — same ordered feature list per type,
  with a plan "including" everything up to its cutoff point. This needs a clear checked/unchecked (or
  bold/greyed) visual treatment so a viewer instantly sees plan B = plan A + more, not three unrelated
  lists.
- 3 distinct brand icons already exist (Katechs mail icon, Google icon, Microsoft icon) — use them to
  visually separate the three type tabs/sections.
- Popular-plan badge ("الأكثر طلبا") needs the same treatment used elsewhere on the site (SEO/Digital
  Marketing plan cards) for consistency.

## 6. For the content creator

- This page's content is the **most complete/accurate of all the service pages** — real prices, real
  feature lists, real FAQ, nothing invented. Two things need a decision from the business, not new copy:
  the duplicate "بزنس استارتر" plan name, and the $8 USD price sitting among ج.م prices.
- No lorem ipsum anywhere on this page.

## 7. For the video editor

- A short **"which email type is right for you" comparison video** could work well given how structured
  the 3-type/multi-tier ladder already is — this is naturally a chart/table-style motion graphic rather
  than live-action footage.
- Not an obvious fit for testimonial or demo-walkthrough video — email setup isn't a strong visual story
  compared to, say, a hosting control panel or a website launch.

## 8. Open questions / flags

1. ⚠️ Two Microsoft 365 plans are both named "بزنس استارتر" — needs a real name for the second one.
2. ⚠️ One Microsoft 365 plan's monthly price is in USD ($8) while every other price on the page is in
   ج.م — confirm the real ج.م monthly price before this ships anywhere prominent.
3. No open pricing-model questions here (unlike SEO/Digital Marketing) — this page already has real,
   confirmed numbers throughout.
