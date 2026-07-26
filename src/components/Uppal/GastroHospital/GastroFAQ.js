import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import FAQSchema from '@/utils/FAQSchema';

const GastroFAQ = ({
    faqs = [
        {
            question: "How do I know if I need to see a gastroenterologist?",
            answer: "If you've had symptoms like persistent bloating, heartburn more than twice a week, blood in your stool, unexplained weight loss, abdominal pain, or yellowing of the skin, it's time to see a specialist. These are not symptoms to wait out."
        },
        {
            question: "What happens during my first gastro consultation?",
            answer: "Your doctor will review your symptoms, medical history, and any previous reports. Based on this, they may recommend blood tests, an ultrasound, or a scope procedure. Most patients leave their first consultation with a clear diagnosis path."
        },
        {
            question: "Can diet alone treat my digestive condition?",
            answer: "For some conditions like mild GERD or IBS, dietary changes can help significantly. But for conditions like gallstones, colon polyps, Crohn's disease, or liver disease, medical or surgical treatment is usually essential. Our specialists will guide you on the right approach."
        },
        {
            question: "Is my treatment covered under insurance?",
            answer: "Most gastroenterology procedures, endoscopies, surgeries are covered by major health insurance policies. TX Hospitals works with all major insurers and our team handles the entire claims process for you."
        }
    ]
}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-8 md:py-16 px-6 bg-white">
            <FAQSchema faqs={faqs} />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#be185d] font-bold text-sm uppercase tracking-widest block mb-4">Your Questions Answered</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl transition-all ${activeIndex === index ? 'border-[#be185d] bg-pink-50/30' : 'border-gray-100 hover:border-pink-200'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg md:text-xl font-bold text-gray-900 pr-8">
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 rounded-full p-2 transition-colors ${activeIndex === index ? 'bg-[#be185d] text-white' : 'bg-gray-100 text-gray-500'}`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                                            {faq.answer}
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

export default GastroFAQ;
