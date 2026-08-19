import React from "react";
import Link from "next/link";

const ServicesStyleOne = () => {
  return (
    <>
      <section className="features-area features-area-inner-style ptb-100">
        <div className="container">
          <div className="row justify-content-center">


            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <div className="mb-20">
                  <img  src="/images/email1.png"  width={70}/>
                </div>
                <h3 >بريد إلكتروني احترافي </h3>
                <p>
                بريد إلكتروني احترافي يمكنك استخدامه من خلال اي 
                متصفح انترنت أو
                 ربطه بالأوت لوك و الجوال للاتصال ببريدك الالكتروني 
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <div className="mb-20">
                  <img  src="/images/googleicon.webp" width={70}  />
                </div>
                <h3>بريد إلكتروني ميكروسوفت 365</h3>
                <p>
                تتضمن Microsoft 365 تطبيقات Office الأفضل في فئتها،
                 مثل Word وExcel وTeams وغير ذلك...
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <div className="mb-20">
                  <img  src="/images/microsoft.png" width={70}  />
                </div>  
                <h3>بريد إلكتروني Google Workspace</h3>
                <p>
                أدوات احترافية تتضمن التطبيقات التي تزيد من 
                التعاون والإنتاجية و تناسب كل الطرق التي نعمل بها
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
