import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const BanjaraHillsNewFAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "Can I consult a specialist directly?",
            answer: "Yes. Patients can directly consult specialist doctors based on their health concern."
        },
        {
            question: "Does TX Hospitals, Banjara Hills have emergency services?",
            answer: "Yes, TX Hospitals, Banjara Hills provides 24/7 emergency and trauma care services with a dedicated team of experts ready to handle all medical emergencies."
        },
        {
            question: "Are health checkup packages available?",
            answer: "Yes, we offer comprehensive master health checkup packages tailored to different age groups and medical needs for preventive care."
        },
        {
            question: "Do I need to carry previous medical reports?",
            answer: "It is highly recommended to bring your previous medical reports, prescriptions, and imaging results to help the doctor better understand your medical history."
        },
        {
            question: "Does TX Hospitals offer advanced surgical treatments?",
            answer: "Yes, TX Hospitals, Banjara Hills is equipped with state-of-the-art operation theaters and offers advanced surgical treatments, including robotic and minimally invasive surgeries."
        },
        {
            question: "Are health insurance and cashless facilities available at TX Hospitals?",
            answer: "Yes, we accept major health insurance providers and offer cashless hospitalization facilities. Please check with our insurance desk for the complete list of empanelled providers."
        },
        {
            question: "Can I book appointments for different departments?",
            answer: "Yes, you can easily book appointments across multiple departments either by calling our helpline, using our online booking form, or directly at the hospital reception."
        },
        {
            question: "How do I know which doctor to consult?",
            answer: "Our front desk and online support team can guide you to the appropriate specialist based on your symptoms and medical concerns. Alternatively, you can consult a General Physician who will refer you to the right specialist."
        },
        {
            question: "How can I book an appointment at TX Hospitals, Banjara Hills?",
            answer: "You can book an appointment online through our website, by calling our direct helpline 91445 14459, or by visiting the hospital reception in person."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-10 md:py-12" style={{ background: 'rgb(243, 243, 245)' }}>
            <FAQSchema faqs={faqs} />
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold font-poppins" style={{ color: 'rgb(3, 2, 19)' }}>
                        Frequently Asked <span style={{ color: 'rgb(189, 56, 92)' }}>Questions</span>
                    </h2>
                </div>
                
                <div className="max-w-[820px] mx-auto flex flex-col gap-3">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="rounded-lg overflow-hidden transition-all duration-300 bg-white" style={{ border: '0.5px solid rgb(215, 215, 215)', boxShadow: 'rgba(0, 0, 0, 0.03) 0px 4px 12px' }}>
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
                                        strokeWidth={2.5}
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

export default BanjaraHillsNewFAQ;
