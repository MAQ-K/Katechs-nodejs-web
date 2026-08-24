import React from "react";
import Link from "next/link";
import LabShell from "../../components/Lab/LabShell";
import SPECIMENS from "../../components/Lab/specimens";
import { labGuard } from "../../utils/labData";

// The lab hub. Three doors into the visual work, plus every real route with
// where it actually stands — so nobody has to guess whether a page is a
// wireframe, a UX prototype or shipped.

const DOORS = [
  {
    href: "/lab/motion/",
    icon: "bx-run",
    title: "Motion lab",
    body:
      "Every motion primitive running: reveals, magnetic hover, 3D tilt, marquee, count-up, particles. Mapped to the ui-ux-pro-max motion.csv presets.",
  },
  {
    href: "/lab/components/",
    icon: "bx-grid-alt",
    title: "Component gallery",
    body:
      "The real components from components/**, rendered in isolation at any viewport width, RTL or LTR. Not mockups.",
  },
  {
    href: "/lab/ui-library/",
    icon: "bx-bulb",
    title: "UI library board",
    body:
      "Reference screenshots collected for the site, and the ideas the Searcher has filed into brain/ui-library/.",
  },
];

const ROUTES = [
  { href: "/", label: "الرئيسية · Home", state: "legacy", note: "Template base — goal G5" },
  { href: "/services/", label: "الخدمات · Web services hub", state: "wireframe", note: "Grey boxes. Goal G2 — the big one" },
  { href: "/services/website-design/", label: "تصميم المواقع", state: "legacy" },
  { href: "/services/hosting-services/", label: "الاستضافة", state: "shipped", note: "Hero, Pricing, cPanel banner, Feature grid" },
  { href: "/services/emails/", label: "البريد الإلكتروني", state: "shipped" },
  { href: "/services/app-development/", label: "تطبيقات الجوال", state: "shipped" },
  { href: "/services/seo/", label: "سيو · SEO", state: "rebuild", note: "T-010 → T-012" },
  { href: "/services/digital-marketing/", label: "التسويق الرقمي", state: "rebuild", note: "T-010 → T-012" },
  { href: "/training/", label: "التدريب · Training", state: "rebuild", note: "T-010 → T-012" },
  { href: "/services/security/", label: "الأمن السيبراني", state: "legacy" },
  { href: "/services/ssl-certificate/", label: "شهادات SSL", state: "legacy" },
  { href: "/services/vps-hosting/", label: "استضافة VPS", state: "legacy" },
  { href: "/services/wordprees-hosting/", label: "استضافة ووردبريس", state: "legacy" },
  { href: "/about-us/", label: "من نحن", state: "legacy" },
  { href: "/contact/", label: "اتصل بنا", state: "legacy" },
];

const STATE_LABEL = {
  shipped: "shipped",
  rebuild: "rebuild target",
  wireframe: "wireframe",
  legacy: "legacy template",
};

const Hub = () => {
  const count = SPECIMENS.reduce((n, g) => n + g.items.length, 0);

  return (
    <LabShell
      active="Hub"
      title="Katechs Lab"
      subtitle="Where the visual work is visible. Dev only — every /lab/ route 404s in a production build."
    >
      <div className="lab-doors">
        {DOORS.map((d) => (
          <Link key={d.href} href={d.href} className="lab-door">
            <i className={`bx ${d.icon}`}></i>
            <strong>{d.title}</strong>
            <span>{d.body}</span>
          </Link>
        ))}
      </div>

      <h2 className="lab-section-title">Live routes</h2>
      <div className="lab-routes">
        {ROUTES.map((r) => (
          <a key={r.href} href={r.href} className="lab-route" target="_blank" rel="noreferrer">
            <span className={`lab-state ${r.state}`}>{STATE_LABEL[r.state]}</span>
            <strong>{r.label}</strong>
            <code>{r.href}</code>
            {r.note ? <em>{r.note}</em> : null}
          </a>
        ))}
      </div>

      <h2 className="lab-section-title">The brain</h2>
      <p className="lab-brainnote">
        {count} components in the gallery. Everything else lives in <code>brain/</code> at the repo root —
        <code>MANAGEMENT.md</code> (goals, tasks, assignments), <code>STATE.md</code> (who is working right
        now), <code>PARALLEL.md</code> (running three agents at once), <code>animation/LAB.md</code> and{" "}
        <code>components/REGISTRY.md</code>. Shortcuts: <code>/board</code> <code>/sync</code>{" "}
        <code>/ui-search</code> <code>/ui-build</code> <code>/anim</code> <code>/content</code>{" "}
        <code>/test</code> <code>/seo</code>.
      </p>

      <style jsx global>{`
        .lab-doors {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
        }
        .lab-door {
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 12px;
          padding: 20px;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .lab-door:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 46px -30px rgba(12, 12, 14, 0.35);
        }
        .lab-door i {
          font-size: 24px;
          color: var(--lab-accent);
        }
        .lab-door strong {
          display: block;
          font-size: 16px;
          margin: 8px 0 5px;
        }
        .lab-door span {
          font-size: 13px;
          line-height: 1.6;
          color: var(--lab-dim);
        }
        .lab-routes {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 10px;
        }
        .lab-route {
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 8px;
          padding: 12px 14px;
          text-decoration: none;
          color: inherit;
        }
        .lab-route:hover {
          border-color: var(--lab-accent);
        }
        .lab-route strong {
          display: block;
          font-size: 14px;
          margin: 6px 0 2px;
        }
        .lab-route code {
          font-size: 11px;
          color: var(--lab-dim);
        }
        .lab-route em {
          display: block;
          font-style: normal;
          font-size: 11.5px;
          color: var(--lab-dim);
          margin-top: 4px;
        }
        .lab-state {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 999px;
          padding: 2px 8px;
        }
        .lab-state.shipped {
          background: #dcfce7;
          color: #14532d;
        }
        .lab-state.rebuild {
          background: #fef3c7;
          color: #7a5c14;
        }
        .lab-state.wireframe {
          background: #e0e7ff;
          color: #1e3a8a;
        }
        .lab-state.legacy {
          background: #f1f3f5;
          color: #6b7280;
        }
        .lab-brainnote {
          font-size: 13px;
          line-height: 1.9;
          color: var(--lab-dim);
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          padding: 14px 16px;
        }
        .lab-brainnote code {
          background: var(--lab-bg);
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 12px;
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };
  return { props: {} };
}

export default Hub;
