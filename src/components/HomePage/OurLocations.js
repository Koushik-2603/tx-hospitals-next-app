"use client";
import Image from "next/image";
import LocationsCarousel from "@/components/HomePage/LocationsCarousel";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Star, MapPin, ChevronRight } from "lucide-react";

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

    return (
        <section className="relative overflow-hidden w-full">
            {/* Mobile View (sm and md) */}
            <div className="lg:hidden bg-pink-700 py-8 px-4">
                <div className="text-center relative z-10 mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2 ">
                        Our Locations
                    </h2>
                    <p className="text-white/90 text-sm font-medium">
                        Find Hospital Near You
                    </p>
                </div>

                <div className="relative z-10 min-h-[300px]">
                    <LocationsCarousel locations={locations} />
                </div>
            </div>

            {/* Desktop / Tablet View (lg and up) */}
            <div className="hidden lg:block relative w-full min-h-[500px]">
                {/* Decorative Original Pink Background */}
                <div className="absolute left-0 top-0 bottom-0 w-[70%] xl:w-[80%] bg-pink-700 rounded-tr-[50px] shadow-lg" />

                <div className="flex lg:flex-row items-center justify-between mx-auto relative max-w-7xl px-8 xl:px-16 py-10 gap-10">
                    {/* Heading + Image Column (Original Alignment) */}
                    <div className="flex flex-col items-start gap-10 relative z-10 w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-left w-full translate-y-[-20px]"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/30">
                                Trusted Network
                            </span>
                            <h2 className="text-5xl xl:text-6xl font-extrabold text-white leading-tight ">
                                Our <br /> <span className="text-pink-100">Locations</span>
                            </h2>
                            <p className="text-white text-lg xl:text-xl mt-6 opacity-90 max-w-[280px] font-medium leading-relaxed">
                                Find the world-class hospital nearest to you.
                            </p>
                        </motion.div>
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
                                <LocationItem key={i} loc={loc} i={i} router={router} />
                            ))}
                        </div>
                        {/* Bottom Row: 3 Cards */}
                        <div className="flex gap-6 justify-center xl:justify-start">
                            {locations.slice(2).map((loc, i) => (
                                <LocationItem key={i + 2} loc={loc} i={i + 2} router={router} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function LocationItem({ loc, i, router }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.03 * i }}
            viewport={{ once: true }}
            onClick={() => router.push(loc?.path)}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[190px] xl:max-w-[210px] transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl cursor-pointer border border-transparent hover:border-pink-200"
        >
            {/* Image Section */}
            <div className="w-full h-40 xl:h-48 relative overflow-hidden">
                <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Visual indicator on hover */}
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-pink-600" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4">
                <h3 className="text-sm xl:text-base font-bold text-gray-800 leading-tight mb-3 line-clamp-2 h-10 xl:h-12 group-hover:text-pink-700 transition-colors">
                    {loc.name}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold text-gray-700">
                            {loc.rating}
                        </span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                        <ChevronRight className="w-4 h-4 text-pink-600 group-hover:text-white" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

