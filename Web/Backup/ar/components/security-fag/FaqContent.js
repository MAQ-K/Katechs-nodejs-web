import React, {  } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";


import faqImg from "../../public/images/security2.png";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area faq-emil faq-security ">
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
                      النسخ الاحتياطية للبيانات
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p>
                      يمكّنك Backup Exec من تلبية توقعات حماية البيانات
                       الخاصة بشركتك من خلال تقليل الوقت المستغرق لاجراء
                      نسخ احتياطي واستعادة المعلومات والتطبيقات والخوادم الهامة.
                      </p>

                      <p>
                       باستخدام Backup Exec ، يمكنك التخفيف من مخاطر وتكلفة التوقف عن العمل باستخدام مجموعة واسعة من
                      البرامج وطرق النسخ الاحتياطي والاسترداد المرنة. سواء كنت تستخدم القرص أو الشريط أو السحابة،يمكن
                      استعادة معلوماتك بسهولة وبشكل موثوق.
                      </p>

                    <div className="fag_items">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            نسخ احتياطي سريع وفعال من حيث التكلفة ومتعدد السحابة من أجل الثقة واالختيار
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            حل موحد حقيقي. حماية البيانات السحابية واالفتراضية والمادية.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            التكامل المتقدم مع VMware و Hyper-V  
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            التكامل مع Azure Site Recovery
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            بنيات هجينة للسحابة، والقرص، والاشرطة.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            انتعاش سريع وفعال ومتعدد الاستخدامات.
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            موثوق به
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
