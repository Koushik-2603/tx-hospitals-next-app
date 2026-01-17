import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const AboutSection = ({ whatIsData, whoNeedsData }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`max-w-7xl mx-auto ${isMobile ? 'px-4 py-2' : 'px-16 py-8'} flex ${isMobile ? 'flex-col' : 'flex-row'} gap-8 items-start`}>
            {/* What is a Liver Transplant Section */}
            <div className={`${isMobile ? 'w-full text-center' : 'w-1/2'} space-y-4`}>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#B12C49]`}>
                    {whatIsData.title}
                </h2>
                {whatIsData.paragraphs.map((para, index) => (
                    <p key={index} className={`text-[#4a4a4a] ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed`}>
                        {para}
                    </p>
                ))}
            </div>

            {/* Who Needs a Liver Transplant Section */}
            <div className={`${isMobile ? 'w-full' : 'w-1/2'} bg-white rounded-2xl ${isMobile ? 'p-4' : 'p-3'} shadow-[0_20px_60px_rgba(177,44,73,0.2)] border border-[#B12C49]/10 relative`}>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#B12C49] mb-4`}>
                    {whoNeedsData.title}
                </h2>
                <p className={`text-[#1a1a1a] ${isMobile ? 'text-base' : 'text-lg'} font-semibold mb-4`}>
                    {whoNeedsData.subtitle}
                </p>
                <ul className="space-y-3">
                    {whoNeedsData.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 group">
                            <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                <Image
                                    src={whoNeedsData.icon}
                                    alt="Right Icon"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5 object-contain"
                                />
                            </div>
                            <span className={`text-[#4a4a4a] ${isMobile ? 'text-sm' : 'text-lg'} leading-tight group-hover:text-black transition-colors duration-300`}>
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
