'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Navbar from './Navigation';

const Header = () => {

    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCOEDropdownOpen, setIsCOEDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const departments = [
        { name: "Cardiac Sciences", path: "/specialities/cardiac-sciences" },
        { name: "Neuro Sciences", path: "/specialities/neuro-sciences" },
        { name: "Urology", path: "/specialities/urology" },
        { name: "Nephrology", path: "/specialities/nephrology" },
        { name: "Gastro Sciences", path: "/specialities/gastro-sciences" },
        { name: "Oncology", path: "/specialities/oncology" },
        { name: "Orthopaedics & Rheumatology", path: "/specialities/orthopaedics" },
        { name: "Internal Medicine", path: "/specialities/internal-medicine" },
        { name: "Mother & Child Care", path: "/specialities/mother-child-care" },
        { name: "Anesthesia & Pain Management", path: "/specialities/anaesthesia-and-pain-management" },
        { name: "Dermatology & Cosmetic Care", path: "/specialities/dermatology-cosmetic-care" },
        { name: "Eye / Ophthalmology", path: "/specialities/eye-ophthalmology" },
        { name: "Dental & Maxillofacial", path: "/specialities/dental-and-maxillofacial-care" },
        { name: "Endocrinology", path: "/specialities/endocrinology" },
        { name: "Transplant Medicine", path: "/specialities/transplant-medicine" },
        { name: "Pulmonology", path: "/specialities/pulmonology" },
        { name: "Robotic Sciences", path: "/specialities/robotic-sciences" },
        { name: "ENT", path: "/specialities/ent" },
        { name: "Rheumatology", path: "/specialities/rheumatology" },
    ];

    const changeLanguage = (langCode) => {
        document.cookie = `googtrans=/en/${langCode};path=/;`;
        localStorage.setItem("googtrans", `/en/${langCode}`);
        sessionStorage.setItem("googtrans", `/en/${langCode}`);
        setSelectedLanguage(langCode);
        window.location.reload();
    };

    const handleCOENavigation = (path) => {
        router.push(path);
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isMenuOpen);
    }, [isMenuOpen]);

    return (
        <header className="bg-white font-spectral pt-4 px-6 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center">
                {/* Logos */}
                <div className='pb-5'>
                    <div className="hidden md:flex items-center space-x-4">
                        <Image src="/assets/Header/TXlogo.jpg" alt="TX Hospitals" width={96} height={48} className="cursor-pointer" onClick={() => router.push('/')} />
                        <Image src="/assets/Header/NABHlogo.jpg" alt="NABH" width={48} height={48} className="mt-12" />
                        <Image src="/assets/Header/QualityApprovallogo.jpg" alt="QA" width={48} height={48} className="mt-12" />
                    </div>
                    <div className="flex md:hidden justify-end space-x-2">
                        <Image src="/assets/Header/TXlogo.jpg" alt="TX Hospitals" width={56} height={32} className="cursor-pointer" onClick={() => router.push('/')} />
                        <Image src="/assets/Header/NABHlogo.jpg" alt="NABH" width={32} height={32} className="mt-6" />
                        <Image src="/assets/Header/QualityApprovallogo.jpg" alt="QA" width={32} height={32} className="mt-6" />
                    </div>
                </div>

                {/* Right Section */}
                <div className='pb-2'>
                    <div className="hidden md:flex justify-end space-x-6 mb-4">
                        <div className="relative group">
                            <select
                                className="bg-white shadow-md rounded-md w-28 focus:outline-none z-50 p-2 text-sm"
                                onChange={(e) => changeLanguage(e.target.value)}
                                value={selectedLanguage}
                            >
                                <option value="en">English</option>
                                <option value="te">Telugu</option>
                                <option value="hi">Hindi</option>
                                <option value="bn">Bengali</option>
                                <option value="fr">French</option>
                            </select>
                        </div>
                        <div className="text-sm" id="google_translate_element" />
                        <div>
                            <div className="text-base text-gray-900">24/7 EMERGENCY CARE</div>
                            <div className="flex items-center space-x-2">
                                <Image src="/assets/Header/24x7 Emergency Logo.png" alt="Emergency" width={16} height={16} />
                                <a href="tel:+919089489089" className="text-sm text-black font-medium hover:underline">+91 9089 48 9089</a>
                            </div>
                        </div>
                        <div className="border-l border-gray-500 h-8"></div>
                        <div>
                            <div className="text-base text-gray-900">INTERNATIONAL</div>
                            <div className="flex items-center space-x-2">
                                <Image src="/assets/Header/Whatsup logo.png" alt="International" width={16} height={16} />
                                <a href="tel:+919089489089" className="text-sm text-black font-medium hover:underline">+91 9089 48 9089</a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Navbar />
                    </div>

                    <div className="flex md:hidden items-center space-x-2">
                        <select
                            className="bg-white shadow-md border rounded-md w-20 z-50 p-1 text-sm"
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={selectedLanguage}
                        >
                            <option value="en">English</option>
                            <option value="te">Telugu</option>
                            <option value="hi">Hindi</option>
                            <option value="bn">Bengali</option>
                            <option value="fr">French</option>
                        </select>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg z-50 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="h-full overflow-y-auto hide-scrollbar p-4">
                    <ul className="space-y-4">
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/'); setIsMenuOpen(false); }}>Home</button></li>
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/about-us'); setIsMenuOpen(false); }}>About Us</button></li>
                        <li>
                            <button className="text-gray-800 flex justify-between w-full items-center" onClick={() => setIsCOEDropdownOpen(!isCOEDropdownOpen)}>
                                Center of Excellence {isCOEDropdownOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
                            </button>
                            {isCOEDropdownOpen && (
                                <ul className="ml-4 mt-2 space-y-2">
                                    {departments.map((dept) => (
                                        <li key={dept.name}>
                                            <button
                                                className={`text-sm text-gray-600 w-full text-left ${dept.name === 'ENT' ? 'notranslate' : ''}`}
                                                onClick={() => {
                                                    handleCOENavigation(dept.path);
                                                    setIsMenuOpen(false);
                                                    setIsCOEDropdownOpen(false);
                                                }}
                                            >
                                                {dept.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/find-doctor'); setIsMenuOpen(false); }}>Doctors</button></li>
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/international-patient-services'); setIsMenuOpen(false); }}>International Patient</button></li>
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/blog'); setIsMenuOpen(false); }}>Blogs</button></li>
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/news-and-media'); setIsMenuOpen(false); }}>News & Media</button></li>
                        <li><button className="text-gray-800 w-full text-left" onClick={() => { router.push('/contact-us'); setIsMenuOpen(false); }}>Contact Us</button></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
