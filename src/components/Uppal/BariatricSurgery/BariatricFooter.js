import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WhatsAppButton from '../WhatsAppButton';

const BariatricFooter = ({ onBookClick }) => {
    return (
        <footer className="w-full font-inter">
            {/* Final CTA Section */}
            <div className="bg-pink-700 py-12 md:py-16 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 "
                    >
                        Ready to Start Your Weight Loss Journey?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-pink-50/80 text-sm md:text-lg mb-10 font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Join thousands of patients who transformed their lives at TX Hospitals — the only bariatric hospital in Uppal.
                    </motion.p>
                    <div className="flex flex-row justify-center gap-4">
                        <motion.button
                            onClick={() => onBookClick()}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white text-pink-700 hover:bg-pink-50 font-extrabold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg"
                        >
                            Free Doctor Consultation
                        </motion.button>
                        <WhatsAppButton sizeClass="py-4 px-12 text-base md:text-lg" />
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="bg-[#111111] py-12 px-6 text-white border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 bg-pink-700 rounded-lg flex items-center justify-center font-bold text-lg">
                            TX
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-extrabold  leading-none mb-1">TX Hospitals</h3>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                The Only Bariatric Hospital in Uppal, Hyderabad
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/5 mb-8"></div>

                    <div className="text-center space-y-2">
                        <p className="text-gray-500 text-[11px] font-bold uppercase tracking-[0.2em]">
                            © 2025 TX Hospitals. All rights reserved. | NABH Accredited
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BariatricFooter;
