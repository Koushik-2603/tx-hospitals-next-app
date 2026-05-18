import React from 'react';
import { motion } from 'framer-motion';

const KachigudaTrustBar = () => {
    const highlights = [
        { emoji: "🏅", text: "NABH Accredited Hospital" },
        { emoji: "⭐", text: "4.8 Google Rating (500+ reviews)" },
        { emoji: "🕒", text: "24/7 Emergency Services" },
        { emoji: "🩺", text: "50+ Senior Specialists" },
        { emoji: "🌐", text: "International Patient Services" }
    ];

    return (
        <section className="bg-white border-y border-gray-100 py-2.5 md:py-3.5 px-0.5 sm:px-2 md:px-4 relative z-20 shadow-sm overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-row flex-nowrap items-center justify-between divide-x divide-gray-150">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="flex items-center justify-center gap-0.5 sm:gap-1 px-0.5 sm:px-1.5 md:px-3 w-full"
                        >
                            <span className="text-[10px] sm:text-sm md:text-lg filter drop-shadow-sm select-none shrink-0">
                                {item.emoji}
                            </span>
                            <span className="text-[5.5px] min-[360px]:text-[6.5px] min-[390px]:text-[7.2px] min-[410px]:text-[7.8px] sm:text-[9.5px] md:text-[10px] lg:text-[11.5px] xl:text-[12.5px] font-semibold text-[#334155] er min-[360px]: sm:tracking-normal uppercase whitespace-nowrap">
                                {item.text}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KachigudaTrustBar;
