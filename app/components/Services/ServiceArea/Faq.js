import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import { EASE } from "../../Common/Reveal";

// Section 3 of a service area — closes it.
//
// Generic: every area renders this same component with its own data object. Kept to 4 questions on purpose ("not
// too long"): this is a confidence check before the CTA, not a support page.
//
// Same react-accessible-accordion contract as every other FAQ in this codebase
// (AppDev/Emails/Seo/DM/Training). The &::before { display: none } rule in the
// stylesheet is load-bearing, not decorative — fancy-example.css (imported
// globally in _app.js) draws its own chevron on ::before and doubles up with
// the plus icon below without it.

const Faq = ({ area, id }) => {
  const reduced = useReducedMotion();
  const { faqSection, faqs } = area;

  return (
    <section className="wsv-faq" id={id}>
      <div className="container">
        <div className="wsv-faq-head">
          <span className="wsv-eyebrow">{faqSection.eyebrow}</span>
          <h2 className="wsv-h2">{faqSection.heading}</h2>
        </div>

        <motion.div
          className="wsv-faq-accordion"
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "show"}
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
        >
          <Accordion preExpanded={["0"]} allowZeroExpanded>
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                variants={{
                  hidden: reduced ? {} : { opacity: 0, y: 18 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: EASE },
                  },
                }}
              >
                <AccordionItem uuid={String(i)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{item.q}</span>
                      <i className="bx bx-plus" aria-hidden="true"></i>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.a}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
