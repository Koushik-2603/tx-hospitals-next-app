import React from "react";
import DOMPurify from "dompurify";
import { FaCheckCircle } from "react-icons/fa";

const SymptomsDT = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];
    const rawHeading = content.heading || "";

    // Split heading at colon: "Symptoms of ...: " → black, rest → pink
    const colonIndex = rawHeading.indexOf(":");
    const prefixText = colonIndex !== -1 ? rawHeading.slice(0, colonIndex + 1) : rawHeading;
    const suffixText = colonIndex !== -1 ? rawHeading.slice(colonIndex + 1).trim() : "";

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Heading — left aligned, split at colon */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                {prefixText}{" "}
                {suffixText && (
                    <span className="text-[#C23358]">{suffixText}</span>
                )}
            </h2>

            {/* Top Description */}
            {content.topDescription && (
                <div
                    className="text-gray-700 text-center text-base md:text-lg mb-6 leading-relaxed max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.topDescription),
                    }}
                />
            )}

            {/* Two-column checklist inside a single bordered box */}
            {content.items && content.items.length > 0 && (
                <div className="border border-pink-200 bg-[#FFF7F9] rounded-2xl p-6 md:p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {content.items.map((item, index) => (
                            <div key={index}>
                                {/* Column Title */}
                                <h3 className="text-base font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>

                                {/* Checklist */}
                                <ul className="space-y-3">
                                    {item.lines && item.lines.map((line, lineIndex) => (
                                        <li
                                            key={lineIndex}
                                            className="flex items-start gap-3 text-gray-700 text-sm md:text-base leading-relaxed"
                                        >
                                            <FaCheckCircle
                                                className="flex-shrink-0 mt-0.5 text-[#C23358]"
                                                size={16}
                                            />
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bottom Description */}
            {content.bottomDescription && (
                <div
                    className="text-gray-700 text-center text-sm md:text-base leading-relaxed max-w-4xl mx-auto [&_strong]:text-[#C23358] [&_a]:text-[#C23358] [&_a]:font-semibold [&_a]:underline"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.bottomDescription),
                    }}
                />
            )}
        </div>
    );
};

export default SymptomsDT;
