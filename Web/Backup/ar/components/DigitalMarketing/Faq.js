import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

// UX PROTOTYPE — real accordion behaviour, neutral skin. Answers restate what
// this page already says; no prices or timelines are asserted.
const faqs = [
  {
    q: "هل ميزانية الإعلانات ضمن سعر الباقة؟",
    a: "لا. سعر الباقة مقابل الإدارة والتنفيذ، أما ميزانية الإعلان فتُدفع للمنصة نفسها (جوجل أو ميتا مثلًا) وتحددها أنت. نوضح الرقمين بشكل منفصل دائمًا.",
  },
  {
    q: "كم ميزانية إعلانية أحتاج للبدء؟",
    a: "تعتمد على قطاعك ومنافسيك والمنطقة المستهدفة. نحدد رقمًا واقعيًا بعد دراسة السوق في المرحلة الأولى، قبل أن تلتزم بأي إنفاق.",
  },
  {
    q: "متى أرى نتائج؟",
    a: "الإعلانات المدفوعة تعطي زيارات من اليوم الأول، لكن ضبط الحملة للوصول لأفضل تكلفة يحتاج وقتًا. أما القنوات العضوية مثل المحتوى والسيو فهي تراكمية وأبطأ وأطول أثرًا.",
  },
  {
    q: "ما الفرق بين هذه الصفحة وصفحة السيو؟",
    a: "السيو قناة واحدة ضمن التسويق الرقمي، وله صفحة مستقلة لأنه تخصص قائم بذاته. هذه الصفحة تغطي القنوات مجتمعة وكيف نختار بينها.",
  },
  {
    q: "هل أحتاج موقعًا قبل بدء الحملات؟",
    a: "غالبًا نعم — الإعلان يحتاج وجهة يصل إليها الزائر. إن لم يكن لديك موقع أو صفحة هبوط مناسبة، نبني ذلك أولًا حتى لا تُهدر ميزانية الإعلان.",
  },
];

const Faq = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">أسئلة شائعة</h2>
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
