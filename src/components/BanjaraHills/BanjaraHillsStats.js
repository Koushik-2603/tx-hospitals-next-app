import React from 'react';
import { motion } from 'framer-motion';

export default function BanjaraHillsStats() {
    const stats = [
        {
            icon: '/assets/banjara-hills/ambulance_1.svg',
            number: '15+',
            label: 'Specialities',
            hasDivider: true
        },
        {
            icon: '/assets/banjara-hills/Doctors-team.svg',
            number: '200+',
            label: 'Expert Doctors',
            hasDivider: true
        },
        {
            icon: '/assets/banjara-hills/happiness (1).svg',
            number: '1,00,000+',
            label: 'Happy Patients',
            hasDivider: true
        },
        {
            icon: '/assets/banjara-hills/vascular-surgery.svg',
            number: '50,000+',
            label: 'Surgeries Performed',
            hasDivider: true
        }
    ];

    return (
        <section className="w-full bg-[#fff8f9] py-4 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 border border-white/80 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-center">
                        {stats.map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-center lg:justify-start px-4">
                                <div className="flex items-center gap-4 w-full">
                                    <div className="w-14 h-14 shrink-0 flex items-center justify-center p-3 bg-pink-50/50 rounded-2xl">
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            className="w-full h-full object-contain"
                                            style={{ filter: 'invert(18%) sepia(88%) saturate(3474%) hue-rotate(330deg) brightness(87%) contrast(93%)' }}
                                        />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-2xl lg:text-3xl font-bold text-gray-900  leading-none">
                                            {item.number}
                                        </span>
                                        <span className="text-xs lg:text-sm font-medium text-gray-500 tracking-wide mt-1.5 whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                                {/* Vertical Divider on desktop */}
                                {item.hasDivider && (
                                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gray-200"></div>
                                )}
                            </div>
                        ))}

                        {/* 5th Stat Item wrapped inside outline box */}
                        <div className="lg:col-span-1 flex justify-center px-2">
                            <div className="border border-gray-200 rounded-2xl p-4 bg-[#fffbfc] flex items-center gap-4 justify-start shadow-sm w-full hover:shadow-md transition-all duration-300">
                                <div className="w-12 h-12 shrink-0 flex items-center justify-center p-2 bg-pink-50/50 rounded-xl">
                                    <img
                                        src="/assets/banjara-hills/ambulance_1.svg"
                                        alt="Emergency Care"
                                        className="w-full h-full object-contain"
                                        style={{ filter: 'invert(18%) sepia(88%) saturate(3474%) hue-rotate(330deg) brightness(87%) contrast(93%)' }}
                                    />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-2xl font-bold text-gray-900  leading-none">
                                        24/7
                                    </span>
                                    <span className="text-xs font-medium text-gray-500 tracking-wide mt-1.5 whitespace-nowrap">
                                        Emergency Care
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
