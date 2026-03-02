import React from "react";
import DOMPurify from "dompurify";
import { FaShieldAlt } from "react-icons/fa";

const ProcedureHeroSection = ({ pHeroSection }) => {
    return (
        <div className="w-full lg:w-3/5">
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-lg text-sm font-medium mb-6">
                <FaShieldAlt className="text-base" />
                <span>Trusted by 50,000+ Patients</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold text-pink-700 mb-6 leading-tight">
                {pHeroSection.heading}
            </h1>

            {/* Description */}
            <div
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 space-y-4"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(pHeroSection.description)
                }}
            />

            {/* Icons Section */}
            {pHeroSection.icons && pHeroSection.icons.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pHeroSection.icons.map((icon, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-pink-50 rounded-full text-pink-600 overflow-hidden">
                                {icon.image ? (
                                    <img src={icon.image} alt={icon.name} className="w-full h-full object-cover" />
                                ) : (
                                    // Default icon
                                    <FaShieldAlt size={20} />
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm">{icon.name}</h3>
                                {icon.description && <p className="text-xs text-gray-500">{icon.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProcedureHeroSection;
