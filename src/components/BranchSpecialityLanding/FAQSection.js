import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const FAQSection = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    if (!data || !Array.isArray(data) || data.length === 0) return null;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-10 md:py-12" style={{ background: '#f8f9fa' }}>
            <FAQSchema faqs={data} />
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-[26px] md:text-[34px] font-bold text-[#1e1e1e] leading-snug">
                        Frequently Asked <span style={{ color: 'rgb(189, 56, 92)' }}>Questions</span>
                    </h2>
                </div>

                <div className="max-w-[850px] mx-auto flex flex-col gap-3.5">
                    {data.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden transition-all duration-300"
                                style={{
                                    border: isOpen ? '1px solid rgb(189, 56, 92)' : '1px solid rgb(225, 225, 225)',
                                    boxShadow: isOpen ? '0 4px 15px rgba(189, 56, 92, 0.1)' : '0 2px 8px rgba(0,0,0,0.03)'
                                }}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-6 py-4 md:py-5 text-left transition-colors"
                                    style={{ background: isOpen ? 'rgb(189, 56, 92)' : 'rgb(255, 255, 255)' }}
                                    aria-expanded={isOpen}
                                >
                                    <span style={{ fontSize: '15px', md: '16px', fontWeight: 500, color: isOpen ? 'rgb(255, 255, 255)' : 'rgb(20, 20, 20)', lineHeight: 1.5, paddingRight: '1rem' }}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        style={{ color: isOpen ? '#fff' : '#BD385C' }}
                                        size={20}
                                        strokeWidth={2.5}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-6 py-5 faq-answer" style={{ background: '#fdf7f8' }}>
                                        <div
                                            className="text-[#3c3c3c] text-[15px] leading-relaxed font-normal"
                                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .faq-answer p { margin-bottom: 0.5em; }
                .faq-answer p:last-child { margin-bottom: 0; }
            `}} />
        </section>
    );
};

export default FAQSection;
