import React from 'react';
import Image from 'next/image';

const HeroSection = ({
    title,
    highlightedTitle,
    subtitle,
    description,
    buttons,
    bannerImage,
    backgroundImage
}) => {
    return (
        <section className="w-full bg-[#fde8e8] px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="w-1/2 space-y-8">
                    <h1 className="text-4xl font-bold text-[#1a1a1a] leading-tight">
                        <span className="text-[#B12C49]">{highlightedTitle}</span> <br className="hidden md:block" />
                        {subtitle}
                    </h1>
                    <p className="text-[#4a4a4a] text-xl leading-relaxed max-w-xl font-medium">
                        {description}
                    </p>
                    <div className="flex flex-row items-center gap-4 pt-4">
                        {buttons.map((btn, index) => (
                            <button
                                key={index}
                                className={`${btn.className} px-6 py-2 rounded-xl flex items-center justify-center gap-3 text-lg font-bold shadow-lg transition-all transform hover:scale-105 active:scale-95`}
                            >
                                {btn.icon && (
                                    <Image
                                        src={btn.icon}
                                        alt={btn.alt}
                                        width={btn.width || 32}
                                        height={btn.height || 32}
                                        className="w-8 h-8 object-contain"
                                    />
                                )}
                                {btn.text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-1/2 relative flex justify-center items-center">
                    <div className="relative w-full max-w-[550px]">
                        {/* The background box/frame */}
                        <Image
                            src={backgroundImage}
                            alt="Transplantation Background Box"
                            width={600}
                            height={600}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                        {/* The Actual Liver Image inside */}
                        <div className="absolute inset-0 flex items-center justify-center p-[15%]">
                            <Image
                                src={bannerImage}
                                alt="Liver Transplantation Surgery Illustration"
                                width={450}
                                height={450}
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
