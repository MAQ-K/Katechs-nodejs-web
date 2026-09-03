import React from "react";
import { webServices } from "../../data/home-new/data";

// Web services, block 2 of 3 — client work drifting past, full-bleed, forever.
//
// Same technique as components/AppDev/TechMarquee.js, which already solved this:
// the list is rendered TWICE and the keyframe translates exactly -50%, so the
// second copy is under the cursor at the moment the first finishes and the seam
// is invisible. Pure CSS — no rAF, no scroll listener.
//
// The user asked for the images to "kinda fade" at the ends rather than clip.
// That is the mask below, not an overlay gradient: an overlay would have to
// match the section's background colour, and would stop working the moment the
// design pass changes it.
//
// The duplicate copy is aria-hidden and its images have empty alt — a screen
// reader should hear each project once, not twice.
//
// STRUCTURE PASS: greyscale.

// How many times the list is repeated in the track.
//
// Two is the usual answer, but two only holds while the viewport is no wider
// than ONE copy: the track is N copies, the keyframe advances exactly one, so
// at the end of a cycle the visible window is [1 copy, 1 copy + viewport] and
// that has to still land inside N copies. One copy here is 6 items x 420px =
// 2520px, so at N=2 anything wider than a 2520px viewport runs off the end and
// shows empty strip — the very bug this component was reported for, just at a
// different screen size. N=3 covers viewports up to 5040px.
const COPIES = [0, 1, 2];

const ProjectsMarquee = ({ projects = webServices.projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="hp-marquee" aria-label="من أعمالنا">
      <div className="hp-marquee-track">
        {COPIES.map((copy) => (
          <React.Fragment key={copy}>
            {projects.map((p) => (
              <figure
                className="hp-marquee-item"
                key={`${copy}-${p.id}`}
                aria-hidden={copy > 0 ? "true" : undefined}
              >
                <img src={p.image} alt={copy > 0 ? "" : p.name} />
              </figure>
            ))}
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        .hp-marquee {
          /* Full-bleed: this sits inside the page's normal flow but has to span
             the whole viewport, edge to edge. */
          width: 100%;
          overflow: hidden;

          /* ---- the direction has to be HERE, on the wrapper ----
             The track is a shrink-to-fit box (width: max-content). Which edge
             such a box aligns to, and therefore which way it overflows, is
             decided by its CONTAINING BLOCK's direction — not by its own. So
             setting ltr on the track alone (the first attempt at this bug)
             only reordered the items INSIDE it: the box itself stayed flush
             against this RTL wrapper's right edge and still overflowed left,
             and translateX(-50%) still dragged it off leftward leaving the
             right side empty.
             Setting ltr here makes the wrapper the LTR containing block, so the
             track starts at the left edge and overflows right, which is what
             the -50% keyframe assumes.
             Safe because this strip contains only images — no Arabic text whose
             direction could be disturbed. */
          direction: ltr;
          padding-block: clamp(28px, 4vw, 56px);
          background: #f2f2f2;
          /* Fade at both ends instead of a hard cut. */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 12%,
            #000 88%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            #000 12%,
            #000 88%,
            transparent 100%
          );
        }
        .hp-marquee-track {
          display: flex;
          width: max-content;

          /* ---- why this is ltr on an RTL site ----
             html is dir="rtl", so a max-content flex track is laid out from the
             container's RIGHT edge and overflows to the LEFT. Its right edge
             starts flush with the container's, so there is nothing further
             right to scroll in; animating to translateX(-50%) then drags that
             right edge leftward and leaves the right half of the strip EMPTY.
             Forcing the track to ltr makes it overflow rightward instead, so
             -50% does what the keyframe intended.

             components/AppDev/TechMarquee.js hit this exact bug first — the
             full account is in styles/style.scss under .app-marquee-track. */
          direction: ltr;

          animation: hp-marquee-scroll 42s linear infinite;
        }
        .hp-marquee:hover .hp-marquee-track {
          animation-play-state: paused;
        }
        .hp-marquee-item {
          flex: 0 0 auto;
          /* Spacing lives on the ITEM, not as a flex gap on the track. With a
             gap, two copies of N items are 2N items but only 2N-1 gaps, so the
             track is not exactly twice one copy and the -50% seam drifts. A
             trailing margin makes each copy self-contained and the loop exact.

             PHYSICAL margin-right, not margin-inline-end: the track above is
             forced to ltr, so right is the flow end there. */
          margin: 0;
          margin-right: 20px;
          width: clamp(240px, 26vw, 400px);
          border: 1px solid #d9d9d9;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
        }
        .hp-marquee-item img {
          display: block;
          width: 100%;
          /* Every screenshot in public/images/projects is 1448x1086 (4:3);
             letting them size freely would make the track height jitter as it
             scrolls. */
          aspect-ratio: 4 / 3;
          object-fit: cover;
        }
        @keyframes hp-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            /* Exactly one copy: the track is COPIES.length copies wide, so one
               copy is 100%/N of it. calc keeps it exact — a rounded -33.33%
               would drift a fraction of a pixel every cycle. */
            transform: translateX(calc(-100% / 3));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-marquee-track {
            animation: none;
            /* Nothing moves, so the second copy is dead weight and the row
               should be explorable instead. */
            overflow-x: auto;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsMarquee;
