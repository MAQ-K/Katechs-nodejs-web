import React, {  } from "react";
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
      <div className="faq-area pb-100">
        <div className="container">
          <div className="row align-items-center">

          <div className="col-lg-4">
              <div className="faq-img">
                <Image src={faqImg} alt="استضافة مواقع الويب" width={360} height={465} />
              </div>
            </div>


            <div className="col-lg-8">
              
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>  
                      <AccordionItemButton>             
                        جرب لوحة التحكم cPanel السهلة، الآن! 
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      قم بإدارة نطاقاتك وحسابات البريد الإلكتروني والملفات والتفضيلات
                       والمزيد من خلال واجهة بسيطة وسهلة متعددة اللغات.
                        جربها بنفسك في حسابنا التجريبي. الواجهة تتحدث عن نفسها.
                      </p>
                     
                      <div className="">
                          <a href="#" className="default-btn">
                            تسجيل الدخول الي حساب تجريبي 
                          </a>
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
