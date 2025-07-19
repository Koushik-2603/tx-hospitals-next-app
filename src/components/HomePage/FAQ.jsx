'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FAQSchema from '@/utils/FAQSchema';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Client-side only
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Where can I access the current packages offered by TX Hospitals?',
            answer: 'All our health offers and health packages are advertised on our website',
        },
        {
            question: 'How do I book an appointment for the package?',
            answer: 'Please call on our Help Line number 9089489089 to book a package',
        },
        {
            question: 'What healthcare packages does TXH offer?',
            answer: 'We offer various types of Health packages: Comprehensive Health Packages, Cardiac, Nephrological, Gastroenterological, Neurological, Urology Specific, Executive Health Check-Ups, Age Specific Packages, Gender Specific Packages',
        },
        {
            question: 'How can I access the tariff list for admission and procedures of TXH?',
            answer: 'You can call us and speak to our financial counseling team for assistance: 040 66529999 (Banjara Hills), 040 – 48108108 (Kachiguda), 040 – 43108108 (Uppal)',
        },
        {
            question: 'Do TX Hospitals offer health care education?',
            answer: 'TX Hospitals intends to serve society in more ways than one. Apart from offering healthcare services, we also have a healthcare education channel that provides tips on various diseases and conditions',
        },
    ];

    return (
        <>
            {!isMobile && (
                <div id='faq' className="bg-gray-100 font-spectral container mx-auto mt-8 py-8 px-4">
                    <h2 className="text-3xl text-red-700 font-bold text-center mb-6">FAQs</h2>
                    <FAQSchema faqs={faqs} />
                    <div className="flex flex-col md:flex-row items-center md:items-start h-auto">
                        {/* Left Panel (Image) */}
                        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 mb-6 md:mb-0">
                            <Image
                                src="/assets/LandingPageImages/FAQ-Images.webp"
                                alt="FAQ Illustration"
                                width={500}
                                height={isMobile ? 160 : 320}
                                className="w-full max-w-sm md:max-w-full object-contain"
                            />
                        </div>

                        {/* Right Panel (FAQs) */}
                        <div className="md:w-1/2 w-full p-6 overflow-y-auto bg-white rounded-lg shadow-md">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-300 py-4 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                    onMouseEnter={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center text-lg sm:text-base font-semibold">
                                        <span className="w-6 text-xl text-center mr-2">
                                            {activeIndex === index ? '-' : '+'}
                                        </span>
                                        {faq.question}
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 mt-2' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {isMobile && (
                <div id='faq' className="bg-gray-100 font-spectral container mx-auto py-8 px-4">
                    <h2 className="text-2xl text-red-700 font-bold text-center mb-6">FAQs</h2>
                    <FAQSchema faqs={faqs} />
                    <div className="flex flex-col md:flex-row items-center md:items-start h-auto">
                        {/* Left Panel (Image) */}
                        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 mb-6 md:mb-0">
                            <Image
                                src="/assets/LandingPageImages/FAQ-Images.webp"
                                alt="FAQ Illustration"
                                width={500} 
                                height={isMobile ? 160 : 320} 
                                className="w-full max-w-sm md:max-w-full object-contain"
                            />
                        </div>

                        {/* Right Panel (FAQs) */}
                        <div className="md:w-1/2 w-full p-6 overflow-y-auto bg-white rounded-lg shadow-md">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-300 py-4 cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                    onMouseEnter={() => toggleFAQ(index)}
                                >
                                    <div className="flex items-center text-sm sm:text-base font-semibold">
                                        <span className="w-6 text-xl text-center mr-2">
                                            {activeIndex === index ? '-' : '+'}
                                        </span>
                                        {faq.question}
                                    </div>
                                    <div
                                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? 'max-h-40 mt-2' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="text-gray-700 text-xs">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FAQ;
