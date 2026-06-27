import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Header from '@/components/HomePage/Header';
import CallbackFooterSection from '@/components/HomePage/CallbackFooterSection';
import useIsMobile from "@/hooks/useIsMobile";

export default function Layout({ children }) {

    const [showButton, setShowButton] = useState(false);
    const isMobile = useIsMobile();

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
            <Header />
            <main>
                {children}
            </main>
            <CallbackFooterSection />
            {showButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className={`fixed right-2 bg-pink-700 text-white rounded-full shadow-lg hover:bg-pink-800 transition-all flex items-center justify-center z-50 ${isMobile ? 'bottom-20 p-2' : 'bottom-2 p-3'}`}
                >
                    <IoIosArrowUp size={24} />
                </button>
            )}
        </>
    );
}
