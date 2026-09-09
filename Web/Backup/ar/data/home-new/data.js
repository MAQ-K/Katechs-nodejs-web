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

// `eyebrow` (design pass, 2026-09-08) — the small pill above the headline, the
// reference image's "TRUSTED DESIGN PARTNER" chip translated to each slide's own
// promise. Optional: HeroSlider falls back to no pill if a slide omits it.
export const heroSlides = [
  {
    id: "slide-1",
    eyebrow: "شريك تقني موثوق",
    title: "نجاحك على الإنترنت يبدأ من هنا",
    text: "كل ما تحتاجه لحضور رقمي قوي في مكان واحد: تصميم، استضافة، بريد، تسويق.",
    cta: { label: "ابدأ مشروعك الآن", href: "/website-order" },
  },
  {
    id: "slide-2",
    eyebrow: "تصميم وتطوير احترافي",
    title: "موقع يليق باسم عملك",
    text: "تصميم وتطوير مواقع بمعايير احترافية، مع أداء سريع وتجربة استخدام مدروسة.",
    cta: { label: "تصفّح خدمات الويب", href: "/services" },
  },
  {
    id: "slide-3",
    eyebrow: "استضافة ودعم مستمر",
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
// FIXED 2026-09-08 — "when i press on domains it dont get me to the part it
// should be, i want it give me the part i type on the domain" (user). The
// previous action, https://clients.katechs.com/cart.php, points at a host that
// DOES NOT RESOLVE (`curl`: "Could not resolve host") — every search opened a
// DNS-error tab, typed value or not. That is the bug, not the nav pill (tested
// separately in a real browser: the نطاقات nav pill already lands correctly on
// this section).
//
// Verified working instead: https://clients.knoztech.com/client/cart.php —
// resolves, sets a genuine WHMCS session cookie, and a live request with
// query=<a test string> echoed that string back on the resulting "Shopping
// Cart - KonozTech" page, confirming a real domain-availability check runs.
//
// ⚠️ STILL NEEDS THE USER'S CONFIRMATION, for a different reason: this exact
// host is independently flagged in brain/logs/2026-09-07.md as "a different
// company's domain, not Katechs" (found while auditing vps-hosting and
// wordprees-hosting's order buttons). Whether Katechs' domain sales genuinely
// run through KonozTech's WHMCS, or this is the wrong brand entirely, is a
// business question this session cannot answer. Shipped anyway because a
// working-but-unconfirmed cart beats a guaranteed DNS failure — but do not
// treat this as resolved.
export const domainSearch = {
  action: "https://clients.knoztech.com/client/cart.php",
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
  intro: {
    title: "تصميم وتطوير المواقع",
    subtitle: "فكرتك تستحق موقعاً يعبّر عنها، ويترك أثراً.",
    mediaCaption: "من الفكرة إلى موقع يعمل من أجلك",
  },
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

// --- Why choose us -----------------------------------------------------------
// Talk on the right, a vertical carousel of real client work on the left
// (user, 2026-09-05: "the left image is a scrollable vertical carousel").
//
// The four reasons are the OLD homepage's own, copied verbatim from
// components/Common/MakeYourBusiness.js ("لماذا تختار كاتكس؟"). Not rewritten:
// the two pages should make the same promises, and the 14-day refund figure in
// particular is a commitment, not copy to improvise on.
//
// Icons are inline SVG rather than the flaticon-* classes MakeYourBusiness uses,
// because those live in styles/flaticon.css and components/HpNew/ owns its own
// styling. Same call HeroNav/EmailServices already made.
export const whyUs = {
  eyebrow: "لماذا كاتكس",
  heading: "لماذا تختار كاتكس؟",
  body:
    "أربعة أسباب تسمعها من كل عميل تعامل معنا — والشغل نفسه معروض بجانبها.",
  points: [
    {
      id: "experience",
      icon: "bx bx-medal",
      title: "الخبرة",
      text:
        "فريق متخصص ذو خبرة عالية في الحلول الرقمية داخل مصر ودول الخليج العربي",
    },
    {
      id: "support",
      icon: "bx bx-headphone",
      title: "الدعم",
      text:
        "دعم متواصل وتعاون شفاف مع العميل، مع فريق جاهز لمساعدتك في كل خطوة",
    },
    {
      id: "integrated",
      icon: "bx bx-layer",
      title: "الحلول المتكاملة",
      text:
        "كل ما يحتاجه بيزنسك تحت سقف واحد: تصميم، استضافة، تسويق، وحماية",
    },
    {
      id: "guarantee",
      icon: "bx bx-shield-quarter",
      title: "جودة التزام وضمان استرداد",
      text: "أعلى معايير الجودة و الالتزام بالمواعيد وضمان استرداد 14 يوم",
    },
  ],
  cta: { label: "تعرّف علينا أكثر", href: "/about-us" },
  // ⚠️ UNUSED as of 2026-09-08. Was the old "twist" — a vertical marquee of
  // real client screenshots, replaced by the scroll-synced 4-box switcher
  // (user: "the box on the left change... 4 boxes each box have a point" — a
  // carousel of 6 unrelated screenshots and 4 boxes tied to the 4 points above
  // cannot be the same visual). Left in place, not deleted, in case a later
  // pass wants real client work shown somewhere in this section again.
  gallery: clientProjects,
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
// ⚠️ RESTRUCTURED 2026-09-08 — "remove the nav" (user). The three views
// (build/manage, buying journey, capabilities) used to be tabs the visitor
// switched between; now they render one after another, always, with no tab
// chrome. Kept as three named blocks below rather than one flat array, since
// each renders a completely different shape (a card grid, a step diagram, a
// capability grid) and Stores.js still needs to tell them apart.
export const stores = {
  intro: ecommerce.intro,
  cta: ecommerce.cta,

  // Block 1 — نبني ونشغّل, now FOUR cards: three side by side, one wide card
  // underneath (user: "make them 4 cards 3 beside each other and a wide one
  // under them — 1) build 2) manage 3) build + manage 4) landing page").
  build: {
    heading: "نبني ونشغّل",
    // .filter(Boolean) at the very end guards the .find() below: this exact
    // shared array already changed shape ONCE while this section was being
    // built (a "landing" entry appeared mid-session on 2026-09-04) — if it
    // ever loses that id again, a bare .find() returns undefined and .map()
    // in Stores.js would crash the whole section instead of quietly showing
    // three cards.
    cards: [
      // build, manage, landing are ecommerce.storePlans VERBATIM — the single
      // source the real services page (components/Services/Ecommerce/
      // StorePlans.js) also reads. Order matters: storePlans is [build,
      // manage, landing] and the user's numbered list wants landing LAST (the
      // wide card), so it is pulled out and appended after the new one below
      // rather than trusted to already be last if the shared array is ever
      // reordered.
      ...ecommerce.storePlans.filter((c) => c.id !== "landing"),

      // NEW, HOMEPAGE-ONLY. Not added to ecommerce.storePlans in
      // data/services/data.js: that array is the real Web Services page's
      // single source of truth, and this combo package does not exist there
      // — inventing it on the shared page would be a content decision, not a
      // structure one. Deliberately no `image`: build and manage each have a
      // real photograph of that half of the job (a launch moment, a dashboard
      // being read); there is no third photo of "both at once", and reusing
      // one of the other two would misrepresent what it shows. Stores.js
      // renders a card's image strip only when `image` is present.
      {
        id: "combo",
        tag: "الباقة الكاملة",
        title: "نبني ونشغّل الاثنين",
        text: "بلا فجوة بين التسليم والمتابعة: نبني متجرك من الصفر ثم نستمر في تشغيله معك — نفس الفريق، من أول يوم إلى ما بعد الإطلاق.",
        points: [
          "تصميم وإطلاق متجر كامل من الصفر",
          "متابعة مستمرة للطلبات والمخزون والمدفوعات",
          "دعم وتدريب لا ينتهيان عند التسليم",
        ],
        link: { label: "اطلب الباقة الكاملة", href: "/contactWeb" },
      },

      ecommerce.storePlans.find((c) => c.id === "landing"),
    ].filter(Boolean),
  },

  // Block 2 — رحلة الشراء: unchanged shape, still the four-step journey diagram
  // and its result card.
  journey: {
    heading: "رحلة الشراء",
    steps: ecommerce.journey,
    result: ecommerce.journeyResult,
  },

  // Block 3 — ما الذي تديره بنفسك: unchanged shape, still the six capabilities.
  capabilities: {
    heading: ecommerce.capabilitiesTitle,
    items: ecommerce.capabilities,
  },
};
