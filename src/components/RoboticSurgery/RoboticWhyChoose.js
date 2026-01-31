"use client";
import React from "react";
import DOMPurify from "dompurify";
import { FaRegCheckCircle } from "react-icons/fa";
import useIsMobile from "@/hooks/useIsMobile";

const RoboticWhyChoose = ({ data }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, topDescription, lines, bottomDescription } = data[0];

    if (isMobile) {
        return (
            <section className="py-6 px-4 font-inter bg-[#fdf7f8]">
                <div className="max-w-full">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-[22px] leading-tight font-bold mb-3 text-pink-700">
                            {heading}
                        </h2>
                        <div
                            className="text-gray-900 text-[13px] font-normal"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(topDescription) }}
                        />
                    </div>

                    {/* Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {lines.map((line, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[20px] p-4 flex flex-col items-center text-center shadow-sm border-l-[3px] border-b-[3px] border-pink-700"
                            >
                                {/* Check Icon */}
                                <div className="mb-3">
                                    <FaRegCheckCircle className="text-pink-700 text-3xl" />
                                </div>

                                {/* Text */}
                                <p className="text-gray-900 text-[11px] leading-relaxed font-normal">
                                    {line}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Description */}
                    <div
                        className="text-center text-gray-900 text-[13px] font-normal leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bottomDescription) }}
                    />
                </div>
            </section>
        );
    }

    // Desktop version
    return (
        <section className="py-10 px-6 md:px-12 font-inter bg-[#fdf7f8]">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-pink-700">
                        {heading}
                    </h2>
                    <div
                        className="text-gray-700 text-base md:text-lg font-medium max-w-4xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(topDescription) }}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {lines.map((line, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-l-4 border-b-4 border-pink-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Check Icon */}
                            <div className="mb-4">
                                <FaRegCheckCircle className="text-pink-700 text-4xl stroke-1" />
                            </div>

                            {/* Text */}
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-semibold">
                                {line}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Description */}
                <div
                    className="text-center mt-12 text-gray-700 text-base md:text-lg font-medium max-w-6xl mx-auto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bottomDescription) }}
                />
            </div>
        </section>
    );
};

export default RoboticWhyChoose;
