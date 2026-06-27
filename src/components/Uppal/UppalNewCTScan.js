import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const UppalNewCTScan = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section style={{ background: 'rgb(243, 243, 245)' }} className="px-6">
            <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row" style={{ minHeight: '440px' }}>
                <div className="flex-1 flex flex-col justify-center py-10 lg:py-14 lg:pr-10 order-2 lg:order-1">
                    <div className="max-w-[550px]">
                        <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.3 }}>
                            Advanced <span style={{ color: 'rgb(189, 56, 92)' }}>CT Scan in Uppal</span>, Quick Imaging Support for Better Diagnosis
                        </h2>
                        <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.8 }}>
                            Accurate diagnosis helps doctors plan the right treatment faster. At TX Hospitals, Uppal, CT scan services support the evaluation of injuries, chest conditions, abdominal pain, neurological concerns, infections and emergency cases.
                        </p>
                        <p className="mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.8 }}>
                            With CT scan, lab services and specialist consultation available under one roof, patients can receive faster diagnosis and timely medical care without travelling across the city.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-8 py-3 rounded transition-opacity hover:opacity-90 shadow-md w-fit"
                            style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}
                        >
                            <Calendar className="w-4 h-4" />
                            Book CT Scan or Consultation Today
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-[48%] flex-shrink-0 order-1 lg:order-2 flex items-center justify-center p-6 lg:pr-11 lg:pl-6 lg:py-6" style={{ minHeight: '300px' }}>
                    <div className="relative w-full h-full overflow-hidden" style={{ borderRadius: '20px', minHeight: '350px' }}>
                        <Image
                            src="/assets/Uppal/Advanced_CT_Scan.jpg"
                            alt="Advanced 24/7 CT Scan Machine and Imaging Center at TX Hospitals Uppal"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                    redirectUrl="/thank-you-uppal"
                    defaultLocation="TX Hospitals Uppal"
                />
            )}
        </section>
    );
};

export default UppalNewCTScan;
