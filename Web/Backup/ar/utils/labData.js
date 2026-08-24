// Server-only helpers for the /lab/ routes.
//
// Imported by the lab pages' getServerSideProps ONLY — never at module scope of a
// component — so `fs` stays out of the client bundle.
//
// Everything here degrades to an empty result instead of throwing: the lab is a
// dev tool, and a moved/missing brain folder (a fresh worktree, for instance)
// must never 500 the page.
import fs from "fs";
import path from "path";

// The app lives at <repo>/Web/Backup/ar; the brain lives at the repo root.
const BRAIN = path.join(process.cwd(), "..", "..", "..", "brain");

const safeRead = (relPath) => {
  try {
    return fs.readFileSync(path.join(BRAIN, relPath), "utf8");
  } catch {
    return "";
  }
};

// Pulls the rows out of every GitHub-flavoured markdown table in `md`.
// Returns arrays of trimmed cells; separator rows (|---|---|) are dropped, and
// so are single-cell "section banner" rows we use inside the task table.
const tableRows = (md) =>
  md
    .split("\n")
    .filter((line) => line.trim().startsWith("|"))
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim())
    )
    .filter((cells) => cells.length > 1 && !/^-{2,}$/.test(cells[0].replace(/:/g, "")));

// Strips markdown inline syntax so table cells render as plain text.
const plain = (s = "") =>
  s
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_]/g, "")
    .trim();

// brain/components/REGISTRY.md — keyed by component path so a specimen can look
// up its own registry row ("Shipped", "Placeholder", which data file feeds it).
export const readRegistry = () => {
  const rows = tableRows(safeRead("components/REGISTRY.md"));
  const byPath = {};

  rows.forEach((cells) => {
    const [name, p, ...rest] = cells.map(plain);
    if (!p || !p.includes("/") || p.toLowerCase() === "path") return;
    byPath[p.replace(/^components\//, "")] = {
      name,
      path: p,
      data: rest[0] || "",
      status: rest[rest.length - 1] || "",
    };
  });

  return byPath;
};

// brain/ui-library/README.md index table + every inspiration entry file.
export const readUiLibrary = () => {
  const rows = tableRows(safeRead("ui-library/README.md"))
    .map((cells) => cells.map(plain))
    .filter(
      (cells) =>
        cells[0] && cells[0].toLowerCase() !== "file" && !cells[0].startsWith("(empty")
    );

  let entries = [];
  try {
    entries = fs
      .readdirSync(path.join(BRAIN, "ui-library", "inspiration"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => {
        const md = safeRead(path.join("ui-library", "inspiration", f));
        const verdict = (md.match(/\*\*Verdict:\*\*\s*(.+)/) || [])[1] || "Proposed";
        const type = (md.match(/\*\*Type:\*\*\s*(.+)/) || [])[1] || "";
        const forPage = (md.match(/\*\*For page:\*\*\s*(.+)/) || [])[1] || "";
        return {
          file: f,
          title: (md.match(/^#\s*(.+)/m) || [])[1] || f.replace(/\.md$/, ""),
          verdict: verdict.trim(),
          type: type.trim(),
          forPage: forPage.trim(),
        };
      });
  } catch {
    entries = [];
  }

  return { rows, entries };
};

// Reference screenshots already collected under public/images/*inspiration*.
// Returns web paths, so the lab can show them with a plain <img>.
export const readInspirationImages = () => {
  const imagesDir = path.join(process.cwd(), "public", "images");
  try {
    return fs
      .readdirSync(imagesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && /inspiration/i.test(d.name))
      .map((dir) => ({
        folder: dir.name,
        images: fs
          .readdirSync(path.join(imagesDir, dir.name))
          .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
          .map((f) => ({ file: f, src: encodeURI(`/images/${dir.name}/${f}`) })),
      }))
      .filter((group) => group.images.length > 0);
  } catch {
    return [];
  }
};

// The lab is a development tool. In a production build every /lab/ route 404s.
// Return { notFound: true } from getServerSideProps when this is true.
export const labGuard = () => process.env.NODE_ENV === "production";
