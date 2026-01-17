import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const CtaSection = ({ buttons }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`max-w-6xl mx-auto bg-[#B12C49] ${isMobile ? 'py-6' : 'py-12'}`}>
            <div className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center ${isMobile ? 'gap-4 px-4' : 'gap-6 md:gap-12'}`}>
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (btn.onClick) {
                                btn.onClick();
                            }
                        }}
                        className={`${btn.className} w-full md:w-auto ${isMobile ? 'px-6 py-3' : 'px-8 md:px-10 py-4'} rounded-xl flex items-center justify-center ${isMobile ? 'gap-2' : 'gap-3'} ${isMobile ? 'text-base' : 'text-xl'} font-bold transition-all transform hover:scale-105 active:scale-95 group`}
                    >
                        <div className={btn.iconBgClass}>
                            <Image
                                src={btn.icon}
                                alt={btn.alt}
                                width={isMobile ? 24 : (btn.width || 32)}
                                height={isMobile ? 24 : (btn.height || 32)}
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
