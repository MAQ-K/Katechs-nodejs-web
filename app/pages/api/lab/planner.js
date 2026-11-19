import fs from "fs";
import path from "path";
import { labGuard } from "../../../utils/labData";

// Dev-only backend for /lab/planner/.
//   GET  /api/lab/planner/          → the planner page (components/Lab/planner.html + a db adapter)
//   GET  /api/lab/planner/?data=1   → { mtime, data } — the whole planner
//   POST /api/lab/planner/          → { op: "set"|"update"|"delete", coll, id, data }
// The data is ONE JSON file in the repo, so it syncs between devices through git and the Manager can
// read and edit it directly. ponytail: whole-file read/write per request — fine for one person on a
// dev server; move to a real store if several people ever edit at once.
const FILE = path.join(process.cwd(), "..", "agents", "manager", "planner.json");
const PAGE = path.join(process.cwd(), "components", "Lab", "planner.html");
const COLLS = ["plans", "tasks", "notes", "agents", "folders", "lib", "archive", "settings"];
const ID = /^[A-Za-z0-9_.~:@+-]{1,200}$/;

const read = () => JSON.parse(fs.readFileSync(FILE, "utf8"));
const write = (db) => {
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(db, null, 2) + "\n");
  fs.renameSync(tmp, FILE);
};

// Stands in for the claude.ai `db` capability the page was written against: same calls
// (collection().onSnapshot, doc().set/update/delete), backed by this route. Polls every 3 s so
// edits the Manager makes to planner.json show up without a reload.
const ADAPTER = `<script>
(() => {
  const API = "/api/lab/planner/";
  let state = null, mtime = 0;
  const listeners = {};
  const snap = (c) => {
    const meta = { fromCache: false, hasPendingWrites: false };
    const docs = Object.entries((state && state[c]) || {}).map(([id, d]) => ({ id, exists: true, data: () => d, metadata: meta }));
    return { docs, size: docs.length, empty: !docs.length, metadata: meta, docChanges: () => [] };
  };
  const emit = () => Object.keys(listeners).forEach((c) => listeners[c].forEach((fn) => fn(snap(c))));
  const load = async (force) => {
    try {
      const r = await fetch(API + "?data=1", { cache: "no-store" });
      const j = await r.json();
      if (!force && state && j.mtime === mtime) return;
      mtime = j.mtime; state = j.data; emit();
    } catch (e) { Object.keys(listeners).forEach((c) => (listeners[c].err || []).forEach((fn) => fn({ code: "unavailable" }))); }
  };
  const write = async (op, coll, id, data) => {
    state[coll] = state[coll] || {};
    if (op === "delete") delete state[coll][id];
    else if (op === "set") state[coll][id] = data;
    else state[coll][id] = { ...(state[coll][id] || {}), ...data };
    emit();
    const r = await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ op, coll, id, data }) });
    if (!r.ok) { await load(true); throw { code: r.status === 400 ? "invalid_argument" : "unavailable" }; }
    mtime = (await r.json()).mtime;
  };
  const rid = () => Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
  const db = {
    collection: (c) => ({
      onSnapshot(fn, err) {
        (listeners[c] = listeners[c] || []).push(fn);
        if (err) (listeners[c].err = listeners[c].err || []).push(err);
        if (state) fn(snap(c));
        return () => { listeners[c] = listeners[c].filter((x) => x !== fn); };
      },
      doc: (id = rid()) => ({
        id,
        set: (d) => write("set", c, id, d),
        update: (d) => write("update", c, id, d),
        delete: () => write("delete", c, id),
      }),
    }),
  };
  window.claude = { use: async (name) => (name === "db" ? db : null) };
  load();
  setInterval(load, 3000);
  window.addEventListener("focus", () => load());
})();
</script>`;

export default function handler(req, res) {
  if (labGuard()) return res.status(404).end();
  res.setHeader("Cache-Control", "no-store");

  if (req.method === "GET" && req.query.data !== undefined) {
    return res.status(200).json({ mtime: fs.statSync(FILE).mtimeMs, data: read() });
  }

  if (req.method === "GET") {
    const body = fs.readFileSync(PAGE, "utf8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(
      `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
        `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">` +
        `<style>body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>` +
        ADAPTER +
        `</head><body>${body}</body></html>`
    );
  }

  if (req.method === "POST") {
    const { op, coll, id, data } = req.body || {};
    const okData = op === "delete" || (data && typeof data === "object" && !Array.isArray(data));
    if (!["set", "update", "delete"].includes(op) || !COLLS.includes(coll) || !ID.test(id || "") || !okData) {
      return res.status(400).json({ error: "Bad request" });
    }
    const db = read();
    db[coll] = db[coll] || {};
    if (op === "delete") delete db[coll][id];
    else if (op === "set") db[coll][id] = data;
    else db[coll][id] = { ...(db[coll][id] || {}), ...data };
    write(db);
    return res.status(200).json({ ok: true, mtime: fs.statSync(FILE).mtimeMs });
  }

  return res.status(405).end();
}
