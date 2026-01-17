import React from 'react';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

const FinalCtaSection = ({ title, description, buttons }) => {
    const isMobile = useIsMobile();

    return (
        <section className={`max-w-7xl mx-auto ${isMobile ? '' : 'my-6'} bg-[#B12C49] ${isMobile ? 'py-3' : 'py-10'} text-center text-white`}>
            <div className={`max-w-5xl mx-auto ${isMobile ? 'space-y-5 px-4' : 'space-y-8'}`}>
                <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold`}>
                    {title}
                </h2>
                <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} text-white/90 leading-relaxed max-w-4xl mx-auto`}>
                    {description}
                </p>
                <div className={`flex flex-col sm:flex-row items-center justify-center ${isMobile ? 'gap-4 pt-4' : 'gap-6 pt-8'}`}>
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
                            className={`${btn.className} w-full sm:w-auto ${isMobile ? 'px-6 py-3' : 'px-8 md:px-10 py-4'} rounded-xl flex items-center justify-center ${isMobile ? 'gap-2' : 'gap-3'} ${isMobile ? 'text-base' : 'text-xl'} font-bold transition-all transform hover:scale-105 active:scale-95 group`}
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
            </div>
        </section>
    );
};

export default FinalCtaSection;
