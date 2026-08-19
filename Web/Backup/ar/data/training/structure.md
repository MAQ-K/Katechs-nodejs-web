# Training Page (التدريب) — Stage 2 (Structure)

Route: `/training/` · Components: `components/Training/` · Status: gray-box wireframe

## Audience decision (confirmed with user, 2026-08-20)

**B2C — public courses for individuals.** There was zero training content anywhere in the repo, so
there was no signal to infer from; the user chose individuals over corporate/team training.

This means the page is a **catalog + enrolment** page, not a quote-based service page. It is the only
page on the site aimed at a different buyer from every other page (students/juniors rather than
business owners) — worth remembering during the UI phase, since the tone can be lighter than the
service pages.

## Route decision

Placed at **`/training/`**, not `/services/training/` — training is not one of the IT services sold to
businesses, and the navbar treats "التدريب" as a **top-level item**, a sibling of الخدمات rather than a
child of it. Matches the existing top-level pages (`/jobs`, `/offers`, `/support`).

Dead links wired up:

- `components/Layouts/Navbar.js` — "التدريب" was `#`
- `components/Layouts/Footer.js` — "تدريب" was `#`

## Research basis

- **General Assembly — `/students/courses`** — the closest single-provider reference. Its catalog card
  carries exactly: topic tag(s), course title, 1–2 sentence description, course-type icon
  ("Instructor-led"), delivery method ("On Campus or Online"), duration ("32 hours | 8 weeks"), and a
  link arrow. Filter bar is Topic / Location / Schedule / Format. Section 3 is modelled on this.
- **Coursera — `/degrees`** — catalog discovery patterns: filter interface, carousels of program
  cards, browse-by-category, FAQ accordion.
- **Course Report / Forbes / Boot.dev 2026 roundups** — the axis that actually differentiates
  providers is **delivery format**: live cohort-based (Hack Reactor, General Assembly) vs self-paced
  with scheduled 1-on-1 mentorship (Springboard, CareerFoundry). Hence section 4 exists as its own
  block rather than being buried as a card field.

## Section list

| # | Section | Purpose | Notes |
|---|---------|---------|-------|
| 1 | **Hero** | Value prop + browse/enrol CTA | Dual CTA: تصفح الدورات (scrolls to catalog) + سجّل الآن |
| 2 | **Stats strip** | Credibility | ⚠ **Needs real numbers — do not invent** |
| 3 | **Course catalog** | The core of the page | Filter bar (المجال / المستوى / النمط / الموعد) + cards. Card fields per GA: tag, title, short description, duration, level, start date, price. Load-more |
| 4 | **Learning formats** | The axis buyers actually compare on | مباشر مع مدرب · ذاتي مع إرشاد · حضوري |
| 5 | **Learning path** | What a course actually looks like | أساسيات → تطبيق عملي → مشروع → شهادة |
| 6 | **Instructors** | Trust in who teaches | ⚠ **Needs real trainer profiles** |
| 7 | **Outcomes + testimonials** | Proof | ⚠ **Needs real graduate results — do not invent** |
| 8 | **Certificate** | Tangible deliverable | What the certificate is and what it proves |
| 9 | **Upcoming schedule** | Urgency + practicality | Table of next cohorts ⚠ **Needs real dates** |
| 10 | **Pricing & payment** | Cost + instalments | ⚠ **Needs real prices** |
| 11 | **FAQ** | Objection handling | Accordion |
| 12 | **Final CTA** | Enrolment | Band before footer |

## Open questions for the client

1. **The actual course list** — which courses are offered? Nothing exists in the repo to work from.
2. Real prices, and whether instalments/payment plans are offered (section 10).
3. Real trainer profiles (section 6) and graduate outcomes (section 7).
4. Are courses **live cohort, self-paced, in-person, or a mix**? Section 4 assumes all three exist.
5. Is the certificate accredited by anyone, or KaTechs-issued? Affects how section 8 can be worded.
6. Where does enrolment go — a new form, the existing `/contactWeb`, or an external platform?

**Nothing on this page can go past wireframe into real copy until question 1 is answered** — unlike
the SEO and marketing pages, there is no existing in-repo copy to reuse here.
