import React from 'react';
import Image from 'next/image';

const WhyChooseSection = ({ headerData, features }) => {
    return (
        <section className="bg-[#FAF8F6] py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center">
                    {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span> {headerData.subtitle} <br /> {headerData.subtitle2}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-row gap-4">
                            <div className="w-36 h-36 rounded-2xl flex items-center justify-center p-2">
                                <Image
                                    src={`/assets/surgeries/live-transplant/${item.icon}`}
                                    alt={item.title}
                                    width={50}
                                    height={50}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                                <p className="text-[#666] leading-relaxed text-base">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
