import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

import { faqSection, faqs } from "../../data/app-development/data";

const EASE = [0.22, 1, 0.36, 1];

const Faq = () => {
  return (
    <section className="app-faq">
      <div className="container">
        <motion.div
          className="app-faq-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <span className="app-faq-eyebrow">{faqSection.eyebrow}</span>
          <h2>{faqSection.heading}</h2>
        </motion.div>

        <motion.div
          className="app-faq-accordion"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          <Accordion preExpanded={["0"]} allowZeroExpanded>
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <AccordionItem uuid={String(i)}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{item.q}</span>
                      <i className="bx bx-plus"></i>
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
