import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function LanguageDropdown({ languages }) {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState(languages[0]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            {/* Trigger button */}
            <button
                className="flex items-center gap-2 bg-pink-700 shadow-lg px-4 py-1 rounded-full text-white font-medium focus:outline-none focus:ring-1 focus:ring-pink-500"
                onClick={() => setOpen(!open)}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                {language}
                <FiChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            {/* Dropdown menu */}
            {open && (
                <div
                    className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                    role="listbox"
                >
                    <ul className="flex flex-col text-sm text-black font-medium">
                        {languages.map((lang, idx) => (
                            <li
                                key={idx}
                                className={`px-4 py-2 cursor-pointer transition ${language === lang
                                        ? "bg-pink-700 text-white rounded-md"
                                        : "hover:bg-pink-100"
                                    }`}
                                onClick={() => {
                                    setLanguage(lang);
                                    setOpen(false);
                                }}
                                role="option"
                                aria-selected={language === lang}
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
