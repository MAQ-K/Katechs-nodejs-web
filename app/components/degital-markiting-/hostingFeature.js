import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const ServicesStyleThree = () => {
  return (
    <>
      <div className="offer-area gray-bg ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="row justify-content-center pb-50">
              مميزات استضافة KATECHS
            </h2>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-chip"></i>
                <h3>
                    تخزين عالي الأداء 
                </h3>
                <p>
                أسرع بـ 20 مرة من محركات أقراص 
                SATA القياسية، يوفر كنوز تك لجميع الخوادم الافتراضية
                 الخاصة الجديدة محركات أقراص ثابتة 
                 SSD عالية الأداء تتراوح سعتها من 30 جيجابايت إلى 240 جيجابايت
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-vr"></i>
                <h3>
                  التزويد الفوري
                </h3>
                <p>
                ألحصول على ما يصل وتشغيلها في ثوان. في حين أن معظم حلول 
                VPS تستغرق ساعات أو أيام للتنشيط،
                 فقد صممت كنوز تك خوادم VPS الخاصة بنا ليتم توفيرها على الفور. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-blockchain"></i>
                <h3>
                  ضمان وقت تشغيل 99.9%
                </h3>
                <p>
                يضمن كنوز تك مدة تشغيل الأجهزة 
                والشبكات والبنية التحتية بنسبة 99.9%. هذا هو ضمان وقت تشغيل
                 كنوز تك 10/10 مع تقديم دعم فني على مدار الساعة 24/7/365
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-target"></i>
                <h3>
                    لوحة تحكم سهلة 
                </h3>
                <p>
                هل تحتاج إلى إضافة المزيد من ذاكرة الوصول العشوائي 
                أو مساحة التخزين؟ لا مشكلة! لوحة التحكم الخاصة بنا على شبكة الإنترنت هي المكان الذي يمكنك من خلاله 
                توسيع نطاق خادمك الافتراضي لأعلى أو لأسفل بسهولة.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-choice"></i>
                <h3>
                  خوادم متعددة اللغات
                </h3>
                <p>
                خوادم متعددة اللغات تأتي بأحدث الإصدارات من PHP وMySQL وPerl وPython وRuby 
                والمزيد مثبتة مسبقًا. ويمكنك تخصيص الخادم الخاص بك باستخدام 
                أي برنامج خادم أو مكون يستند إلى Linux. 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  خيارات برامج مرنة
                </h3>
                <p>
                مع الوصول الكامل إلى الجذر،
                 يمكنك تثبيت وتخصيص أي برنامج 
                 تحتاجه لتحسين تجربة الاستضافة الخاصة بك..
                </p>
              </div>
            </div>

            

          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default ServicesStyleThree;
