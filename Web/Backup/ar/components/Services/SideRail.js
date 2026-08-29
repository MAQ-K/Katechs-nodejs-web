import React from "react";

// Floating section rail for the Web Services page — a vertical segmented
// control. Presentational only: the page owns `activeId` (its scroll-spy) and
// the scroll handler, so this stays a pure render of that state.
//
// These are <button>s, not radio inputs: the rail navigates, it doesn't capture
// a form value, and radio semantics would mislead a screen reader. That also
// keeps the active state on a plain class instead of :has(), which this
// codebase uses nowhere and Firefox only supports from 121.

const SideRail = ({ items, activeId, onSelect, visible = true }) => {
  if (!items || items.length === 0) return null;

  // Clamped so an unknown activeId parks the pill on the first slot rather
  // than translating it out of the capsule on -1.
  const activeIndex = Math.max(
    0,
    items.findIndex((it) => it.id === activeId)
  );

  return (
    <nav
      className={`wsv-rail${visible ? "" : " is-hidden"}`}
      aria-label="أقسام خدمات الويب"
      aria-hidden={visible ? undefined : "true"}
    >
      {items.map((it) => (
        <button
          key={it.id}
          type="button"
          className={`wsv-rail-item${it.id === activeId ? " is-active" : ""}`}
          aria-current={it.id === activeId ? "true" : undefined}
          onClick={() => onSelect(it.id)}
        >
          <i className={it.icon} aria-hidden="true" />
          <span>{it.label}</span>
        </button>
      ))}

      {/* A sibling of the items, not a child of the active one, so it can
          slide between slots. --wsv-rail-i is the only thing that moves it. */}
      <span
        className="wsv-rail-pill"
        aria-hidden="true"
        style={{ "--wsv-rail-i": activeIndex }}
      />
    </nav>
  );
};

export default SideRail;
