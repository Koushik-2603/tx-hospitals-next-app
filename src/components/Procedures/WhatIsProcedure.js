import React from "react";
import DOMPurify from "dompurify";

const WhatIsProcedure = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Left Column: Text Content */}
                <div className="w-full lg:w-3/5 order-2 lg:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#C23358] mb-6">
                        {content.heading}
                    </h2>
                    <div
                        className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(content.description)
                        }}
                    />
                </div>

                {/* Right Column: Image */}
                {content?.image && (
                    <div className="w-full lg:w-2/5 order-1 lg:order-2 flex justify-center">
                        <img
                            src={content.image}
                            alt={content.heading}
                            className="w-full h-auto object-contain max-h-[400px]"
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhatIsProcedure;
