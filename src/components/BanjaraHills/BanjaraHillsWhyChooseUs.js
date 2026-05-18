import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

const BanjaraHillsWhyChooseUs = () => {
    const whyPoints = [
        "NABH Accredited Hospital",
        "Advanced Technology & Infrastructure",
        "Highly Experienced Doctors",
        "24/7 Emergency & Trauma Care",
        "Cashless Insurance & TPA",
        "Patient First Approach"
    ];

    const reviews = [
        {
            name: "Ramesh Kumar",
            time: "2 days ago",
            text: "The doctors and staff were very cooperative. Got excellent treatment for my father's heart surgery."
        },
        {
            name: "Sneha Reddy",
            time: "5 days ago",
            text: "Very clean hospital with advanced facilities. The care and support from staff is outstanding."
        },
        {
            name: "Anitha Devi",
            time: "1 week ago",
            text: "World class treatment and highly experienced doctors. Thank you TX Hospitals."
        }
    ];

    // High Quality Official Google SVG Logo
    const GoogleOfficialLogo = () => (
        <svg viewBox="0 0 272 92" width="110" height="38" xmlns="http://www.w3.org/2000/svg">
            <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.3 81.24 25 93.5 25s22.25 9.3 22.25 22.18zm-9.74 0c0-7.62-5.7-12.87-12.51-12.87S81 39.56 81 47.18c0 7.51 5.7 12.87 12.51 12.87s12.5-5.36 12.5-12.87z" fill="#EA4335" />
            <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.88 9.99-22.18 22.25-22.18s22.25 9.3 22.25 22.18zm-9.74 0c0-7.62-5.7-12.87-12.51-12.87s-12.51 5.25-12.51 12.87c0 7.51 5.7 12.87 12.51 12.87s12.51-5.36 12.51-12.87z" fill="#FBBC05" />
            <path d="M209.75 26.3v40.42c0 16.64-9.8 23.46-21.36 23.46-10.87 0-17.18-7.3-19.66-13.41l8.47-3.52c1.51 3.61 5.21 7.87 11.19 7.87 7.29 0 11.66-4.51 11.66-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.07 0-12.52 10.16-22.27 21.25-22.27 5.3 0 9.5 2.35 11.68 4.99h.34V26.3h9.74zm-9.07 21.01c0-7.39-4.96-12.87-11.17-12.87-6.39 0-11.68 5.48-11.68 12.87 0 7.28 5.29 12.76 11.68 12.76 6.22 0 11.17-5.37 11.17-12.76z" fill="#4285F4" />
            <path d="M224.25 4.3h9.74V68.3h-9.74z" fill="#34A853" />
            <path d="M262.25 54.19l7.73 5.15c-2.52 3.73-8.57 10-18.73 10-12.77 0-22.25-9.98-22.25-22.18 0-13.11 9.57-22.18 21.14-22.18 11.69 0 17.29 9.3 19.14 14.12l1.01 2.51-29.35 12.15c2.25 4.43 5.8 6.7 10.77 6.7 4.97 0 8.32-2.45 10.55-5.91zm-21.84-7.53l19.59-8.11c-1.12-2.82-4.38-4.83-8.29-4.83-5.01 0-11.51 4.47-11.3 12.94z" fill="#EA4335" />
            <path d="M35.25 41.3v-9.5h43.76c.41 2.11.69 4.67.69 7.42 0 9.17-2.52 21.12-10.76 29.36-7.98 8.42-18.15 12.93-31.54 12.93C16.89 81.51 0 64.62 0 44S16.89 6.49 37.4 6.49c11.29 0 20.31 4.42 27.27 10.97l-6.88 6.88c-4.86-4.54-11.83-7.83-20.39-7.83-16.51 0-30.08 13.39-30.08 29.9s13.57 29.91 30.08 29.91c10.87 0 17.18-4.35 21.12-8.29 3.09-3.09 5.09-7.56 5.8-13.63H35.25z" fill="#4285F4" />
        </svg>
    );

    // Google G icon for review cards
    const GoogleGIcon = () => (
        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );

    // Landscape/Mountain Image Avatar Placeholder
    const AvatarPlaceholder = () => (
        <div className="w-10 h-7 bg-[#e5e7eb] rounded flex items-center justify-center text-gray-400 shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
    );

    return (
        <section className="py-4 md:py-6 px-4 md:px-8 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 items-stretch">

                    {/* Left Column: Why Patients Choose TX Hospitals */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#b3204d] rounded-[32px] p-4 md:p-6 pb-0 md:pb-0 lg:w-[35%] xl:w-[36%] relative overflow-hidden flex flex-col justify-between min-h-[300px] shadow-sm shrink-0"
                    >
                        {/* Text Content wrapped to stay strictly on the left 64% */}
                        <div className="relative z-10 w-[64%] pb-4 pr-2">
                            <h2 className="text-white text-lg md:text-[20px] font-bold mb-4 leading-tight">
                                Why Patients Choose TX Hospitals
                            </h2>

                            <ul className="space-y-3">
                                {whyPoints.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3 text-white text-xs md:text-[13px] font-semibold leading-tight">
                                        {/* Solid white circle with pink check icon */}
                                        <div className="bg-white rounded-full w-5 h-5 shrink-0 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[#b3204d]" strokeWidth={4.5} />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Clean Cutout Doctor Portrait standing directly on the pink background */}
                        <div className="absolute bottom-0 right-0 w-[42%] h-[90%] z-0 pointer-events-none">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/Header/Docotor Image.png"
                                    alt="TX Hospitals Expert Doctor Portrait"
                                    fill
                                    className="object-contain object-bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* Right Column: Google Ratings & Review Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-[32px] p-6 md:p-8 lg:w-[65%] xl:w-[64%] flex flex-col gap-6 shadow-[0_4px_25px_rgba(0,0,0,0.01)]"
                    >
                        {/* Main Title */}
                        <h2 className="text-gray-900 text-lg md:text-[19px] font-bold leading-tight">
                            Why Patients Choose TX Hospitals Banjara Hills
                        </h2>

                        {/* Rating block & cards layout */}
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch w-full">

                            {/* Google Rating Block */}
                            <div className="flex flex-col items-start gap-1 justify-center shrink-0 w-full md:w-[22%]">
                                <GoogleOfficialLogo />

                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-3xl md:text-[34px] font-bold text-gray-900 leading-none">4.8</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 md:w-[16px] md:h-[16px] fill-[#FBBC05] text-[#FBBC05]" />
                                        ))}
                                    </div>
                                </div>

                                <span className="text-gray-700 font-bold text-xs md:text-xs mt-2 block">
                                    Based on 1200+ reviews
                                </span>
                            </div>

                            {/* Cards Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full md:w-[78%] items-stretch">
                                {reviews.map((review, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between relative hover:shadow-md transition-all duration-300"
                                    >
                                        <div>
                                            {/* User Header */}
                                            <div className="flex items-center gap-2.5 mb-3.5">
                                                <AvatarPlaceholder />
                                                <div className="min-w-0">
                                                    <h4 className="text-[11px] md:text-xs font-bold text-gray-900 truncate leading-none">
                                                        {review.name}
                                                    </h4>
                                                    <span className="text-[9px] md:text-[10px] text-gray-500 mt-1 block">
                                                        {review.time}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Review Body */}
                                            <p className="text-gray-700 text-[10px] md:text-[11px] lg:text-xs leading-relaxed mb-6 font-medium">
                                                "{review.text}"
                                            </p>
                                        </div>

                                        {/* Bottom Right Google G Brand */}
                                        <div className="absolute bottom-4 right-4 flex items-center justify-center">
                                            <GoogleGIcon />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BanjaraHillsWhyChooseUs;
