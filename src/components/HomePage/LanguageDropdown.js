"use client";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { changeLanguage } from "@/utils/changeLanguage";

const languageMap = {
    English: "en",
    Telugu: "te",
    Hindi: "hi",
    Bengali: "bn",
    French: "fr",
    Arabic: "ar",
};

const getInitialLanguage = () => {
    if (typeof document === "undefined") return "English";

    const cookie = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    const code = cookie ? cookie[1] : "en";

    // reverse map: code → language name
    const reverseMap = Object.fromEntries(
        Object.entries(languageMap).map(([name, code]) => [code, name])
    );

    return reverseMap[code] || "English";
};

export default function LanguageDropdown({ languages, setForceSecondary }) {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState(getInitialLanguage);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const toggleDropdown = () => {
        const next = !open;
        setOpen(next);
        if (setForceSecondary) setForceSecondary(next);
    };

    return (
        <div ref={ref} className="relative inline-block text-left">
            {/* Toggle Button */}
            <button
                className="flex items-center gap-2 bg-pink-700 shadow-lg px-4 py-1 rounded-full text-white font-medium"
                onClick={toggleDropdown}
            >
                {language}
                <FiChevronDown
                    className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            {open && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                    <ul className="flex flex-col text-sm font-medium">
                        {languages.map((lang) => (
                            <li
                                key={lang}
                                className={`px-4 py-2 cursor-pointer ${language === lang
                                    ? "bg-pink-700 text-white"
                                    : "hover:bg-pink-100"
                                    }`}
                                onClick={() => {
                                    setLanguage(lang);
                                    setOpen(false);
                                    changeLanguage(languageMap[lang]);
                                }}
                            >
                                {lang}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
