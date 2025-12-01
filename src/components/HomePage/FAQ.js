// components/FAQ.js
"use client";
import { useState, useEffect } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import FAQSchema from "@/utils/FAQSchema";

const faqs = [
    {
        question: "Where can I access the current packages offered by TX Hospitals?",
        answer:
            "All our health offers and health packages are advertised on our website.",
    },
    {
        question: "How do I book an appointment for the package?",
        answer:
            "You can book an appointment through our website or by contacting our reception.",
    },
    {
        question: "What healthcare packages does TXH offer?",
        answer:
            "TXH offers a wide range of healthcare packages including preventive health checks, specialty packages, and more.",
    },
    {
        question:
            "How can I access the tariff list for admission and procedures of TXH?",
        answer:
            "The tariff list is available at the hospital reception and on our official website.",
    },
    {
        question: "Do TX Hospitals offer health care education?",
        answer:
            "Yes, TX Hospitals provides health awareness and education programs regularly.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const isMobile = useIsMobile();

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {isMobile ? (
                <section className="py-1 px-2">
                    {/* Heading */}
                    <h2 className="text-center text-xl font-bold text-pink-700 mb-2">
                        Frequently Asked Questions (FAQs)
                    </h2>
                    <FAQSchema faqs={faqs} />
                    {/* FAQ List */}
                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <div key={idx}>
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className={`w-full flex justify-between items-start gap-2 px-3 py-2 rounded-full border transition text-left text-xs
              ${openIndex === idx
                                            ? "bg-pink-700 text-white font-medium"
                                            : "border-pink-600 text-pink-700 hover:bg-pink-50"
                                        }`}
                                >
                                    <span className="flex-1 text-xs leading-snug">{faq.question}</span>
                                    <svg
                                        className={`w-4 h-4 mt-0.5 flex-shrink-0 transform transition-transform ${openIndex === idx ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                {openIndex === idx && (
                                    <div className="px-3 py-2 text-xs bg-gray-50 text-gray-700 rounded-full">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            ) : (
                <section className="py-6 px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Heading */}
                        <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-700 mb-8">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <FAQSchema faqs={faqs} />
                        {/* FAQ List */}
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx}>
                                    <button
                                        onClick={() => toggleFAQ(idx)}
                                        className={`w-full flex justify-between items-center px-6 py-4 rounded-full border text-left transition
                  ${openIndex === idx
                                                ? "bg-pink-700 text-white font-medium"
                                                : "border-pink-600 text-pink-700 hover:bg-pink-50"
                                            }`}
                                    >
                                        <span>{faq.question}</span>
                                        <svg
                                            className={`w-5 h-5 transform transition-transform ${openIndex === idx ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {openIndex === idx && (
                                        <div className="px-6 py-4 bg-gray-50 text-gray-700 rounded-full">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
