import React from 'react';
import { Award } from 'lucide-react';
import Link from 'next/link';

const DoctorCard = ({ 
    name, 
    specialty, 
    designation, 
    experience, 
    imageSrc, 
    profileLink = "#",
    onBookClick 
}) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
            {/* Image Section */}
            <div className="relative h-56 w-full bg-[#fdf5f8] overflow-hidden">
                {imageSrc ? (
                    <img 
                        src={imageSrc} 
                        alt={name} 
                        className="w-full h-full object-cover object-top scale-[1.02] transition-transform duration-500 group-hover:scale-[1.08]"
                    />
                ) : (
                    // Placeholder if no image is provided, matching the user's screenshot
                    <div className="w-full h-full flex items-center justify-center text-pink-200">
                        {/* You can put a default user icon here if desired */}
                    </div>
                )}
                
                {/* Specialty Badge */}
                <div className="absolute bottom-3 left-3 bg-pink-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                    {specialty}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-xs text-gray-500 mb-4 line-clamp-2 h-8">{designation}</p>

                <div className="flex items-center gap-1.5 text-pink-600 mb-6">
                    <Award size={14} className="fill-pink-100" />
                    <span className="text-xs font-bold">{experience} Years Experience</span>
                </div>

                <div className="mt-auto space-y-2">
                    <button 
                        onClick={onBookClick}
                        className="w-full bg-pink-700 hover:bg-pink-800 text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow-sm"
                    >
                        Book Appointment
                    </button>
                    <Link href={profileLink} className="block w-full text-center bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold py-2.5 rounded-lg text-xs transition-colors">
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
