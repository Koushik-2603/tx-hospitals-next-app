"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

export default function CRHero() {
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    const stats = [
        { number: "600+", suffix: " Trials", label: "RESEARCH TEAM EXPERIENCE" },
        { number: "100", suffix: "+", label: "QUALIFIED INVESTIGATORS" },
        { number: "2", suffix: "", label: "REGISTERED ETHICS COMMITTEES" },
        { number: "1", suffix: "", label: "DEDICATED CLINICAL TRIAL UNIT" }
    ];

    return (
        <section className={`relative w-full overflow-hidden bg-[#1a0810] ${isMobile ? 'pt-12 pb-8 px-6' : 'pt-20 pb-16 px-12 md:px-24'}`}>
            {/* Large background text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
                <span className="text-[#2a0e19] font-serif font-bold text-[100px] md:text-[200px] lg:text-[250px] leading-none whitespace-nowrap opacity-50">
                    RESEARCH
                </span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center h-full text-left">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-6"
                >
                    <div className="w-12 h-[1px] bg-pink-700/50"></div>
                    <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                        CLINICAL RESEARCH DIVISION
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`font-serif leading-tight mb-8 ${isMobile ? 'text-4xl' : 'text-6xl md:text-7xl lg:text-[80px]'}`}
                >
                    <span className="text-white">Advancing Healthcare</span><br />
                    <span className="text-white">Through </span>
                    <span className="text-pink-600 italic">Research Excellence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`max-w-3xl text-gray-300 font-normal leading-relaxed mb-16 ${isMobile ? 'text-sm mb-12' : 'text-lg md:text-xl'}`}
                >
                    At TX Hospitals, we combine experienced Investigators, strong operational capabilities, regulatory compliance, and advanced infrastructure to support the successful conduct of clinical studies across multiple therapeutic areas.
                </motion.p>
                
                {/* Statistics Row */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className={`grid gap-8 ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} w-full border-t border-white/10 pt-10`}
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col text-left">
                            <h3 className={`font-serif text-white mb-2 ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
                                {stat.number}<span className="text-pink-600 font-sans text-3xl md:text-4xl">{stat.suffix}</span>
                            </h3>
                            <p className="text-gray-400 font-sans text-xs md:text-sm font-semibold tracking-wider uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
