import React from "react";

// ⚠️ REBUILT 2026-09-08 — "change TOTALLY the testimonial section, use this as
// a reference" (user, pointing at Web/Backup/ar/about us-testimonial .png): a
// horizontal infinite rail of rounded, bordered cards (quote + 5-star rating +
// a small tag), not the previous Swiper carousel with manual nav arrows and a
// comic-style speech-bubble tail.
//
// Only used on /about-us — verified before rewriting: pages/index.js imports
// this component but its usage is commented out
// (`{/* <Testimonials /> */}`), so this is not live anywhere else. Safe to
// rebuild in place; nothing else on the site depends on the old markup.
//
// ---- what did NOT come from the reference ----
// The reference card also shows a name, a role and a bespoke tag per card
// ("Trusted by teams" / "reviews" / "Priya, Product manager" — reads like a
// component-library demo, not real testimonial metadata). This site has
// exactly three real customer quotes and NO real name, role, or photo for any
// of them — components/Testimonials/TestimonialsContent.js (a second, unused
// testimonials component elsewhere in this codebase) is 100% Lorem-ipsum
// template placeholder data ("Alen Meair", "client1.jpg") and was checked
// specifically to make sure there was no real name data hiding there before
// concluding there is none anywhere in the repo. Inventing a name for a real
// customer's real words is not a call this session gets to make, so the name/
// role row is left off entirely rather than filled with something fabricated.
// The tag is kept, but generic and uniformly true ("رأي عميل" — "a client's
// opinion") rather than invented per-card categorisation.
//
// ---- the rail, technically ----
// Same infinite-marquee technique already proven twice in this codebase
// (components/AppDev/TechMarquee.js, components/HpNew/ProjectsMarquee.js):
// the list renders N times and the keyframe advances exactly one copy, so the
// next copy is already in position the instant the first finishes — no visible
// seam. Unlike those two, this one lives in the normal SCSS pipeline (see
// styles/style.scss, "=== SUB-PAGE: /about-us ===" — `.about-page` is where
// every rule below actually lives), because that is the convention this page
// already uses everywhere else, not the isolated styled-jsx contract
// components/HpNew/ follows.
//
// ⚠️ Only 3 real quotes exist, so ONE copy is short (~1200px) — far short of a
// wide desktop viewport. COPIES = 5 here, not the 2-3 used elsewhere, so the
// track stays wider than the visible window even on a big monitor; see the
// SCSS comment on .testimonial-track for the exact math.
const testimonials = [
  {
    id: "t1",
    text: "لديهم دعم فني ممتاز. واحترافية العمل وأهم ما يميزهم المصداقية في التنفيذ",
  },
  {
    id: "t2",
    text: "لديهم دعم فني ممتاز. نشكرهم على احترافيتهم ونتمنى لهم النجاح",
  },
  {
    id: "t3",
    text: "لقد كنا عملاء لشركة KATECHS لأكثر من 15 عامًا ونشعر بالامتنان لخدمتهم المتميزة",
  },
];

const COPIES = [0, 1, 2, 3, 4];

const Testimonials = () => {
  return (
    <section className="client-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>نسعد بانضمامك الينا</span>
          <h2>آراء عملائنا</h2>
        </div>
      </div>

      <div className="testimonial-rail" aria-label="آراء عملائنا">
        <div className="testimonial-track">
          {COPIES.map((copy) => (
            <React.Fragment key={copy}>
              {testimonials.map((t) => (
                <article
                  className="testimonial-card"
                  key={`${copy}-${t.id}`}
                  aria-hidden={copy > 0 ? "true" : undefined}
                >
                  <span className="testimonial-tag">رأي عميل</span>
                  <i className="quotes flaticon-left-quotes-sign" aria-hidden="true"></i>
                  <p>{t.text}</p>
                  <ul className="testimonial-stars" aria-hidden="true">
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                    <li><i className="bx bxs-star"></i></li>
                  </ul>
                </article>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
