import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

// UX PROTOTYPE — real accordion behaviour, neutral skin.
//
// ⚠ These answers describe how the page is STRUCTURED to answer each
// objection. Several depend on client decisions still open (refunds, hardware
// requirements, recordings) and must be confirmed before they go live.
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
    <section className="ux-section">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">أسئلة شائعة</h2>
        </div>

        <div className="ux-flag" style={{ maxWidth: 780, marginInline: "auto" }}>
          <strong>تحتاج قرارًا:</strong> سياسة الاسترداد، وهل تُسجَّل المحاضرات
          المباشرة. الإجابتان مكتوبتان حاليًا كأسئلة مفتوحة، لا كوعود.
        </div>

        <div className="ux-accordion ux-center">
          <Accordion allowZeroExpanded preExpanded={["0"]}>
            {faqs.map((item, i) => (
              <AccordionItem uuid={String(i)} key={item.q}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>{item.q}</span>
                    <span className="ux-acc-sign" aria-hidden="true">+</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{item.a}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
