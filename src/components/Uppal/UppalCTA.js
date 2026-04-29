import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const UppalCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-pink-700 py-10 md:py-16 px-6 md:px-10 lg:px-12 text-center overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                >
                    Book Your Consultation Today
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-pink-50 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
                >
                    Whether it is a regular check-up, a specialist consultation, or an emergency, TX Hospitals Uppal is always near you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <a
                        href="tel:9144514459"
                        className="bg-white text-pink-700 border border-white hover:bg-gray-50 px-8 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg"
                    >
                        Call: 91 44514459
                    </a>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-transparent border border-white text-white hover:bg-white hover:text-pink-700 px-8 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg"
                    >
                        Book An Appointment
                    </button>
                </motion.div>
            </div>

            {/* General Appointment Modal */}
            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                />
            )}
        </section>
    );
};

export default UppalCTA;
