import React from 'react';
import Image from 'next/image';

const AboutSection = ({ whatIsData, whoNeedsData }) => {
    return (
        <section className="max-w-7xl mx-auto py-8 px-16 flex flex-row gap-12 items-start">
            {/* What is a Liver Transplant Section */}
            <div className="w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-[#B12C49]">
                    {whatIsData.title}
                </h2>
                {whatIsData.paragraphs.map((para, index) => (
                    <p key={index} className="text-[#4a4a4a] text-lg leading-relaxed">
                        {para}
                    </p>
                ))}
            </div>

            {/* Who Needs a Liver Transplant Section */}
            <div className="w-1/2 bg-white rounded-2xl p-3 shadow-[0_20px_60px_rgba(177,44,73,0.2)] border border-[#B12C49]/10 relative">
                <h2 className="text-4xl font-bold text-[#B12C49] mb-6">
                    {whoNeedsData.title}
                </h2>
                <p className="text-[#1a1a1a] text-lg font-semibold mb-6">
                    {whoNeedsData.subtitle}
                </p>
                <ul className="space-y-4">
                    {whoNeedsData.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                            <div className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                <Image
                                    src={whoNeedsData.icon}
                                    alt="Right Icon"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            <span className="text-[#4a4a4a] text-lg leading-tight group-hover:text-black transition-colors duration-300">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;
