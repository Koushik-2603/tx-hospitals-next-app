import "@/styles/globals.css";
import React, { useEffect } from "react";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const preventAction = (e) => e.preventDefault();
    document.addEventListener("copy", preventAction);
    document.addEventListener("cut", preventAction);
    document.addEventListener("contextmenu", preventAction);
    document.addEventListener("selectstart", preventAction);

    return () => {
      document.removeEventListener("copy", preventAction);
      document.removeEventListener("cut", preventAction);
      document.removeEventListener("contextmenu", preventAction);
      document.removeEventListener("selectstart", preventAction);
    };
  }, []);

  return (
    <div className={`${montserrat.variable} ${inter.variable} font-sans`}>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
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
      <GoogleTranslateLoader />
      <Component {...pageProps} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
