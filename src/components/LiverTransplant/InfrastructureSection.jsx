import React from 'react';
import Image from 'next/image';

const InfrastructureSection = ({
    headerData,
    infrastructureData,
    postCareData
}) => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                        {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span>
                    </h2>
                    <p className="text-lg text-[#4a4a4a] max-w-5xl mx-auto font-medium" dangerouslySetInnerHTML={{ __html: headerData.description }}>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    {/* Our Infrastructure - White Card */}
                    <div className="lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 pb-4 border-b border-gray-100">
                            {infrastructureData.title}
                        </h3>
                        <div className="space-y-6 flex-grow">
                            {infrastructureData.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 bg-gray-50 rounded-2xl p-4 hover:bg-white hover:shadow-md transition-all duration-300">
                                    <div className="w-16 h-16 bg-[#B12C49] rounded-xl flex items-center justify-center flex-shrink-0 p-3">
                                        <Image
                                            src={`/assets/surgeries/live-transplant/${item.icon}`}
                                            alt="Icon"
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <p className="text-[#4a4a4a] text-lg font-semibold leading-tight">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Post-Transplant Care - Maroon Card */}
                    <div className="lg:w-1/2 bg-[#B12C49] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(177,44,73,0.15)] flex flex-col text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            {postCareData.title}
                        </h3>
                        <p className="text-white/90 text-lg mb-8" dangerouslySetInnerHTML={{ __html: postCareData.description }}>
                        </p>
                        <div className="space-y-4 flex-grow">
                            {postCareData.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-5 bg-white/10 rounded-2xl p-3 border border-white/5 hover:bg-white/20 transition-all cursor-default">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 p-2.5">
                                        <Image
                                            src={`/assets/surgeries/live-transplant/${item.icon}`}
                                            alt="Icon"
                                            width={30}
                                            height={30}
                                            className="w-full h-full object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <p className="text-base md:text-lg font-medium leading-tight">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-white/80 text-base mt-8 pt-4 border-t border-white/10" dangerouslySetInnerHTML={{ __html: postCareData.footer }}>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfrastructureSection;
