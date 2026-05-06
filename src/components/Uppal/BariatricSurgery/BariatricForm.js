import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const BariatricForm = ({ redirectUrl = "/thank-you-uppal" }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        weight: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        router.push(redirectUrl);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-5 md:p-7 rounded-2xl shadow-2xl w-full max-w-[380px] mx-auto border border-gray-100"
        >
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1 leading-tight">Get a Free Consultation</h2>
            <p className="text-gray-500 text-[11px] md:text-xs font-medium mb-5">Our bariatric expert will call you back within 30 minutes.</p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name *</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Mobile Number *</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Current Weight (kg)</label>
                    <input
                        type="text"
                        name="weight"
                        placeholder="e.g. 110"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-pink-700 hover:bg-pink-800 text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-pink-100 text-xs uppercase tracking-widest"
                >
                    Book an Appointment <span className="text-lg">→</span>
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                    NABH Certified
                </div>
            </form>
        </motion.div>
    );
};

export default BariatricForm;
