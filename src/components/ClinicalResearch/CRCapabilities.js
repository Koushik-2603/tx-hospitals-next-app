"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const capabilities = [
    {
        category: "INTERVENTIONAL",
        title: "Phase II, III & IV Studies",
        desc: "Randomised controlled trials across therapeutic areas, supporting IND and NDA submissions globally."
    },
    {
        category: "BIOEQUIVALENCE",
        title: "BA / BE Studies",
        desc: "Bioavailability and Bioequivalence studies with full pharmacokinetic sampling infrastructure."
    },
    {
        category: "INVESTIGATOR INITIATED",
        title: "IIT's — Investigator Studies",
        desc: "Internally designed studies driven by clinical questions emerging from patient care and unmet need."
    },
    {
        category: "POST-MARKET",
        title: "PMS & RWE Studies",
        desc: "Post-Marketing Surveillance and Real-World Evidence studies capturing effectiveness at scale."
    },
    {
        category: "OBSERVATIONAL",
        title: "Observational Studies",
        desc: "Longitudinal and cross-sectional observational designs with robust data management."
    },
    {
        category: "DEVICES",
        title: "Medical Device Research",
        desc: "Clinical evaluation and performance studies for medical devices under applicable regulatory frameworks."
    },
    {
        category: "PREVENTIVE MEDICINE",
        title: "Public Health & Prevention Research",
        desc: "Studies focused on Patient reported outcomes, Quality of life, and Screening."
    },
    {
        category: "ARTIFICIAL INTELLIGENCE",
        title: "Digital Health & AI research",
        desc: "Clinical evaluation of AI algorithms, Digital therapeutics, Clinical decision support systems, Wearables, Mobile health apps"
    }
];

export default function CRCapabilities() {
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <section className={`bg-[#1a0810] text-white w-full ${isMobile ? 'py-12 px-6' : 'py-20 px-12 md:px-24'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-600"></div>
                        <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                            WHAT WE CONDUCT
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-serif mb-6 ${isMobile ? 'text-4xl' : 'text-5xl md:text-6xl'}`}
                    >
                        Our Research Capabilities
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`text-gray-400 font-normal leading-relaxed max-w-2xl ${isMobile ? 'text-sm' : 'text-lg'}`}
                    >
                        TX Hospitals is equipped to conduct a comprehensive spectrum of clinical studies, supported by Compliant infrastructure and experienced Investigator teams.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="h-[2px] bg-pink-700 mt-8"
                    ></motion.div>
                </div>

                {/* Cards Grid */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-4'}`}
                >
                    {capabilities.map((cap, idx) => (
                        <div 
                            key={idx} 
                            className="bg-[#240c17] border border-white/5 p-6 md:p-8 hover:bg-[#2d0f1d] transition-colors duration-300"
                        >
                            <h4 className="text-pink-600 font-bold uppercase tracking-wider text-[10px] md:text-xs mb-4">
                                {cap.category}
                            </h4>
                            <h3 className="font-serif text-white text-xl md:text-2xl mb-4 leading-tight">
                                {cap.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {cap.desc}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
