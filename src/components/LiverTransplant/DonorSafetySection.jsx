import React from 'react';
import Image from 'next/image';

const DonorSafetySection = ({ safetyData, gridData }) => {
    return (
        <section className="bg-white py-16 px-6 md:px-16 flex flex-col lg:flex-row gap-12 items-center">
            {/* Living Donor Safety Section (Left) */}
            <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-[#1a1a1a]">
                    {safetyData.title} <span className="text-[#B12C49]">{safetyData.highlightedPart}</span>
                </h2>
                <p className="text-[#4a4a4a] text-lg leading-relaxed">
                    {safetyData.description}
                </p>
                <div className="space-y-4 pt-4">
                    {safetyData.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 border-l-4 border-l-[#B12C49]">
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                <Image
                                    src="/assets/surgeries/live-transplant/Right Icon.webp"
                                    alt="Right Icon"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <span className="text-[#1a1a1a] text-lg font-semibold">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Icon Card (Right) */}
            <div className="lg:w-1/2 bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                    {gridData.items.map((item, idx) => (
                        <div key={idx} className="bg-[#FAF1F2] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
                            <Image
                                src={`/assets/surgeries/live-transplant/${item.icon}`}
                                alt={item.title}
                                width={60}
                                height={60}
                                className="w-12 h-12 object-contain"
                            />
                            <p className="text-[#1a1a1a] font-bold text-base">{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 bg-[#FAF1F2] rounded-xl p-4 text-center">
                    <p className="text-[#B12C49] font-bold text-xl italic">
                        "{gridData.quote}"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DonorSafetySection;
