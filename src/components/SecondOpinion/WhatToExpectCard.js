"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

export default function WhatToExpectCard() {

    const isMobile = useIsMobile();

    const cards = [
        {
            title: "Comprehensive Review",
            description: "we carefully go through your medical records, test results and imaging.",
            img: "/assets/SO/image-1.webp"
        },
        {
            title: "Personalized Discussion",
            description: "Our experts take me to understand your symptoms, health goals and previous treatments.",
            img: "/assets/SO/image-2.webp"
        },
        {
            title: "Accurate Insights",
            description: "You’ll receive a clear explanation of your condition and all available treatment options.",
            img: "/assets/SO/image-3.webp"
        },
        {
            title: "Guided Next Steps",
            description: "we help you choose the safest, most effective plan for your recovery.",
            img: "/assets/SO/image-4.webp"
        }
    ];

    return (
        <>
            {isMobile ? (
                <div className="grid grid-cols-2 gap-5">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-400 shadow-lg rounded-2xl overflow-visible w-[140px] text-center mx-auto my-4 pt-12"
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-xl overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-2">
                                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 text-[10px] mt-2 leading-snug">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center">
                    {cards.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white border border-gray-400 shadow-lg rounded-2xl overflow-visible w-[250px] text-center mx-auto pt-24"
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
                                <p className="text-gray-600 text-sm mt-2 leading-snug">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
