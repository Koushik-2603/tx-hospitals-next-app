import React from 'react';
import Link from 'next/link';

export default function BanjaraHillsTreatmentsAndAreas() {
    const treatments = [
        {
            title: "Angioplasty & Stenting",
            iconPath: "/assets/banjara-hills/heart-attack.svg"
        },
        {
            title: "Knee & Hip Replacement",
            iconPath: "/assets/banjara-hills/bones.svg"
        },
        {
            title: "Advanced Spine Surgery",
            iconPath: "/assets/banjara-hills/chiropractic.svg"
        },
        {
            title: "Laparoscopic Surgery",
            iconPath: "/assets/banjara-hills/organ.svg"
        },
        {
            title: "Endoscopy & Colonoscopy",
            iconPath: "/assets/banjara-hills/medical (1).svg"
        },
        {
            title: "Dialysis & Kidney Care",
            isPink: true,
            iconPath: "/assets/banjara-hills/icu (1).svg"
        },
        {
            title: "Organ Transplant Care",
            iconPath: "/assets/banjara-hills/organ-transplantation (1).svg"
        },
        {
            title: "IVF & Fertility Treatment",
            iconPath: "/assets/banjara-hills/ivf (1).svg"
        }
    ];

    const areas = [
        "Jubilee Hills",
        "Punjagutta",
        "Somajiguda",
        "Ameerpet",
        "Film Nagar",
        "Begumpet",
        "Madhapur",
        "Hitech City",
        "Khairatabad"
    ];

    return (
        <section className="w-full bg-white py-6 px-4 md:px-8 lg:px-12 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column: Treatments */}
                    <div className="bg-[#fff6f7] rounded-[32px] p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            {/* Header */}
                            <div className="flex items-start justify-between gap-4 mb-6">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight max-w-[70%]">
                                    Advanced Procedures & Treatments in Banjara Hills
                                </h2>
                                <Link
                                    href="/services/"
                                    className="text-[#b3204d] hover:text-[#971b41] font-bold text-sm whitespace-nowrap transition-colors mt-1"
                                >
                                    View All Treatments →
                                </Link>
                            </div>

                            {/* Treatments Grid - updated to 3-column layout */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {treatments.map((t, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl p-4 flex items-center gap-4 hover:shadow-md hover:scale-[1.01] transition-all duration-300 group cursor-pointer border border-transparent hover:border-pink-100"
                                    >
                                        {/* Dynamic SVG Mask Icon Container */}
                                        <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 bg-[#fff0f2] group-hover:bg-[#b3204d]">
                                            <div
                                                className="w-7 h-7 transition-colors duration-300"
                                                style={{
                                                    backgroundColor: '#b3204d',
                                                    maskImage: `url("${t.iconPath}")`,
                                                    WebkitMaskImage: `url("${t.iconPath}")`,
                                                    maskSize: 'contain',
                                                    WebkitMaskSize: 'contain',
                                                    maskRepeat: 'no-repeat',
                                                    WebkitMaskRepeat: 'no-repeat',
                                                    maskPosition: 'center',
                                                    WebkitMaskPosition: 'center',
                                                }}
                                                // Dynamic hover effect using inline style overrides to safely adapt with group states
                                                ref={(el) => {
                                                    if (el) {
                                                        const card = el.closest('.group');
                                                        if (card) {
                                                            card.onmouseenter = () => el.style.backgroundColor = '#ffffff';
                                                            card.onmouseleave = () => el.style.backgroundColor = '#b3204d';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>

                                        {/* Text content */}
                                        <span className="text-base font-bold leading-snug text-gray-800">
                                            {t.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Serving Areas */}
                    <div className="bg-[#fff6f7] rounded-[32px] p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            {/* Header */}
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-8">
                                Serving Areas Near Banjara Hills
                            </h2>

                            {/* Areas Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {areas.map((area, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-2xl py-3.5 px-4 flex items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.01)] border border-gray-50/50 hover:shadow-md hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                    >
                                        <span className="text-sm sm:text-base font-bold text-gray-800 ">
                                            {area}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
