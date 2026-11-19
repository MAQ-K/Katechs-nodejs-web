// Emails page data.
// Every plan, price and feature line below is carried over verbatim from the
// existing page components (components/PricingEmail/*, components/Services/Email_typs.js)
// so the new UI shows the same content the live page already shows.

const CTA_HREF = "https://katechs.com/contactWeb/";
const PER_USER_NOTE = "لكل مستخدم في الشهر";

// Pro + Microsoft plans share one ordered feature list per type and differ only
// in how far down the list they include — expressed as `includedCount`.
const buildFeatures = (list, includedCount) =>
  list.map((text, i) => ({ text, included: i < includedCount }));

const proFeatureList = [
  "ضمان تشغيل 99.9%",
  "مكافحة الفيروسات و البريد العشوائي",
  "email@your-domain.com",
  "حجم صندوق الوارد",
  "بريد ويب كامل المواصفات",
  "متوافق مع الجوال وجميع المتصفحات",
  "التقويمات وجهات الاتصال والمهام",
  "CardDAV & CalDAV",
  "صفحة البوابة المتكاملة",
  "أداة ترحيل الخدمة الذاتية",
  "تخزين الملفات السحابية",
  "اونلاين اوفيس سويت",
  "إنشاء / تحرير مستندات ورد",
  "إنشاء/تحرير جداول البيانات",
  "إنشاء / تحرير باور بوينت",
];

const microsoftFeatureList = [
  "مساحة تخزين 50 جيجابايت",
  "يوفر Outlook تجربة متميزة",
  "تتبع البريد الإلكتروني الأكثر أهمية",
  "نقل الرسائل القديمة تلقائيًا",
  "منع فقدان البيانات المدمج (DLP)",
  "خدمات البريد الصوتي السحابية",
  "لوحة تحكم متعددة اللغات",
  "تطبيقات ميكروسوفت اوفيس",
  "ندوات عبر الإنترنت",
  "جديد: مساحات عمل تعاونية",
  "جديد: أدوات تحرير وتصميم الفيديو",
];

export const emailTypes = [
  {
    id: "pro",
    label: "بريد إلكتروني احترافي",
    icon: "/images/email1.png",
    desc: "بريد إلكتروني احترافي يمكنك استخدامه من خلال اي متصفح انترنت أو ربطه بالأوت لوك و الجوال للاتصال ببريدك الالكتروني",
    plans: [
      {
        name: "بريد إلكتروني احترافي",
        priceYear: "1,039ج.م",
        priceMonth: "86ج.م",
        popular: false,
        features: buildFeatures(proFeatureList, 10),
      },
      {
        name: "بريد إلكتروني احترافي + الإنتاجية",
        priceYear: "1,559ج.م",
        priceMonth: "130ج.م",
        popular: true,
        features: buildFeatures(proFeatureList, 15),
      },
    ],
  },
  {
    id: "google",
    label: "بريد إلكتروني Google Workspace",
    icon: "/images/googleicon.webp",
    desc: "أدوات احترافية تتضمن التطبيقات التي تزيد من التعاون والإنتاجية و تناسب كل الطرق التي نعمل بها",
    plans: [
      {
        name: "بزنس استارتر",
        priceYear: "4,199ج.م",
        priceMonth: "349ج.م",
        popular: false,
        features: buildFeatures(
          [
            "ضمان تشغيل 99.9%",
            "بريد إلكتروني مخصَّص وآمن",
            "اجتماعات فيديو تضم 100 مشارِك",
            "30 غيغابايت مساحة تخزين",
            "دعم أساسي",
          ],
          5
        ),
      },
      {
        name: "بزنس استاندر",
        priceYear: "8,711ج.م",
        priceMonth: "725ج.م",
        popular: true,
        features: buildFeatures(
          [
            "ضمان تشغيل 99.9%",
            "بريد إلكتروني مخصَّص وآمن",
            "اجتماعات فيديو تضم 150 مشارِك",
            "2 تيرا بايت مساحة تخزين",
            "دعم أساسي",
          ],
          5
        ),
      },
      {
        name: "بزنس بلس",
        priceYear: "12,611ج.م",
        priceMonth: "1,050ج.م",
        popular: false,
        features: buildFeatures(
          [
            "ضمان تشغيل 99.9%",
            "بريد إلكتروني مخصَّص وآمن",
            "اجتماعات فيديو تضم 500 مشارِك",
            "5 تيرا بايت مساحة تخزين",
            "دعم أساسي",
          ],
          5
        ),
      },
    ],
  },
  {
    id: "microsoft",
    label: "بريد إلكتروني ميكروسوفت 365",
    icon: "/images/microsoft.png",
    desc: "تتضمن Microsoft 365 تطبيقات Office الأفضل في فئتها، مثل Word وExcel وTeams وغير ذلك...",
    plans: [
      {
        name: "اساسيه",
        priceYear: "4,199ج.م",
        priceMonth: "349ج.م",
        popular: false,
        features: buildFeatures(microsoftFeatureList, 4),
      },
      {
        // NOTE: name and monthly price are as they appear on the live page —
        // this plan and the next are both labelled "بزنس استارتر" there, and
        // this one's monthly price is written in USD while every other plan
        // on the page is in ج.م. Flagged for the client, not silently changed.
        name: "بزنس استارتر",
        priceYear: "6,839ج.م",
        priceMonth: "$8",
        popular: true,
        features: buildFeatures(microsoftFeatureList, 6),
      },
      {
        name: "بزنس استارتر",
        priceYear: "8,711ج.م",
        priceMonth: "725ج.م",
        popular: false,
        features: buildFeatures(microsoftFeatureList, 11),
      },
    ],
  },
];

