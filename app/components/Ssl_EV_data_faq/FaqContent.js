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
                      

                        <h5>ما هو التحقق الممتد SSL؟</h5>
                        <p>
                        EV SSL هي شهادة التحقق من الصحة الممتدة، وهي أعلى فئة من SSL 
                        المتاحة اليوم وتعطي مزيدًا من المصداقية والثقة لموقع الويب الخاص بك
                        مقارنة باستخدام شهادة SSL تم التحقق من صحتها من مؤسسة أو مجال.
                        ستعمل شهادة SSL للتحقق من الصحة الممتدة في عرض اسم شركتك أو موقعك باللون الأخضر.
                        يوفر هذا التحقق المرئي البارز للزائرين ثقة إضافية بأنه تم اتخاذ الخطوات اللازمة لتأكيد
                         هوية موقع الويب والأعمال التي يزورونها، مما يزيد من ثقة المستخدم في موقع الويب الخاص
                         بك ومصداقيته - وهذا هو السبب وراء اختيار معظم الشركات والمؤسسات الكبيرة لشهادات EV.
                        </p>

                        <div class="row ideal-for dv">
                          <h5>حساب جديد صفحات الاشتراك</h5>
                          <div class="col-sm-4">
                            <img  src="../../images/user_icon.png"  width={50}/>
                            
                            <p>بريد الويب</p>
                          </div>
                          <div class="col-sm-4">
                            <img  src="../../images/ecom.png"  width={50}/>
                            <p>التجارة الإلكترونية</p>
                          </div>
                          <div class="col-sm-4">
                            <img  src="../../images/global.webp"  width={50}/>
                            <p>المجالات
                              المهمة للأعمال</p>
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
