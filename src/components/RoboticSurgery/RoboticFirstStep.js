"use client";
import React from "react";
import DOMPurify from "dompurify";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const RoboticFirstStep = ({ data, onBookNow }) => {
    if (!data || data.length === 0) return null;

    const { heading, description } = data[0];

    return (
        <section className="py-8 px-6 md:px-12 font-inter bg-white">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-[#b02a44] rounded-[3rem] p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full border-[20px] border-white"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full border-[20px] border-white"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                            {heading}
                        </h2>
                        <div
                            className="text-pink-50 text-base md:text-lg max-w-4xl mx-auto mb-8 opacity-90 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                        />

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <button
                                onClick={onBookNow}
                                className="flex items-center gap-3 bg-white text-[#b02a44] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-pink-50 hover:scale-105 shadow-lg group"
                            >
                                <img src="/assets/surgeries/robotic-sciences/Book Consultation Icon1.webp" alt="Book" className="w-7 h-7 object-contain" />
                                <span>Book Consultation</span>
                            </button>

                            <a
                                href="tel:9144514459"
                                className="flex items-center gap-3 bg-white text-[#b02a44] px-8 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-pink-50 hover:scale-105 shadow-lg"
                            >
                                <img src="/assets/surgeries/live-transplant/Call Icon 3.webp" alt="Call" className="w-6 h-6 object-contain" />
                                <span>Call 9144 51 4459</span>
                            </a>
                        </div>

                        {/* Locations */}
                        <div className="flex items-center justify-center gap-2 text-white/90 font-bold text-lg">
                            <img src="/assets/Doctors/Location Icon.webp" alt="Location" className="w-5 h-7 object-contain brightness-0 invert" />
                            <span>Banjara Hills, Kachiguda, Uppal</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoboticFirstStep;
