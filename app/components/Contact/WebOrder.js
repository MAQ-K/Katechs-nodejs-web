import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../utils/baseUrl";

import ReCAPTCHA from "react-google-recaptcha";
const MySwal = withReactContent(Swal);


const alertContent = () => {
  MySwal.fire({
    title: "تم الارسال",
    text: "تم الارسال وسيتم التواصل خلال 24 ساعه",
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
  company :"",
  company_info :"",
  Domain : "",
  Type : "",

};





const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const [verfied, setVerifed] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/web`;
      const { name, email, number, subject, text , company ,company_info ,Domain ,Type} = contact;
      const payload = { name, email, number, subject, text , company ,company_info ,Domain ,Type };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();

    } catch (error) {
      console.log(error);
    }
  };
 



  return (
    <div className="main-contact-area pb-100">
      <div className="container">
        <div className="section-title">
        
        
        </div>

        <div className="row align-items-center">
            <div className="contact-wrap contact-pages mb-0">
              <div className="contact-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="الأسم بالكامل"
                          className="form-control"
                          value={contact.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="البريد الالكتروني"
                          className="form-control"
                          value={contact.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="رقم الهاتف"
                          className="form-control"
                          value={contact.number}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="company"
                          placeholder="اسم شركتك"
                          className="form-control"
                          value={contact.company}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="company_info"
                          placeholder="نشاط الشركه "
                          className="form-control"
                          value={contact.company_info}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>


                   

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">

                      <select name="Type"  className="form-control " onChange={handleChange}  required>
                        <option name="Type"  value="">اختر نوع الخدمه </option>
                        <option name="Type"  value="موقع ويب">  استضافه</option>
                        <option name="Type"  value="متجر الكتروني + تطبيق جوال">
تصميم مواقع الويب</option>
                        <option name="Type"  value="منصه تعليميه">بريد الكتروني</option>
                        <option name="Type"  value="متجر الكتروني + تطبيق جوال">تسويق الكتروني</option>
                        <option name="Type"  value="متجر الكتروني + تطبيق جوال">تعليم</option>
                      </select> 
                      </div>


                    </div>

                    
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">

                      <select name="Domain"    className="form-control " onChange={handleChange}  required>
                        <option name="Domain"  value=""> هل تملك دومين ؟</option>
                        <option name="Domain"  value="لا املك دومين">لا</option>
                        <option name="Domain"  value=" نعم املك دومين">نعم</option>
                      </select> 
                      </div>
                    </div>




                   
                    
          






                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="6"
                          placeholder="تفاصيل طلبك ؟"
                          className="form-control"
                          value={contact.text}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>                    

                  
                   
           

                    <div className="col-lg-12 col-sm-12 mb-20">
                      
                    <ReCAPTCHA
                      
                      sitekey='6Lel7KUpAAAAAI2CDgznlyxiONwz8bqT1jeZJtMy'
                      onChange={onChange}
                    />
                    </div>



                    <div className="col-lg-12 col-sm-12">
                      <button 
                      type="submit" 
                      disabled={!verfied}
                      className="default-btn btn-two"          
                      >

                        ارسال الطلب
                      </button>
                    </div>







                  </div>
                </form>
              </div>
            </div>
          </div>

          
        </div>
    </div>
  );
  
};



export default ContactForm;
