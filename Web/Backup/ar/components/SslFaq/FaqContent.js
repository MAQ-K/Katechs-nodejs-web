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


import faqImg from "../../public/images/browser-warning.jpg";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area faqsslFotter pb-100">
        <div className="container">
          <div className="row align-items-center">

    
            <div className="col-lg-8">
                <div className="section-1">
                  <h3>ما هو SSL؟ </h3>
                  <p>تعتبر شهادات SSL أساسية لأمن الإنترنت. يتم استخدامها لإنشاء
                    اتصال مشفر والسماح بنقل البيانات بشكل 
                    آمن بين المتصفح أو كمبيوتر المستخدم والخادم أو موقع الويب.
                  </p>
                </div>
                
                <div className="section-1">
                <h6>إنشاء الثقة والأمن عبر الإنترنت لزوار موقع الويب الخاص بك والأعمال التجارية.</h6>
                <p>تريد Google أن تجعل الويب أكثر أمانًا، ويتضمن جزء كبير من ذلك التأكد من أن
                   المواقع التي يصل إليها الأشخاص عبر Google آمنة. ولهذا السبب ثبت أن مواقع الويب التي تستخدم 
                   (SSL) تستفيد من التصنيف الأعلى في نتائج البحث.
                </p>
                </div>
            </div>

            <div className="col-lg-4">
              <div className="faq-img">
                <Image
                  src={faqImg}
                  alt="Image"
                  width={970}
                  height={600}
                />
              </div>
          </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
