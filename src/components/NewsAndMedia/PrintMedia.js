import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

const PrintMedia = () => {

    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const printMediaImages = [
        "/assets/NewsAndMedia/PrintMedia/1.jpeg",
        "/assets/NewsAndMedia/PrintMedia/2.jpeg",
        "/assets/NewsAndMedia/PrintMedia/3.jpeg"
    ];

    return (
        <div className="p-2 md:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4">
                {printMediaImages.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl shadow-sm border border-gray-200 group">
                        <img 
                            loading="lazy" 
                            src={src}
                            alt={`PrintMedia ${index + 1}`}
                            className="w-full h-auto min-h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-8">
                <button
                    onClick={() => router.push('/print-media-all')}
                    className="flex items-center gap-2 text-pink-700 font-semibold hover:text-pink-800 transition group"
                >
                    View All <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default PrintMedia;
