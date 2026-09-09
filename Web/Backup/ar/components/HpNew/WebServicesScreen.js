import React, { useEffect, useRef } from "react";
import WebServicesBrief from "./WebServicesBrief";
import WebServicesPlans from "./WebServicesPlans";
import ProjectsMarquee from "./ProjectsMarquee";

// Web services — the one light band the three blocks share. Nothing else.
//
// ---- history, so nobody rebuilds either dead end ----
// 2026-09-09, pass 1: forced all three blocks into a single 100vh screen
// (pitch and plans side by side, brief image dropped). REJECTED.
// 2026-09-09, pass 2: kept the stacked layout but reserved a physical-left
// gutter for a side rail the floating nav morphed into. REJECTED too
// ("cancel sidesubnavbar make it like it was") — the nav is back to a plain
// horizontal floating bar (components/HpNew/SectionNav.js), so there is no
// rail to reserve room for any more.
//
// Current: intro + image + projects share the available desktop viewport,
// accounting for both navigation bars. Plans stay below this opening screen.
// Narrow screens retain their readable stacked layout.
export default function WebServicesScreen() {
  const screenRef = useRef(null);
  useEffect(() => {
    const bars = [document.querySelector(".hp-topnav"), document.querySelector(".hp-nav")].filter(Boolean);
    const measure = () => {
      const height = bars.reduce((sum, bar) => sum + bar.getBoundingClientRect().height, 0);
      screenRef.current?.style.setProperty("--hp-ws-chrome", `${height + 24}px`);
    };
    const observer = new ResizeObserver(measure);
    bars.forEach((bar) => observer.observe(bar));
    measure();
    return () => observer.disconnect();
  }, []);
  return (
    <div className="hp-ws">
      <div className="hp-ws-viewport" ref={screenRef}>
        <WebServicesBrief />
        <ProjectsMarquee />
      </div>
      <WebServicesPlans />

      <style jsx>{`
        .hp-ws-viewport { --hp-ws-chrome: 160px; }
        @media (min-width: 992px) {
          .hp-ws-viewport {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 12px;
            padding-block: 12px 16px;
          }
          .hp-ws-viewport :global(.hp-brief) { padding: 0; }
          .hp-ws-viewport :global(.hp-brief-inner) { width: min(1400px, calc(100% - 48px)); gap: 32px; grid-template-columns: 1.15fr 1fr; }
          .hp-ws-viewport :global(.hp-brief-eyebrow) { margin-bottom: 6px; font-size: 13px; }
          .hp-ws-viewport :global(.hp-brief-text h3) { font-size: clamp(26px, 3.6vh, 36px); margin-bottom: 10px; max-width: none; }
          .hp-ws-viewport :global(.hp-brief-text p) { font-size: 15px; line-height: 1.75; margin-bottom: 12px; max-width: none; }
          .hp-ws-viewport :global(.hp-brief-points) { gap: 4px; margin-bottom: 12px; max-width: none; }
          .hp-ws-viewport :global(.hp-brief-text .hp-brief-projects-title) { font-size: 18px; margin: 12px 0 0; }
          .hp-ws-viewport :global(.hp-brief-media) { aspect-ratio: auto; height: clamp(200px, 32vh, 340px); }
          .hp-ws-viewport :global(.hp-brief-media img) { height: 100%; object-fit: contain; }
          .hp-ws-viewport :global(.hp-marquee-wrap) { padding: 0; }
          .hp-ws-viewport :global(.hp-marquee-inner) { width: min(1400px, calc(100% - 48px)); }
          .hp-ws-viewport :global(.hp-marquee-item img) { height: clamp(120px, calc((100dvh - var(--hp-ws-chrome)) * 0.3), 230px); aspect-ratio: auto; object-fit: contain; }
        }
        .hp-ws {
          /* Light band between two navy ones (domain above, app services
             below). Off-white rather than pure white so the white plan cards
             and project tiles still read as raised surfaces on it — the same
             relationship Stores (#f7f7f7) already uses on this page. */
          background: #f7f7f7;
          color: #212121;
          font-family: "Cairo", system-ui, sans-serif;
        }
      `}</style>
    </div>
  );
}
