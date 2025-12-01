"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiArrowRight, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Menu, X } from "lucide-react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MdPhoneInTalk } from "react-icons/md";
import Image from "next/image";
import LanguageDropdown from "@/components/HomePage/LanguageDropdown";
import useIsMobile from "@/hooks/useIsMobile";
import { dropdowns, quickLinks, managementNames, directorsNames, departments, healthConditions, treatmetnAndProcedures, diagnosticsGuide, symptomsGuide, medicineGuide,  medicalTechnology, secondOpinion, healthPackages } from "@/utils/dropdownValues";

export default function HospitalNavbar({ variant = "primary", forceSecondary = false, setForceSecondary }) {

    const navRef = useRef(null);
    const router = useRouter();
    const isMobile = useIsMobile();
    const [openMenu, setOpenMenu] = useState(null);
    const [hoveredAboutItem, setHoveredAboutItem] = useState(null);
    const [hoveredLibraryItem, setHoveredLibraryItem] = useState(null);
    const [navHeight, setNavHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCOEDropdownOpen, setIsCOEDropdownOpen] = useState(false);

    const isSecondary = variant === "secondary" || forceSecondary;

    const bgClass = isSecondary
        ? "bg-gray-50 text-black shadow-md fixed top-0 left-0 w-full z-50"
        : "text-white absolute top-0 left-0 w-full z-20";

    const linkClass = `
        relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
        after:w-0 after:h-[2px] after:bg-pink-700 after:transition-all after:duration-300
        hover:after:w-full
    `;
    
    useEffect(() => {
        if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    }, [isSecondary]);

    const handleOpen = (menu) => {
        setOpenMenu(menu);
        if (setForceSecondary) setForceSecondary(true);
    };

    const handleClose = () => {
        setOpenMenu(null);
        if (setForceSecondary) setForceSecondary(false);
    };

    const handleMenuClick = (path, scrollId = null) => {
        if (router.pathname === path) {
            handleClose();

            if (scrollId) {
                const element = document.getElementById(scrollId);
                if (element) {
                    const navHeight = document.querySelector("nav")?.offsetHeight || 0;
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementPosition - navHeight - 10,
                        behavior: "smooth",
                    });
                }
            }
        } else {
            router.push(path).then(() => {
                if (scrollId) {
                    const element = document.getElementById(scrollId);
                    if (element) {
                        const navHeight = document.querySelector("nav")?.offsetHeight || 0;
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                            top: elementPosition - navHeight - 10,
                            behavior: "smooth",
                        });
                    }
                }
            });
        }
    };

    const renderAboutDropdown = () => (
        <div
            onMouseEnter={() => handleOpen("about")}
            onMouseLeave={handleClose}
            className="fixed left-0 w-full bg-pink-50 shadow-md border-t border-gray-200 z-40 px-10 py-4"
            style={{ top: navHeight }}
        >
            <div className="max-w-6xl mx-auto flex justify-between text-black text-sm">
                {/* Left: About items with Management names */}
                <div className="flex gap-4 font-semibold min-w-[400px]">
                    <div className="flex flex-col gap-2 cursor-pointer">
                        {dropdowns.about.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center justify-between py-2 relative cursor-pointer min-w-[200px] 
                                    ${hoveredAboutItem === item ? "text-pink-700" : "text-gray-800"}`}
                                onMouseEnter={() => setHoveredAboutItem(item)}
                                onClick={() => {
                                    if (item === "Chairman’s Message") {
                                        handleMenuClick("/", "chairman-message-section");
                                        return;
                                    }
                                    if (item === "Why Choose Us") {
                                        handleMenuClick("/", "why-choose-us");
                                        return;
                                    }
                                    if (item === "Overview") {
                                        handleMenuClick("/about-us");
                                    }
                                }}
                            >
                                <span>{item}</span>
                                {(item === "Management" || item === "Board of Directors") && <FiChevronRight />}
                            </div>
                        ))}
                    </div>
                    <div className="mx-4 border-r border-gray-300"></div>

                    {hoveredAboutItem === "Management" && (
                        <div className="flex flex-col gap-2 min-w-[200px]">
                            {managementNames.map((name, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleMenuClick("/management", `management-${i}`)}
                                    className="text-sm font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredAboutItem === "Board of Directors" && (
                        <div className="flex flex-col gap-2 min-w-[200px]">
                            {directorsNames.map((name, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleMenuClick("/board-of-directors", `director-${i}`)}
                                    className="text-sm font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right: Quick Links */}
                <div className="w-72 pl-4 border-l border-gray-500 space-y-4 relative">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-lg text-left">Quick Links</h1>
                        <button
                            onClick={handleClose}
                            className="text-gray-600 hover:text-black text-xl font-bold"
                        >
                            <FiX />
                        </button>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <p className="text-xs text-gray-600 font-semibold">
                            Emergency & 24/7 Health Support
                        </p>
                        <p className="text-base font-medium text-black">9144514459</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {quickLinks.map((link, idx) => (
                            <button
                                key={idx}
                                className="flex items-center justify-between bg-pink-700 text-white text-left font-semibold p-2 rounded hover:bg-yellow-500 transition"
                                onClick={() => handleNavigate(link.path)}
                            >
                                {link.name} <FiArrowRight />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderLibraryDropdown = () => (
        <div
            onMouseEnter={() => handleOpen("library")}
            onMouseLeave={handleClose}
            className="fixed left-0 w-full bg-pink-50 shadow-md border-t border-gray-200 z-40 px-10 py-4"
            style={{ top: navHeight }}
        >
            <div className="max-w-6xl mx-auto flex justify-between text-black text-sm">
                <div className="flex gap-4 font-semibold min-w-[400px]">
                    <div className="flex flex-col gap-2 cursor-pointer">
                        {dropdowns.library.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center justify-between py-2 relative cursor-pointer min-w-[200px] 
                                    ${hoveredLibraryItem === item ? "text-pink-700" : "text-gray-800"}`}
                                onMouseEnter={() => setHoveredLibraryItem(item)}
                                onClick={() => setHoveredLibraryItem(item)}
                            >
                                <span>{item}</span>
                                {item !== "News & Media" && <FiChevronRight />}
                            </div>
                        ))}
                    </div>
                    <div className="mx-4 border-r border-gray-300"></div>
                    {hoveredLibraryItem === "Health Conditions" && (
                        <div className="grid grid-cols-3">
                            {healthConditions.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Treatments & Procedures" && (
                        <div className="grid grid-cols-3">
                            {treatmetnAndProcedures.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Diagnostics Guide" && (
                        <div className="grid grid-cols-3">
                            {diagnosticsGuide.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Medicine Guide" && (
                        <div className="grid grid-cols-4">
                            {medicineGuide.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Symptoms Guide" && (
                        <div className="grid grid-cols-4">
                            {symptomsGuide.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Medical Technology" && (
                        <div className="grid grid-cols-1">
                            {medicalTechnology.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Second Opinion" && (
                        <div className="grid grid-cols-3">
                            {secondOpinion.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                    {hoveredLibraryItem === "Health Packages" && (
                        <div className="grid grid-cols-1">
                            {healthPackages.map((name, i) => (
                                <button
                                    key={i}
                                    className="text-xs font-medium text-black text-left hover:text-pink-700 transition py-2"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {/* Right: Quick Links */}
                <div className="w-72 pl-4 border-l border-gray-500 space-y-4 relative">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-lg text-left">Quick Links</h1>
                        <button
                            onClick={handleClose}
                            className="text-gray-600 hover:text-black text-xl font-bold"
                        >
                            <FiX />
                        </button>
                    </div>
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <p className="text-xs text-gray-600 font-semibold">
                            Emergency & 24/7 Health Support
                        </p>
                        <p className="text-base font-medium text-black">9144514459</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        {quickLinks.map((link, idx) => (
                            <button
                                key={idx}
                                className="flex items-center justify-between bg-pink-700 text-white text-left font-semibold p-2 rounded hover:bg-yellow-500 transition"
                                onClick={() => handleNavigate(link.path)}
                            >
                                {link.name} <FiArrowRight />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderDropdown = (title, items) => {
        if (title === "about") return renderAboutDropdown();
        if (title === "library") return renderLibraryDropdown();
        const list = title === "specialties" ? dropdowns.specialties : items;
        return (
            <div
                onMouseEnter={() => handleOpen(title)}
                onMouseLeave={handleClose}
                className={`fixed left-0 w-full bg-pink-50 shadow-md border-t border-gray-200 z-40 px-10 py-4`}
                style={{ top: navHeight }}
            >
                <div className="max-w-6xl mx-auto flex justify-between text-black text-sm">
                    <div
                        className={`${title === "specialties" ? "grid grid-cols-3" : "flex flex-col ml-40"
                            } cursor-pointer gap-x-12 gap-y-4 font-semibold`}
                    >
                        {list.map((item, idx) =>
                            title === "specialties" ? (
                                <button
                                    key={idx}
                                    onClick={() => { handleMenuClick(item.path); setOpenMenu(null); }}
                                    className="text-left text-gray-800 hover:text-pink-700"
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <span
                                    key={idx}
                                    className="cursor-pointer text-gray-800 hover:text-pink-700"
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </div>

                    {/* Right side quick links */}
                    <div className="w-72 pl-4 border-l border-gray-500 space-y-4 relative">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-lg text-left">Quick Links</h1>
                            <button
                                onClick={handleClose}
                                className="text-gray-600 hover:text-black text-xl font-bold"
                            >
                                <FiX />
                            </button>
                        </div>
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <p className="text-xs text-gray-600 font-semibold">
                                Emergency & 24/7 Health Support
                            </p>
                            <p className="text-base font-medium text-black">9144514459</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            {quickLinks.map((link, idx) => (
                                <button
                                    key={idx}
                                    className="flex items-center justify-between bg-pink-700 text-white text-left font-semibold p-2 rounded hover:bg-pink-800 transition"
                                    onClick={() => handleNavigate(link.path)}
                                >
                                    {link.name} <FiArrowRight />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const handleNavigate = (path) => {
        router.push(path);
        setIsMenuOpen(false);
    };

    return (
        <>
            {isMobile ? (
                <>
                    {/* Header */}
                    <div
                        className={`flex justify-between items-center p-2 ${isMenuOpen || isSecondary
                            ? "bg-gray-50 text-black shadow-md fixed top-0 left-0 w-full z-50"
                            : "text-white absolute top-0 left-0 w-full z-50"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <Image
                                src={
                                    isMenuOpen || isSecondary
                                        ? "/assets/Header/Logo.png"
                                        : "/assets/Header/Whit Logo.png"
                                }
                                alt="TX Hospitals"
                                width={60}
                                height={60}
                                className="w-14 h-auto cursor-pointer"
                                onClick={() => router.push("/")}
                            />
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 bg-white/10 rounded-md"
                        >
                            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>

                    {/* Menu Panel */}
                    {isMenuOpen && (
                        <div className="fixed top-[70px] left-0 w-full sm:w-3/4 h-[calc(100vh-70px)] bg-white text-black z-40 shadow-xl p-5 overflow-y-auto transition-all duration-300">
                            {/* Menu Items */}
                            <ul className="space-y-4">
                                <li>
                                    <button
                                        onClick={() => handleNavigate("/about-us/")}
                                        className="text-gray-800 hover:text-pink-600 w-full text-left"
                                    >
                                        About Us
                                    </button>
                                </li>

                                <li>
                                    <button
                                        className="text-gray-800 hover:text-pink-600 w-full flex justify-between items-center"
                                        onClick={() => setIsCOEDropdownOpen(!isCOEDropdownOpen)}
                                    >
                                        Our Specialities
                                        {isCOEDropdownOpen ? (
                                            <ChevronUpIcon className="w-4 h-4" />
                                        ) : (
                                            <ChevronDownIcon className="w-4 h-4" />
                                        )}
                                    </button>

                                    {isCOEDropdownOpen && (
                                        <ul className="ml-3 mt-2 space-y-2">
                                            {departments.map((dept) => (
                                                <li key={dept.name}>
                                                    <button
                                                        className="text-sm text-gray-600 hover:text-pink-500 text-left w-full"
                                                        onClick={() => handleNavigate(dept.path)}
                                                    >
                                                        {dept.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>

                                <li>
                                    <button
                                        onClick={() => handleNavigate("/find-doctor/")}
                                        className="text-gray-800 hover:text-pink-600 w-full text-left"
                                    >
                                        Our Doctors
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            handleNavigate("/international-patient-services/")
                                        }
                                        className="text-gray-800 hover:text-pink-600 w-full text-left"
                                    >
                                        International Patient
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigate("/blog/")}
                                        className="text-gray-800 hover:text-pink-600 w-full text-left"
                                    >
                                        Blogs
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigate("/news-and-media/")}
                                        className="text-gray-800 hover:text-pink-600 w-full text-left"
                                    >
                                        News & Media
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigate("/contact-us/")}
                                        className="text-gray-800 hover:text-pink-600 w-full text-left"
                                    >
                                        Contact Us
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </>
            ) : (
                <>
                    {/* NAVBAR */}
                    <nav
                        ref={navRef}
                        className={`flex justify-center items-center text-base font-bold uppercase tracking-wider px-6 transition-all ${bgClass}`}
                    >
                        {/* Left */}
                        <div className="flex items-center gap-8">
                            <a href="tel:9144451449">
                                <div className="flex items-center gap-3 text-white bg-pink-700 rounded-full px-2 py-1 cursor-pointer">
                                    <MdPhoneInTalk size={18} /> 9144451449
                                </div>
                            </a>

                            {/* Dropdown triggers */}
                            {["about", "specialties"].map((menu) => (
                                <div
                                    key={menu}
                                    onMouseEnter={() => handleOpen(menu)}
                                    onMouseLeave={handleClose}
                                    className="relative py-12"
                                >
                                    <a
                                        href={`#${menu}`}
                                        className={`${linkClass} cursor-pointer flex items-center gap-1`}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {menu.charAt(0).toUpperCase() + menu.slice(1)}
                                        <FiChevronDown size={16} />
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Logo */}
                        <div className="mx-16">
                            <Image
                                src={
                                    isSecondary
                                        ? "/assets/Header/Logo.png"
                                        : "/assets/Header/Whit Logo.png"
                                }
                                alt="TX Hospitals"
                                width={80}
                                height={60}
                                className="cursor-pointer"
                                onClick={() => router.push("/")}
                            />
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-8">
                            <button className={linkClass} onClick={() => router.push("/find-doctor")}>
                                DOCTORS
                            </button>
                            <div
                                onMouseEnter={() => handleOpen("library")}
                                onMouseLeave={handleClose}
                                className="relative py-12"
                            >
                                <a
                                    href="#library"
                                    className={`${linkClass} cursor-pointer flex items-center gap-1`}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Library
                                    <FiChevronDown size={16} />
                                </a>
                            </div>
                            <LanguageDropdown
                                languages={["English", "Telugu", "Hindi", "Bengali", "French"]}
                            />
                        </div>
                    </nav>

                    {/* DROPDOWNS */}
                    {openMenu &&
                        renderDropdown(openMenu, dropdowns[openMenu] || [])}
                </>
            )}
        </>
    );
}
