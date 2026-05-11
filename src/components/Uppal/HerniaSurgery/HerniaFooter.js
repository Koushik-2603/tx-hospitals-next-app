import React from 'react';

const HerniaFooter = () => {
    return (
        <footer className="bg-[#0a0a0a] text-white py-12 px-6 font-inter border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#be185d] p-3 rounded-xl flex items-center justify-center font-bold text-xl">
                        TX
                    </div>
                    <div>
                        <h4 className="text-xl font-extrabold leading-tight">TX Hospitals</h4>
                        <p className="text-gray-500 text-xs md:text-sm font-medium tracking-tight">
                            Hernia Surgery Specialists - Near Uppal Bus Stop, Hyderabad
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-white/5 my-8"></div>

                <p className="text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                    © 2025 TX Hospitals. All rights reserved. | NABH Accredited
                </p>
            </div>
        </footer>
    );
};

export default HerniaFooter;
