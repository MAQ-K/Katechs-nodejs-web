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
      <div className="faq-area faq-emil pb-100">
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
              
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>  
                      <AccordionItemButton>             
                      وسيلة رسمية للتواصل بين شركتك والشركات الأخرى 
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      قيعد التعامل بين
                       الموظفين بواسطة البريد الإلكتروني الرسمي أحد أهم علامات
                       الاحترافية في العمل داخل الشركة ويوفر لك صلاحية الاطلاع 
                      والرجوع لأي رسالة تم إرسالها عبر البريد الإلكتروني
                      </p>
                    <div className="fag_items">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            تخصيص العديد من عناوين البريد الإلكتروني لموظفي شركتك
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            السيطرة الكاملة على جميع رسائل البريد الإلكتروني الصادرة والواردة
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            الظهور بمظهر احترافي أمام الجهات الخارجية أو الشركات الأخرى وأصحاب الأعمال.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            استخدام بريد إلكتروني رسمي كوسيلة تواصل رسمية بينك وبين موظفي شركتك 
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
