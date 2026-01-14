import React from 'react';
import Image from 'next/image';

const CtaSection = ({ buttons }) => {
    return (
        <section className="max-w-6xl mx-auto bg-[#B12C49] py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                {buttons.map((btn, index) => (
                    <button key={index} className={`${btn.className} w-full md:w-auto px-8 md:px-10 py-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold transition-all transform hover:scale-105 active:scale-95 group`}>
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
        </section>
    );
};

export default CtaSection;
