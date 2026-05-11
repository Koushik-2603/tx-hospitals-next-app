import React from 'react';
import { motion } from 'framer-motion';

const GastroFinalCTA = ({ onBookClick }) => {
    return (
        <section className="bg-[#be185d] py-8 md:py-16 px-6 text-white text-center font-inter">
            <div className="max-w-4xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight"
                >
                    One Hospital for All Your Gastro Health Needs
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-pink-50/90 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    Recovery doesn't end at discharge. Diet guidance, medication review, and follow-up care are all part of your plan.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    onClick={onBookClick}
                    className="bg-white text-[#be185d] hover:bg-pink-50 font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg"
                >
                    Book an Appointment
                </motion.button>
            </div>
        </section>
    );
};

export default GastroFinalCTA;
