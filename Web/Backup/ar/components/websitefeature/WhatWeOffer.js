import React from "react";
import Image from "next/image";

import offerImg from "../../public/images/offer1.png";

const WhatWeOffer = () => {
  return (
    <>
      <section className="industries-serve-area pt-70 pb-100">
        <div className="container">
          <div className="section-title">
            <span> تصميم مواقع احترافيه </span>

            <h3>لماذا KATECHS لتطوير المواقع الإلكترونية</h3>
          
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
                    <h3>احدث التقنيات</h3>
                    <p>استخدام احدث التقنيات والبرامج في بناء مواقع الويب</p>

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
                    <h3>الاستجابة</h3>
                    <p>مواقع ويب متوافقة مع جميع الشاشات والأجهزة اللوحية</p>

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
                    <h3>الشهرة والبحث</h3>
                    <p>مواقع ويب متوافقة مع محركات البحث لجذب الكثير من الزوار</p>

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
                    <h3>الحماية والأمان</h3>
                    <p>بناء أكواد نظيفة مع غلق كافة الثغرات البرمجية </p>


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
