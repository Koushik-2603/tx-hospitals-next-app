import React, { useState, useEffect } from "react";
import CONFIG from "@/config";
import { useRouter } from "next/router";

const AppointmentForm = () => {

    const router = useRouter
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        location: "",
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
        router.push("/thank-you/");
    };

    return (
        <>
            {!isMobile && (
                <div className="bg-pink-700 font-inter text-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto md:mx-0">
                    <h2 className="text-2xl font-bold mb-4 text-center">Book An Appointment</h2>
                    <form
                        action="https://formsubmit.co/crm.txhospitals@gmail.com"
                        method="POST"
                        encType="multipart/form-data"
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        {/* CC Email */}
                        <input type="hidden" name="_cc" value="info.txhospitals@gmail.com" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div>
                            <label className="block text-sm mb-1">Patient Name*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                required
                                className="w-full px-4 py-2 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Mobile Number*</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone*"
                                required
                                className="w-full px-4 py-2 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Appointment Date*</label>
                            <input
                                type="date"
                                name="date"
                                required
                                className="w-full px-4 py-2 rounded-md text-black"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Preferred Location</label>
                            <select
                                name="location"
                                className="w-full px-4 py-2 rounded-md text-black"
                            >
                                <option value="">Select Location</option>
                                <option value="Banjara Hills">Banjara Hills</option>
                                <option value="Uppal">Uppal</option>
                                <option value="Kachiguda">Kachiguda</option>
                            </select>
                        </div>
                        <div className="text-center pt-2">
                            <button
                                type="submit"
                                className="bg-white text-pink-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {isMobile && (
                <div className="bg-pink-700 font-inter text-white p-4 rounded-xl shadow-lg w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-center">Book An Appointment</h2>
                    <form
                        action="https://formsubmit.co/crm.txhospitals@gmail.com"
                        method="POST"
                        encType="multipart/form-data"
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="_cc" value="info.txhospitals@gmail.com" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div>
                            <label className="block text-sm mb-1">Patient Name*</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name*"
                                required
                                className="w-full px-4 py-2 rounded-md text-black"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="block text-sm mb-1">Mobile Number*</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone*"
                                required
                                className="w-full px-4 py-2 rounded-md text-black"
                            />
                        </div>

                        {/* Appointment Date */}
                        <div>
                            <label className="block text-sm mb-1">Appointment Date*</label>
                            <input
                                type="date"
                                name="date"
                                required
                                className="w-full px-4 py-2 rounded-md text-black"
                            />
                        </div>

                        {/* Preferred Location */}
                        <div>
                            <label className="block text-sm mb-1">Preferred Location</label>
                            <select
                                name="location"
                                className="w-full px-4 py-2 rounded-md text-black"
                            >
                                <option value="">Select Location</option>
                                <option value="Banjara Hills">Banjara Hills</option>
                                <option value="Uppal">Uppal</option>
                                <option value="Kachiguda">Kachiguda</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-2">
                            <button
                                type="submit"
                                className="bg-white text-pink-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AppointmentForm;
