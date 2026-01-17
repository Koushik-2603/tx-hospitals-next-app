import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const EvaluationSection = ({ contentData, evaluationItems }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`bg-white ${isMobile ? 'py-8 px-4' : 'py-16 px-6 md:px-16'} flex flex-col md:flex-row gap-12 items-center`}>
            {/* Evaluation Description (Left) */}
            <div className={`md:w-[40%] text-left ${isMobile ? 'space-y-4' : 'space-y-8'}`}>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold text-[#1a1a1a] leading-tight`}>
                    {contentData.title} <span className="text-[#B12C49]">{contentData.highlightedPart}</span> {contentData.subtitle}
                </h2>
                {contentData.paragraphs.map((para, index) => (
                    <p key={index} className={`${isMobile ? 'text-base' : 'text-lg'} text-[#4a4a4a] leading-relaxed`}>
                        {para}
                    </p>
                ))}
            </div>

            {/* Evaluation Cards (Right) */}
            <div className={`md:w-[60%] relative`}>
                {isMobile && (
                    <div className="absolute top-4 bottom-0 left-[32px] w-[2px] bg-gray-300 -translate-x-1/2 z-0" />
                )}

                <div className={isMobile ? 'flex flex-col gap-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}>
                    {evaluationItems.map((item, index) => (
                        isMobile ? (
                            <div key={index} className="flex flex-row items-start text-left relative z-10">
                                <div className="w-16 h-16 shrink-0 bg-pink-50 rounded-full flex items-center justify-center border border-[#EBC5CB] bg-white z-10">
                                    <Image
                                        src={`/assets/surgeries/live-transplant/${item.icon}`}
                                        alt={item.title}
                                        width={28}
                                        height={28}
                                        className="w-8 h-8 object-contain"
                                    />
                                </div>
                                <div className="ml-6 flex-1 pt-1">
                                    <h3 className="text-[#1a1a1a] text-lg font-bold mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#4a4a4a] leading-snug">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ) : (
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
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EvaluationSection;
