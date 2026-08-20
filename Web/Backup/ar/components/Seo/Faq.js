import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Reveal from "../Common/Reveal";

const faqs = [
  {
    q: "متى أبدأ برؤية نتائج؟",
    a: "السيو تراكمي ولا يعطي نتائج فورية. نحدد لك توقعًا واقعيًا بعد التحليل الأول بناءً على وضع موقعك ومنافسيك، ونعرض التقدم شهرًا بشهر بدل الوعود.",
  },
  {
    q: "هل تضمنون المركز الأول في جوجل؟",
    a: "لا أحد يستطيع ضمان ترتيب معيّن، وأي جهة تضمنه فهي تضللك. ما نضمنه هو العمل الفعلي على موقعك وتقرير شهري يوضح ما نُفّذ وما تغيّر.",
  },
  {
    q: "ما الفرق بين السيو والإعلانات المدفوعة؟",
    a: "الإعلانات تعطي ظهورًا فوريًا يتوقف بتوقف الإنفاق، والسيو يبني ظهورًا يستمر بعد انتهاء العمل. الاثنان يكملان بعضهما، ويمكن العمل بهما معًا.",
  },
  {
    q: "هل تحتاجون صلاحية على موقعي؟",
    a: "نعم، نحتاج وصولًا لتنفيذ التحسينات التقنية وتعديل المحتوى. نتفق على مستوى الصلاحية قبل البدء.",
  },
  {
    q: "ماذا لو كان موقعي جديدًا تمامًا؟",
    a: "نبدأ من البنية الصحيحة منذ اليوم الأول، وهو أسهل من إصلاح موقع قائم عليه أخطاء متراكمة.",
  },
];

const Faq = () => {
  return (
    <section className="seo-section">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center">
            <h2 className="seo-h2">أسئلة شائعة</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="seo-accordion">
            <Accordion allowZeroExpanded preExpanded={["0"]}>
              {faqs.map((item, i) => (
                <AccordionItem uuid={String(i)} key={item.q}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{item.q}</span>
                      <span className="seo-acc-sign" aria-hidden="true">
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
