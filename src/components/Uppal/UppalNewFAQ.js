import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const UppalNewFAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "Is TX Hospitals Uppal open 24 hours?",
            answer: "Yes, TX Hospitals Uppal provides 24/7 emergency and critical care services. Our emergency department, ICU, ambulance support, and medical team are available round the clock to handle all medical emergencies."
        },
        {
            question: "Which insurances are accepted at TX Hospitals Uppal?",
            answer: "TX Hospitals Uppal accepts all major health insurance providers, TPAs, and government health schemes, including Aarogyasri, CGHS, ESI, Star Health, HDFC Ergo, ICICI Lombard, Medi Assist, and many more. Cashless treatment facilities are available for eligible patients."
        },
        {
            question: "How do I book an appointment with a doctor near Uppal?",
            answer: "You can book an appointment at TX Hospitals Uppal by calling the hospital, using WhatsApp support, or filling out the online appointment form on the website. Our patient care team will help you schedule a consultation with the right specialist."
        },
        {
            question: "Are treatments at TX Hospitals Uppal affordable?",
            answer: "Yes, TX Hospitals Uppal is committed to providing affordable healthcare with transparent pricing. We offer quality medical treatments, cashless insurance options, and flexible payment solutions without hidden charges."
        },
        {
            question: "Is there an ambulance service near Uppal?",
            answer: "Yes, TX Hospitals Uppal offers 24/7 ambulance services for medical emergencies in Uppal, Nagole, Boduppal, Ramanthapur, Habsiguda, Kothapet, and nearby areas. Emergency response teams are available to provide immediate medical assistance and transportation."
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

export default UppalNewFAQ;
