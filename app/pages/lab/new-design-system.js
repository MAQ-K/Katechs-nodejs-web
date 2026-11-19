import React from "react";
import LabShell from "../../components/Lab/LabShell";
import { labGuard } from "../../utils/labData";

// The NEW design system, being decided with the user (plan L1st "Pages Finish", from 2026-11-19).
// This page is the single place it lives: as each decision is made, it becomes real CSS and real
// specimens here, and the planner's Design → "New design system" tab embeds this page.
// Edit WHY / DECISIONS / OPEN below as the discussion moves; replace an OPEN item with a live specimen
// once it's built.

const WHY = [
  "Pure white backgrounds are too harsh on the eye.",
  "Boxes and borders everywhere — the user doesn't want them.",
  "Icons — the user doesn't want them.",
  "Anything that looks AI-generated.",
];

const D = "2026-11-19";
const DECISIONS = [
  { title: "It's an update, not a new system", detail: "Navy ink, Almarai, RTL rules and the section structure stay. Full direction: new-design-system/claude-designer/01-design-direction.md.", date: D },
  { title: "Visuals are edited photos and device mockups", detail: "Made by a human designer from the Designer Brief (written by the Art Director). No icons, no illustrations unless decided later.", date: D },
  { title: "Page ground: neutral light grey #F2F2F2", detail: "Replaces pure white. Alternate sections a touch darker (about #E9E9E9).", date: D },
  { title: "Borderless panels, white OK", detail: "Groups of sibling items sit in white #FFFFFF panels on the grey ground, radius 20px, no border lines anywhere. Text-only sections have no panel.", date: D },
  { title: "No accent colour", detail: "Navy ink and greys only; colour comes from photos and mockups. The cyan is retired.", date: D },
  { title: "Headline weight depends on the level", detail: "Hero / display titles light (300–400) and large; section and panel titles bold (700). Two-tone where a heading splits naturally.", date: D },
  { title: "Section titles: centred or right-aligned by section", detail: "Centred for section openers with full-width content below; right-aligned and asymmetric where the title sits beside the content.", date: D },
  { title: "Buttons: navy pill with a plain arrow", detail: "Arrow after the label, pointing left (RTL), no circle. Secondary action = text link with an arrow. No outlined buttons.", date: D },
];

const OPEN = [
  { title: "Shadows", question: "None (white on grey does the separating), or a very soft lift on hover for clickable panels? The Claude designer shows both; pick by eye." },
  { title: "Typography", question: "Almarai stays for now. Revisit a second Arabic display face after the first designed pages?" },
  { title: "Imagery", question: "Cut-out photos bleeding off a panel edge, or rounded images inside panels? Mockups follow the UX Creatives reference." },
  { title: "Motion", question: "Calm reveals plus one signature interaction per page (expanding panel or drag row) — confirm once the designer shows it." },
];

const NewDesignSystem = () => (
  <LabShell
    active="New DS"
    title="New design system"
    subtitle="Being decided now. Every decision here becomes real CSS on this page, so what you see is the actual system."
  >
    <section className="nds-block">
      <h2>Why we're changing</h2>
      <ul>{WHY.map((w) => <li key={w}>{w}</li>)}</ul>
    </section>

    <section className="nds-block">
      <h2>Decided <span>{DECISIONS.length}</span></h2>
      {DECISIONS.map((d) => (
        <div className="nds-row" key={d.title}>
          <b>{d.title}</b>
          <p>{d.detail}</p>
          <small>{d.date}</small>
        </div>
      ))}
    </section>

    <section className="nds-block">
      <h2>To decide <span>{OPEN.length}</span></h2>
      <div className="nds-open">
        {OPEN.map((o) => (
          <div className="nds-q" key={o.title}>
            <b>{o.title}</b>
            <p>{o.question}</p>
          </div>
        ))}
      </div>
    </section>

    <style jsx>{`
      .nds-block {
        max-width: 980px;
        margin: 0 0 36px;
      }
      .nds-block h2 {
        font-size: 18px;
        margin: 0 0 12px;
        display: flex;
        gap: 8px;
        align-items: baseline;
      }
      .nds-block h2 span {
        font-size: 12px;
        color: var(--lab-dim);
        font-weight: 400;
      }
      ul {
        margin: 0;
        padding-inline-start: 20px;
        line-height: 1.9;
      }
      .nds-row {
        padding: 12px 0;
        border-top: 1px solid var(--lab-line);
        display: grid;
        gap: 2px;
      }
      .nds-row p,
      .nds-q p {
        margin: 0;
        color: var(--lab-dim);
        line-height: 1.6;
      }
      .nds-row small {
        color: var(--lab-dim);
        font-size: 12px;
      }
      .nds-open {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 18px 28px;
      }
      .nds-q {
        display: grid;
        gap: 4px;
      }
    `}</style>
  </LabShell>
);

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };
  return { props: {} };
}

export default NewDesignSystem;
