import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">

          <p>
            سيتم التعامل مع اي مشكلات تثيرها معنا بشكل احترافي , وسيتم اخذ اي تعليقات علي محمل الجد
            حتي نتمكن من تحسن خدماتنا . سيتم الاقرار بجميع جهات الاتصال الينا عبر البريد الالكتروني 
            او تذكرة الدعم من قبل شخص ما في غصون 24 ساعه , وسنحاول ايضاحيثما امكن , حل المشكله 
            خلال تفس الاطر الزمني . قد تستغرق المشكلات الاكثر تعقيدا وقتا اطول قليلا.
            للتواصل عبر البريد سيتم الرد خلال 5 ايام عمل .

          </p>
          <p>
            سوف تحصل دائما علي استجابه شبه فوريه عبر الدردشةالمباشره للهواتف , وبالنسبه للمشكلات الاكثر تعقيدا
            فاننا عادة ما ننظر في طلبات الدعم الجديده في غصون بضع دقائق.
          </p>



            <div className="col-lg-6 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>دائما هنا لمساعدتك</h3>
                <p>
                  تذكرة دعم KATECHS
                </p>
                <a href="/contactWeb">ارسال طلب دعم</a>
               
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>مركز المساعده</h3>
                <p>
                  قائمة الأسله الشائعه
                </p>
                <a href="#">عرض الاسئله الشائعه</a>
               
              </div>
            </div>

            <hr/>

            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>تذاكر الدعم الفني </h3>
                <p>
                  <a href="/contactWeb"> فتح تذكره </a>
                </p>
               
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>ايميل الدعم الفني</h3>
                <p>
                  <a href="mailto:support@katechs.com">support@katechs.com</a>
                </p>
               
              </div>
            </div>


            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>ايميل المبيعات</h3>
                <p>
                <a href="mailto:sales@katechs.com">sales@katechs.com</a>
                </p>
              </div>
            </div>

         
            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3> للاتصال بالدعم الفني</h3>
                <p>201555085828+</p>
                <p>201501086835+</p>
                <p> من الاحد للخميس </p>
                <p> 09:00AM   To  6:00PM </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3> live chat</h3>
                <p> <a href="www.katechs.com">www.katechs.com </a> </p>
                <p> 09:00AM   To  6:00PM </p>
              </div>
            </div>
            
      
   
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
