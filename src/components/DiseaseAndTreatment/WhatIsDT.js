import React from "react";
import sanitize from "@/utils/sanitize";

const WhatIsDT = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];
    const rawHeading = content.heading || "";
    const prefixMatch = rawHeading.match(/^(What is(?:\s+an?)?)\s+(.+)$/i);
    const prefixText = prefixMatch ? prefixMatch[1] : rawHeading;
    const conditionText = prefixMatch ? prefixMatch[2] : "";

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Left Column: Text Content */}
                <div className="w-full lg:w-3/5 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
                        {prefixMatch ? (
                            <>
                                {prefixText}{" "}
                                <span className="text-[#C23358]">{conditionText}</span>
                            </>
                        ) : (
                            rawHeading
                        )}
                    </h2>

                    <div
                        className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4 prose prose-a:text-[#C23358] prose-a:font-semibold prose-strong:text-gray-900"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(content.description),
                        }}
                    />
                </div>

                {/* Right Column: Image */}
                {content?.image && (
                    <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center">
                        <img
                            src={content.image}
                            alt={content.heading}
                            className="w-full h-auto object-cover rounded-lg shadow-sm"
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhatIsDT;
