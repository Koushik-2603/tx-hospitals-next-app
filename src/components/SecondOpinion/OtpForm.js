"use client";

import { useState } from "react";
import { submitMyKareLead } from '@/utils/leadService';

import useIsMobile from "@/hooks/useIsMobile";
import { sendOtp, verifyOtp } from "@/utils/otpUtils";
import CONFIG from "@/config";
import { useRouter } from "next/router";

export default function OtpForm() {
    const isMobile = useIsMobile();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [otp, setOtp] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile") {
            const numericValue = value.replace(/\D/g, "").slice(0, 10);
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
            return;
        }
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.mobile) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/send-email/ads`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            submitMyKareLead(formData);

            if (response.ok) {
                router.push("/thank-you/");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            alert("Error submitting form.");
        }
    };

    return (
        <div className="flex items-center justify-center py-4 bg-gray-50">
            {isMobile ? (
                /* MOBILE */
                <div className="flex flex-col space-y-2">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Patient Name"
                        className="px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        className="px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    {/* OTP Input */}
                    {step >= 2 && (
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            className="px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    )}

                    {/* Buttons */}
                    {step === 1 && (
                        <button
                            type="button"
                            onClick={() =>
                                sendOtp({
                                    mobileNumber: formData.mobile,
                                    setGeneratedOtp,
                                    onSuccess: () => setStep(2),
                                })
                            }
                            disabled={!formData.name.trim() || formData.mobile.length !== 10}
                            className={`px-8 py-2 bg-pink-700 text-white font-semibold rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed transition`}
                        >
                            Get OTP
                        </button>
                    )}

                    {step === 2 && (
                        <button
                            type="button"
                            onClick={() =>
                                verifyOtp({
                                    enteredOtp: otp,
                                    generatedOtp,
                                    onSuccess: () => setStep(3),
                                })
                            }
                            className="px-8 py-2 bg-pink-700 text-white font-semibold rounded-md"
                        >
                            Verify OTP
                        </button>
                    )}

                    {step === 3 && (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-8 py-2 bg-pink-700 text-white font-semibold rounded-md"
                        >
                            Submit
                        </button>
                    )}
                </div>
            ) : (
                /* DESKTOP */
                <div className="flex items-center space-x-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Patient Name"
                        className="px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        className="px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />

                    {step >= 2 && (
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="OTP"
                            className="px-8 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    )}

                    {step === 1 && (
                        <button
                            type="button"
                            onClick={() =>
                                sendOtp({
                                    mobileNumber: formData.mobile,
                                    setGeneratedOtp,
                                    onSuccess: () => setStep(2),
                                })
                            }
                            disabled={!formData.name.trim() || formData.mobile.length !== 10}
                            className={`px-8 py-2 bg-pink-700 text-white font-semibold rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed transition`}
                        >
                            Get OTP
                        </button>
                    )}

                    {step === 2 && (
                        <button
                            type="button"
                            onClick={() =>
                                verifyOtp({
                                    enteredOtp: otp,
                                    generatedOtp,
                                    onSuccess: () => setStep(3),
                                })
                            }
                            className="px-8 py-2 bg-pink-700 text-white font-semibold rounded-md"
                        >
                            Verify OTP
                        </button>
                    )}

                    {step === 3 && (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="px-8 py-2 bg-pink-700 text-white font-semibold rounded-md"
                        >
                            Submit
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
