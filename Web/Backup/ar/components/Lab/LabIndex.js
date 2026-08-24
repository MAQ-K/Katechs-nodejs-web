import React from "react";

// Sticky group index, shared by the Motion and Components tabs so the two read
// as the same kind of page. Chips jump to a group; the count tells you how big
// the jump is before you take it.
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const LabIndex = ({ groups }) => (
  <nav className="lab-index" aria-label="Groups">
    {groups.map((g) => (
      <a key={g.group} href={`#${slug(g.group)}`}>
        {g.group.split("—")[0].trim()}
        <span>{g.items.length}</span>
      </a>
    ))}

    <style jsx global>{`
      .lab-index {
        position: sticky;
        top: 54px;
        z-index: 20;
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        padding: 12px 0;
        margin-bottom: 6px;
        background: var(--lab-bg);
      }
      .lab-index a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        text-decoration: none;
        color: var(--lab-dim);
        background: var(--lab-panel);
        border: 1px solid var(--lab-line);
        border-radius: 999px;
        padding: 5px 12px;
      }
      .lab-index a:hover {
        color: var(--lab-ink);
        border-color: var(--lab-accent);
      }
      .lab-index a span {
        font-size: 10.5px;
        font-weight: 700;
        background: var(--lab-bg);
        border-radius: 999px;
        padding: 1px 6px;
      }
      /* Offset so an anchored group lands below the sticky bar + index. */
      .lab-anchor {
        scroll-margin-top: 110px;
      }
    `}</style>
  </nav>
);

export { slug };
export default LabIndex;
