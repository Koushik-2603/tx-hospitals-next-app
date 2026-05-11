import React from 'react';

const HerniaSimpleCTA = ({ onBookClick }) => {
    return (
        <section className="bg-[#be185d] py-12 md:py-16 px-6 text-center text-white font-inter">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Get Expert Hernia Treatment in Uppal
                </h2>
                <p className="text-sm md:text-lg text-pink-50/90 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
                    Experienced surgeons. Minimally invasive surgery. Quick recovery. All insurance accepted. TX Hospitals, right near Uppal Bus Stop.
                </p>
                <button
                    onClick={onBookClick}
                    className="bg-white text-[#be185d] hover:bg-pink-50 font-extrabold py-3 md:py-4 px-8 md:px-12 rounded-full transition-all shadow-xl text-sm md:text-lg uppercase tracking-wider transform hover:scale-105"
                >
                    Book an Appointment
                </button>
            </div>
        </section>
    );
};

export default HerniaSimpleCTA;
