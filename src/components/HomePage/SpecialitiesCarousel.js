"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/router";

export default function SpecialitiesCarousel({ specialities }) {
    const router = useRouter();
    const [current, setCurrent] = useState(0);
    const length = specialities.length;

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
        <div className="relative w-full overflow-hidden pt-12">
            {/* Slides Wrapper */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}
            >
                {specialities.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center">
                        <div className="relative bg-white border border-gray-300 shadow-md rounded-lg overflow-visible w-[250px] text-center pt-24 mb-8">
                            {/* Image */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-xs mt-2 leading-snug">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center pb-4">
                                <button
                                    className="flex items-center justify-center w-7 h-7 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md"
                                    onClick={() => handleNavigate(item.path)}
                                >
                                    <FiChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="-mt-4 absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md hover:bg-pink-100"
            >
                <FiChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="-mt-4 absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md hover:bg-pink-100"
            >
                <FiChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2">
                {specialities.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full ${current === index ? "bg-pink-700" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
