import React, { Component } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area emailProFaq">
        <div className="container">
          <div className="row align-items-center">
              <div className="faq-accordion">

                
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>

                      <AccordionItemButton>
                        مميزات البريد الاحترافي
                      </AccordionItemButton>

                    </AccordionItemHeading>

                    <AccordionItemPanel>
                     <div className="row justify-content-center data-content">

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                          <i><img  src="../../images/icon-dark-cloud.png"  width={50}/></i>
                          <h5>تخزين الملفات السحابية </h5>
                          <p>
                          تخزين ومشاركة مستنداتك المهمة بأمان في السحابة. ومع (ما يصل إلى)
                          50 جيجابايت، سيكون لديك مساحة كبيرة لسنوات قادمة.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                          <i><img  src="../../images/icon-dark-productivity.png"  width={50}/></i>
                          <h5>أضف تطبيقات الإنتاجية!</h5>
                          <p>
                          يمكنك إنشاء مستندات Microsoft Office وتحريرها ومشاركتها مثل 
                          Word وExcel وPowerPoint باستخدام تطبيقات App Suite القوية عبر الإنترنت
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                          <i><img  src="../../images/icon-dark-apps.png"  width={50}/></i>
                          <h5>إضافة تطبيقاتك</h5>
                          <p>
                          يمكنك بسهولة إضافة خدمات البريد
                          الإلكتروني و/ أو التطبيقات المفضلة لديك إلى 
                          App Suite؛ مثل Gmail وDropbox وZoom (قريبًا) والمزيد!
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                          <i><img  src="../../images/icon-dark-calendar.png"  width={50}/></i>
                          <h5>التقويم وجهات الاتصال</h5>
                          <p>
                          تواصل كمؤسسة 
                          من خلال التقويم المشترك ومعالج الجدولة ودعم iCal وقائمة العناوين العالمية!
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                          <i><img  src="../../images/icon-dark-email.png"  width={50}/></i>
                          <h5>الكثير من ميزات البريد الإلكتروني</h5>
                          <p>
                          تتوفر جميع ميزات البريد الإلكتروني المفضلة لديك هنا، بما في ذلك وكلاء
                          التوجيه والأسماء المستعارة
                            والمستجيبون التلقائيون والمرشحات والتوقيعات والإشعارات والمزيد!
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-5 col-sm-6 data-text">
                        <div className="single-offer">
                          <i><img  src="../../images/icon-dark-privacy.png"  width={50}/></i>
                          <h5>	الخصوصية</h5>
                          <p>
                          تلن يقوم App Suite، ولا أنفسنا، بقراءة أو مسح أو مشاركة أي من معلوماتك الشخصية 
                          أو معلومات بريدك الإلكتروني مع أي طرف ثالث. أبدًا.
                          </p>
                        </div>
                      </div>

                    </div>
                    </AccordionItemPanel>

                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>

                      <AccordionItemButton>
                        أسئله و اجوبه
                      </AccordionItemButton>

                    </AccordionItemHeading>

                    <AccordionItemPanel>
                    <div className="row justify-content-center data-content email-ask">

                        <div className="col-lg-5 col-sm-6 data-text ">
                          <div className="single-offer">
                            <p className="question">	ما هي التطبيقات المضمنة في الإيميل الاحترافي؟</p>
                            <p>
                            تتضمن جميع خطط الإيميل الاحترافي إمكانية الوصول إلى بريد الويب 
                            والتقويم والمهام ودفتر العناوين. تضيف حزمة الإنتاجية OX Drive ومستندات 
                            OX (النصوص وجداول البيانات والعروض التقديمية).
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">	هل يحمي الإيميل الاحترافي  من البريد العشوائي والفيروسات؟</p>
                            <p>
                            نعم! يستخدم الإيميل الاحترافي تقنية خاصة بالإضافة
                             إلى شراكات مع بائعين معروفين في مجال مكافحة البريد العشوائي للحفاظ
                              على صندوق الوارد الخاص بك نظيفًا وآمنًا قدر الإمكان.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">هل يمكنني إضافة حسابات بريد إلكتروني خارجية إلى الإيميل الاحترافي؟</p>
                            <p>
                            ننعم، يدعم الإيميل الاحترافي
                             ربط جميع حسابات البريد الإلكتروني 
                             IMAP الخارجية بما في ذلك مقدمي الخدمة المشهورين مثل 
                             Gmail وYahoo وOutlook.com. ما عليك سوى إضافة عنوان بريدك 
                             الإلكتروني وكلمة المرور إلى App Suite وسيظهر أي بريد إلكتروني يتم إرساله
                              إلى هذه الحسابات
                             في واجهة App Suite.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">ما هو OX Drive (الإنتاجية)؟</p>
                            <p>
                            يعد OX Drive أحد حلول التخزين عبر الإنترنت لتخزين المستندات والصور والوسائط في السحابة.
                             وهذا يعني أنك تحتاج فقط إلى الوصول إلى الإيميل الاحترافي وOX Drive وسيكون لديك إمكانية الوصول إلى 
                            جميع ملفاتك أيضًا. يتيح لك OX Drive مزامنة ملفاتك مع جميع أجهزتك باستخدام 
                            المتصفح أو التطبيقات الأصلية.
                            </p>
                          </div>
                        </div>


                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">	هل يمكنني ترحيل حساب البريد الإلكتروني الحالي الخاص بي من مزود آخر؟</p>
                            <p>
                            نعم، نحن نقدم أداة ترحيل ذاتية الخدمة تتسم بالبساطة وسهولة الاستخدام.
                             قم بالترحيل من جميع خدمات البريد الإلكتروني الشائعة بما في ذلك 
                             Apple iCloud أو Gmail أو Outlook.com/Windows Live/Hotmail أو Yahoo Mail أو GMX
                              أو T-Online، أو أدخل معلومات موفر الخدمة يدويًا باستخدام 
                            IMAP/POP3 أو البروتوكولات المفضلة الأخرى المتاحة.
                            </p>
                          </div>
                        </div>


                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">	ما هي مستندات OX (الإنتاجية)؟</p>
                            <p>
                            تعد OX Text وOX Spreadsheet وOX Presentation التطبيقات الثلاثة ضمن 
                            المصطلح الأوسع لمستندات OX. يمكن استخدام هذه التطبيقات لإنشاء
                             وتحرير المستندات النصية وجداول البيانات والعروض التقديمية عبر الإنترنت. قم بإنشاء مستنداتك وتحريرها
                              من أي مكان باستخدام الميزات والوظائف المألوفة من حل برنامج Office الخاص بك وعلى جميع أجهزتك.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">	هل يمكنني مزامنة التقويم وجهات الاتصال بين OX App Suite وجهازي المحمول؟</p>
                            <p>
                            نعم، يدعم OX App Suite CalDAV وCardDAV بشكل كامل. وبالنسبة لمستخدمي Android،
                             تكون المزامنة سهلة عبر تطبيق Android Sync المخصص لدينا.
                            </p>
                          </div>
                        </div>

                        <div className="col-lg-5 col-sm-6 data-text">
                          <div className="single-offer">
                            <p className="question">ما اللغات التي يدعمها الإيميل الاحترافي ؟</p>
                            <p>
                            يدعم الإيميل الاحترافي اللغات التالية:
                             العربية، الإنجليزية، الألمانية، الإسبانية، الفرنسية،
                              الإيطالية، الهولندية، البولندية، 中文 简体، 中文 繁體، 日本語 日
                            </p>
                          </div>
                        </div>



                    </div>
                    </AccordionItemPanel>
                  </AccordionItem>

                  
                </Accordion>
              </div>
            </div>  
        </div>
      </div>



    </>
  );
};

export default FaqContent;
