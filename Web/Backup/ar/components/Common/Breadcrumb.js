import React from "react";
import Link from "next/link";
import BreadcrumbGrid from "./BreadcrumbGrid";

// items: [{ label, href, icon }] — last item (no href) renders as the
// current page. `icon` is an optional Boxicons class, e.g. "bx bx-home-alt".
// `title` is optional — pages that want a page heading inside the banner
// (rather than just the crumb trail) can pass one; nothing renders there by
// default, same contract the old version had.
//
// New theme (user, 2026-09-08): `public/images/breadcrumb-bg.png` — a dark
// wireframe-grid texture with a highlighted node patch baked in — as a plain
// CSS background (the "style" half of the ask), with BreadcrumbGrid.js (the
// "component" half, an effect) layered on top: a soft glow + small linked
// node cluster that eases toward the cursor, "movable with the cursor like
// [ParticleField]". The two are independent — the image never moves, the
// canvas only ever draws the moving highlight — so there is nothing to keep
// in sync between them.
const Breadcrumb = ({ items = [], title }) => {
  return (
    <div className="breadcrumb-hero">
      <div className="breadcrumb-hero-bg" aria-hidden="true" />
      <BreadcrumbGrid className="breadcrumb-hero-grid" />
      <div className="breadcrumb-hero-fade" aria-hidden="true" />

      <div className="container breadcrumb-hero-inner">
        {title && <h1 className="breadcrumb-hero-title">{title}</h1>}

        <nav className="breadcrumb-hero-nav" aria-label="breadcrumb">
          <ul className="breadcrumb-hero-list">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li
                  className={`breadcrumb-hero-item ${isLast ? "is-active" : ""}`}
                  key={item.label}
                >
                  {isLast || !item.href ? (
                    <span>
                      {item.icon && <i className={item.icon}></i>}
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href}>
                      {item.icon && <i className={item.icon}></i>}
                      {item.label}
                    </Link>
                  )}
                  {!isLast && (
                    <i className="bx bx-chevron-left breadcrumb-hero-sep" aria-hidden="true"></i>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .breadcrumb-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding-block: clamp(48px, 8vw, 80px);
          background: #0a0f1a;
        }
        .breadcrumb-hero-bg {
          position: absolute;
          inset: 0;
          z-index: -3;
          background-image: url("/images/breadcrumb-bg.png");
          background-size: cover;
          background-position: center;
        }
        /* :global() — BreadcrumbGrid renders the <canvas> itself, and
           styled-jsx only scopes elements this component renders directly. */
        :global(.breadcrumb-hero-grid) {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          display: block;
        }
        .breadcrumb-hero-fade {
          position: absolute;
          inset: 0;
          z-index: -1;
          /* Keeps the crumb text readable over whatever part of the image
             happens to sit behind it, without flattening the texture. */
          background: linear-gradient(
            180deg,
            rgba(6, 10, 18, 0.35) 0%,
            rgba(6, 10, 18, 0.6) 100%
          );
        }
        .breadcrumb-hero-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }
        .breadcrumb-hero-title {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 38px);
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .breadcrumb-hero-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 0;
          padding: 0;
        }
        .breadcrumb-hero-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
        }
        .breadcrumb-hero-item :global(a),
        .breadcrumb-hero-item span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .breadcrumb-hero-item :global(a:hover) {
          color: #fff;
        }
        .breadcrumb-hero-item.is-active span {
          color: #fff;
        }
        .breadcrumb-hero-sep {
          color: rgba(255, 255, 255, 0.35);
          font-size: 18px;
          margin-inline-start: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .breadcrumb-hero-item :global(a) {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Breadcrumb;
