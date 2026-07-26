import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const HerniaFAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const faqs = [
        {
            question: "Is surgery really the only option for a hernia?",
            answer: "Yes. A hernia cannot heal on its own, no belt, medication, or exercise will fix the underlying muscle defect. Surgery is the only permanent solution. The good news: with laparoscopic repair, it's a straightforward, low-risk procedure with a very fast recovery."
        },
        {
            question: "How long does laparoscopic hernia surgery actually take?",
            answer: "Most laparoscopic hernia repairs are completed in 30–60 minutes. You'll spend a few hours in recovery, and for most patients, same-day or next-morning discharge is possible. There's no need to plan for a long hospital stay."
        },
        {
            question: "When can I go back to work after hernia surgery?",
            answer: "Most patients doing desk or light work are back within 5–7 days. If your job involves physical labour or heavy lifting, we recommend 3–4 weeks of rest before returning. Your surgeon will advise based on your specific case and recovery progress."
        },
        {
            question: "Does insurance cover hernia surgery? How does it work at TX Hospitals?",
            answer: "Yes, hernia surgery is covered by most health insurance providers. Our insurance team handles the entire process so you don't have to."
        }
    ];

    return (
        <section className="py-8 md:py-16 px-6 bg-gray-50 font-inter">
            <FAQSchema faqs={faqs} />
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <span className="text-[#be185d] font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        Your Questions Answered
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full p-5 md:p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={18} className="text-gray-400" />
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-5 pb-6 md:px-6 md:pb-8">
                                            <div className="h-px bg-gray-100 mb-6 w-full"></div>
                                            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HerniaFAQ;
