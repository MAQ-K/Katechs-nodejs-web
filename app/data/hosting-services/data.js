// Hosting Services page content — extracted from the current live page (Stage 1).
// Scaffolding only: not yet imported by any page/component. Content mirrors
// brief.md — see that file for notes/open questions before this is treated
// as final. Values are pending Stage 2/3 decisions (currency bug, plan
// normalization, missing copy).

// Stage 3 hero redesign (replaces the old plain PageBanner title-only banner).
// Rebuilt to match the Hostinger-style reference screenshot (public/images/New folder/chrome-capture-2026-08-18.png)
// using our own theme (colors/fonts) instead of copying their branding.
const heroBanner = {
  eyebrow: "خدمات استضافة كاتكس",
  heading: "دومين واستضافة موقعك — جاهزين من أول يوم",
  subheading: "استضافة سريعة وآمنة مع نطاق مجاني، جاهزة للانطلاق خلال 24 ساعة",
  badge: "ضمان وقت تشغيل 99.9%",
  cta: { text: "اختار باقتك", href: "#pricing" },
  floatingCard: { domain: "www.domain.com" },
  speedRing: { label: "سرعة التحميل", value: 99, caption: "أداء فائق" },
  trustBadge: { rating: 5, text: "ممتاز", caption: "بناءً على تقييمات عملائنا" },
  image: "/images/hosting-services/hero-website-live.png",
};

const offerHighlights = {
  eyebrow: "الحصول علي استضافة آمنة جديرة بالثقة مع أفضل سعر",
  title: "استضافة سريعة وموثوقة",
  items: [
    { icon: "flaticon-chip", title: "ضمان وقت تشغيل بنسبة 99.9%", description: "" },
    { icon: "flaticon-vr", title: "خوادم محسنة و فائقة السرعه 24/7", description: "" },
    { icon: "flaticon-blockchain", title: "شهادات SSL مجانية لجميع مواقع الويب", description: "" },
    { icon: "flaticon-vr", title: "لوحة تحكم سهلة الإعداد مع أدوات تثبيت بنقرة واحدة", description: "" },
    { icon: "flaticon-vr", title: "خوادم آمنة و سريعة. مع وحدات تخزين SSD نقية.", description: "" },
    { icon: "flaticon-vr", title: "نطاقات ومساحة ويب وحسابات بريد إلكتروني غير محدودة", description: "" },
  ],
};

const pricing = {
  eyebrow: "خدمات استضافة كاتكس",
  title: "باقات استضافة مرنة وبأسعار تناسب ميزانيتك",
  subtitle: "اختار الباقة اللي تناسب أعمالك",
  currencies: {
    EG: {
      label: "ج.م",
      billingNote: null,
      plans: [
        {
          name: "استضافة أعمال",
          price: "1999ج.م",
          priceNote: "165/شهر",
          tagline: "",
          features: [
            "عدد 1 موقع إلكتروني",
            "2 جيجا بايت SSD",
            "ترافيك 5 جيجا بايت",
            "10 بريد إلكتروني",
            "نطاق مجاناً",
            "شهادة SSL مجاناً",
            "لوحة تحكم متعددة اللغات",
            "تنفيذ خلال 24 ساعة",
          ],
          badge: null,
          cta: { href: "/hosting-order", text: "ابدأ الان" },
        },
        {
          name: "استضافة الموزعين",
          price: "3,249ج.م/الشهر",
          priceNote: null,
          tagline: "كن موزع وحقق الربح",
          features: [
            "25 حساب عميل",
            "مساحة 75جيجا بايت",
            "ترافيك غير محدود",
            "سرفر باسم نطاقك",
            "نطاق/1199",
            "شهادة SSL مجاناً",
            "نظام ادارة فواتير WHMCS",
          ],
          badge: "الاكثر طلبا",
          cta: { href: "/hosting-order", text: "ابدأ الان" },
        },
        {
          name: "سرفر VPS خاص",
          price: "3,799ج.م /شهر",
          priceNote: null,
          tagline: "سيرفرك تحت إدارتك",
          features: [
            "2 نواة، 4 جيجا رام",
            "80 جيجابايت مساحة NVMe",
            "إدارة ذاتية، صلاحيات كاملة",
            "SSH وإدارة كاملة للتشغيل والخدمات",
            "نطاق/1199",
            "ترحيل بيانات مجاني",
            "لوحة WHM كاملة",
          ],
          badge: null,
          cta: { href: "/hosting-order", text: "ابدأ الان" },
        },
      ],
    },
    // NOTE: currently still priced in ج.م despite the ر.س label — see brief.md open question #2.
    SA: {
      label: "ر.س",
      billingNote: "billed per 3 years, monthly equivalent shown",
      plans: [
        {
          name: "استضافة فضية",
          price: "5152ج.م",
          priceNote: "/ 3 سنوات",
          monthlyEquivalent: "143ج.م /الشهر",
          tagline: "",
          features: [
            "عدد 1 موقع إلكتروني",
            "مساحة 5 جيجا بايت إٍس إس دي",
            "ترافيك 5 جيجا بايت",
            "عدد بريد إلكتروني غير محدود",
            "نطاق مجاناً",
            "شهادة SSL مجاناً",
            "لوحة تحكم متعددة اللغات",
          ],
          badge: null,
          cta: { href: "/hosting-order", text: "احجز الان" },
        },
        {
          name: "استضافة ذهبية",
          price: "8716ج.م",
          priceNote: "/ 3 سنوات",
          monthlyEquivalent: "243ج.م / الشهر",
          tagline: "",
          features: [
            "عدد 3 موقع إلكتروني",
            "مساحة 10جيجا بايت إٍس إس دي",
            "ترافيك 10 جيجا بايت",
            "عدد بريد إلكتروني غير محدود",
            "نطاق مجاناً",
            "شهادة SSL مجاناً",
            "لوحة تحكم متعددة اللغات",
          ],
          badge: "الاكثر طلبا",
          cta: { href: "/hosting-order", text: "احجز الان" },
        },
        {
          name: "استضافة ماسية",
          price: "15520ج.م",
          priceNote: "/ 3 سنوات",
          monthlyEquivalent: "432ج.م /الشهر",
          tagline: "",
          features: [
            "مواقع ويب غير محدودة",
            "مساحة إس إس دي غير محدودة",
            "ترافيك غير محدودة",
            "عدد بريد إلكتروني غير محدود",
            "نطاق مجاني",
            "شهادة SSL مجاناً",
            "لوحة تحكم متعددة اللغات",
          ],
          badge: null,
          cta: { href: "/hosting-order", text: "ابدا الان" },
        },
      ],
    },
  },
};

