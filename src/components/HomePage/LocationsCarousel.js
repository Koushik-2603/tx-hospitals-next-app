"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

export default function LocationsCarousel({ locations }) {
    const router = useRouter();
    const [current, setCurrent] = useState(0);
    const length = locations.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 5000);
        return () => clearInterval(timer);
    }, [length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    const handleNavigate = (path) => {
        router.push(path);
    };

    return (
        <div className="relative w-full overflow-hidden pt-6 pb-2">
            {/* Slides Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]"
                style={{
                    transform: `translateX(-${(current * 100) / length}%)`,
                    width: `${length * 100}%`
                }}
            >
                {locations.map((loc, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex justify-center px-6"
                        style={{ width: `${100 / length}%` }}
                    >
                        <div
                            onClick={() => handleNavigate(loc?.path)}
                            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-[280px] transition-all duration-300 transform active:scale-95 cursor-pointer border border-white/20"
                        >
                            <div className="w-full h-48 relative overflow-hidden">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg">
                                    <MapPin className="w-4 h-4 text-pink-600" />
                                </div>
                            </div>
                            
                            <div className="p-5 text-left bg-white">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-pink-600 mb-1 block">Hospital Location</span>
                                <h3 className="text-[15px] font-bold text-gray-900 leading-tight mb-3 line-clamp-2 h-10">
                                    {loc.name}
                                </h3>
                                
                                <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-50">
                                    <div className="flex items-center gap-1.5">
                                        <div className="bg-yellow-50 p-1 rounded-md">
                                            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        </div>
                                        <span className="text-sm font-bold text-gray-800">
                                            {loc.rating}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-1 text-pink-600 font-bold text-[11px] uppercase tracking-tight">
                                        Visit
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 bg-white/90 backdrop-blur-md text-pink-700 rounded-full shadow-lg flex items-center justify-center pointer-events-auto active:scale-90 transition-transform border border-pink-50"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 bg-white/90 backdrop-blur-md text-pink-700 rounded-full shadow-lg flex items-center justify-center pointer-events-auto active:scale-90 transition-transform border border-pink-50"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Premium Dots Pagination */}
            <div className="flex justify-center items-center gap-2.5 mt-8">
                {locations.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-500 rounded-full ${current === index 
                            ? "bg-white w-8 h-2.5 shadow-lg shadow-white/30" 
                            : "bg-white/40 w-2.5 h-2.5 hover:bg-white/60"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
