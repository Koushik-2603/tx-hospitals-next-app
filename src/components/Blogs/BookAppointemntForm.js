import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const BookAppointmentForm = ({ showModal, setShowModal, redirectUrl = "/thank-you", defaultLocation = "" }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        location: defaultLocation,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(redirectUrl);
    };

    const locations = [
        "TX Hospitals Uppal",
        "TX Hospitals Kachiguda",
        "TX Hospitals Banjara Hills",
        "TX Children Hospitals Banjara Hills"
    ];

    return (
        <AnimatePresence>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-[9999] px-4 font-inter">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 15 }}
                        className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                    >
                        {/* Branded Header */}
                        <div className="bg-pink-700 py-4 px-8 text-white text-center relative">
                            <h2 className="text-xl font-bold tracking-tight">Book Appointment</h2>
                            <p className="text-pink-100/60 text-[9px] font-bold uppercase tracking-[0.2em] mt-0.5">Direct Medical Consultation</p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-6 text-white/50 hover:text-white transition-colors"
                            >
                                <IoClose size={20} />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="p-6 md:p-8">
                            <form
                                action="https://formsubmit.co/crm.txhospitals@gmail.com"
                                method="POST"
                                onSubmit={handleSubmit}
                                className="space-y-3.5"
                            >
                                {/* Hidden Fields */}
                                <input type="hidden" name="_cc" value="info.txhospitals@gmail.com" />
                                <input type="hidden" name="_captcha" value="false" />

                                {/* Patient Name */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Patient Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        required
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm"
                                    />
                                </div>

                                {/* Mobile Number */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter Phone"
                                        required
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm"
                                    />
                                </div>

                                {/* Date and Location Side by Side */}
                                <div className={defaultLocation ? "grid grid-cols-1 gap-4" : "grid grid-cols-2 gap-4"}>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm"
                                        />
                                    </div>
                                    {!defaultLocation ? (
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Center</label>
                                            <select
                                                name="location"
                                                required
                                                defaultValue={formData.location}
                                                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/5 outline-none transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                <option value="">Choose</option>
                                                {locations.map(loc => (
                                                    <option key={loc} value={loc}>{loc}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ) : (
                                        <input type="hidden" name="location" value={defaultLocation} />
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-pink-700 hover:bg-pink-800 text-white font-bold py-3.5 rounded-xl shadow-xl transition-all active:scale-95 text-xs uppercase tracking-[0.2em] mt-1"
                                >
                                    Confirm Appointment
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookAppointmentForm;
