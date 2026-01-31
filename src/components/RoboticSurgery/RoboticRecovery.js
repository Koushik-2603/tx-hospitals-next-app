"use client";
import React from "react";
import DOMPurify from "dompurify";
import useIsMobile from "@/hooks/useIsMobile";

const RoboticRecovery = ({ data }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, topDescription, lines, bottomDescription, image } = data[0];

    // Extract image URL from multiple possible sources
    let imageUrl = "";

    // Check if there's a dedicated image field
    if (image) {
        imageUrl = image;
    } else {
        // Try to extract from topDescription
        const topImgMatch = topDescription?.match(/\u003cimg[^\u003e]*src=["']([^"']+)["'][^\u003e]*\/?\u003e/i);
        if (topImgMatch) {
            imageUrl = topImgMatch[1];
        } else {
            // Try to extract from bottomDescription
            const bottomImgMatch = bottomDescription?.match(/\u003cimg[^\u003e]*src=["']([^"']+)["'][^\u003e]*\/?\u003e/i);
            if (bottomImgMatch) {
                imageUrl = bottomImgMatch[1];
            }
        }
    }

    // Remove all img tags from both descriptions
    const cleanTopDescription = topDescription
        ? topDescription
            .replace(/\u003cimg[^\u003e]*\/?\u003e/gi, "")
            .replace(/\u003cp\u003e\s*\u003cbr\s*\/?\u003e\s*\u003c\/p\u003e/gi, "")
            .replace(/\u003cp\u003e\s*\u003c\/p\u003e/gi, "")
            .trim()
        : "";

    const cleanBottomDescription = bottomDescription
        ? bottomDescription
            .replace(/\u003cimg[^\u003e]*\/?\u003e/gi, "")
            .replace(/\u003cp\u003e\s*\u003cbr\s*\/?\u003e\s*\u003c\/p\u003e/gi, "")
            .replace(/\u003cp\u003e\s*\u003c\/p\u003e/gi, "")
            .trim()
        : "";

    if (isMobile) {
        return (
            <section className="py-6 px-4 font-inter bg-white overflow-hidden">
                <div className="max-w-full">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-[22px] leading-tight font-bold mb-3 text-pink-700">
                            {heading}
                        </h2>
                        <div
                            className="text-gray-900 text-[13px] font-normal"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanTopDescription) }}
                        />
                    </div>

                    {/* Image with Frame */}
                    {imageUrl && (
                        <div className="mb-6">
                            <div className="relative bg-white rounded-[30px] border-[6px] border-pink-700 shadow-lg overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt="Recovery"
                                    className="w-full h-auto object-cover rounded-[24px]"
                                    style={{ display: 'block' }}
                                    onError={(e) => {
                                        console.error("Failed to load image:", imageUrl);
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Timeline List */}
                    <div className="relative mb-6">
                        {/* Vertical Line */}
                        <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-pink-700"></div>

                        <div className="space-y-8 relative z-10">
                            {lines.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full border-[3px] border-pink-700 bg-pink-700 flex items-center justify-center shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                    <p className="text-gray-900 text-[13px] font-normal">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Description */}
                    <div
                        className="text-center text-gray-900 text-[13px] font-normal leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanBottomDescription) }}
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
                    {imageUrl && (
                        <div className="flex-1">
                            <div className="relative p-3 md:p-5">
                                {/* Frame Shadow/Background */}
                                <div className="absolute inset-0 shadow-2xl transform rotate-1 scale-105 opacity-10"></div>

                                {/* Image Container */}
                                <div className="relative bg-white rounded-[2.5rem] border-[6px] md:border-[8px] border-pink-700 shadow-2xl overflow-hidden group">
                                    <img
                                        src={imageUrl}
                                        alt="Recovery"
                                        className="w-full h-auto max-h-[500px] object-contain rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
                                        style={{ display: 'block' }}
                                        onError={(e) => {
                                            console.error("Failed to load image:", imageUrl);
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Description */}
                <div
                    className="text-center mt-12 text-gray-700 text-base md:text-lg font-medium max-w-5xl mx-auto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanBottomDescription) }}
                />
            </div>
        </section>
    );
};

export default RoboticRecovery;
