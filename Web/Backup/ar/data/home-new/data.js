// Content for the rebuilt homepage (`pages/hp-new.js`).
//
// The live homepage hardcodes every string into JSX and has no data file at
// all — that is the convention break this rebuild fixes. Copy lives here from
// the first commit so the content pass never has to go hunting through markup.
//
// STRUCTURE PASS: the Arabic below is placeholder-grade — enough to judge line
// lengths and hierarchy, not final copy. Real copy is the Content & Data
// Manager's job (`/ag-content`).

// data/services/data.js stays the single source for the web-services plan cards,
// the client list and the brief copy. Duplicating any of it here is how two pages
// start quoting different prices for the same package.
import {
  businessWebsites,
  wordpress,
  projects as clientProjects,
} from "../services/data";

// --- Hero -------------------------------------------------------------------
// One fixed background video for the whole slider. Only the text cross-fades;
// the video never restarts between slides.
export const heroMedia = {
  type: "video",
  src: "/videos/default.mp4",
};

export const heroSlides = [
  {
    id: "slide-1",
    title: "نجاحك على الإنترنت يبدأ من هنا",
    text: "كل ما تحتاجه لحضور رقمي قوي في مكان واحد: تصميم، استضافة، بريد، تسويق.",
    cta: { label: "ابدأ مشروعك الآن", href: "/website-order" },
  },
  {
    id: "slide-2",
    title: "موقع يليق باسم عملك",
    text: "تصميم وتطوير مواقع بمعايير احترافية، مع أداء سريع وتجربة استخدام مدروسة.",
    cta: { label: "تصفّح خدمات الويب", href: "/services" },
  },
  {
    id: "slide-3",
    title: "استضافة سريعة ودعم لا يتأخر",
    text: "بنية تحتية موثوقة، نسخ احتياطي تلقائي، وفريق دعم يرد عليك فعلاً.",
    cta: { label: "اطّلع على خطط الاستضافة", href: "/services/hosting-services" },
  },
];

// --- Domain search ----------------------------------------------------------
// Hands off to WHMCS rather than checking availability here (user's decision,
// 2026-09-03): there is no domain API in this codebase and WHMCS already owns
// the cart, the pricing and the TLD list.
//
// ⚠️ `action` IS A PLACEHOLDER — CONFIRM BEFORE THIS GOES LIVE.
// The repo references two client hosts and neither is provably the cart:
//   • https://clients.katechs.com/login
//   • https://clients.knoztech.com/client/index.php?rp=/store/...
// The standard WHMCS domain-search target is:
//   <whmcs-root>/cart.php?a=add&domain=register&query=<value>
// Everything else about this form is correct — fixing the host is this one line.
export const domainSearch = {
  action: "https://clients.katechs.com/cart.php",
  // WHMCS needs these two alongside the query, hence hidden inputs in the form.
  hidden: { a: "add", domain: "register" },
  queryParam: "query",
  label: "ابحث عن اسم النطاق",
  placeholder: "اكتب اسم النطاق الذي تريده",
  buttonLabel: "بحث",
};

// --- Floating section navigator ---------------------------------------------
// Jumps between the homepage's main blocks. `id` must match the `id` on the
// corresponding <section> in pages/hp-new.js — that is what the scroll-spy and
// the jump both look up.
export const sectionNav = [
  { id: "domain", label: "النطاقات" },
  { id: "web-services", label: "خدمات الويب" },
  { id: "app-dev", label: "تطبيقات الجوال" },
  { id: "mail", label: "البريد الإلكتروني" },
  { id: "marketing", label: "التسويق" },
];

// --- Web services section ---------------------------------------------------
// Three blocks: brief → projects marquee → plans.
//
// This section REUSES the services page's content rather than copying it —
// see the import at the top of this file.

export const webServices = {
  // Reuses businessWebsites.overview verbatim: eyebrow, heading, body, three
  // points, and TWO buttons — which is what the sketch draws.
  //
  // ⚠️ Layout is talk-LEFT / image-RIGHT, per the user's sketch (2026-09-03).
  // This is the mirror of components/Services/ServiceArea/Overview.js, which
  // deliberately puts the text on the RIGHT so an Arabic reader meets the
  // headline before the image. The user chose the sketch. Noted so nobody
  // "fixes" it back later thinking it was an oversight.
  brief: businessWebsites.overview,

  // Full-bleed infinite marquee of real client work. Same six projects the
  // services page shows.
  projects: clientProjects,

  // Three tabs, each with its own heading, blurb and three plan cards.
  //
  // ⚠️ PRICES ARE PLACEHOLDERS ("—" / TODO(prices)) in the source data. The
  // note in data/services/data.js is explicit that published prices are a
  // commitment to customers and must come from the business, never inferred.
  // Do not fill them in here.
  //
  // Currency: the source carries EG and SA plan sets. This pass renders EG
  // only — a currency switch is a design-pass decision, not a structural one.
  plansTabs: [
    {
      id: "business",
      label: "مواقع الشركات",
      heading: businessWebsites.plansSection.heading,
      note: businessWebsites.plansSection.note,
      plans: businessWebsites.pricing.currencies.EG.plans,
    },
    {
      id: "wordpress",
      label: "ووردبريس",
      heading: wordpress.plansSection.heading,
      note: wordpress.plansSection.note,
      plans: wordpress.pricing.currencies.EG.plans,
    },
    {
      id: "custom",
      label: "تطوير مخصّص",
      // STUB — no data exists for this service yet (the services page has four
      // areas and none of them is "custom"). Copy and plans pending.
      heading: "تطوير مخصّص حسب متطلباتك",
      note: "TODO(content): هذه الباقة بانتظار المحتوى والأسعار من الإدارة.",
      plans: [],
    },
  ],
};
