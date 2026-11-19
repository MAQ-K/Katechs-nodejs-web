import React from "react";
import { webServices } from "../../data/home-new/data";
import WebServicesBrief from "./WebServicesBrief";
import WebServicesPlans from "./WebServicesPlans";
import ProjectsMarquee from "./ProjectsMarquee";

// Web services — the one light band the three blocks share.
//
// ---- history, so nobody rebuilds a dead end ----
// 2026-09-09, pass 1: forced all three blocks into a single 100vh screen
// (pitch and plans side by side, brief image dropped). REJECTED.
// 2026-09-09, pass 2: kept the stacked layout but reserved a physical-left
// gutter for a side rail the floating nav morphed into. REJECTED too
// ("cancel sidesubnavbar make it like it was").
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Rebuilt to match Homepage.dc.html exactly (the Claude Design handoff in
// Homepage/Homepage Services Design-handoff/). Two structural changes from the
// revision before it:
//
//   1. The band is now a BENTO, not a stack: the brief is a white rounded card
//      sitting beside a 500x420 floating image, and the projects marquee is a
//      second white card below them. Both are children of one 10px-gap grid.
//   2. The viewport-fitting ResizeObserver is GONE. The old revision measured
//      both nav bars and squeezed brief + marquee into the leftover dvh via
//      --hp-ws-chrome. The design lays the band out at its natural height, so
//      there is nothing left to measure. If a 100vh variant is ever wanted
//      again, read the history above first — one was already rejected.
//
// ---- LAYOUT PASS (2026-09-28, user sketch image.png) ----
// No separate title band above the bento any more: the section title is the
// first line INSIDE the brief card (section title, h2, talk, btn, badges).
// The bento sits in a narrower centred container instead of running edge to
// edge, with the brief card and the image as two equal boxes and the projects
// card across the full width under them.
export default function WebServicesScreen() {
  return (
    <div className="hp-ws">
      <div className="hp-ws-bento">
        <WebServicesBrief title={webServices.intro.title} />
        <ProjectsMarquee />
      </div>

      <div className="hp-ws-plans">
        <WebServicesPlans />
      </div>

      <style jsx>{`
        .hp-ws {
          /* Light band between two navy ones (domain above, app services
             below). Off-white rather than pure white so the white cards inside
             still read as raised surfaces on it. */
          background: #f7f7f7;
          color: #212121;
          font-family: "Cairo", system-ui, sans-serif;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-block: 12px 16px;
        }
        .hp-ws-bento {
          width: min(1200px, calc(100% - 48px));
          margin: 0 auto;
          padding: clamp(24px, 3vw, 40px) 0 clamp(56px, 7vw, 88px);
          display: grid;
          gap: 16px;
        }
        .hp-ws-plans {
          padding-block: 0 clamp(56px, 8vw, 104px);
        }
      `}</style>
    </div>
  );
}
