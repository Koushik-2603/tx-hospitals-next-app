import React, { useState } from 'react';
import { Calendar, Phone, Stethoscope } from 'lucide-react';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';
import { useRouter } from 'next/router';

const CTASection = ({ location }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();

    const formatString = (str) => {
        if (!str) return '';
        return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    const formattedLocation = formatString(location) || 'Miyapur';

    return (
        <section className="py-8 md:py-6 text-center text-white mx-4 md:mx-12 rounded-2xl" style={{ background: 'rgb(189, 56, 92)' }}>
            <div className="max-w-[900px] mx-auto px-6">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                    Consult Our Doctors, Get Expert Care Closer to You
                </h2>
                <p className="text-sm md:text-[15px] font-normal leading-relaxed mb-10 text-white/90 max-w-[800px] mx-auto">
                    Your health deserves timely attention and the right specialist care. Whether you need a routine consultation, second opinion, diagnostic test, emergency support or specialty treatment, TX Hospitals {formattedLocation} is here to help.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded text-[15px] font-medium transition-all hover:bg-white/90 w-full sm:w-auto"
                        style={{ background: 'white', color: 'rgb(189, 56, 92)' }}
                    >
                        <Calendar className="w-5 h-5" />
                        Book Appointment
                    </button>

                    <a
                        href="tel:9144514459"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded text-[15px] font-medium transition-all hover:bg-white/10 w-full sm:w-auto"
                        style={{ border: '1px solid rgba(255, 255, 255, 0.4)', color: 'white' }}
                    >
                        <Phone className="w-5 h-5" />
                        Call 91445 14459
                    </a>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded text-[15px] font-medium transition-all hover:bg-white/10 w-full sm:w-auto mt-0"
                        style={{ border: '1px solid rgba(255, 255, 255, 0.4)', color: 'white' }}
                    >
                        <Stethoscope className="w-5 h-5" />
                        Book Health Check Up
                    </button>
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

export default CTASection;
