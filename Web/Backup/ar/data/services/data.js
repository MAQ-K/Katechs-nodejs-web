// Web Services page — Area 1 (the brief area) content.
// All copy lives here, out of the JSX, same convention as data/hosting-services/data.js.
// Written to the 5-second rule: guide the choice, don't explain the product.

// --- Section 1: hero background --------------------------------------------
// One fixed background behind all three slides. Flip `type` to "video" and
// point src at /videos/katechs-services.mp4 to go back to the video treatment.
// TODO: placeholder.jpg still lives in the inspiration folder — move it to a
// real path (e.g. /images/services/hero.jpg) before this ships.
export const heroMedia = {
  type: "image",
  src: "/images/inspiration/webservices_page/placeholder.jpg",
};

// --- Section 1: hero slides -------------------------------------------------
// Only this text cross-fades between the 3 slides; the background stays put.
// headlineBold + headlineLight are the two-tone split HeroBuildSmarter renders
// (dark half, grey half). `title` is the same sentence unsplit — still read by the
// retired components/Services/Hero.js. Keep the three in sync until that file goes.
export const heroSlides = [
  {
    id: "slide-1",
    badge: "خدمات الويب",
    title: "موقعك الإلكتروني يبدأ من هنا",
    headlineBold: "موقعك الإلكتروني",
    headlineLight: "يبدأ من هنا",
    text: "اختر نوع الموقع المناسب لك، ونحن نتكفّل بكل ما هو تقني. لا تحتاج لأي خبرة برمجية — نحن نتولى القرارات الصعبة نيابةً عنك.",
    primary: { label: "اطلب خدمتك الآن", href: "/website-order" },
    secondary: { label: "تصفح الخدمات", href: "#type-1" },
  },
  {
    id: "slide-2",
    badge: "تصميم وتطوير",
    title: "تصميم يليق باسم عملك",
    headlineBold: "تصميم يليق",
    headlineLight: "باسم عملك",
    text: "مواقع سريعة، واضحة، وتعمل بكفاءة على كل الأجهزة. نصمم لك تجربة تجعل زائرك يفهم ما تقدّمه في ثوانٍ.",
    primary: { label: "شاهد أعمالنا", href: "#wsv-projects" },
    secondary: { label: "تحدث معنا", href: "/contact" },
  },
  {
    id: "slide-3",
    badge: "دعم مستمر",
    title: "لا نتركك بعد التسليم",
    headlineBold: "لا نتركك",
    headlineLight: "بعد التسليم",
    text: "استضافة، صيانة، وتحديثات دورية ضمن فريق واحد. موقعك يبقى شغّالاً وآمناً وأنت مرتاح البال.",
    primary: { label: "ابدأ مشروعك", href: "/website-order" },
    secondary: { label: "خدمات الاستضافة", href: "/services/hosting-services" },
  },
];

// --- Section 2: real client projects ---------------------------------------
// Images already exist in public/images/projects/.
export const projects = [
  {
    id: "tabqat",
    name: "طبقات",
    type: "موقع شركة مقاولات وعزل",
    image: "/images/projects/tabqat-project.png",
  },
  {
    id: "doffo",
    name: "دفو",
    type: "متجر إلكتروني",
    image: "/images/projects/Doffo-Project.png",
  },
  {
    id: "afaqedu",
    name: "آفاق التعليمية",
    type: "منصة تعليمية",
    image: "/images/projects/afaqedu-project.png",
  },
  {
    id: "alamoudi",
    name: "العمودي",
    type: "موقع تعريفي لشركة",
    image: "/images/projects/alamoudi-projects.png",
  },
  {
    id: "risa-salt",
    name: "ريزا سولت",
    type: "موقع منتج وعلامة تجارية",
    image: "/images/projects/risa-salt-project.png",
  },
  {
    id: "voirboutiq",
    name: "فوار بوتيك",
    type: "متجر أزياء إلكتروني",
    image: "/images/projects/voirboutiq-project.png",
  },
];

