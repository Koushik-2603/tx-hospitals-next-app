"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import useIsMobile from "@/hooks/useIsMobile";
import SpecialitiesCarousel from "@/components/HomePage/SpecialitiesCarousel";
import { motion } from "framer-motion";
import Link from "next/link";

const specialities = [
    {
        title: "Cardiac Sciences",
        desc: "Advanced heart care with modern diagnostics and minimally invasive treatments.",
        img: "/assets/specialities/Cardiac Image.png",
        path: "/specialities/cardiac-sciences"
    },
    {
        title: "Gastro Sciences",
        desc: "Complete digestive and liver care with endoscopy and advanced surgery.",
        img: "/assets/specialities/Gastro Image.png",
        path: "/specialities/gastro-sciences"
    },
    {
        title: "Ortho Sciences",
        desc: "Expert bone, joint and spine solutions with surgical and rehab support.",
        img: "/assets/specialities/Orthopediac image.png",
        path: "/specialities/orthopaedics"
    },
    {
        title: "Nephrology",
        desc: "Expert treatment for kidney diseases, dialysis and renal transplants.",
        img: "/assets/specialities/Urology Image.png",
        path: "/specialities/nephrology"
    },
    {
        title: "Urology",
        desc: "Advanced care for urinary tract, prostate and bladder disorders.",
        img: "/assets/specialities/Urology.webp",
        path: "/specialities/urology"
    },
    {
        title: "Mother & Child Care",
        desc: "Safe maternity, fertility and paediatric care for every stage of life.",
        img: "/assets/specialities/Mother & Child.webp",
        path: "/specialities/mother-child-care"
    },
    {
        title: "Transplant Medicine",
        desc: "Life-saving organ transplants with expert surgical precision.",
        img: "/assets/specialities/Transplant.webp",
        path: "/specialities/transplant-medicine"
    },
    {
        title: "Robotic Sciences",
        desc: "Robotic-assisted surgeries for greater accuracy and faster recovery.",
        img: "/assets/specialities/Robotics.webp",
        path: "/specialities/robotics-science"
    },
    {
        title: "Neurology",
        desc: "Advanced care for brain, spine and nervous system disorders.",
        img: "/assets/specialities/Neuro.webp",
        path: "/specialities/neuro-sciences"
    },
    {
        title: "Oncology",
        desc: "Complete cancer care with surgery, chemotherapy and radiation.",
        img: "/assets/specialities/Oncology.webp",
        path: "/specialities/oncology"
    },
    {
        title: "Pulmonology",
        desc: "Specialized care for lung and respiratory health.",
        img: "/assets/specialities/Pulmonology.webp",
        path: "/specialities/pulmonology"
    },
    {
        title: "ENT",
        desc: "Expert solutions for ear, nose and throat conditions with modern techniques.",
        img: "/assets/specialities/ENT.webp",
        path: "/specialities/ent"
    },
    {
        title: "Internal Medicine",
        desc: "Preventive and chronic disease management for overall adult health.",
        img: "/assets/specialities/Internal medicine.webp",
        path: "/specialities/internal-medicine"
    },
    {
        title: "Skin & Cosmetic Care",
        desc: "Medical and aesthetic treatments for healthy skin, hair and beauty.",
        img: "/assets/specialities/Skin.webp",
        path: "/specialities/dermatology-cosmetic-care"
    },
    {
        title: "Dental & Maxillofacial",
        desc: "Comprehensive dental, oral and facial procedures including cosmetics.",
        img: "/assets/specialities/Dental.webp",
        path: "/specialities/dental-and-maxillofacial-care"
    },
    {
        title: "Anaesthesia & Pain Management",
        desc: "Safe anaesthesia and advanced pain relief for surgery and chronic pain.",
        img: "/assets/specialities/Anaesthesia.webp",
        path: "/specialities/anaesthesia-and-pain-management"
    },
    {
        title: "Eye / Ophthalmology",
        desc: "Precision diagnosis and treatment for vision and eye disorders.",
        img: "/assets/specialities/Eye.webp",
        path: "/specialities/eye-ophthalmology"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 15 }
    }
};

export default function CRTherapeutics() {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();
    const isMobile = useIsMobile();

    const visibleSpecialties = showAll ? specialities : specialities.slice(0, 4);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section className="bg-gray-50 w-full py-16 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-[10px] font-bold uppercase tracking-widest mb-3 border border-pink-200">
                        Our Focus Areas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 ">
                        Therapeutic <span className="text-pink-700 relative inline-block">expertise
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-pink-200/50 rounded-full"></span>
                        </span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg max-w-3xl mx-auto mb-14 text-gray-600 font-medium leading-relaxed"
                >
                    Our clinical research spans multiple therapeutic areas, driven by specialized expertise and state-of-the-art facilities.
                </motion.p>

                {isMobile ? (
                    <div className="pb-4">
                        <SpecialitiesCarousel specialities={specialities} />
                        <div className="mt-8">
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push('/specialities')}
                                className="text-pink-700 font-bold underline decoration-2 underline-offset-4 hover:text-pink-800 transition-colors"
                            >
                                View All Specialities
                            </motion.button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <motion.div
                            key={showAll ? 'all' : 'some'}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-4 gap-x-6 gap-y-20 pt-16"
                        >
                            {visibleSpecialties.map((item, index) => (
                                <Link href={item.path} key={index} className="flex w-full max-w-[260px] mx-auto h-full">
                                    <motion.div
                                        variants={cardVariants}
                                        whileHover={{ y: -10 }}
                                        className="relative bg-white border border-gray-200 shadow-lg rounded-[2rem] overflow-visible w-full text-center pt-24 pb-6 transition-all duration-300 cursor-pointer flex flex-col items-center justify-between h-full"
                                    >
                                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-3xl overflow-hidden shadow-xl border-4 border-white transition-transform duration-500 group-hover:scale-105">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="p-4 flex flex-col items-center h-full justify-between mt-2">
                                            <div className="flex flex-col items-center">
                                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                                <p className="text-gray-600 text-sm leading-snug mb-6 line-clamp-3">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            <motion.span
                                                whileHover={{ scale: 1.1, rotate: 90 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="flex items-center justify-center w-8 h-8 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition-colors mt-auto"
                                            >
                                                <FiChevronRight size={18} />
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>

                        <div className="mt-16">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#be185d", color: "#fff" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleShowAll}
                                className="text-pink-700 font-bold px-8 py-3 rounded-full border-2 border-pink-700 transition-all duration-300 shadow-sm"
                            >
                                {showAll ? 'View Less' : 'View All Specialities'}
                            </motion.button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
