import React from "react";
import sanitize from "@/utils/sanitize";

const WhenToSeekMedicalHelpDT = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];
    const rawHeading = content.heading || "";

    // Regex to accurately match and colorize the heading based on the design
    // E.g. "When to Seek Medical Help for Atrial Septal Defect (ASD)"
    const headingMatch = rawHeading.match(/^(When\s+to)\s+(Seek\s+Medical\s+Help)\s+(for)\s+(.+)$/i);

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">

            {/* Split Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 leading-snug">
                {headingMatch ? (
                    <>
                        {headingMatch[1]}{" "}
                        <span className="text-[#C23358]">{headingMatch[2]}</span>{" "}
                        {headingMatch[3]}{" "}
                        <span className="text-[#C23358]">{headingMatch[4]}</span>
                    </>
                ) : (
                    rawHeading
                )}
            </h2>

            {/* Description */}
            {content.description && (
                <div
                    className="text-gray-700 text-center text-base md:text-lg mb-10 leading-relaxed max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: sanitize(content.description),
                    }}
                />
            )}

            {/* 4-column Image Cards Grid */}
            {content.items && content.items.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {content.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Image Placeholder or Actual Image */}
                            {item.image ? (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WhenToSeekMedicalHelpDT;
