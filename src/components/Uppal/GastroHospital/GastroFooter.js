import React from 'react';
import Image from 'next/image';

const GastroFooter = () => {
    return (
        <footer className="bg-[#111111] text-white py-12 px-6 font-inter">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#be185d] p-3 rounded-xl flex items-center justify-center font-bold text-xl">
                        TX
                    </div>
                    <div>
                        <h4 className="text-xl font-bold ">TX Hospitals</h4>
                        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                            Gastroenterology Center, Uppal, Hyderabad
                        </p>
                    </div>
                </div>

                <div className="w-full border-t border-gray-800/50 pt-8 mt-4 text-center">
                    <p className="text-gray-500 text-[10px] md:text-xs font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} TX Hospitals. All rights reserved. | NABH Accredited
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default GastroFooter;
