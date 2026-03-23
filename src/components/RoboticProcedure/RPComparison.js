"use client";
import React from "react";
import DOMPurify from "dompurify";
import useIsMobile from "@/hooks/useIsMobile";

const RPComparison = ({ data }) => {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) return null;

    const { heading, topDescription, comparison, bottomDescription } = data[0];

    // Split heading at " vs " to style it
    const parts = heading.split(" vs ");
    const head1 = parts[0] || "";
    const head2 = parts[1] || "";

    return (
        <section className="py-6 px-4 md:px-12 font-inter bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Main Card Wrap */}
                <div className="border border-gray-200 rounded-[24px] p-6 md:p-12 shadow-sm">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-[36px] font-bold text-gray-900 leading-tight">
                            {head1} <span className="text-[#b02a44]">vs</span> {head2}
                        </h2>
                        {topDescription && (
                            <div
                                className="text-gray-800 text-[15px] md:text-[17px] mt-4 max-w-4xl mx-auto leading-relaxed 
                                [&_strong]:text-[#b02a44] [&_strong]:font-bold"
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(topDescription) }}
                            />
                        )}
                    </div>

                    {/* Table Container */}
                    <div className="overflow-x-auto rounded-[15px] border border-gray-100">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-[#b02a44] text-white">
                                    <th className="py-4 px-6 font-bold text-[16px] md:text-[18px] text-left">Feature</th>
                                    <th className="py-4 px-6 font-bold text-[16px] md:text-[18px]">Robotic</th>
                                    <th className="py-4 px-6 font-bold text-[16px] md:text-[18px] text-left">Traditional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, index) => (
                                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 text-left font-bold text-gray-800 text-[14px] md:text-[15px]">
                                            {row.feature}
                                        </td>
                                        <td className="py-4 px-6 text-center text-[#d25c78] font-bold text-[14px] md:text-[15px]">
                                            {row.robotic}
                                        </td>
                                        <td className="py-4 px-6 text-left text-gray-800 font-normal text-[14px] md:text-[15px]">
                                            {row.traditional}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Summary */}
                    {bottomDescription && (
                        <div
                            className="mt-10 text-center text-gray-900 text-[14px] md:text-[16px] font-normal leading-relaxed max-w-6xl mx-auto"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bottomDescription) }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default RPComparison;
