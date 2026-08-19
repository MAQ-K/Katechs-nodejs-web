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
      <div className="faq-area emailProFaq">
        <div className="container">
          <div className="row align-items-center">
              <div className="faq-accordion">

                
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>

                      <AccordionItemButton>
                        مميزات بريد جوجل
                      </AccordionItemButton>

                    </AccordionItemHeading>

                    <AccordionItemPanel>
                     <div className="row justify-content-center data-content">


                      <div className="col-lg-5 col-sm-6 data-text">

                        <div className="single-offer">
                          <img  src="../../images/google-email1-scaled.webp"  width={500}/>
                        </div>
                        <div className="single-offer">
                        

                          <h5>بريد إلكتروني آمن للأنشطة التجارية، وغير ذلك الكثير</h5>
                          <p>
                          يتيح لك أحدث إصدار من Gmail متابعة أعمالك المهمة بسهولة أكبر. وبفضل الأساس 
                          المتمثِّل في البريد الإلكتروني الآمن والخالي من الإعلانات، يمكنك أيضًا الدردشة وإجراء المكالمات الصوتية أو مكالمات الفيديو ومتابعة المشاريع من خلال الملفات والمهام المشترَكة، كل ذلك ضمن Gmail.
                          </p>
                        </div>
                      </div>



                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">

                          <h5>مُصمَم لحمايتك من التهديدات</h5>
                          <p>
                          وفّر لك Gmail كل ما تحتاج إليه للحفاظ على أمان بياناتك. تحظر نماذج تعلُم
                           الآلة لدينا أكثر من 99.9% من الرسائل غير المرغوب فيها
                            وعمليات التصيّد الاحتيالي والبرامج الضارة لمنعها من الوصول إلى المستخدمين.
                          </p>
                        </div>


                        <div className="single-offer">
                        <img  src="../../images/google-security.webp"  width={310}/>
                        </div>

                      </div>


              

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                        <img  src="../../images/google-meetingp.webp"  width={310}/>
                        </div>
                      </div>


                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">

                          <h5>مُصمَم لحمايتك من التهديدات</h5>
                          <p>
                          وفّر لك Gmail كل ما تحتاج إليه للحفاظ على أمان بياناتك. تحظر نماذج تعلُم
                           الآلة لدينا أكثر من 99.9% من الرسائل غير المرغوب فيها
                            وعمليات التصيّد الاحتيالي والبرامج الضارة لمنعها من الوصول إلى المستخدمين.
                          </p>
                        </div>
                      </div>
 

                      

                    </div>
                    </AccordionItemPanel>

                  </AccordionItem>

                 

                  
                </Accordion>
              </div>
            </div>  
        </div>
      </div>



    </>
  );
};

export default FaqContent;
