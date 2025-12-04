import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import HospitalNavbar from "@/components/HomePage/HospitalNavbar";
import useIsMobile from "@/hooks/useIsMobile";
import { useRouter } from "next/router";

const labels = [
    { title: "Request Appointment", path: "/find-doctor" },
    { title: "Online Consultation", path: "" },
    { title: "Health Checkup", path: "" },
    { title: "View Report", path: "" },
];

export default function HospitalHero() {

    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [forceSecondary, setForceSecondary] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isMobile === null) return null;

    return (
        <>
            {isMobile ? (
                <div className="w-full font-san">
                    <div className="relative h-[83vh]">
                        <video
                            className="absolute w-full h-full object-cover object-top"
                            src="/assets/720p_LR.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <HospitalNavbar
                            variant={isScrolled ? "secondary" : "primary"}
                            forceSecondary={forceSecondary}
                            setForceSecondary={setForceSecondary}
                        />
                    </div>
                    <div id="chairman-message-section">
                        <div className="grid grid-cols-2 gap-2 p-1">
                            {labels.map((label, idx) => (
                                <button
                                    key={idx}
                                    className="flex items-center justify-center bg-pink-700 text-white rounded-full gap-2 py-2 font-semibold hover:bg-pink-800 transition"
                                    onClick={() => router.push(label?.path)}
                                >
                                    <span className="text-xs">{label?.title}</span>
                                    <FiArrowRight size={16} />
                                </button>
                            ))}
                        </div>
                        <Image
                            src="/assets/Header/Chairmans message.png"
                            alt="Chairman's Message"
                            width={1300}
                            height={400}
                            className="w-full object-cover"
                        />
                    </div>
                </div >
            ) : (
                <div className="relative w-full font-sans text-white">
                    {/* Background Video */}
                    <div className="relative h-[95vh]">
                        <video
                            className="absolute w-full h-full object-cover object-top"
                            src="/assets/720p_LR.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="relative z-20 flex flex-col h-full justify-between p-2">
                            {/* Navbar */}
                            <HospitalNavbar
                                variant={isScrolled ? "secondary" : "primary"}
                                forceSecondary={forceSecondary}
                                setForceSecondary={setForceSecondary}
                            />

                            <div className="mt-auto flex flex-col items-center gap-6 w-full pb-12">
                                <div className="flex flex-row items-center justify-center gap-4 w-full max-w-4xl mx-auto">
                                    <div className="flex flex-1 relative">
                                        <input
                                            type="search"
                                            placeholder="Search for Disease & Conditions, Medicines"
                                            className="w-full bg-white py-2 pl-4 pr-10 border-2 border-pink-800 rounded-full text-black focus:outline-none"
                                        />
                                        <img
                                            src="/assets/Header/Search Icon.png"
                                            alt="search icon"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative" id="chairman-message-section">
                        <Image
                            src="/assets/Header/Chairmans message.png"
                            alt="Chairman's Message"
                            width={1300}
                            height={400}
                            className="w-full object-cover"
                        />

                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
                            <div className="flex justify-center gap-4 text-white mx-auto w-full bg-opacity-95">
                                {labels.map((label, idx) => (
                                    <button
                                        key={idx}
                                        className='flex items-center justify-center bg-pink-700 border rounded-full border-gray-200 gap-2 font-bold py-2 flex-1 transition hover:bg-pink-800'
                                        onClick={() => router.push(label?.path)}
                                    >
                                        {label?.title}
                                        <FiArrowRight size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}
