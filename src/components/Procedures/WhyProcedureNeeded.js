import React from "react";
import DOMPurify from "dompurify";
import { FaCheckCircle, FaCheck } from "react-icons/fa";

const WhyProcedureNeeded = ({ whyData, conditionsData, openModal }) => {
    // We expect arrays, so take the first item if available
    const whyContent = whyData && whyData.length > 0 ? whyData[0] : null;
    const conditionsContent = conditionsData && conditionsData.length > 0 ? conditionsData[0] : null;

    if (!whyContent && !conditionsContent) return null;

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-4 font-inter">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                {/* LEFT COLUMN: Why Procedure is Needed */}
                <div className="w-full lg:w-1/2">
                    {whyContent && (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
                                {whyContent.heading?.replace("Why ", "Why the ")?.replace(" is Recommended", " is Needed?") || "Why the Procedure is Needed?"}
                            </h2>

                            {whyContent.topDescription && (
                                <div
                                    className="text-gray-700 text-base md:text-lg mb-3 leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(whyContent.topDescription)
                                    }}
                                />
                            )}

                            {whyContent.lines && whyContent.lines.length > 0 && (
                                <ul className="space-y-2 mb-3">
                                    {whyContent.lines.map((line, index) => (
                                        <li key={index} className="flex gap-3 items-start">
                                            <FaCheckCircle className="text-[#C23358] min-w-[20px] mt-1" size={20} />
                                            <span className="text-gray-700 text-base md:text-lg">{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Pink Box with Bottom Description and Button */}
                            <div className="bg-pink-50 rounded-2xl p-6 md:p-4">
                                {whyContent.bottomDescription && (
                                    <div
                                        className="text-gray-800 text-base mb-6 leading-relaxed font-medium"
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(whyContent.bottomDescription)
                                        }}
                                    />
                                )}

                                <button
                                    onClick={openModal}
                                    className="bg-[#C23358] hover:bg-pink-800 text-white font-bold py-3 px-8 rounded-lg shadow-md transition transform active:scale-95"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* RIGHT COLUMN: Conditions Treated */}
                <div className="w-full lg:w-1/2">
                    {conditionsContent && (
                        <div className="bg-[#FFF9E5] rounded-3xl p-8 md:p-10 h-full">
                            <h2 className="text-3xl font-bold text-[#C23358] mb-6">
                                {conditionsContent.heading || "Conditions Treated"}
                            </h2>

                            {conditionsContent.topDescription && (
                                <div
                                    className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(conditionsContent.topDescription)
                                    }}
                                />
                            )}

                            {conditionsContent.lines && conditionsContent.lines.length > 0 && (
                                <ul className="space-y-4 mb-6">
                                    {conditionsContent.lines.map((line, index) => (
                                        <li key={index} className="flex gap-3 items-start">
                                            <FaCheck className="text-[#C23358] min-w-[16px] mt-1.5" size={16} />
                                            <span className="text-gray-800 text-base font-medium">{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {conditionsContent.bottomDescription && (
                                <div
                                    className="text-gray-700 text-base leading-relaxed mt-6"
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(conditionsContent.bottomDescription)
                                    }}
                                />
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default WhyProcedureNeeded;
