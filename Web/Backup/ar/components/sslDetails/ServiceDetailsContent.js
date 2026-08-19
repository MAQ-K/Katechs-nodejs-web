import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";
import Image from "next/image";
import faqImg from "../../public/images/SSL-certificates.png";
import servicesDetailsImg from "../../public/images/services-details/services-details.jpg";
import servicesDetailsImg2 from "../../public/images/services-details/services-details2.png";

const ServiceDetailsContent = () => {
  return (
    <>
      <section className="service-details-area ">
        <div class="EmailInfo">
        <div className="container">
          <div className="row  ">
              <div className="service-details-wrap">
                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                      <div className="service-list-img">

                        <Image src={faqImg} alt="Image" width={450} height={265} />
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6">
                      <div className="car-service-list">
                        <h3>قم بتأمين موقعك وأضف الثقة لزوار موقعك.</h3>
                        <p> مع مجموعة من
                           العلامات التجارية، لدينا الشهادة المناسبة لجميع احتياجات أمان موقعك

                        </p>
                        <ul>
                          
                          <li>
                            <i className="bx bx-check"></i>
                           	توفر اتصال أمن بين المتصفح والخادم
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            	يضع قفلًا بجوار عنوان الويب الخاص بك في المتصفح
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                           	التحقق من هوية المنظمة
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            	تشفير الاتصالات لحماية المعلومات الحساسة التي يقدمها لك عملاؤك
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

         
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsContent;
