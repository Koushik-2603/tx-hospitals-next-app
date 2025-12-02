"use client";
import { useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function HPLandingPage() {

    const isMobile = useIsMobile();
    const [active, setActive] = useState("All Packages");

    const filters = [
        "All Packages",
        "Basic",
        "Comprehensive",
        "Executive",
        "Specialized",
    ];

    return (
        <>
            {isMobile ? (
                <></>
            ) : (
                <>
                    <section className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
                        <Image
                            src="/assets/HP/Health Packages _ Banner_.webp"
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="relative z-10 container mx-auto px-14 flex flex-row items-center justify-between gap-6">
                            {/* Left side text */}
                            <div className="text-white max-w-xl">
                                <h1 className="text-4xl font-bold mb-4 leading-snug">
                                    Health Checkup Packages
                                </h1>
                                <p className="text-lg mb-8 text-gray-200">
                                    Comprehensive health screening
                                    designed to suit your age, lifestyle,
                                    and health needs. Take the first step
                                    towards better health today
                                </p>
                            </div>

                            {/* Right side image */}
                            <div className="relative mt-12 w-[450px] h-[450px]">
                                <Image
                                    src="/assets/HP/Banner Image.webp"
                                    alt="Doctors Group"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </section>
                    <div className="w-full flex flex-wrap gap-4 justify-center mt-4">
                        {filters.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActive(item)}
                                className={`px-6 py-2 rounded-full border text-lg font-semibold transition-all
                                    ${active === item
                                        ? "bg-pink-700 text-white border-pink-700"
                                        : "bg-white text-bg-pink-700 border-pink-700"
                                    }
                                `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}