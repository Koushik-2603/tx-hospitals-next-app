import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const SecondOpinionSection = ({ location }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const formatString = (str) => {
        if (!str) return '';
        return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    const formattedLocation = formatString(location);

    // Some branches might use original hyphenated casing in their asset folders
    // We will attempt to use the formatted location first to match HeroSection logic
    const imagePath = `/assets/${formattedLocation || 'Miyapur'}/SOS.jpg`;

    return (
        <section className="py-16 overflow-hidden relative" style={{ background: 'linear-gradient(90deg, rgb(250, 232, 239) 0%, rgb(228, 235, 245) 100%)', fontFamily: 'Poppins, sans-serif' }}>
            <div className="max-w-[1170px] mx-auto px-6 relative z-10">
                <div className="bg-white rounded-xl shadow-md p-5 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-6 md:gap-10">

                    {/* Left side text content */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-[clamp(24px,3vw,34px)] font-bold mb-6 text-gray-900 leading-tight">
                            {formattedLocation === 'Kachiguda'
                                ? <span className="text-[#BD385C]">Not Sure Which Specialist to Consult?</span>
                                : <><span className="text-[#BD385C]">Second Opinion</span> Support</>}
                        </h2>
                        <p className="text-[15px] font-normal text-gray-700 leading-relaxed max-w-[500px] mb-8 whitespace-pre-line">
                            {formattedLocation === 'Kachiguda'
                                ? 'Symptoms such as pain, fatigue, dizziness, breathing difficulty or digestive discomfort may sometimes be linked to different medical conditions.\nShare your symptoms with our appointment team and we will help connect you with the appropriate department based on your healthcare concern.\nGet help choosing the right specialist and schedule your consultation without delay.'
                                : `When treatment decisions feel confusing, our specialists help you understand your diagnosis, reports and available treatment options with clarity. At TX Hospitals ${formattedLocation}, patients can consult experienced doctors for trusted second opinion support before surgery, advanced treatment or long-term care.`}
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded transition-opacity hover:opacity-90"
                            style={{ background: 'rgb(189, 56, 92)', fontSize: '15px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}
                        >
                            <Calendar className="w-4 h-4" />
                            Book Appointment
                        </button>
                    </div>

                    {/* Right side image */}
                    <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[350px] rounded-lg overflow-hidden">
                        <img
                            src={imagePath}
                            alt="Second Opinion Support Consultation"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                                // Fallback directly to miyapur if there's a folder case mismatch
                                e.target.onerror = null;
                                e.target.src = "/assets/Miyapur/SOS.jpg";
                            }}
                        />
                    </div>
                </div>
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

export default SecondOpinionSection;
