import React from "react";
import { webServices } from "../../data/home-new/data";

// Web services, block 2 of 3 — the bento's lower card: an infinite belt of
// real client work.
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html. Two things changed from the revision before it:
//
//   1. Swiper is GONE. The belt is now a plain CSS marquee — the list is
//      rendered twice and a single keyframe slides the track from 0 to -50%,
//      which lands the second copy exactly where the first started, so the
//      loop is seamless with no JS at all. Swiper was carrying loop + freeMode
//      + autoplay{delay:0} + a matchMedia listener to fake the same belt.
//      (Swiper is still used elsewhere on the site; only this use is dropped.)
//   2. The "من أعمالنا" heading moved IN here, as the card's own eyebrow. It
//      used to sit at the foot of the brief's text column and this block
//      pointed aria-labelledby at it across component boundaries. Now the
//      label and the thing it labels are in the same card.
//
// The belt is decorative repetition of a list that is also linked from the
// services page, so it is aria-hidden below the heading rather than announced
// twice; the heading still names the region.
export default function ProjectsMarquee({
  projects = webServices.projects,
  seconds = 40,
}) {
  if (!projects?.length) return null;
  // Rendered twice — the -50% keyframe depends on it. See the header note.
  const belt = projects.concat(projects);
  return (
    <div className="hp-marquee-card">
      <h3 dir="rtl" className="hp-marquee-title">
        من أعمالنا
      </h3>
      <div dir="ltr" className="hp-marquee-mask">
        <div
          className="hp-marquee-track"
          style={{ animationDuration: seconds + "s" }}
        >
          {belt.map((project, i) => (
            <figure key={project.id + "-" + i} className="hp-marquee-item">
              <img
                src={project.image}
                alt={i < projects.length ? project.name : ""}
                aria-hidden={i >= projects.length ? "true" : undefined}
                loading="lazy"
                draggable="false"
              />
            </figure>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hp-marquee-card {
          background: #fff;
          border-radius: 10px;
          padding: 16px 0 18px;
          overflow: hidden;
        }
        .hp-marquee-title {
          font: 800 14px / 1 "Cairo", system-ui, sans-serif;
          letter-spacing: 0.12em;
          color: #8a8a8a;
          margin: 0 0 12px;
          padding-inline: clamp(24px, 3vw, 40px);
        }
        .hp-marquee-mask {
          overflow: hidden;
          min-width: 0;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 10%,
            #000 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            #000 10%,
            #000 90%,
            transparent 100%
          );
        }
        .hp-marquee-track {
          display: flex;
          gap: 10px;
          width: max-content;
          animation-name: hpMarquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .hp-marquee-item {
          position: relative;
          width: max-content;
          border-radius: 8px;
          overflow: hidden;
          background: #f2f2f2;
          margin: 0;
          transition: transform 0.25s ease;
        }
        .hp-marquee-item:hover {
          transform: translateY(-4px);
        }
        .hp-marquee-item img {
          display: block;
          height: clamp(130px, 20vh, 180px);
          width: auto;
          max-width: none;
        }
        @keyframes hpMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-marquee-track {
            animation: none;
          }
          .hp-marquee-item:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
