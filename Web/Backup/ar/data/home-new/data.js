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
  ecommerce,
  projects as clientProjects,
} from "../services/data";
import { emailTypes } from "../emails/data";

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

// --- App services section ----------------------------------------------------
// 100% width, talk on the left, a 3D stage on the right.
//
// The stage is components/AppDev/AppOrbit.js — the very component the app dev
// page renders, imported rather than copied (user, 2026-09-04).
//
export const appServices = {
  eyebrow: "تطبيقات الجوال",
  heading: "تطبيق جوال يليق بعملك، على iOS وأندرويد",
  body:
    "من الفكرة إلى المتجر: نصمّم تجربة الاستخدام، نبني التطبيق بأداء عالٍ، وننشره على المتجرين — ثم نبقى معك بعد الإطلاق.",
  points: [
    "تطبيق واحد يعمل على iOS وأندرويد بنفس الجودة",
    "لوحة تحكم تدير منها المحتوى والطلبات والإشعارات",
    "نشر على App Store و Google Play، ومتابعة بعد الإطلاق",
  ],
  cta: { label: "اطلب تطبيقك الآن", href: "/services/app-development/" },
  secondary: { label: "تحدث معنا أولاً", href: "/contact" },

  // No `phone` or `orbit` keys here on purpose: the section renders
  // components/AppDev/AppOrbit.js itself (user, 2026-09-04 — "the same as the
  // one on the app dev page"), and that component owns its own six screens.
  // Duplicating the list here would be a second copy to keep in step.
};

// --- Email services section --------------------------------------------------
// Three tabs down the side, each with talk on top and an image beneath
// (Homepage/structure-drafts/email services section .png). In RTL the rail sits
// on the right — the start edge — and the panel fills the space to its left.
//
// The three tabs ARE the three products the emails page already sells, imported
// from data/emails/data.js so the homepage cannot end up offering a different
// set. Label and copy come straight from there.
//
// ⚠️ `image` is the one thing invented here: emailTypes carries only a small
// logo `icon`, and the sketch wants a wide image under the text. These are
// existing library images chosen to match each product; treat them as
// PLACEHOLDER and let the content pass replace them with real screenshots.
const emailShots = {
  pro: {
    src: "/images/email-web.png",
    alt: "بريد إلكتروني احترافي على النطاق الخاص بشركتك",
  },
  google: {
    src: "/images/google-meeting.webp",
    alt: "أدوات Google Workspace للتعاون والاجتماعات",
  },
  microsoft: {
    src: "/images/office-365-1.webp",
    alt: "تطبيقات مايكروسوفت 365 للعمل والإنتاجية",
  },
};

export const emailServices = {
  eyebrow: "البريد الإلكتروني",
  heading: "بريد باسم شركتك، لا بريد مجاني",
  tabs: emailTypes.map((t) => {
    // "talk so little add more" (user, 2026-09-04). `desc` is a single sentence,
    // so each tab now also lists what the product actually includes. These are
    // NOT written here — they are the real feature lines from the type most
    // inclusive plan on the emails page, so the homepage cannot promise
    // something the emails page does not.
    const best = t.plans[t.plans.length - 1];
    const points = (best ? best.features : [])
      .filter((f) => f.included)
      .slice(0, 4)
      .map((f) => f.text);

    return {
      id: t.id,
      label: t.label,
      icon: t.icon,
      body: t.desc,
      points,
      image: emailShots[t.id],
    };
  }),
  cta: { label: "تصفّح باقات البريد", href: "/services/emails/" },
};

// --- Stores (e-commerce) section ---------------------------------------------
// "this is the part of ecommerce from web services page" — so everything here
// comes from the `ecommerce` area of data/services/data.js, imported above. No
// new copy, and nothing borrowed from the homepage's own EcommercePlatforms.
//
// Structure (the sketch shows a 3-tab pill row over two large boxes, and left
// the rest to us): the area's content splits naturally into exactly three
// views, and the FIRST is the two-box one — so the section's resting state is
// what the sketch draws.
//   1. نبني ونشغّل   -> storePlans, the wide cards WITH images      <- the sketch
//      (the sketch drew two; the shared data now holds three — the grid is
//       auto-fit so it follows whatever data/services/data.js has)
//   2. رحلة الشراء   -> the four-step journey and its result card
//   3. ما تديره بنفسك -> the six capabilities
export const stores = {
  intro: ecommerce.intro,
  cta: ecommerce.cta,
  tabs: [
    {
      id: "build",
      label: "نبني ونشغّل",
      kind: "cards",
      cards: ecommerce.storePlans,
    },
    {
      id: "journey",
      label: "رحلة الشراء",
      kind: "journey",
      steps: ecommerce.journey,
      result: ecommerce.journeyResult,
    },
    {
      id: "capabilities",
      label: ecommerce.capabilitiesTitle,
      kind: "capabilities",
      items: ecommerce.capabilities,
    },
  ],
};
