import React from 'react';
import { Stethoscope, Cpu, Clock, MapPin, UserCheck, Building } from 'lucide-react';

const BanjaraHillsNewWhyChoose = () => {
    const choosePoints = [
        {
            title: 'Advanced Robotic Surgery',
            desc: 'Robotic-assisted surgeries for orthopedics, gastro, oncology, gynecology, urology and more.',
            icon: Cpu
        },
        {
            title: 'Expert Doctors, Trusted Care',
            desc: 'Get treated by experienced specialists across major medical and surgical departments.',
            icon: Stethoscope
        },
        {
            title: 'Modern Hospital Facilities',
            desc: 'Well-equipped operation theatres, diagnostics, ICU and emergency care support better treatment outcomes',
            icon: Building
        },
        {
            title: '24/7 Emergency Support',
            desc: 'Round-the-clock medical care for sudden illness, accidents and urgent health needs.',
            icon: Clock
        },
        {
            title: 'Patient-Friendly Experience',
            desc: 'From consultation to recovery, our team supports you with clear guidance, smooth process and compassionate care',
            icon: UserCheck
        },
        {
            title: 'Prime Location in Banjara Hills',
            desc: 'Easy access for patients from Banjara Hills, Jubilee Hills, Film Nagar, Mehdipatnam, Punjagutta & nearby areas.',
            icon: MapPin
        }
    ];

    return (
        <section id="why-choose" className="py-10 md:py-12" style={{ background: '#FFEBEB' }}>
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="mb-3" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Why Choose <span style={{ color: 'rgb(189, 56, 92)' }}>TX Hospitals Banjara Hills?</span>
                    </h2>
                    <p className="max-w-[850px] mx-auto text-gray-700" style={{ fontSize: '14.5px', fontWeight: 400, lineHeight: 1.7 }}>
                        TX Hospitals Banjara Hills is a NABH-accredited multispeciality hospital offering safe, trusted and patient-focused care with experienced doctors, advanced diagnostics, emergency support, and modern facilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {choosePoints.map((point, index) => {
                        const IconComponent = point.icon;
                        return (
                            <div 
                                key={index} 
                                className="flex gap-4 p-5 rounded-xl bg-white" 
                                style={{ border: '0.5px solid rgb(240, 223, 229)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 4px 10px' }}
                            >
                                <div className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0" style={{ background: 'rgb(240, 223, 229)' }}>
                                    <IconComponent className="w-5 h-5 text-[#BD385C]" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="mb-1 text-gray-900" style={{ fontSize: '14.5px', fontWeight: 600, lineHeight: 1.4 }}>
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600" style={{ fontSize: '13px', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
                                        {point.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BanjaraHillsNewWhyChoose;
