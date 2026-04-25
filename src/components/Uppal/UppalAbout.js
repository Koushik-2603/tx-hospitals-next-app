import React from 'react';
import Image from 'next/image';

const UppalAbout = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-10 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                        src="/assets/Screenshot 2026-04-25 161008.png"
                        alt="TX Hospitals Uppal Operation Theatre"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About <span className="text-pink-700">TX Hospitals, Uppal</span>
                    </h2>
                    
                    {/* Pink Underline Accent */}
                    <div className="w-16 h-1 bg-pink-700 mb-8 rounded-full"></div>

                    <div className="space-y-6 text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                        <p>
                            TX Hospitals Uppal is a fully equipped multi-specialty hospital serving the communities of Uppal, Nagole, Boduppal, Kothapet, Habsiguda, Ramanthapur and surrounding areas of Hyderabad. Our goal is simple: bring world-class medical care at affordable costs.
                        </p>
                        
                        <p>
                            With 50+ doctors, 100+ beds, advanced operation theatres, a modern ICU, and a 24/7 emergency department, TX Hospitals Uppal is designed to handle everything, from a routine fever check to a complex surgery, without you having to travel across the city.
                        </p>

                        <p className="text-gray-900">
                            We believe quality healthcare should be <span className="font-bold">accessible, affordable, and compassionate</span> for every family in Uppal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UppalAbout;
