"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DOMPurify from "dompurify";
import useIsMobile from "@/hooks/useIsMobile";

const RoboticSurgeons = ({ data, onBookNow }) => {
    if (!data || data.length === 0) return null;

    const { heading, description, doctors } = data[0];
    const scrollRef = useRef(null);
    const isMobile = useIsMobile();
    const [scrollAmount, setScrollAmount] = useState(0);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollWidth = container.offsetWidth;
            const newScrollAmount = direction === "left"
                ? container.scrollLeft - scrollWidth / (isMobile ? 1 : 3)
                : container.scrollLeft + scrollWidth / (isMobile ? 1 : 3);

            container.scrollTo({
                left: newScrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="bg-pink-800 py-10 px-6 md:px-6 font-inter text-white overflow-hidden">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        {heading}
                    </h2>
                    <div
                        className="text-pink-100 text-base md:text-lg max-w-4xl mx-auto opacity-90"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                    />
                </div>

                {/* Slider Container */}
                <div className="relative group px-12">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-pink-200 transition-colors"
                        aria-label="Previous"
                    >
                        <FaChevronLeft size={40} />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:text-pink-200 transition-colors"
                        aria-label="Next"
                    >
                        <FaChevronRight size={40} />
                    </button>

                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className="min-w-[100%] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.33%-16px)] snap-center bg-white rounded-3xl p-3 shadow-xl flex flex-col items-center text-center"
                            >
                                {/* Doctor Image with Frame */}
                                <div className="relative mb-4 p-2 rounded-2xl bg-white shadow-inner">
                                    <div className="relative w-40 h-40 mb-4 z-10">
                                        <img
                                            src={doctor?.image}
                                            alt={doctor?.name}
                                            className="relative z-10 w-56 rounded-sm object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-pink-700 mb-2 px-2">
                                    {doctor.name}
                                </h3>

                                {/* Info Table */}
                                <div className="w-full space-y-1 mb-4 text-left text-sm md:text-base">
                                    <div className="flex justify-between items-start gap-4">
                                        <span className="text-pink-700 font-bold whitespace-nowrap">Qualifications:</span>
                                        <span className="text-gray-800 text-right font-medium">{doctor.designation}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                        <span className="text-pink-700 font-bold">Experience:</span>
                                        <span className="text-gray-800 font-medium">{doctor.experience}</span>
                                    </div>
                                    <div className="flex justify-between items-center gap-4">
                                        <span className="text-pink-700 font-bold">Location:</span>
                                        <span className="text-gray-800 font-medium">{doctor.location}</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-auto grid grid-cols-2 gap-3 w-full">
                                    <button
                                        onClick={onBookNow}
                                        className="flex flex-col items-center justify-center bg-pink-700 hover:bg-pink-800 text-white px-2 py-2 rounded-xl transition-colors shadow-md group"
                                    >
                                        <div className="flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
                                            <img src="/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp" className="w-6 h-6 object-contain brightness-0 invert" alt="" />
                                            <span>Book An Appointment</span>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => window.open(doctor.url)}
                                        className="flex items-center justify-center bg-pink-700 hover:bg-pink-800 text-white py-2 rounded-xl font-bold text-sm transition-colors shadow-md"
                                    >
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoboticSurgeons;
