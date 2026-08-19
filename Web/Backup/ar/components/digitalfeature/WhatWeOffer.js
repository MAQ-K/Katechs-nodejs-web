import React from "react";
import Image from "next/image";

import offerImg from "../../public/images/offer1.png";

const WhatWeOffer = () => {
  return (
    <>
      <section className="industries-serve-area pt-70 pb-100">
        <div className="container">
          <div className="section-title">
            <span> إدارة منصات التواصل الاجتماعي – بناء حضور رقمي مؤثر</span>

            <h5>نقوم بإدارة حساباتك على مختلف المنصات<br /> (فيسبوك، إنستغرام، تويتر، لينكد إن، تيك توك وغيرها)  </h5>
          
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
                    <h5>إعداد خطة محتوى استراتيجية شهرية.</h5>
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
                    <h5>تصميم منشورات جذابة بصريًا وكتابيًا.</h5>
                    

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
                    <h3> التفاعل مع الجمهور والرد على الاستفسارات.</h3>

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
                    <h5> نحسّن الأداء لصناعة تواصل يعزز ثقة وولاء جمهورك.</h5>


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
