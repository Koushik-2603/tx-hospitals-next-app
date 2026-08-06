import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const FAQSection = ({ location }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    const formatString = (str) => {
        if (!str) return '';
        return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    const formattedLocation = formatString(location) || 'Miyapur';

    const miyapurFaqs = [
        {
            question: `What specialties are available at TX Hospitals ${formattedLocation}?`,
            answer: `TX Hospitals ${formattedLocation} offers expert care in cardiology, orthopaedics, robotic surgery, gastroenterology, neurology, nephrology, urology, ENT, pulmonology, obstetrics & gynaecology, and other key specialties.`
        },
        {
            question: `Is TX Hospitals ${formattedLocation} a multi-speciality hospital?`,
            answer: `Yes. TX Hospitals ${formattedLocation} is a multi-speciality hospital where patients can consult doctors from different departments, access diagnostic services and receive treatment support in one convenient location.`
        },
        {
            question: `Why is TX Hospitals considered among the Top hospitals near ${formattedLocation}?`,
            answer: `TX Hospitals is considered among the Top hospitals near ${formattedLocation} because it provides specialist consultations, advanced diagnostics, emergency support and patient-focused care across multiple medical departments.`
        },
        {
            question: `Can I consult specialist doctors at TX Hospitals ${formattedLocation}?`,
            answer: `Yes. Patients can consult experienced specialist doctors for diagnosis, second opinions, treatment planning, surgery guidance and follow-up care based on their health condition.`
        },
        {
            question: `Does TX Hospitals ${formattedLocation} provide second opinion support?`,
            answer: `Yes. Patients can get second opinion support from specialists to better understand their diagnosis, medical reports, surgery advice, treatment options and long-term care plans.`
        },
        {
            question: `Which doctor should I consult for chest pain or heart-related symptoms?`,
            answer: `For chest pain, breathlessness, high blood pressure, palpitations or heart-related concerns, patients can consult a cardiologist at TX Hospitals ${formattedLocation} for proper evaluation and guidance.`
        },
        {
            question: `Are diagnostic services available at TX Hospitals ${formattedLocation}?`,
            answer: `Yes. Patients can access diagnostic support along with specialist consultation, helping doctors evaluate health conditions and plan the right treatment more effectively.`
        },
        {
            question: `How can I book a consultation at TX Hospitals ${formattedLocation}?`,
            answer: `You can book a consultation with the required specialist at TX Hospitals by calling 9144514459 or by visiting official website.`
        }
    ];

    const kachigudaFaqs = [
        {
            question: `Is TX Hospitals Kachiguda a multispeciality hospital?`,
            answer: `Yes. TX Hospitals Kachiguda provides consultations, diagnostic support, medical care and surgical treatment across multiple specialties within one hospital.`
        },
        {
            question: `What medical specialties are available at TX Hospitals Kachiguda?`,
            answer: `TX Hospitals Kachiguda offers specialist care in Cardiology, Orthopaedics, Gastroenterology, Neurology, Nephrology, Urology, Pulmonology, ENT, Women’s Health, Paediatrics, Oncology and other major departments.`
        },
        {
            question: `How do I choose the right specialist for my symptoms?`,
            answer: `You can share your main symptoms with our appointment team. Based on your concern, they can guide you towards the most appropriate medical department.`
        },
        {
            question: `Can I consult different specialists during the same treatment journey?`,
            answer: `Yes. When a health condition requires expertise from multiple departments, our doctors can coordinate the patient’s evaluation and treatment plan.`
        },
        {
            question: `Does TX Hospitals Kachiguda provide diagnostic services?`,
            answer: `Yes. Diagnostic support is available to help specialists assess the patient’s condition and plan suitable treatment based on clinical requirements.`
        },
        {
            question: `Is emergency care available at TX Hospitals Kachiguda?`,
            answer: `Emergency medical support is available for patients who require urgent assessment, stabilisation and further treatment.`
        },
        {
            question: `Which specialist treats joint pain and fractures?`,
            answer: `An orthopaedic specialist evaluates and treats fractures, joint pain, arthritis, sports injuries and other bone or movement-related conditions.`
        },
        {
            question: `How can I book an appointment at TX Hospitals Kachiguda?`,
            answer: `You can schedule an appointment with the required specialist by calling 9144514459 or visiting the official TX Hospitals website.`
        }
    ];

    const faqs = formattedLocation === 'Kachiguda' ? kachigudaFaqs : miyapurFaqs;

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

export default FAQSection;
