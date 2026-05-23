import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AppointmentModal from '@/components/Doctors/AppointmentModal';

const kachigudaDoctors = [
    {
        id: "drkotaraghavendar@txhospitals.in",
        name: "Dr. Kota Raghavendar",
        designation: "Consultant - Interventional Cardiologist",
        specialty: "Interventional Cardiologist",
        experience: "7+ Years",
        qualification: "MBBS, DNB (General Medicine), DrNB (Cardiology)",
        image: "https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1757065337849-Dr%20Kota%20Ragavendra.webp",
        department: "CARDIAC SCIENCES"
    },
    {
        id: "draashikabhashyakarla@txhospitals.in",
        name: "Dr. Aashika Bhashyakarla",
        designation: "Consultant – Interventional Gastroenterologist & Hepatologist",
        specialty: "Interventional Gastroenterologist",
        experience: "10+ Years",
        qualification: "MBBS, MD, DrNB",
        image: "https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1757067153815-Dr.%20Asshika%20Bhashyakarla.webp",
        department: "MEDICAL GASTROENTEROLOGY"
    },
    {
        id: "drsuryakeerthana@txhospitals.in",
        name: "Dr. Surya Keerthana",
        designation: "Consultant - Plastic, Cosmetic & Reconstructive Surgeon",
        specialty: "Plastic & Cosmetic Surgeon",
        experience: "15+ Years",
        qualification: "MBBS, MS - General Surgery, MCh - Plastic Surgery",
        image: "https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1757070813957-Dr%20Surya%20Keerthana.webp",
        department: "DERMATOLOGY & PLASTIC SURGERY"
    },
    {
        id: "drchandrasekhartavisetty@txhospitals.in",
        name: "Dr. Chandra Sekhar Tavisetty",
        designation: "Sr Consultant – Brain & Spine Surgeon & Stroke Interventionist",
        specialty: "Sr Consultant Neurosurgeon",
        experience: "11+ Years",
        qualification: "M.S Gen. Sur (OSM, HYD), Mch Neurosurgery - SCTIMST, DNB (Neurosurgery), FRCS (Neuro surgery), FNB (Neurointervention)",
        image: "https://tx-hospital-doctor-images.s3.ap-south-2.amazonaws.com/doctors/1757065552829-Dr%20Chandra%20Sekhar%20Tavisetty.webp",
        department: "NEURO SCIENCES"
    }
];

