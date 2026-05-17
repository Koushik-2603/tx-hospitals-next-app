import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google tag (gtag.js) */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=AW-18108940602"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18108940602');
            `,
                    }}
                ></script>

                {/* Favicon */}
                <link rel="icon" href="/TX-favicon.png" />
                <link rel="apple-touch-icon" href="/TX-favicon.png" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />

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

                {/* Meta Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '26839929075649647');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=26839929075649647&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {/* End Meta Pixel Code */}
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
