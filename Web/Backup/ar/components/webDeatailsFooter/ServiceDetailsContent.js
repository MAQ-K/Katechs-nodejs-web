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
        <div class="faq-area-web ">
        <div className="container">
          <div className="row">
              <div className="service-details-wrap">
                <div className="car-service-list-wrap">
                  <div className="row align-items-center">


                    <div className="col-lg-6 col-md-6">
                    <div className="car-service-list">
                        <h4> أجعل من أعمالك التجارية بوابة إلكترونية لعملاءك على الانترنت</h4>

                        <p> إذا كنت لا تملك موقع إلكتروني على الانترنت 
                          فأنت خارج الكون، دع العالم يتعرف عليك وعلى أعمالك التجارية
                           . من تكون ؟ ما هي رسالتك و أهدافك ؟ ما هي خدماتك
                            ؟ وما المنتجات التي تقدمها للجمهور ؟
                          بوابتك على الانترنت تتيح لأعمالك التجارية الانتشار بفاعلية
                          مع عرض خدماتك ومنتجاتك بشكل أكثر احترافية 
                        </p>
                        
                    
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      


                      <div className="service-list-img">

                        <Image src={faqImg} alt="Image" width={500} height={465} />
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