// --- Section 3: the 4 navigation boxes -------------------------------------
// PLACEHOLDER COPY — titles, briefs and hrefs are meant to be replaced.
// icon = boxicons class name (boxicons.min.css is loaded globally in _app.js).
export const serviceNav = [
  {
    id: "nav-1",
    icon: "bx bx-buildings",
    title: "مواقع الشركات",
    brief: "مناسب لك إذا كنت تريد موقعاً يعكس حجم شركتك الحقيقي ويجلب لك استفسارات.",
    href: "#business-websites",
  },
  {
    id: "nav-2",
    icon: "bx bx-cart-alt",
    title: "النوع الثاني",
    brief: "مناسب لك إذا كنت تبيع منتجات وتحتاج متجراً إلكترونياً كامل الجاهزية.",
    href: "#type-2",
  },
  {
    id: "nav-3",
    icon: "bx bx-layer",
    title: "النوع الثالث",
    brief: "مناسب لك إذا كان مشروعك يحتاج نظاماً مخصصاً بمتطلبات خاصة.",
    href: "#type-3",
  },
  {
    id: "nav-4",
    icon: "bx bx-support",
    title: "لست متأكداً؟",
    brief: "تحدث معنا ونساعدك في اختيار الأنسب لمشروعك خلال دقائق.",
    href: "/contact",
  },
];

// ===========================================================================
// AREA 1 — مواقع الشركات (business websites)
// ===========================================================================
// Copy is written against the five buying motives in
// public/images/inspiration/webservices_page/direction.md — credibility,
// clarity, opportunity, a painless project, and confidence before spending.
// It deliberately talks about the customer's company, not about our features:
// "portfolio proof is more powerful than explaining 20 features."
//
// Areas 2-4 are still wireframe. When they are built they add their own key
// with this same shape and reuse the same components — do not fork the JSX.

export const businessWebsites = {
  // --- Section 1a: overview split ------------------------------------------
  overview: {
    eyebrow: "مواقع الشركات",
    heading: "موقع يعكس حجم شركتك الحقيقي",
    body: "أغلب مواقع الشركات تفشل لأنها جميلة لكنها غير مفهومة. نحن نبدأ من نشاطك أنت: ماذا تقدّم، ولمن، ولماذا يختارك العميل — ثم نبني الموقع حول مسار واضح يقود الزائر من الاهتمام إلى طلب عرض سعر.",
    points: [
      "بنية ومحتوى نجهّزهما معك، لا نطلب منك تسليمنا كل شيء جاهزاً",
      "خدماتك وأعمالك وشهاداتك معروضة بشكل يبني الثقة من أول زيارة",
      "سريع على الجوال ومهيّأ لمحركات البحث من أول سطر كود",
    ],
    cta: { label: "اطلب عرض سعر", href: "/website-order" },
    secondary: { label: "تحدث معنا أولاً", href: "/contact" },
    // Real client work, not a stock mockup — this is the Tabqat project.
    media: {
      src: "/images/inspiration/webservices_page/area1-project1.png",
      alt: "موقع شركة طبقات معروضاً على حاسوب محمول وهاتف",
    },
  },

  // --- Section 1b: client trust strip --------------------------------------
  // Real logos from public/images/clients/. Keep this list honest: every logo
  // here must be an actual client. A fabricated logo wall is a trust violation.
  logos: {
    title: "شركات اختارتنا",
    items: [
      { id: "adeng", name: "Adeng", src: "/images/clients/Adeng.webp" },
      { id: "afaq", name: "آفاق التعليمية", src: "/images/clients/afaq.webp" },
      { id: "crossing", name: "Crossing", src: "/images/clients/crossing.webp" },
      { id: "gulfcodes", name: "Gulf Codes", src: "/images/clients/gulfcodes.png" },
      { id: "client1", name: "عميل", src: "/images/clients/client1.jpg" },
      { id: "client3", name: "عميل", src: "/images/clients/client3.jpg" },
      { id: "client5", name: "عميل", src: "/images/clients/client5.jpg" },
    ],
  },
};
