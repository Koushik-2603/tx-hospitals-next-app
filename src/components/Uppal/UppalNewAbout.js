import React from 'react';
import Image from 'next/image';

const UppalNewAbout = () => {
    return (
        <section id="about" style={{ background: 'rgb(255, 255, 255)' }} className="px-6">
            <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row" style={{ minHeight: '460px' }}>
                <div className="w-full lg:w-[48%] flex-shrink-0 flex items-center justify-center" style={{ minHeight: '300px', padding: '24px' }}>
                    <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ borderRadius: '20px', minHeight: '350px' }}>
                        <Image
                            src="/assets/Uppal/Welcome-Uppal.jpg"
                            alt="Welcome to TX Hospitals Uppal Multispecialty Building Exterior"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl"
                            priority
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center py-10 lg:py-14 lg:pl-10 lg:pr-11">
                    <h2 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.25 }}>
                        Welcome to <span style={{ color: 'rgb(189, 56, 92)' }}>TX Hospitals, Uppal</span>
                    </h2>
                    <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px', fontWeight: 500, color: 'rgb(189, 56, 92)', lineHeight: 1.4 }}>
                        TX Hospitals, Uppal brings trusted healthcare closer to families in Uppal and nearby areas with experienced doctors, emergency care, diagnostics and surgical support under one roof.
                    </p>
                    <p className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        TX Hospitals, Uppal brings trusted healthcare closer to your neighbourhood with experienced doctors, 24/7 emergency care, CT scan, diagnostics, ICU support, modern operation theatres and surgical care under one roof.
                    </p>
                    <p className="mb-6" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        From regular health checkups to emergency treatment and specialist consultations, TX Hospitals, Uppal offers convenient, patient-friendly care for families in Uppal, Nagole, Boduppal, Ramanthapur, Habsiguda, Kothapet and nearby areas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UppalNewAbout;
