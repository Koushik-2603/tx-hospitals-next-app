import React from "react";
import DOMPurify from "dompurify";
import { FaCheck } from "react-icons/fa";

const ComplicationsDT = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];
    const rawHeading = content.heading || "";

    // Split heading: "Complications of" → black, rest → pink
    const prefixMatch = rawHeading.match(/^(Complications\s+of)\s+(.+)$/i);
    const prefixText = prefixMatch ? prefixMatch[1] : rawHeading;
    const conditionText = prefixMatch ? prefixMatch[2] : "";

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 leading-snug">
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
                    className="text-gray-700 text-center text-base md:text-lg mb-10 leading-relaxed max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.topDescription),
                    }}
                />
            )}

            {/* Items Grid — two columns without borders */}
            {content.items && content.items.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
                    {content.items.map((item, index) => (
                        <div key={index}>
                            {/* Column Title */}
                            <h3 className="text-xl md:text-2xl font-semibold text-[#C23358] mb-6">
                                {item.title}
                            </h3>

                            {/* Checklist */}
                            <ul className="space-y-4">
                                {item.lines && item.lines.map((line, lineIndex) => (
                                    <li
                                        key={lineIndex}
                                        className="flex items-start gap-4 text-sm md:text-base font-medium text-gray-900 leading-snug"
                                    >
                                        <FaCheck
                                            className="flex-shrink-0 mt-1 text-[#C23358]"
                                            size={14}
                                        />
                                        {line}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ComplicationsDT;
