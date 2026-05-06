import React from 'react';
import { motion } from 'framer-motion';

const BariatricStats = ({ stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "10,000+", label: "Successful Surgeries" },
    { value: "4.8★", label: "Patient Rating" },
    { value: "#1", label: "Bariatric Hospital in Uppal" }
] }) => {
    return (
        <section className="bg-white py-8 md:py-12 border-b border-gray-100">
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
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-700 mb-1">
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

export default BariatricStats;
