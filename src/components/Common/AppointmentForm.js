"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";
import CONFIG from "@/config";
import countryOptions from "@/utils/countryOptions";

export default function AppointmentForm({ department, doctorName }) {
    const router = useRouter();
    const isMobile = useIsMobile();

    const [country, setCountry] = useState("India");
    const [selectedCountry, setSelectedCountry] = useState(
        countryOptions.find((c) => c.name === "India")
    );

    const [whatsappSame, setWhatsappSame] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        whatsapp: "",
        message: "",
    });

    // Auto-fill WhatsApp = mobile
    useEffect(() => {
        if (whatsappSame) {
            setFormData((prev) => ({ ...prev, whatsapp: prev.mobile }));
        }
    }, [whatsappSame, formData.mobile]);

    // Handle form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/send-email/COE`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, department }),
            });

            if (response.ok) {
                router.push("/thank-you");
            } else {
                console.error("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="border bg-gray-200 shadow-lg rounded-xl my-4">
            {department && doctorName && (
                <p className="bg-pink-700 text-white text-lg text-center p-2 rounded-t-xl font-semibold">
                    Talk to a {doctorName} Doctor today!
                </p>
            )}
            <div className="p-4">
                <div className="flex px-6 gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="countryType"
                            value="India"
                            checked={country === "India"}
                            onChange={() => {
                                setCountry("India");
                                setSelectedCountry(
                                    countryOptions.find((c) => c.name === "India")
                                );
                            }}
                            className="h-4 w-4 accent-gray-700"
                        />
                        <span>India</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="countryType"
                            value="Other Countries"
                            checked={country === "Other Countries"}
                            onChange={() => {
                                setCountry("Other Countries");
                                setSelectedCountry(
                                    countryOptions.find((c) => c.name !== "India")
                                );
                            }}
                            className="h-4 w-4 accent-gray-700"
                        />
                        <span>Other Countries</span>
                    </label>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Full Form */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border rounded-full mt-2 focus:outline-pink-300 ${isMobile ? "p-1" : "p-2"}`}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border rounded-full mt-2 focus:outline-pink-300 ${isMobile ? "p-1" : "p-2"}`}
                    />

                    {country === "Other Countries" && (
                        <select
                            className={`w-full border focus:outline-pink-300 rounded-full ${isMobile ? "p-1 mt-2" : "px-3 py-2 mt-2"}`}
                            value={selectedCountry.name}
                            onChange={(e) =>
                                setSelectedCountry(
                                    countryOptions.find((c) => c.name === e.target.value)
                                )
                            }
                        >
                            {countryOptions
                                .filter((c) => c.name !== "India")
                                .map((country) => (
                                    <option key={country.code} value={country.name}>
                                        {country.name} ({country.code})
                                    </option>
                                ))}
                        </select>
                    )}

                    {/* Phone Field */}
                    <div
                        className={`relative bg-white flex items-center border rounded-full mt-2 ${isMobile ? "p-1" : "p-2"
                            }`}
                    >
                        <div className="absolute left-2 flex items-center gap-1 pointer-events-none">
                            <Image
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                width={20}
                                height={14}
                            />
                            <span>{selectedCountry.code}</span>
                        </div>

                        <div className="absolute left-20 h-[60%] border-l border-gray-400"></div>

                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Phone Number"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full pl-20 outline-none bg-transparent"
                        />
                    </div>

                    {/* WhatsApp same checkbox */}
                    <div className={`flex items-center mt-2`}>
                        <input
                            type="checkbox"
                            className="accent-pink-700 mr-2"
                            checked={whatsappSame}
                            onChange={() => setWhatsappSame(!whatsappSame)}
                        />
                        <span className={`${isMobile ? "text-sm" : ""}`}>
                            Yes, same as WhatsApp Number
                        </span>
                    </div>

                    {/* WhatsApp Field */}
                    {!whatsappSame && (
                        <input
                            type="tel"
                            name="whatsapp"
                            placeholder="WhatsApp Number"
                            required
                            value={formData.whatsapp}
                            onChange={handleChange}
                            className={`w-full border rounded-full mt-2 focus:outline-pink-300 ${isMobile ? "p-1" : "p-2"
                                }`}
                        />
                    )}

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full border rounded-xl resize-none mt-2 focus:outline-pink-300 ${isMobile ? "p-1 h-16" : "p-2 h-24"
                            }`}
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full bg-pink-700 text-white rounded-full mt-4 ${isMobile ? "p-1" : "p-2"
                            }`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}