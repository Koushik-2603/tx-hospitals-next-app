'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BannerSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Handle window resizing (safe for SSR)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const images = [
        '/assets/sliderImages/RoboticSurgery.jpg',
        '/assets/sliderImages/BannerRobotic.webp',
        '/assets/sliderImages/MultiSpecialityCare.jpg',
        '/assets/sliderImages/Sliders 1.png',
        '/assets/sliderImages/Sliders 2.png',
        '/assets/sliderImages/Sliders 3.png',
        '/assets/sliderImages/Sliders 4.png',
        '/assets/sliderImages/Sliders 5.png',
        '/assets/sliderImages/Sliders 6.png',
        '/assets/sliderImages/Oncology.jpg',
        '/assets/sliderImages/Orthopedics.jpg',
        '/assets/sliderImages/CardioSciences.jpg'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleCircleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative font-spectral w-full">
            {/* Desktop Slider */}
            {!isMobile && (
                <div className="relative w-full h-[420px] pt-2 overflow-hidden">
                    {/* Sliding wrapper */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="relative w-full h-[500px] flex-shrink-0">
                                <Image
                                    src={image}
                                    alt={`Banner ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleCircleClick(index)}
                                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeIndex === index
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'bg-white border-white hover:bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Mobile Slider */}
            {isMobile && (
                <>
                    <div className="w-full overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="relative w-full h-[90px] flex-shrink-0">
                                    <Image
                                        src={image}
                                        alt={`Banner ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleCircleClick(index)}
                                className={`w-1 h-1 rounded-full border-2 transition-all duration-300 ${activeIndex === index
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'bg-white border-white hover:bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default BannerSlider;
