import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const BariatricAdvantages = ({ 
    badge = "Why It Works",
    title = "Advantages of Bariatric Surgery",
    subtitle = "Not just weight loss, a life-changing solution for obesity and related health conditions.",
    advantages = [
        {
            title: "Most Effective Weight Loss",
            description: "Clinically proven to achieve up to 40% total body weight loss — far beyond diet or exercise alone."
        },
        {
            title: "Minimal Scars & Cuts",
            description: "Laparoscopic (keyhole) technique — tiny incisions, less pain, faster return to daily life."
        },
        {
            title: "Reduced Chances of Diabetes",
            description: "Up to 80% of Type 2 diabetes patients see significant improvement or complete remission post-surgery."
        },
        {
            title: "Hypertension & Sleep Apnea Reversal",
            description: "High blood pressure and sleep apnea often resolve or dramatically improve after surgery."
        },
        {
            title: "Permanent Solution to Obesity",
            description: "Unlike diets that fail, bariatric surgery delivers long-lasting, sustainable results."
        },
        {
            title: "Knee & Back Pain Relief",
            description: "Weight loss reduces joint pressure, giving relief from chronic knee, hip, and back pain."
        },
        {
            title: "Reduced Cardiovascular Risk",
            description: "Lower BMI, blood pressure, and cholesterol sharply cut the risk of heart disease and stroke."
        },
        {
            title: "Quick Recovery in 3-4 Days",
            description: "Most patients are discharged within 1-3 days and return to normal activities in 2-3 weeks."
        }
    ],
    onBookClick
}) => {
    return (
        <section className="bg-white py-8 md:py-16 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="text-pink-700 font-bold text-sm md:text-base uppercase tracking-widest block mb-2">
                        {badge}
                    </span>
                    <h2 className="text-[32px] md:text-[38px] font-extrabold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col h-full hover:bg-white hover:shadow-xl hover:border-pink-100 transition-all duration-300"
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                <h3 className="text-base md:text-lg font-extrabold text-gray-900 leading-tight">
                                    {adv.title}
                                </h3>
                            </div>
                            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={() => onBookClick()}
                        className="bg-pink-700 hover:bg-pink-800 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-xl text-base md:text-lg"
                    >
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BariatricAdvantages;
