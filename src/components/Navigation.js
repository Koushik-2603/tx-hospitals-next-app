import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(router.pathname);
    const [showDropdown, setShowDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setShowDropdown(showDropdown === menu ? null : menu);
    };

    const handleNavigation = (path) => {
        setActiveTab(path);
        router.push(path);
    };

    return (
        <nav className="w-full font-spectral">
            <div className="container mx-auto">
                <ul className="flex items-center justify-center flex-row text-gray-700">
                    {/* Home */}
                    <li className="relative group">
                        <button
                            className={`hover:text-pink-700 cursor-pointer text-xl p-2 ${activeTab === "/" ? "text-pink-700" : ""
                                }`}
                            aria-label="Home"
                            onClick={() => handleNavigation("/")}
                        >
                            <FaHome className="text-xl" />
                        </button>
                    </li>

                    {/* About Us */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("about")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`hover:text-pink-700 font-spectral cursor-pointer py-2 px-4 flex items-center ${activeTab === "" ? "text-pink-700" : ""
                                }`}
                        // onClick={() => handleNavigation("/about-us/")}
                        >
                            About Us
                            <IoMdArrowDropdown className="ml-1" />
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-700 group-hover:w-full transition-all"></span>
                        </button>
                        {showDropdown === "about" && (
                            <div className="absolute top-full left-0 w-48 font-spectral bg-white shadow-lg rounded-md z-50">
                                <ul className="py-2">
                                    <li
                                        className={`p-2 cursor-pointer transition-all duration-300 hover:text-pink-700 hover:scale-105 ${activeTab === "" ? "text-pink-700" : ""
                                            }`}
                                        onClick={() => handleNavigation("/about-us/")}
                                    >
                                        Overview
                                    </li>
                                    <li
                                        className={`p-2 hover:text-pink-700 cursor-pointer transition-all duration-300 hover:scale-105  ${activeTab === "/board-of-directors/" ? "text-pink-700" : ""
                                            }`}
                                        onClick={() => handleNavigation("/board-of-directors/")}
                                    >
                                        Board of Directors
                                    </li>
                                    <li
                                        className={`p-2 hover:text-pink-600 cursor-pointer transition-all duration-300 hover:scale-105 ${activeTab === "/management/" ? "text-pink-700" : ""
                                            }`}
                                        onClick={() => handleNavigation("/management/")}
                                    >
                                        Management
                                    </li>
                                    <li
                                        className={`p-2 hover:text-pink-600 cursor-pointer transition-all duration-300 hover:scale-105  ${activeTab === "/why-tx-hospitals/" ? "text-pink-700" : ""
                                            }`}
                                        onClick={() => handleNavigation("/why-tx-hospitals/")}
                                    >
                                        Why TX Hospitals?
                                    </li>
                                    <li
                                        className={`p-2 hover:text-pink-600 cursor-pointer transition-all duration-300 hover:scale-105 ${activeTab === "/faqs/" ? "text-pink-700" : ""
                                            }`}
                                        onClick={() => handleNavigation("/faqs/")}
                                    >
                                        FAQs
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* Centre of Excellence */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("center")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`hover:text-pink-600 cursor-pointer py-2 px-4 relative flex items-start ${activeTab === "/specialities" ? "text-pink-700" : ""}`}
                        // onClick={() => handleCOENavigation("cardiac-sciences")}
                        >
                            Centre of Excellence <IoMdArrowDropdown className="ml-1 mt-1" />
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
                        </button>
                        {showDropdown === "center" && (
                            <div className="z-50 absolute top-full left-[270px] transform -translate-x-1/2 w-[550px] bg-white shadow-lg rounded-md border border-gray-200">
                                <ul
                                    className="grid grid-cols-2 gap-x-6 gap-y-1 text-base p-2 relative"
                                    style={{ gridTemplateColumns: "auto auto" }}
                                >
                                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-gray-300"></div>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("cardiac-sciences")}
                                    >
                                        Cardiac Sciences
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("neuro-sciences")}
                                    >
                                        Neuro Sciences
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("urology")}
                                    >
                                        Urology
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("nephrology")}
                                    >
                                        Nephrology
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("gastro-sciences")}
                                    >
                                        Gastro Sciences
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("oncology")}
                                    >
                                        Oncology
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("orthopaedics")}
                                    >
                                        Orthopaedics
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("internal-medicine")}
                                    >
                                        Internal Medicine
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("mother-child-care")}
                                    >
                                        Mother & Child Care
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("anaesthesia-and-pain-management")}
                                    >
                                        Anaesthesia & Pain Management
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("dermatology-cosmetic-care")}
                                    >
                                        Dermatology & Cosmetic Care
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("eye-ophthalmology")}
                                    >
                                        Eye / Ophthalmology
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("dental-and-maxillofacial-care")}
                                    >
                                        Dental & Maxillofacial
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("endocrinology")}
                                    >
                                        Endocrinology
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("transplant-medicine")}
                                    >
                                        Transplant Medicine
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("pulmonology")}
                                    >
                                        Pulmonology
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("robotics-science")}
                                    >
                                        Robotics Sciences
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1 notranslate"
                                    // onClick={() => handleCOENavigation("ent")}
                                    >
                                        ENT
                                    </li>
                                    <li
                                        className="hover:text-pink-600 border-b border-gray-300 cursor-pointer duration-300 p-1"
                                    // onClick={() => handleCOENavigation("rheumatology")}
                                    >
                                        Rheumatology
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    {/* Doctors */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("patients&visitors")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`hover:text-pink-700 cursor-pointer py-2 px-4 flex items-center ${activeTab === "/find-doctor/" ? "text-pink-700" : ""
                                }`}
                        // onClick={() => handleNavigation("/find-doctor/")}
                        >
                            Doctors
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
                        </button>
                    </li>

                    {/* International */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("patients&visitors")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`flex items-center py-2 px-4 hover:text-pink-600 cursor-pointer relative ${activeTab === "/international-patient-services/" ? "text-pink-700" : ""
                                }`}
                        // onClick={() => handleNavigation("/international-patient-services/")}
                        >
                            International Patient
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
                        </button>
                    </li>

                    {/* Blogs */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("facilities")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`hover:text-pink-700 cursor-pointer py-2 px-4 flex items-center ${activeTab === "/blog/" ? "text-pink-700" : ""
                                }`}
                        // onClick={() => handleNavigation("/blog/")}
                        >
                            Blogs
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
                        </button>
                    </li>

                    {/* News & Media */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("news")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`py-2 px-4 hover:text-pink-600 cursor-pointer relative flex items-center ${activeTab === "/news-and-media/" ? "text-pink-700" : ""}`}
                        // onClick={() => handleNavigation("/news-and-media/")}
                        >
                            News & Media
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
                        </button>
                    </li>

                    {/* Contact Us */}
                    <li
                        className="relative group"
                        onMouseEnter={() => toggleDropdown("contact")}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <button
                            className={`hover:text-pink-700 cursor-pointer py-2 px-4 flex items-center ${activeTab === "/contact-us/" ? "text-pink-700" : ""
                                }`}
                        // onClick={() => handleNavigation("/contact-us/")}
                        >
                            Contact Us
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all"></span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
