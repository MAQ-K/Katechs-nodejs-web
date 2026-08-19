import React from "react";
import Link from "next/link";
import EmailDataFag from "/components/marketingFaq/FaqContent";
const Emailpro = () => {
  return (
    <>
      <div className="row justify-content-center email-pro">
      
      <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
            <img  src="/images/email1.png"  width={30}/>
            </div>
            <h3>بريد إلكتروني احترافي</h3>
              <p> 1,039ج.م<sub> السنه</sub></p>
            <span>
                86ج.م <sub>/ الشهر</sub>
                
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                ضمان تشغيل 99.9%
              </li>
              <li>
                <i className="bx bx-check"></i>
                مكافحة الفيروسات و البريد العشوائي
              </li>
              <li>
                <i className="bx bx-check"></i>
                email@your-domain.com
              </li>
              <li>
                <i className="bx bx-check"></i>
                حجم صندوق الوارد
              </li>
              <li>
                <i className="bx bx-check"></i>
                بريد ويب كامل المواصفات
              </li>
              <li>
                <i className="bx bx-check"></i>
                متوافق مع الجوال وجميع المتصفحات
              </li>
              <li>
                <i className="bx bx-check"></i>
                التقويمات وجهات الاتصال والمهام
              </li>
              <li>
                <i className="bx bx-check"></i>
                CardDAV & CalDAV
              </li>
              <li>
                <i className="bx bx-check"></i>
                صفحة البوابة المتكاملة
              </li>
              <li>
                <i className="bx bx-check"></i>
                أداة ترحيل الخدمة الذاتية
              </li>
              <li>
                <i className="bx bx-x"></i>
                تخزين الملفات السحابية
              </li>
              <li>
                <i className="bx bx-x"></i>
                اونلاين اوفيس سويت  
              </li>
              <li>
                <i className="bx bx-x"></i>
                إنشاء / تحرير مستندات ورد
              </li>
              <li>
                <i className="bx bx-x"></i>
                إنشاء/تحرير جداول البيانات
              </li>
              <li>
                <i className="bx bx-x"></i>
                إنشاء / تحرير باور بوينت
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>


            <p> لكل مستخدم في الشهر</p>

          </div>
        </div>


        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
            <img  src="/images/email1.png"  width={30}/>
            </div>
            
            <h3>بريد إلكتروني احترافي + الإنتاجية </h3>
              <p> 1,559ج.م <sub> السنه</sub></p>
            <span>
                130ج.م <sub>/ الشهر</sub>
                
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                ضمان تشغيل 99.9%
              </li>
              <li>
                <i className="bx bx-check"></i>
                مكافحة الفيروسات و البريد العشوائي
              </li>
              <li>
                <i className="bx bx-check"></i>
                email@your-domain.com
              </li>
              <li>
                <i className="bx bx-check"></i>
                حجم صندوق الوارد
              </li>
              <li>
                <i className="bx bx-check"></i>
                بريد ويب كامل المواصفات
              </li>
              <li>
                <i className="bx bx-check"></i>
                متوافق مع الجوال وجميع المتصفحات
              </li>
              <li>
                <i className="bx bx-check"></i>
                التقويمات وجهات الاتصال والمهام
              </li>
              <li>
                <i className="bx bx-check"></i>
                CardDAV & CalDAV
              </li>
              <li>
                <i className="bx bx-check"></i>
                صفحة البوابة المتكاملة
              </li>
              <li>
                <i className="bx bx-check"></i>
                أداة ترحيل الخدمة الذاتية
              </li>
              <li>
                <i className="bx bx-check"></i>
                تخزين الملفات السحابية
              </li>
              <li>
                <i className="bx bx-check"></i>
                اونلاين اوفيس سويت  
              </li>
              <li>
                <i className="bx bx-check"></i>
                إنشاء / تحرير مستندات ورد
              </li>
              <li>
                <i className="bx bx-check"></i>
                إنشاء/تحرير جداول البيانات
              </li>
              <li>
                <i className="bx bx-check"></i>
                إنشاء / تحرير باور بوينت
              </li>
            </ul>

            <Link href="https://katechs.com/contactWeb/" className="default-btn">
              احجز الان
            </Link>

          <p> لكل مستخدم في الشهر</p>
          </div>
        </div>

        <div>
        <EmailDataFag />
      </div>


      </div>
    </>
  );
};

export default Emailpro;
