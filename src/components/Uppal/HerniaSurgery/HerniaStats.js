import React from 'react';
import { motion } from 'framer-motion';

const HerniaStats = ({ stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "50+", label: "Expert Doctors" },
    { value: "4.8★", label: "Rated by Patients" },
    { value: "1,00,000+", label: "Patients Treated" }
] }) => {
    return (
        <section className="bg-red-50 py-8 md:py-12 border-b border-red-100 font-inter">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HerniaStats;
