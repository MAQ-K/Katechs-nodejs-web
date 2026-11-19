import React from "react";
import Link from "next/link";
import aboutImg from "../../public/images/about-img.png";
import Image from "next/image";
const Yearly = () => {
  return (
    <>
      <div className="row justify-content-center">
        
        <div className="col-lg-5 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  عرض خاص  </h3>
              <p>  <s> 9,999ج.م </s>  </p>
            </div>
            <span style={{fontSize:25 , color:"red"}}>
            4,999ج.م
            </span>

            <ul style={{maxWidth:400}}> 
              <li>
                <i className="bx bx-check"></i>
                موقع ويب عربي او انجليزي
              </li>
              <li>
                <i className="bx bx-check"></i>
                مناسب لكل الأعمال
              </li>
              <li>
                <i className="bx bx-check"></i>
                صفحة رئيسية إبداعية
              </li>
       
              <li>
                <i className="bx bx-check"></i>
                نموذج اتصل بنا
              </li>
              <li>
                <i className="bx bx-check"></i>
                الدمج مع وسائل التواصل الاجتماعي
              </li>
              <li>
                <i className="bx bx-check"></i>
                متوافق مع محركات البحث
              </li>
              <li>
                <i className="bx bx-check"></i>
                متوافق مع كافة الشاشات
              </li>
              <li>
                <i className="bx bx-check"></i>
                إضافة إلى جوجل الأعمال
              </li>
              <li>
                <i className="bx bx-check"></i>
                إضافة إلى أرشفة محرك بحث جوجل
              </li>
              <li>
                <i className="bx bx-check"></i>
                نطاق و استضافة مجانا (القيمة 29 دولار/السنه)
              </li>
              <li>
                <i className="bx bx-check"></i>
                حسابات بريد إلكتروني مجانية
              </li>
              <li>
                <i className="bx bx-check"></i>
                شهادة SSL مجاناً
              </li>
              
              
            </ul>

   

            
            <p>مدة التنفيذ 7 أيام من تاريخ استلام البيانات</p>
          </div>
        </div>

     
  


      </div>
      <iframe
          title="طلب العرض"
          aria-label="طلب العرض"
          frameBorder="0"
          style={{ height: "900px", width: "99%", border: "none"}}
          src="https://forms.zohopublic.com/katechskat1/form/Untitled/formperma/fWgg2lqovZN-W70UYpLtEd8dKtRPGg5E2FGEm5ZXl9I"
        />

    </>
  );
};

export default Yearly;
