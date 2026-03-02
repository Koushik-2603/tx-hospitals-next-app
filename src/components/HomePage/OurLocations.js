"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import LocationsCarousel from "@/components/HomePage/LocationsCarousel";
import { useRouter } from "next/router";

const locations = [
    {
        name: "TX Hospitals, Uppal",
        image: "/assets/Our Location/Uppal Location Image.png",
        rating: 4.8,
        path: "/contact-us/uppal/"
    },
    {
        name: "TX Hospitals, Kachiguda",
        image: "/assets/Our Location/Kachiguda Image.png",
        rating: 4.8,
        path: "/contact-us/kachiguda/"
    },
    {
        name: "TX Hospitals, Banjara Hills",
        image: "/assets/Our Location/Banjara Hills  Hospitals Image.png",
        rating: 4.9,
        path: "/contact-us/banjara-hills1/"
    },
    {
        name: "TX Children Hospitals, Banjara Hills",
        image: "/assets/Our Location/Banjara Hills Children Image.png",
        rating: 4.8,
        path: "/contact-us/banjara-hills2/"
    },
    {
        name: "TX Hospitals, Miyapur",
        image: "/assets/ContactUs/TX Hospitals Miyapur.webp",
        rating: 4.8,
        path: "/contact-us/miyapur/"
    },
];

export default function OurLocations() {

    const isMobile = useIsMobile();
    const router = useRouter();

    return (
        <>
            {isMobile ? (
                <section className="relative bg-pink-700 py-6">
                    <div className="text-center relative z-10 mb-4 px-4">
                        <h2 className="text-2xl font-bold text-white mb-1">Our Locations</h2>
                        <p className="text-white/90 text-sm">
                            Find Hospital Near You
                        </p>
                    </div>

                    <div className="relative z-10">
                        <LocationsCarousel locations={locations} />
                    </div>
                </section>
            ) : (
                <section className="relative">
                    {/* Pink Background instead of image */}
                    <div className="absolute left-0 top-0 bottom-0 w-[85%] bg-pink-700 rounded-tr-3xl" />

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

                        {/* Locations Content: 2 over 3 Layout */}
                        <div className="flex flex-col gap-6 relative z-10">
                            {/* Top Row: 2 Cards */}
                            <div className="flex gap-6 justify-center">
                                {locations.slice(0, 2).map((loc, i) => (
                                    <div
                                        key={i}
                                        onClick={() => router.push(loc?.path)}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden w-48 transition hover:scale-[1.02] cursor-pointer"
                                    >
                                        <div className="w-full h-40 relative">
                                            <Image
                                                src={loc.image}
                                                alt={loc.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-3">
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
                                                        .map((_, index) => (
                                                            <Image
                                                                key={index}
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
                                ))}
                            </div>
                            {/* Bottom Row: 3 Cards */}
                            <div className="flex gap-6 justify-center">
                                {locations.slice(2).map((loc, i) => (
                                    <div
                                        key={i + 2}
                                        onClick={() => router.push(loc?.path)}
                                        className="bg-white rounded-xl shadow-lg overflow-hidden w-48 transition hover:scale-[1.02] cursor-pointer"
                                    >
                                        <div className="w-full h-40 relative">
                                            <Image
                                                src={loc.image}
                                                alt={loc.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-3">
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
                                                        .map((_, index) => (
                                                            <Image
                                                                key={index}
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
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
