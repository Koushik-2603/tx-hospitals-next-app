"use client";

import { useState } from "react";
import BookAppointmentForm from "@/components/Blogs/BookAppointemntForm";
import SecondOpinionForm from "./SecondOpinionForm";

export default function SecondOpinionHero({
    opinionType = "First",
    badgeText = "FIRST OPINION",
    title = "Your Health Decision Deserves the Right First Opinion",
    subtitle = "Get expert evaluation, accurate diagnosis and the right treatment guidance from our senior specialists."
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dynamic horizontal features configuration matching the mockup icons exactly
    const features = [
        {
            title: "Senior Specialists",
            desc: "with 20+ Years of Experience",
            icon: "♙"
        },
        {
            title: "Accurate Diagnosis",
            desc: "& Personalised Treatment Plan",
            icon: "盾"
        },
        {
            title: "Quick Appointments",
            desc: "& Faster Report Review",
            icon: "◷"
        },
        {
            title: "Confidential",
            desc: "& Secure Consultation",
            icon: "▤"
        }
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#fafafa]/50 py-10 md:py-16 font-inter">
            {/* Soft decorative background gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] bg-pink-100/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-100/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

                    {/* Left Column (Copy & Features: Spans 7 Cols) */}
                    <div className="lg:col-span-7 lg:pr-10 flex flex-col justify-center text-left">
                        {/* Opinion Badge */}
                        <div className="inline-block self-start mb-5">
                            <span className="bg-[#b01640] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded tracking-widest uppercase font-montserrat shadow-sm">
                                {badgeText}
                            </span>
                        </div>

                        {/* Main Title heading exactly as requested */}
                        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold font-montserrat text-[#222222] leading-[1.15] tracking-tight">
                            Your Health Decision Deserves the Right <span className="text-[#b01640]">{opinionType} Opinion</span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm md:text-base text-gray-600 font-inter mt-5 mb-8 leading-relaxed max-w-xl">
                            {subtitle}
                        </p>

                        {/* Horizontal Bullet points strip exactly as in mockup */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 w-full">
                            {features.map((item, index) => (
                                <div key={index} className="flex flex-col items-start text-left font-inter">
                                    {/* Icon Container */}
                                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-pink-50/50 mb-3 border border-pink-100/30 text-2xl font-bold text-[#b01640] select-none">
                                        {item.icon}
                                    </div>
                                    <span className="text-xs md:text-[13px] font-bold text-gray-900 leading-tight">
                                        {item.title}
                                    </span>
                                    <span className="text-[10px] md:text-[11px] text-gray-500 font-medium leading-tight mt-1">
                                        {item.desc}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Call button exactly matching brand color */}
                            <a
                                href="tel:9144514459"
                                className="bg-[#b01640] hover:bg-[#8b1232] text-white flex items-center justify-center gap-2 rounded-lg font-bold font-montserrat text-sm tracking-wider px-8 py-3.5 transition-all transform active:scale-95 shadow-md hover:shadow-lg w-full sm:w-auto uppercase"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </a>

                            {/* Book Appointment popup trigger matching the requested popup style */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="border-2 border-[#b01640] hover:bg-[#b01640]/5 text-[#b01640] flex items-center justify-center gap-2 rounded-lg font-bold font-montserrat text-sm tracking-wider px-8 py-3.5 transition-all w-full sm:w-auto uppercase"
                            >
                                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Book Appointment
                            </button>
                        </div>
                    </div>

                    {/* Right Column (Form: Spans 5 Cols) */}
                    <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
                        <SecondOpinionForm opinionType={opinionType} />
                    </div>

                </div>
            </div>

            {/* Popup form modal matching free consultation modal */}
            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                    redirectUrl="/thank-you/"
                    defaultLocation="TX Hospitals First Opinion"
                />
            )}
        </section>
    );
}
