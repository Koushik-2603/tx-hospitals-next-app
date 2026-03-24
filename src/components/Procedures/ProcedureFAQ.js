import React, { useState } from "react";
import sanitize from "@/utils/sanitize";
import { ChevronUp } from "lucide-react";

const ProcedureFAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="w-full px-4 md:px-12 py-8 font-inter">
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-6 md:p-8">
                <h2 className="text-2xl md:text-4xl font-bold text-[#C23358] mb-6 md:mb-12">
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-pink-600 overflow-hidden transition"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex items-center justify-between px-4 py-3 text-left"
                            >
                                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>

                                <ChevronUp
                                    className={`w-5 h-5 text-pink-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-700 text-sm md:text-base leading-relaxed border-t border-pink-100 mt-2 pt-2">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: sanitize(
                                                faq.description || faq.answer
                                            ),
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcedureFAQ;
