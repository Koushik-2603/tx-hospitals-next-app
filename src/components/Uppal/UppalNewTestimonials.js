import React from 'react';
import { Play, Star } from 'lucide-react';

const UppalNewTestimonials = () => {
    return (
        <section id="testimonials" className="py-16" style={{ background: 'linear-gradient(rgba(189, 56, 92, 0.1) 0%, rgba(31, 17, 50, 0.08) 100%)' }}>
            <div className="max-w-[1170px] mx-auto px-6 lg:pr-11">
                <div className="text-center mb-10">
                    <h2 
                        className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold font-poppins" 
                        style={{ color: 'rgb(3, 2, 19)' }}
                    >
                        Real Experiences from <span style={{ color: 'rgb(189, 56, 92)' }}>Patients Near Uppal</span>
                    </h2>
                    <p 
                        className="max-w-[700px] mx-auto text-sm md:text-base text-gray-700 leading-relaxed font-normal"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Hear from patients and families who trusted TX Hospitals, Uppal for consultations, emergency care, diagnostic services, surgeries and recovery support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 - Vamshi */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Patient Vamshi sharing review of orthopedic knee surgery at TX Hospitals Uppal" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.35)' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200 group-hover:scale-110" style={{ background: 'rgb(189, 56, 92)', boxShadow: 'rgba(189, 56, 92, 0.5) 0px 4px 16px' }}>
                                    <Play className="w-5 h-5 ml-1 text-white" fill="currentColor" strokeWidth={2} />
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded" style={{ background: 'rgba(0, 0, 0, 0.65)' }}>
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 500, color: 'rgb(255, 255, 255)' }}>1:24</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-5 flex-1">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-[#BD385C]" fill="currentColor" strokeWidth={2} />
                                ))}
                            </div>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7, flex: '1 1 0%' }}>
                                "After my accident, I came to TX Hospitals and was admitted under Dr. Jagdish Pusa. I underwent knee surgery, and the care I received was excellent. The doctors and staff supported me throughout my recovery. I am very happy with the treatment."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Patient Vamshi profile picture" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Vamshi</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Uppal, Hyderabad</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 - Mr Emmanuel N */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial_1.96f6b0ad.jpeg" alt="Patient Mr Emmanuel N sharing review of surgical treatment under Dr Azadh Chandrashekhar at TX Hospitals Uppal" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.35)' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200 group-hover:scale-110" style={{ background: 'rgb(189, 56, 92)', boxShadow: 'rgba(189, 56, 92, 0.5) 0px 4px 16px' }}>
                                    <Play className="w-5 h-5 ml-1 text-white" fill="currentColor" strokeWidth={2} />
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded" style={{ background: 'rgba(0, 0, 0, 0.65)' }}>
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 500, color: 'rgb(255, 255, 255)' }}>1:24</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-5 flex-1">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-[#BD385C]" fill="currentColor" strokeWidth={2} />
                                ))}
                            </div>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7, flex: '1 1 0%' }}>
                                " I came to TX Hospitals for my surgical treatment and was admitted under Dr. U Azadh Chandrashekhar. The doctor explained everything clearly and the surgery went smoothly. The hospital team took very good care of me throughout my stay. I am happy with the treatment and support I received."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial_1.96f6b0ad.jpeg" alt="Patient Mr Emmanuel N profile picture" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Mr Emmanuel N</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Africa</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 - Sunitha & Family */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Sunitha and Family sharing review of affordable health checkup package at TX Hospitals Uppal" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.35)' }}></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200 group-hover:scale-110" style={{ background: 'rgb(189, 56, 92)', boxShadow: 'rgba(189, 56, 92, 0.5) 0px 4px 16px' }}>
                                    <Play className="w-5 h-5 ml-1 text-white" fill="currentColor" strokeWidth={2} />
                                </div>
                            </div>
                            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded" style={{ background: 'rgba(0, 0, 0, 0.65)' }}>
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 500, color: 'rgb(255, 255, 255)' }}>1:24</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-5 flex-1">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-[#BD385C]" fill="currentColor" strokeWidth={2} />
                                ))}
                            </div>
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7, flex: '1 1 0%' }}>
                                "The health checkup package was very affordable and thorough. My whole family got checked and the reports were ready quickly. TX Hospitals is truly our first choice."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Patient Sunitha and Family profile picture" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Sunitha & Family</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Bachupally, Hyderabad</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UppalNewTestimonials;
