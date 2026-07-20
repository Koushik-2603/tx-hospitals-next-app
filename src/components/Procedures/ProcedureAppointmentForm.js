import { useState } from "react";
import { submitMyKareLead } from '@/utils/leadService';

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import CONFIG from "@/config";
import { sendOtp, verifyOtp } from "@/utils/otpUtils";
import useIsMobile from "@/hooks/useIsMobile";

export default function ProcedureAppointmentForm({ heading }) {
    const router = useRouter();
    const isMobile = useIsMobile();
    const [step, setStep] = useState(1);
    const [generatedOtp, setGeneratedOtp] = useState("");
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        subject: heading ? `Appointment Request for ${heading}` : "Appointment Request",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "mobile") {
            const numericValue = value.replace(/\D/g, "").slice(0, 10);
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSendOtp = async () => {
        if (!formData.mobile || formData.mobile.length < 10) {
            toast.error("Please enter a valid mobile number");
            return;
        }
        setLoading(true);
        try {
            await sendOtp({
                mobileNumber: formData.mobile,
                setGeneratedOtp,
                onSuccess: () => {
                    setStep(2);
                    setLoading(false);
                },
            });
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp) {
            toast.error("Please enter OTP");
            return;
        }
        const isValid = verifyOtp({
            enteredOtp: otp,
            generatedOtp,
            onSuccess: () => setStep(3),
        });
        if (!isValid) {
            // handle error if needed, toast is already shown in utils
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.mobile) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);

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
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            toast.error("Error submitting form.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full lg:w-2/5">
            <div className="bg-gradient-to-b from-[#EFD7DE] to-[#DADADA] p-6 md:p-8 rounded-2xl shadow-lg relative">
                <h2 className="text-2xl md:text-3xl font-bold text-[#C23358] mb-2">
                    Book an Appointment
                </h2>
                <p className="text-black font-medium mb-6">
                    Get expert consultation today
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition bg-white"
                        />
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={10}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition bg-white"
                            />
                            {step === 1 && (
                                <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    disabled={loading || !formData.name.trim() || formData.mobile.length !== 10}
                                    className="px-4 py-3 bg-[#C23358] text-white font-semibold rounded-lg hover:bg-pink-800 transition whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {loading ? "Sending..." : "Send OTP"}
                                </button>
                            )}
                        </div>
                    </div>

                    {step >= 2 && (
                        <div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition bg-white"
                                />
                                {step === 2 && (
                                    <button
                                        type="button"
                                        onClick={handleVerifyOtp}
                                        className="px-4 py-3 bg-[#C23358] text-white font-semibold rounded-lg hover:bg-pink-800 transition whitespace-nowrap"
                                    >
                                        Verify
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={step !== 3 || loading}
                        className={`w-full bg-[#C23358] hover:bg-pink-800 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition transform active:scale-95 ${step !== 3 ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                        {loading ? "Submitting..." : "Submit for Appointment"}
                    </button>
                </form>
            </div>
        </div>
    );
}
