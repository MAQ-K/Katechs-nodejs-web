import React from "react";
import Image from "next/image";

import offerImg from "../../public/images/offer1.png";

const WhatWeOffer = () => {
  return (
    <>
      <section className="industries-serve-area pt-70 pb-100">
        <div className="container">
          <div className="section-title">
            <span> حماية شبكات الشركات</span>

            <h3>فوائد حماية شبكة الشركة للأعمال</h3>
          
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <i className="flaticon-machine-learning"></i>
                    <h3>دمج الأجهزة</h3>
                    <p> يمكن للمسؤول شراء ونشر وإدارة جهاز واحد في شركة صغيرة ومتوسطة الحجم.</p>

                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-artificial-intelligence"></i>
                    <h3>إدارة مبسطة وتصحيح</h3>
                    <p> تمكين المسؤولين من إدارة مجموعة كبيرة من التهديدات لبيئات العمل المحلية والبعيدة من وحدة تحكم واحدة</p>

                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <i className="flaticon-artificial-intelligence"></i>
                    <h3>انخفاض التكلفة</h3>
                    <p>  يوفر دمج الاجهزة سعرًا أقل مقارنة بالحصول على أجهزة متعددة، ويمكن للمسؤولين تركيز معرفتهم وتدريبهم على جهاز واحد.</p>

                  </div>
                </div>

                
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="industries-img"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <Image src={offerImg} alt="Image" width={370} height={390} />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries right-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    <i className="flaticon-choice"></i>
                    <h3>سرعة الاضاءة</h3>
                    <p>تصميم XG لتقديم أداء متميز عن طريق بناء XG خاص باستخدام تقنية Intel متعددة النواة.</p>

                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div
                    className="single-industries right-item"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                  >
                    <i className="flaticon-deep-learning"></i>
                    <h3>حماية شاملة</h3>
                    <p>نحن نقدم أحدث برامج الحماية من الجيل التالي التي تحتاجها باإلضافة إلى ذلك ميزات  يمكنك الحصول
                         عليها في أي مكان آخر-بما في ذلك تشفير الهاتف المحمول والويب والبريد الاكتروني لنقطة النهاية و
                        DLP. لا توجد أجهزة إضافية. لا توجد تكلفة إضافية. ما عليك سوى اختيار ما تريد نشره. 
                    </p>


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

export default WhatWeOffer;
