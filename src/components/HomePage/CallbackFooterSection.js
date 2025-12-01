import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

export default function CallbackFooterSection() {
    const [footerData, setFooterData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const router = useRouter();
    const isMobile = useIsMobile();

    useEffect(() => {
        const fetchFooter = async () => {
            try {
                const res = await fetch("https://api.txhospitals.vgworld.in/footer/get");
                const data = await res.json();
                setFooterData(data[0]);
            } catch (err) {
                console.error("Footer fetch failed:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchFooter();
    }, []);

    const handleSendOTP = () => setOtpSent(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    const sortByPriority = (a, b) => {
        const aPriority = parseInt(a.priority || "999", 10);
        const bPriority = parseInt(b.priority || "999", 10);
        return aPriority - bPriority;
    };

    const handleNavigation = (urlPath) => {
        if (urlPath && urlPath.trim() !== "") {
            router.push(urlPath);
        }
    };

    return (
        <>
            {isMobile ? (
                <div className="relative">
                    {/* --- Callback Form Section --- */}
                    <section className="relative bg-pink-200 rounded-[20px] overflow-hidden z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between p-2">
                            {/* Left side content */}
                            <div className="w-full">
                                <h3 className="text-gray-700 text-xs font-medium mb-1">
                                    Could not find what you are looking for?
                                </h3>
                                <h2 className="text-xl text-gray-900 mb-2">
                                    Request a Callback
                                </h2>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-wrap items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
                                    />

                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Mobile Number"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            className="border border-gray-300 rounded-l-md px-3 py-2 w-[208px] focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleSendOTP}
                                            className="bg-[#b22b4c] text-white font-medium px-3 py-2 rounded-r-md"
                                        >
                                            {otpSent ? "Change" : "Send OTP"}
                                        </button>
                                    </div>

                                    {otpSent && (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Enter OTP"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                className="border border-gray-300 rounded-md px-3 py-2 w-[150px] md:w-[180px] focus:outline-none"
                                            />

                                            <div className="flex flex-col text-sm">
                                                <button
                                                    type="button"
                                                    className="text-[#b22b4c] underline"
                                                >
                                                    Resend OTP
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <button
                                        type="submit"
                                        className="bg-[#b22b4c] text-white px-8 py-2 rounded-md "
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* --- Dynamic Footer Section --- */}
                    <footer className="bg-pink-700 text-white py-10 md:py-16 -mt-8 md:-mt-12 relative z-5">
                        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 px-2 text-sm">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <>
                                    {/* About */}
                                    <div>
                                        <h4 className="text-2xl mb-3">About</h4>
                                        <ul className="space-y-1">
                                            {footerData?.about
                                                ?.sort(sortByPriority)
                                                .map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleNavigation(item.urlPath)}
                                                        className={`hover:underline cursor-pointer ${item.urlPath ? "" : "opacity-70 cursor-default"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    {/* Specialties + Doctors */}
                                    <div>
                                        <h4 className="text-2xl mb-3">Specialties</h4>
                                        <ul className="space-y-1">
                                            {footerData?.specialities
                                                ?.sort(sortByPriority)
                                                .map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleNavigation(item.urlPath)}
                                                        className={`hover:underline cursor-pointer ${item.urlPath ? "" : "opacity-70 cursor-default"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl mt-3 mb-3">Doctors</h4>
                                        <ul className="space-y-1">
                                            {footerData?.doctors?.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    onClick={() => handleNavigation(item.urlPath)}
                                                    className={`hover:underline cursor-pointer ${item.urlPath ? "" : "opacity-70 cursor-default"
                                                        }`}
                                                >
                                                    {item.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Library 3-column alignment preserved */}
                                    <div>
                                        <h4 className="text-2xl mb-3">Library</h4>
                                        {Object.keys(footerData?.library || {})
                                            .slice(0, 3)
                                            .map((key, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <h5 className="text-xl mb-1">{key}</h5>
                                                    <ul className="space-y-1">
                                                        {footerData.library[key]?.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleNavigation(item.urlPath)}
                                                                className={`hover:underline cursor-pointer ${item.urlPath
                                                                    ? ""
                                                                    : "opacity-70 cursor-default"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>

                                    <div>
                                        {Object.keys(footerData?.library || {})
                                            .slice(3, 6)
                                            .map((key, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <h5 className="text-xl mb-1">{key}</h5>
                                                    <ul className="space-y-1">
                                                        {footerData.library[key]?.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleNavigation(item.urlPath)}
                                                                className={`hover:underline cursor-pointer ${item.urlPath
                                                                    ? ""
                                                                    : "opacity-70 cursor-default"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>

                                    <div>
                                        {Object.keys(footerData?.library || {})
                                            .slice(6)
                                            .map((key, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <h5 className="text-xl mb-1">{key}</h5>
                                                    <ul className="space-y-1">
                                                        {footerData.library[key]?.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleNavigation(item.urlPath)}
                                                                className={`hover:underline cursor-pointer ${item.urlPath
                                                                    ? ""
                                                                    : "opacity-70 cursor-default"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </footer>
                </div>
            ) : (
                <div className="relative">
                    {/* --- Callback Form Section --- */}
                    <section className="relative bg-pink-200 rounded-[40px] overflow-hidden z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between p-12">
                            {/* Left side content */}
                            <div className="w-full">
                                <h3 className="text-gray-700 text-sm font-medium mb-1">
                                    Could not find what you are looking for?
                                </h3>
                                <h2 className="text-3xl md:text-5xl  text-gray-900 mb-6">
                                    Request a Callback
                                </h2>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex flex-wrap items-center gap-3 md:gap-4"
                                >
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border border-gray-300 rounded-md px-3 py-2 w-[150px] md:w-[200px] focus:outline-none"
                                    />

                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Mobile Number"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            className="border border-gray-300 rounded-l-md px-3 py-2 w-[150px] md:w-[180px] focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleSendOTP}
                                            className="bg-[#b22b4c] text-white font-medium px-3 py-2 rounded-r-md"
                                        >
                                            {otpSent ? "Change" : "Send OTP"}
                                        </button>
                                    </div>

                                    {otpSent && (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Enter OTP"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                className="border border-gray-300 rounded-md px-3 py-2 w-[150px] md:w-[180px] focus:outline-none"
                                            />

                                            <div className="flex flex-col text-sm">
                                                <button
                                                    type="button"
                                                    className="text-[#b22b4c] underline"
                                                >
                                                    Resend OTP
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <button
                                        type="submit"
                                        className="bg-[#b22b4c] text-white px-8 py-2 rounded-md "
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                            {/* Doctor image */}
                            {/* <div className="w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
                        <Image
                            src="/assets/Footer/Doctor Lady Image.png"
                            alt="Doctor"
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                    </div> */}
                        </div>
                    </section>

                    {/* --- Dynamic Footer Section --- */}
                    <footer className="bg-pink-700 text-white py-10 md:py-16 -mt-8 md:-mt-12 relative z-5">
                        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-10 text-sm">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <>
                                    {/* About */}
                                    <div>
                                        <h4 className="text-2xl mb-3">About</h4>
                                        <ul className="space-y-1">
                                            {footerData?.about
                                                ?.sort(sortByPriority)
                                                .map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleNavigation(item.urlPath)}
                                                        className={`hover:underline cursor-pointer ${item.urlPath ? "" : "opacity-70 cursor-default"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>

                                    {/* Specialties + Doctors */}
                                    <div>
                                        <h4 className="text-2xl mb-3">Specialties</h4>
                                        <ul className="space-y-1">
                                            {footerData?.specialities
                                                ?.sort(sortByPriority)
                                                .map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleNavigation(item.urlPath)}
                                                        className={`hover:underline cursor-pointer ${item.urlPath ? "" : "opacity-70 cursor-default"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </li>
                                                ))}
                                        </ul>

                                        <div>
                                            <h4 className="text-2xl mt-3 mb-3">Doctors</h4>
                                            <ul className="space-y-1">
                                                {footerData?.doctors?.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        onClick={() => handleNavigation(item.urlPath)}
                                                        className={`hover:underline cursor-pointer ${item.urlPath ? "" : "opacity-70 cursor-default"
                                                            }`}
                                                    >
                                                        {item.title}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Library 3-column alignment preserved */}
                                    <div>
                                        <h4 className="text-2xl mb-3">Library</h4>
                                        {Object.keys(footerData?.library || {})
                                            .slice(0, 3)
                                            .map((key, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <h5 className="text-xl mb-1">{key}</h5>
                                                    <ul className="space-y-1">
                                                        {footerData.library[key]?.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleNavigation(item.urlPath)}
                                                                className={`hover:underline cursor-pointer ${item.urlPath
                                                                    ? ""
                                                                    : "opacity-70 cursor-default"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>

                                    <div>
                                        {Object.keys(footerData?.library || {})
                                            .slice(3, 6)
                                            .map((key, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <h5 className="text-xl mb-1">{key}</h5>
                                                    <ul className="space-y-1">
                                                        {footerData.library[key]?.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleNavigation(item.urlPath)}
                                                                className={`hover:underline cursor-pointer ${item.urlPath
                                                                    ? ""
                                                                    : "opacity-70 cursor-default"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>

                                    <div>
                                        {Object.keys(footerData?.library || {})
                                            .slice(6)
                                            .map((key, idx) => (
                                                <div key={idx} className="mb-3">
                                                    <h5 className="text-xl mb-1">{key}</h5>
                                                    <ul className="space-y-1">
                                                        {footerData.library[key]?.map((item, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => handleNavigation(item.urlPath)}
                                                                className={`hover:underline cursor-pointer ${item.urlPath
                                                                    ? ""
                                                                    : "opacity-70 cursor-default"
                                                                    }`}
                                                            >
                                                                {item.title}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
}
