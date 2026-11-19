import React from "react";
import Head from "next/head";
import LabShell from "../../components/Lab/LabShell";
import LabCell from "../../components/Lab/LabCell";
import SPECIMENS, { findSpecimen } from "../../components/Lab/specimens";
import { labGuard } from "../../utils/labData";

// Component gallery — the real components, rendered in isolation.
//
// Two modes:
//   /lab/components/            → the gallery
//   /lab/components/?only=<id>  → that one component, bare, no chrome.
// The bare mode is what the viewport-width iframes load, so media queries
// resolve against a real viewport instead of a CSS max-width that fools nobody.

const ComponentsLab = ({ only, dir, ground }) => {
  if (only) {
    const specimen = findSpecimen(only);
    if (!specimen) {
      return <p style={{ padding: 24, fontFamily: "sans-serif" }}>Unknown specimen: {only}</p>;
    }
    const { Component } = specimen;
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <div dir={dir} style={ground === "dark" ? { background: "#0c0e11" } : undefined}>
          <Component />
        </div>
      </>
    );
  }

  const total = SPECIMENS.reduce((n, g) => n + g.items.length, 0);

  return (
    <LabShell
      active="Components"
      title="Component gallery"
      subtitle={`${total} real components rendered in isolation, straight from components/**. Not screenshots — this is the same code the live pages run.`}
    >
      {SPECIMENS.map((group) => (
        <div key={group.group}>
          <h2 className="lab-section-title">{group.group}</h2>
          {group.warn ? <p className="lab-group-warn">{group.warn}</p> : null}

          <div className="lab-grid">
            {group.items.map((item) => {
              return (
                <LabCell
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  path={item.path}
                  meta={[]}
                  note={item.note}
                  bareHref={`/lab/components/?only=${item.id}`}
                >
                  <item.Component />
                </LabCell>
              );
            })}
          </div>
        </div>
      ))}

      <style jsx global>{`
        .lab-group-warn {
          margin: -4px 0 14px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #7a5c14;
          background: #fdf6e3;
          border: 1px solid #d9b45e;
          border-radius: 6px;
          padding: 9px 12px;
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps({ query }) {
  if (labGuard()) return { notFound: true };

  return {
    props: {
      only: query.only || null,
      dir: query.dir === "ltr" ? "ltr" : "rtl",
      ground: query.ground === "dark" ? "dark" : "light",
    },
  };
}

export default ComponentsLab;
