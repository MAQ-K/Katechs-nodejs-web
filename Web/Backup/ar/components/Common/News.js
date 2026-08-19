import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "../../public/images/blog/blog1.png";
import blogImg2 from "../../public/images/blog/blog2.png";
import blogImg3 from "../../public/images/blog/blog3.png";

const News = () => {
  return (
    <>
      <section className="news-area pt-100 pb-70">
      <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/web-hosting-blog">
                    <Image
                      src={blogImg1}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                </div>
                <div className="news-content-wrap">
                  <Link href="/news/web-hosting-blog">
                    <h3>دليل شامل لفهم أساسيات الاستضافة على الإنترنت</h3>
                  </Link>
                  <p>
                  استضافة المواقع هي خدمة تقدمها شركة كنوز الجيل للتقنية (KATECHS) 
                  تسمح للأفراد والشركات بنشر مواقعهم على الإنترنت. 
                  </p>
                  <Link href="/news/web-hosting-blog" className="read-more">
                    معرفة المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/email-blog">
                    <Image
                      src={blogImg2}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                </div>
                <div className="news-content-wrap">
                  <Link href="/news/email-blog">
                    <h3>إنشاء بريد الكتروني للشركات والاستفادة منه</h3>
                  </Link>
                  <p>
                  يُعتبر البريد الإلكتروني واحدًا من أهم وسائل
                   الاتصال الإلكتروني في العصر الحديث، حيث يُمثل وسيلة فعّالة لتبادل الرسائل والمعلومات عبر الإنترنت.
                  </p>
                  <Link href="/news/email-blog" className="read-more">
                    معرفة المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="single-news">
                <div className="blog-img">
                  <Link href="/news/website-design-blog">
                    <Image
                      src={blogImg3}
                      alt="Image"
                      width={570}
                      height={400}
                    />
                  </Link>

                </div>
                <div className="news-content-wrap">
                  <Link href="/news/website-design-blog">
                    <h3>تصميم موقع إلكتروني</h3>
                  </Link>
                  <p>
                  تصميم موقع إلكتروني أصبح أمرًا أساسيًا في عصرنا الحالي، حيث يعد الموقع الإلكتروني واجهة العلامة
                   التجارية على الإنترنت. يمكن لتصميم موقع إلكتروني جذاب وفعال...
                  </p>
                  <Link href="/news/website-design-blog" className="read-more">
                    معرفة المزيد <i className="bx bx-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
