import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import CONFIG from "../../config";
import { useRouter } from "next/router";

const BookAppointmentForm = ({ showModal, setShowModal }) => {

    const router = useRouter();

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
        router.push("/thank-you");
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
                    <div className="bg-pink-700 font-inter text-white p-6 rounded-xl shadow-lg w-full max-w-lg relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-white hover:text-gray-300"
                        >
                            <IoClose size={28} />
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-center">Book An Appointment</h2>

                        <form
                            action="https://formsubmit.co/crm.txhospitals@gmail.com"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {/* Hidden Fields */}
                            <input type="hidden" name="_cc" value="info.txhospitals@gmail.com" />
                            <input type="hidden" name="_captcha" value="false" />

                            {/* Patient Name */}
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

                            {/* Phone */}
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

                            {/* Date */}
                            <div>
                                <label className="block text-sm mb-1">Appointment Date*</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    className="w-full px-4 py-2 rounded-md text-black"
                                />
                            </div>

                            {/* Location */}
                            <div>
                                <label className="block text-sm mb-1">Preferred Location</label>
                                <select
                                    name="location"
                                    className="w-full px-4 py-2 rounded-md text-black"
                                >
                                    <option value="">Select a Location</option>
                                    <option>TX Hospitals Uppal</option>
                                    <option>TX Hospitals Kachiguda</option>
                                    <option>TX Hospitals Banjara Hills</option>
                                    <option>TX Children Hospitals Banjara Hills</option>
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
                </div>
            )}
        </>
    );
};

export default BookAppointmentForm;
