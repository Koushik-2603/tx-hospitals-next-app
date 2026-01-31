"use client";
import React from "react";
import DOMPurify from "dompurify";

const RoboticRecovery = ({ data }) => {
    if (!data || data.length === 0) return null;

    const { heading, topDescription, lines, bottomDescription } = data[0];

    // Extract image URL from topDescription and clean the text
    const imgMatch = topDescription.match(/<img src="([^"]+)"/);
    const imageUrl = imgMatch ? imgMatch[1] : "";
    const cleanTopDescription = topDescription.replace(/<img[^>]*>/, "").replace(/<p><br><\/p>/g, "").trim();

    return (
        <section className="py-10 px-6 md:px-12 font-inter bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-700">
                        {heading}
                    </h2>
                    <div
                        className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanTopDescription) }}
                    />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Left - Timeline List */}
                    <div className="flex-1 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[19px] top-6 bottom-6 w-1 bg-pink-700 hidden sm:block"></div>

                        <div className="space-y-20 relative z-10">
                            {lines.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-4 border-pink-700 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                                        <div className="w-4 h-4 rounded-full bg-pink-700 opacity-80"></div>
                                    </div>
                                    <p className="text-gray-700 text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-pink-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image with Frame */}
                    <div className="flex-1">
                        <div className="relative p-3 md:p-5">
                            {/* Frame Shadow/Background */}
                            <div className="absolute inset-0 shadow-2xl transform rotate-1 scale-105 opacity-10"></div>

                            {/* Image Container */}
                            <div className="relative bg-white rounded-[2.5rem] border-[6px] md:border-[8px] border-pink-700 shadow-2xl overflow-hidden group">
                                <img
                                    src={imageUrl}
                                    alt="Recovery"
                                    className="w-full h-auto rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Description */}
                <div
                    className="text-center mt-12 text-gray-700 text-base md:text-lg font-medium max-w-5xl mx-auto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bottomDescription) }}
                />
            </div>
        </section>
    );
};

export default RoboticRecovery;
