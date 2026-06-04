"use client";

import { useState, useRef, useEffect } from "react";
import CONFIG from "@/config";
import { useRouter } from "next/router";
import axios from "axios";

export default function SecondOpinionForm({ opinionType = "First" }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        branch: "",
        specialty: "",
        concern: "",
        agreed: false
    });

    // Custom searchable specialty select state
    const [isSpecialtyOpen, setIsSpecialtyOpen] = useState(false);
    const [specialtySearch, setSpecialtySearch] = useState("");
    const specialtyRef = useRef(null);

    // Dynamic branches array
    const branches = [
        "TX Hospitals Uppal",
        "TX Hospitals Kachiguda",
        "TX Hospitals Banjara Hills",
        "TX Children Hospitals Banjara Hills"
    ];

    // Dynamic specialties list matching standard clinical specialties
    const specialtiesList = [
        "Cardiology",
        "Gastroenterology",
        "Neurology",
        "Robotic Sciences",
        "Transplant Medicine",
        "Nephrology",
        "Urology",
        "Orthopaedics",
        "Mother & Child Care",
        "Oncology",
        "Internal Medicine",
        "Pulmonology",
        "ENT",
        "Skin & Cosmetic Care",
        "Dental & Maxillofacial",
        "Anaesthesia & Pain Management"
    ];

    // Filter specialties based on search
    const filteredSpecialties = specialtiesList.filter((item) =>
        item.toLowerCase().includes(specialtySearch.toLowerCase())
    );

    // Close specialty dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (specialtyRef.current && !specialtyRef.current.contains(event.target)) {
                setIsSpecialtyOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle standard input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "mobile") {
            const numericValue = value.replace(/\D/g, "").slice(0, 10);
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    // Handle form submit to dynamic-form endpoint
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validations
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!formData.name.trim()) return alert("Please enter your name.");
        if (!phoneRegex.test(formData.mobile)) return alert("Please enter a valid 10-digit mobile number.");
        if (!formData.branch) return alert("Please select your branch.");
        if (!formData.specialty) return alert("Please select your specialty.");
        if (!formData.agreed) return alert("You must agree to the Terms & Conditions.");

        setLoading(true);
        const isUppal = formData.branch.toLowerCase().includes("uppal");

        try {
            const endpoint = `${CONFIG.API_BASE_URL}/send-email/dynamic-form`;

            // Replicate structure from dynamic-form integrations (e.g. Uppal forms)
            const payload = {
                to: "crm.txhospitals@gmail.com, manager@txhospitals.com, frontdesk@txhospitals.com",
                cc: isUppal ? "info.txhospitals@gmail.com, manidhar139@gmail.com" : "info.txhospitals@gmail.com",
                subject: `New Second Opinion Inquiry - ${formData.branch} - ${formData.name}`,
                html: `
                    <h3>New Second Opinion Inquiry</h3>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Mobile:</strong> ${formData.mobile}</p>
                    <p><strong>Email Address:</strong> ${formData.email || "N/A"}</p>
                    <p><strong>Branch Center:</strong> ${formData.branch}</p>
                    <p><strong>Specialty Selected:</strong> ${formData.specialty}</p>
                    <p><strong>Patient Concern:</strong> ${formData.concern || "N/A"}</p>
                    <p><strong>Page:</strong> ${document.title || "Free Second Opinion Landing Page"}</p>
                    <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
                `,
                page: document.title || "Free Second Opinion Landing Page",
                location: formData.branch,
                name: formData.name,
                mobile: formData.mobile,
                email: formData.email,
                specialty: formData.specialty,
                concern: formData.concern
            };

            const response = await axios.post(endpoint, payload);

            if (response.status === 200 || response.status === 201) {
                // Navigate to thank-you page on successful submit
                router.push("/thank-you/");
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Dynamic Form Submission Error:", error);
            alert("Error sending details. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100 p-2 sm:p-3 w-full max-w-[390px] transition-all hover:shadow-[0_20px_55px_rgba(0,0,0,0.1)]">
            {/* Form Headers */}
            <h3 className="text-lg md:text-xl font-bold font-montserrat text-gray-800 tracking-tight leading-tight">
                Book Your <span className="text-[#b01640]">{opinionType} Opinion</span> Consultation
            </h3>
            <p className="text-[11px] md:text-xs text-gray-500 font-inter mt-1.5 mb-4 leading-snug">
                Share your details and our care team will connect with you.
            </p>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-3">
                {/* Full Name */}
                <div>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                        className="w-full text-xs md:text-sm border border-gray-200 rounded-lg px-3.5 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b01640]/25 focus:border-[#b01640] transition-all font-inter"
                    />
                </div>

                {/* Mobile Number */}
                <div>
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Mobile Number"
                        className="w-full text-xs md:text-sm border border-gray-200 rounded-lg px-3.5 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b01640]/25 focus:border-[#b01640] transition-all font-inter"
                    />
                </div>

                {/* Email Address */}
                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full text-xs md:text-sm border border-gray-200 rounded-lg px-3.5 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b01640]/25 focus:border-[#b01640] transition-all font-inter"
                    />
                </div>

                {/* Select Branches */}
                <div>
                    <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                        className="w-full text-xs md:text-sm border border-gray-200 rounded-lg px-3.5 py-2 text-gray-750 bg-white focus:outline-none focus:ring-2 focus:ring-[#b01640]/25 focus:border-[#b01640] transition-all appearance-none cursor-pointer font-inter"
                        style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.75rem center',
                            backgroundSize: '1.25rem',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <option value="" disabled>Select Branches</option>
                        {branches.map((branch, idx) => (
                            <option key={idx} value={branch}>
                                {branch}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Searchable Select Specialty */}
                <div className="relative" ref={specialtyRef}>
                    <div
                        onClick={() => setIsSpecialtyOpen(!isSpecialtyOpen)}
                        className="w-full text-xs md:text-sm border border-gray-200 rounded-lg px-3.5 py-2 text-gray-700 bg-white cursor-pointer flex justify-between items-center transition-all focus:outline-none font-inter"
                    >
                        <span className={formData.specialty ? "text-gray-850" : "text-gray-400 font-inter"}>
                            {formData.specialty || "Select Specialty"}
                        </span>
                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${isSpecialtyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {isSpecialtyOpen && (
                        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-2">
                            {/* Search box input inside dropdown */}
                            <input
                                type="text"
                                placeholder="Search specialty..."
                                value={specialtySearch}
                                onChange={(e) => setSpecialtySearch(e.target.value)}
                                className="w-full text-xs border border-gray-200 rounded-md px-3 py-1.5 mb-2 focus:outline-none focus:ring-2 focus:ring-[#b01640]/25 focus:border-[#b01640] outline-none font-inter"
                            />

                            {/* Options with custom scroll */}
                            <div className="max-h-40 overflow-y-auto divide-y divide-gray-50 select-no-scrollbar">
                                {filteredSpecialties.length > 0 ? (
                                    filteredSpecialties.map((spec, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => {
                                                setFormData(prev => ({ ...prev, specialty: spec }));
                                                setIsSpecialtyOpen(false);
                                                setSpecialtySearch("");
                                            }}
                                            className="px-3 py-2 text-xs text-gray-700 hover:bg-pink-50 hover:text-[#b01640] rounded-md cursor-pointer transition-all font-inter"
                                        >
                                            {spec}
                                        </div>
                                    ))
                                ) : (
                                    <div className="px-3 py-2 text-xs text-gray-400 text-center font-inter">No specialties found</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Briefly describe concern */}
                <div>
                    <textarea
                        name="concern"
                        value={formData.concern}
                        onChange={handleChange}
                        placeholder="Briefly describe your concern"
                        rows={2}
                        className="w-full text-xs md:text-sm border border-gray-200 rounded-lg px-3.5 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b01640]/25 focus:border-[#b01640] transition-all resize-none font-inter"
                    ></textarea>
                </div>

                {/* T&C Checkbox */}
                <div className="flex items-start">
                    <input
                        id="terms"
                        name="agreed"
                        type="checkbox"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300 text-[#b01640] focus:ring-[#b01640] cursor-pointer"
                    />
                    <label htmlFor="terms" className="ml-2 text-[9px] md:text-[10px] text-gray-500 font-inter cursor-pointer leading-tight select-none">
                        I agree to the <span className="underline hover:text-gray-800 transition">Terms & Conditions</span> and <span className="underline hover:text-gray-800 transition">Privacy Policy</span>
                    </label>
                </div>

                {/* Submit button */}
                <div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#b01640] hover:bg-[#8b1232] text-white text-xs md:text-sm font-bold py-2 md:py-2.5 px-4 rounded-lg tracking-wider transition-all transform active:scale-[0.98] shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed uppercase font-montserrat flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                Sending Request...
                            </>
                        ) : (
                            "Request Call Back"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
