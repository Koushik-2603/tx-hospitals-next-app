import React from 'react';
import { Award, User } from 'lucide-react';
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
            <div className="relative h-48 sm:h-56 w-full bg-[#fdf5f8] overflow-hidden">
                {imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-pink-50">
                        <User size={48} className="text-pink-200" />
                    </div>
                )}

            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                    <span className="inline-block max-w-full bg-pink-700 text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-3 py-1 rounded-lg sm:rounded-full shadow-sm truncate">
                        {specialty}
                    </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">{name}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{designation}</p>

                <div className="flex items-start gap-1.5 text-pink-600 mb-6">
                    <Award size={14} className="fill-pink-100 mt-1 flex-shrink-0" />
                    <span className="text-sm font-bold leading-tight">
                        {experience ? experience.toString().replace(/years?|experience/gi, '').trim() : '0'} Years <br /> Experience
                    </span>
                </div>

                <div className="mt-auto space-y-2">
                    <button
                        onClick={onBookClick}
                        className="w-full bg-pink-700 hover:bg-pink-800 text-white font-bold py-2.5 rounded-lg text-sm transition-colors shadow-sm"
                    >
                        Book Appointment
                    </button>
                    <Link href={profileLink} className="block w-full text-center bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold py-2.5 rounded-lg text-sm transition-colors">
                        View Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
