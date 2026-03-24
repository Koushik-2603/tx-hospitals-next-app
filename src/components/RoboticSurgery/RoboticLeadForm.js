"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { sendOtp, verifyOtp } from "@/utils/otpUtils";
import CONFIG from "@/config";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";

const RoboticLeadForm = ({ department = "Robotic Orthopaedic Surgery" }) => {
    const router = useRouter();
    const isMobile = useIsMobile();
    const [step, setStep] = useState(1); // 1: Info, 2: OTP, 3: Verified
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [otp, setOtp] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile") {
            const numericValue = value.replace(/\D/g, "");
            if (numericValue.length <= 10) {
                setFormData(prev => ({ ...prev, [name]: numericValue }));
            }
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGetOtp = async () => {
        if (!formData.name || !formData.mobile) {
            setMessage("Please enter both name and mobile number");
            return;
        }
        if (formData.mobile.length !== 10) {
            setMessage("Please enter a valid 10-digit mobile number");
            return;
        }

        setLoading(true);
        try {
            await sendOtp({
                mobileNumber: formData.mobile,
                setGeneratedOtp,
                onSuccess: () => {
                    setStep(2);
                    setMessage("OTP sent successfully");
                }
            });
        } catch (error) {
            setMessage("Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyAndSubmit = async () => {
        if (!otp) {
            setMessage("Please enter the OTP");
            return;
        }

        const isVerified = verifyOtp({
            enteredOtp: otp,
            generatedOtp,
            onSuccess: () => {
                setStep(3);
                submitLead();
            }
        });

        if (!isVerified) {
            setMessage("Invalid OTP. Please try again.");
        }
    };

    const submitLead = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/send-email/ads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    department,
                }),
            });

            if (response.ok) {
                router.push("/thank-you/");
            } else {
                setMessage("Submission failed. Our team will contact you.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            setMessage("Error submitting details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={`${isMobile ? 'py-6 px-4' : 'py-8 px-6 md:px-12'} bg-white font-inter`}>
            <div className="container mx-auto max-w-4xl">
                <div className={`bg-white rounded-3xl ${isMobile ? 'p-4' : 'p-4 md:p-6'}`}>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-col md:flex-row'} ${isMobile ? 'gap-3' : 'gap-4'} mb-4`}>
                        {/* Name Input */}
                        <div className="flex-1">
                            <input
                                type="text"
                                name="name"
                                placeholder="Patient Name"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={step > 1}
                                className={`w-full ${isMobile ? 'px-4 py-3 text-sm' : 'px-6 py-4'} rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all text-gray-700 font-medium placeholder:text-gray-400`}
                            />
                        </div>

                        {/* Mobile Input */}
                        <div className="flex-1">
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                disabled={step > 1}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={10}
                                className={`w-full ${isMobile ? 'px-4 py-3 text-sm' : 'px-6 py-4'} rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all text-gray-700 font-medium placeholder:text-gray-400`}
                            />
                        </div>

                        {/* Get OTP Button */}
                        {step === 1 && (
                            <button
                                onClick={handleGetOtp}
                                disabled={loading || !formData.name.trim() || formData.mobile.length !== 10}
                                className={`bg-[#b02a44] hover:bg-[#8e2136] text-white ${isMobile ? 'px-6 py-3 text-sm' : 'px-10 py-4'} rounded-xl font-bold transition-all shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed ${isMobile ? 'w-full' : ''}`}
                            >
                                {loading ? "Sending..." : "Get OTP"}
                            </button>
                        )}
                    </div>

                    <AnimatePresence>
                        {step >= 2 && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-4"
                            >
                                <p className={`text-center text-gray-800 font-bold ${isMobile ? 'text-sm' : 'text-base md:text-lg'}`}>
                                    To Confirm your details, please enter OTP sent to you on {formData.mobile}
                                </p>

                                <div className="max-w-2xl mx-auto">
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className={`w-full ${isMobile ? 'px-4 py-4 text-lg' : 'px-6 py-4 md:py-6 text-xl md:text-2xl'} rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all text-center tracking-widest font-bold text-gray-700 placeholder:text-gray-400 ${isMobile ? 'placeholder:text-sm' : 'placeholder:text-base'} placeholder:tracking-normal`}
                                    />
                                </div>

                                <div className={`flex justify-between max-w-2xl mx-auto ${isMobile ? 'px-1' : 'px-2'}`}>
                                    <button
                                        onClick={() => { setStep(1); setOtp(""); setMessage(""); }}
                                        className={`text-gray-800 font-bold ${isMobile ? 'text-sm' : 'text-base md:text-lg'} hover:underline`}
                                    >
                                        Change number
                                    </button>
                                    <button
                                        onClick={handleGetOtp}
                                        className={`text-gray-800 font-bold ${isMobile ? 'text-sm' : 'text-base md:text-lg'} hover:underline`}
                                    >
                                        Resend
                                    </button>
                                </div>

                                <div className="max-w-2xl mx-auto">
                                    <button
                                        onClick={handleVerifyAndSubmit}
                                        disabled={loading}
                                        className={`w-full bg-[#a32b47] hover:bg-[#86233a] text-white ${isMobile ? 'py-3 text-lg' : 'py-4 md:py-5 text-xl md:text-2xl'} rounded-3xl font-bold transition-all shadow-lg disabled:opacity-70`}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {message && (
                        <p className={`text-center mt-6 ${isMobile ? 'text-base' : 'text-2xl'} font-bold text-gray-800 animate-pulse`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RoboticLeadForm;
