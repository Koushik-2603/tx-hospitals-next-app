import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const InfrastructureSection = ({
    headerData,
    infrastructureData,
    postCareData
}) => {
    const isMobile = useIsMobile();

    return (
        <section className={`bg-gray-50 ${isMobile ? 'py-8 px-4' : 'py-16 px-6 md:px-16'}`}>
            <div className={`max-w-7xl mx-auto ${isMobile ? 'space-y-6' : 'space-y-12'}`}>
                <div className={`text-center ${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                    <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold text-[#1a1a1a]`}>
                        {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span>
                    </h2>
                    <p className={`${isMobile ? 'text-base' : 'text-lg'} text-[#4a4a4a] max-w-5xl mx-auto font-medium`} dangerouslySetInnerHTML={{ __html: headerData.description }}>
                    </p>
                </div>

                <div className={`flex flex-col lg:flex-row ${isMobile ? 'gap-6' : 'gap-8'} items-stretch`}>
                    {/* Our Infrastructure - White Card */}
                    <div className={`lg:w-1/2 bg-white rounded-3xl ${isMobile ? 'p-5' : 'p-8 md:p-12'} shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col`}>
                        <h3 className={`${isMobile ? 'text-xl mb-5 pb-3' : 'text-2xl mb-8 pb-4'} font-bold text-[#1a1a1a] border-b border-gray-100`}>
                            {infrastructureData.title}
                        </h3>
                        <div className={`${isMobile ? 'space-y-4' : 'space-y-6'} flex-grow`}>
                            {infrastructureData.items.map((item, idx) => (
                                <div key={idx} className={`flex items-center ${isMobile ? 'gap-3 p-3' : 'gap-6 p-4'} bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300`}>
                                    <div className={`${isMobile ? 'w-12 h-12 p-2' : 'w-16 h-16 p-3'} bg-[#B12C49] rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <Image
                                            src={`/assets/surgeries/live-transplant/${item.icon}`}
                                            alt=""
                                            width={isMobile ? 32 : 40}
                                            height={isMobile ? 32 : 40}
                                            className="w-full h-full object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <p className={`text-[#4a4a4a] ${isMobile ? 'text-sm' : 'text-lg'} font-semibold leading-tight`}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Post-Transplant Care - Maroon Card */}
                    <div className={`lg:w-1/2 bg-[#B12C49] rounded-3xl ${isMobile ? 'p-5' : 'p-8 md:p-12'} shadow-[0_20px_60px_rgba(177,44,73,0.15)] flex flex-col text-white`}>
                        <h3 className={`${isMobile ? 'text-xl mb-3' : 'text-2xl mb-4'} font-bold`}>
                            {postCareData.title}
                        </h3>
                        <p className={`text-white/90 ${isMobile ? 'text-base mb-5' : 'text-lg mb-8'}`} dangerouslySetInnerHTML={{ __html: postCareData.description }}>
                        </p>
                        <div className={`${isMobile ? 'space-y-3' : 'space-y-4'} flex-grow`}>
                            {postCareData.items.map((item, idx) => (
                                <div key={idx} className={`flex items-center ${isMobile ? 'gap-3 p-2.5' : 'gap-5 p-3'} bg-white/10 rounded-2xl border border-white/5 hover:bg-white/20 transition-all cursor-default`}>
                                    <div className={`${isMobile ? 'w-10 h-10 p-2' : 'w-12 h-12 p-2.5'} bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <Image
                                            src={`/assets/surgeries/live-transplant/${item.icon}`}
                                            alt=""
                                            width={isMobile ? 24 : 30}
                                            height={isMobile ? 24 : 30}
                                            className="w-full h-full object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <p className={`${isMobile ? 'text-sm' : 'text-base md:text-lg'} font-medium leading-tight`}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className={`text-white/80 ${isMobile ? 'text-sm mt-5 pt-3' : 'text-base mt-8 pt-4'} border-t border-white/10`} dangerouslySetInnerHTML={{ __html: postCareData.footer }}>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfrastructureSection;