const faq = {
  items: [
    {
      question: "جرب لوحة التحكم cPanel السهلة، الآن!",
      answer:
        "قم بإدارة نطاقاتك وحسابات البريد الإلكتروني والملفات والتفضيلات والمزيد من خلال واجهة بسيطة وسهلة متعددة اللغات. جربها بنفسك في حسابنا التجريبي. الواجهة تتحدث عن نفسها.",
      // NOTE: dead link in the current page (href="#") — see brief.md open question #4.
      cta: { href: "#", text: "تسجيل الدخول الي حساب تجريبي" },
    },
  ],
};

// Stage 3: cPanel banner (replaces the FaqContent accordion on this page only —
// FaqContent stays untouched since it's shared with vps-hosting/wordprees-hosting).
const cpanelBanner = {
  heading: "جرب لوحة التحكم cPanel السهلة، الآن!",
  description:
    "قم بإدارة نطاقاتك وحسابات البريد الإلكتروني والملفات والتفضيلات والمزيد من خلال واجهة بسيطة وسهلة متعددة اللغات. جربها بنفسك في حسابنا التجريبي.",
  // NOTE: dead link in the original content (href="#") — see brief.md open question #4.
  cta: { href: "#", text: "تسجيل الدخول الي حساب تجريبي" },
  image: "/images/hosting-services/cpanel-banner-seo.png",
};

const featureGrid = {
  title: "مميزات استضافة KATECHS",
  items: [
    {
      icon: "flaticon-chip",
      title: "تخزين عالي الأداء",
      description:
        "أسرع بـ 20 مرة من محركات أقراص SATA القياسية، يوفر كنوز تك لجميع الخوادم الافتراضية الخاصة الجديدة محركات أقراص ثابتة SSD عالية الأداء تتراوح سعتها من 30 جيجابايت إلى 240 جيجابايت",
    },
    {
      icon: "flaticon-vr",
      title: "التزويد الفوري",
      description:
        "ألحصول على ما يصل وتشغيلها في ثوان. في حين أن معظم حلول VPS تستغرق ساعات أو أيام للتنشيط، فقد صممت كنوز تك خوادم VPS الخاصة بنا ليتم توفيرها على الفور.",
    },
    {
      icon: "flaticon-blockchain",
      title: "ضمان وقت تشغيل 99.9%",
      description:
        "يضمن كنوز تك مدة تشغيل الأجهزة والشبكات والبنية التحتية بنسبة 99.9%. هذا هو ضمان وقت تشغيل كنوز تك 10/10 مع تقديم دعم فني على مدار الساعة 24/7/365",
    },
    {
      icon: "flaticon-target",
      title: "لوحة تحكم سهلة",
      description:
        "هل تحتاج إلى إضافة المزيد من ذاكرة الوصول العشوائي أو مساحة التخزين؟ لا مشكلة! لوحة التحكم الخاصة بنا على شبكة الإنترنت هي المكان الذي يمكنك من خلاله توسيع نطاق خادمك الافتراضي لأعلى أو لأسفل بسهولة.",
    },
    {
      icon: "flaticon-choice",
      title: "خوادم متعددة اللغات",
      description:
        "خوادم متعددة اللغات تأتي بأحدث الإصدارات من PHP وMySQL وPerl وPython وRuby والمزيد مثبتة مسبقًا. ويمكنك تخصيص الخادم الخاص بك باستخدام أي برنامج خادم أو مكون يستند إلى Linux.",
    },
    {
      icon: "flaticon-deep-learning",
      title: "خيارات برامج مرنة",
      description:
        "مع الوصول الكامل إلى الجذر، يمكنك تثبيت وتخصيص أي برنامج تحتاجه لتحسين تجربة الاستضافة الخاصة بك.",
    },
  ],
};

module.exports = {
  heroBanner,
  offerHighlights,
  pricing,
  faq,
  cpanelBanner,
  featureGrid,
};
