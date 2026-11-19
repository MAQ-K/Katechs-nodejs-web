import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-ue-area pt-100">
        <div className="container" style={{marginBottom: 10 + 'em'}}>
          <div className="section-title">

            <h2>
            لماذا تختار كاتكس؟            
            </h2>

          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-card">
                <span>
                  01 <i className="flaticon-shield"></i>
                  
                </span>
                <h3> الخبرة</h3>
                <p>
              فريق متخصص ذو خبرة عالية في مجالات التسويق الرقمي داخل مصر ودول الخليج العربي.                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose-card">
                <span>
                  02 <i className="flaticon-technical-support"></i>
                </span>
                <h3> الدقة</h3>
                <p>
            نتائج واقعية مبنية على بيانات وتحليلات دقيقة.    
                        </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose-card">
                <span>
                  03 <i className="flaticon-technical-support"></i>
                </span>
                <h3>الاسعار</h3>
                <p>
            أسعار تنافسية وخطط مرنة حسب احتياجات كل مشروع.    
                        </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose-card">
                <span>
                  04 <i className="flaticon-support "></i>
                </span>
                <h3>الدعم</h3>
                <p>
               دعم متواصل وتعاون شفاف مع العميل.
                </p>
              </div>
            </div>

         
          </div>

          <div className="container">
            <div className="row">
              <div className="col col-md-3">
              </div>
              <div className="col col-md-6">
                <div className="text-center">
                  <a className="default-btn" style={{width:300 }} href="/digital-market-order">اطلب عرض سعر</a>
                </div>
              </div>
              <div className="col col-md-3">
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
