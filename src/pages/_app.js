// src/pages/_app.js
import "@/styles/globals.css"; // your global CSS
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleTranslateLoader from "@/components/GoogleTranslateLoader";

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
        <>
            <GoogleTranslateLoader />
            <Component {...pageProps} />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}
