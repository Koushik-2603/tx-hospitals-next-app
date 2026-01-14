import React from 'react';
import Image from 'next/image';

const EvaluationSection = ({ contentData, evaluationItems }) => {
    return (
        <section className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row gap-12 items-center">
            {/* Evaluation Description (Left) */}
            <div className="md:w-[40%] space-y-8 text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
                    {contentData.title} <span className="text-[#B12C49]">{contentData.highlightedPart}</span> {contentData.subtitle}
                </h2>
                {contentData.paragraphs.map((para, index) => (
                    <p key={index} className="text-lg text-[#4a4a4a] leading-relaxed">
                        {para}
                    </p>
                ))}
            </div>

            {/* Evaluation Cards (Right) */}
            <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {evaluationItems.map((item, index) => (
                    <div key={index} className="bg-[#FAF1F2] rounded-2xl p-6 flex flex-col items-start text-left hover:shadow-md transition-all duration-300 h-full">
                        <div className="bg-white rounded-xl p-3 mb-4 shadow-sm">
                            <Image
                                src={`/assets/surgeries/live-transplant/${item.icon}`}
                                alt={item.title}
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-[#1a1a1a] text-xl font-bold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-[#666] text-base leading-snug">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EvaluationSection;
