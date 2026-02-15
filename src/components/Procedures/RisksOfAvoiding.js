import React from "react";
import DOMPurify from "dompurify";

const RisksOfAvoiding = ({ data }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-4 font-inter">
            {/* Heading */}
            <h2
                className="text-3xl md:text-4xl font-bold text-black mb-3"
                dangerouslySetInnerHTML={{
                    __html: content.heading?.replace("Avoiding", "<span class='text-pink-700'>Avoiding</span>")
                }}
            />

            {/* Top Description */}
            {content.topDescription && (
                <div
                    className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.topDescription)
                    }}
                />
            )}

            {/* Risks Grid */}
            {content.risks && content.risks.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {content.risks.map((risk, index) => (
                        <div key={index} className="border border-pink-300 rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{risk.name}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{risk.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Description */}
            {content.bottomDescription && (
                <div
                    className="text-gray-700 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.bottomDescription)
                    }}
                />
            )}
        </div>
    );
};

export default RisksOfAvoiding;
