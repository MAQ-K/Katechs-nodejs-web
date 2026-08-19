// App Development page content.
//
// NOTE ON PRICING: no per-plan prices exist anywhere in this codebase for app
// development, and custom app work is genuinely scoped per project — so the
// cards are quote-based ("حسب نطاق المشروع" + طلب عرض سعر) rather than
// carrying invented numbers. If the client supplies real prices, add a
// `price` field per plan and render it in components/AppDev/Pricing.js.

export const pricingSection = {
  eyebrow: "الباقات",
  heading: "اختر نطاق مشروعك",
  note: "كل باقة تُسعَّر حسب عدد الشاشات والمزايا المطلوبة — نحدّد السعر والجدول الزمني بعد الدراسة المجانية.",
};

export const plans = [
  {
    icon: "bx bx-mobile-alt",
    name: "باقة الانطلاق",
    summary: "تطبيق على منصة واحدة",
    priceLabel: "حسب نطاق المشروع",
    features: [
      "منصة واحدة — iOS أو أندرويد",
      "تصميم UI/UX لكل الشاشات",
      "نماذج تفاعلية قبل التطوير",
      "النشر على متجر واحد",
      "دعم فني بعد الإطلاق",
    ],
  },
  {
    icon: "bx bx-devices",
    name: "باقة النمو",
    summary: "تطبيق واحد على المنصتين",
    priceLabel: "حسب نطاق المشروع",
    isPopular: true,
    badge: "الأكثر طلبًا",
    features: [
      "المنصتان معًا — iOS وأندرويد",
      "كود موحّد عبر Flutter",
      "تصميم UI/UX لكل الشاشات",
      "نماذج تفاعلية قبل التطوير",
      "النشر على App Store و Google Play",
      "دعم وتحديثات بعد الإطلاق",
    ],
  },
  {
    icon: "bx bx-buildings",
    name: "باقة الشركات",
    summary: "تطبيق أصلي مخصّص",
    priceLabel: "حسب نطاق المشروع",
    features: [
      "تطبيقات أصلية بـ Swift و Kotlin",
      "لوحة تحكم وربط بأنظمتك",
      "تصميم UI/UX لكل الشاشات",
      "النشر على المتجرين",
      "خطة دعم وتحديثات مخصّصة",
    ],
  },
];

export const faqSection = {
  eyebrow: "الأسئلة الشائعة",
  heading: "أسئلة يطرحها عملاؤنا قبل البدء",
};

// Every answer below restates something the page already states elsewhere
// (platforms, prototypes-before-code, store publishing, post-launch support).
// No timelines or prices are asserted — those come out of the free study.
export const faqs = [
  {
    q: "كم يستغرق تطوير التطبيق؟",
    a: "المدة تعتمد على عدد الشاشات والمزايا المطلوبة. نحدّد لك جدولًا زمنيًا واضحًا بعد الدراسة المجانية في الخطوة الأولى، قبل أن يبدأ التطوير.",
  },
  {
    q: "هل أحصل على تطبيق لـ iOS وأندرويد معًا؟",
    a: "نعم. يمكن بناء تطبيق أصلي لكل منصة بلغتها (Swift للآيفون و Kotlin للأندرويد)، أو تطبيق هجين بكود موحّد عبر Flutter يعمل على المنصتين — نختار الأنسب حسب جمهورك وخطة نموّك.",
  },
  {
    q: "هل أرى التصميم قبل بدء البرمجة؟",
    a: "نعم. نسلّمك تصميمًا تفاعليًا لكل شاشة قبل كتابة أول سطر من الكود، فتوافق على التجربة كاملة قبل أن يبدأ التطوير.",
  },
  {
    q: "من يتولّى نشر التطبيق على المتاجر؟",
    a: "نحن نتولّى رفع التطبيق على App Store و Google Play ضمن خطوة الإطلاق.",
  },
  {
    q: "ماذا يحدث بعد إطلاق التطبيق؟",
    a: "لا تنتهي علاقتنا عند النشر — نواصل الدعم الفني والتحديثات بعد الإطلاق حسب الباقة التي تختارها.",
  },
  {
    q: "كيف أعرف تكلفة مشروعي؟",
    a: "التكلفة تُحسب حسب نطاق المشروع: عدد الشاشات والمزايا والمنصات المطلوبة. اطلب عرض سعر وسنحدّده لك بعد الدراسة المجانية.",
  },
];
