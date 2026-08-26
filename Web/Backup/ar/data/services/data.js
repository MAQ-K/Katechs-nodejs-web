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
export const heroSlides = [
  {
    id: "slide-1",
    badge: "خدمات الويب",
    title: "موقعك الإلكتروني يبدأ من هنا",
    text: "اختر نوع الموقع المناسب لك، ونحن نتكفّل بكل ما هو تقني. لا تحتاج لأي خبرة برمجية — نحن نتولى القرارات الصعبة نيابةً عنك.",
    primary: { label: "اطلب خدمتك الآن", href: "/website-order" },
    secondary: { label: "تصفح الخدمات", href: "#type-1" },
  },
  {
    id: "slide-2",
    badge: "تصميم وتطوير",
    title: "تصميم يليق باسم عملك",
    text: "مواقع سريعة، واضحة، وتعمل بكفاءة على كل الأجهزة. نصمم لك تجربة تجعل زائرك يفهم ما تقدّمه في ثوانٍ.",
    primary: { label: "شاهد أعمالنا", href: "#wsv-projects" },
    secondary: { label: "تحدث معنا", href: "/contact" },
  },
  {
    id: "slide-3",
    badge: "دعم مستمر",
    title: "لا نتركك بعد التسليم",
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
