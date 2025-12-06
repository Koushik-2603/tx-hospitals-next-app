"use client";

import { useEffect } from "react";

export default function GoogleTranslateLoader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,te,bn,fr,ar",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div id="google_translate_element" style={{ display: "none" }} />
  );
}
