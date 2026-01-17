import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const EvaluationTimeline = ({ headerData, steps }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`bg-white ${isMobile ? 'py-8 px-4' : 'py-16 px-4 md:px-8'} overflow-hidden`}>
            <div className="max-w-6xl mx-auto text-center">
                {/* Header */}
                <div className={`${isMobile ? 'mb-8 space-y-3' : 'mb-16 space-y-4'}`}>
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'} font-bold text-[#1a1a1a]`}>
                        {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span> {headerData.subtitle}
                    </h2>
                    {headerData.description && (
                        <div className={`${isMobile ? 'text-base' : 'text-lg'} text-[#4a4a4a] leading-relaxed max-w-4xl mx-auto space-y-1`}>
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
                    {isMobile && (
                        <div className="absolute top-8 bottom-0 left-[32px] w-[2px] bg-gray-300 -translate-x-1/2 z-0" />
                    )}

                    <div className={`relative z-10 grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'}`}>
                        {steps.map((item, index) => (
                            <div key={index} className={`${isMobile ? 'flex flex-row items-start text-left' : 'flex flex-col items-center text-center'} group`}>
                                {/* Icon Circle */}
                                <div className={`${isMobile ? 'w-16 h-16 shrink-0 z-10' : 'w-20 h-20 mb-4'} bg-pink-50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm border border-[#EBC5CB] bg-white`}>
                                    <Image
                                        src={`/assets/surgeries/kidney-transplant/${item.icon}`}
                                        alt={item.title}
                                        width={isMobile ? 28 : 32}
                                        height={isMobile ? 28 : 32}
                                        className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} object-contain`}
                                    />
                                </div>

                                <div className={`${isMobile ? 'ml-6 flex-1 pt-1' : 'flex flex-col items-center'}`}>
                                    <div className={`bg-white px-2 py-1 z-10 mb-2 inline-block ${isMobile ? '' : 'mx-auto'}`}>
                                        <span className={`${isMobile ? 'text-[10px]' : 'text-xs'} font-bold text-pink-700 uppercase tracking-wider`}>
                                            Step {index + 1}
                                        </span>
                                    </div>

                                    {/* Bold Title */}
                                    <h3 className={`text-[#1a1a1a] font-bold ${isMobile ? 'text-lg mb-1' : 'text-lg leading-tight mb-2 min-h-[3rem]'} ${isMobile ? '' : 'flex items-center justify-center'}`}>
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`${isMobile ? 'text-sm' : 'text-sm'} text-[#4a4a4a] leading-snug ${isMobile ? '' : 'max-w-[150px]'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <div className={`${isMobile ? 'mt-6 text-base' : 'mt-8 text-lg'} text-[#4a4a4a] font-medium max-w-5xl mx-auto`}>
                    {headerData.footer}
                </div>
            </div>
        </section>
    );
};

export default EvaluationTimeline;
