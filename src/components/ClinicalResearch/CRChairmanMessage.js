"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

export default function CRChairmanMessage() {
    const isMobile = useIsMobile();
    if (isMobile === null) return null;

    return (
        <section className={`bg-[#1a0810] text-white w-full ${isMobile ? 'py-16 px-6' : 'py-24 px-12 md:px-24'}`}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 relative items-start">
                
                {/* Left Sticky Content */}
                <div className="w-full md:w-1/3 md:sticky md:top-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-600"></div>
                        <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                            LEADERSHIP
                        </span>
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`font-serif leading-tight mb-8 ${isMobile ? 'text-4xl' : 'text-5xl md:text-6xl'}`}
                    >
                        Chairman's<br />
                        <span className="text-pink-600 italic">Message</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "3rem" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="h-[2px] bg-pink-700 mb-8"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 font-serif italic"
                    >
                        — Chairman,<br />TX Hospitals
                    </motion.div>
                </div>

                {/* Right Scrollable Content */}
                <div className="w-full md:w-2/3 flex flex-col gap-6 text-gray-300 font-serif md:text-xl leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        At TX Hospitals, we believe that clinical research is fundamental to advancing healthcare 
                        and improving patient outcomes. Our commitment extends beyond delivering quality medical 
                        care — we are dedicated to contributing to the development of innovative therapies, medical 
                        technologies, and evidence-based treatment approaches that benefit patients and society.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        The Clinical Research Unit at TX Hospitals has been established with a strong focus on 
                        patient safety, ethical conduct, scientific excellence, and regulatory compliance. Supported 
                        by experienced investigators, dedicated research professionals, modern infrastructure, and 
                        registered Ethics Committees, we strive to create a trusted environment for conducting 
                        high-quality clinical research.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        Our research initiatives are guided by an experienced clinical research leadership team 
                        whose collective experience spans more than 600 clinical trials and research studies across 
                        leading healthcare institutions. This expertise strengthens our ability to collaborate 
                        effectively with sponsors, CROs, investigators, and academic partners.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        As we continue to expand our research capabilities, our vision is to establish TX Hospitals 
                        as a preferred destination for ethical, patient-centric, and scientifically robust clinical 
                        research that contributes to the future of medicine.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-pink-700 font-semibold"
                    >
                        Together, we are advancing healthcare through research, innovation, and excellence.
                    </motion.p>
                </div>

            </div>
        </section>
    );
}
