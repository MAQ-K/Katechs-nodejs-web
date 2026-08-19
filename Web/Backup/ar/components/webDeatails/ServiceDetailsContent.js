import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";
import Image from "next/image";
import faqImg from "../../public/images/website.webp";
import servicesDetailsImg from "../../public/images/services-details/services-details.jpg";
import servicesDetailsImg2 from "../../public/images/services-details/services-details2.png";

const ServiceDetailsContent = () => {
  return (
    <>
      <section className="service-details-area ">
        <div class="website-info ptb-100">
        <div className="container">
          <div className="row  ">
              <div className="service-details-wrap">
                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                      <div className="service-list-img">

                        <Image src={faqImg} alt="تصميم مواقع الكترونيه" width={500} height={465} />
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6">
                      <div className="car-service-list">
                        <h3>جذب الكثير من <span>العملاء</span> عبر الانترنت</h3>
                        <p>أي كان مجال نشاطك التجاري فنحن جاهزون  لتصميم
                            وتطوير وبرمجة موقعك الإلكتروني وإشهار علامتك التجارية على الانترنت 
                            نحن نستخدام احدث التقنيات البرمجية التي تحافظ على نظافة الكود وغلق 
                            كافة الثغرات التي تتسبب في تعطيل الموقع الإلكتروني  للحفاظ على سمعة 
                            موقعك الإلكتروني على الانترنت

                        </p>
                        
                        <div className="">
                          <a href="https://katechs.com/contactWeb/" className="default-btn">
                            تواصل معنا
                          </a>
                      </div>
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
