import React from "react";
import sanitize from "@/utils/sanitize";
import { FaShieldAlt } from "react-icons/fa";

const DTHeroSection = ({ dtTitle, dtdescription, onSchedule, onLearnMore }) => {
    return (
        <div className="w-full lg:w-3/5">
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                <FaShieldAlt className="text-base" />
                <span>Trusted by 50,000+ Patients</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold text-pink-700 mb-6 leading-tight">
                {dtTitle}
            </h1>

            {/* Description */}
            {dtdescription && (
                <div
                    className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 space-y-4"
                    dangerouslySetInnerHTML={{
                        __html: sanitize(dtdescription),
                    }}
                />
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
                <button
                    onClick={onSchedule}
                    className="bg-[#C23358] hover:bg-pink-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition transform active:scale-95"
                >
                    Schedule for Appointment
                </button>
                <button
                    onClick={onLearnMore}
                    className="border-2 border-[#C23358] text-[#C23358] hover:bg-pink-50 font-semibold px-6 py-3 rounded-lg transition transform active:scale-95"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default DTHeroSection;
