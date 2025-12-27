"use client";

import { useEffect } from "react";

export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent duplicate load
    if (window.googleTranslateElementInit) return;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,te,bn,ta,mr,ml,kn,gu,pa,ar,ur,it,es,pt,fr,ru,zh-CN,ne",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}
