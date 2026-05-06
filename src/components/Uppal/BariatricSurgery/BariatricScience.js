import React from 'react';
import { motion } from 'framer-motion';

const BariatricScience = ({ 
    badge = "The Science",
    title = "How Does Bariatric Surgery Reduce Weight?",
    subtitle = "Three powerful mechanisms working together for permanent, sustainable weight loss.",
    mechanisms = [
        {
            number: "01",
            title: "Limits Food Intake",
            description: "The stomach is made smaller, so you feel full with much less food. Portion control becomes automatic — not a willpower battle."
        },
        {
            number: "02",
            title: "Reduces Hunger Hormones",
            description: "Surgery removes or bypasses the section of the stomach producing Ghrelin — the hunger hormone — dramatically reducing appetite and cravings."
        },
        {
            number: "03",
            title: "Improves Malabsorption",
            description: "In bypass procedures, food bypasses 45-60% of the small intestine, resulting in higher malabsorption and greater, faster weight loss."
        }
    ],
    onBookClick
}) => {
    return (
        <section className="bg-white py-8 md:py-16 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 text-center lg:text-left">
                    <span className="text-pink-700 font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        {badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed font-medium mx-auto lg:mx-0">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {mechanisms.map((mechanism, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                        >
                            <span className="absolute top-4 right-6 text-5xl md:text-6xl font-extrabold text-pink-700/10 group-hover:text-pink-700/20 transition-colors">
                                {mechanism.number}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-4 leading-tight">
                                    {mechanism.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {mechanism.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button 
                        onClick={() => onBookClick()}
                        className="bg-white border-2 border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white font-extrabold py-3.5 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
                    >
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BariatricScience;
