import React from 'react';
import Image from 'next/image';

const FinalCtaSection = ({ title, description, buttons }) => {
    return (
        <section className="max-w-7xl mx-auto my-6 bg-[#B12C49] py-10 text-center text-white">
            <div className="max-w-5xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold">
                    {title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    {buttons.map((btn, index) => (
                        <button key={index} className={`${btn.className} w-full sm:w-auto px-8 md:px-10 py-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold transition-all transform hover:scale-105 active:scale-95 group`}>
                            <div className={btn.iconBgClass}>
                                <Image
                                    src={btn.icon}
                                    alt={btn.alt}
                                    width={btn.width || 32}
                                    height={btn.height || 32}
                                    className={btn.iconClass}
                                />
                            </div>
                            {btn.text}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FinalCtaSection;
