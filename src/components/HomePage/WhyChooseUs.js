"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

// Reusable hook
const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let observer;
        let started = false;

        const handleIntersect = (entries) => {
            if (entries[0].isIntersecting && !started) {
                started = true;
                let start = 0;
                const increment = end / (duration / 16);
                const counter = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        clearInterval(counter);
                        setCount(end);
                        setDone(true);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 16);
            }
        };

        if (ref.current) {
            observer = new IntersectionObserver(handleIntersect, { threshold: 0.3 });
            observer.observe(ref.current);
        }

        return () => {
            if (observer && ref.current) observer.unobserve(ref.current);
        };
    }, [end, duration]);

    return [count, done, ref];
};

const formatNumber = (num, suffix) => {
    if (num >= 1000) {
        return Math.floor(num / 1000) + "K" + (suffix.includes("+") ? "+" : "");
    }
    return num + suffix;
};

const stats = [
    { number: 4, suffix: "", title: "Locations", desc: "Delivering advanced, accessible care across Hyderabad.", icon: "/assets/WhyChooseUs/Location icon.png" },
    { number: 500, suffix: "+", title: "Beds", desc: "Modern facilities designed for comprehensive treatment.", icon: "/assets/WhyChooseUs/Bed.png" },
    { number: 100000, suffix: "+", title: "Happy Patients", desc: "A legacy of trust, healing and personalized care for patients and families.", icon: "/assets/WhyChooseUs/Happy Patient Icon.png" },
    { number: 30000, suffix: "+", title: "Successful Surgeries", desc: "Expertise in complex, robotic and minimally invasive procedures.", icon: "/assets/WhyChooseUs/Surgery Icon.png" },
    { number: 5000, suffix: "+", title: "International Patients", desc: "A trusted destination for patients from around the world.", icon: "/assets/WhyChooseUs/International Patinet icon.png" },
    { number: 200, suffix: "+", title: "Doctors", desc: "Experienced doctors dedicated to personalized and expert care.", icon: "/assets/WhyChooseUs/Docotor Icon.png" },
];

function StatCard({ item }) {

    const isMobile = useIsMobile();
    const [count, done, ref] = useCountUp(item.number, 2000);

    return (
        <>
            {isMobile ? (
                <div
                    ref={ref}
                    className="bg-white text-gray-800 rounded-xl shadow-md p-2 hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-pink-700">
                            {done ? formatNumber(item.number, item.suffix) : count.toLocaleString()}
                        </h3>
                        <div className="flex-shrink-0">
                            <Image src={item.icon} alt={item.title} width={30} height={30} className="object-contain" />
                        </div>
                    </div>
                    <div className="text-left">
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="text-[10px] text-gray-600 mt-1">{item.desc}</p>
                    </div>
                </div>
            ) : (
                <div
                    ref={ref}
                    className="bg-white text-gray-800 rounded-2xl shadow-md p-4 flex justify-between items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                    <div className="text-left">
                        <h3 className="text-3xl font-bold text-pink-700">
                            {done ? formatNumber(item.number, item.suffix) : count.toLocaleString()}
                        </h3>
                        <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        <Image src={item.icon} alt={item.title} width={70} height={70} className="object-contain" />
                    </div>
                </div>
            )}
        </>
    );
}

export default function WhyChooseUs() {
    const isMobile = useIsMobile();

    if (isMobile === null) return null;

    return (
        <>
            {isMobile ? (
                <section
                    className="relative text-white py-4 px-2 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/WhyChooseUs/BG.png')" }}
                    id="why-choose-us"
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Us?</h2>
                        <p className="text-xs leading-relaxed mb-6 text-gray-100">
                            At TX Hospitals, we are redefining healthcare by combining clinical excellence, advanced technology and patient-first values.
                            With a strong presence across Hyderabad, we have become one of the most trusted names for holistic, world-class healthcare.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((item, index) => (
                                <StatCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <section
                    className="relative text-white py-16 px-6 bg-cover bg-center"
                    style={{ backgroundImage: "url('/assets/WhyChooseUs/BG.png')" }}
                    id="why-choose-us"
                >
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-100">
                            At TX Hospitals, we are redefining healthcare by combining clinical excellence, advanced technology and patient-first values.
                            With a strong presence across Hyderabad, we have become one of the most trusted names for holistic, world-class healthcare.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {stats.map((item, index) => (
                                <StatCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
