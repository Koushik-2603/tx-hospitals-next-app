import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import HospitalNavbar from '@/components/HomePage/HospitalNavbar';
import CallbackFooterSection from '@/components/HomePage/CallbackFooterSection';
import SocialSidebar from '@/components/HomePage/SocialSidebar';

export default function SecondaryLayout({ children }) {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <HospitalNavbar
                variant="secondary"
            />
            <SocialSidebar />
            <main className="pt-24">
                {children}
            </main>
            <CallbackFooterSection />
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-2 right-2 bg-pink-700 text-white p-3 rounded-full shadow-lg hover:bg-pink-800 transition-all flex items-center justify-center z-50"
                >
                    <IoIosArrowUp size={24} />
                </button>
            )}
        </>
    );
}
