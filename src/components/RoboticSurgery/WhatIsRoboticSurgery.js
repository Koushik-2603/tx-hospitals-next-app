"use client";
import React from "react";
import DOMPurify from "dompurify";

const WhatIsRoboticSurgery = ({ data }) => {
    if (!data || data.length === 0) return null;

    const { heading, description } = data[0];
    const paragraphs = description.split(/<\/p>\s*(?:<p>\s*<br\s*\/?>\s*<\/p>\s*)?<p>/);
    // Cleanup first and last tags
    let cleanParagraphs = paragraphs.map(p => p.replace(/<p>/g, "").replace(/<\/p>/g, "").trim());

    const titleParts = heading.split("Robotic Orthopaedic Surgery?");
    const mainTitle = titleParts[0];
    const highlightedTitle = "Robotic Orthopaedic Surgery?";

    return (
        <section className="bg-[#f0f2f5] py-8 px-6 md:px-12 font-inter">
            <div className="container mx-auto max-w-7xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
                    {mainTitle}
                    <span className="text-pink-700">{highlightedTitle}</span>
                </h2>

                <div className="space-y-3 text-gray-700 text-lg md:text-xl leading-relaxed text-center px-4 md:px-10">
                    {/* Render first two paragraphs */}
                    {cleanParagraphs.slice(0, 2).map((para, index) => (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(para) }}
                            className="mb-6"
                        />
                    ))}

                    {/* Render last paragraph in the highlighted box */}
                    {cleanParagraphs.length > 2 && (
                        <div className="mt-12 bg-[#f9ebf0] border border-gray-300 rounded-3xl p-8 md:p-10 shadow-sm">
                            <div
                                className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium"
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
