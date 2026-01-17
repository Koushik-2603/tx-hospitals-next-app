import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const DonorSafetySection = ({ safetyData, gridData }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`bg-white ${isMobile ? 'py-8 px-4' : 'py-16 px-6 md:px-16'} flex flex-col lg:flex-row ${isMobile ? 'gap-6' : 'gap-12'} items-center`}>
            {/* Living Donor Safety Section (Left) */}
            <div className={`lg:w-1/2 ${isMobile ? 'space-y-4' : 'space-y-6'}`}>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold text-[#1a1a1a]`}>
                    {safetyData.title} <span className="text-[#B12C49]">{safetyData.highlightedPart}</span>
                </h2>
                <p className={`text-[#4a4a4a] ${isMobile ? 'text-base' : 'text-lg'} leading-relaxed`}>
                    {safetyData.description}
                </p>
                <div className={`${isMobile ? 'space-y-3 pt-3' : 'space-y-4 pt-4'}`}>
                    {safetyData.items.map((item, idx) => (
                        <div key={idx} className={`flex items-center ${isMobile ? 'gap-3 p-3' : 'gap-4 p-4'} bg-gray-50 rounded-xl border border-gray-100 border-l-4 border-l-[#B12C49]`}>
                            <div className={`flex-shrink-0 ${isMobile ? 'w-6 h-6' : 'w-8 h-8'} flex items-center justify-center`}>
                                <Image
                                    src="/assets/surgeries/live-transplant/Right Icon.webp"
                                    alt="Right Icon"
                                    width={isMobile ? 20 : 24}
                                    height={isMobile ? 20 : 24}
                                />
                            </div>
                            <span className={`text-[#1a1a1a] ${isMobile ? 'text-sm' : 'text-lg'} font-semibold`}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Icon Card (Right) */}
            <div className={`lg:w-1/2 bg-white rounded-3xl ${isMobile ? 'p-5' : 'p-8'} shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100`}>
                <div className={`grid grid-cols-2 ${isMobile ? 'gap-3' : 'gap-4'}`}>
                    {gridData.items.map((item, idx) => (
                        <div key={idx} className={`bg-[#FAF1F2] rounded-2xl ${isMobile ? 'p-4' : 'p-6'} flex flex-col items-center text-center ${isMobile ? 'gap-2' : 'gap-3'}`}>
                            <Image
                                src={`/assets/surgeries/live-transplant/${item.icon}`}
                                alt={item.title}
                                width={isMobile ? 40 : 60}
                                height={isMobile ? 40 : 60}
                                className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} object-contain`}
                            />
                            <p className={`text-[#1a1a1a] font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className={`${isMobile ? 'mt-4 p-3' : 'mt-6 p-4'} bg-[#FAF1F2] rounded-xl text-center`}>
                    <p className={`text-[#B12C49] font-bold ${isMobile ? 'text-base' : 'text-xl'} italic`}>
                        "{gridData.quote}"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonorSafetySection;
