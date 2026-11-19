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
                      

                        <h5>ما هي شهادة DV SSL؟</h5>
                        <p>
                        توفر شهادات التحقق من صحة 
                        النطاق طريقة اقتصادية وسريعة لتنفيذ طبقة المقابس الآمنة 
                        (SSL) على موقع الويب الخاص بك. تتحقق شهادات التحقق من صحة النطاق من ملكيتك للنطاق،
                         ولكنها لا تؤدي إلى أي تحقق إضافي على مستوى المؤسسة.
                          تُعد شهادات التحقق من صحة النطاق مثالية لمواقع الويب الشخصية
                          والمدونات ووسائل التواصل الاجتماعي، أو أي مواقع لا تنقل خصوصية
                          وسرية معلومة.
                            تعمل شهادة التحقق من صحة النطاق على تنشيط قفل المتصفح وتمكين استخدام 
                            https للتأكيد لزوار موقع الويب
                            الخاص بك وعملائك 
                          أنك تأخذ خصوصيتهم على محمل الجد.
                        </p>

                        <div class="row ideal-for dv">
                          <h5>حالات الاستخدام الموصى بها</h5>
                          <div class="col-sm-4">
                            <img  src="../../images/comment.png"  width={50}/>
                            
                            <p>المدونات</p>
                          </div>
                          <div class="col-sm-4">
                            <img  src="../../images/file2.png"  width={50}/>
                            <p>صفحات إعلامية</p>
                          </div>
                          <div class="col-sm-4">
                            <img  src="../../images/the-server.png"  width={50}/>
                            <p>الاتصالات من خادم إلى خادم</p>
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
