"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/router";

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
        <div className="relative w-full overflow-hidden pt-4">
            {/* Slides Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}
            >
                {locations.map((loc, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center px-4">
                        <div
                            onClick={() => handleNavigate(loc?.path)}
                            className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-[230px] transition hover:scale-[1.02] cursor-pointer"
                        >
                            <div className="w-full h-40 relative">
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-3 text-left">
                                <h3 className="text-sm font-semibold text-gray-800 leading-tight mb-2">
                                    {loc.name}
                                </h3>
                                <div className="flex items-center">
                                    <Image
                                        src="/assets/Our Location/Google icon.png"
                                        alt="Google"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-2 text-xs text-gray-700">
                                        {loc.rating}
                                    </span>
                                    <div className="ml-1 flex">
                                        {Array(5)
                                            .fill()
                                            .map((_, i) => (
                                                <Image
                                                    key={i}
                                                    src="/assets/Our Location/Start icon.png"
                                                    alt="Star"
                                                    width={12}
                                                    height={12}
                                                />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 text-pink-700 p-2 rounded-full shadow-md hover:bg-white z-20"
            >
                <FiChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 text-pink-700 p-2 rounded-full shadow-md hover:bg-white z-20"
            >
                <FiChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {locations.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full transition-all ${current === index ? "bg-white w-4" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
