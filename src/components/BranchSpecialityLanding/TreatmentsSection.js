import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TreatmentsSection = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    if (!data || !data.list || data.list.length === 0) return null;

    // Determine how many items to show initially
    const initialCount = 12;
    const hasMore = data.list.length > initialCount;
    const visibleList = showAll ? data.list : data.list.slice(0, initialCount);

    return (
        <section className="py-8 md:py-10 bg-[#fcf5f7]" >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center space-y-3 mb-10 max-w-4xl mx-auto">
                    {data.title && (
                        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#b62551] leading-snug">
                            {data.title}
                        </h2>
                    )}
                    {data.subtitle && (
                        <p className="text-[#b62551] text-base md:text-lg font-medium tracking-wide">
                            {data.subtitle}
                        </p>
                    )}
                    {data.description && (
                        <div
                            className="text-gray-700 text-sm md:text-[15px] leading-relaxed mt-4 font-normal"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        />
                    )}
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {visibleList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-default"
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-[#b62551] flex-shrink-0"></div>
                                <span className="text-[14px] md:text-[15px] font-medium text-[#2d2d2d] leading-tight">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                {hasMore && (
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="bg-[#b62551] hover:bg-[#8f1d3f] text-white font-medium py-3 px-10 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg rounded tracking-wide text-[15px]"
                        >
                            {showAll ? 'View Less' : 'View All'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TreatmentsSection;
