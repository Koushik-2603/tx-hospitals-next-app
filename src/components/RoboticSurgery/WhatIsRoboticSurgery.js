"use client";
import React from "react";
import DOMPurify from "dompurify";
import useIsMobile from "@/hooks/useIsMobile";

const WhatIsRoboticSurgery = ({ data }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, description } = data[0];
    const paragraphs = description.split(/\u003c\/p\u003e\s*(?:\u003cp\u003e\s*\u003cbr\s*\/?\u003e\s*\u003c\/p\u003e\s*)?\u003cp\u003e/);
    // Cleanup first and last tags
    let cleanParagraphs = paragraphs.map(p => p.replace(/\u003cp\u003e/g, "").replace(/\u003c\/p\u003e/g, "").trim());

    // Dynamically extract the part to highlight (assumes format: "What is [Surgery Type]?")
    const questionMarkIndex = heading.indexOf("?");
    let mainTitle = "";
    let highlightedTitle = "";

    if (questionMarkIndex !== -1) {
        // Find "Robotic" keyword to split
        const roboticIndex = heading.indexOf("Robotic");
        if (roboticIndex !== -1) {
            mainTitle = heading.substring(0, roboticIndex);
            highlightedTitle = heading.substring(roboticIndex);
        } else {
            // Fallback: just use the whole heading
            highlightedTitle = heading;
        }
    } else {
        highlightedTitle = heading;
    }

    if (isMobile) {
        return (
            <section className="bg-[#f0f2f5] py-6 px-4 font-inter">
                <div className="max-w-full">
                    {/* Title */}
                    <h2 className="text-[22px] leading-tight font-bold mb-6 text-center">
                        <span className="text-gray-900">{mainTitle}</span>
                        <span className="text-pink-700">{highlightedTitle}</span>
                    </h2>

                    {/* Content */}
                    <div className="space-y-5 text-gray-900 text-[15px] leading-relaxed text-center">
                        {/* Render first two paragraphs */}
                        {cleanParagraphs.slice(0, 2).map((para, index) => (
                            <div
                                key={index}
                                className="font-normal"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(para) }}
                            />
                        ))}

                        {/* Render last paragraph in the highlighted box */}
                        {cleanParagraphs.length > 2 && (
                            <div className="mt-6 bg-[#f9ebf0] border border-pink-100 rounded-[20px] p-5 shadow-sm">
                                <div
                                    className="text-gray-900 text-[15px] leading-relaxed font-normal"
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanParagraphs[2]) }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }

    // Desktop version
    return (
        <section className="bg-[#f0f2f5] py-10 px-6 md:px-12 font-inter">
            <div className="container mx-auto max-w-7xl text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
                    {mainTitle}
                    <span className="text-pink-700">{highlightedTitle}</span>
                </h2>

                <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed text-center px-2 md:px-8">
                    {/* Render first two paragraphs */}
                    {cleanParagraphs.slice(0, 2).map((para, index) => (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(para) }}
                        />
                    ))}

                    {/* Render last paragraph in the highlighted box */}
                    {cleanParagraphs.length > 2 && (
                        <div className="mt-8 bg-[#f9ebf0] border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
                            <div
                                className="text-gray-800 text-base md:text-lg leading-relaxed font-medium"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cleanParagraphs[2]) }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WhatIsRoboticSurgery;
