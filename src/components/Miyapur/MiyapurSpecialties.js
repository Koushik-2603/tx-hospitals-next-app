import React, { useState } from 'react';
import { Activity, Droplets, Brain, Baby, Sparkles, Smile, HeartPulse } from 'lucide-react';
import { useRouter } from 'next/router';

const MiyapurSpecialties = () => {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    return (
        <section id="specialties" className="py-16" style={{ background: 'rgb(254, 236, 236)' }}>
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Expert Care Across <span style={{ color: 'rgb(189, 56, 92)' }}>Major Medical Departments</span>
                    </h2>
                    <p className="max-w-[640px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7 }}>
                        At TX Hospitals, Miyapur, patients can consult experienced doctors across multiple specialties — supported by advanced diagnostics, trained medical teams and a patient-first approach.
                    </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                    {/* 1. Cardiology */}
                    <div onClick={() => router.push('/specialities/cardiac-sciences')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
                            <circle cx="40" cy="40" r="39" fill="#F5F7FA" stroke="#DDE3EA" strokeWidth="1"></circle>
                            <path d="M40 62 C30 54 14 44 14 30 C14 21 20 15 28 15 C33 15 37 18 40 22 C43 18 47 15 52 15 C60 15 66 21 66 30 C66 44 50 54 40 62Z" fill="#E04545" stroke="#1C1C2E" strokeWidth="2" strokeLinejoin="round"></path>
                            <path d="M24 24 C22 28 22 34 24 38" stroke="#FF8080" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7"></path>
                            <path d="M40 22 L40 12 C40 10 43 8 46 10" stroke="#4A90E2" strokeWidth="2.5" strokeLinecap="round" fill="none"></path>
                            <path d="M28 18 C22 14 16 16 14 22" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" fill="none"></path>
                            <path d="M52 18 C58 14 64 16 66 22" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" fill="none"></path>
                        </svg>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Cardiology</span>
                    </div>

                    {/* 2. Orthopedics */}
                    <div onClick={() => router.push('/specialities/orthopaedics')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
                            <circle cx="40" cy="40" r="39" fill="#F5F7FA" stroke="#DDE3EA" strokeWidth="1"></circle>
                            <path d="M34 13 Q28 15 28 21 Q28 25 32 26 L34 40 L46 40 L48 26 Q52 25 52 21 Q52 15 46 13 Q43 11 40 11 Q37 11 34 13Z" fill="#EFE0C8" stroke="#1C1C2E" strokeWidth="2"></path>
                            <rect x="32" y="40" width="16" height="7" rx="3.5" fill="#A8C8E8" stroke="#1C1C2E" strokeWidth="1.5"></rect>
                            <path d="M33 47 L46 47 L48 61 Q52 62 52 67 Q52 71 46 70 Q43 72 40 72 Q37 72 34 70 Q28 71 28 67 Q28 62 32 61Z" fill="#EFE0C8" stroke="#1C1C2E" strokeWidth="2"></path>
                            <line x1="38" y1="14" x2="36" y2="38" stroke="#C4A878" strokeWidth="1" strokeLinecap="round"></line>
                            <line x1="38" y1="49" x2="36" y2="68" stroke="#C4A878" strokeWidth="1" strokeLinecap="round"></line>
                            <circle cx="58" cy="20" r="10" fill="white" stroke="#DDE3EA" strokeWidth="1.5"></circle>
                            <path d="M54 16 C53 14 55 12 57 13 L58 14 L62 18 L61 19 L57 15 L56 16 L60 20 L59 21 L55 17 L54 18 C53 20 55 22 57 21" stroke="#4A90E2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
                        </svg>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Orthopedics</span>
                    </div>

                    {/* 3. Robotic Surgery */}
                    <div onClick={() => router.push('/specialities')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
                            <circle cx="40" cy="40" r="39" fill="#F5F7FA" stroke="#DDE3EA" strokeWidth="1"></circle>
                            <rect x="18" y="14" width="36" height="26" rx="4" fill="#C8D6E5" stroke="#1C1C2E" strokeWidth="2"></rect>
                            <rect x="22" y="18" width="28" height="18" rx="2" fill="#1A1A3E"></rect>
                            <line x1="26" y1="22" x2="46" y2="22" stroke="#4A90E2" strokeWidth="1.2" strokeLinecap="round"></line>
                            <line x1="26" y1="26" x2="40" y2="26" stroke="#4A90E2" strokeWidth="1.2" strokeLinecap="round"></line>
                            <line x1="26" y1="30" x2="44" y2="30" stroke="#4A90E2" strokeWidth="1.2" strokeLinecap="round"></line>
                            <rect x="34" y="40" width="4" height="8" fill="#B8C8D8" stroke="#1C1C2E" strokeWidth="1.5"></rect>
                            <rect x="26" y="48" width="20" height="4" rx="2" fill="#B8C8D8" stroke="#1C1C2E" strokeWidth="1.5"></rect>
                            <path d="M54 36 L62 30 L66 34 L62 44 L56 42" stroke="#1C1C2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#D8E4EE"></path>
                            <path d="M61 43 L68 50 L65 53 L58 46Z" fill="#B8C8D8" stroke="#1C1C2E" strokeWidth="1.5" strokeLinejoin="round"></path>
                            <path d="M65 53 L70 58" stroke="#1C1C2E" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Robotic Surgery</span>
                    </div>

                    {/* 4. General Medicine */}
                    <div onClick={() => router.push('/specialities/internal-medicine')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
                            <circle cx="40" cy="40" r="39" fill="#F5F7FA" stroke="#DDE3EA" strokeWidth="1"></circle>
                            <path d="M24 16 C24 16 20 16 20 22 L20 36 C20 46 30 54 38 54" stroke="#E04545" strokeWidth="3" strokeLinecap="round" fill="none"></path>
                            <path d="M56 16 C56 16 60 16 60 22 L60 36 C60 46 50 54 42 54" stroke="#E04545" strokeWidth="3" strokeLinecap="round" fill="none"></path>
                            <path d="M38 54 C39 56 41 56 42 54" stroke="#E04545" strokeWidth="2.5" strokeLinecap="round" fill="none"></path>
                            <circle cx="40" cy="58" r="9" fill="#E04545" stroke="#1C1C2E" strokeWidth="2"></circle>
                            <circle cx="40" cy="58" r="5" fill="white" stroke="#1C1C2E" strokeWidth="1.2"></circle>
                            <circle cx="40" cy="58" r="2" fill="#E04545"></circle>
                            <circle cx="24" cy="14" r="5" fill="#E04545" stroke="#1C1C2E" strokeWidth="1.8"></circle>
                            <circle cx="56" cy="14" r="5" fill="#E04545" stroke="#1C1C2E" strokeWidth="1.8"></circle>
                        </svg>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>General Medicine</span>
                    </div>

                    {/* 5. Gastroenterology */}
                    <div onClick={() => router.push('/specialities/gastro-sciences')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
                            <circle cx="40" cy="40" r="39" fill="#F5F7FA" stroke="#DDE3EA" strokeWidth="1"></circle>
                            <path d="M28 20 C20 20 17 28 19 36 C21 44 27 52 34 50 C38 49 40 43 38 37 C36 31 40 21 35 18 C32 16 30 19 28 20Z" fill="#C8855A" stroke="#1C1C2E" strokeWidth="2" strokeLinejoin="round"></path>
                            <path d="M32 26 C30 30 30 36 32 42" stroke="#8B5730" strokeWidth="1.5" strokeLinecap="round" fill="none"></path>
                            <path d="M36 28 C35 33 35 39 36 44" stroke="#8B5730" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"></path>
                            <path d="M34 50 C42 52 50 48 52 42 C54 36 50 30 54 26 C56 22 62 22 64 26" stroke="#C8855A" strokeWidth="3" strokeLinecap="round" fill="none"></path>
                            <path d="M64 26 C66 32 62 36 60 42 C58 48 60 52 58 54" stroke="#C8855A" strokeWidth="3" strokeLinecap="round" fill="none"></path>
                            <path d="M34 50 C42 52 50 48 52 42 C54 36 50 30 54 26 C56 22 62 22 64 26 C66 32 62 36 60 42 C58 48 60 52 58 54" stroke="#1C1C2E" strokeWidth="1.2" strokeLinecap="round" fill="none"></path>
                            <circle cx="60" cy="18" r="9" fill="white" stroke="#4A90E2" strokeWidth="1.6"></circle>
                            <line x1="60" y1="13.05" x2="60" y2="22.95" stroke="#4A90E2" strokeWidth="2.2" strokeLinecap="round"></line>
                            <line x1="55.05" y1="18" x2="64.95" y2="18" stroke="#4A90E2" strokeWidth="2.2" strokeLinecap="round"></line>
                        </svg>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Gastroenterology</span>
                    </div>

                    {/* 6. Nephrology */}
                    <div onClick={() => router.push('/specialities/nephrology')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                            <Droplets className="w-8 h-8 text-[#E04545]" />
                        </div>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Nephrology</span>
                    </div>

                    {/* 7. Urology */}
                    <div onClick={() => router.push('/specialities/urology')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                            <Activity className="w-8 h-8 text-[#4A90E2]" />
                        </div>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Urology</span>
                    </div>

                    {/* 8. Neurology */}
                    <div onClick={() => router.push('/specialities/neuro-sciences')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                        <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                            <Brain className="w-8 h-8 text-[#C8855A]" />
                        </div>
                        <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Neurology</span>
                    </div>

                    {/* The following items are toggled on "View More" */}
                    {showAll && (
                        <>
                            {/* 9. ENT */}
                            <div onClick={() => router.push('/specialities/ent')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <Sparkles className="w-8 h-8 text-[#8B5730]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>ENT</span>
                            </div>

                            {/* 10. Pulmonology */}
                            <div onClick={() => router.push('/specialities/pulmonology')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <svg viewBox="0 0 80 80" width="72" height="72" fill="none">
                                    <circle cx="40" cy="40" r="39" fill="#F5F7FA" stroke="#DDE3EA" strokeWidth="1"></circle>
                                    <rect x="37" y="11" width="6" height="18" rx="3" fill="#C8D6E5" stroke="#1C1C2E" strokeWidth="2"></rect>
                                    <line x1="37" y1="16" x2="43" y2="16" stroke="#1C1C2E" strokeWidth="1.2"></line>
                                    <line x1="37" y1="20" x2="43" y2="20" stroke="#1C1C2E" strokeWidth="1.2"></line>
                                    <line x1="37" y1="24" x2="43" y2="24" stroke="#1C1C2E" strokeWidth="1.2"></line>
                                    <path d="M37 28 C33 28 26 30 22 36" stroke="#1C1C2E" strokeWidth="2" strokeLinecap="round" fill="none"></path>
                                    <path d="M43 28 C47 28 54 30 58 36" stroke="#1C1C2E" strokeWidth="2" strokeLinecap="round" fill="none"></path>
                                    <path d="M22 36 C16 38 13 44 15 52 C17 60 23 66 30 64 C34 62 35 56 33 50 C31 44 25 40 22 36Z" fill="#4A90E2" stroke="#1C1C2E" strokeWidth="2" strokeLinejoin="round"></path>
                                    <path d="M20 44 C22 48 26 50 30 48" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"></path>
                                    <path d="M18 52 C20 56 26 60 30 58" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"></path>
                                    <path d="M58 36 C64 38 67 44 65 52 C63 60 57 66 50 64 C46 62 45 56 47 50 C49 44 55 40 58 36Z" fill="#4A90E2" stroke="#1C1C2E" strokeWidth="2" strokeLinejoin="round"></path>
                                    <path d="M60 44 C58 48 54 50 50 48" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"></path>
                                    <path d="M62 52 C60 56 54 60 50 58" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8"></path>
                                </svg>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Pulmonology</span>
                            </div>

                            {/* 11. Obstetrics & Gynaecology */}
                            <div onClick={() => router.push('/specialities/gynaecology-and-obstetrics')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <Baby className="w-8 h-8 text-[#E04545]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Obstetrics & Gynaecology</span>
                            </div>

                            {/* 12. Paediatrics */}
                            <div onClick={() => router.push('/specialities/paediatrics')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <Baby className="w-8 h-8 text-[#4A90E2]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Paediatrics</span>
                            </div>

                            {/* 13. Skin & Cosmetic Care */}
                            <div onClick={() => router.push('/specialities/dermatology')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <Sparkles className="w-8 h-8 text-[#E04545]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Skin & Cosmetic Care</span>
                            </div>

                            {/* 14. Dental Care */}
                            <div onClick={() => router.push('/specialities/dental-and-maxillofacial')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <Smile className="w-8 h-8 text-[#4A90E2]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Dental Care</span>
                            </div>

                            {/* 15. Oncology */}
                            <div onClick={() => router.push('/specialities/oncology')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <Activity className="w-8 h-8 text-[#E04545]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Oncology</span>
                            </div>

                            {/* 16. Pain Management */}
                            <div onClick={() => router.push('/specialities/pain-management')} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white cursor-pointer hover:shadow-md transition-shadow" style={{ border: '0.5px solid rgb(224, 208, 208)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 1px 3px' }}>
                                <div className="w-[72px] h-[72px] flex items-center justify-center bg-[#F5F7FA] rounded-full border border-[#DDE3EA]">
                                    <HeartPulse className="w-8 h-8 text-[#C8855A]" />
                                </div>
                                <span className="text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgb(3, 2, 19)', lineHeight: 1.4 }}>Pain Management</span>
                            </div>
                        </>
                    )}
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

export default MiyapurSpecialties;
