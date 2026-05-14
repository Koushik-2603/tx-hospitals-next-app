import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import WhatsAppButton from '../WhatsAppButton';

const GastroWhyChoose = ({
    badge = "Our Promise",
    title = "Why Choose TX Gastro Hospital?",
    subtitle = "The most advanced gastroenterology center in Uppal — combining expertise, technology, and compassionate care.",
    reasons = [
        {
            title: "Expert Gastro Surgeons",
            description: "Led by surgeons with 25+ years of experience and specialized training in advanced endoscopy."
        },
        {
            title: "Advanced Diagnostic Lab",
            description: "High-definition endoscopy, colonoscopy, and ERCP facilities for accurate diagnosis."
        },
        {
            title: "Minimally Invasive Care",
            description: "Focus on laparoscopic and endoscopic procedures for faster recovery and less pain."
        },
        {
            title: "Comprehensive Liver Care",
            description: "Dedicated center for hepatology, treating all types of liver diseases and conditions."
        },
        {
            title: "Cashless Insurance Support",
            description: "Hassle-free documentation and support for all major insurance providers."
        }
    ],
    journeyTitle = "Your Path to Digestive Wellness",
    journeySubtitle = "From diagnosis to recovery, we ensure a seamless and supportive healthcare journey.",
    journeySteps = [
        "Specialist consultation & symptoms review",
        "Advanced diagnostic imaging or endoscopy",
        "Personalized treatment plan discussion",
        "Minimally invasive procedure (if required)",
        "Quick recovery with post-op care",
        "Regular follow-ups & nutritional guidance"
    ],
    onBookClick
}) => {
    return (
        <section className="bg-gray-50 py-8 md:py-16 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="text-[#be185d] font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        {badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left Column: Reasons */}
                    <div className="space-y-4">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="bg-[#be185d] rounded-full p-1 text-white shrink-0 mt-1">
                                    <Check className="w-4 h-4" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-extrabold text-gray-900 mb-1 leading-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Journey Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#be185d] text-white p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden"
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10">
                            {journeyTitle}
                        </h3>
                        <p className="text-pink-50/80 text-sm md:text-base mb-8 font-medium leading-relaxed relative z-10">
                            {journeySubtitle}
                        </p>

                        <ul className="space-y-4 mb-10 relative z-10">
                            {journeySteps.map((step, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm md:text-base font-semibold">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                                    {step}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-4 relative z-10">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-pink-700 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:bg-pink-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-xl hover:shadow-pink-500/30 w-full"
                            >
                                Free Doctor Consultation
                            </button>
                            <WhatsAppButton sizeClass="px-8 py-3.5 text-base" className="!w-full rounded-2xl" />
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GastroWhyChoose;
