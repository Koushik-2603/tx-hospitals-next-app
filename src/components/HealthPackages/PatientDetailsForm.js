"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import CONFIG from "@/config";

export default function PatientDetailsForm({ title }) {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        appointmentdate: "",
        location: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`${CONFIG.API_BASE_URL}/send-email/health-package`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    packageName: title || "",
                }),
            });

            router.push("/thank-you/");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send appointment request.");
        }
    };

    return (
        <div className="bg-gray-100 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                Patient Details
            </h2>

            <form className="space-y-2" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Patient Name*
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                </div>

                {/* Mobile */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Mobile Number*
                    </label>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="+91"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Appointment Date*
                    </label>
                    <input
                        type="date"
                        name="appointmentdate"
                        value={formData.appointmentdate}
                        onChange={handleChange}
                        required
                        className="w-full px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Preferred Location
                    </label>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600"
                    >
                        <option value="">Select a Location</option>
                        <option>TX Hospitals Uppal</option>
                        <option>TX Hospitals Kachiguda</option>
                        <option>TX Hospitals Banjara Hills</option>
                        <option>TX Children Hospitals Banjara Hills</option>
                    </select>
                </div>

                {/* Note */}
                <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Consultations and Mammography will not be
                    available on Sunday and Public Holidays
                </p>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-pink-700 text-white font-semibold py-2 px-4 w-full rounded-full hover:bg-pink-800 transition"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
}
