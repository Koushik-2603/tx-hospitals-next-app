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
                    <footer className="bg-[#7b1642] text-white py-2 relative z-5">
                        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 px-2 text-xs">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                <>
                                    {/* About */}
                                    <div>
                                        <h4 className="text-xl mb-3">About</h4>
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
                                        <h4 className="text-xl mb-3">Specialties</h4>
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
                                        <h4 className="text-xl mt-3 mb-3">Doctors</h4>
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
                                        <h4 className="text-xl mb-3">Library</h4>
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
                    <footer className="bg-[#7b1642] text-white py-4 relative z-5">
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
