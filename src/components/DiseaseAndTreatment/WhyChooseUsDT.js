import React from "react";
import DOMPurify from "dompurify";

const WhyChooseUsDT = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];
    const rawHeading = content.heading || "";

    // Regex to accurately match and colorize the heading based on the design
    // E.g., "Why Choose TX Hospitals for Atrial Septal Defect Treatment in Hyderabad?"
    let prefix = "";
    let highlight = "";
    let suffix = "";

    // Attempt careful split for: "Why Choose" + "TX Hospitals for [Condition]" + "in Hyderabad?"
    const match = rawHeading.match(/^(Why\s+Choose)\s+(TX\s+Hospitals\s+for\s+.*?)(?:\s+(in\s+Hyderabad\??))?$/i);
    if (match) {
        prefix = match[1];
        highlight = match[2];
        suffix = match[3] || "";
    } else {
        // Fallback
        const fallbackMatch = rawHeading.match(/^(Why\s+Choose)\s+(.+)$/i);
        if (fallbackMatch) {
            prefix = fallbackMatch[1];
            highlight = fallbackMatch[2];
        } else {
            prefix = rawHeading;
        }
    }

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Outer container with border */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">

                {/* Highlighted Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 leading-snug">
                    {prefix}{" "}
                    {highlight && <span className="text-[#C23358]">{highlight}</span>}{" "}
                    {suffix && <span>{suffix}</span>}
                    {!highlight && !suffix && rawHeading !== prefix && (
                        <span className="text-[#C23358]">{rawHeading.slice(prefix.length)}</span>
                    )}
                </h2>

                {/* Top Description */}
                {content.topDescription && (
                    <div
                        className="text-gray-700 text-center text-base md:text-lg mb-10 leading-relaxed max-w-5xl mx-auto [&_strong]:text-[#C23358] [&_strong]:font-semibold [&_a]:text-[#C23358] [&_a]:font-semibold [&_a]:underline"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(content.topDescription),
                        }}
                    />
                )}

                {/* 3-column items Grid */}
                {content.items && content.items.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                        {content.items.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#FFF8E7] border border-orange-100 rounded-xl p-6 shadow-sm flex flex-col gap-2"
                            >
                                <h3 className="text-base font-bold text-gray-900 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Bottom Description */}
                {content.bottomDescription && (
                    <div
                        className="text-gray-800 text-center text-base md:text-lg font-medium leading-relaxed max-w-4xl mx-auto"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(content.bottomDescription),
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default WhyChooseUsDT;
