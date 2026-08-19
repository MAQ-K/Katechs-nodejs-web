import React from "react";

import Image from "next/image";
import faqImg from "../../public/images/degital-markiting.png";
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
                    <div className="col-lg-7 col-md-6">
                      <div className="car-service-list">
                        <h3>خدمات التسويق الرقمي من كاتكس – حلول رقمية تصنع الفرق</h3>
                        <p>في عصر التحول الرقمي، أصبحت المنافسة على الظهور الرقمي القوي أمرًا أساسيًا  لنمو أي عمل تجاري. ومن هنا تنطلق كاتكس لتكون شريكك الاستراتيجي في عالم التسويق الرقمي، حيث نقدم باقة شاملة من الخدمات المصممة
                         بعناية لمساعدتك في الوصول إلى جمهورك المستهدف وتحقيق نتائج ملموسة
                        </p>
                        
                          <a className="default-btn" style={{width:200 , textAlign:"center"}} href="/digital-market-order" >اطلب عرض سعر</a>
                    
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="service-list-img">

                        <Image src={faqImg} alt="التسويق الرقمي" width={550} height={365} />
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
