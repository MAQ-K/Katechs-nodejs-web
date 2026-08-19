import React from "react";

import Image from "next/image";
import faqImg from "../../public/images/security.png";


const ServiceDetailsContent = () => {
  return (
    <>
      <section className="service-details-area ">
        <div className="EmailInfo">
        <div className="container">
          <div className="row  ">
              <div className="service-details-wrap">
                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                      <div className="service-list-img">

                        <Image src={faqImg} alt="بريد الكتروني" width={450} height={265} />
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-6">
                      <div className="car-service-list">

                        <h3>حماية شبكات الشركات </h3>
                       
                        <p>عبارة عن مجموعة شاملة من أدوات الأمان التي تتضمن التسجيل الفعلي والتاريخ والابلاغ. ويوفر ميزات الأمان
                            الاساسية لحماية شبكات الشركة بما في ذلك التوجيه وجدار الحماية وترجمة عنوان الشبكة وخيارات الوصول عن
                            بعد الأساسية.

                        </p>
                       
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
