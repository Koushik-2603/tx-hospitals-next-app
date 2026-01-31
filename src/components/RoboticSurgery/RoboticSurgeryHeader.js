"use client";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile";
import DOMPurify from "dompurify";
// No imports needed for image icons

const RoboticSurgeryHeader = ({ data, onBookNow }) => {
    const isMobile = useIsMobile();

    if (!data) return null;

    const { rsTitle, rsDescription, rsImage } = data;

    return (
        <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden flex items-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${rsImage})` }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent md:from-white/80 md:via-white/40 md:to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
                <div className="max-w-xl">
                    <h1 className="text-2xl md:text-5xl font-bold text-pink-700 mb-4 leading-tight">
                        {rsTitle}
                    </h1>

                    <div
                        className="text-gray-800 text-sm md:text-lg mb-8 leading-relaxed font-medium"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(rsDescription)
                        }}
                    />

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onBookNow}
                            className="flex items-center justify-center gap-3 bg-pink-700 hover:bg-pink-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:-translate-y-1 group"
                        >
                            <div className="p-2 transition-colors">
                                <img
                                    src="/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp"
                                    alt="Calendar"
                                    className="w-6 h-6 object-contain brightness-0 invert"
                                />
                            </div>
                            Book Consultation
                        </button>

                        <a
                            href="tel:9144514459"
                            className="flex items-center justify-center gap-3 bg-white border-2 border-pink-700 text-pink-700 hover:bg-pink-50 px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-md transform hover:-translate-y-1 group"
                        >
                            <div className="p-2 rounded-lg transition-colors">
                                <img
                                    src="/assets/surgeries/live-transplant/Call Icon 3.webp"
                                    alt="Phone"
                                    className="w-5 h-5 object-contain"
                                />
                            </div>
                            Call 9144 51 4459
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoboticSurgeryHeader;
