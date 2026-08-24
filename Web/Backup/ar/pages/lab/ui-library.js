import React, { useState } from "react";
import LabShell from "../../components/Lab/LabShell";
import { readUiLibrary, readInspirationImages, labGuard } from "../../utils/labData";

// Inspiration board — the reference screenshots already collected under
// public/images/*inspiration*, plus whatever the UI Library Searcher has filed
// into brain/ui-library/. Click an image to open it full size.

const VERDICT_TONE = {
  approved: "ok",
  built: "ok",
  rejected: "no",
  proposed: "wait",
};

const UiLibraryLab = ({ library, groups }) => {
  const [zoom, setZoom] = useState(null);
  const hasEntries = library.entries.length > 0 || library.rows.length > 0;

  return (
    <LabShell
      active="UI Library"
      title="UI library board"
      subtitle="Reference images collected for this site, and the ideas filed in brain/ui-library/. The Searcher files, the Manager and you pick, the Implementer builds."
    >
      <h2 className="lab-section-title">Filed ideas — brain/ui-library/</h2>
      {hasEntries ? (
        <div className="lab-lib-shots">
          {library.entries.map((e) => (
            <figure key={e.file} className="lab-lib-card" onClick={() => e.image && setZoom(e.image)}>
              {e.image ? (
                <img src={e.image} alt={e.title} loading="lazy" />
              ) : (
                <div className="lab-lib-noimg">
                  <i className="bx bx-image-alt"></i>
                </div>
              )}
              <figcaption>
                <span className={`lab-verdict ${VERDICT_TONE[e.verdict.toLowerCase()] || "wait"}`}>
                  {e.verdict}
                </span>
                <strong>{e.title}</strong>
                <small>
                  {[e.type, e.forPage].filter(Boolean).join(" · ") || "—"}
                  {" · "}
                  <code>brain/ui-library/inspiration/{e.file}</code>
                </small>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <p className="lab-empty">
          <i className="bx bx-folder-open"></i>
          Nothing filed yet. Run <code>/ag-ui-search</code> — task <b>T-010</b> is the UI library for SEO,
          Digital Marketing and Training.
        </p>
      )}

      {groups.map((group) => (
        <div key={group.folder}>
          <h2 className="lab-section-title">
            {group.folder} <span className="lab-count">{group.images.length}</span>
          </h2>
          <div className="lab-shots">
            {group.images.map((img) => (
              <figure key={img.src} onClick={() => setZoom(img.src)}>
                {/* Plain <img>: these are reference screenshots of wildly different
                    sizes, and next/image wants intrinsic dimensions we don't have. */}
                <img src={img.src} alt={img.file} loading="lazy" />
                <figcaption>{img.file}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}

      {groups.length === 0 ? (
        <p className="lab-empty">
          <i className="bx bx-image"></i>
          No <code>public/images/*inspiration*</code> folders found.
        </p>
      ) : null}

      {zoom ? (
        <div className="lab-zoom" onClick={() => setZoom(null)} role="presentation">
          <img src={zoom} alt="" />
          <button className="lab-zoom-x" onClick={() => setZoom(null)} aria-label="Close">
            <i className="bx bx-x"></i>
          </button>
        </div>
      ) : null}

      <style jsx global>{`
        .lab-lib-shots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 14px;
        }
        .lab-lib-card {
          margin: 0;
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          overflow: hidden;
          cursor: zoom-in;
        }
        .lab-lib-card img {
          display: block;
          width: 100%;
          height: 170px;
          object-fit: cover;
          object-position: top center;
          background: var(--lab-bg);
        }
        .lab-lib-noimg {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 170px;
          font-size: 26px;
          color: var(--lab-dim);
          background: var(--lab-bg);
        }
        .lab-lib-card figcaption {
          padding: 10px 14px;
          border-top: 1px solid var(--lab-line);
        }
        .lab-lib-card strong {
          display: block;
          font-size: 14px;
          margin: 4px 0 2px;
        }
        .lab-lib-card small {
          color: var(--lab-dim);
          font-size: 12px;
          word-break: break-word;
        }
        .lab-verdict {
          font-size: 11px;
          font-weight: 700;
          border-radius: 999px;
          padding: 3px 10px;
          white-space: nowrap;
        }
        .lab-verdict.ok {
          background: #dcfce7;
          color: #14532d;
        }
        .lab-verdict.no {
          background: #fee2e2;
          color: #7f1d1d;
        }
        .lab-verdict.wait {
          background: #fef3c7;
          color: #7a5c14;
        }
        .lab-count {
          font-size: 11px;
          background: var(--lab-line);
          color: var(--lab-dim);
          border-radius: 999px;
          padding: 2px 8px;
          margin-left: 6px;
        }
        .lab-shots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 14px;
        }
        .lab-shots figure {
          margin: 0;
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          overflow: hidden;
          cursor: zoom-in;
        }
        .lab-shots img {
          display: block;
          width: 100%;
          height: 170px;
          object-fit: cover;
          object-position: top center;
          background: var(--lab-bg);
        }
        .lab-shots figcaption {
          font-size: 11.5px;
          color: var(--lab-dim);
          padding: 8px 10px;
          border-top: 1px solid var(--lab-line);
          word-break: break-word;
        }
        .lab-empty {
          background: var(--lab-panel);
          border: 1px dashed var(--lab-line);
          border-radius: 10px;
          padding: 22px;
          color: var(--lab-dim);
          font-size: 13.5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .lab-zoom {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(8, 10, 13, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
          cursor: zoom-out;
        }
        .lab-zoom img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .lab-zoom-x {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 26px;
          background: none;
          border: 0;
          color: #fff;
          cursor: pointer;
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };

  return {
    props: {
      library: readUiLibrary(),
      groups: readInspirationImages(),
    },
  };
}

export default UiLibraryLab;
