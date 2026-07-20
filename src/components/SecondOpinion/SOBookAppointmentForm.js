"use client";

import { useState } from "react";
import { submitMyKareLead } from '@/utils/leadService';

import useIsMobile from "@/hooks/useIsMobile";
import { sendOtp, verifyOtp } from "@/utils/otpUtils";
import CONFIG from "@/config";
import { useRouter } from "next/router";

export default function SOBookAppointemntForm() {

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
        setFormData({
            ...formData,
            [name]: value,
        });
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
        <>
            {isMobile ? (
                <div className="px-3">
                    <div className="bg-pink-50 rounded-2xl p-3 max-w-sm w-full shadow-lg">
                        <h3 className="text-2xl font-semibold text-center text-[#8B1D2C] mb-3">
                            Book Appointment
                        </h3>

                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Enter your Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-full px-4 py-2 border border-gray-400 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Mobile Number
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength={10}
                                        className="flex-1 rounded-full px-4 py-2 border border-gray-400 focus:outline-none"
                                    />

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
                                            className="px-5 rounded-full border border-gray-400 text-sm font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                        >
                                            Send OTP
                                        </button>
                                    )}
                                </div>
                            </div>
                            {step >= 2 && (
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        OTP
                                    </label>
                                    <input
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="w-full rounded-full px-4 py-2 border border-gray-400 focus:outline-none"
                                    />
                                </div>
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
                                    className="w-full bg-[#B12A3E] text-white rounded-full py-2 font-semibold hover:opacity-90 transition"
                                >
                                    Verify OTP
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={step !== 3}
                                className={`w-full bg-[#B12A3E] text-white rounded-full py-2 font-semibold hover:opacity-90 transition ${step !== 3 ? "cursor-not-allowed" : ""}`}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="bg-pink-50 rounded-2xl p-6 max-w-sm w-full shadow-lg">
                    <h3 className="text-2xl font-semibold text-center text-[#8B1D2C] mb-3">
                        Book Appointment
                    </h3>

                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Enter your Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-full px-4 py-2 border border-gray-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Mobile Number
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={10}
                                    className="flex-1 rounded-full px-4 py-2 border border-gray-400 focus:outline-none"
                                />

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
                                        className="px-5 rounded-full border border-gray-400 text-sm font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                                    >
                                        Send OTP
                                    </button>
                                )}
                            </div>
                        </div>
                        {step >= 2 && (
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    OTP
                                </label>
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full rounded-full px-4 py-2 border border-gray-400 focus:outline-none"
                                />
                            </div>
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
                                className="w-full bg-[#B12A3E] text-white rounded-full py-2 font-semibold hover:opacity-90 transition"
                            >
                                Verify OTP
                            </button>
                        )}
                        <button
                            type="submit"
                            disabled={step !== 3}
                            className={`w-full bg-[#B12A3E] text-white rounded-full py-2 font-semibold hover:opacity-90 transition ${step !== 3 ? "cursor-not-allowed" : ""}`}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
