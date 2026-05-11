import React from 'react';
import { motion } from 'framer-motion';

const HerniaFinalCTA = ({ onBookClick }) => {
    return (
        <section className="bg-[#be185d] py-8 md:py-16 px-6 text-center text-white font-inter">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight"
                >
                    Don't Wait Until It Becomes an Emergency
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-xl text-pink-50/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    Hernia surgery planned in time is safe, quick, and minimally disruptive. Get seen by an expert hernia surgeon in Uppal today.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onClick={onBookClick}
                    className="bg-white text-[#be185d] hover:bg-pink-50 font-extrabold py-4 px-12 rounded-full transition-all shadow-2xl text-base md:text-lg uppercase tracking-wider transform hover:scale-105"
                >
                    Book an Appointment
                </motion.button>
            </div>
        </section>
    );
};

export default HerniaFinalCTA;
