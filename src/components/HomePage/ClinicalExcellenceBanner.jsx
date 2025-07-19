'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CONFIG from '@/config';
import Image from 'next/image';

const ClinicalExcellenceBanner = () => {

    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [stats, setStats] = useState([]);

    const animations = "transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:rounded-lg";

    const gridItems = [
        { image: 'Cardiac Sciences.png', text: 'Cardiac Sciences', path: '/specialities/cardiac-sciences' },
        { image: 'Gastro Sciences.png', text: 'Gastro Sciences', path: '/specialities/gastro-sciences' },
        { image: 'Neuro Sciences.png', text: 'Neuro Science', path: '/specialities/neuro-sciences' },
        { image: 'Orthopaedics.png', text: 'Orthopaedics', path: '/specialities/orthopaedics' },
        { image: 'Renal Sciences.png', text: 'Urology', path: '/specialities/urology' },
        { image: 'Nephrology Icon.png', text: 'Nephrology', path: '/specialities/nephrology' },
        { image: 'Oncology.png', text: 'Oncology', path: '/specialities/oncology' },
        { image: 'Mother & Child Care.png', text: 'Mother & Child care', path: '/specialities/mother-child-care' },
        { image: 'Pulmonology.png', text: 'Pulmonology', path: '/specialities/pulmonology' },
        { image: 'ENT.png', text: 'ENT', path: '/specialities/ent' },
        { image: 'Robotics Sciences.png', text: 'Robotics Sciences', path: '/specialities/robotics-science' },
        { image: 'Internal Medicine.png', text: 'Internal Medicine', path: '/specialities/internal-medicine' },
        { image: 'Dermatology & Cosmetic Care.png', text: 'Dermatology & Cosmetic care', path: '/specialities/dermatology-cosmetic-care' },
        { image: 'Transplant Medicine.png', text: 'Transplant Medicine', path: '/specialities/transplant-medicine' },
        { image: 'Rhematology.png', text: 'Rheumatology', path: '/specialities/rheumatology' },
        { image: 'Eye  - Opthalmology.png', text: 'Eye - Opthalmology', path: '/specialities/eye-ophthalmology' },
        { image: 'Endocrinology.png', text: 'Endocrinology', path: '/specialities/endocrinology' },
        { image: 'Anaesthesia & Pain Management.png', text: 'Anaesthesia', path: '/specialities/anaesthesia-and-pain-management' },
        { image: 'Dental & Maxillofacial.png', text: 'Dental & Maxillofacial', path: '/specialities/dental-and-maxillofacial-care' }
    ];

    const features = [
        {
            title: "Expert Medical Team",
            description: "TX Hospital is home to highly qualified and experienced doctors, specialists, and surgeons...",
            icon: 'Expert Medical Team.png'
        },
        {
            title: "State-of-the-Art Facilities",
            description: "Equipped with advanced diagnostic tools...",
            icon: 'State of the Art Facilities.png'
        },
        {
            title: "Comprehensive Care Across Specialties",
            description: "Offers multi-specialty services including Cardiology, Neurology, Gastro...",
            icon: 'Comprehensive care Across specialties.png'
        },
        {
            title: "Patient-Centered Approach",
            description: "Focuses on personalized treatment plans...",
            icon: 'Patient - Centered Approach.png'
        },
        {
            title: "Emergency & Critical Care Services",
            description: "24/7 emergency care with highly trained professionals...",
            icon: 'Emergency & Critical Care Services.png'
        },
        {
            title: "Advanced Surgical Procedures",
            description: "Specializes in laparoscopic, robotic, and minimally invasive surgeries...",
            icon: 'Advanced Surgical Procedures.png'
        },
        {
            title: "Affordable & Transparent Pricing",
            description: "Provides quality healthcare at affordable costs...",
            icon: 'Affordable & Transparent Pricing.png'
        },
        {
            title: "Preventive & Wellness Programs",
            description: "Health check-ups, vaccinations, and lifestyle programs...",
            icon: 'Preventive & Wellness Programs.png'
        },
    ];

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        fetch(`${CONFIG.API_BASE_URL}/hospital-data`)
            .then(res => res.json())
            .then(data => {
                setStats([
                    { value: data.locations, label: "Locations" },
                    { value: data.beds, label: "Beds" },
                    { value: data.happyPatients, label: "Happy Patients" },
                    { value: data.happySurgeries, label: "Happy Surgeries" },
                    { value: data.internationalPatients, label: "International Patients" },
                ]);
            })
            .catch(err => console.error("Error fetching hospital data:", err));
    }, []);

    return (
        <>
            {!isMobile && (
                <>
                    <div className="max-w-8xl ml-6 mr-6 font-spectral">
                        {/* Heading Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold mb-4">Explore our Centre of Clinical Excellence</h1>
                            <p className="text-gray-600 text-base font-semibold max-w-5xl mx-auto">
                                TX Hospitals Centers of Excellence are the next level of medical expertise, technology and patient focused care.
                                Our Specialties are powered by a team of experts from various disciplines known for their excellence,
                                innovative diagnostics and advanced treatment methods.
                            </p>
                            <h2 className="text-2xl font-bold mt-6">Learn about the world-class healthcare we provide</h2>
                        </div>

                        {/* Main Panel Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Panel */}
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/logos/Centres of Excellence Image.png"
                                    alt="Banner"
                                    width={800}
                                    height={450}
                                    className="object-contain"
                                />
                            </div>

                            {/* Right Panel */}
                            <div
                                className="relative w-full h-[100%] bg-cover rounded-lg bg-center flex items-center justify-center"
                                style={{ backgroundImage: "url('/assets/logos/Patch.png')" }}
                            >
                                <div className="grid grid-cols-5 gap-4 mr-20 ml-4">
                                    {gridItems.map((item, index) => (
                                        <div key={index} className="text-center">
                                            <div className={`w-full h-12 flex items-center justify-center overflow-hidden ${animations}`}>
                                                <Image
                                                    src={`/assets/logos/${item.image}`}
                                                    alt={`Service ${index + 1}`}
                                                    width={50}
                                                    height={50}
                                                    className="object-contain cursor-pointer"
                                                    onClick={() => router.push(item.path)}
                                                />
                                            </div>
                                            <p className={`text-xs font-medium mt-2 ${item.text === 'ENT' ? 'notranslate' : ''} `}>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <section className="max-w-fit mx-auto px-6 py-12">
                            <h2 className="text-6xl md:text-5xl font-bold text-left text-pink-700 mb-8">
                                Why Choose TX Hospitals?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <Image
                                            src={`/assets/logos/${feature.icon}`}
                                            alt={feature.title}
                                            width={56}
                                            height={56}
                                            className="w-14 h-14 object-contain"
                                        />
                                        <div>
                                            <h3 className="text-xl font-bold">{feature.title}</h3>
                                            <p className="text-gray-700 text-base font-semibold">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <section className="text-white py-6 font-spectral rounded-2xl">
                        <div className="bg-pink-700 max-w-5xl py-6 mx-auto flex flex-wrap justify-center rounded-2xl gap-4 md:gap-14">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-pink-700 w-28 md:w-36 h-32 rounded-lg flex flex-col items-center justify-center shadow-md relative overflow-hidden border-2 border-white"
                                >
                                    {/* Upper part */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-700 rounded-t-lg">
                                        {/* Stat Value */}
                                        <h2 className="text-4xl font-bold text-white text-center relative z-10">{stat.value}</h2>
                                    </div>

                                    {/* Curved Divider */}
                                    <svg
                                        className="absolute top-10 left-0 w-full text-white"
                                        viewBox="0 0 1440 320"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,160C672,192,768,224,864,202.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L0,320Z"
                                        ></path>
                                    </svg>

                                    {/* Stat Label */}
                                    <p className="relative z-10 mt-12 text-xl font-bold text-center px-2">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                </>
            )}

            {isMobile && (
                <>
                    <div className="max-w-6xl ml-2 font-spectral mr-2">
                        {/* Heading Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-lg font-bold mb-2">Explore our Centre of Clinical Excellence</h1>
                            <p className="text-gray-600 text-xs max-w-2xl mx-auto">
                                TX Hospitals has dedicated Centres of Excellence for several key specialties and super specialties.
                                They are unique and state-of-the-art facilities spread across several of the TX Hospital locations,
                                and each Centre of Excellence stands out as a citadel of world-class clinical outcomes.
                            </p>
                            <h2 className="text-base font-bold mt-2">Learn about the world-class healthcare we provide</h2>
                        </div>

                        {/* Main Panel Section */}
                        <div className="flex flex-col">
                            {/* Left Panel */}
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/logos/Centres of Excellence Image.png"
                                    alt="Banner"
                                    width={800}
                                    height={450}
                                    className="w-full max-w-lg rounded-md shadow-md"
                                    priority // optional if above-the-fold
                                />
                            </div>

                            {/* Right Panel */}
                            <div
                                className="relative w-full h-auto bg-cover rounded-lg bg-center flex items-center justify-center mt-4 p-4"
                                style={{ backgroundImage: "url('/assets/logos/Patch.png')" }}
                            >
                                <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
                                    {gridItems.map((item, index) => (
                                        <div key={index} className="text-center">
                                            <div className={`w-full h-16 flex items-center justify-center overflow-hidden ${animations}`}>
                                                <Image
                                                    src={`/assets/logos/${item.image}`}
                                                    alt={`Service ${index + 1}`}
                                                    width={55}
                                                    height={55}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <p className={`text-xs font-medium mt-2 ${item.text === 'ENT' ? 'notranslate' : ''} `}>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <section className="max-w-fit mx-auto px-2 py-4">
                            <h2 className="text-xl md:text-5xl font-bold text-center text-pink-700 mb-8">
                                Why Choose TX Hospitals?
                            </h2>
                            <div className="flex flex-col space-y-2">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <Image
                                            src={`/assets/logos/${feature.icon}`}
                                            alt={feature.title}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10"
                                        />
                                        <div>
                                            <h3 className="text-base font-bold">{feature.title}</h3>
                                            <p className="text-gray-700 text-xs font-semibold">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <section className="p-4 text-white py-6 font-spectral rounded-2xl">
                        <div className="p-2 bg-pink-700 max-w-sm py-6 mx-auto flex flex-row items-center rounded-lg gap-1">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-pink-700 w-32 h-16 rounded-lg flex flex-col items-center justify-center shadow-md relative overflow-hidden border border-white"
                                >
                                    {/* Upper part */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-700 ">
                                        {/* Stat Value */}
                                        <h2 className="text-base font-bold text-white text-center relative z-0">{stat.value}</h2>
                                    </div>

                                    {/* Curved Divider */}
                                    <svg
                                        className="absolute top-5 left-0 w-full text-white"
                                        viewBox="0 0 1440 320"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,160C672,192,768,224,864,202.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L0,320Z"
                                        ></path>
                                    </svg>

                                    {/* Stat Label */}
                                    <p className="relative z-10 mt-6 text-[10px] font-semibold text-center px-2">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );

}

export default ClinicalExcellenceBanner;