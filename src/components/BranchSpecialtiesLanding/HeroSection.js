import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const HeroSection = ({ location }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const formattedLocation = location
        ? location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : 'Miyapur'; // Default or dynamic location

    return (
        <section className="relative w-full flex flex-col md:flex-row" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {/* Left Box */}
            <div
                className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-12 md:py-24"
                style={{ backgroundColor: '#2d0c18' }} // Deep dark red background from the design
            >
                <div>
                    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                        {formattedLocation === 'Kachiguda' ? 'Medical Specialties at' : 'Specialties at'}<br />
                        <span className="text-[#bd385c]">TX Hospitals {formattedLocation}</span>
                    </h1>
                    <p className="text-gray-200 mt-6 text-base md:text-sm leading-relaxed max-w-xl">
                        {formattedLocation === 'Kachiguda'
                            ? `As a trusted best multispeciality hospital in Kachiguda, TX Hospitals offers expert consultations, modern diagnostics and personalised treatment across major medical departments. Our specialists work together to provide timely and well-coordinated care for every patient.`
                            : `At TX Hospitals ${formattedLocation}, patients can access expert consultation, advanced diagnostics and specialised treatment support across major medical departments. For families searching for Top hospitals near ${formattedLocation}, we offer organised, patient-focused care in a convenient location.`}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-8">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-[#bd385c] hover:bg-[#a53151] transition-colors text-white text-sm font-medium px-6 py-3 rounded m-0 border border-[#bd385c] w-full sm:w-auto"
                        >
                            Book Appointment
                        </button>
                        <button
                            onClick={() => router.push('/surgery-care')}
                            className="bg-transparent hover:bg-white/10 transition-colors text-white text-sm font-medium px-6 py-3 rounded m-0 border border-white whitespace-nowrap w-full sm:w-auto"
                        >
                            Second Opinion
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Box (Image) */}
            <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[500px] bg-black block md:block">
                <Image
                    src={`/assets/${formattedLocation}/Specialties_Banner.png`}
                    alt={`TX Hospitals ${formattedLocation}`}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                    redirectUrl={`/thank-you-${location?.toLowerCase() || 'miyapur'}`}
                    defaultLocation={`TX Hospitals ${formattedLocation}`}
                />
            )}
        </section>
    );
};

export default HeroSection;
