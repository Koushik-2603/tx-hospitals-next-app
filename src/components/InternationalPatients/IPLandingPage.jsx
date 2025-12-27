import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import CONFIG from "@/config";
import { useRouter } from "next/router";
import About from "@/components/InternationalPatients/About";
import PlanYourTrip from "@/components/InternationalPatients/PlanYourTrip";
import MedicalOpinion from "@/components/InternationalPatients/MedicalOpinion";
import OurSpecialities from "@/components/InternationalPatients/OurSpecialities";

export default function IPLandingPage() {

    const router = useRouter();
    const isMobile = useIsMobile();
    const [whatsappSame, setWhatsappSame] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        whatsapp: "",
        message: "",
        country: "",
    });

    const countries = ["Yemen", "Sri Lanka", "Oman", "Nepal", "Bangladesh", "USA", "Sudan", "Djibouti", "South Sudan", "Somalia", "Nairobi", "Iraq", "Kenya", "Ethiopia", "UAE", "Nigeria"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            country: formData.country,
            message: formData.message,
        };

        try {
            const res = await fetch(`${CONFIG.API_BASE_URL}/send-email/international-patients`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            router.push("/thank-you/");
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };

    return (
        <>
            {isMobile ? (
                <>
                    <div className="-mt-6 mb-1">
                        <div className="relative w-full h-full overflow-hidden mb-2">
                            {/* Background Image */}
                            <img loading="lazy"
                                src="/assets/International_Patients/Slider Box Inside Image.png"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover -z-10"
                            />

                            {/* Content */}
                            <div className="w-full h-full flex flex-row items-center justify-between px-3 py-5">
                                {/* Left Text Section */}
                                <div className="text-black max-w-xs space-y-1">
                                    <h1 className="font-inter text-lg font-bold leading-tight">
                                        World-Class Treatment.
                                    </h1>
                                    <h2 className="text-base font-inter font-semibold leading-tight">
                                        India's Leading Doctors.
                                    </h2>
                                    <h2 className="text-base font-inter font-semibold leading-tight">
                                        Only at <strong>TX Hospitals.</strong>
                                    </h2>
                                    <button className="bg-pink-700 font-inter text-sm text-white px-3 py-1 rounded-3xl font-semibold shadow-lg hover:bg-pink-600 transition">
                                        Plan your Trip Now
                                    </button>
                                </div>

                                {/* Right Map Image */}
                                <div className="mt-0 max-w-[37%]">
                                    <img
                                        loading="lazy"
                                        src="/assets/International_Patients/Slider Image World Country.png"
                                        alt="World Map"
                                        className="max-w-[110%] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-stretch gap-2 px-2 py-1 bg-white">
                            {/* Left Section - Benefits */}
                            <div className="bg-pink-800 text-white px-5 py-6 rounded-2xl w-full max-w-3xl">
                                <div className="flex gap-6">

                                    {/* Left Column: Icons */}
                                    <div className="flex flex-col justify-between gap-6">
                                        <img loading="lazy" src="/assets/International_Patients/JCI Logo.png" alt="JciIcon" className="w-14 h-14" />
                                        <img loading="lazy" src="/assets/International_Patients/30 years Experienced  Icon.png" alt="DoctorIcon" className="w-14 h-14" />
                                        <img loading="lazy" src="/assets/International_Patients/Long Standing Resources Icon.png" alt="ResourcesIcon" className="w-14 h-14" />
                                        <img loading="lazy" src="/assets/International_Patients/Patient Wider Countries Icon.png" alt="GlobeIcon" className="w-14 h-14" />
                                    </div>

                                    {/* Right Column: Texts */}
                                    <div className="flex flex-col justify-between gap-6">
                                        <div>
                                            <p className="text-base font-inter font-medium">JCI</p>
                                            <p className="text-base font-inter font-medium">Accredited</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-inter font-medium">30+ Years</p>
                                            <p className="text-base font-inter font-medium">Experienced Doctors</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-inter font-medium">Long</p>
                                            <p className="text-base font-inter font-medium">Standing Resources</p>
                                        </div>
                                        <div>
                                            <p className="text-base font-inter font-medium">Patients from</p>
                                            <p className="text-base font-inter font-medium">Wider Countries</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Right Section - Form */}
                            <div className="bg-white border border-gray-300 shadow-2xl rounded-2xl p-4 w-full max-w-sm">
                                <h2 className="text-xl font-semibold text-pink-800 mb-6 text-center">TALK TO OUR EXPERTS</h2>
                                <form
                                    className="flex flex-col gap-4"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name*"
                                        required
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2"
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country, idx) => (
                                            <option key={idx} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Phone Number*"
                                        required
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                    />
                                    <div className="flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={whatsappSame}
                                            onChange={() => setWhatsappSame(!whatsappSame)}
                                        />
                                        <span>Yes same as WhatsApp Number</span>
                                    </div>
                                    {!whatsappSame && (
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            placeholder="WhatsApp Number"
                                            className="w-full p-2 border rounded mt-2"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                        />
                                    )}
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="bg-pink-800 font-inter text-white rounded-full py-2 font-semibold hover:bg-pink-700 transition"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <About />
                    <PlanYourTrip />
                    <MedicalOpinion />
                    <OurSpecialities />
                </>
            ) : (
                <>
                    <div className="mt-6">
                        <div className="relative w-full h-full overflow-hidden mb-4">
                            <img loading="lazy"
                                src="/assets/International_Patients/Slider Box Inside Image.png"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover -z-10"
                            />
                            <div className="w-full h-full flex flex-row items-center justify-between px-12 py-10">
                                <div className="text-black max-w-lg space-y-2">
                                    <h1 className="font-inter text-4xl font-bold leading-tight">
                                        World-Class Treatment.
                                    </h1>
                                    <h2 className="text-3xl font-inter font-semibold leading-tight">
                                        India's Leading Doctors.
                                    </h2>
                                    <h2 className="text-3xl font-inter font-semibold leading-tight">
                                        Only at <strong>TX Hospitals.</strong>
                                    </h2>
                                    <button className="bg-pink-700 font-inter text-white px-6 py-2 rounded-3xl font-semibold shadow-lg hover:bg-pink-600 transition">
                                        Plan your Trip Now
                                    </button>
                                </div>
                                <div className="mt-0 max-w-[55%]">
                                    <img
                                        loading="lazy"
                                        src="/assets/International_Patients/Slider Image World Country.png"
                                        alt="World Map"
                                        className="w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-stretch gap-4 px-14 py-5 bg-white">
                            <div className="bg-pink-800 text-white px-10 py-8 rounded-2xl w-full max-w-3xl flex flex-col justify-between">
                                <div className="flex items-center justify-between px-4 pt-14">
                                    <div className="flex items-start gap-4">
                                        <img loading="lazy" src="/assets/International_Patients/JCI Logo.png" alt="JciIcon" className="w-24 h-24" />
                                        <div>
                                            <p className="text-2xl font-medium font-inter">JCI</p>
                                            <p className="text-2xl font-inter font-medium">Accredited</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <img loading="lazy" src="/assets/International_Patients/30 years Experienced  Icon.png" alt="DoctorIcon" className="w-24 h-24" />
                                        <div>
                                            <p className="text-2xl font-inter font-medium">30+ Years</p>
                                            <p className="text-2xl font-inter font-medium">Experienced Doctors</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between px-4 pb-14">
                                    <div className="flex items-start gap-4">
                                        <img loading="lazy" src="/assets/International_Patients/Long Standing Resources Icon.png" alt="ResourcesIcon" className="w-24 h-24" />
                                        <div>
                                            <p className="text-2xl font-inter font-medium">Long</p>
                                            <p className="text-2xl font-inter font-medium">Standing Resources</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <img loading="lazy" src="/assets/International_Patients/Patient Wider Countries Icon.png" alt="GlobeIcon" className="w-24 h-24" />
                                        <div>
                                            <p className="text-2xl font-inter font-medium">Patients from</p>
                                            <p className="text-2xl font-inter font-medium">Wider Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-300 shadow-2xl rounded-2xl p-8 w-full max-w-sm">
                                <h2 className="text-xl font-semibold text-pink-800 mb-6 text-center">TALK TO OUR EXPERTS</h2>
                                <form
                                    className="flex flex-col gap-4"
                                    onSubmit={handleSubmit}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name*"
                                        required
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email*"
                                        required
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-md px-4 py-2 flex items-center gap-2"
                                        required
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country, idx) => (
                                            <option key={idx} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Phone Number*"
                                        required
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                    />
                                    <div className="flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={whatsappSame}
                                            onChange={() => setWhatsappSame(!whatsappSame)}
                                        />
                                        <span>Yes same as WhatsApp Number</span>
                                    </div>
                                    {!whatsappSame && (
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            placeholder="WhatsApp Number"
                                            className="w-full p-2 border rounded mt-2"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                        />
                                    )}
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="border font-inter border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="bg-pink-800 font-inter text-white rounded-full py-2 font-semibold hover:bg-pink-700 transition"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <About />
                    <PlanYourTrip />
                    <MedicalOpinion />
                    <OurSpecialities />
                </>
            )}
        </>
    );
}