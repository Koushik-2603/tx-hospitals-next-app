"use client";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function SocialSidebar() {

    const isMobile = useIsMobile();

    const icons = [
        { src: "/assets/FixedIcons/Whatsup Logo.png", alt: "WhatsApp", link: "https://wa.me/9144514459" },
        { src: "/assets/FixedIcons/FB logo.png", alt: "Facebook", link: "https://www.facebook.com/txhospitals/" },
        { src: "/assets/FixedIcons/Instgram Logo.png", alt: "Instagram", link: "https://www.instagram.com/txhospitals/" },
        { src: "/assets/FixedIcons/Linkid in Logo.png", alt: "LinkedIn", link: "https://www.linkedin.com/company/tx-hospitals/" },
        { src: "/assets/FixedIcons/Youtub Logo.png", alt: "YouTube", link: "https://www.youtube.com/@txhospitalsofficial" },
    ];

    return (
        <>
            {isMobile ? (
                <></>
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
                        {icons.map((icon, idx) => (
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
