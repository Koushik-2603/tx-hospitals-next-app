import React from 'react';
import Image from 'next/image';

const EvaluationTimeline = ({ headerData, steps }) => {
    return (
        <section className="bg-white py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                {/* Header */}
                <div className="mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a]">
                        {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span> {headerData.subtitle}
                    </h2>
                    {headerData.description && (
                        <div className="text-lg text-[#4a4a4a] leading-relaxed max-w-4xl mx-auto space-y-1">
                            {Array.isArray(headerData.description) ?
                                headerData.description.map((line, i) => <p key={i}>{line}</p>)
                                : <p>{headerData.description}</p>
                            }
                        </div>
                    )}
                </div>

                {/* Timeline Implementation */}
                <div className="relative">
                    <div className="hidden md:block absolute top-[110px] left-0 right-0 h-[3px] bg-gray-300 w-[90%] mx-auto z-0" />

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {steps.map((item, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                {/* Icon Circle */}
                                <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm border border-[#EBC5CB]">
                                    <Image
                                        src={`/assets/surgeries/kidney-transplant/${item.icon}`}
                                        alt={item.title}
                                        width={32}
                                        height={32}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                <div className="bg-white px-2 py-1 z-10 mb-2">
                                    <span className="text-xs font-bold text-pink-700 uppercase tracking-wider">
                                        Step {index + 1}
                                    </span>
                                </div>

                                {/* Bold Title */}
                                <h3 className="text-[#1a1a1a] font-bold text-lg leading-tight mb-2 min-h-[3rem] flex items-center justify-center">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[#4a4a4a] leading-snug max-w-[150px]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <div className="mt-8 text-lg text-[#4a4a4a] font-medium max-w-5xl mx-auto">
                    {headerData.footer}
                </div>
            </div>
        </section>
    );
};

export default EvaluationTimeline;
