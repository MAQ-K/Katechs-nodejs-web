# SEO AI-Search (GEO) — an actual citation card, not a generic skeleton

**Type:** feature spotlight / differentiator
**For page:** `pages/services/seo/` (`components/Seo/AiSearch.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/styles.csv` row 43 — **AI-Native UI**: "Chatbot" / minimal-UI keywords — the
  relevant guidance here is restraint: an AI-adjacent section should look like a real answer surface,
  not a decorative "skeleton loading" mockup.
- Web reference (2026): AI-answer citation UI research — "a source card... lists sources as a thumbnail
  card with favicon, title, domain, and a short excerpt," and inline "numbered citation with hover
  preview" patterns from Perplexity/ChatGPT search are the actual visual language users now recognize
  as "this is an AI answer with a real source." https://www.aydesign.ai/blog/ai-citation-source-ui-patterns-2026
  Also: "Answer capsules... roughly 120–150 characters placed directly after a question-format H2" are
  the strongest predictor of being cited — useful copy guidance for Content, independent of the UI.
- Client-supplied reference: `assets/seo-aisearch-client-ref.png` (`seo page inspiration/4th sec#.png`)
  — the split badge + skeleton-line card the current ad-hoc pass built from.

## Why it fits Katechs
The current `AiSearch.js` media panel is a generic skeleton (badge + 4 grey lines + a citation footer)
— it illustrates "an AI answer exists" but not *what makes a page get cited*, which is the actual claim
this section is making. Rebuilding the card as a recognizable **AI-answer-with-citation** mock (a short
answer paragraph, a highlighted sentence, then a small source chip with a mock favicon + "katechs.com")
makes the section self-explanatory to a visitor who has used ChatGPT/Google AI Overviews — recognition
over explanation.

## Fit with our stack
- Bootstrap 5 + global SCSS — replace `.seo-skel-line` placeholder rows with real (short, generic)
  Arabic answer copy styled as body text, one sentence `<mark>`-highlighted, plus a `.seo-cite-chip`
  (small pill: favicon circle + domain text) appended under the existing `seo-` banner.
- RTL: the citation chip's icon-then-text order must read icon-first from the *reading direction*
  (right side in RTL) — same rule as the Hero's proof pills, already solved once on this page, reuse
  that exact class if one exists (`seo-proof-row` pill shape) rather than inventing a new pill style.
- Motion: Lab Tier A — the highlighted sentence can get a subtle background-color sweep-in
  (`background-size` transition) on scroll-into-view; optional, skip if it fights the "calm, credible"
  tone the rest of this section needs. Tier B stagger via `Reveal.js` for the panel overall — already
  in use.
- Reuse: `Reveal.js`. No new primitive required.

## Structure
Unchanged split layout (media panel left/right, copy + bullet list opposite). Media panel content
changes: eyebrow badge → 2–3 lines of realistic mock answer copy (Arabic, generic — not claiming a real
AI output) → one highlighted sentence → source chip footer.

## Data it needs
No new `data/seo/data.js` field required if the mock copy is static illustrative content (it is not a
real client claim, so it doesn't need to be data-driven the way a stat would) — Content should just
confirm the Arabic mock-answer copy reads naturally, not machine-translated.

## Risks
- This card must not look like a claim of actual results ("we got you cited") — it's illustrating the
  *concept* of GEO/AEO. Copy review by Content is important here specifically to avoid overpromising,
  more than in most sections on this page.
