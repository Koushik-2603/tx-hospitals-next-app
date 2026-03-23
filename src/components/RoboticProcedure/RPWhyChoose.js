"use client";
import React from "react";
import DOMPurify from "dompurify";
import useIsMobile from "@/hooks/useIsMobile";

const RPWhyChoose = ({ data }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, topDescription, items, bottomDescription } = data[0];

    // Split heading for pink accent
    const headParts = heading.split("TX Hospitals");
    const prefix = headParts[0] || "Why Choose ";
    const suffix = headParts[1] || "";

    return (
        <section className="py-6 px-6 md:px-12 font-inter bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="border border-gray-200 rounded-[24px] p-6 md:p-12 shadow-sm">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-[34px] font-bold text-gray-900 leading-tight">
                            {prefix} <span className="text-[#b02a44]">TX Hospitals</span> {suffix}
                        </h2>
                        {topDescription && (
                            <div
                                className="text-gray-800 text-[15px] md:text-[17px] mt-4 max-w-4xl mx-auto leading-relaxed font-normal"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(topDescription) }}
                            />
                        )}
                    </div>

                    {/* Grid of Why Choose Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-[15px] p-6 flex flex-col items-start gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-[#f9cfd8] flex items-center justify-center font-bold text-[#b02a44]">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-[17px] font-bold text-gray-900 leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 text-[14px] leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Summary */}
                    {bottomDescription && (
                        <div
                            className="text-center text-gray-900 text-[15px] md:text-[18px] font-bold leading-relaxed max-w-5xl mx-auto [&_strong]:text-[#b02a44] [&_strong]:font-bold"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bottomDescription) }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default RPWhyChoose;
