import React from "react";
import Head from "next/head";
import { labGuard } from "../../utils/labData";

// The Katechs planner (Manager, Design, Content, Agents, Archive). The page itself is plain HTML served
// by /api/lab/planner/ and saves to agents/manager/planner.json at the repo root. Dev only.
const PlannerLab = () => (
  <>
    <Head>
      <title>Katechs Planner</title>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
    <iframe
      src="/api/lab/planner/"
      title="Katechs Planner"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0, background: "#0a0e1a", zIndex: 9999 }}
    />
  </>
);

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };
  return { props: {} };
}

export default PlannerLab;
