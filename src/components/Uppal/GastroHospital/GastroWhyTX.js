import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const GastroWhyTX = ({ onBookClick }) => {
    const features = [
        {
            title: "Decades of Gastro Expertise",
            description: "25+ years treating complex digestive conditions across Hyderabad with consistently high success rates."
        },
        {
            title: "Cutting-Edge Diagnostic Technology",
            description: "Advanced endoscopy, colonoscopy, ERCP, and imaging for accurate diagnosis and complex procedures."
        },
        {
            title: "Patient-Centric, Personalised Care",
            description: "Every treatment plan is tailored to you — your condition, lifestyle, and recovery goals come first."
        },
        {
            title: "Comprehensive Post-Procedure Rehabilitation",
            description: "Structured recovery support, dietary guidance, and follow-up care to ensure lasting results."
        },
        {
            title: "Strict Infection Control Standards",
            description: "NABH-accredited protocols ensure the highest safety and hygiene standards for every patient."
        }
    ];

    const stats = [
        { label: "Expert Doctors", value: "50+" },
        { label: "Specialties", value: "13+" },
        { label: "Happy Patients", value: "1L+" },
        { label: "Surgeries Done", value: "30K+" }
    ];

    return (
        <section className="py-8 md:py-16 px-6 bg-gray-50 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Content */}
                    <div>
                        <div className="mb-10">
                            <span className="text-[#be185d] font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                                Why TX Hospitals
                            </span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Best Gastro Hospital in Uppal
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                Our commitment is to bring together world-class gastroenterology expertise and advanced facilities — all right here in Uppal, accessible to you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm"
                                >
                                    <div className="bg-[#be185d] rounded-full p-0.5 text-white shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5" fill="currentColor" stroke="white" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-extrabold text-gray-900 mb-1 leading-tight">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#be185d] text-white p-8 md:p-12 rounded-[40px] shadow-2xl sticky top-24"
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                            Trusted Across Hyderabad
                        </h3>
                        <p className="text-pink-50/80 text-sm md:text-base mb-10 font-medium leading-relaxed">
                            Numbers that reflect the care, commitment, and confidence patients place in TX Hospitals, every single day.
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                                    <div className="text-2xl md:text-3xl font-extrabold mb-1">{stat.value}</div>
                                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-pink-100/70">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onBookClick}
                            className="w-full bg-white text-[#be185d] hover:bg-pink-50 font-extrabold py-4 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-sm md:text-base uppercase tracking-wider"
                        >
                            Book an Appointment
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GastroWhyTX;
