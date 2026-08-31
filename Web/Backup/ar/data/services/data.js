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
    icon: "bx bx-window-alt",
    title: "ووردبريس",
    brief: "مناسب لك إذا كنت تريد موقعاً تديره بنفسك وتحدّث محتواه دون مبرمج.",
    href: "#type-2",
  },
  {
    id: "nav-3",
    icon: "bx bx-cart-alt",
    title: "متجر إلكتروني",
    brief: "مناسب لك إذا كنت تبيع منتجات وتحتاج متجراً يسهل الشراء منه وإدارته.",
    href: "#type-3",
  },
  {
    // Was a "لست متأكداً؟ → /contact" helper card. Replaced once the fourth
    // service area became real: four areas and four grid slots, so leaving a
    // non-service card here would have left one area with no way in from the
    // navigator. The "not sure" path is still covered by the navbar contact
    // link and by every area's own CTA.
    id: "nav-4",
    icon: "bx bx-line-chart",
    title: "استشارات وتحسين",
    brief: "مناسب لك إذا كان لديك موقع بالفعل ولا يحقق النتائج التي تتوقعها.",
    href: "#type-4",
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

  // --- Section 2: packages -------------------------------------------------
  // Register is MSA, matching app-development and seo — NOT the Egyptian
  // colloquial of the hosting page ("اختار باقتك"). A corporate-websites buyer
  // is the same audience as the app-development page's.
  //
  // The ladder is scope, not feature-count: تعريفي → شركة كامل → + متجر. Each
  // tier repeats the "كل ما في الباقة السابقة" line so the three read as one
  // ladder rather than three unrelated offers, and each ends on a support line
  // — direction.md motive 4, "don't make this project painful".
  //
  // 🔴 TODO(prices): every `price` below is a placeholder em-dash. Published
  // prices are a commitment to customers and must come from the business — do
  // not fill these in by inference. The SA figures must be genuinely SA; the
  // hosting page has a standing bug where its ر.س tier is still priced in ج.م
  // (data/hosting-services/data.js:98) and that must not be repeated here.
  plansSection: {
    eyebrow: "الباقات",
    heading: "اختر ما يناسب حجم شركتك",
    note: "كل باقة تشمل التصميم والتطوير والإطلاق. نتفق على النطاق والجدول الزمني قبل بدء العمل، بلا مفاجآت.",
  },

  pricing: {
    currencies: {
      EG: {
        label: "ج.م",
        billingNote: null,
        plans: [
          {
            id: "intro",
            icon: "bx bx-file",
            name: "موقع تعريفي",
            summary: "شركة تريد حضوراً واضحاً على الإنترنت",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "حتى 5 صفحات",
              "تصميم مخصّص يعكس هويتك",
              "نموذج تواصل وربط بواتساب",
              "متجاوب مع الجوال بالكامل",
              "تهيئة أساسية لمحركات البحث",
              "دعم فني شهر بعد الإطلاق",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "corporate",
            icon: "bx bx-buildings",
            name: "موقع شركة كامل",
            summary: "شركة لديها خدمات وأعمال تريد عرضها بشكل احترافي",
            price: "—",
            priceNote: "TODO(prices)",
            isPopular: true,
            badge: "الأكثر طلبًا",
            features: [
              "كل ما في الباقة التعريفية",
              "صفحات خدمات ومعرض أعمال",
              "مدوّنة تحدّثها بنفسك",
              "لوحة تحكم لتعديل المحتوى دون رجوع إلينا",
              "تهيئة متقدّمة لمحركات البحث",
              "دعم فني ثلاثة أشهر بعد الإطلاق",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "store",
            icon: "bx bx-cart-alt",
            name: "موقع + متجر",
            summary: "شركة تبيع منتجاتها أونلاين إلى جانب التعريف بها",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "كل ما في باقة موقع الشركة",
              "متجر إلكتروني كامل",
              "بوابات دفع وشحن مربوطة",
              "إدارة المنتجات والطلبات والمخزون",
              "تقارير مبيعات",
              "دعم فني ستة أشهر بعد الإطلاق",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
        ],
      },

      SA: {
        label: "ر.س",
        billingNote: null,
        plans: [
          {
            id: "intro",
            icon: "bx bx-file",
            name: "موقع تعريفي",
            summary: "شركة تريد حضوراً واضحاً على الإنترنت",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "حتى 5 صفحات",
              "تصميم مخصّص يعكس هويتك",
              "نموذج تواصل وربط بواتساب",
              "متجاوب مع الجوال بالكامل",
              "تهيئة أساسية لمحركات البحث",
              "دعم فني شهر بعد الإطلاق",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "corporate",
            icon: "bx bx-buildings",
            name: "موقع شركة كامل",
            summary: "شركة لديها خدمات وأعمال تريد عرضها بشكل احترافي",
            price: "—",
            priceNote: "TODO(prices)",
            isPopular: true,
            badge: "الأكثر طلبًا",
            features: [
              "كل ما في الباقة التعريفية",
              "صفحات خدمات ومعرض أعمال",
              "مدوّنة تحدّثها بنفسك",
              "لوحة تحكم لتعديل المحتوى دون رجوع إلينا",
              "تهيئة متقدّمة لمحركات البحث",
              "دعم فني ثلاثة أشهر بعد الإطلاق",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "store",
            icon: "bx bx-cart-alt",
            name: "موقع + متجر",
            summary: "شركة تبيع منتجاتها أونلاين إلى جانب التعريف بها",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "كل ما في باقة موقع الشركة",
              "متجر إلكتروني كامل",
              "بوابات دفع وشحن مربوطة",
              "إدارة المنتجات والطلبات والمخزون",
              "تقارير مبيعات",
              "دعم فني ستة أشهر بعد الإطلاق",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
        ],
      },
    },
  },

  // --- Section 3: FAQ --------------------------------------------------------
  // Kept short on purpose ("not too long") — this closes the area, it isn't
  // meant to be its own research page. The wireframe's own note named exactly
  // what it had to answer: المدة، التعديلات، ما بعد الإطلاق (duration, edits,
  // post-launch) — motive 4 in direction.md, "don't make this project painful".
  // The last question answers motive 5, confidence before spending.
  faqSection: {
    eyebrow: "الأسئلة الشائعة",
    heading: "أسئلة قبل ما تبدأ",
  },

  faqs: [
    {
      q: "كم تستغرق مدة تنفيذ الموقع؟",
      a: "موقع تعريفي عادة يأخذ من أسبوعين إلى ثلاثة أسابيع، وموقع الشركة الكامل من ثلاثة إلى خمسة أسابيع حسب عدد الصفحات والمحتوى المتاح لديك. نتفق على جدول زمني واضح قبل البدء.",
    },
    {
      q: "هل أقدر أطلب تعديلات بعد التسليم؟",
      a: "نعم، كل باقة تشمل فترة دعم فني مجانية بعد الإطلاق (شهر إلى ستة أشهر حسب الباقة) للتعديلات والإصلاحات. بعدها نقدّم صيانة شهرية اختيارية إن احتجت تحديثات مستمرة.",
    },
    {
      q: "هل أحتاج أجهّز المحتوى والصور بنفسي؟",
      a: "لا. نساعدك في بناء المحتوى وترتيبه، ونقترح عليك الصور والنصوص المناسبة إذا لم يكن لديك جاهزة — أنت تعطينا المعلومات الأساسية عن نشاطك ونتولى الباقي.",
    },
    {
      q: "هل أقدر أعدّل المحتوى بنفسي بعد التسليم؟",
      a: "نعم، تحصل على لوحة تحكم بسيطة لتعديل النصوص والصور والصفحات دون الرجوع إلينا في كل تغيير صغير.",
    },
  ],
};

// ===========================================================================
// AREA 2 — ووردبريس (WordPress)
// ===========================================================================
// Same shape as businessWebsites, rendered by the SAME generic components in
// components/Services/ServiceArea/ — do not fork the JSX to add an area.
//
// Positioning is the one thing that separates this from area 1: a corporate
// site is bought for credibility, WordPress is bought for CONTROL — the client
// wants to run the site themselves afterwards without paying for every edit.
// That is direction.md motive 4 ("don't make this project painful") carried all
// the way through, so the copy leans on independence and ownership rather than
// repeating area 1's credibility argument.
//
// Register is MSA, matching area 1 and the app-development page.
//
// 🔴 TODO(prices): every `price` is a placeholder em-dash, same as area 1.
// Six figures (3 tiers x 2 currencies) must come from the business — published
// prices are a commitment to customers and are not inferred. SA figures must be
// genuinely SA (the hosting page has a standing bug where its ر.س tier is still
// priced in ج.م — data/hosting-services/data.js:98 — do not repeat it).

export const wordpress = {
  overview: {
    eyebrow: "ووردبريس",
    heading: "موقع تديره بنفسك، دون الرجوع لأحد",
    body: "ووردبريس يشغّل أكثر من 40% من مواقع الإنترنت لسبب واحد: أنت تملك المحتوى وتتحكم فيه. نبنيه لك بقالب مخصّص لا جاهز، ونسلّمك لوحة تحكم تفهمها من أول جلسة تدريب.",
    points: [
      "قالب مصمَّم لك خصيصاً، لا قالب جاهز يشبه آلاف المواقع",
      "تضيف الصفحات والمقالات والصور بنفسك دون خبرة تقنية",
      "جلسة تدريب عملية على لوحة التحكم بعد التسليم",
    ],
    cta: { label: "اطلب عرض سعر", href: "/website-order" },
    secondary: { label: "تحدث معنا أولاً", href: "/contact" },
    media: {
      src: "/images/projects/alamoudi-projects.png",
      alt: "موقع شركة العمودي مبني على ووردبريس معروضاً على حاسوب وهاتف",
    },
  },

  plansSection: {
    eyebrow: "الباقات",
    heading: "اختر مستوى التحكم الذي تحتاجه",
    note: "كل باقة تشمل التصميم والتطوير والتدريب على لوحة التحكم. نتفق على النطاق قبل بدء العمل، بلا مفاجآت.",
  },

  pricing: {
    currencies: {
      EG: {
        label: "ج.م",
        billingNote: null,
        plans: [
          {
            id: "wp-start",
            icon: "bx bx-window-alt",
            name: "ووردبريس أساسي",
            summary: "موقع تعريفي تديره بنفسك من أول يوم",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "حتى 5 صفحات",
              "قالب مخصّص بهويتك",
              "لوحة تحكم عربية بالكامل",
              "نموذج تواصل وربط بواتساب",
              "تهيئة أساسية لمحركات البحث",
              "جلسة تدريب على الإدارة",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "wp-pro",
            icon: "bx bx-edit-alt",
            name: "ووردبريس احترافي",
            summary: "موقع بمحتوى متجدّد ومدوّنة نشطة",
            price: "—",
            priceNote: "TODO(prices)",
            isPopular: true,
            badge: "الأكثر طلبًا",
            features: [
              "كل ما في الباقة الأساسية",
              "صفحات خدمات ومعرض أعمال",
              "مدوّنة كاملة بتصنيفات ووسوم",
              "إضافات مدفوعة مرخّصة لصالحك",
              "تهيئة متقدّمة لمحركات البحث",
              "نسخ احتياطي تلقائي",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "wp-scale",
            icon: "bx bx-been-here",
            name: "ووردبريس متعدد اللغات",
            summary: "موقع بأكثر من لغة أو بمتطلبات خاصة",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "كل ما في الباقة الاحترافية",
              "دعم لغتين أو أكثر",
              "تكامل مع أنظمتك الحالية",
              "تحسين سرعة متقدّم",
              "صلاحيات متعددة لفريقك",
              "صيانة وتحديثات دورية",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
        ],
      },

      SA: {
        label: "ر.س",
        billingNote: null,
        plans: [
          {
            id: "wp-start",
            icon: "bx bx-window-alt",
            name: "ووردبريس أساسي",
            summary: "موقع تعريفي تديره بنفسك من أول يوم",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "حتى 5 صفحات",
              "قالب مخصّص بهويتك",
              "لوحة تحكم عربية بالكامل",
              "نموذج تواصل وربط بواتساب",
              "تهيئة أساسية لمحركات البحث",
              "جلسة تدريب على الإدارة",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "wp-pro",
            icon: "bx bx-edit-alt",
            name: "ووردبريس احترافي",
            summary: "موقع بمحتوى متجدّد ومدوّنة نشطة",
            price: "—",
            priceNote: "TODO(prices)",
            isPopular: true,
            badge: "الأكثر طلبًا",
            features: [
              "كل ما في الباقة الأساسية",
              "صفحات خدمات ومعرض أعمال",
              "مدوّنة كاملة بتصنيفات ووسوم",
              "إضافات مدفوعة مرخّصة لصالحك",
              "تهيئة متقدّمة لمحركات البحث",
              "نسخ احتياطي تلقائي",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
          {
            id: "wp-scale",
            icon: "bx bx-been-here",
            name: "ووردبريس متعدد اللغات",
            summary: "موقع بأكثر من لغة أو بمتطلبات خاصة",
            price: "—",
            priceNote: "TODO(prices)",
            features: [
              "كل ما في الباقة الاحترافية",
              "دعم لغتين أو أكثر",
              "تكامل مع أنظمتك الحالية",
              "تحسين سرعة متقدّم",
              "صلاحيات متعددة لفريقك",
              "صيانة وتحديثات دورية",
            ],
            cta: { text: "اطلب عرض سعر", href: "/website-order" },
          },
        ],
      },
    },
  },

  // Answers the objections specific to WordPress rather than repeating area 1's:
  // "is it secure", "will it slow down", "am I locked in", "can I really edit it".
  faqSection: {
    eyebrow: "الأسئلة الشائعة",
    heading: "أسئلة عن ووردبريس",
  },

  faqs: [
    {
      q: "هل ووردبريس آمن؟",
      a: "نعم، إذا بُني وصُين بشكل صحيح. نحن نضبط إعدادات الحماية، ونحدّث النواة والإضافات أولاً بأول، ونفعّل النسخ الاحتياطي التلقائي — معظم مشاكل ووردبريس تأتي من الإهمال لا من المنصة نفسها.",
    },
    {
      q: "ألن يصبح الموقع بطيئاً مع الوقت؟",
      a: "لا إذا بُني بقالب نظيف وعدد محدود من الإضافات. نحن لا نستخدم قوالب جاهزة مثقلة، ونختار الإضافات بعناية، ونضبط التخزين المؤقت وضغط الصور من البداية.",
    },
    {
      q: "هل أملك الموقع فعلاً؟",
      a: "نعم بالكامل. الموقع والدومين والاستضافة باسمك، وتحصل على كل بيانات الدخول. تقدر تنقله لأي جهة أخرى في أي وقت دون إذن منّا.",
    },
    {
      q: "هل أحتاج خبرة تقنية لإدارته؟",
      a: "لا. نسلّمك لوحة تحكم عربية مرتّبة، مع جلسة تدريب عملية وفيديو مرجعي. إضافة صفحة أو مقال أو تعديل صورة لا يحتاج أي خبرة برمجية.",
    },
  ],
};

// ===========================================================================
// AREA 4 — التجارة الإلكترونية (E-commerce Development)
// ===========================================================================
// Structure comes from `rest of web servicespage areas.md`, which is explicit
// on three points that shape this area:
//   1. Max 3 parts. Keep it COMPACT — the page already carries three areas
//      above it and the visitor should grasp this one in about one screen.
//   2. NO pricing cards. E-commerce scope swings too widely (catalogue size,
//      gateways, shipping, countries, languages, integrations, ERP) to price
//      on a card, so the close is a proposal request instead.
//   3. The visual must explain the SERVICE, not the technology: the customer's
//      path from product to paid order.
export const ecommerce = {
  intro: {
    eyebrow: "التجارة الإلكترونية",
    heading: "حوّل منتجاتك إلى طلبات",
    body: "لا نبني كتالوجاً للعرض فقط. نبني متجراً يسهل الشراء منه، يسهل عليك إدارته، وجاهز ليكبر مع نشاطك.",
  },

  // The buying journey. Rendered right-to-left, so the first step sits on the
  // right and the arrows point left — the direction of reading, not a mirrored
  // copy of the English reference.
  journey: [
    { id: "product", icon: "bx bx-box", label: "المنتج" },
    { id: "page", icon: "bx bx-detail", label: "صفحة المنتج" },
    { id: "cart", icon: "bx bx-cart", label: "السلة" },
    { id: "checkout", icon: "bx bx-credit-card", label: "الدفع" },
  ],
  // The payoff card, deliberately heavier than the steps before it.
  // NOTE: the order number is illustrative and labelled as such on screen —
  // the brief forbids implying real figures.
  journeyResult: {
    icon: "bx bx-check-circle",
    title: "طلب جديد",
    line: "تم الدفع بنجاح",
    ref: "طلب #1842",
    note: "مثال توضيحي",
  },

  capabilitiesTitle: "ما الذي تديره بنفسك",
  capabilities: [
    { id: "products", icon: "bx bx-package", title: "المنتجات", text: "أضف وعدّل ونظّم منتجاتك." },
    { id: "orders", icon: "bx bx-receipt", title: "الطلبات", text: "تابع طلبات عملائك وأدرها." },
    { id: "payments", icon: "bx bx-credit-card-front", title: "المدفوعات", text: "اربط بوابات الدفع." },
    { id: "shipping", icon: "bx bx-package", title: "الشحن", text: "اربط شركات الشحن والتوصيل." },
    { id: "mobile", icon: "bx bx-mobile-alt", title: "الشراء من الجوال", text: "تجربة مهيّأة لمستخدمي الهاتف." },
    { id: "integrations", icon: "bx bx-plug", title: "التكاملات", text: "اربط التحليلات وأنظمتك الأخرى." },
  ],

  cta: {
    heading: "جاهز تبدأ البيع أونلاين؟",
    note: "أخبرنا باحتياجك ونقترح عليك الإعداد المناسب.",
    action: { label: "اطلب عرضاً لمتجرك", href: "/contactWeb" },
  },
};

// ===========================================================================
// AREA 5 — استشارات وتحسين أداء المواقع (Website Consulting & Performance)
// ===========================================================================
// The brief is emphatic that this must NOT look like another build service.
// The visitor already HAS a website; they are asking "why isn't it working?".
// So the whole area is diagnostic in tone — scan, findings, priorities — and
// carries no pricing cards at all: you cannot ask someone to choose a tier
// before they know what is wrong. The audit is the single entry product.
export const consulting = {
  intro: {
    eyebrow: "استشارات وتحسين الأداء",
    heading: "اكتشف ما الذي يكلّف موقعك عملاء",
    body: "نحلّل موقعك، نحدّد ما الذي يعيقه، ونسلّمك خطة واضحة بما يجب إصلاحه أولاً.",
  },

  analyzeTitle: "ما الذي نحلّله",
  analyze: [
    { id: "perf", title: "الأداء", text: "سرعة الموقع وأداؤه التقني." },
    { id: "seo", title: "السيو والفحص التقني", text: "ما يعيق ظهورك في نتائج البحث." },
    { id: "ux", title: "تجربة المستخدم", text: "التنقّل والوضوح والاستخدام على الجوال." },
    { id: "cvr", title: "التحويل", text: "النماذج وأزرار الإجراء ومسار الطلب." },
    { id: "tracking", title: "التتبع", text: "التحليلات وتتبع التحويلات." },
    { id: "reco", title: "توصيات قابلة للتنفيذ", text: "أولويات واضحة، لا تقرير تقني فقط." },
  ],

  // --- the three-step diagnostic visual ------------------------------------
  // 🔴 Every number and issue below is SAMPLE DATA for the visual only. The
  // brief states plainly: "Do not imply they are real client results." That is
  // why each block carries a visible `note` on screen rather than relying on
  // the reader to infer it.
  flow: {
    scan: {
      step: "01",
      title: "فحص الموقع",
      note: "أرقام توضيحية",
      metrics: [
        { id: "perf", label: "الأداء", score: 63 },
        { id: "seo", label: "السيو", score: 71 },
        { id: "mobile", label: "تجربة الجوال", score: 58 },
        { id: "cvr", label: "التحويل", score: 54 },
        { id: "tech", label: "السلامة التقنية", score: 62 },
      ],
    },
    issues: {
      step: "02",
      title: "المشاكل المكتشفة",
      note: "أمثلة على ما نجده عادة",
      items: [
        { id: "i1", title: "بطء التحميل على الجوال", level: "عالية", tone: "high" },
        { id: "i2", title: "ضعف وضوح أزرار الإجراء", level: "عالية", tone: "high" },
        { id: "i3", title: "ترتيب غير واضح للصفحة", level: "متوسطة", tone: "mid" },
        { id: "i4", title: "خلل في تتبع التحويلات", level: "متوسطة", tone: "mid" },
        { id: "i5", title: "ملاحظات تقنية بسيطة", level: "منخفضة", tone: "low" },
      ],
    },
    plan: {
      step: "03",
      title: "خطة العمل",
      note: "مرتّبة حسب الأولوية",
      groups: [
        { id: "now", title: "أصلح الآن", text: "المشاكل الحرجة التي تكلّفك عملاء اليوم." },
        { id: "next", title: "حسّن بعدها", text: "تحسينات مهمة لكنها ليست عاجلة." },
        { id: "later", title: "اختبر لاحقاً", text: "تجارب وتحسينات أقل أولوية." },
      ],
    },
  },

  cta: {
    heading: "جاهز تحسّن موقعك؟",
    note: "اعرف ما الذي يعمل، وما لا يعمل، وبماذا تبدأ.",
    action: { label: "حلّل موقعي", href: "/contactWeb" },
  },
};
