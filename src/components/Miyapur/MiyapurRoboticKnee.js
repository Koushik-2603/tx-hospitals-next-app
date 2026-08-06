import React, { useState } from 'react';
import { CircleCheckBig, Calendar } from 'lucide-react';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const MiyapurRoboticKnee = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section style={{ background: 'rgb(243, 243, 245)' }}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex flex-col justify-center px-8 py-2 lg:py-4 lg:pl-14 lg:pr-10 order-2 lg:order-1">
                    <div className="max-w-[520px]">
                        <h2 className="mb-2" style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.3 }}>
                            Advanced Robotic Knee Replacement <span style={{ color: 'rgb(189, 56, 92)' }}>in Miyapur</span>
                        </h2>
                        <p className="mb-2" style={{ fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.8 }}>
                            Knee pain should not stop you from living comfortably. At TX Hospitals, Miyapur, we offer advanced Robotic Knee Replacement Surgery for patients with severe knee pain, arthritis, and joint damage.
                        </p>
                        <p className="mb-3" style={{ fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.8 }}>
                            With robotic-assisted precision, our orthopaedic team helps improve implant accuracy, mobility, and recovery support.
                        </p>
                        
                        <ul className="flex flex-col gap-2 mb-4">
                            <li className="flex items-start gap-2">
                                <CircleCheckBig className="flex-shrink-0 mt-0.5 w-[17px] h-[17px] text-[#BD385C]" strokeWidth={2} />
                                <span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.6 }}>
                                    Robotic-assisted precision for accurate implant placement
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CircleCheckBig className="flex-shrink-0 mt-0.5 w-[17px] h-[17px] text-[#BD385C]" strokeWidth={2} />
                                <span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.6 }}>
                                    Minimally invasive with faster recovery
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CircleCheckBig className="flex-shrink-0 mt-0.5 w-[17px] h-[17px] text-[#BD385C]" strokeWidth={2} />
                                <span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.6 }}>
                                    Experienced orthopaedic team in Miyapur
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CircleCheckBig className="flex-shrink-0 mt-0.5 w-[17px] h-[17px] text-[#BD385C]" strokeWidth={2} />
                                <span style={{ fontSize: '14px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.6 }}>
                                    Suitable for arthritis, severe knee pain & joint damage
                                </span>
                            </li>
                        </ul>
                        
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 px-8 py-3 rounded transition-opacity hover:opacity-90 shadow-md w-fit" style={{ background: 'rgb(189, 56, 92)', fontSize: '15px', fontWeight: 500, color: 'rgb(255, 255, 255)', border: 'none' }}>
                            <Calendar className="w-4 h-4" />
                            Book Appointment
                        </button>
                    </div>
                </div>
                
                <div className="w-full lg:w-[48%] flex-shrink-0 order-1 lg:order-2 flex items-center justify-center p-6">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-md aspect-video">
                        <video 
                            src="/assets/Miyapur/2 miyapur ruf.mp4" 
                            autoPlay 
                            loop 
                            muted
                            playsInline 
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
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

export default MiyapurRoboticKnee;
