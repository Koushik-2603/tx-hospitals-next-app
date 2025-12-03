import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>

                {/* Favicon */}
                <link rel="icon" href="/TX-favicon.png" />
                <link rel="apple-touch-icon" href="/TX-favicon.png" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />

                {/* Font Awesome */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                    rel="stylesheet"
                />

                {/* Robots */}
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />

                {/* OG */}
                <meta property="og:url" content="https://txhospitals.in/" />

                {/* Google Verification */}
                <meta
                    name="google-site-verification"
                    content="QVxFNHC6mE2GwL7GLkNYO4riWI7bS5ZKhSxeld0sbnY"
                />

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NCSC4PC');
        `,
                    }}
                />

                {/* Google Translate Init */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
              }
            `,
                    }}
                />

                {/* Google Translate Script */}
                <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

                {/* Flag Icons */}
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flag-icon-css/css/flag-icon.min.css"
                />
            </Head>

            <body>
                {/* GTM NoScript */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NCSC4PC"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>

                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
