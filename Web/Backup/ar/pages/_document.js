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

            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800&display=swap"
              rel="stylesheet"
            />
          
            <link href="https://fonts.googleapis.com/css?family=Droid+Arabic+Kufi&display=swap"
            rel="stylesheet"
            />

            <link
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@700;800;900&display=swap"
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