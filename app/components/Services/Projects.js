import React, { useEffect, useRef, useState } from "react";
import CoverflowCarousel from "../Sections/CoverflowCarousel";
import Reveal from "../Common/Reveal";
import { projects } from "../../data/services/data";

// Client work as a 3D cover-flow ring. Replaced the Swiper marquee: that one
// drifted past and could not be stopped on a single project, this one has a
// focused centre card.
//
// Per-project captions removed on user request (2026-09-04) — the section now
// carries ONE heading instead of a name/type pair under whichever project is
// centred. `label` stays on the carousel purely as its region's aria-label;
// there was previously no VISIBLE heading here at all.
//
// The carousel itself is a portable Sections/ component and knows nothing about
// this page — mapping data/services/data.js onto its slide shape is this file's
// only job. No duplication of the list: `projects` stays the single source.
//
// Cards are 4:3 because every screenshot in public/images/projects is 1448x1086;
// leaving the carousel's square default would have cropped a quarter off each.
//
// No arrows here: it advances on its own every 4s and can be dragged, so the
// buttons were a third way to do the same thing. Autoplay pauses on hover and
// on focus, and arrow keys still step it once the frame is focused.

// Click the centre project to see it large (user, 2026-09-28). Native <dialog>:
// Esc, focus trap and the backdrop come from the browser, no library.
const Projects = () => {
  const [open, setOpen] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) dialog.showModal();
    if (open === null && dialog.open) dialog.close();
  }, [open]);

  // name/type folded into one alt string now that neither renders as a
  // caption — screen readers still get the identifying detail, sighted users
  // get it from the section heading instead.
  const slides = projects.map((p) => ({
    src: p.image,
    alt: `${p.name} — ${p.type}`,
  }));

  return (
    <section className="wsv-projects" id="wsv-projects">
      <div className="container">
        <Reveal>
          <div className="wsv-projects-head">
            <span className="wsv-eyebrow">أعمالنا</span>
            <h2 className="wsv-h2">مواقع أطلقناها لعملائنا</h2>
          </div>
        </Reveal>
      </div>

      <CoverflowCarousel
        slides={slides}
        cardWidth="clamp(210px, 30vw, 380px)"
        cardHeight="clamp(158px, 22.5vw, 285px)"
        autoplay={4000}
        label="أعمالنا"
        onOpen={setOpen}
      />

      <dialog
        ref={dialogRef}
        className="wsv-lightbox"
        aria-label={open !== null ? slides[open].alt : undefined}
        onClose={() => setOpen(null)}
        // A click on the backdrop lands on the <dialog> itself, not the figure.
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
      >
        {open !== null && (
          <figure>
            <img src={slides[open].src} alt={slides[open].alt} />
            <figcaption>
              {projects[open].name} - {projects[open].type}
            </figcaption>
          </figure>
        )}
        <button
          type="button"
          className="wsv-lightbox-close"
          aria-label="إغلاق"
          onClick={() => setOpen(null)}
        >
          <i className="bx bx-x" aria-hidden="true"></i>
        </button>
      </dialog>
    </section>
  );
};

export default Projects;
