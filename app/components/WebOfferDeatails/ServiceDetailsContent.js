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
              <div className="service-details-wrap WebOffer-feature">
                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                      <div className="service-list-img">

                        <Image src={faqImg} alt="تصميم مواقع الكترونيه" width={500} height={465} />
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6">
                      <div className="car-service-list">
                          <h3>احصل على موقع إلكتروني احترافي بخصم مميز</h3>
                          <p>هل تبحث عن موقع إلكتروني يعبّر عن هوية عملك ويمنحك حضوراً رقمياً قوياً؟
                        الآن فرصتك مع العرض الخاص من كاتكس لتصميم موقع احترافي شامل، مناسب لكافة الأنشطة والمجالات!
                        </p>
                      </div>

                     
                      <div className="col-lg-12 col-md-12">
                        <div className="col-lg-12 col-md-12">
                          <ul >
                          <h5 style={{marginBottom:20}}>العرض مناسب لـ:</h5>
                            <li>
                              <i className="flaticon-checked"></i>
                              الأفراد                         </li>
                            <li>
                              <i className="flaticon-checked"></i>
                              الشركات                         </li>
                              
                            
                            <li>
                              <i className="flaticon-checked"></i>
                              المطاعم                           
                            </li>

                            <li>
                              <i className="flaticon-checked"></i>
                              العيادات                         </li>
                          
                            <li>
                              <i className="flaticon-checked"></i>
                              المؤسسات التعليمية                        </li>
                            
                          </ul>
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
