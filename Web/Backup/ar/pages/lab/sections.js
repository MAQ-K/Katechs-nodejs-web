import React from "react";
import LabShell from "../../components/Lab/LabShell";
import { labGuard } from "../../utils/labData";

import HeroBuildSmarter from "../../components/Sections/HeroBuildSmarter";
import CoverflowCarousel from "../../components/Sections/CoverflowCarousel";

// Flat-colour placeholder cards, so the carousel demo has no network
// dependency and the rake is easy to read card-to-card.
const swatch = (hex, n) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <rect width='800' height='600' fill='${hex}'/>
      <text x='400' y='330' font-family='sans-serif' font-size='140'
        fill='rgba(255,255,255,.85)' text-anchor='middle'>${n}</text>
    </svg>`
  );

// Gallery for components/Sections/ — the standalone, portable one-file
// sections (see components/Sections/README.md for the contract).
//
// New section landed there? Add one entry to SECTIONS below. That's the
// only step needed to make it show up here.
const SECTIONS = [
  {
    id: "hero-build-smarter",
    title: "Hero — Build Smarter",
    file: "HeroBuildSmarter.js",
    Component: HeroBuildSmarter,
  },
  {
    id: "hero-build-smarter-bg",
    title: "Hero — Build Smarter (background image variant)",
    file: "HeroBuildSmarter.js",
    Component: HeroBuildSmarter,
    props: {
      // Inline SVG placeholder so this demo has no network dependency —
      // swap in a real photo URL to see the section with actual imagery.
      backgroundImage:
        "data:image/svg+xml;utf8," +
        encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='1920' height='800'>
            <defs>
              <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                <stop offset='0%' stop-color='#9fb8d9'/>
                <stop offset='100%' stop-color='#dfe7ef'/>
              </linearGradient>
            </defs>
            <rect width='1920' height='800' fill='url(#g)'/>
          </svg>`
        ),
    },
  },
  {
    id: "coverflow-carousel",
    title: "Carousel — Coverflow",
    file: "CoverflowCarousel.js",
    Component: CoverflowCarousel,
    props: {
      slides: [
        ["#0a1f44", "1"],
        ["#14406b", "2"],
        ["#1dd3f8", "3"],
        ["#6084a4", "4"],
        ["#0f2f57", "5"],
        ["#3aa0c9", "6"],
      ].map(([hex, n]) => ({ src: swatch(hex, n), alt: `Card ${n}` })),
      cardWidth: "clamp(210px, 30vw, 380px)",
      cardHeight: "clamp(158px, 22.5vw, 285px)",
      showNavigation: true,
      showPagination: true,
    },
  },
];

const SectionsLab = () => {
  return (
    <LabShell
      active="Sections"
      title="Standalone sections"
      subtitle={`${SECTIONS.length} portable, self-contained section${SECTIONS.length === 1 ? "" : "s"} from components/Sections/ — no SCSS/data/icon-font dependency, drop-in anywhere. See components/Sections/README.md before adding one.`}
    >
      {SECTIONS.map((s) => (
        <div key={s.id} className="sec-block">
          <div className="sec-label">
            <span>{s.title}</span>
            <code>components/Sections/{s.file}</code>
          </div>
          <div className="sec-frame">
            <s.Component {...(s.props || {})} />
          </div>
        </div>
      ))}

      <style jsx>{`
        .sec-block {
          margin: 0 0 44px;
        }
        .sec-label {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 10px;
        }
        .sec-label span {
          font-weight: 700;
          font-size: 15px;
        }
        .sec-label code {
          font-size: 12px;
          color: var(--lab-dim);
        }
        .sec-frame {
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };
  return { props: {} };
}

export default SectionsLab;
