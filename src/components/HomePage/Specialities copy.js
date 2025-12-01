// components/Specialities.js
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const specialities = [
    {
        title: "Cardiac Sciences",
        desc: "Advanced heart care with modern diagnostics and minimally invasive treatments.",
        img: "/assets/Header/Cardiac-Sciences.jpg",
    },
    {
        title: "Gastro Sciences",
        desc: "Complete digestive and liver care with endoscopy and advanced surgery.",
        img: "/assets/Header/Gastro-Sciences.jpg",
    },
    {
        title: "Orthopedics",
        desc: "Expert bone, joint and spine solutions with surgical and rehab support.",
        img: "/assets/Header/Orthopedics.jpg",
    },
    {
        title: "Urology",
        desc: "Advanced care for urinary tract, prostate and bladder disorders.",
        img: "/assets/Header/Urology.jpg",
    },
    {
        title: "Neuro Sciences",
        desc: "Advanced care for brain, spine and nervous system disorders.",
        img: "/assets/Header/Neuro-Sciences.jpg",
    },
    {
        title: "Eye / Ophthalmology",
        desc: "Precision diagnosis and treatment for vision and eye disorders.",
        img: "/assets/Header/Eye-Ophthalmology.jpg",
    },
    {
        title: "Mother & Child Care",
        desc: "Safe maternity, fertility and paediatric care for every stage of life.",
        img: "/assets/Header/Mother-Child-Care.jpg",
    },
    {
        title: "Dental & Maxillofacial",
        desc: "Comprehensive dental, oral and facial procedures including cosmetics.",
        img: "/assets/Header/Dental-Maxillofacial.jpg",
    },
    {
        title: "Skin & Cosmetic Care",
        desc: "Medical and aesthetic treatments for healthy skin, hair and beauty.",
        img: "/assets/Header/Skin-Cosmetic-Care.jpg",
    },
    {
        title: "Transplant Medicine",
        desc: "Life-saving organ transplants with expert surgical precision.",
        img: "/assets/Header/Transplant-Medicine.jpg",
    },
    {
        title: "Robotic Sciences",
        desc: "Robotic-assisted surgeries for greater accuracy and faster recovery.",
        img: "/assets/Header/Robotic-Science.jpg",
    },
    {
        title: "Oncology",
        desc: "Complete cancer care with surgery, chemotherapy and radiation.",
        img: "/assets/Header/Oncology.jpg",
    },
    {
        title: "Anaesthesia & Pain Management",
        desc: "Safe anaesthesia and advanced pain relief for surgery and chronic pain.",
        img: "/assets/Header/Anaesthesia-Pain-Management.jpg",
    },
    {
        title: "Pulmonology",
        desc: "Specialized care for lung and respiratory health.",
        img: "/assets/Header/Pulmonology.jpg",
    },
    {
        title: "ENT",
        desc: "Expert solutions for ear, nose and throat conditions with modern techniques.",
        img: "/assets/Header/ENT.jpg",
    },
    {
        title: "Rheumatology",
        desc: "Advanced care for arthritis and autoimmune joint disorders.",
        img: "/assets/Header/Rheumatology.jpg",
    },
    {
        title: "Renal Sciences",
        desc: "Expert treatment for kidney diseases, dialysis and renal transplants.",
        img: "/assets/Header/Renal-Sciences.jpg",
    },
    {
        title: "Internal Medicine",
        desc: "Preventive and chronic disease management for overall adult health.",
        img: "/assets/Header/Internal-Medicine.jpg",
    }
];

export default function Specialities() {
    const [showAll, setShowAll] = useState(false);
    const displayedItems = showAll ? specialities : specialities.slice(0, 6);

    return (
        <div className="bg-gray-50 py-3 px-6">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-pink-700 mb-5">Our Specialities</h2>
                <p className="text-lg max-w-3xl mx-auto mb-6 text-gray-700">
                    At TX Hospitals, we bring together medical expertise, modern technology and patient-first care under one roof. Our Centres of Excellence are dedicated to delivering comprehensive treatment across major specialties, ensuring every patient receives the best possible outcome.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-20 h-20 rounded-md object-cover"
                            />
                            <div className="flex-1 text-left">
                                <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                <p className="text-sm text-gray-600 line-clamp-4">{item.desc}</p>
                            </div>
                            <button className="flex-shrink-0 text-white bg-pink-600 hover:bg-pink-700 rounded-full p-2">
                                <FiChevronRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less */}
                <div className="mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-pink-700 font-semibold underline hover:underline"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </div>
    );
}
