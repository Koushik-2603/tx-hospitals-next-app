import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import CONFIG from "@/config";

const BariatricForm = ({ redirectUrl = "/thank-you-uppal" }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        weight: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const payload = {
                to: "crm.txhospitals@gmail.com, manager@txhospitals.com, frontdesk@txhospitals.com",
                cc: "info.txhospitals@gmail.com, manidhar139@gmail.com",
                subject: "New Inquiry - Bariatric Surgery Uppal",
                html: `
                    <h3>New Inquiry</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Mobile:</strong> ${formData.phone}</p>
                    <p><strong>Weight:</strong> ${formData.weight || "Not specified"}</p>
                    <p><strong>Location:</strong> TX Hospitals Uppal</p>
                    <p><strong>Page:</strong> Bariatric Surgery Landing Page</p>
                `,
                page: "Bariatric Surgery Uppal",
                location: "TX Hospitals Uppal",
                name: formData.name,
                mobile: formData.phone,
                weight: formData.weight
            };

            await fetch(`${CONFIG.API_BASE_URL}/send-email/dynamic-form`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            router.push(redirectUrl);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("Failed to submit form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                    disabled={isSubmitting}
                    className={`w-full bg-pink-700 hover:bg-pink-800 text-white font-bold py-3.5 rounded-xl transition-all transform flex items-center justify-center gap-2 mt-4 shadow-lg shadow-pink-100 text-xs uppercase tracking-widest ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-95'}`}
                >
                    {isSubmitting ? "Submitting..." : <><span className="text-lg">Book an Appointment</span> <span className="text-lg">→</span></>}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                    NABH Certified
                </div>
            </form>
        </motion.div>
    );
};

export default BariatricForm;
