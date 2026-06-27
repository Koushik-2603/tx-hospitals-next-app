import React from 'react';
import Image from 'next/image';

const KachigudaNewAbout = () => {
    return (
        <section id="about" style={{ background: 'rgb(255, 255, 255)' }} className="px-6">
            <div className="max-w-[1170px] mx-auto flex flex-col lg:flex-row">
                <div className="w-full lg:w-[48%] flex-shrink-0 flex items-center justify-center p-6">
                    <div className="w-full rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/assets/Kachiguda/Welcome-Kachiguda.jpg"
                            alt="Welcome to TX Hospitals, Kachiguda"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center py-2 lg:py-4 lg:pl-10 lg:pr-11">
                    <h2 className="mb-1.5" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.25 }}>
                        Trusted Healthcare in the<br /> <span style={{ color: 'rgb(189, 56, 92)' }}>Heart of Kachiguda</span>
                    </h2>
                    <p className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '17px', fontWeight: 500, color: 'rgb(30, 30, 30)', lineHeight: 1.4 }}>
                        <span style={{ color: 'rgb(189, 56, 92)' }}>TX Hospitals Kachiguda</span> is committed to delivering reliable and patient-focused healthcare for families in and around central Hyderabad. Known as one of the <span style={{ color: 'rgb(189, 56, 92)' }}>best hospitals in Kachiguda</span>, we offer multispeciality care with experienced doctors, advanced diagnostics, 24/7 emergency support, ICU services, surgical care and preventive health checkups under one roof.
                    </p>
                    <p className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        Located near Kachiguda Station Road, the hospital is easy to reach for patients from Kachiguda, Narayanguda, Barkatpura, Himayatnagar, Nallakunta, Chikkadpally, Abids, Malakpet, Amberpet, and nearby areas.
                    </p>
                    <p className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.75 }}>
                        From routine consultations and sudden illnesses to diagnostic tests, second opinions, and planned surgeries, TX Hospitals Kachiguda ensures every patient receives timely care, clear medical guidance, and compassionate support at every step.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default KachigudaNewAbout;
