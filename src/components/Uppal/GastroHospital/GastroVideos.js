import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppButton from '../WhatsAppButton';

const GastroVideos = ({ onBookClick }) => {
    const videos = [
        { id: "rMQ0EUzoQX0", title: "Patient Success Story 1" },
        { id: "hA_e0zbUtZ4", title: "Patient Success Story 2" },
        { id: "k4-kxXqXnrQ", title: "Patient Success Story 3" }
    ];

    return (
        <section className="py-8 md:py-16 px-6 bg-gray-50 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-[#be185d] font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        Real People, Real Results
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Listen to Our Patient Stories
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
                        Hear from patients who trusted TX Hospitals with their health problems and got their lives back.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="overflow-hidden rounded-2xl shadow-xl bg-black aspect-video relative group"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-row justify-center gap-4">
                    <button
                        onClick={onBookClick}
                        className="bg-[#be185d] hover:bg-[#a2144e] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg"
                    >
                        Free Doctor Consultation
                    </button>
                    <WhatsAppButton sizeClass="py-4 px-12 text-base md:text-lg" />
                </div>
            </div>
        </section>
    );
};

export default GastroVideos;
