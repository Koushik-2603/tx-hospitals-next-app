import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BariatricTransformations = ({ 
    badge = "Real Patient Stories",
    title = "See the Transformation",
    subtitle = "Real results from real patients who chose TX Hospitals for their weight loss journey.",
    transformations = [
        {
            image: "/assets/Uppal/Bariatric-surgery/146 Kg.png",
            alt: "Patient Transformation 1"
        },
        {
            image: "/assets/Uppal/Bariatric-surgery/patient2.png",
            alt: "Patient Transformation 2"
        }
    ]
}) => {
    return (
        <section className="bg-gray-50 py-8 md:py-16 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="text-pink-700 font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        {badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {transformations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group w-full max-w-md"
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Removed placeholder */}
                </div>
            </div>
        </section>
    );
};

export default BariatricTransformations;
