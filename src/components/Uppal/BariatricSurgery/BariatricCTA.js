import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '../WhatsAppButton';

const BariatricCTA = ({ 
    title = "Get Right Diagnosis, Treatment & Cost Estimate Details to Make a Fully Informed Decision",
    onBookClick
}) => {
    return (
        <section className="bg-pink-700 py-12 md:py-16 px-6 text-center overflow-hidden relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-8 leading-tight"
                >
                    {title}
                </motion.h2>

                <div className="flex flex-row items-center justify-center gap-4">
                    <motion.button
                        onClick={onBookClick}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white text-pink-700 hover:bg-pink-50 font-extrabold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-sm md:text-base uppercase tracking-wider"
                    >
                        Free Doctor Consultation
                    </motion.button>
                    <WhatsAppButton sizeClass="py-4 px-10 text-sm md:text-base" />
                </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
        </section>
    );
};

export default BariatricCTA;
