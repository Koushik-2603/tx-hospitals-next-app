"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const regulatoryLogos = [
    { src: "/assets/clinical-search/CDSO.jpg", alt: "CDSCO" },
    { src: "/assets/clinical-search/FDA.jpg", alt: "FDA" },
    { src: "/assets/clinical-search/ANVISA.jpg", alt: "ANVISA" },
    { src: "/assets/clinical-search/WHO.jpg", alt: "WHO" },
    { src: "/assets/clinical-search/RTMH.jpg", alt: "RTMH" },
    { src: "/assets/clinical-search/MHM.jpg", alt: "MHM" }
];

export default function CRRegulatory() {
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section className={`bg-[#1a0810] text-white w-full ${isMobile ? 'py-12 px-6' : 'py-20 px-12 md:px-24'}`}>
            <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
                
                {/* Text Content */}
                <div className="max-w-4xl w-full flex flex-col items-start mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-600"></div>
                        <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                            COMPLIANCE & AUDITS
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-serif mb-6 ${isMobile ? 'text-4xl' : 'text-5xl md:text-6xl'}`}
                    >
                        Regulatory Compliance & Audit Experience
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="h-[2px] bg-pink-700 mb-8"
                    ></motion.div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className={`text-gray-400 font-normal leading-relaxed ${isMobile ? 'text-sm' : 'text-lg md:text-xl'}`}
                    >
                        The research leadership team has extensive exposure to inspections and audits conducted by regulatory authorities and sponsors. Our operations are aligned with the most demanding international standards.
                    </motion.p>
                </div>
                
                {/* Logos Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={`grid gap-4 md:gap-6 items-center justify-items-center w-full ${isMobile ? 'grid-cols-2' : 'grid-cols-3 md:grid-cols-6'}`}
                >
                    {regulatoryLogos.map((logo, index) => (
                        <div key={index} className="relative w-28 h-28 md:w-32 md:h-32 p-4 bg-white/95 rounded-2xl shadow-lg border border-white/10 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                            <Image 
                                src={logo.src} 
                                alt={logo.alt} 
                                fill
                                className="object-contain p-4 mix-blend-multiply"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

