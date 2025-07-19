"use client";
import React, { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CONFIG from "../../config";

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [email, setEmail] = useState("");
    const [openSection, setOpenSection] = useState(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSection = (title) => {
        setOpenSection(openSection === title ? null : title);
    };

    const handleNewsletterSubmit = async () => {
        if (!email) {
            toast.warn("Please enter a valid email address.");
            return;
        }

        try {
            await fetch(`${CONFIG.API_BASE_URL}/send-email/newsletter`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            toast.success("Successfully subscribed to the newsletter!");
            setEmail("");
        } catch (error) {
            console.error("Newsletter error:", error);
        }
    };

    const menuData = [
        {
            title: "Centre of Excellence",
            path: "/specialities/cardiac-sciences/",
            items: [
                { name: "Cardiac Sciences", path: "/specialities/cardiac-sciences/" },
                { name: "Neuro Sciences", path: "/specialities/neuro-sciences/" },
                { name: "Urology", path: "/specialities/urology/" },
                { name: "Nephrology", path: "/specialities/nephrology/" },
                { name: "Gastro Sciences", path: "/specialities/gastro-sciences/" },
                { name: "Oncology", path: "/specialities/oncology/" },
                { name: "Orthopaedics & Rheumatology", path: "/specialities/orthopaedics/" },
                { name: "Internal Medicine", path: "/specialities/internal-medicine/" },
                { name: "Mother & Child Care", path: "/specialities/mother-child-care/" },
                { name: "Anesthesia & Pain Management", path: "/specialities/anaesthesia-and-pain-management/" },
                { name: "Dermatology & Cosmetic Care", path: "/specialities/dermatology-cosmetic-care/" },
                { name: "Eye / Ophthalmology", path: "/specialities/eye-ophthalmology/" },
                { name: "Dental & Maxillofacial", path: "/specialities/dental-and-maxillofacial-care/" },
                { name: "Endocrinology", path: "/specialities/endocrinology/" },
                { name: "Transplant Medicine", path: "/specialities/transplant-medicine/" },
                { name: "Pulmonology", path: "/specialities/pulmonology/" },
                { name: "Robotic Sciences", path: "/specialities/robotic-sciences/" },
                { name: "ENT", path: "/specialities/ent/" },
                { name: "Rheumatology", path: "/specialities/rheumatology/" },
            ],
        },
        { title: "Health Packages", path: "/health-package/", items: [] },
        { title: "Doctors", path: "/find-doctor/", items: [] },
        { title: "Second Opinion", path: "/surgery-care/", items: [] },
        { title: "International Patients", path: "/international-patient-services/", items: [] },
        { title: "Blogs", path: "/blog/", items: [] },
        { title: "Know Your Medicines", items: [] },
        { title: "Know Your Diagnostics", items: [] },
        { title: "MRI Scan", items: [] },
    ];

    const menuData1 = [
        {
            title: "Patients & Visitors",
            items: [
                { name: "Patient's Guidelines", path: "/patient-and-visitors/" },
                { name: "Visitor's Guidelines", path: "/patient-and-visitors/visitors/" },
                { name: "In-Patient", path: "/patient-and-visitors/in-patient/" },
                { name: "Rooms Facilities & Services", path: "/patient-and-visitors/rooms/" },
                { name: "Insurance", path: "/patient-and-visitors/insurance/" },
                { name: "International Patients", path: "/patient-and-visitors/international-patients/" },
                { name: "Privilege Card", path: null },
            ],
        },
        {
            title: "Facilities",
            items: [
                { name: "Facilities & Services", path: "/facilities/" },
                { name: "Diagnostic & Therapeutic", path: "/facilities/diagnostic/" },
                { name: "Pharmacy & Blood Bank", path: "/facilities/pharmacy/" },
            ],
        },
        { title: "Biomedical Wastage", path: "/biomedical-wastage/", items: [] },
    ];

    const quickLinks = [
        { name: "About TX Hospitals", path: "/about-us/" },
        { name: "Board Of Directors", path: "/board-of-directors/" },
        { name: "Management", path: "/management/" },
        { name: "Why TX?", path: "/why-tx-hospitals/" },
        { name: "Academics", path: "/#" },
        { name: "Careers", path: "/#" },
        { name: "News & Media", path: "/#" },
        { name: "Hospital Brochure", path: "/#" },
        { name: "Contact Us", path: "/contact-us/" },
        { name: "Privacy Policy", path: "/privacy-policy/" },
        { name: "Disclaimer", path: "/disclaimer/" },
    ];

    return (
        <>
            <section className="font-spectral">
                <div
                    className={`bg-cover bg-center ${isMobile ? "py-6 px-4" : "h-56 py-12 px-6"} flex flex-col md:flex-row items-center justify-between`}
                    style={{ backgroundImage: `url(/assets/Footer/Footer_BG.png)` }}
                >
                    {/* Social Icons */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex space-x-4 md:space-x-6 mb-4">
                            {["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn", "WhatsApp"].map((platform, index) => {
                                const hrefs = {
                                    Facebook: "https://www.facebook.com/txhospitals/",
                                    Instagram: "https://www.instagram.com/txhospitals/",
                                    Twitter: "https://twitter.com/txhospitals",
                                    YouTube: "https://www.youtube.com/channel/UCuHZd4Yi3wTHciJoMz7mq2A",
                                    LinkedIn: "https://www.linkedin.com/company/tx-hospitals/",
                                    WhatsApp: "https://api.whatsapp.com/send?phone=919089489089",
                                };
                                const src = `/assets/Footer/TXHospitals${platform}.png`;
                                return (
                                    <a key={platform} href={hrefs[platform]} target="_blank" rel="noopener noreferrer">
                                        <Image src={src} alt={platform} width={48} height={48} className="cursor-pointer w-12 h-10 md:h-12" />
                                    </a>
                                );
                            })}
                        </div>
                        <p className={`${isMobile ? "text-base" : "text-xl"} font-semibold text-gray-800 md:text-gray-900`}>
                            Follow us on our social media channels and<br className="hidden md:block" />
                            be part of our healthcare community!
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className={`bg-white ${isMobile ? "p-4" : "p-6"} rounded-xl shadow-lg w-full md:w-96 mt-6 md:mt-0`}>
                        <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-gray-900 mb-2`}>
                            Subscribe to Our Newsletter
                        </h3>
                        <div className="flex flex-col">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email ID"
                                className="border border-gray-300 p-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                            <button
                                onClick={handleNewsletterSubmit}
                                className="bg-pink-700 text-white p-3 rounded-lg mt-3 font-bold hover:bg-pink-800 transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-neutral-700 font-spectral text-white py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* TX Hospitals + Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 relative">
                            TX Hospitals
                            <span className="absolute left-0 bottom-[-4px] h-[1px] w-16 bg-red-600"></span>
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                            TX Hospitals Group is one of the country's largest and fastest-growing chains of multi-super specialty hospitals...
                        </p>
                        <h4 className="text-lg font-semibold mb-2 relative">
                            Contact Us
                            <span className="absolute left-0 bottom-[-4px] h-[1px] w-12 bg-red-600"></span>
                        </h4>
                        <p className="text-sm text-gray-300 hover:text-red-600">Email - contact@txhospitals.in</p>
                        <p className="text-sm text-gray-300 hover:text-red-600">Uppal : 040-43108108</p>
                        <p className="text-sm text-gray-300 hover:text-red-600">Kachiguda : 040-48108108</p>
                        <p className="text-sm text-gray-300 hover:text-red-600">Banjara Hills : 040-66529999</p>
                    </div>

                    {/* Menu Sections */}
                    {[menuData, menuData1].map((menu, i) => (
                        <div key={i}>
                            {menu.map((section) => (
                                <div key={section.title}>
                                    <h3
                                        onClick={() => toggleSection(section.title)}
                                        className="text-xl font-semibold mt-6 flex items-center cursor-pointer"
                                    >
                                        {openSection === section.title ? <Minus className="text-red-600 mr-2" /> : <Plus className="text-red-600 mr-2" />}
                                        {section.path ? <Link href={section.path}>{section.title}</Link> : section.title}
                                    </h3>
                                    {openSection === section.title && section.items.length > 0 && (
                                        <ul className="text-sm text-gray-300 space-y-2 pl-6">
                                            {section.items.map((item) =>
                                                item.path ? (
                                                    <li key={item.name} className="hover:text-red-600">
                                                        <Link href={item.path}>{item.name}</Link>
                                                    </li>
                                                ) : (
                                                    <li key={item.name} className="hover:text-red-600">{item.name}</li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 relative">
                            Quick Links
                            <span className="absolute left-0 bottom-[-4px] h-[1px] w-16 bg-red-600"></span>
                        </h3>
                        <ul className="text-sm text-gray-300 space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name} className="hover:text-red-600">
                                    <Link href={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center text-gray-400 mt-10 text-sm">
                    © {new Date().getFullYear()} TX Hospitals. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
