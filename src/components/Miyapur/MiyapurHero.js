import React, { useState } from 'react';
import Image from 'next/image';
import { User, Phone, Stethoscope, CalendarDays, Calendar, Clock, Star } from 'lucide-react';
import { useRouter } from 'next/router';
import axios from 'axios';
import CONFIG from '@/config';
import { toast } from 'react-toastify';

const MiyapurHero = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('appointment');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        speciality: '',
        date: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 10-digit mobile number validation
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                to: "crm.txhospitals@gmail.com, venudas@txhospitals.in",
                cc: "info.txhospitals@gmail.com",
                subject: "New Inquiry from Miyapur Branch",
                html: `
                    <h3>New Inquiry - Miyapur Landing Page</h3>
                    <p><strong>Type:</strong> ${activeTab}</p>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Mobile:</strong> ${formData.phone}</p>
                    <p><strong>Department/Speciality:</strong> ${formData.speciality || 'Not Specified'}</p>
                    <p><strong>Preferred Date:</strong> ${formData.date || 'Not Specified'}</p>
                    <p><strong>Location:</strong> TX Hospitals Miyapur</p>
                    <p><strong>Page:</strong> ${document.title || "Miyapur Landing Page"}</p>
                `,
                page: document.title || "Miyapur Landing Page",
                location: "TX Hospitals Miyapur",
                name: formData.name,
                mobile: formData.phone,
                concern: formData.speciality,
                time: formData.date
            };
            await axios.post(`${CONFIG.API_BASE_URL}/send-email/dynamic-form`, payload);
            toast.success("Appointment request submitted successfully!");
            router.push('/thank-you-miyapur');
        } catch (error) {
            console.error('Error submitting Miyapur inquiry:', error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="home" className="relative flex overflow-hidden w-full -mt-2 md:mt-0" style={{ minHeight: '560px' }}>
            <div className="relative flex-1 hidden lg:block">
                <div className="absolute inset-0 bg-cover bg-center">
                    <Image
                        src="/assets/Miyapur/Miyapur.png"
                        alt="TX Hospitals Miyapur"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>

            <div
                className="relative z-10 flex flex-col justify-between px-8 py-8 w-full lg:w-[45%] flex-shrink-0"
                style={{ background: 'linear-gradient(160deg, rgb(26, 5, 16) 0%, rgb(74, 18, 40) 100%)' }}
            >
                <div>
                    <h1 className="mb-0.5" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 600, color: 'rgb(255, 255, 255)', lineHeight: 1.25 }}>
                        TX Hospitals,
                    </h1>
                    <p className="mb-5" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700, color: 'rgb(242, 58, 107)', lineHeight: 1.2 }}>
                        Miyapur, Hyderabad
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        <button
                            onClick={() => setActiveTab('appointment')}
                            style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 500,
                                color: activeTab === 'appointment' ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)',
                                background: activeTab === 'appointment' ? 'rgb(189, 56, 92)' : 'rgba(255, 255, 255, 0.08)',
                                border: activeTab === 'appointment' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                                padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', transition: '0.2s', whiteSpace: 'nowrap'
                            }}
                        >
                            Book Appointment
                        </button>
                        <button
                            onClick={() => setActiveTab('second-opinion')}
                            style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 500,
                                color: activeTab === 'second-opinion' ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)',
                                background: activeTab === 'second-opinion' ? 'rgb(189, 56, 92)' : 'rgba(255, 255, 255, 0.08)',
                                border: activeTab === 'second-opinion' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                                padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', transition: '0.2s', whiteSpace: 'nowrap'
                            }}
                        >
                            Second Opinion
                        </button>
                        <button
                            onClick={() => setActiveTab('health-checkup')}
                            style={{
                                fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 500,
                                color: activeTab === 'health-checkup' ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.7)',
                                background: activeTab === 'health-checkup' ? 'rgb(189, 56, 92)' : 'rgba(255, 255, 255, 0.08)',
                                border: activeTab === 'health-checkup' ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                                padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', transition: '0.2s', whiteSpace: 'nowrap'
                            }}
                        >
                            Book Health Checkup
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-[14px] h-[14px]" />
                            <input
                                type="text" name="name" required placeholder="Full Name"
                                value={formData.name} onChange={handleChange}
                                className="w-full pl-9 pr-3 py-2.5 rounded-lg outline-none"
                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(255, 255, 255)', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)' }}
                            />
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-[14px] h-[14px]" />
                            <input
                                type="tel" name="phone" required placeholder="Phone Number"
                                value={formData.phone} onChange={handleChange}
                                className="w-full pl-9 pr-3 py-2.5 rounded-lg outline-none"
                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgb(255, 255, 255)', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)' }}
                            />
                        </div>

                        <div className="relative">
                            <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-[14px] h-[14px]" />
                            <select
                                name="speciality"
                                required
                                value={formData.speciality} onChange={handleChange}
                                className="w-full pl-9 pr-3 py-2.5 rounded-lg outline-none appearance-none"
                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)' }}
                            >
                                <option value="" disabled style={{ color: 'rgb(30, 30, 30)' }}>Select Doctor / Specialty</option>
                                <option value="Dr. Akhila Sunder – Orthopaedics" style={{ color: 'rgb(30, 30, 30)' }}>Dr. Akhila Sunder – Orthopaedics</option>
                                <option value="Dr. K Arun Kumar – Cardiology" style={{ color: 'rgb(30, 30, 30)' }}>Dr. K Arun Kumar – Cardiology</option>
                                <option value="Dr. Prasad Neelam – Surgical Gastroenterology" style={{ color: 'rgb(30, 30, 30)' }}>Dr. Prasad Neelam – Surgical Gastroenterology</option>
                                <option value="General Medicine" style={{ color: 'rgb(30, 30, 30)' }}>General Medicine</option>
                                <option value="Neurology" style={{ color: 'rgb(30, 30, 30)' }}>Neurology</option>
                                <option value="Gastroenterology" style={{ color: 'rgb(30, 30, 30)' }}>Gastroenterology</option>
                                <option value="Pulmonology" style={{ color: 'rgb(30, 30, 30)' }}>Pulmonology</option>
                                <option value="ENT" style={{ color: 'rgb(30, 30, 30)' }}>ENT</option>
                            </select>
                        </div>

                        <div className="relative">
                            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-[14px] h-[14px]" />
                            <input
                                type="date" name="date" required
                                value={formData.date} onChange={handleChange}
                                className="w-full pl-9 pr-3 py-2.5 rounded-lg outline-none"
                                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid rgba(255, 255, 255, 0.25)' }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg transition-opacity hover:opacity-90 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            style={{ background: 'rgb(189, 56, 92)', fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: 600, color: 'rgb(255, 255, 255)', border: 'none' }}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Calendar className="w-[15px] h-[15px]" />
                                    Book Appointment
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="flex items-center gap-4 mt-6 pt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
                    <div className="flex flex-col items-center">
                        <div className="flex gap-0.5 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-3 h-3 fill-[#BD385C] text-[#BD385C]" />
                            ))}
                        </div>
                        <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>
                            4.8 Google Ratings
                        </span>
                    </div>

                    <div style={{ width: '1px', height: '32px', background: 'rgba(255, 255, 255, 0.18)' }}></div>

                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#BD385C]" />
                        <div>
                            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 600, color: 'rgb(255, 255, 255)' }}>
                                Available 24/7
                            </div>
                            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>
                                Emergency Care
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '1px', height: '32px', background: 'rgba(255, 255, 255, 0.18)' }}></div>

                    <div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 600, color: 'rgb(255, 255, 255)' }}>
                            15+
                        </div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgba(255, 255, 255, 0.65)' }}>
                            Specialities
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiyapurHero;
