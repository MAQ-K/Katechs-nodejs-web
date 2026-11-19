import React, { useState } from "react";
import { useLab } from "./LabShell";

// One framed specimen.
//
// Three things earn their keep here:
//
// 1. An error boundary. A component whose data file is missing must render as a
//    red cell naming the failure, not blank the whole gallery.
// 2. Real viewport widths. A CSS max-width wrapper does NOT re-fire media
//    queries — the component would look narrow but still be in its desktop
//    layout, which is worse than not testing at all. So any width other than
//    "Full" swaps the specimen for an <iframe> of the same lab page in bare
//    mode (?only=<id>), where media queries resolve against a real viewport.
// 3. Heavy specimens (canvas loops, 3D) mount on demand, so opening the gallery
//    doesn't start ten rAF loops at once.

class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="lab-cell-error">
          <strong>
            <i className="bx bx-error"></i> This component threw while rendering in isolation
          </strong>
          <code>{String(this.state.error.message || this.state.error)}</code>
          <span>
            Usually a missing entry in <code>data/**</code>, or a prop the section gets from its page.
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

const LabCell = ({
  id,
  title,
  path,
  meta = [],
  note,
  heavy = false,
  replayable = false,
  bareHref,
  children,
}) => {
  const { width, dir, freeze, ground } = useLab();
  const [nonce, setNonce] = useState(0);
  const [mounted, setMounted] = useState(!heavy);
  const [copied, setCopied] = useState(false);

  const framed = width !== "full" && bareHref;

  const copyPath = () => {
    if (!path || !navigator.clipboard) return;
    navigator.clipboard.writeText(path).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <section className="lab-cell">
      <header className="lab-cell-head">
        <div>
          <h2>{title}</h2>
          {path ? (
            <button className="lab-path" onClick={copyPath} title="Copy path">
              <i className={`bx ${copied ? "bx-check" : "bx-copy"}`}></i>
              {path}
            </button>
          ) : null}
        </div>

        <div className="lab-cell-actions">
          {meta.map((m) => (
            <span key={m.label} className="lab-tag" title={m.title || ""}>
              <b>{m.label}</b>
              {m.value}
            </span>
          ))}
          {replayable && !framed ? (
            <button className="lab-btn" onClick={() => setNonce((n) => n + 1)}>
              <i className="bx bx-revision"></i> Replay
            </button>
          ) : null}
          {bareHref ? (
            <a className="lab-btn" href={bareHref} target="_blank" rel="noreferrer">
              <i className="bx bx-link-external"></i> Isolate
            </a>
          ) : null}
        </div>
      </header>

      {note ? <p className="lab-cell-note">{note}</p> : null}

      <div className={`lab-stage ${freeze ? "lab-freeze" : ""}`} dir={dir}>
        {framed ? (
          <iframe
            key={`${width}-${dir}-${nonce}`}
            src={`${bareHref}&dir=${dir}${ground === "dark" ? "&ground=dark" : ""}`}
            style={{ width: `${width}px` }}
            className="lab-iframe"
            loading="lazy"
            title={title}
          />
        ) : mounted ? (
          <Boundary key={nonce}>{children}</Boundary>
        ) : (
          <button className="lab-run" onClick={() => setMounted(true)}>
            <i className="bx bx-play"></i>
            <span>Run this one</span>
            <em>heavy — canvas / 3D, mounts on demand</em>
          </button>
        )}
      </div>

      <style jsx global>{`
        .lab-cell {
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          overflow: hidden;
        }
        .lab-cell-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          padding: 12px 14px;
          border-bottom: 1px solid var(--lab-line);
        }
        .lab-cell-head h2 {
          font-size: 15px;
          font-weight: 700;
          margin: 0 0 3px;
        }
        .lab-path {
          font: inherit;
          font-size: 11px;
          font-family: ui-monospace, Consolas, monospace;
          color: var(--lab-dim);
          background: none;
          border: 0;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .lab-path:hover {
          color: var(--lab-accent);
        }
        .lab-cell-actions {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .lab-tag {
          font-size: 11px;
          border: 1px solid var(--lab-line);
          border-radius: 999px;
          padding: 3px 9px;
          color: var(--lab-dim);
          display: inline-flex;
          gap: 5px;
        }
        .lab-tag b {
          color: var(--lab-ink);
          font-weight: 600;
        }
        .lab-cell-note {
          margin: 0;
          padding: 10px 14px;
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--lab-dim);
          background: var(--lab-bg);
          border-bottom: 1px solid var(--lab-line);
        }
        .lab-stage {
          position: relative;
          overflow: auto;
          background: var(--lab-panel);
          display: flex;
          justify-content: center;
        }
        .lab-stage > * {
          width: 100%;
        }
        .lab-iframe {
          height: 620px;
          border: 0;
          border-left: 1px dashed var(--lab-line);
          border-right: 1px dashed var(--lab-line);
          background: #fff;
          flex: 0 0 auto;
        }
        .lab-run {
          font: inherit;
          width: 100%;
          padding: 46px 20px;
          background: none;
          border: 0;
          cursor: pointer;
          color: var(--lab-dim);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .lab-run i {
          font-size: 26px;
          color: var(--lab-accent);
        }
        .lab-run span {
          font-size: 14px;
          font-weight: 600;
          color: var(--lab-ink);
        }
        .lab-run em {
          font-style: normal;
          font-size: 11.5px;
        }
        .lab-cell-error {
          margin: 0;
          padding: 20px;
          width: 100%;
          background: #fef2f2;
          border-left: 3px solid #dc2626;
          color: #7f1d1d;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
        }
        .lab-cell-error code {
          font-family: ui-monospace, Consolas, monospace;
          font-size: 12px;
          background: #fff;
          border: 1px solid #fecaca;
          border-radius: 4px;
          padding: 8px 10px;
          white-space: pre-wrap;
        }
      `}</style>
    </section>
  );
};

export default LabCell;