export default function KachigudaSpecialists() {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [availabilities, setAvailabilities] = useState({});
    const [loadingAvail, setLoadingAvail] = useState(true);

    useEffect(() => {
        const checkAllAvailabilities = async () => {
            const today = new Date();
            // If today is Sunday (0), doctors are not available
            if (today.getDay() === 0) {
                const initialStatus = {};
                kachigudaDoctors.forEach(doc => {
                    initialStatus[doc.id] = false;
                });
                setAvailabilities(initialStatus);
                setLoadingAvail(false);
                return;
            }

            const year = today.getFullYear();
            const month = today.getMonth();
            const dateNum = today.getDate();

            const pad = (n) => String(n).padStart(2, '0');
            const apiDate = `${year}-${pad(month + 1)}-${pad(dateNum)}`;

            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const labelDate = `${days[today.getDay()]} ${pad(dateNum)} ${months[month]}`;

            const checkDoctorAvail = async (doc) => {
                try {
                    const [availRes, bookingsRes] = await Promise.all([
                        fetch(`https://api.txhospitals.vgworld.in/getDoctorAvailabilityByDate/${doc.id}/${apiDate}`),
                        fetch(`https://api.txhospitals.vgworld.in/getAppointmentDetails/${encodeURIComponent(doc.name)}/${labelDate}`)
                    ]);
                    const availData = await availRes.json();
                    const bookingsData = await bookingsRes.json();

                    const doctorAvailability = availData[0] || null;
                    const bookedSlots = bookingsData.map(b => b.time);

                    let slots = [];
                    if (doctorAvailability) {
                        const { startTime, endTime, interval } = doctorAvailability;
                        const parseTime = (tStr) => {
                            const [h, m] = tStr.split(':').map(Number);
                            const d = new Date();
                            d.setHours(h, m, 0, 0);
                            return d;
                        };
                        let current = parseTime(startTime);
                        const end = parseTime(endTime);
                        const intVal = Number(interval) || 15;

                        const formatTime = (date) => {
                            let hrs = date.getHours();
                            const mins = date.getMinutes();
                            const ampm = hrs >= 12 ? 'PM' : 'AM';
                            hrs = hrs % 12;
                            hrs = hrs ? hrs : 12;
                            return `${pad(hrs)}:${pad(mins)} ${ampm}`;
                        };

                        while (current < end) {
                            slots.push(formatTime(current));
                            current = new Date(current.getTime() + intVal * 60000);
                        }
                    } else {
                        slots = [
                            "08:00 AM", "09:00 AM",
                            "10:00 AM", "11:00 AM",
                            "12:30 PM", "01:30 PM",
                            "02:30 PM", "03:30 PM",
                            "04:30 PM", "05:30 PM",
                        ];
                    }

                    const currentTimeStr = `${pad(today.getHours())}:${pad(today.getMinutes())}`;

                    const isAvailable = slots.some(slot => {
                        if (bookedSlots.includes(slot)) return false;

                        const [timePart, ampm] = slot.split(' ');
                        let [h, m] = timePart.split(':').map(Number);
                        if (ampm === 'PM' && h !== 12) h += 12;
                        if (ampm === 'AM' && h === 12) h = 0;
                        const slotTimeStr = `${pad(h)}:${pad(m)}`;

                        return slotTimeStr > currentTimeStr;
                    });

                    return { id: doc.id, available: isAvailable };
                } catch (e) {
                    console.error("Failed checking doctor status", doc.name, e);
                    return { id: doc.id, available: true };
                }
            };

            const results = await Promise.all(kachigudaDoctors.map(checkDoctorAvail));
            const statuses = {};
            results.forEach(res => {
                statuses[res.id] = res.available;
            });
            setAvailabilities(statuses);
            setLoadingAvail(false);
        };

        checkAllAvailabilities();
    }, []);

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setIsModalOpen(true);
    };

    return (
        <section className="bg-slate-50/60 py-10 md:py-14 px-6 md:px-10 lg:px-12 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header Block */}
                <div className="text-center mb-8 md:mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest border border-orange-100"
                    >
                        Meet Our Experts
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight"
                    >
                        Senior Specialists at Kachiguda
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-1 w-20 bg-gradient-to-r from-pink-600 to-[#8b006a] mx-auto mt-6 rounded-full origin-center"
                    />
                </div>

                {/* Doctor Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
                    {kachigudaDoctors.map((doc, idx) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100/80 flex flex-col justify-between items-center text-center relative group"
                        >
                            <div className="w-full flex flex-col items-center">
                                {/* Doctor Circular Avatar Container */}
                                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-inner bg-gradient-to-br from-[#0c2a75] to-[#1e40af] flex items-center justify-center group-hover:border-pink-100 transition-colors duration-300">
                                    <Image
                                        src={doc.image}
                                        alt={doc.name}
                                        fill
                                        sizes="128px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority={idx < 2}
                                    />
                                </div>

                                {/* Doctor Info */}
                                <h3 className="text-lg md:text-xl font-bold text-pink-700 mt-6 leading-snug hover:text-pink-800 transition-colors duration-300">
                                    {doc.name}
                                </h3>

                                <p className="text-gray-600 text-xs md:text-sm font-semibold uppercase tracking-wider mt-1 px-2 line-clamp-1">
                                    {doc.specialty}
                                </p>

                                <span className="text-xs md:text-sm font-bold text-[#8b006a] bg-purple-50/50 px-4 py-1.5 rounded-full border border-purple-100/50 shadow-sm mt-3 tracking-wide uppercase inline-block">
                                    {doc.experience} Experience
                                </span>

                                {/* Divider */}
                                <div className="w-full h-[1px] bg-slate-100 my-5" />
                            </div>

                            <div className="w-full">
                                {/* Book Appointment Button */}
                                <button
                                    onClick={() => handleBookAppointment(doc)}
                                    className="w-full py-3 px-6 bg-[#8b006a] hover:bg-[#750059] text-white font-extrabold rounded-full text-xs shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-95 leading-none"
                                >
                                    Book Appointment
                                </button>

                                {/* Available Status */}
                                {loadingAvail ? (
                                    <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-3">
                                        <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse inline-block" />
                                        Checking Slots...
                                    </div>
                                ) : availabilities[doc.id] ? (
                                    <div className="flex items-center justify-center gap-1.5 text-emerald-600 text-[10px] font-bold uppercase tracking-wider mt-3">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                                        Available Today
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-1.5 text-rose-500 text-[10px] font-bold uppercase tracking-wider mt-3">
                                        <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" />
                                        Not Available Today
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Appointment Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && selectedDoctor && (
                    <AppointmentModal
                        doctorData={{
                            id: selectedDoctor.id,
                            name: selectedDoctor.name,
                            department: selectedDoctor.department,
                            doctorImage: selectedDoctor.image
                        }}
                        closeModal={() => setIsModalOpen(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
