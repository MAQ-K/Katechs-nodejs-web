import React from "react";
import Link from "next/link";

const NewsSidebar = () => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <h3 className="widget-title">ابحث الان</h3>

          <div className="post-wrap">
            <form className="search-form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search..."
                />
              </label>

              <button type="submit">
                <i className="bx bx-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="widget widget-posts-thumb">
          <h3 className="widget-title">مقالات مرتبطه   </h3>

          <div className="post-wrap">
            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/hosting-blog.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                <h4 className="title usmall">
                  <Link href="/news/web-hosting-blog">
                  دليل شامل لفهم أساسيات الاستضافة على الإنترنت
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/email-blog1.jpg)`,
                  }}
                ></span>
              </Link>

              <div className="info">
              
                <h4 className="title usmall">
                  <Link href="/news/email-blog">
                  إنشاء بريد الكتروني للشركات والاستفادة منه 
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/website-design-blog.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                
                <h4 className="title usmall">
                  <Link href="/news/website-design-blog">
                  تصميم موقع إلكتروني: أساسيات الجذب والتفاعل
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>

            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/ssl-blog.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                
                <h4 className="title usmall">
                  <Link href="/news/ssl-blog">
                  تأمين موقع الويب وأضافة الثقة لزوار الموقع الإلكتروني
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>


            <article className="item">
              <Link href="/news/news-details" className="thumb">
                <span
                  className="fullimage cover"
                  role="img"
                  style={{
                    backgroundImage: `url(/images/blog-details/security-blog.png)`,
                  }}
                ></span>
              </Link>

              <div className="info">
                
                <h4 className="title usmall">
                  <Link href="/news/security-blog">
                  استراتيجيات أمنية للحفاظ على البيانات والمعلومات الحساسة
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          </div>
        </div>

        
        
      </div>
    </>
  );
};

export default NewsSidebar;
