"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const trialStats = [
    { number: "06", label: "Active Trials" },
    { number: "06", label: "For EC Approval" },
    { number: "24", label: "Pipeline Trials" }
];

export default function CRPortfolio() {
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section className={`bg-[#fcf8f9] w-full ${isMobile ? 'py-12 px-6' : 'py-24 px-12 md:px-24'}`}>
            <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
                
                {/* Text Content */}
                <div className="max-w-4xl w-full flex flex-col items-start mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d32f58]"></div>
                        <span className="text-[#d32f58] font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                            ACTIVE STUDIES
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-serif text-[#2a0e19] leading-tight mb-6 ${isMobile ? 'text-4xl' : 'text-5xl md:text-6xl'}`}
                    >
                        Current Clinical Research Portfolio
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-gray-600 font-normal leading-relaxed ${isMobile ? 'text-sm mb-2' : 'text-lg mb-4'}`}
                    >
                        TX Hospitals continues to actively expand its clinical research footprint across therapeutic areas.
                    </motion.p>
                    
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`font-serif text-[#2a0e19] font-bold ${isMobile ? 'text-xl' : 'text-2xl'}`}
                    >
                        Current Trials status
                    </motion.h3>
                </div>
                
                {/* Modern Stats Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={`grid gap-6 md:gap-10 w-full max-w-5xl ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} mt-8`}
                >
                    {trialStats.map((stat, idx) => (
                        <motion.div 
                            key={idx} 
                            whileHover={{ y: -8 }}
                            className="bg-white border border-[#2a0e19]/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="bg-pink-50 w-24 h-24 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors duration-300">
                                <span className="font-serif font-medium tracking-wide text-[#d32f58] text-5xl md:text-6xl">
                                    {stat.number}
                                </span>
                            </div>
                            <h4 className="text-[#2a0e19] font-bold text-lg md:text-xl mb-3">
                                {stat.label}
                            </h4>
                            <div className="w-10 h-1 bg-pink-200 rounded-full group-hover:w-16 group-hover:bg-[#d32f58] transition-all duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
