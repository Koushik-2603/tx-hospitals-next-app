"use client";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function SocialSidebar() {

    const isMobile = useIsMobile();

    const desktopIcons = [
        { src: "/assets/FixedIcons/Whatsup Logo.png", alt: "WhatsApp", link: "https://wa.me/9144514459" },
        { src: "/assets/FixedIcons/FB logo.png", alt: "Facebook", link: "https://www.facebook.com/txhospitals/" },
        { src: "/assets/FixedIcons/Instgram Logo.png", alt: "Instagram", link: "https://www.instagram.com/txhospitals/" },
        { src: "/assets/FixedIcons/Linkid in Logo.png", alt: "LinkedIn", link: "https://www.linkedin.com/company/tx-hospitals/" },
        { src: "/assets/FixedIcons/Youtub Logo.png", alt: "YouTube", link: "https://www.youtube.com/@txhospitalsofficial" },
    ];

    const mobileIcons = [
        { src: "/assets/FixedIcons/Call Icon .webp", alt: "Call Us", link: "tel:9144514459" },
        { src: "/assets/FixedIcons/Whatsup Icon.webp", alt: "WhatsApp", link: "https://wa.me/9144514459" },
        { src: "/assets/FixedIcons/Doctor Consultant Icon.webp", alt: "Doctors Appointment", link: "https://txhospitals.in/find-doctor/" },
        { src: "/assets/FixedIcons/Second opinon _ Icon.webp", alt: "Second Opinion", link: "https://txhospitals.in/surgery-care/" },
    ];

    return (
        <>
            {isMobile ? (
                <div className="fixed bottom-0 z-50 w-full bg-pink-700">
                    <div className="flex flex-row items-center justify-center">
                        {mobileIcons.map((icon, idx) => (
                            <button
                                key={idx}
                                type="button"
                                aria-label={icon.alt}
                                onClick={() => window.open(icon.link, "_blank")}
                                className="flex flex-col items-center justify-center gap-1 px-2 py-1 border-r border-white/30 last:border-r-0 text-white cursor-pointer transition"
                            >
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <p className="text-[10px] font-medium text-center">
                                    {icon.alt}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50">
                    <div
                        className="flex flex-col items-center py-4 w-10 h-auto"
                        style={{
                            backgroundImage: "url('/assets/FixedIcons/Social Media Back Bg.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                        }}
                    >
                        {desktopIcons.map((icon, idx) => (
                            <a
                                key={idx}
                                href={icon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={icon.alt}
                                className="flex items-center justify-center w-10 h-10 transition-all duration-300 transform hover:scale-110"
                            >
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
