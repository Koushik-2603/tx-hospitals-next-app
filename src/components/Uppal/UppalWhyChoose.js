import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        num: "01",
        title: "Right in Your Neighbourhood",
        desc: "Located in the heart of Uppal, we are the closest multi-specialty hospital for Uppal, Nagole, Boduppal, Kothapet, Habsiguda, Ramanthapur, LB Nagar and Dilsukhnagar residents. No long commutes for quality care."
    },
    {
        num: "02",
        title: "50+ Expert Specialists",
        desc: "Our team of 50+ doctors covers every major specialty under one roof. Each specialist brings extensive experience, ensuring you always see the right doctor without referrals to faraway hospitals."
    },
    {
        num: "03",
        title: "Advanced Technology & OTs",
        desc: "From laparoscopic surgery to advanced diagnostics, our operation theatres, ICU, and labs are equipped with the latest medical technology, bringing city-level care right here to Uppal."
    },
    {
        num: "04",
        title: "Affordable & Transparent",
        desc: "Quality healthcare should not break the bank. At TX Hospitals Uppal, we offer clear, upfront pricing with no hidden charges — plus 0% EMI options for planned treatments and surgeries."
    },
    {
        num: "05",
        title: "Insurance Coverage",
        desc: "We accept all major health insurance plans and government schemes. Our dedicated insurance desk handles all pre-authorisation and paperwork so you can focus entirely on your recovery."
    },
    {
        num: "06",
        title: "Patient-First Approach",
        desc: "Quick registration, short wait times, multilingual support, and compassionate nursing. From the moment you walk in, our staff prioritises your comfort and dignity above everything else."
    }
];

const UppalWhyChoose = () => {
    return (
        <section className="bg-white py-10 md:py-16 px-6 md:px-10 lg:px-12">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="mb-8 md:mb-12 max-w-3xl">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-pink-700 mb-2 block">
                        Why TX Hospitals, Uppal
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Patients Near Uppal <span className="text-pink-700">Choose Us</span>
                    </h2>
                    <div className="w-12 h-1 bg-pink-700 mb-6"></div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                        Thousands of families in Uppal, and surrounding areas of Hyderabad trust TX Hospitals for their healthcare.
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-pink-200 transition-all duration-300 group"
                        >
                            <div className="text-5xl font-black text-pink-50 mb-4 group-hover:text-pink-100 transition-colors">
                                {reason.num}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UppalWhyChoose;
