import React from "react";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const ServicesStyleTwo = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span> استراتيجية التسويق الإلكتروني – خطط مدروسة لنجاح مستدام</span>
            <h5> نبدأ كل مشروع بفهم عميق لأهدافك واحتياجاتك، ونبني على ذلك:</h5>
            <p>
            </p>
          </div>

          <div className="row justify-content-center">

            <div className="col-lg-6 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-chip"></i>
                <h3>
                دراسة السوق والمنافسين.
                </h3>
                <p>
                  
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-vr"></i>
                <h3>
                تحديد الجمهور المستهدف بدقة.
                                </h3>
                <p>
                 
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-blockchain"></i>
                <h3>
              اختيار القنوات الأنسب لتحقيق الأهداف.    
                          </h3>
                <p>
                 
                </p>
              </div>
            </div>


            <div className="col-lg-6 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-vr"></i>
                <h3>
             تنفيذ حملات تسويق رقمي (مدفوعة وعضوية). 
                            </h3>
                <p>
                 
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

export default ServicesStyleTwo;
