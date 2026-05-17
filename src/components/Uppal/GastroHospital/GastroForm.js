import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import axios from 'axios';
import CONFIG from '@/config';
import { toast } from 'react-toastify';

const GastroForm = ({ redirectUrl = "/thank-you-uppal" }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        concern: '',
        time: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation for 10-digit mobile number
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                to: "crm.txhospitals@gmail.com, manager@txhospitals.com, frontdesk@txhospitals.com",
                cc: "info.txhospitals@gmail.com, manidhar139@gmail.com",
                subject: "New Inquiry from Uppal Branch - Gastro Hospital",
                html: `
                    <h3>New Inquiry - Gastro Hospital</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Mobile:</strong> ${formData.phone}</p>
                    <p><strong>Concern:</strong> ${formData.concern}</p>
                    <p><strong>Preferred Time:</strong> ${formData.time}</p>
                    <p><strong>Location:</strong> TX Hospitals Uppal</p>
                    <p><strong>Page:</strong> ${document.title || "Uppal Gastro Hospital Page"}</p>
                `,
                page: document.title || "Uppal Gastro Hospital Page",
                location: "TX Hospitals Uppal",
                name: formData.name,
                mobile: formData.phone,
                concern: formData.concern,
                time: formData.time
            };
            await axios.post(`${CONFIG.API_BASE_URL}/send-email/dynamic-form`, payload);
            toast.success("Consultation request submitted successfully!");
            router.push(redirectUrl);
        } catch (error) {
            console.error('Error submitting gastro form:', error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const concernOptions = [
        "Acidity & Gas",
        "Abdominal Pain",
        "Constipation",
        "Diarrhea",
        "Liver Problems",
        "Jaundice",
        "Piles/Hemorrhoids",
        "Other"
    ];

    const timeOptions = [
        "Morning (9 AM - 12 PM)",
        "Afternoon (12 PM - 4 PM)",
        "Evening (4 PM - 8 PM)"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-5 md:p-7 rounded-2xl shadow-2xl w-full max-w-[420px] mx-auto border border-gray-100"
        >
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1 leading-tight">Consult a Gastro Specialist</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Concern</label>
                    <select
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm appearance-none"
                    >
                        <option value="">Select your concern</option>
                        {concernOptions.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Preferred Time</label>
                    <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm appearance-none"
                    >
                        <option value="">Select preferred time</option>
                        {timeOptions.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#be185d] hover:bg-[#a2144e] text-white font-bold py-3.5 rounded-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 mt-4 shadow-lg shadow-pink-100 text-sm uppercase tracking-widest ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            Get a Free Second Opinion <span className="text-lg">→</span>
                        </>
                    )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                    NABH Certified
                </div>
            </form>
        </motion.div>
    );
};

export default GastroForm;
