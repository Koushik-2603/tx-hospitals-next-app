import React, { useState } from 'react';
import { submitMyKareLead } from '@/utils/leadService';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import axios from 'axios';
import CONFIG from '@/config';
import { toast } from 'react-toastify';

const KachigudaHero = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        speciality: '',
        date: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 10-digit mobile number validation
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                to: "crm.txhospitals@gmail.com, venudas@txhospitals.in",
                cc: "info.txhospitals@gmail.com",
                subject: "New Inquiry from Kachiguda Branch",
                html: `
                    <h3>New Inquiry - Kachiguda Landing Page</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Mobile:</strong> ${formData.phone}</p>
                    <p><strong>Department/Speciality:</strong> ${formData.speciality || 'Not Specified'}</p>
                    <p><strong>Preferred Date:</strong> ${formData.date || 'Not Specified'}</p>
                    <p><strong>Location:</strong> TX Hospitals Kachiguda</p>
                    <p><strong>Page:</strong> ${document.title || "Kachiguda Landing Page"}</p>
                `,
                page: document.title || "Kachiguda Landing Page",
                location: "TX Hospitals Kachiguda",
                name: formData.name,
                mobile: formData.phone,
                concern: formData.speciality,
                time: formData.date
            };
            await axios.post(`${CONFIG.API_BASE_URL}/send-email/dynamic-form`, payload);
            // Dispatch to MyKare lead API
            submitMyKareLead(payload);
            toast.success("Appointment request submitted successfully!");
            router.push('/thank-you-kachiguda');
        } catch (error) {
            console.error('Error submitting Kachiguda inquiry:', error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full bg-gradient-to-r from-[#2e0854] via-[#4c1d95] to-[#701a75] overflow-hidden py-12 lg:py-24 px-6 md:px-12 lg:px-16 min-h-[600px] flex items-center">
            {/* Background decorative blurry circles */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-[1400px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left Column (Content) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col space-y-6"
                    >
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1b4b]/80 border border-[#4338ca] text-xs font-bold text-[#34d399] tracking-wider mb-6 backdrop-blur-md">
                                <span>🏥</span> Kachiguda's Trusted Hospital
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight ">
                                Advanced Multi-Specialty <br />
                                <span className="text-[#fbbf24]">Care in Kachiguda</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            TX Hospitals Kachiguda offers world-class treatment across Cardiac, Ortho, Gastro, Nephrology & more. Expert doctors. Modern diagnostics. Compassionate care.
                        </p>

                        {/* Stats Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center pt-8 border-t border-white/10 mt-6 max-w-xl">
                            <div>
                                <div className="text-2xl md:text-3xl font-extrabold text-white">4.8★</div>
                                <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase mt-1">Rating</div>
                            </div>
                            <div className="border-l border-white/10 pl-6 md:pl-4">
                                <div className="text-2xl md:text-3xl font-extrabold text-white">200+</div>
                                <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase mt-1">Beds</div>
                            </div>
                            <div className="border-l border-white/10 pl-6 md:pl-4">
                                <div className="text-2xl md:text-3xl font-extrabold text-white">50+</div>
                                <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase mt-1">Doctors</div>
                            </div>
                            <div className="border-l border-white/10 pl-6 md:pl-4">
                                <div className="text-2xl md:text-3xl font-extrabold text-white">15+</div>
                                <div className="text-xs text-gray-300 font-semibold tracking-wider uppercase mt-1">Specialties</div>
                            </div>
                        </div>

                        {/* Scroll to explore */}
                        <div className="flex items-center gap-2 mt-8 text-gray-300/80 text-sm font-semibold tracking-wide cursor-pointer hover:text-white transition-colors duration-200">
                            <span>↓</span> Scroll to explore
                        </div>
                    </motion.div>

                    {/* Right Column (Form Card) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end w-full"
                    >
                        <div className="w-full max-w-[460px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                            {/* Card Header */}
                            <div className="bg-[#0052a3] px-6 py-5 text-center text-white">
                                <h2 className="text-xl md:text-2xl font-extrabold tracking-wide">Book FREE Appointment</h2>
                                <p className="text-white/80 text-xs md:text-sm font-semibold mt-1">Get a callback within 30 minutes</p>
                            </div>

                            {/* Card Body / Form */}
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                                {/* Name Input */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-bold placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all text-sm"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Mobile Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91"
                                        className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-bold placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all text-sm"
                                    />
                                </div>

                                {/* Speciality Input */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Department / Speciality</label>
                                    <input
                                        type="text"
                                        name="speciality"
                                        value={formData.speciality}
                                        onChange={handleChange}
                                        className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-bold placeholder:text-gray-400 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all text-sm"
                                    />
                                </div>

                                {/* Date Input */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl py-3 px-4 text-gray-900 font-bold text-gray-700 focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/5 transition-all text-sm"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full bg-[#e65c00] hover:bg-[#d45500] text-white font-extrabold py-3.5 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 mt-6 shadow-lg shadow-orange-500/10 text-sm uppercase tracking-widest ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>✅</span> Confirm Appointment
                                        </>
                                    )}
                                </button>

                                {/* Trust / Security Note */}
                                <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                    <span>🔒</span> Your information is 100% secure & private
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default KachigudaHero;
