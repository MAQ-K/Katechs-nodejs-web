import React from "react";
import Link from "next/link";

const ServicesStyleOne = () => {
  return (
    <>
      <section className="features-area features-area-inner-style ptb-100">
        <div className="container">
          <div className="row justify-content-center">

            <h3 className="title text-center">اختر مستوى التحقق الخاص بك</h3>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features ssl-type">
                <p>أقصى قدر من الحماية والثقة</p>
                <div className="mb-20">
                  <img  src="/images/ssl-dv-icons.png"  width={200}/>
                </div>
                <h3 >التحقق الممتد  (EV)</h3>
                <p>
                التحقق من الهوية الكاملة. مثالي لمواقع الأعمال والتجارة 
                الإلكترونية التي تتطلع إلى توفير أقصى قدر من ثقة الزائرين.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features ssl-type">
                <p>SSL قوي على مستوى الأعمال</p>
                <div className="mb-20">
                  <img  src="/images/ssl-ov-icon.png"  width={200}/>
                </div>
                <h3 >التحقق من صحة المنظمة (OV)</h3>
                <p>
                التحقق من الهوية الأساسية. مثالية لمواقع 
                الشركات الصغيرة والصفحات التي تقبل المعلومات الحساسة.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features ssl-type">
                <p>الأمن الأساسي</p>
                <div className="mb-20">
                  <img  src="/images/ssl-ev-icon.png" width={200}  />
                </div>
                <h3>التحقق من صحة المجال (DV)</h3>
                <p>
                التحقق من صحة المجال فقط. صدر في دقائق.
                 مثالية للمدونات ووسائل التواصل الاجتماعي والمواقع الشخصية.
                </p>
              </div>
            </div>



            


          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesStyleOne;
