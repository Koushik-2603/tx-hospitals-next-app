"use client";
import React from "react";
import DOMPurify from "dompurify";

const RoboticProcedures = ({ data }) => {
    if (!data || data.length === 0) return null;

    const { heading, topDescription, items, bottomDescription } = data[0];

    const titleParts = heading.split("Procedures We Offer");
    const mainTitle = titleParts[0];
    const highlightedTitle = "Procedures We Offer";

    return (
        <section className="py-10 px-6 md:px-12 font-inter bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
                        {mainTitle}
                        <span className="text-pink-700">{highlightedTitle}</span>
                    </h2>
                    <div
                        className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(topDescription) }}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {items.map((item, index) => {
                        const descParts = item.description.split("\n").filter(p => p.trim() !== "");
                        const mainDesc = descParts[0];
                        const bullets = descParts.slice(1);

                        return (
                            <div key={index} className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                                {/* Image Container */}
                                <div className="h-64 sm:h-80 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                                        {mainDesc}
                                    </p>

                                    {/* Bullets */}
                                    <ul className="space-y-2 mb-6 flex-1">
                                        {bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm md:text-base font-medium">
                                                <span className="text-pink-600 font-bold mt-0.5">→</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button */}
                                    <div className="mt-auto">
                                        <button className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 shadow-md">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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

export default RoboticProcedures;
