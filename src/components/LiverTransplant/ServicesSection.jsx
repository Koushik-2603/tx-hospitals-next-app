import React from 'react';
import Image from 'next/image';

const ServicesSection = ({ headerData, servicesData }) => {
    return (
        <section className="bg-[#FAF8F6] py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                        {headerData.title} <span className="text-[#B12C49]">{headerData.highlightedPart}</span> {headerData.subtitle}
                    </h2>
                    <p className="text-lg text-[#4a4a4a] mt-4">
                        {headerData.description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="w-full md:w-[calc(33.333%-1.34rem)] bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-[#EBC5CB] rounded-xl p-4 mb-6">
                                <h3 className="text-[#B12C49] text-xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: service.title }}></h3>
                            </div>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
