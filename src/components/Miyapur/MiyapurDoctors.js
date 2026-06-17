import React, { useState } from 'react';
import { Award, MapPin, Calendar, Phone } from 'lucide-react';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const MiyapurDoctors = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="doctors" className="py-16 bg-white">
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Trusted Specialists for Your <span style={{ color: 'rgb(189, 56, 92)' }}>Healthcare Needs</span>
                    </h2>
                    <p className="max-w-[800px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7 }}>
                        At TX Hospitals, our team of experienced specialities is dedicated to providing the highest standards of medical care. As one of the Top multispeciality hospitals in Miyapur, we focus on accurate diagnosis, personalised treatment and a patient-first approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Doctor 1 */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.08) 0px 1px 1.5px' }}>
                        <div className="w-full h-[220px] overflow-hidden bg-[#F5F7FA] pt-4">
                            <img src="https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1774670703463-Dr.%20Akhila%20Sunder.webp" alt="Dr. Akhila Sunder" className="w-full h-full object-contain object-bottom" />
                        </div>
                        <div className="flex flex-col gap-3 p-5 flex-1">
                            <div>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.3 }}>
                                    Dr. Akhila Sunder
                                </h3>
                                <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.5 }}>
                                    Sr. Consultant – Orthopaedic, Robotic Joint Replacement & Sports Medicine Specialist
                                </p>
                                <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>
                                    MBBS, MS Orthopaedics, FIJR, FIAS
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5 mt-auto">
                                <div className="flex items-center gap-2">
                                    <Award className="w-[13px] h-[13px] text-[#BD385C]" strokeWidth={2} />
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(30, 30, 30)' }}>
                                        Experience: <strong style={{ color: 'rgb(189, 56, 92)' }}>9+ Years</strong>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-[13px] h-[13px] text-[#BD385C]" strokeWidth={2} />
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(30, 30, 30)' }}>
                                        Miyapur, Hyderabad
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 pt-4 border-t border-[#F0DFE5] mt-4">
                                <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded transition-opacity hover:opacity-90" style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}>
                                    <Calendar className="w-[13px] h-[13px]" />
                                    Book Appointment
                                </button>
                                <a href="tel:9144514459" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded transition-all hover:bg-[#BD385C] hover:text-white" style={{ background: 'rgb(255, 255, 255)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(189, 56, 92)', border: '1px solid rgb(189, 56, 92)' }}>
                                    <Phone className="w-[13px] h-[13px]" />
                                    Call
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Doctor 2 */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.08) 0px 1px 1.5px' }}>
                        <div className="w-full h-[220px] overflow-hidden bg-[#F5F7FA] pt-4">
                            <img src="https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1774678850677-Dr.%20K%20Arun%20Kumar.webp" alt="Dr. K Arun Kumar" className="w-full h-full object-contain object-bottom" />
                        </div>
                        <div className="flex flex-col gap-3 p-5 flex-1">
                            <div>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.3 }}>
                                    Dr. K Arun Kumar
                                </h3>
                                <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.5 }}>
                                    Interventional Cardiologist
                                </p>
                                <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>
                                    MBBS, MD (Internal Medicine), DM (Cardiology)
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5 mt-auto">
                                <div className="flex items-center gap-2">
                                    <Award className="w-[13px] h-[13px] text-[#BD385C]" strokeWidth={2} />
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(30, 30, 30)' }}>
                                        Experience: <strong style={{ color: 'rgb(189, 56, 92)' }}>14+ Years</strong>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-[13px] h-[13px] text-[#BD385C]" strokeWidth={2} />
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(30, 30, 30)' }}>
                                        Miyapur, Hyderabad
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 pt-4 border-t border-[#F0DFE5] mt-4">
                                <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded transition-opacity hover:opacity-90" style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}>
                                    <Calendar className="w-[13px] h-[13px]" />
                                    Book Appointment
                                </button>
                                <a href="tel:9144514459" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded transition-all hover:bg-[#BD385C] hover:text-white" style={{ background: 'rgb(255, 255, 255)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(189, 56, 92)', border: '1px solid rgb(189, 56, 92)' }}>
                                    <Phone className="w-[13px] h-[13px]" />
                                    Call
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Doctor 3 */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.08) 0px 1px 1.5px' }}>
                        <div className="w-full h-[220px] overflow-hidden bg-[#F5F7FA] pt-4">
                            <img src="https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1774675907366-Dr.%20Prasad%20Neelam.webp" alt="Dr. Prasad Neelam" className="w-full h-full object-contain object-bottom" />
                        </div>
                        <div className="flex flex-col gap-3 p-5 flex-1">
                            <div>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.3 }}>
                                    Dr. Prasad Neelam
                                </h3>
                                <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.5 }}>
                                    Senior Consultant Surgical Gastroenterologist & Liver Transplant Surgeon
                                </p>
                                <p className="mt-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>
                                    MBBS, MS (General Surgery), MCh (Surgical Gastroenterology)
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5 mt-auto">
                                <div className="flex items-center gap-2">
                                    <Award className="w-[13px] h-[13px] text-[#BD385C]" strokeWidth={2} />
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(30, 30, 30)' }}>
                                        Experience: <strong style={{ color: 'rgb(189, 56, 92)' }}>8+ Years</strong>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-[13px] h-[13px] text-[#BD385C]" strokeWidth={2} />
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(30, 30, 30)' }}>
                                        Miyapur, Hyderabad
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 pt-4 border-t border-[#F0DFE5] mt-4">
                                <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded transition-opacity hover:opacity-90" style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}>
                                    <Calendar className="w-[13px] h-[13px]" />
                                    Book Appointment
                                </button>
                                <a href="tel:9144514459" className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded transition-all hover:bg-[#BD385C] hover:text-white" style={{ background: 'rgb(255, 255, 255)', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(189, 56, 92)', border: '1px solid rgb(189, 56, 92)' }}>
                                    <Phone className="w-[13px] h-[13px]" />
                                    Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a href="/find-doctor?location=Miyapur" className="inline-block px-8 py-2.5 rounded transition-all hover:bg-[#BD385C] hover:text-white" style={{ background: 'rgb(255, 255, 255)', fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 500, color: 'rgb(189, 56, 92)', border: '1.5px solid rgb(189, 56, 92)' }}>
                        View All Doctors
                    </a>
                </div>
            </div>

            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                    redirectUrl="/thank-you-miyapur"
                    defaultLocation="TX Hospitals Miyapur"
                />
            )}
        </section>
    );
};

export default MiyapurDoctors;
