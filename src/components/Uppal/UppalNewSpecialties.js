import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const specialtiesList = [
    { name: 'Cardiology', icon: '/assets/Departments/Cardiac Sciences.png', path: '/specialities/cardiac-sciences' },
    { name: 'Orthopedics', icon: '/assets/Departments/Orthopaedics.png', path: '/specialities/orthopaedics' },
    { name: 'Robotic Surgery', icon: '/assets/Departments/Robotics Sciences.png', path: '/specialities' },
    { name: 'General Medicine', icon: '/assets/Departments/Internal Medicine.png', path: '/specialities/internal-medicine' },
    { name: 'Gastroenterology', icon: '/assets/Departments/Gastro Sciences.png', path: '/specialities/gastro-sciences' },
    { name: 'Nephrology', icon: '/assets/Departments/Nephrology.png', path: '/specialities/nephrology' },
    { name: 'Urology', icon: '/assets/Departments/Urology Icon.png', path: '/specialities/urology' },
    { name: 'Neurology', icon: '/assets/Departments/Neuro Sciences.png', path: '/specialities/neuro-sciences' },
    { name: 'ENT', icon: '/assets/Departments/ENT.png', path: '/specialities/ent' },
    { name: 'Pulmonology', icon: '/assets/Departments/Pulmonology.png', path: '/specialities/pulmonology' },
    { name: 'Obstetrics & Gynaecology', icon: '/assets/Departments/Mother & Child Care.png', path: '/specialities/gynaecology-and-obstetrics' },
    { name: 'Paediatrics', icon: '/assets/Departments/Mother & Child Care.png', path: '/specialities/paediatrics' },
    { name: 'Skin & Cosmetic Care', icon: '/assets/Departments/Dermatology & Cosmetic Care.png', path: '/specialities/dermatology' },
    { name: 'Dental Care', icon: '/assets/Departments/Dental & Maxillofacial.png', path: '/specialities/dental-and-maxillofacial' },
    { name: 'Oncology', icon: '/assets/Departments/Oncology.png', path: '/specialities/oncology' },
    { name: 'Pain Management', icon: '/assets/Departments/Anaesthesia & Pain Management.png', path: '/specialities/pain-management' }
];

const UppalNewSpecialties = () => {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    const visibleSpecialties = showAll ? specialtiesList : specialtiesList.slice(0, 8);

    return (
        <section id="specialties" className="py-16" style={{ background: 'rgb(254, 236, 236)' }}>
            <div className="max-w-[1170px] mx-auto px-6 lg:pr-11">
                <div className="text-center mb-10">
                    <h2 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: 'rgb(189, 56, 92)' }}>
                        Specialties at TX Hospitals, Uppal
                    </h2>
                    <h3 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Complete Medical Care, Close to You
                    </h3>
                    <p className="max-w-[850px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7 }}>
                        At TX Hospitals, Uppal, patients can consult experienced specialists across major departments. Our hospital brings together doctors, diagnostics, emergency care and treatment support in one convenient location.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                    {visibleSpecialties.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(item.path)}
                            className="flex flex-col items-center justify-center gap-4 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow"
                            style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px', minHeight: '160px' }}
                        >
                            <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={`${item.name} Department - TX Hospitals Uppal`}
                                    fill
                                    className="object-contain"
                                    sizes="60px"
                                />
                            </div>
                            <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-8 py-2.5 rounded transition-opacity hover:opacity-90"
                        style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UppalNewSpecialties;
