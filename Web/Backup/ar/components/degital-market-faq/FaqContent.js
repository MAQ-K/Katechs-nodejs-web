import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";
import servicesDetailsImg2 from "../../public/images/services-details/services-details2.png";


import faqImg from "../../public/images/contact-img.png";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area faq-digital pb-100">
        <div className="container">
          <div className="row align-items-center">

          <div className="col-lg-4">
              <div className="faq-img">
                <Image
                  src={faqImg}
                  alt="Image"
                  width={670}
                  height={500}
                />
              </div>
            </div>


            <div className="col-lg-8">
              
              <div className="faq-accordion degital-market-faq" >
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>  
                      <AccordionItemButton>             
                      تحسين محركات البحث (SEO) – الظهور في المقدمة
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      نحن في كاتكس نؤمن بأن الظهور في الصفحة 
                      الأولى من نتائج 
                      البحث ليس رفاهية، بل ضرورة. لذلك نعمل على:
                      </p>
                    <div className="fag_items">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            	تحليل شامل لموقعك والكلمات المفتاحية                         </li>
                          <li>
                            <i className="bx bx-check"></i>
                            تحسين البنية التقنية للموقع وتجربة المستخدم.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            	إنشاء محتوى موجه ومحسّن لمحركات البحث.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            بناء روابط خلفية قوية ومستدامة لرفع ترتيب موقعك وزيادة الزيارات العضوية ذات الجودة
                                                  </li>
                        </ul>
                    </div>
                    </AccordionItemPanel>

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
