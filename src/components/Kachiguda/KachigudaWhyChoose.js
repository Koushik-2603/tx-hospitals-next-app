import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const KachigudaWhyChoose = () => {
    const features = [
        {
            icon: "✅",
            bgColor: "bg-[#e6fcf5]",
            title: "NABH Accredited Quality Standards",
            desc: "Certified care with the highest safety and quality protocols."
        },
        {
            icon: "🏥",
            bgColor: "bg-[#e8f0fe]",
            title: "State-of-the-Art Infrastructure",
            desc: "Modern OTs, ICUs, and diagnostic equipment in Kachiguda."
        },
        {
            icon: "👨‍⚕️",
            bgColor: "bg-[#f3f0ff]",
            title: "Senior Consultants Available Daily",
            desc: "50+ experienced specialists across all departments."
        },
        {
            icon: "💰",
            bgColor: "bg-[#fff9db]",
            title: "Transparent, Affordable Pricing",
            desc: "No hidden costs. Insurance & cashless treatment available."
        }
    ];

    return (
        <section className="bg-white py-10 md:py-14 px-6 md:px-10 lg:px-12 relative z-10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Hospital Image Card with Floating Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full aspect-[380/356] rounded-3xl overflow-hidden bg-white shadow-xl group border border-slate-100"
                    >
                        {/* Hospital Background Image */}
                        <div className="absolute inset-0 w-full h-full z-0 transition-transform duration-700 group-hover:scale-105">
                            <Image
                                src="/assets/Our Location/Kachiguda Image.png"
                                alt="TX Hospitals Kachiguda"
                                fill
                                sizes="(max-w-768px) 100vw, 50vw"
                                className="object-cover brightness-[0.98] contrast-[1.02]"
                                priority
                            />
                            {/* Linear Gradient Overlay for text contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-1 pointer-events-none" />
                        </div>

                        {/* Floating Stats cards */}
                        <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex flex-row justify-between gap-3 sm:gap-4 z-10">
                            {/* Stat 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="bg-white/95 backdrop-blur-sm rounded-2xl py-2.5 px-4 shadow-lg flex flex-col items-center text-center flex-1 max-w-[170px]"
                            >
                                <span className="text-gray-900 text-base sm:text-xl font-bold leading-none ">10,000+</span>
                                <span className="text-gray-500 text-[9px] sm:text-xs font-bold mt-1 uppercase tracking-wide">Happy Patients</span>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="bg-white/95 backdrop-blur-sm rounded-2xl py-2.5 px-4 shadow-lg flex flex-col items-center text-center flex-1 max-w-[170px]"
                            >
                                <span className="text-gray-900 text-base sm:text-xl font-bold leading-none ">500+</span>
                                <span className="text-gray-500 text-[9px] sm:text-xs font-bold mt-1 uppercase tracking-wide">Successful Surgeries</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column: Why Choose Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        {/* Orange Badge */}
                        <span className="inline-block bg-[#fff7ed] text-[#f97316] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm w-fit mb-4">
                            Why TX Kachiguda?
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900  leading-tight mb-6">
                            Healthcare You Can<br />
                            Trust & Rely On
                        </h2>

                        {/* Feature List */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {features.map((feat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    {/* Icon Badge */}
                                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${feat.bgColor} flex items-center justify-center shrink-0 select-none shadow-sm`}>
                                        <span className="text-xl sm:text-2xl filter drop-shadow-sm">{feat.icon}</span>
                                    </div>

                                    {/* Text Block */}
                                    <div>
                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 leading-snug">
                                            {feat.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium max-w-xl">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default KachigudaWhyChoose;
