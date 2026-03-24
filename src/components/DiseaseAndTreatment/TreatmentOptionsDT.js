import React, { useState } from "react";
import sanitize from "@/utils/sanitize";
import { FaRegCheckCircle } from "react-icons/fa";

const TreatmentOptionsDT = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    if (!data || data.length === 0) return null;

    const content = data[0];

    // Some headings from the API are long (e.g., "Atrial Septal Defect Treatment Options: Medications, Procedures & Surgery").
    // Let's highlight the prefix if it contains "Treatment Options".
    const rawHeading = content.heading || "";
    let prefixText = rawHeading;
    let suffixText = "";
    const splitIndex = rawHeading.indexOf(":");
    if (splitIndex !== -1) {
        prefixText = rawHeading.slice(0, splitIndex);
        suffixText = rawHeading.slice(splitIndex); // includes colon
    }

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Outer container to match the white card with border & shadow */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 leading-snug">
                    <span className="text-[#C23358]">{prefixText}</span>
                    <span className="text-gray-900">{suffixText}</span>
                </h2>

                {/* Top Description */}
                {content.topDescription && (
                    <div
                        className="text-gray-700 text-center text-base md:text-lg mb-8 leading-relaxed max-w-5xl mx-auto"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(content.topDescription),
                        }}
                    />
                )}

                {/* Tabs */}
                {content.items && content.items.length > 0 && (
                    <>
                        <div className="flex flex-col md:flex-row rounded-lg border border-pink-200 overflow-hidden mb-8">
                            {content.items.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex-1 text-center py-3 px-4 font-semibold text-sm md:text-base border-b md:border-b-0 md:border-r border-pink-200 last:border-0 transition-colors ${activeTab === index
                                            ? "bg-[#C23358] text-white"
                                            : "bg-white text-[#C23358] hover:bg-pink-50"
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            ))}
                        </div>

                        {/* Active Tab Content (Cards Grid) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6">
                            {content.items[activeTab]?.subItems?.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="bg-[#FFF8E7] rounded-xl p-5 shadow-sm flex flex-col gap-2"
                                >
                                    <h3 className="text-base font-bold text-gray-900">
                                        {card.heading}
                                    </h3>
                                    {card.description && (
                                        <div className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed mt-1">
                                            <FaRegCheckCircle
                                                className="flex-shrink-0 mt-0.5 text-[#C23358]"
                                                size={15}
                                            />
                                            <p>{card.description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Bottom Description */}
                {content.bottomDescription && (
                    <div
                        className="text-gray-700 text-center text-sm md:text-base leading-relaxed max-w-4xl mx-auto [&_strong]:text-[#C23358] [&_a]:text-[#C23358] [&_a]:font-semibold [&_a]:underline mt-8"
                        dangerouslySetInnerHTML={{
                            __html: sanitize(content.bottomDescription),
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default TreatmentOptionsDT;
