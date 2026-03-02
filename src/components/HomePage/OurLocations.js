"use client";
import Image from "next/image";
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
    const router = useRouter();

    // Use pure CSS media queries (lg:hidden, hidden lg:block) for the switch.
    // This avoids hydration flickers and is best practice for Next.js responsiveness.
    return (
        <section className="relative overflow-hidden w-full">
            {/* Mobile View (sm and md) */}
            <div className="lg:hidden bg-pink-700 py-10 px-4">
                <div className="text-center relative z-10 mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">Our Locations</h2>
                    <p className="text-white/90 text-sm">
                        Find Hospital Near You
                    </p>
                </div>

                <div className="relative z-10 min-h-[300px]">
                    <LocationsCarousel locations={locations} />
                </div>
            </div>

            {/* Desktop / Tablet View (lg and up) */}
            <div className="hidden lg:block relative w-full min-h-[500px]">
                {/* Decorative Pink Background */}
                <div className="absolute left-0 top-0 bottom-0 w-[70%] xl:w-[80%] bg-pink-700 rounded-tr-[50px]" />

                <div className="flex lg:flex-row items-center justify-between mx-auto relative max-w-7xl px-8 xl:px-16 py-16 gap-10">
                    {/* Heading + Image Column */}
                    <div className="flex flex-col items-center gap-10 relative z-10 w-full lg:w-1/3">
                        <div className="text-left w-full translate-y-[-20px]">
                            <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                                Our Locations
                            </h2>
                            <p className="text-white text-lg xl:text-xl mt-4 opacity-90 max-w-[280px]">
                                Find Hospital Near You
                            </p>
                        </div>
                        <div className="w-full max-w-[320px] xl:max-w-md mt-4">
                            <Image
                                src="/assets/Our Location/Hospitals Image.png"
                                width={400}
                                height={600}
                                alt="Hospitals"
                                className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition duration-500"
                            />
                        </div>
                    </div>

                    {/* Locations Grid: Structured layout of 5 cards */}
                    <div className="flex flex-col gap-8 relative z-10 w-full lg:w-2/3">
                        {/* Top Row: 2 Cards */}
                        <div className="flex gap-6 justify-center xl:justify-start xl:ml-10">
                            {locations.slice(0, 2).map((loc, i) => (
                                <LocationCard key={i} loc={loc} router={router} />
                            ))}
                        </div>
                        {/* Bottom Row: 3 Cards */}
                        <div className="flex gap-6 justify-center xl:justify-start">
                            {locations.slice(2).map((loc, i) => (
                                <LocationCard key={i + 2} loc={loc} router={router} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-component for Location Card to avoid repetition and improve readability
function LocationCard({ loc, router }) {
    return (
        <div
            onClick={() => router.push(loc?.path)}
            className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[190px] xl:max-w-[210px] transition duration-300 hover:scale-[1.05] hover:shadow-2xl cursor-pointer group"
        >
            <div className="w-full h-40 xl:h-48 relative overflow-hidden">
                <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-sm xl:text-base font-bold text-gray-800 leading-tight mb-3 line-clamp-2 h-10 xl:h-12">
                    {loc.name}
                </h3>
                <div className="flex items-center">
                    <Image
                        src="/assets/Our Location/Google icon.png"
                        alt="Google"
                        width={18}
                        height={18}
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                        {loc.rating}
                    </span>
                    <div className="ml-2 flex gap-0.5">
                        {Array(5)
                            .fill()
                            .map((_, index) => (
                                <Image
                                    key={index}
                                    src="/assets/Our Location/Start icon.png"
                                    alt="Star"
                                    width={14}
                                    height={14}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

