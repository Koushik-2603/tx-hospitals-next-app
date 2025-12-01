// src/pages/_app.js
import "@/styles/globals.css"; // your global CSS
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
}
