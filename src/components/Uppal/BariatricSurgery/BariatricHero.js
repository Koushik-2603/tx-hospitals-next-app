import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import BariatricForm from './BariatricForm';

const BariatricHero = ({ 
    badge = "The Only Bariatric Hospital in Uppal",
    title = "Bariatric Weight Loss Surgery in Uppal",
    subtitle = "The only bariatric hospital in Uppal. Trusted by thousands of patients across Hyderabad.",
    features = [
        "Only bariatric hospital in Uppal",
        "25+ Years experienced bariatric surgeons",
        "Minimally invasive procedures",
        "Faster recovery and comfort",
        "All insurances accepted",
        "No Cost EMI available"
    ],
    buttonText = "Book an Appointment",
    onBookClick
}) => {
    return (
        <section className="bg-pink-700 py-10 lg:py-14 px-4 md:px-10 lg:px-12 text-white relative overflow-hidden font-inter">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start text-left"
                    >
                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">
                            {badge}
                        </span>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                            {title}
                        </h1>
                        
                        <p className="text-sm md:text-base text-pink-50/90 mb-8 max-w-xl leading-relaxed">
                            {subtitle}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-2xl">
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-2.5 rounded-lg"
                                >
                                    <div className="bg-white rounded-full p-0.5 shrink-0">
                                        <CheckCircle2 className="w-3 h-3 text-pink-700" fill="currentColor" stroke="white" />
                                    </div>
                                    <span className="text-xs md:text-sm font-semibold">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={onBookClick}
                            className="bg-white text-pink-700 hover:bg-pink-50 font-bold py-3.5 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-sm md:text-base uppercase tracking-wider"
                        >
                            {buttonText}
                        </button>
                    </motion.div>
                    
                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <BariatricForm />
                    </motion.div>
                </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent -skew-x-12 transform translate-x-1/4 pointer-events-none"></div>
        </section>
    );
};

export default BariatricHero;
