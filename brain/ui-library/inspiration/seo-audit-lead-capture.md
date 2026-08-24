# SEO Free Audit — minimal-field lead capture, not a promise box

**Type:** lead capture / form
**For page:** `pages/services/seo/` (`components/Seo/AuditForm.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/landing.csv` row 7 — **Lead Magnet + Form**: "Form fields ≤ 3 for best
  conversion. Offer valuable lead magnet preview. Show form submission progress." CTA placement =
  the submit button itself; effects = "Form focus state animations, input validation animations,
  success confirmation animation."
- `ui-ux-pro-max/data/ux-guidelines.csv` rows 54–62 (Forms category): row 54 Input Labels — "Always
  show label above or beside input, not placeholder-only" (current build already does this — keep);
  row 55 Error Placement — "Show error below related input, not a single message at top" (current
  build puts one error string below the whole form — worth moving per-field once a third field
  exists); row 56 Inline Validation — "Validate on blur for most fields," not submit-only.
- Existing build: `data/seo/structure.md` open question #4 — is this a real submission to
  `/api/contact` or a promise-only CTA? This entry assumes real submission (see Risks).

## Why it fits Katechs
This is the one section on the page where the current dark-panel styling is already correct — the
mechanic problem is that it's a 2-field form pretending to be a report generator with a canned success
message ("سنرسل التقرير إلى...") that the code comment admits doesn't send anything yet. Two-field
lead capture is the right shape per the guideline above (site + email, nothing more) — the fix is
making the *promise match the plumbing*: either wire it to a real endpoint that actually forwards to
`/api/contact` (reusing the pattern already proven on the Contact page), or change the copy to an
honest "اطلب تحليلك ونتواصل خلال يوم عمل" that doesn't claim an automated report exists.

## Fit with our stack
- Bootstrap 5 + global SCSS — no change to markup shape needed, only the submit handler and the
  success-state copy. The `.seo-input` / `.seo-form-row` classes stay.
- RTL: inputs already right-align correctly under `dir="rtl"`; the one thing to check is the error
  icon/text order if per-field errors are added — icon should sit on the reading-start side (right
  in RTL), matching the `bx-check` pattern used elsewhere on this page.
- Motion: Lab Tier A is enough — an input focus-ring transition and a button loading state
  (`seo-btn` gets a spinner swap, not a route change) — no GSAP, no framer-motion needed beyond what
  `Magnetic.js` already gives the button.
- Reuse: `components/Common/Magnetic.js` (already wraps the submit button). The real send logic
  should reuse whatever `pages/api/contact.js` already does — **do not** duplicate SendGrid wiring in
  a new API route; that doubles the credential-exposure surface flagged in Known Issue #1.

## Structure
Unchanged from current: eyebrow + H2 + supporting line, centered form (site URL + email + submit),
inline error, success state. Only the *plumbing and copy* change, not the layout.

## Data it needs
No new `data/seo/data.js` fields — this is behavior, not content. Content & Data Manager should
confirm final Arabic copy for the honest success/pending state once T-011's implementer knows whether
submission is real.

## Risks
- This is the one section where a wrong guess is expensive: shipping a fake "report sent" success
  message is a trust problem on a page that is *selling trust as the product*. **Do not implement the
  wiring decision without the client's answer to structure.md question 4** — flag it to the Manager
  again rather than picking one silently.
- If wired to `/api/contact`, honor Known Issue #4 (reCAPTCHA never verified server-side) — this form
  is a second entry point into that same unverified surface, worth naming in the Tester's checklist.
