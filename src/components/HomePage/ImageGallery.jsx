'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ImageGallery = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const images = [
        { src: '/assets/gallery/RequestAppointment.jpg', path: '/find-doctor/' },
        { src: '/assets/gallery/Find Your Doctors.png', path: '/find-doctor/' },
        { src: '/assets/gallery/BookHelathCheck.jpg', path: '/health-package' },
        { src: '/assets/gallery/SecondOpinion.jpg', path: '/surgery-care' },
        { src: '/assets/gallery/BookOnlineDoctorCosultation.jpg', path: '/book-online-consultation' },
        { src: '/assets/gallery/View Medical Report.png', path: '/view-medical-report' }
    ];

    return (
        <>
            {!isMobile && (
                <div className="font-spectral grid grid-cols-6 gap-4 p-4 w-full">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => router.push(image.path)}
                            className="w-full h-24 rounded-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={index === 0}
                                />
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {isMobile && (
                <div className="font-spectral grid grid-cols-2 gap-1 p-1.5 overflow-hidden">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => router.push(image.path)}
                            className="w-full h-10 rounded-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="50vw"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ImageGallery;
