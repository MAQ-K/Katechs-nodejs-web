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
                        مميزات بريد ميكروسوفت
                      </AccordionItemButton>

                    </AccordionItemHeading>

                    <AccordionItemPanel>
                     <div className="row justify-content-center data-content">

                      

                      <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                          <img  src="../../images/office-365-1.webp"  width={300}/>
                          </div>

                          <div className="single-offer">    
                              <h5>تطبيقات موثوق بها ومحدَّثة دائماً</h5>
                              <p>
                              يمنحك Microsoft 365 أدوات تعاون قيِّمة وآمنة، مثل 
                              Word وExcel وPowerPoint وTeams، لمساعدتك على العمل على أفضل نحو. عند إطلاق
                              إصدارات جديدة من التطبيق، 
                              فإنه يتم تسليمها إليك تلقائياً.
                              </p>
                          </div>
                      </div>


                      <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <h5>احتفظ بكل ملفاتك بأمان في السحابة</h5>
                            <p>
                            مع مساحة تخزين آمنة سعة 1 تيرابايت على OneDrive، الملفات والصور ومقاطع الفيديو الخاصة بك دائماً آمنة ويمكن 
                            الوصول إليها من أي مكان وعلى أي جهاز — سواء كان جهاز كمبيوتر أو حاسباً لوحياً أو هاتفاً ذكياً..
                            </p>
                          </div>

                          <div className="single-offer">
                            
                            <img  src="../../images/Office365.webp"  width={500}/>
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
