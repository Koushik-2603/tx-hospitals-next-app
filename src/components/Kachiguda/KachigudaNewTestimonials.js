import React from 'react';
import { Play, Star } from 'lucide-react';

const KachigudaNewTestimonials = () => {
    return (
        <section id="testimonials" className="py-16" style={{ background: 'linear-gradient(rgba(189, 56, 92, 0.1) 0%, rgba(31, 17, 50, 0.08) 100%)' }}>
            <div className="max-w-[1170px] mx-auto px-6 lg:pr-11">
                <div className="text-center mb-10">
                    <h2
                        className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold font-poppins"
                        style={{ color: 'rgb(189, 56, 92)' }}
                    >
                        Patient Testimonials
                    </h2>
                    <p
                        className="max-w-[700px] mx-auto text-sm md:text-base text-gray-700 leading-relaxed font-normal"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Every patient story reflects the trust, care and commitment we work for every day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 - Vamshi */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Vamshi testimonial video" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                                "I was struggling with knee pain for a long time, and it was affecting my daily activities. After undergoing knee replacement surgery under Dr. Karan Patel at TX Hospitals Kachiguda, I am feeling much better and my recovery has been smooth. I am thankful to Dr. Karan Patel and the entire TX Hospitals team for their care and support."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Knee Replacement Surgery Patient" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Knee Replacement Surgery Patient</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Kachiguda</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 - Mr Emmanuel N */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial_1.96f6b0ad.jpeg" alt="Mr Emmanuel N testimonial video" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                                "I underwent benign tumor surgery under Dr. Naresh Dude at TX Hospitals Kachiguda, and the surgery went well successfully. The doctor explained everything clearly, and the hospital staff took good care of me throughout my treatment. I am thankful to Dr. Naresh Dude and the TX Hospitals team for their support and care."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial_1.96f6b0ad.jpeg" alt="Mrs. Swapna" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Mrs. Swapna</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Kachiguda</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 - Sunitha & Family */}
                    <div className="bg-white rounded-lg overflow-hidden flex flex-col" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}>
                        <div className="relative w-full h-[180px] overflow-hidden group cursor-pointer">
                            <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Sunitha & Family testimonial video" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
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
                                "I came to TX Hospitals Kachiguda for treatment of a breast lump. My surgery went well successfully, and I received very good care throughout my hospital stay. The doctor explained everything clearly and the staff were supportive and caring. I am thankful to the doctor and the TX Hospitals team for their excellent care."
                            </p>
                            <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5]">
                                <img src="/_components/v2/d95b7e9de330dae14d6e633ef3f646f12f5f0834/Testimonial.59c9eb79.jpeg" alt="Breast Lump Surgery Patient" className="w-9 h-9 rounded-full object-cover" />
                                <div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>Breast Lump Surgery Patient</div>
                                    <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>Kachiguda</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KachigudaNewTestimonials;
