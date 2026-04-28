import React from 'react';
import { motion } from 'framer-motion';

const insuranceProviders = [
    "Star Health", "New India", "HDFC Ergo", "United India",
    "Medi Assist", "Oriental", "National Ins.", "ICICI Lombard",
    "CGHS", "ESI", "Aarogyasri"
];

const steps = [
    {
        id: 1,
        title: "Share Your Insurance Details",
        desc: "At the time of admission or consultation, show your insurance card or policy number to our team."
    },
    {
        id: 2,
        title: "We Handle Pre-Authorisation",
        desc: "Our insurance desk contacts your TPA and gets approvals, you don't need to do anything."
    },
    {
        id: 3,
        title: "Fully Cashless Treatment",
        desc: "Once approved, your treatment proceeds without you paying from pocket, up to your cover limit."
    },
    {
        id: 4,
        title: "Complete Paperwork Assistance",
        desc: "Discharge summaries, bills, and claim forms, all prepared and supported by our team."
    }
];

const UppalInsurance = () => {
    return (
        <section className="bg-[#fcfafa] py-16 px-6 md:px-10 lg:px-12">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                
                {/* Left Column: Insurance Providers */}
                <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-pink-700 mb-2 block">
                        Insurance & Schemes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        All <span className="text-pink-700">Insurances Accepted</span>
                    </h2>
                    <div className="w-12 h-1 bg-pink-700 mb-6"></div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium mb-10 max-w-lg">
                        TX Hospitals Uppal is empanelled with all major insurance providers, TPAs, and government health schemes. Walk in, show your card, we handle the rest.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {insuranceProviders.map((provider, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-gray-200 rounded-lg py-3 px-2 flex items-center justify-center text-center shadow-sm hover:border-pink-200 hover:shadow-md transition-all cursor-default"
                            >
                                <span className="text-sm font-bold text-gray-800">{provider}</span>
                            </motion.div>
                        ))}
                        {/* Special Many More Badge */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: insuranceProviders.length * 0.05 }}
                            className="bg-pink-50 border border-pink-200 rounded-lg py-3 px-2 flex items-center justify-center text-center shadow-sm"
                        >
                            <span className="text-sm font-bold text-pink-700">+ Many More</span>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: How It Works */}
                <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-pink-700 mb-8 block">
                        How It Works
                    </span>

                    <div className="flex flex-col">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`flex gap-6 pb-6 ${index !== steps.length - 1 ? 'border-b border-gray-200 mb-6' : ''}`}
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-pink-700 text-white flex items-center justify-center font-bold shadow-md">
                                        {step.id}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                    <p className="text-base text-gray-500 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UppalInsurance;
