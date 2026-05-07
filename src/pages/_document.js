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
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
