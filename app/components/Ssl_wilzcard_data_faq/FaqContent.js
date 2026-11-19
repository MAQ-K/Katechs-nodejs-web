import React, { Component } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area emailProFaq sslfaq">
        <div className="container">
          <div className="row align-items-center">

                
             
                <div className="row  data-content mb-100 ">



                    <div className="col-lg-2 col-sm-6 single-offer-ssl ">

                      <div className="single-offer single-offer-ssl">
                        <img  src="../../images/ssl.png"  width={150}/>
                      </div>
                    </div>  




                    <div className="col-lg-8 col-sm-6 data-text">

                   
                      <div className="single-offer single-offer-ssl ">
                      

                        <h5>ما هي شهادة Wildcard SSL؟</h5>
                        <p>
                        يسمح لك Wildcard SSL بتأمين عدد غير محدود من 
                        النطاقات الفرعية في شهادة واحدة. إنه حل رائع لأي شخص يستضيف 
                        أو يدير عدة مواقع أو صفحات موجودة في نفس النطاق. تغطي تكلفة
                         الشهادة لمرة واحدة النطاقات الفرعية الإضافية التي قد تضيفها في المستقبل.
                        بخلاف شهادة SSL القياسية التي يتم إصدارها لاسم نطاق واحد مؤهل بالكامل فقط، على سبيل المثال.
                         www.example.com، مما يعني أنه لا يمكن استخدامه إلا لتأمين النطاق المحدد الذي تم إصداره له، ويتم إصدار شهادة 
                        Wildcard SSL إلى *.example.com، حيث تمثل العلامة النجمية جميع النطاقات الفرعية الممكنة.

                        يعد Wildcard SSL خيارًا متاحًا لشهادات DV وOV SSL.
                        </p>

                       






                    </div>
                </div>
             
               
                
              



              </div>
            </div>  
        </div>
      </div>



    </>
  );
};

export default FaqContent;
