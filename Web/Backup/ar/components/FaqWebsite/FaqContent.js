import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../public/images/faq-img.png";

const FaqContent = () => {
  return (
    <>
      <div className="mtb-100">
        <div className="container">
          <div className="row align-items-center">

          <div className="col-lg-4">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={280} height={265} />
              </div>
            </div>


            <div className="col-lg-8">
              
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">



                      <h3>خمسة عشر عام من الخبرة صممنا فيها مئات المشاريع</h3>

                      <p>
                      قإدارة المشروعات الفعالة هي مهارة حيوية في الواقع.
                       حيث متابعة فريق العمل لدينا وإدارة المهام والمخططات الزمنية الخاصة بالمشروع
                      نسعى دائما لتقديم كل ما هو جديد في مجال برمجة مواقع الويب مع اتباع استراتيجية واضحة تضمن
                      الالتزام بالمراحل التي تساهم في تنفيذ المشروع بجودة واحترافية عالية 
                      </p>
                     



                  </AccordionItem>



                  
                </Accordion>
              </div>
            </div>




          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
