// Server-only helpers for the /lab/ routes.
//
// Imported by the lab pages' getServerSideProps ONLY — never at module scope of a
// component — so `fs` stays out of the client bundle.
//
import fs from "fs";
import path from "path";

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
          // encodeURI leaves `#` untouched (it's a valid URI char), so a filename
          // like "4th sec#.png" turns into a fragment and 404s. Encode each
          // segment on its own with encodeURIComponent instead.
          .map((f) => ({
            file: f,
            src: `/images/${encodeURIComponent(dir.name)}/${encodeURIComponent(f)}`,
          })),
      }))
      .filter((group) => group.images.length > 0);
  } catch {
    return [];
  }
};

// The lab is a development tool. In a production build every /lab/ route 404s.
// Return { notFound: true } from getServerSideProps when this is true.
export const labGuard = () => process.env.NODE_ENV === "production";
