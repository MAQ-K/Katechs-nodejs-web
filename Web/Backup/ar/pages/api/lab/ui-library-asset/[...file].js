import fs from "fs";
import path from "path";
import { labGuard } from "../../../../utils/labData";

// Streams screenshots straight out of brain/ui-library/inspiration/assets/.
// Those files must never be copied into public/ (brain/ui-library/README.md
// rule), so the Lab needs its own dev-only route to serve them.
const ASSETS_DIR = path.join(process.cwd(), "..", "..", "..", "brain", "ui-library", "inspiration", "assets");

const MIME = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".avif": "image/avif",
};

export default function handler(req, res) {
  if (labGuard()) return res.status(404).end();

  const parts = [].concat(req.query.file || []);
  const name = parts.join("/");

  if (!name || name.includes("..") || parts.length !== 1) {
    return res.status(400).end();
  }

  const ext = path.extname(name).toLowerCase();
  const mime = MIME[ext];
  if (!mime) return res.status(400).end();

  const filePath = path.join(ASSETS_DIR, name);
  if (!filePath.startsWith(ASSETS_DIR) || !fs.existsSync(filePath)) {
    return res.status(404).end();
  }

  res.setHeader("Content-Type", mime);
  res.setHeader("Cache-Control", "no-store");
  fs.createReadStream(filePath).pipe(res);
}
