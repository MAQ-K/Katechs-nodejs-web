import React, { useState } from "react";
import LabShell from "../../components/Lab/LabShell";
import { readInspirationImages, labGuard } from "../../utils/labData";

// Inspiration board — the reference screenshots collected under
// public/images/*inspiration*. Click an image to open it full size.

const UiLibraryLab = ({ groups }) => {
  const [zoom, setZoom] = useState(null);

  return (
    <LabShell
      active="UI Library"
      title="UI library board"
      subtitle="Reference images collected for this site, from public/images/*inspiration*."
    >
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
      groups: readInspirationImages(),
    },
  };
}

export default UiLibraryLab;
