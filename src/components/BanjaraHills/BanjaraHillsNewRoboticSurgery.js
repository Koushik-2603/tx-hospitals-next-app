import React, { useState } from 'react';
import Image from 'next/image';
import { CircleCheckBig, Calendar } from 'lucide-react';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const BanjaraHillsNewRoboticSurgery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const roboticServices = [
        "Robotic Orthopaedic Surgery",
        "Robotic GI Surgery",
        "Robotic Gynecologic Surgery",
        "Robotic Urologic Surgery",
        "Robotic Cancer Surgery"
    ];

    return (
        <section style={{ background: 'rgb(243, 243, 245)' }} className="py-8 md:py-10 px-6">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                
                {/* Left Content column */}
                <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
                    <h2 className="mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, lineHeight: 1.3 }}>
                        <span style={{ color: 'rgb(189, 56, 92)' }}>Advanced Robotic Surgery Hospitals in Banjara Hills</span> Precision Care for Better Recovery
                    </h2>
                    
                    <p className="mb-3 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14.5px', lineHeight: 1.7 }}>
                        At TX Hospitals Banjara Hills, we offer advanced robotic-assisted surgeries across multiple specialties with better precision, smaller cuts and faster recovery support.
                    </p>
                    
                    <p className="mb-4 text-gray-900 font-semibold" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14.5px' }}>
                        Our robotic surgery services include:
                    </p>

                    <ul className="flex flex-col gap-2.5 mb-5">
                        {roboticServices.map((service, index) => (
                            <li key={index} className="flex items-start gap-2.5">
                                <CircleCheckBig className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] text-[#BD385C]" strokeWidth={2.5} />
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 500, color: 'rgb(50, 50, 50)', lineHeight: 1.5 }}>
                                    {service}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="mb-6 text-gray-700" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14.5px', lineHeight: 1.7 }}>
                        With expert surgeons and advanced technology, we provide safe, precise and patient-friendly surgical care.
                    </p>

                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="flex items-center gap-2 px-8 py-3 rounded-lg transition-opacity hover:opacity-90 shadow-md w-fit font-medium" 
                        style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '15px', color: 'rgb(255, 255, 255)', border: 'none' }}
                    >
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                    </button>
                </div>

                {/* Right Image column */}
                <div className="w-full lg:w-[48%] flex-shrink-0 order-1 lg:order-2 flex items-center justify-center">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <Image
                            src="/assets/banjara-hills/Robotic-Surgery.jpg"
                            alt="Surgeon performing Advanced Robotic-Assisted Surgery at TX Hospitals Banjara Hills"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>

            </div>

            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                    redirectUrl="/thank-you-banjara-hills"
                    defaultLocation="TX Hospitals Banjara Hills"
                />
            )}
        </section>
    );
};

export default BanjaraHillsNewRoboticSurgery;
