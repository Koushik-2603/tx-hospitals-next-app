import React, { useState } from 'react';
import { CircleCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ConditionsTreatedSection = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    if (!data) return null;

    const initialCount = 12;
    const hasMore = data.list && data.list.length > initialCount;
    const visibleList = data.list ? (showAll ? data.list : data.list.slice(0, initialCount)) : [];

    const renderTitle = (title) => {
        if (!title) return null;
        const splitIndex = title.lastIndexOf("Conditions We Treat");
        if (splitIndex !== -1) {
            const firstPart = title.substring(0, splitIndex);
            const secondPart = title.substring(splitIndex);
            return (
                <>
                    {firstPart}
                    <span className="text-[#bd385c]">{secondPart}</span>
                </>
            );
        }

        // Fallback: try highlighting last 3 words
        const words = title.split(' ');
        if (words.length > 3) {
            const firstPart = words.slice(0, words.length - 3).join(' ');
            const secondPart = words.slice(words.length - 3).join(' ');
            return (
                <>
                    {firstPart} <span className="text-[#bd385c]">{secondPart}</span>
                </>
            );
        }

        return title;
    };

    return (
        <section className="py-8 md:py-10 bg-white" style={{  }}>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">

                    {/* Left side Image */}
                    {data.image && (
                        <div className="w-full lg:w-[45%] flex-shrink-0">
                            <img
                                src={data.image}
                                alt="Conditions Treated"
                                className="w-full h-auto rounded-3xl shadow-sm object-cover"
                            />
                        </div>
                    )}

                    {/* Right side Content */}
                    <div className="w-full lg:w-[55%] flex flex-col justify-center">
                        {data.title && (
                            <h2 className="text-[26px] md:text-[32px] font-bold text-[#1e1e1e] leading-snug mb-4">
                                {renderTitle(data.title)}
                            </h2>
                        )}

                        {data.description && (
                            <div
                                className="text-[#1e1e1e] text-[15px] leading-relaxed mb-6 conditions-desc"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                        )}

                        {visibleList.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-6">
                                <AnimatePresence>
                                    {visibleList.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.2, delay: index * 0.03 }}
                                            className="flex items-start gap-2.5"
                                        >
                                            <CircleCheck className="w-[18px] h-[18px] text-[#bd385c] mt-0.5 flex-shrink-0" strokeWidth={2} />
                                            <span className="text-[14px] md:text-[15px] text-[#1e1e1e] font-normal leading-snug">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}

                        {hasMore && (
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-[#bd385c] font-medium text-[14px] md:text-[15px] flex items-center justify-start w-fit group"
                            >
                                {showAll ? 'View Less' : 'View All'}
                                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConditionsTreatedSection;
