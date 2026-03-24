"use client";
import React from "react";
import sanitize from "@/utils/sanitize";
import useIsMobile from "@/hooks/useIsMobile";

const RPConditions = ({ data, onBookNow }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, topDescription, items, bottomDescription } = data[0];

    // Split heading to highlight surgical part in pink
    const splitText = "with ";
    const parts = heading.split(splitText);
    const mainHeading = parts[0] + splitText;
    const highlightedHeading = parts[1] || "";

    return (
        <section className="py-6 px-6 md:px-12 font-inter bg-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-[34px] leading-tight font-bold text-gray-900 mb-6">
                        {mainHeading}
                        <span className="text-[#b02a44]">{highlightedHeading}</span>
                    </h2>
                    {topDescription && (
                        <div
                            className="text-gray-800 text-[16px] md:text-[18px] max-w-4xl mx-auto font-normal leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: sanitize(topDescription) }}
                        />
                    )}
                </div>

                {/* Conditions Grid - 2 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#fff1f3] rounded-[10px] p-6 flex flex-col items-start"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#d86a83] flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-[17px] font-bold text-gray-900">
                                    {item.title.replace(/^\d+[\.\t\s]*/, '')}
                                </h3>
                            </div>
                            <p className="text-gray-900 text-[14px] leading-relaxed font-normal pl-0 md:pl-12">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                {bottomDescription && (
                    <div className="bg-[#fff1f3] rounded-[10px] p-8 text-center flex flex-col items-center gap-5">
                        <div
                            className="text-gray-900 text-[15px] md:text-[17px] font-bold leading-relaxed max-w-5xl"
                            dangerouslySetInnerHTML={{ __html: sanitize(bottomDescription) }}
                        />
                        <button
                            onClick={onBookNow}
                            className="bg-[#b02a44] hover:bg-[#8f1f33] text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md"
                        >
                            Book Appointment
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RPConditions;