export const pricingSection = {
  eyebrow: "خطط الأسعار",
  heading: "اختر الباقة المناسبة لنشاطك",
  subheading: "بريد إلكتروني باسم نشاطك التجاري، بأسعار تناسب كل الأحجام",
  ctaHref: CTA_HREF,
  ctaText: "احجز الآن",
  perUserNote: PER_USER_NOTE,
  popularBadge: "الأكثر طلبا",
};

// Section 4 content — every claim here (99.9% uptime, antivirus/spam, cross-
// device, migration tool, calendars/contacts) already appears on this page in
// the plan feature lists above; nothing new is asserted here.
export const featuresSection = {
  eyebrow: "لماذا تحتاج هذه الخدمة",
  heading: "كل ما يحتاجه بريدك الاحترافي",
};

export const features = {
  uptime: { value: "99.9%", label: "ضمان تشغيل" },
  protection: {
    title: "حماية متقدمة",
    desc: "مكافحة الفيروسات والبريد العشوائي على كل رسالة واردة تلقائيًا.",
  },
  speed: {
    title: "أداء فائق السرعة",
    desc: "بريد ويب كامل المواصفات يعمل بسلاسة على أي اتصال إنترنت.",
  },
  crossDevice: {
    title: "متوافق مع كل أجهزتك",
    desc: "الجوال، المتصفح، أو تطبيق الأوت لوك — نفس البريد في كل مكان.",
  },
  support: {
    title: "دعم فني يهتم بك",
    desc: "فريق دعم متاح على مدار الساعة، وأداة ترحيل ذاتية لنقل بريدك القديم بلا تعقيد.",
    teams: ["الدعم الفني", "المبيعات", "فريق العمل"],
  },
};

export const faqSection = {
  eyebrow: "الأسئلة الشائعة",
  heading: "عندك سؤال؟ يمكن نكون جاوبنا عليه هنا",
};

// The existing EmailFag/EmailGoogleDataFag/EmailMicrosoftDataFag/EmailProDataFag
// components are single "why you need this" accordion blurbs, not real Q&A
// pairs — so these are newly written, but every answer only restates facts
// already shown elsewhere on this page (uptime %, migration tool, antivirus/
// spam, cross-device, plan differences). Flag for the client to review wording.
export const faqs = [
  {
    q: "هل يمكنني استخدام البريد الإلكتروني باسم نطاقي الخاص؟",
    a: "نعم، البريد الإلكتروني يكون بصيغة email@your-domain.com باسم نشاطك التجاري، وليس بصيغة عامة مثل Gmail أو Outlook.",
  },
  {
    q: "هل يمكنني نقل بريدي الإلكتروني القديم؟",
    a: "نعم، تتوفر أداة ترحيل ذاتية الخدمة لنقل رسائلك وجهات اتصالك من مزود بريدك الحالي.",
  },
  {
    q: "هل البريد الإلكتروني يعمل على الجوال والمتصفح معًا؟",
    a: "نعم، جميع الباقات متوافقة مع الجوال وكل المتصفحات، ويمكن ربطها أيضًا بتطبيق الأوت لوك.",
  },
  {
    q: "كيف تتم حماية بريدي من الفيروسات والرسائل المزعجة؟",
    a: "تشمل جميع الباقات مكافحة تلقائية للفيروسات والبريد العشوائي على كل رسالة واردة.",
  },
  {
    q: "ما الفرق بين باقات البريد الاحترافي و Google Workspace و Microsoft 365؟",
    a: "البريد الاحترافي مناسب للاستخدام الأساسي عبر أي متصفح، بينما تضيف Google Workspace وMicrosoft 365 تطبيقات إنتاجية كاملة مثل مستندات وجداول البيانات وأدوات التعاون.",
  },
];
