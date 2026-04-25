import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const CountUp = ({ from = 0, to, duration = 2.5, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [value, setValue] = useState(from);

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(val) {
                    setValue(Math.round(val));
                }
            });
            return () => controls.stop();
        }
    }, [inView, from, to, duration]);

    return <span ref={ref}>{value}{suffix}</span>;
};

const UppalStats = () => {
    const stats = [
        { number: 50, suffix: "+", label: "Expert Doctors" },
        { number: 13, suffix: "+", label: "Specialties" },
        { number: 100, suffix: "+", label: "Hospital Beds" },
        { number: 1, suffix: "L+", label: "Happy Patients" },
        { number: 30, suffix: "K+", label: "Surgeries Performed" }
    ];

    const branches = ["Uppal", "Banjara Hills", "Kacheguda", "Miyapur"];

    return (
        <section className="bg-pink-700 text-white py-16 px-6 md:px-10 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Top Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
                        Trusted by Thousands of<br />
                        Families Across Hyderabad
                    </h2>
                    <p className="text-base md:text-lg max-w-md text-pink-100 md:text-right font-medium">
                        Numbers that reflect the care, commitment, and confidence patients place in TX Hospitals, every single day.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="bg-white/10 rounded-2xl p-6 md:p-8 mb-6 shadow-inner">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center pt-4 md:pt-0">
                                <h3 className="text-4xl md:text-5xl font-bold mb-2">
                                    <CountUp from={0} to={stat.number} suffix={stat.suffix} />
                                </h3>
                                <p className="text-xs md:text-sm font-medium text-pink-100 tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Branches Row */}
                <div className="bg-white/10 rounded-2xl p-4 md:p-6 shadow-inner flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <span className="text-sm font-bold tracking-widest uppercase text-pink-100">
                        Our Branches
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {branches.map((branch, index) => (
                            <button
                                key={index}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                                    branch === "Uppal" 
                                    ? "bg-gray-900 text-white shadow-lg" 
                                    : "bg-white text-gray-900 hover:bg-gray-100 shadow"
                                }`}
                            >
                                {branch}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UppalStats;
