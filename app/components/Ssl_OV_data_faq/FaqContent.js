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
                      

                        <h5>ما هي شهادة SSL للتحقق من صحة المنظمة  (ov)؟</h5>
                        <p>
                        توفر شهادات SSL التي تم التحقق من صحتها للمؤسسة
                         تأكيدًا فوريًا للهوية وحماية قوية لموقعك على الويب وشركتك.
                        OV SSL هي شهادة تم التحقق من صحتها من قبل المؤسسة
                        والتي تمنح موقع الويب الخاص بك خطوة في المصداقية مقارنة بشهادات 
                        SSL التي تم التحقق من صحة النطاق. فهو يقوم بتنشيط قفل
                        المتصفح وhttps، ويظهر هوية شركتك، ويؤكد لعملائك أنك تأخذ الأمان على محمل الجد. 
                        يمكن لزوار الموقع التحقق من أن الموقع يتم تشغيله من قبل شركة شرعية وأنه ليس موقعًا محتالًا.
                        </p>

                        <div class="row ideal-for dv">
                          <h5>حالات الاستخدام الموصى بها</h5>
                          <div class="col-sm-4">
                            <img  src="../../images/email-web.png"  width={50}/>
                            
                            <p>بريد الويب</p>
                          </div>
                          <div class="col-sm-4">
                            <img  src="../../images/web-icon.webp"  width={50}/>
                            <p>مواقع الإنترانت</p>
                          </div>
                          <div class="col-sm-4">
                            <img  src="../../images/lock.png"  width={50}/>
                            <p>صفحات تسجيل الدخول</p>
                          </div>



                        </div>



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
