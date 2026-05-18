"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView } from "framer-motion";

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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 160, damping: 14 }
    }
};

function StatCard({ item, index }) {
    const isMobile = useIsMobile();
    const [count, done, countRef] = useCountUp(item.number, 2000);

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`bg-white text-gray-800 rounded-2xl shadow-md p-4 flex justify-between items-center transition-shadow duration-300 hover:shadow-2xl ${isMobile ? 'p-3 rounded-xl' : ''}`}
        >
            <div className="text-left flex-1" ref={countRef}>
                <h3 className={`font-bold text-pink-700 ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                    {done ? formatNumber(item.number, item.suffix) : count.toLocaleString()}
                </h3>
                <h4 className={`font-semibold mt-1 ${isMobile ? 'text-sm' : 'text-lg'}`}>{item.title}</h4>
                <p className={`text-gray-600 mt-2 ${isMobile ? 'text-[10px] leading-tight' : 'text-sm'}`}>{item.desc}</p>
            </div>
            <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="ml-4 flex-shrink-0"
            >
                <Image
                    src={item.icon}
                    alt={item.title}
                    width={isMobile ? 40 : 70}
                    height={isMobile ? 40 : 70}
                    className="object-contain"
                />
            </motion.div>
        </motion.div>
    );
}

export default function WhyChooseUs() {
    const isMobile = useIsMobile();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    if (isMobile === null) return null;

    return (
        <section
            ref={sectionRef}
            className={`relative text-white py-10 px-6 bg-cover bg-center overflow-hidden ${isMobile ? 'py-8 px-4' : ''}`}
            style={{ backgroundImage: "url('/assets/WhyChooseUs/BG.png')" }}
            id="why-choose-us"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-pink-900/40 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-4 border border-white/30">
                        Our Commitment
                    </span>
                    <h2 className={`font-extrabold mb-4  ${isMobile ? 'text-4xl' : 'text-5xl'}`}>
                        Why Choose <span className="text-white relative">Us?
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/40 rounded-full"></span>
                        </span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`max-w-3xl mx-auto mb-16 text-white/90 font-medium leading-relaxed ${isMobile ? 'text-sm mb-10 px-2' : 'text-xl'}`}
                >
                    Redefining healthcare by combining clinical excellence, advanced technology and patient-first values. Trusted for holistic, world-class healthcare.
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className={`grid gap-6 ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
                >
                    {stats.map((item, index) => (
                        <StatCard key={index} item={item} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
