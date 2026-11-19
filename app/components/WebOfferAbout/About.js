import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../public/images/about-img.png";

const About = () => {
  return (
    <>
      <div className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <Image src={aboutImg} alt="برمجة مواقع الويب" width={490} height={420} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">

             
                <h3>
               خدمات استضافة و تصميم المواقع الالكترونيه         
                 </h3>
                <p>
                في <strong>KATECHS</strong> ، نقدم حلولًا رقمية متكاملة تساعدك على الوصول إلى أهدافك بكل احترافية. نحن متخصصون في تصميم مواقع إلكترونية مبتكرة تلبي جميع احتياجاتك، بالإضافة إلى استضافة المواقع التي تضمن لك أداء سريع وآمن لموقعك. مع خدماتنا في إنشاء بريد إلكتروني مخصص وإنشاء متجر إلكتروني، نقدم لك جميع الأدوات التي تحتاجها لإنشاء وتوسيع حضورك الرقمي<br/><br/>

بفضل استراتيجياتنا المتوافقة مع محركات البحث (SEO)، نضمن لك تحسين ظهورك على الإنترنت وجذب المزيد من العملاء. اخترنا لك أن تكون شريكًا رقميًا قويًا قادرًا على التميز والنمو في عالم الإنترنت 
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        تصميم المواقع الالكترونيه
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        حجز استضافة سريعة آمنة و موثوقة
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        جذب الكثير من العملاء عبر الانترنت
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        الحصول على ثقة عملاءك من خلال ايميل احترافي
                        
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        الحفاظ على حماية موقعك وجعله محل ثقة لعملائك
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تحويل العملاء المحتملين وابرام صفقات البيع بشكل اسرع

                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        تنمية أعمالك ومبيعاتك عبر بناء متجر ألكتروني احترافي
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about-us" className="default-btn">
                  معرفة المزيد
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
