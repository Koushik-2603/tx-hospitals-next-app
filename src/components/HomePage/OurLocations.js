"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const locations = [
    {
        name: "TX Hospitals, Uppal",
        image: "/assets/Our Location/Uppal Location Image.png",
        rating: 4.8,
    },
    {
        name: "TX Hospitals, Kachiguda",
        image: "/assets/Our Location/Kachiguda Image.png",
        rating: 4.8,
    },
    {
        name: "TX Hospitals, Banjara Hills",
        image: "/assets/Our Location/Banjara Hills  Hospitals Image.png",
        rating: 4.9,
    },
    {
        name: "TX Children Hospitals, Banjara Hills",
        image: "/assets/Our Location/Banjara Hills Children Image.png",
        rating: 4.8,
    },
];

export default function OurLocations() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <section className="relative bg-pink-700 py-2">
                    <div className="text-center relative z-10">
                        <h2 className="text-xl font-bold text-white">Our Locations</h2>
                        <p className="text-white text-base">
                            Find Hospital Near You
                        </p>
                    </div>
                    <div className="px-2 mt-2">
                        {/* Grid Cards */}
                        <div className="grid grid-cols-2 gap-4 justify-center relative z-10">
                            {locations.map((loc, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden w-full transition hover:scale-[1.02]"
                                >
                                    <div className="w-full h-28 relative">
                                        <Image
                                            src={loc.image}
                                            alt={loc.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-1">
                                        <h3 className="text-xs font-semibold text-gray-800">
                                            {loc.name}
                                        </h3>
                                        <div className="flex items-center mt-1">
                                            <Image
                                                src="/assets/Our Location/Google icon.png"
                                                alt="Google"
                                                width={18}
                                                height={18}
                                            />
                                            <span className="ml-2 text-xs text-gray-700">
                                                {loc.rating}
                                            </span>
                                            <div className="ml-2 flex">
                                                {Array(5)
                                                    .fill()
                                                    .map((_, index) => (
                                                        <Image
                                                            key={index}
                                                            src="/assets/Our Location/Start icon.png"
                                                            alt="Star"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="relative">
                    {/* Pink Background instead of image */}
                    <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-pink-700 rounded-tr-3xl" />

                    <div className="flex items-center justify-between mx-auto relative max-w-6xl px-16">
                        {/* Heading + Image */}
                        <div className="flex flex-col items-center gap-12 mt-12 mb-auto relative z-10">
                            <div className="text-left mb-12">
                                <h2 className="text-3xl font-bold text-white">
                                    Our Locations
                                </h2>
                                <p className="text-white text-lg mt-2">
                                    Find Hospital Near You
                                </p>
                            </div>
                            <div className="w-full max-w-lg">
                                <Image
                                    src="/assets/Our Location/Hospitals Image.png"
                                    width={300}
                                    height={500}
                                    alt="Hospitals"
                                    className="mx-auto"
                                />
                            </div>
                        </div>

                        {/* Grid Cards */}
                        <div className="grid grid-cols-2 gap-8 relative z-10">
                            {locations.map((loc, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden w-52 m-3 transition hover:scale-[1.02]"
                                >
                                    <div className="w-full h-44 relative">
                                        <Image
                                            src={loc.image}
                                            alt={loc.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-2">
                                        <h3 className="text-base font-semibold text-gray-800">
                                            {loc.name}
                                        </h3>
                                        <div className="flex items-center">
                                            <Image
                                                src="/assets/Our Location/Google icon.png"
                                                alt="Google"
                                                width={18}
                                                height={18}
                                            />
                                            <span className="ml-2 text-sm text-gray-700">
                                                {loc.rating}
                                            </span>
                                            <div className="ml-2 flex">
                                                {Array(5)
                                                    .fill()
                                                    .map((_, index) => (
                                                        <Image
                                                            key={index}
                                                            src="/assets/Our Location/Start icon.png"
                                                            alt="Star"
                                                            width={16}
                                                            height={16}
                                                        />
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
