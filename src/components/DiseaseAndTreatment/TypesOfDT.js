import React from "react";
import DOMPurify from "dompurify";

const TypesOfDT = ({ data, openModal }) => {
    if (!data || data.length === 0) return null;

    const content = data[0];

    // Split heading: "Types of" stays black, rest is pink
    const rawHeading = content.heading || "";
    const prefixMatch = rawHeading.match(/^(Types\s+of)\s+(.+)$/i);
    const prefixText = prefixMatch ? prefixMatch[1] : rawHeading;
    const conditionText = prefixMatch ? prefixMatch[2] : "";

    return (
        <div className="max-w-7xl mx-auto md:px-12 px-4 py-8 font-inter">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 leading-snug">
                {prefixMatch ? (
                    <>
                        {prefixText}{" "}
                        <span className="text-[#C23358]">{conditionText}</span>
                    </>
                ) : (
                    rawHeading
                )}
            </h2>

            {/* Top Description */}
            {content.topDescription && (
                <div
                    className="text-gray-700 text-center text-base md:text-lg mb-8 leading-relaxed max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.topDescription),
                    }}
                />
            )}

            {/* Items List */}
            {content.items && content.items.length > 0 && (
                <div className="flex flex-col gap-4 mb-8">
                    {content.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#FFF0F3] rounded-xl px-6 py-5 border border-pink-100"
                        >
                            <h3 className="text-base font-bold text-gray-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* Bottom Description */}
            {content.bottomDescription && (
                <div
                    className="text-gray-700 text-center text-base leading-relaxed max-w-4xl mx-auto [&_strong]:text-[#C23358] [&_a]:text-[#C23358] [&_a]:font-semibold [&_a]:underline"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content.bottomDescription),
                    }}
                />
            )}
        </div>
    );
};

export default TypesOfDT;
