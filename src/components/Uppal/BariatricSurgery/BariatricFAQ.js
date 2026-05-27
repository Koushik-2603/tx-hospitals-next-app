import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppButton from '../WhatsAppButton';

const BariatricFAQ = ({
    badge = "Your Questions Answered",
    title = "Frequently Asked Questions",
    faqs = [
        {
            question: "Who is eligible for bariatric surgery?",
            answer: "Bariatric surgery is generally recommended for adults with a BMI of 40 or above, or a BMI of 35+ with obesity-related conditions like Type 2 diabetes, hypertension, or sleep apnea. A thorough medical evaluation is done before recommending any procedure."
        },
        {
            question: "Is bariatric surgery safe?",
            answer: "Yes. Bariatric surgery is one of the most studied and proven surgical treatments for obesity. At TX Hospitals, our experienced surgeons use minimally invasive laparoscopic techniques, which significantly reduce complication risks. Our success rate exceeds 98%."
        },
        {
            question: "How long is the hospital stay and recovery?",
            answer: "Most patients stay in hospital for 1-3 days. You can typically return to light activities within 1 week and resume full normal activities in 3-4 weeks. Our team will guide you through every stage of recovery."
        },
        {
            question: "Is bariatric surgery covered by insurance?",
            answer: "Yes. Bariatric surgery is covered by most major health insurance plans in India, especially when medically indicated ( BMI >= 35 with comorbidities). TX Hospitals provides complete insurance documentation and cashless claim assistance. We accept all major insurers."
        }
    ],
    onBookClick
}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="bg-gray-50 py-8 md:py-16 px-6 font-inter">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 text-center lg:text-left">
                    <span className="text-pink-700 font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        {badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        {title}
                    </h2>
                </div>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-sm md:text-base font-extrabold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-50 p-1.5 rounded-lg text-gray-400"
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium border-t border-gray-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                    <button
                        onClick={() => onBookClick()}
                        className="w-full sm:w-auto bg-pink-700 hover:bg-pink-800 text-white font-bold py-4 px-6 md:px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-sm md:text-base lg:text-lg"
                    >
                        Free Doctor Consultation
                    </button>

                    <div className="w-full sm:w-auto">
                        <WhatsAppButton sizeClass="w-full sm:w-auto py-4 px-6 md:px-10 text-sm md:text-base lg:text-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BariatricFAQ;
