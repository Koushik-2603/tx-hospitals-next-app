import React, { useState } from 'react';
import { Scan, Activity, Crosshair, ArrowLeftRight, AlignJustify, Droplet, Calendar } from 'lucide-react';
import BookAppointmentForm from '@/components/Blogs/BookAppointemntForm';

const DiagnosticsAndWhenToSeeSection = ({ diagnostics, whenToSee, speciality }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dynamic Icon matcher
    const getIcon = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes('x-ray') || lower.includes('imaging') || lower.includes('scan')) return <Scan className="w-[18px] h-[18px] text-[#bd385c]" />;
        if (lower.includes('density') || lower.includes('bone')) return <Activity className="w-[18px] h-[18px] text-[#bd385c]" />;
        if (lower.includes('mri') || lower.includes('ct')) return <Crosshair className="w-[18px] h-[18px] text-[#bd385c]" />;
        if (lower.includes('joint')) return <ArrowLeftRight className="w-[18px] h-[18px] text-[#bd385c]" />;
        if (lower.includes('spine')) return <AlignJustify className="w-[18px] h-[18px] text-[#bd385c]" />;
        if (lower.includes('blood') || lower.includes('test')) return <Droplet className="w-[18px] h-[18px] text-[#bd385c]" />;
        return <Activity className="w-[18px] h-[18px] text-[#bd385c]" />;
    };

    const renderTitle = (title) => {
        if (!title) return null;
        const words = title.split(' ');
        if (words.length > 1) {
            const first = words[0];
            const rest = words.slice(1).join(' ');
            return (
                <>
                    {first} <span className="text-[#bd385c]">{rest}</span>
                </>
            );
        }
        return title;
    };

    const formatSpecialityName = (str) => {
        if (!str) return 'Specialist';
        const formatted = str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        // If the string contains "paedics", trim the "s" for grammatical correctness when preceding "Doctor" (Orthopaedics Doctor -> Orthopaedic Doctor)
        return formatted.replace(/cs$/i, 'c');
    };

    const formattedSpeciality = formatSpecialityName(speciality);
    const startsWithVowel = /^[aeiou]/i.test(formattedSpeciality);

    return (
        <section className="py-8 md:py-10 bg-white" >
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-14">

                    {/* Left: Diagnostics */}
                    {diagnostics && (
                        <div className={`w-full ${whenToSee ? 'lg:w-[55%] xl:w-[60%]' : 'w-full'}`}>
                            {diagnostics.title && (
                                <h2 className="text-2xl md:text-[32px] font-bold text-[#1e1e1e] leading-snug mb-5">
                                    {renderTitle(diagnostics.title)}
                                </h2>
                            )}

                            {diagnostics.description && (
                                <div
                                    className="text-[#3c3c3c] text-[15px] leading-relaxed flex flex-col gap-4 font-normal mb-8"
                                    dangerouslySetInnerHTML={{ __html: diagnostics.description }}
                                />
                            )}

                            {diagnostics.list && diagnostics.list.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {diagnostics.list.map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-[#fff1f3] rounded-lg px-5 py-3.5 border border-[#fae3e8]">
                                            {getIcon(item.text)}
                                            <span className="text-[14px] md:text-[15px] font-medium text-[#1e1e1e]">
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Right: When to See */}
                    {whenToSee && (
                        <div className={`w-full ${diagnostics ? 'lg:w-[45%] xl:w-[40%]' : 'w-full'} flex-shrink-0`}>
                            <div className="bg-[#fff1f3] rounded-[20px] p-8 h-full border border-[#f5dfe5]" style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 4px 20px' }}>
                                <h3 className="text-xl md:text-[24px] font-bold text-[#1e1e1e] mb-4 leading-snug">
                                    When Should You See {startsWithVowel ? 'an' : 'a'} <span className="text-[#bd385c]">{formattedSpeciality} Doctor?</span>
                                </h3>

                                {whenToSee.title && (
                                    <p className="text-[15px] text-[#3c3c3c] font-medium mb-6">
                                        {whenToSee.title}
                                    </p>
                                )}

                                <ul className="flex flex-col gap-3.5 mb-8">
                                    {whenToSee.list && whenToSee.list.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#bd385c] mt-2.5 flex-shrink-0"></div>
                                            <span className="text-[14px] md:text-[15px] text-[#3c3c3c] leading-relaxed font-normal">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-[#bd385c] hover:bg-[#a62a4b] text-white flex justify-center items-center gap-2.5 py-3.5 rounded-lg transition-colors font-medium text-[15px] shadow-sm mt-auto"
                                >
                                    <Calendar className="w-[18px] h-[18px]" />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <BookAppointmentForm
                    showModal={isModalOpen}
                    setShowModal={setIsModalOpen}
                />
            )}
        </section>
    );
};

export default DiagnosticsAndWhenToSeeSection;
