import Document, { 
    Html, 
    Head, 
    Main, 
    NextScript 
  } from "next/document";

  import React from 'react'
// ...

  
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="ar" dir="rtl">
          <Head>

            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=5"
            />

            {/* One family sitewide — Almarai. It replaced Open Sans, Dosis,
                Droid Arabic Kufi and Cairo, all four of which were being
                fetched here and none of which is referenced any more.
                Almarai has FOUR weights and no others: 300, 400, 700, 800.
                Requesting 500 or 600 from Google returns HTTP 400. */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            {/* crossOrigin is required on this one: font FILES are fetched
                in CORS mode, so a preconnect without it opens a connection
                the font request cannot reuse. */}
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
              rel="stylesheet"
            />

            <link rel="icon" type="image/png" href="/images/favicon1.png"></link>



          </Head>
          <body>


            <Main />
            <NextScript />

            <script src="/_next/static/chunks/style.js"></script> 

       



          </body>
        </Html>
      );
    } 
     
  }
  
  
  export default MyDocument;