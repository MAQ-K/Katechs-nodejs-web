import React, { createContext, useContext, useState } from "react";
import Head from "next/head";
import Link from "next/link";

// Chrome for the /lab/ routes. Dev-only tooling, so it deliberately owns no
// global stylesheet: everything here is styled-jsx, scoped under `.lab-*`, and
// unmounts with the route. The real site theme (style.css / rtl.css) is already
// global via _app.js, so specimens render exactly as they do on the live pages.
//
// Icons are `bx-*` only — the bundled Boxicons font is missing the `bxs-*`
// glyphs and they render as empty boxes.

export const LabContext = createContext({
  width: "full",
  dir: "rtl",
  freeze: false,
  ground: "light",
});

export const useLab = () => useContext(LabContext);

const WIDTHS = [
  { id: "full", label: "Full" },
  { id: "360", label: "360" },
  { id: "768", label: "768" },
  { id: "992", label: "992" },
  { id: "1200", label: "1200" },
];

const NAV = [
  { href: "/lab/", label: "Hub", icon: "bx-home-alt" },
  { href: "/lab/motion/", label: "Motion", icon: "bx-run" },
  { href: "/lab/components/", label: "Components", icon: "bx-grid-alt" },
  { href: "/lab/ui-library/", label: "UI Library", icon: "bx-bulb" },
];

const LabShell = ({ title, subtitle, children, active }) => {
  const [width, setWidth] = useState("full");
  const [dir, setDir] = useState("rtl");
  const [freeze, setFreeze] = useState(false);
  const [ground, setGround] = useState("light");

  return (
    <LabContext.Provider value={{ width, dir, freeze, ground }}>
      <Head>
        <title>{`LAB · ${title}`}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className={`lab-root lab-ground-${ground}`} dir="ltr">
        <header className="lab-bar">
          <div className="lab-bar-in">
            <div className="lab-brand">
              <i className="bx bx-test-tube"></i>
              <span>KATECHS LAB</span>
              <em>dev only</em>
            </div>

            <nav className="lab-nav">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active === item.label ? "on" : ""}
                >
                  <i className={`bx ${item.icon}`}></i>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="lab-tools">
              <div className="lab-seg" title="Viewport width — anything but Full renders each specimen in an iframe so real media queries apply">
                {WIDTHS.map((w) => (
                  <button
                    key={w.id}
                    className={width === w.id ? "on" : ""}
                    onClick={() => setWidth(w.id)}
                  >
                    {w.label}
                  </button>
                ))}
              </div>

              <div className="lab-seg">
                <button className={dir === "rtl" ? "on" : ""} onClick={() => setDir("rtl")}>
                  RTL
                </button>
                <button className={dir === "ltr" ? "on" : ""} onClick={() => setDir("ltr")}>
                  LTR
                </button>
              </div>

              <button
                className={`lab-btn ${freeze ? "on" : ""}`}
                onClick={() => setFreeze((v) => !v)}
                title="CSS-level freeze. This approximates reduced motion — it does NOT exercise the JS useReducedMotion path. For the real thing use DevTools → Rendering → Emulate prefers-reduced-motion."
              >
                <i className="bx bx-pause"></i>
                {freeze ? "Motion frozen" : "Freeze motion"}
              </button>

              <button
                className="lab-btn"
                onClick={() => setGround((g) => (g === "light" ? "dark" : "light"))}
                title="Toggle the ground behind specimens"
              >
                <i className="bx bx-adjust"></i>
                {ground === "light" ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </header>

        <div className="lab-head">
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
          {freeze ? (
            <p className="lab-warn">
              <i className="bx bx-info-circle"></i>
              Motion is frozen with CSS only. The real <code>prefers-reduced-motion</code> path (the one every
              component must honour) fires from the OS setting — test it with DevTools → Rendering → Emulate
              prefers-reduced-motion, or Windows Settings → Accessibility → Visual effects → Animation effects.
            </p>
          ) : null}
        </div>

        <main className="lab-main">{children}</main>
      </div>

      <style jsx global>{`
        .lab-root {
          min-height: 100vh;
          font-family: "Segoe UI", system-ui, sans-serif;
          --lab-ink: #14161a;
          --lab-dim: #6b7280;
          --lab-line: #e3e6ea;
          --lab-panel: #ffffff;
          --lab-bg: #f4f6f8;
          --lab-accent: #1dd3f8;
          background: var(--lab-bg);
          color: var(--lab-ink);
        }
        .lab-root.lab-ground-dark {
          --lab-ink: #eef1f5;
          --lab-dim: #9aa3ad;
          --lab-line: #2a2f37;
          --lab-panel: #14171c;
          --lab-bg: #0c0e11;
        }
        .lab-bar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--lab-panel);
          border-bottom: 1px solid var(--lab-line);
        }
        .lab-bar-in {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          padding: 10px 20px;
        }
        .lab-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
          font-size: 13px;
        }
        .lab-brand i {
          color: var(--lab-accent);
          font-size: 18px;
        }
        .lab-brand em {
          font-style: normal;
          font-size: 10px;
          font-weight: 600;
          color: #b45309;
          background: #fef3c7;
          border-radius: 4px;
          padding: 2px 6px;
          letter-spacing: 0.04em;
        }
        .lab-nav {
          display: flex;
          gap: 4px;
        }
        .lab-nav a {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          color: var(--lab-dim);
          text-decoration: none;
        }
        .lab-nav a:hover {
          background: var(--lab-bg);
          color: var(--lab-ink);
        }
        .lab-nav a.on {
          background: var(--lab-ink);
          color: var(--lab-panel);
        }
        .lab-tools {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
          flex-wrap: wrap;
        }
        .lab-seg {
          display: flex;
          border: 1px solid var(--lab-line);
          border-radius: 6px;
          overflow: hidden;
        }
        .lab-seg button,
        .lab-btn {
          font: inherit;
          font-size: 12px;
          padding: 5px 10px;
          border: 0;
          background: var(--lab-panel);
          color: var(--lab-dim);
          cursor: pointer;
        }
        .lab-seg button + button {
          border-left: 1px solid var(--lab-line);
        }
        .lab-seg button.on {
          background: var(--lab-ink);
          color: var(--lab-panel);
        }
        .lab-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          border: 1px solid var(--lab-line);
          border-radius: 6px;
        }
        .lab-btn.on {
          background: var(--lab-ink);
          color: var(--lab-panel);
        }
        .lab-seg button:focus-visible,
        .lab-btn:focus-visible,
        .lab-nav a:focus-visible {
          outline: 2px solid var(--lab-accent);
          outline-offset: 2px;
        }
        .lab-head {
          padding: 28px 20px 6px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .lab-head h1 {
          font-size: 26px;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .lab-head p {
          margin: 0;
          color: var(--lab-dim);
          font-size: 14px;
          max-width: 900px;
          line-height: 1.6;
        }
        .lab-warn {
          margin-top: 12px !important;
          background: #fef3c7;
          border: 1px solid #fcd34d;
          color: #7a5c14 !important;
          padding: 10px 12px;
          border-radius: 6px;
          font-size: 13px;
        }
        .lab-warn i {
          margin-right: 6px;
        }
        .lab-main {
          padding: 18px 20px 80px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .lab-grid {
          display: grid;
          gap: 18px;
        }
        .lab-section-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--lab-dim);
          margin: 34px 0 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--lab-line);
        }
        .lab-freeze *,
        .lab-freeze *::before,
        .lab-freeze *::after {
          animation-play-state: paused !important;
          animation: none !important;
          transition: none !important;
        }
      `}</style>
    </LabContext.Provider>
  );
};

export default LabShell;
