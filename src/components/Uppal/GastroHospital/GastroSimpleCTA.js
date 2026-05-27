import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '../WhatsAppButton';

const GastroSimpleCTA = ({ onBookClick }) => {
    return (
        <section className="bg-[#be185d] py-8 md:py-16 px-6 text-white text-center font-inter">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight"
                >
                    Gastric Problems Don't Fix Themselves
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-pink-50/90 text-sm md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    Get the right diagnosis and the best treatment plan from Uppal's most trusted gastroenterology team. Get seen by a specialist today.
                </motion.p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onBookClick}
                        className="w-full sm:w-auto bg-white text-[#be185d] hover:bg-pink-50 font-extrabold py-3 md:py-4 px-6 md:px-12 rounded-full transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl text-sm md:text-base lg:text-lg uppercase tracking-wider"
                    >
                        Free Doctor Consultation
                    </motion.button>

                    <div className="w-full sm:w-auto">
                        <WhatsAppButton sizeClass="w-full sm:w-auto py-3 md:py-4 px-6 md:px-12 text-sm md:text-base lg:text-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GastroSimpleCTA;
