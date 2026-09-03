import React from "react";

// Floating section navigator for the homepage — a horizontal segmented control
// that jumps between the page's main blocks.
//
// Presentational only, the same contract as components/Services/SideRail.js:
// the PAGE owns `activeId` (its scroll-spy), the scroll handler, and the
// decision of when this floats. Keeping state out of here is what lets one
// scroll listener drive both the highlight and the float.
//
// These are <button>s, not radio inputs or links: the control navigates within
// the page, it does not capture a form value, and radio semantics would
// mislead a screen reader.
//
// STRUCTURE PASS: greyscale.

const SectionNav = ({ items, activeId, onSelect, floating = false }) => {
  if (!items || items.length === 0) return null;

  // Clamped so an unknown activeId parks the indicator on the first slot
  // rather than translating it out of the capsule on -1.
  const activeIndex = Math.max(
    0,
    items.findIndex((it) => it.id === activeId)
  );

  return (
    <nav
      className={`hp-nav${floating ? " is-floating" : ""}`}
      aria-label="أقسام الصفحة الرئيسية"
    >
      <div
        className="hp-nav-capsule"
        style={{ "--hp-nav-i": activeIndex, "--hp-nav-n": items.length }}
      >
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            className={`hp-nav-item${it.id === activeId ? " is-active" : ""}`}
            aria-current={it.id === activeId ? "true" : undefined}
            onClick={() => onSelect(it.id)}
          >
            {it.label}
          </button>
        ))}

        {/* A sibling of the items, not a child of the active one, so it can
            slide between slots. --hp-nav-i is the only thing that moves it. */}
        <span className="hp-nav-pill" aria-hidden="true" />
      </div>

      <style jsx>{`
        .hp-nav {
          display: flex;
          justify-content: center;
          padding-block: 20px;
        }
        .hp-nav.is-floating {
          position: fixed;
          /* Clears .navbar-area, which is fixed-top and shrinks when it gains
             .is-sticky. The page passes the live measurement down as this
             custom property rather than hardcoding a height here. */
          inset-block-start: var(--hp-nav-top, 90px);
          inset-inline: 0;
          z-index: 1020;
          padding-block: 0;
          pointer-events: none;
        }
        .hp-nav.is-floating .hp-nav-capsule {
          pointer-events: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.14);
        }
        .hp-nav-capsule {
          position: relative;
          display: grid;
          grid-auto-flow: column;
          /* Equal columns are what make the sliding indicator a single
             translate: every slot is exactly 100% of one column wide. */
          grid-auto-columns: 1fr;
          gap: 4px;
          padding: 6px;
          border: 1px solid #d9d9d9;
          border-radius: 999px;
          background: #fff;
          max-width: calc(100% - 32px);
        }
        .hp-nav-item {
          position: relative;
          z-index: 1;
          border: 0;
          background: transparent;
          border-radius: 999px;
          padding: 10px 20px;
          white-space: nowrap;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #555;
          cursor: pointer;
          transition: color 0.25s ease;
        }
        .hp-nav-item:hover {
          color: #111;
        }
        .hp-nav-item.is-active {
          color: #fff;
        }
        .hp-nav-pill {
          position: absolute;
          z-index: 0;
          inset-block: 6px;
          inset-inline-start: 6px;
          width: calc((100% - 12px - (var(--hp-nav-n) - 1) * 4px) / var(--hp-nav-n));
          border-radius: 999px;
          background: #111;
          /* translate, not inset-inline-start, so this animates on the
             compositor. The sign flips for RTL — the site is RTL, so slot 1 is
             to the LEFT of slot 0. */
          transform: translateX(
            calc(
              var(--hp-nav-i) *
                (100% + 4px) * -1
            )
          );
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        @media (max-width: 991px) {
          .hp-nav-capsule {
            /* Below the capsule's comfortable width the pills scroll sideways
               rather than wrapping — a wrapped capsule stops reading as one
               control, and the sliding indicator assumes a single row. */
            display: flex;
            overflow-x: auto;
            max-width: calc(100% - 24px);
            border-radius: 14px;
            scrollbar-width: none;
          }
          .hp-nav-capsule::-webkit-scrollbar {
            display: none;
          }
          .hp-nav-item {
            border-radius: 10px;
            padding: 9px 16px;
            font-size: 14px;
          }
          .hp-nav-item.is-active {
            background: #111;
          }
          /* The indicator cannot track a scrolling flex row, so the active
             item carries its own background above instead. */
          .hp-nav-pill {
            display: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-nav-pill,
          .hp-nav-item {
            transition: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default SectionNav;
