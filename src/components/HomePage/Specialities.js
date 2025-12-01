// components/Specialities.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import SpecialitiesCarousel from "@/components/HomePage/SpecialitiesCarousel";

const specialities = [
    {
        title: "Cardiac Sciences",
        desc: "Advanced heart care with modern diagnostics and minimally invasive treatments.",
        img: "/assets/specialities/Cardiac Image.png",
        path: "/specialities/cardiac-sciences"
    },
    {
        title: "Gastro Sciences",
        desc: "Complete digestive and liver care with endoscopy and advanced surgery.",
        img: "/assets/specialities/Gastro Image.png",
        path: "/specialities/gastro-sciences"
    },
    {
        title: "Ortho Sciences",
        desc: "Expert bone, joint and spine solutions with surgical and rehab support.",
        img: "/assets/specialities/Orthopediac image.png",
        path: "/specialities/orthopaedics"
    },
    {
        title: "Nephrology",
        desc: "Expert treatment for kidney diseases, dialysis and renal transplants.",
        img: "/assets/specialities/Urology Image.png",
        path: "/specialities/nephrology"
    },
];

export default function Specialities() {

    const router = useRouter();
    const isMobile = useIsMobile();

    const handleViewMore = () => {
        router.push("/specialities");
    };

    const handleNavigate = (path) => {
        router.push(path);
    };

    return (
        <>
            {isMobile ? (
                <div className="bg-gray-50 w-full px-3">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-pink-700 mb-1">Our Specialities</h2>
                        <p className="text-xs leading-relaxed mb-3 text-gray-700">
                            At TX Hospitals, we bring together medical expertise, modern technology and patient-first care under one roof. Our Centres of Excellence are dedicated to delivering comprehensive treatment across major specialties, ensuring every patient receives the best possible outcome.
                        </p>

                        <SpecialitiesCarousel specialities={specialities} />

                        {/* Show More / Show Less */}
                        <div className="mt-2">
                            <button
                                onClick={handleViewMore}
                                className="text-pink-700 font-semibold underline hover:underline"
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-50 w-full py-3 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Heading */}
                        <h2 className="text-3xl font-bold text-pink-700 mb-5">Our Specialities</h2>
                        <p className="text-lg max-w-3xl mx-auto mb-6 text-gray-700">
                            At TX Hospitals, we bring together medical expertise, modern technology and patient-first care under one roof. Our Centres of Excellence are dedicated to delivering comprehensive treatment across major specialties, ensuring every patient receives the best possible outcome.
                        </p>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-4 gap-6 pt-12">
                            {specialities.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white border border-gray-400 shadow-md rounded-2xl overflow-visible w-[250px] text-center mx-auto pt-24"
                                >
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-xl overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2 leading-snug">{item.desc}</p>
                                    </div>

                                    <div className="flex justify-center pb-4">
                                        <button
                                            className="flex items-center justify-center w-7 h-7 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md"
                                            onClick={() => handleNavigate(item.path)}
                                        >
                                            <FiChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show More / Show Less */}
                        <div className="mt-8">
                            <button
                                onClick={handleViewMore}
                                className="text-pink-700 font-semibold underline hover:underline"
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
