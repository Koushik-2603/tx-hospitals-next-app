"use client";
import React from "react";
import sanitize from "@/utils/sanitize";
import useIsMobile from "@/hooks/useIsMobile";

const RoboticBenefits = ({ data }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, items, bottomDescription } = data[0];

    if (isMobile) {
        return (
            <section className="py-6 px-4 font-inter bg-white overflow-hidden">
                <div className="max-w-full">
                    {/* Header */}
                    <h2 className="text-[22px] leading-tight font-bold text-center mb-6 text-gray-900">
                        {heading}
                    </h2>

                    {/* Benefits Grid - 2 columns */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {items.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-[#f2d0d9] rounded-[20px] p-4 flex flex-col items-center text-center"
                            >
                                {/* Icon Container */}
                                <div className="mb-3 w-16 h-16 flex items-center justify-center">
                                    <img
                                        src={benefit.image}
                                        alt={benefit.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[13px] leading-tight font-bold text-pink-700 mb-2">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-900 text-[11px] leading-relaxed font-normal">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Footer Text */}
                    <div
                        className="text-center text-gray-900 text-[13px] font-normal leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sanitize(bottomDescription) }}
                    />
                </div>
            </section>
        );
    }

    // Desktop version
    return (
        <section className="py-10 px-6 md:px-12 font-inter bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
                    {heading}
                </h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {items.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#f2d0d9] rounded-[2.5rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            {/* Icon Container */}
                            <div className="mb-6 w-24 h-24 flex items-center justify-center">
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-pink-700 mb-3 leading-tight">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <div
                    className="text-center mt-12 text-gray-700 text-base md:text-lg font-medium max-w-5xl mx-auto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: sanitize(bottomDescription) }}
                />
            </div>
        </section>
    );
};

export default RoboticBenefits;
