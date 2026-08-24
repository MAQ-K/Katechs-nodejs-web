# UI Library
> Owner: UI Library Searcher. Consumers: Manager (picks), UI Implementer (builds), UI Animator (motions).

`inspiration/` holds one file per idea — a section pattern, a reference site, a layout, a component concept.
Nothing here is code for the app. It is the menu the Manager orders from.

## Index
| File | Section type | For page | Verdict |
|------|--------------|----------|---------|
| [`seo-hero-rank-proof.md`](inspiration/seo-hero-rank-proof.md) | hero | SEO | Proposed |
| [`seo-audit-lead-capture.md`](inspiration/seo-audit-lead-capture.md) | lead capture / form | SEO | Proposed |
| [`seo-pillars-bento-grid.md`](inspiration/seo-pillars-bento-grid.md) | features / services grid | SEO | Proposed |
| [`seo-proof-honest-metrics.md`](inspiration/seo-proof-honest-metrics.md) | proof / stats | SEO | Proposed |
| [`seo-process-rail.md`](inspiration/seo-process-rail.md) | process / how-it-works | SEO | Proposed |
| [`seo-aisearch-citation-card.md`](inspiration/seo-aisearch-citation-card.md) | feature spotlight (GEO) | SEO | Proposed |
| [`seo-case-studies-transformation.md`](inspiration/seo-case-studies-transformation.md) | proof / case studies | SEO | Proposed |
| [`seo-pricing-comparison.md`](inspiration/seo-pricing-comparison.md) | pricing | SEO | Proposed |
| [`seo-cta-faq-close.md`](inspiration/seo-cta-faq-close.md) | FAQ + CTA (closing block) | SEO | Proposed |

**Verdict vocabulary:** `Proposed` · `Approved` (Manager/user picked it) · `Built` (link the component) · `Rejected` (say why)

Rules:
- Every entry must state **how it survives this stack**: no Tailwind, no shadcn, Bootstrap 5 + global SCSS,
  RTL Arabic, Pages Router. An idea that only exists as a Tailwind snippet needs a vanilla-CSS translation plan.
- Screenshots/reference images → `brain/ui-library/inspiration/assets/`. Never into `public/`.
- Link the source. Say what specifically is good about it, not "looks modern".
