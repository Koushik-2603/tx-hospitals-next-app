import React from 'react';
import { Play, Star } from 'lucide-react';

const MiyapurTestimonials = () => {
    return (
        <section id="testimonials" className="py-16" style={{ background: 'linear-gradient(rgba(189, 56, 92, 0.1) 0%, rgba(31, 17, 50, 0.08) 100%)' }}>
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Real Stories from <span style={{ color: 'rgb(189, 56, 92)' }}>Real Patients</span>
                    </h2>
                    <p className="max-w-[560px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7 }}>
                        Real experiences from patients who trusted TX Hospitals, Miyapur for their care, comfort and recovery.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Priya Reddy testimonial" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                                "TX Hospitals gave me excellent care during my surgery. The doctors were very professional and the staff was supportive throughout. I felt safe and cared for at every step."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Priya Reddy" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Priya Reddy</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Miyapur, Hyderabad</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial_1.96f6b0ad.jpeg" alt="Ravi Kumar testimonial" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                                "Visited for a knee issue and Dr. Akhila Sunder was simply brilliant. She explained everything clearly and the robotic surgery went perfectly. Fully recovered now!"
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial_1.96f6b0ad.jpeg" alt="Ravi Kumar" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Ravi Kumar</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Kondapur, Hyderabad</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Sunitha & Family testimonial" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Sunitha & Family" className="w-9 h-9 rounded-full object-cover" />
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

export default MiyapurTestimonials;
