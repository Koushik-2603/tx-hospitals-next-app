import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const KachigudaNewFAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "Which is the best hospital in Kachiguda, Hyderabad?",
            answer: "TX Hospitals Kachiguda is a trusted multispeciality hospital in Kachiguda offering expert doctors, emergency care, diagnostics, ICU support, surgeries, and complete family healthcare."
        },
        {
            question: "Does TX Hospitals Kachiguda provide emergency care?",
            answer: "Yes, TX Hospitals Kachiguda provides 24/7 emergency care for urgent medical needs such as chest pain, stroke symptoms, breathing difficulty, injuries, severe pain, and sudden illness."
        },
        {
            question: "What specialities are available at TX Hospitals Kachiguda?",
            answer: "The hospital offers care across cardiology, orthopedics, gastroenterology, nephrology, neurosciences, pediatrics, pulmonology, general medicine, urology, ENT, dermatology, and surgery."
        },
        {
            question: "Is TX Hospitals Kachiguda near Kachiguda Railway Station?",
            answer: "Yes, TX Hospitals Kachiguda is located on Kachiguda Station Road and is easily accessible from Kachiguda Railway Station and nearby areas."
        },
        {
            question: "Can I consult specialist doctors at TX Hospitals Kachiguda?",
            answer: "Yes, patients can consult experienced specialists across multiple departments for diagnosis, treatment, second opinions, and follow-up care."
        },
        {
            question: "Does TX Hospitals Kachiguda offer diagnostic services?",
            answer: "Yes, the hospital provides diagnostic support including lab tests, imaging, and other investigations required for accurate treatment planning."
        },
        {
            question: "How can I book an appointment at TX Hospitals Kachiguda?",
            answer: "You can book an appointment by calling the hospital helpline 9144514459, filling the appointment form on the website or contacting TX Hospitals Kachiguda directly."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="py-16" style={{ background: 'rgb(243, 243, 245)' }}>
            <FAQSchema faqs={faqs} />
            <div className="max-w-[1170px] mx-auto px-6 lg:pr-11">
                <div className="text-center mb-10">
                    <h2 className="mb-3" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Frequently Asked <span style={{ color: 'rgb(189, 56, 92)' }}>Questions</span>
                    </h2>
                </div>

                <div className="max-w-[820px] mx-auto flex flex-col gap-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="rounded-lg overflow-hidden transition-all duration-300" style={{ border: '0.5px solid rgb(183, 183, 183)' }}>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                                    style={{ background: isOpen ? 'rgb(189, 56, 92)' : 'rgb(255, 255, 255)' }}
                                >
                                    <span style={{ fontSize: '15px', fontWeight: 500, color: isOpen ? 'rgb(255, 255, 255)' : 'rgb(3, 2, 19)', lineHeight: 1.5 }}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        style={{ color: isOpen ? '#fff' : '#BD385C' }}
                                        size={18}
                                        strokeWidth={2}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-6 py-4" style={{ background: 'rgb(254, 236, 236)' }}>
                                        <p style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7, margin: 0 }}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default KachigudaNewFAQ;
