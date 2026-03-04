import React from "react";
import DOMPurify from "dompurify";
import { FaCheck } from "react-icons/fa";

const CausesAndRiskFactors = ({ data, openModal }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];
    const rawHeading = content.heading || "";

    // Split heading: "Causes and" → black, rest → pink
    const prefixMatch = rawHeading.match(/^(Causes\s+and)\s+(.+)$/i);
    const prefixText = prefixMatch ? prefixMatch[1] : rawHeading;
    const conditionText = prefixMatch ? prefixMatch[2] : "";

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 leading-snug">
                {prefixMatch ? (
                    <>
                        {prefixText}{" "}
                        <span className="text-[#C23358]">{conditionText}</span>
                    </>
                ) : (
                    rawHeading
                )}
            </h2>

            {/* Top Description */}
            {content.topDescription && (
                <div
                    className="text-gray-700 text-center text-base md:text-lg mb-8 leading-relaxed max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.topDescription),
                    }}
                />
            )}

            {/* Items Grid — two columns */}
            {content.items && content.items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {content.items.map((item, index) => (
                        <div key={index}>
                            {/* Column Title */}
                            <h3 className="text-lg font-bold text-[#C23358] mb-4">
                                {item.title}
                            </h3>

                            {/* Checklist */}
                            <ul className="space-y-3">
                                {item.lines && item.lines.map((line, lineIndex) => (
                                    <li
                                        key={lineIndex}
                                        className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed"
                                    >
                                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded-full bg-pink-50 text-[#C23358]">
                                            <FaCheck size={10} />
                                        </span>
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Banner */}
            {content.bottomDescription && (
                <div className="bg-[#FFF0F3] rounded-2xl p-6 md:p-8 text-center border border-pink-100">
                    <div
                        className="text-gray-800 text-sm md:text-base leading-relaxed mb-5 max-w-3xl mx-auto [&_strong]:text-[#C23358] [&_a]:text-[#C23358] [&_a]:font-semibold [&_a]:underline"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(content.bottomDescription),
                        }}
                    />
                    <button
                        onClick={openModal}
                        className="bg-[#C23358] hover:bg-pink-800 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition transform active:scale-95"
                    >
                        Book Appointment
                    </button>
                </div>
            )}
        </div>
    );
};

export default CausesAndRiskFactors;
