import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const WhyChooseSection = ({ headerData, features }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`bg-[#FAF8F6] ${isMobile ? 'py-8 px-4' : 'py-16 px-6 md:px-16'}`}>
            <div className={`max-w-7xl mx-auto ${isMobile ? 'space-y-6' : 'space-y-8'}`}>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold text-[#1a1a1a] text-center`}>
                    {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span> {headerData.subtitle} <br /> {headerData.subtitle2}
                </h2>
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isMobile ? 'gap-4' : 'gap-8'}`}>
                    {features.map((item, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl ${isMobile ? 'p-3' : 'p-2'} shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-row ${isMobile ? 'gap-3' : 'gap-4'}`}>
                            <div className={`${isMobile ? 'w-24 h-24' : 'w-36 h-36'} rounded-2xl flex items-center justify-center p-2`}>
                                <Image
                                    src={`/assets/surgeries/live-transplant/${item.icon}`}
                                    alt={item.title}
                                    width={isMobile ? 40 : 50}
                                    height={isMobile ? 40 : 50}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className={`${isMobile ? 'text-base' : 'text-xl'} font-bold text-[#1a1a1a] mb-1`}>{item.title}</h3>
                                <p className={`text-[#666] leading-relaxed ${isMobile ? 'text-sm' : 'text-base'}`}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
