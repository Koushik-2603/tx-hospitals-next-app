"use client";
import React from "react";
import DOMPurify from "dompurify";
import useIsMobile from "@/hooks/useIsMobile";

const RPSafetyAndCandidates = ({ safetyData, candidateData }) => {
    const isMobile = useIsMobile();

    if ((!safetyData || safetyData.length === 0) && (!candidateData || candidateData.length === 0)) return null;

    const safety = safetyData && safetyData.length > 0 ? safetyData[0] : null;
    const candidate = candidateData && candidateData.length > 0 ? candidateData[0] : null;

    const renderCard = (data) => {
        if (!data) return null;

        // Split heading for pink accent logic (similar to other components)
        const parts = data.heading.split(/Robotic|an Ideal/);
        const prefix = parts[0] || "";
        const highlighted = data.heading.includes("Robotic") ? "Robotic" : (data.heading.includes("an Ideal") ? "an Ideal" : "");
        const suffix = data.heading.split(highlighted)[1] || "";

        return (
            <div className="flex-1 bg-[#fff1f3] rounded-[15px] p-6 md:p-10 shadow-sm border border-[#b02a44]/5">
                <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-5 leading-tight">
                    {prefix} <span className="text-[#b02a44]">{highlighted}</span> {suffix}
                </h3>
                <div
                    className="text-gray-900 text-[14px] md:text-[16px] leading-relaxed 
                    [&_h4]:font-bold [&_h4]:text-gray-900 [&_h4]:mb-4 [&_h4]:mt-6
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mb-6
                    [&_p]:mb-4 last:[&_p]:mb-0
                    [&_strong]:font-bold"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.description) }}
                />
            </div>
        );
    };

    return (
        <section className="py-6 px-6 md:px-12 font-inter bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row gap-8">
                    {renderCard(safety)}
                    {renderCard(candidate)}
                </div>
            </div>
        </section>
    );
};

export default RPSafetyAndCandidates;
