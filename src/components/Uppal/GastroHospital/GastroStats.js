import React from 'react';
import { motion } from 'framer-motion';

const GastroStats = ({ stats = [
    { value: "25+", label: "Years Treating", subLabel: "Digestive Conditions" },
    { value: "10,000+", label: "Patients Treated", subLabel: "Successfully" },
    { value: "4.8★", label: "Rated by Patients", subLabel: "on Google" },
    { value: "2–3", label: "Days Average", subLabel: "Recovery Time" },
    { value: "50+", label: "Expert Doctors", subLabel: "in Uppal" }
] }) => {
    return (
        <section className="bg-white py-8 md:py-12 border-b border-gray-100 font-inter">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#be185d] mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                                {stat.label}
                                {stat.subLabel && <span className="block mt-0.5 text-gray-400 font-medium normal-case tracking-normal">{stat.subLabel}</span>}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GastroStats;
