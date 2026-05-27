import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '../WhatsAppButton';

const GastroConditions = ({ onBookClick }) => {
    const conditions = [
        {
            title: "GERD / Acid Reflux",
            description: "Chronic heartburn, acid regurgitation & oesophageal discomfort"
        },
        {
            title: "Constipation",
            description: "Chronic or acute bowel irregularities and gut motility disorders"
        },
        {
            title: "Pancreatic Disorders",
            description: "Pancreatitis, pancreatic cysts, and related digestive conditions"
        },
        {
            title: "Ulcerative Colitis",
            description: "Inflammatory bowel disease affecting the colon and rectum"
        },
        {
            title: "Crohn's Disease",
            description: "Chronic inflammatory condition of the digestive tract"
        },
        {
            title: "Colon Polyps",
            description: "Detection and removal of abnormal growths in the colon"
        },
        {
            title: "Liver Abscess & Cysts",
            description: "Infection-related liver abscesses and fluid-filled liver cysts"
        },
        {
            title: "Peptic Ulcer",
            description: "Open sores in the stomach lining or upper small intestine"
        },
        {
            title: "Bariatric Surgery",
            description: "Surgical weight loss for obesity-related digestive & metabolic conditions"
        },
        {
            title: "Gallbladder Disease",
            description: "Gallstones, cholecystitis, and biliary tract disorders"
        },
        {
            title: "Irritable Bowel Syndrome",
            description: "Abdominal pain, bloating, cramping and irregular bowel habits"
        },
        {
            title: "Fatty Liver Disease",
            description: "Non-alcoholic & alcoholic fatty liver, hepatitis and liver health"
        }
    ];

    return (
        <section className="py-8 md:py-16 px-6 bg-white font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center lg:text-left">
                    <span className="text-[#be185d] font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        Conditions We Treat
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Expertise in All Gastrointestinal & Liver Disorders
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
                        Our specialists provide comprehensive care for a wide range of digestive system conditions, using advanced diagnostic and treatment protocols.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-pink-100 hover:bg-white hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#be185d] mt-2 shrink-0 group-hover:scale-125 transition-transform"></div>
                                <div>
                                    <h3 className="text-sm md:text-base font-extrabold text-gray-900 mb-1 leading-tight">
                                        {condition.title}
                                    </h3>
                                    <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed font-medium">
                                        {condition.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 bg-pink-50 border border-pink-100 p-5 rounded-2xl flex items-center gap-4 text-gray-800"
                >
                    <div className="text-xl text-[#be185d] font-bold">+</div>
                    <p className="text-xs md:text-sm font-medium leading-relaxed">
                        We treat <span className="text-[#be185d] font-bold">all digestive health conditions</span> including issues of the stomach, intestines, liver, pancreas, and gallbladder. If it's digestive, we treat it.
                    </p>
                </motion.div>

                <div className="mt-12 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 w-full">
                    <button
                        onClick={onBookClick}
                        className="w-full sm:w-auto bg-[#be185d] hover:bg-[#a2144e] text-white font-bold py-4 px-6 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-sm md:text-base lg:text-lg"
                    >
                        Free Doctor Consultation
                    </button>

                    <div className="w-full sm:w-auto">
                        <WhatsAppButton sizeClass="w-full sm:w-auto py-4 px-6 md:px-12 text-sm md:text-base lg:text-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GastroConditions;
