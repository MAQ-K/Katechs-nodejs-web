import React from "react";

import Image from "next/image";
import faqImg from "../../public/images/contact-img.png";
;

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
                        <h3>أحصل على ثقة عملاءك من خلال إيميل احترافي</h3>
                        <p>بريد إلكتروني yourname@yourdomain.com يحافظ على هوية شركتك و مصداقيتها
                          وخصويتها بمقدار تسعة اضعاف من الإيميل العادي  

                        </p>
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            ظهور احترافي من خلال استخدام عنوان بريد إلكتروني يطابق نشاطك التجاري
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            تعزيز هويتك التجارية مع كل رسالة تقوم بارسالها
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            خدمة مضاد البريد العشوائي Anti Spam
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
