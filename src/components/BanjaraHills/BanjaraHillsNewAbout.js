import React from 'react';
import Image from 'next/image';

const BanjaraHillsNewAbout = () => {
    return (
        <section id="about" style={{ background: 'rgb(255, 255, 255)' }} className="px-6 py-8 md:py-10">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-[48%] flex-shrink-0 flex items-center justify-center p-4">
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <Image
                            src="/assets/banjara-hills/About.jpg"
                            alt="TX Hospitals Banjara Hills Doctor with Patient and Child"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center py-4 lg:py-6 lg:pl-12 lg:pr-6">
                    <h2 className="mb-5 text-gray-900" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, lineHeight: 1.25 }}>
                        <span style={{ color: 'rgb(189, 56, 92)' }}>Healthcare</span> That Keeps You One Step Ahead
                    </h2>

                    <p className="mb-4 text-gray-900 font-semibold" style={{ fontSize: '16px', lineHeight: 1.5 }}>
                        From expert consultations to <span style={{ color: 'rgb(189, 56, 92)' }}>advanced robotic surgeries, TX Hospitals Banjara Hills</span> brings trusted medical care with modern technology, experienced specialists and a comfort-first patient experience
                    </p>

                    <p className="mb-4 text-gray-600" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                        TX Hospitals Banjara Hills brings expert doctors, advanced technology and patient-friendly care together in one trusted place.
                    </p>

                    <p className="mb-4 text-gray-600" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                        As a leading hospital in Banjara Hills, Hyderabad, we offer consultations, diagnostics, emergency care, robotic surgery, health checkups, surgical care and follow-up support under one roof.
                    </p>

                    <p className="mb-2 text-gray-600" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                        From routine health needs to complex treatments, our team is here to guide you with clear advice, timely care and trusted medical expertise.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BanjaraHillsNewAbout;
