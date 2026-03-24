import React from "react";
import sanitize from "@/utils/sanitize";
import { FaCheckCircle, FaRegDotCircle } from "react-icons/fa";

const BenefitsAndRecovery = ({ benefitsData, recoveryData }) => {
    // Helper to get first item if array
    const benefits = benefitsData && benefitsData.length > 0 ? benefitsData[0] : null;
    const recovery = recoveryData && recoveryData.length > 0 ? recoveryData[0] : null;

    if (!benefits && !recovery) return null;

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-4 font-inter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mb-4">

                {/* Benefits Section */}
                {benefits && (
                    <div>
                        <h2 className="text-3xl md:text-3xl font-bold text-[#C23358] mb-2">
                            {benefits.heading}
                        </h2>
                        {benefits.topDescription && (
                            <div
                                className="text-gray-700 text-base mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: sanitize(benefits.topDescription)
                                }}
                            />
                        )}
                        {benefits.lines && benefits.lines.length > 0 && (
                            <ul className="space-y-4">
                                {benefits.lines.map((line, index) => (
                                    <li key={index} className="flex gap-3 items-start">
                                        <FaCheckCircle className="text-[#C23358] min-w-[20px] mt-1" size={18} />
                                        <span className="text-gray-700 text-base leading-relaxed">{line}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                {/* Recovery Section */}
                {recovery && (
                    <div>
                        <h2 className="text-3xl md:text-3xl font-bold text-[#C23358] mb-2">
                            {recovery.heading}
                        </h2>
                        {recovery.topDescription && (
                            <div
                                className="text-gray-700 text-base mb-3"
                                dangerouslySetInnerHTML={{
                                    __html: sanitize(recovery.topDescription)
                                }}
                            />
                        )}
                        {recovery.lines && recovery.lines.length > 0 && (
                            <ul className="space-y-4">
                                {recovery.lines.map((line, index) => (
                                    <li key={index} className="flex gap-3 items-start">
                                        <FaRegDotCircle className="text-[#C23358] min-w-[20px] mt-1" size={18} />
                                        <span className="text-gray-700 text-base leading-relaxed">{line}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Callout Box (from Recovery Description usually) */}
            {recovery && recovery.bottomDescription && (
                <div className="bg-[#FFF0F3] rounded-2xl p-6 md:p-4">
                    <div
                        className="text-gray-800 text-base font-medium leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(recovery.bottomDescription)
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default BenefitsAndRecovery;
