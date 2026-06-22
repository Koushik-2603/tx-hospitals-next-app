"use client";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

export default function CRChairmanMessage() {
    const isMobile = useIsMobile();
    if (isMobile === null) return null;

    return (
        <section className={`bg-[#1a0810] text-white w-full ${isMobile ? 'py-8 px-4' : 'py-16 px-12 md:px-24'}`}>
            {/*
            <div className="max-w-7xl mx-auto flex justify-center">
                <Image 
                    src="/assets/Header/Chairmans message.png" 
                    alt="Chairman's Message"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain shadow-2xl rounded-2xl"
                />
            </div>
            */}

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 relative items-start">

                <div className="w-full md:w-1/3 md:sticky md:top-24 flex flex-col gap-4">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
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
                            className={`font-serif leading-tight mb-6 ${isMobile ? 'text-3xl' : 'text-4xl'}`}
                        >
                            Chairman's<br />
                            <span className="text-pink-600 italic">Message</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "3rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="h-[2px] bg-pink-700 mb-6"
                        ></motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="overflow-hidden rounded-2xl shadow-2xl border border-pink-950/20 max-w-[260px] w-full"
                    >
                        <Image
                            src="/assets/Clinical-Research/Chairman  Sir _.png"
                            alt="Chairman"
                            width={260}
                            height={325}
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 font-serif italic text-sm md:text-base max-w-[260px] w-full text-right"
                    >
                        — Dr. Keerthikar Reddy K
                    </motion.div>
                </div>

                <div className="w-full md:w-2/3 flex flex-col gap-6 text-gray-300 font-serif md:text-xl leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-pink-600 font-bold text-xl md:text-2xl mb-2"
                    >
                        Advancing Healthcare. Inspiring Innovation. Transforming Lives.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        At TX Hospitals, we believe that every breakthrough in medicine begins with a commitment to research. Our Clinical Research Unit is built on the principles of scientific excellence, patient safety, ethical conduct, and regulatory integrity, enabling us to contribute to the development of tomorrow's therapies and healthcare solutions.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        With a highly experienced research leadership team, skilled investigators, dedicated research professionals, and state-of-the-art infrastructure, TX Hospitals is committed to conducting high-quality clinical research that generates meaningful evidence and improves patient care.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        The collective experience of our leadership team spans over 600 clinical trials and research studies across renowned healthcare institutions, bringing deep expertise and global research perspectives to our organization.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        Our vision is to establish TX Hospitals as a preferred destination for clinical research—where innovation meets compassion, science meets integrity, and every study contributes to advancing the future of medicine.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="text-pink-700 font-semibold"
                    >
                        Together, we are driving discoveries that improve lives and redefine healthcare for generations to come.
                    </motion.p>
                </div>

            </div>

        </section>
    );
}
