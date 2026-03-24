import React from "react";
import sanitize from "@/utils/sanitize";

const PreventionDT = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Outer container with border */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4 leading-snug">
                    {content.heading}
                </h2>

                {/* Description */}
                {content.description && (
                    <div
                        className="text-gray-700 text-center text-base md:text-lg mb-8 leading-relaxed max-w-4xl mx-auto [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(content.description),
                        }}
                    />
                )}

                {/* Items Grid — 3 columns */}
                {content.items && content.items.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {content.items.map((item, index) => {
                            // Strip leading number like "1.\t" from title
                            const cleanTitle = item.title.replace(/^\d+\.\s*/, "").trim();

                            return (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 shadow-sm"
                                >
                                    <div className="flex items-center gap-3 mb-1">
                                        {/* Boxy number badge */}
                                        <div className="w-8 h-8 rounded-lg bg-pink-100 text-[#C23358] text-base font-bold flex items-center justify-center flex-shrink-0">
                                            {index + 1}
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug">
                                            {cleanTitle}
                                        </h3>
                                    </div>
                                    {/* Description */}
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreventionDT;
