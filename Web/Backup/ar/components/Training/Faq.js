import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Reveal from "../Common/Reveal";

// Visual pass — same accordion skin pattern as components/Seo/Faq.js.
// Copy unchanged — refund policy / recording availability remain open
// questions per the flag.
const faqs = [
  {
    q: "هل أحتاج خبرة سابقة؟",
    a: "دورات المستوى المبتدئ تبدأ من الصفر ولا تفترض أي خبرة. الدورات المتوسطة والمتقدمة توضح متطلباتها في صفحة كل دورة.",
  },
  {
    q: "ماذا لو فاتتني محاضرة؟",
    a: "يعتمد على نمط الدورة. (يحتاج تأكيدًا من العميل: هل تُسجَّل المحاضرات المباشرة وتتاح لاحقًا؟)",
  },
  {
    q: "ما الفرق بين النمط المباشر والذاتي؟",
    a: "المباشر بمواعيد ثابتة مع مجموعة ومدرب، والذاتي تدرسه في وقتك مع جلسات إرشاد فردية. اختر ما يناسب جدولك.",
  },
  {
    q: "هل أحصل على شهادة؟",
    a: "نعم، شهادة إتمام تُمنح بعد تسليم المشروع النهائي واستيفاء متطلبات الدورة.",
  },
  {
    q: "هل يمكن استرداد الرسوم؟",
    a: "(يحتاج قرارًا من العميل: ما هي سياسة الاسترداد؟ هذا سؤال يطرحه كل متدرب قبل الدفع، ويجب أن تكون الإجابة واضحة.)",
  },
];

const Faq = () => {
  return (
    <section className="tr-section">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <h2 className="tr-h2">أسئلة شائعة</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tr-flag" style={{ maxWidth: 780, marginInline: "auto" }}>
            <div>
              <strong>تحتاج قرارًا:</strong> سياسة الاسترداد، وهل تُسجَّل
              المحاضرات المباشرة. الإجابتان مكتوبتان حاليًا كأسئلة مفتوحة، لا
              كوعود.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="tr-accordion">
            <Accordion allowZeroExpanded preExpanded={["0"]}>
              {faqs.map((item, i) => (
                <AccordionItem uuid={String(i)} key={item.q}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{item.q}</span>
                      <span className="tr-acc-sign" aria-hidden="true">
                        +
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.a}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Faq;
