"use client";
import { useState, useEffect, useRef } from "react";
import { submitMyKareLead } from '@/utils/leadService';

import { IoClose } from "react-icons/io5";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { format, addMinutes, parse, addDays } from "date-fns";
import CONFIG from "@/config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle, MapPin, Star, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AppointmentModal({ closeModal, doctorData }) {
    const router = useRouter();
    const nextButtonRef = useRef(null);
    const [step, setStep] = useState(1);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");
    const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
    const [isChecked, setIsChecked] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "",
    });
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const [currentDate, setCurrentDate] = useState(tomorrow);
    const [selectedDate, setSelectedDate] = useState(tomorrow.getDate());
    const [doctorAvailability, setDoctorAvailability] = useState(null);
    const [bookedSlots, setBookedSlots] = useState([]);

    useEffect(() => {
        if (selectedSlot && nextButtonRef.current) {
            nextButtonRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [selectedSlot]);

    const defaultSlots = [
        "08:00 AM", "09:00 AM",
        "10:00 AM", "11:00 AM",
        "12:30 PM", "01:30 PM",
        "02:30 PM", "03:30 PM",
        "04:30 PM", "05:30 PM",
    ];

    useEffect(() => {
        if (!selectedDate) return;
        const selectedFullDate = new Date(year, month, selectedDate);
        const fetchAvailability = async () => {
            try {
                const apiDate = format(selectedFullDate, "yyyy-MM-dd");
                const labelDate = format(selectedFullDate, "EEE dd MMM");
                const [availabilityRes, bookingsRes] = await Promise.all([
                    fetch(`${CONFIG.API_BASE_URL}/getDoctorAvailabilityByDate/${doctorData?.id}/${apiDate}`),
                    fetch(`${CONFIG.API_BASE_URL}/getAppointmentDetails/${encodeURIComponent(doctorData?.name)}/${labelDate}`)
                ]);
                const availabilityData = await availabilityRes.json();
                const bookingsData = await bookingsRes.json();
                setDoctorAvailability(availabilityData[0] || null);
                setBookedSlots(bookingsData.map(b => b.time));
            } catch (err) {
                console.error("Failed to fetch doctor availability", err);
            }
        };
        fetchAvailability();
    }, [selectedDate, doctorData]);

    const generateDynamicSlots = (start, end, interval) => {
        const slots = [];
        let current = parse(start, "HH:mm", new Date());
        const endTime = parse(end, "HH:mm", new Date());

        while (current < endTime) {
            slots.push(format(current, "hh:mm a"));
            current = addMinutes(current, Number(interval));
        }
        return slots;
    };

    const getSlots = () => {
        if (doctorAvailability) {
            return generateDynamicSlots(
                doctorAvailability.startTime,
                doctorAvailability.endTime,
                doctorAvailability.interval
            );
        }
        return defaultSlots;
    };

    const slots = getSlots();

    const isSlotAvailable = (slotTime) => {
        if (bookedSlots.includes(slotTime)) return false;

        const selected = format(new Date(year, month, selectedDate), "yyyy-MM-dd");
        const today = format(new Date(), "yyyy-MM-dd");

        if (selected === today) {
            const currentTime = format(new Date(), "HH:mm");
            const slot24 = format(parse(slotTime, "hh:mm a", new Date()), "HH:mm");
            return slot24 > currentTime;
        }
        return true;
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) calendarDays.push(null);
    for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

    const goToPrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
        setSelectedDate(null);
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDate(null);
    };

    const isSundayDate = (year, month, day) => {
        const date = new Date(year, month, day);
        return date.getDay() === 0;
    };

    const todayDate = new Date();
    const isDateToday = (day) =>
        day === todayDate.getDate() &&
        month === todayDate.getMonth() &&
        year === todayDate.getFullYear();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSendOtp = async () => {
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(mobileNumber)) {
            toast.error("Please enter a valid 10-digit mobile number");
            return;
        }
        const otpCode = generateOtp();
        setGeneratedOtp(otpCode);
        const message = `Your verification code is ${otpCode} ,code is valid for 5 Mins. Team TX Hospitals`;
        const url = `https://smslogin.co/v3/api.php?username=txhospitalsb&apikey=99144762b4fba93f4621&mobile=91${mobileNumber}&senderid=TXHOTP&message=${encodeURIComponent(message)}&templateid=1707169485003007437`;

        try {
            await fetch(url);
            toast.success("OTP sent successfully!");
            setStep(3);
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error("Failed to send OTP. Please try again.");
        }
    };

    const handleVerifyOtp = () => {
        if (otp === String(generatedOtp)) {
            toast.success("OTP Verified Successfully!");
            setStep(4);
        } else {
            toast.error("Invalid OTP. Please try again.");
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const leadPayload = {
                    ...formData,
                    mobile: mobileNumber,
                    date: format(new Date(year, month, selectedDate), "EEE dd MMM"),
                    time: selectedSlot,
                    doctorName: doctorData?.name || "MD Specialist",
                };
            const response = await fetch(`${CONFIG.API_BASE_URL}/send-email/appointment-booking`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(leadPayload)
            });
            submitMyKareLead(leadPayload);

            if (response.ok) {
                router.push({
                    pathname: "/thank-you",
                    query: { name: formData.name, mobile: mobileNumber, email: formData.email, type: "appointment" },
                });
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const steps = [
        { id: 1, name: "Consult", icon: Calendar },
        { id: 2, name: "Login", icon: ShieldCheck },
        { id: 3, name: "Verify", icon: CheckCircle },
        { id: 4, name: "Confirm", icon: Star }
    ];

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999999] px-4 py-4 overflow-hidden font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[85vh] border border-gray-100"
            >
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-5 right-5 z-30 p-2 bg-gray-50 hover:bg-pink-100 hover:text-pink-600 rounded-full transition-all text-gray-400"
                >
                    <IoClose size={18} />
                </button>

                {/* Left Sidebar - Branded Medium Theme */}
                <div className="md:w-64 bg-pink-700 p-8 text-white shrink-0 flex flex-col">
                    <div className="flex flex-col h-full">
                        {/* Doctor Card */}
                        <div className="mb-8">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl p-1 shadow-inner border border-white/30 mb-4 overflow-hidden">
                                {doctorData?.doctorImage ? (
                                    <Image
                                        src={doctorData.doctorImage}
                                        alt={doctorData.name}
                                        width={64}
                                        height={64}
                                        className="object-cover rounded-xl"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-white/10">
                                        <User size={24} className="text-white/50" />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-lg font-bold leading-tight text-white">{doctorData?.name || "MD Specialist"}</h3>
                            <p className="text-pink-100/80 text-xs font-bold uppercase tracking-wider mt-1.5">{doctorData?.department || doctorData?.speciality || "Specialist Department"}</p>
                        </div>

                        {/* Steps - Clean Branded List */}
                        <div className="space-y-5">
                            {steps.map((s) => (
                                <div key={s.id} className="flex items-center gap-4 group">
                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all border-2 ${step === s.id ? 'bg-white text-pink-700 border-white shadow-lg scale-105' : step > s.id ? 'bg-pink-400 border-pink-400 text-white' : 'bg-pink-800/40 text-pink-200 border-white/10'}`}>
                                        <s.icon size={14} />
                                    </div>
                                    <span className={`text-xs font-black uppercase tracking-widest transition-all ${step === s.id ? 'text-white' : 'text-gray-300 opacity-60'}`}>
                                        {s.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Content - Compact & High Legibility */}
                <div className="flex-1 overflow-y-auto hide-scrollbar bg-white p-8 md:p-10">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -5 }}
                                className="h-full"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 ">Book <span className="text-pink-700">Appointment</span></h2>
                                    <p className="text-gray-400 text-xs mt-1">Select your preferred date and available time slot.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Compact Calendar */}
                                    <div>
                                        <div className="flex items-center justify-between mb-4 px-1">
                                            <h4 className="text-sm font-bold text-gray-800">{monthName} {year}</h4>
                                            <div className="flex gap-1">
                                                <button onClick={goToPrevMonth} className="p-1.5 hover:bg-pink-50 rounded-lg text-gray-400"><GoChevronLeft size={16} /></button>
                                                <button onClick={goToNextMonth} className="p-1.5 hover:bg-pink-50 rounded-lg text-gray-400"><GoChevronRight size={16} /></button>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-7 text-center mb-2 px-1">
                                            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                                                <span key={d} className="text-[9px] font-bold text-gray-300">{d}</span>
                                            ))}
                                        </div>
                                        <div className="grid grid-cols-7 gap-1">
                                            {calendarDays.map((day, index) => {
                                                if (day === null) return <div key={index} />;
                                                const dateObj = new Date(year, month, day);
                                                const todayMidnight = new Date();
                                                todayMidnight.setHours(0, 0, 0, 0);
                                                const isPast = dateObj <= todayMidnight;
                                                const isSelected = selectedDate === day;
                                                const isSun = isSundayDate(year, month, day);

                                                return (
                                                    <button
                                                        key={index}
                                                        disabled={isPast || isSun}
                                                        onClick={() => !isPast && !isSun && setSelectedDate(day)}
                                                        className={`h-8 rounded-lg flex items-center justify-center font-bold text-xs transition-all
                                                            ${isSelected ? 'bg-pink-700 text-white shadow-md' : (isPast || isSun) ? 'text-gray-200 cursor-not-allowed' : 'bg-gray-50 hover:bg-pink-50 text-gray-700 border border-transparent'}
                                                        `}
                                                    >
                                                        {day}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Time Slots Area */}
                                    <div>
                                        <h5 className="flex items-center gap-2 text-xs font-bold text-gray-800 mb-4">
                                            <Clock size={14} className="text-pink-600" />
                                            Available Slots
                                        </h5>
                                        <div className="grid grid-cols-2 gap-2">
                                            {slots.map((slot) => {
                                                const available = isSlotAvailable(slot);
                                                return (
                                                    <button
                                                        key={slot}
                                                        disabled={!available}
                                                        onClick={() => available && setSelectedSlot(slot)}
                                                        className={`py-2 rounded-lg text-[10px] font-bold transition-all border
                                                            ${selectedSlot === slot ? 'bg-pink-700 border-pink-700 text-white shadow-sm' : available ? 'bg-white border-gray-100 text-gray-600 hover:border-pink-200' : 'bg-gray-50 border-transparent text-gray-200 cursor-not-allowed opacity-40'}
                                                        `}
                                                    >
                                                        {slot}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {selectedSlot && (
                                    <button
                                        ref={nextButtonRef}
                                        onClick={() => setStep(2)}
                                        className="w-full mt-8 bg-pink-700 hover:bg-pink-800 text-white py-3 rounded-xl font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                                    >
                                        Proceed to Login <ArrowRight size={16} />
                                    </button>
                                )}
                            </motion.div>
                        )}

                        {(step === 2 || step === 3) && (
                            <motion.div
                                key="auth"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="h-full flex flex-col justify-center items-center"
                            >
                                <div className="w-full max-w-xs">
                                    <div className="text-center mb-6">
                                        <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-700 mb-3 mx-auto border border-pink-100">
                                            {step === 2 ? <Phone size={20} /> : <ShieldCheck size={20} />}
                                        </div>
                                        <h2 className="text-xl font-bold text-gray-900">{step === 2 ? 'Mobile Auth' : 'OTP Verification'}</h2>
                                        <p className="text-gray-400 text-[11px] mt-1">{step === 2 ? 'Enter your 10-digit mobile number' : `Validation code sent to +91 ${mobileNumber}`}</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative">
                                            {step === 2 ? (
                                                <>
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs border-r pr-3">+91</span>
                                                    <input
                                                        type="tel"
                                                        maxLength={10}
                                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-14 pr-4 focus:ring-4 focus:ring-pink-500/10 outline-none text-sm font-bold text-gray-900 transition-all"
                                                        placeholder="Number"
                                                        value={mobileNumber}
                                                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                                                    />
                                                </>
                                            ) : (
                                                <input
                                                    type="text"
                                                    maxLength={6}
                                                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 text-center text-xl font-bold tracking-[0.4em] focus:ring-4 focus:ring-pink-500/10 outline-none transition-all"
                                                    placeholder="------"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                                                />
                                            )}
                                        </div>

                                        <button
                                            disabled={step === 2 ? mobileNumber.length !== 10 : otp.length !== 6}
                                            onClick={step === 2 ? handleSendOtp : handleVerifyOtp}
                                            className={`w-full py-3 rounded-xl font-bold text-xs transition-all shadow-md
                                                ${(step === 2 ? mobileNumber.length === 10 : otp.length === 6) ? 'bg-pink-700 text-white' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}
                                            `}
                                        >
                                            {step === 2 ? 'Send Code' : 'Verify & Proceed'}
                                        </button>

                                        <button onClick={() => setStep(step - 1)} className="w-full text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-pink-700 transition-colors py-4">Return to Previous</button>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="h-full"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 ">Patient <span className="text-pink-700">Details</span></h2>
                                    <p className="text-gray-400 text-xs mt-1">Complete your profile for the medical records.</p>
                                </div>

                                <form className="space-y-4" onSubmit={handleFormSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/10 outline-none transition-all text-xs" value={formData.name} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Gender</label>
                                            <div className="flex gap-2">
                                                {["Male", "Female"].map(g => (
                                                    <label key={g} className="flex-1 cursor-pointer">
                                                        <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} className="hidden" />
                                                        <div className={`py-2.5 rounded-xl text-center text-[10px] font-bold transition-all border ${formData.gender === g ? 'bg-pink-700 border-pink-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-pink-200'}`}>{g}</div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                                            <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/10 outline-none transition-all text-xs" value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">DOB</label>
                                            <input type="date" name="dob" required className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 px-4 text-gray-900 font-bold focus:ring-4 focus:ring-pink-500/10 outline-none transition-all text-xs" value={formData.dob} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="bg-pink-700/5 p-4 rounded-xl border border-pink-700/10 flex items-center justify-between mt-6">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold text-pink-700 uppercase tracking-widest mb-1">Appointment Sync</span>
                                            <div className="flex items-center gap-3 text-gray-900 font-bold text-xs">
                                                <span>{selectedDate ? format(new Date(year, month, selectedDate), "EEE, dd MMM") : "-"}</span>
                                                <span className="text-pink-200">|</span>
                                                <span>{selectedSlot || "-"}</span>
                                            </div>
                                        </div>
                                        <CheckCircle className="text-pink-600" size={20} />
                                    </div>

                                    <label className="flex items-center gap-3 cursor-pointer group mt-4">
                                        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className="w-4 h-4 rounded border-gray-200 text-pink-700 focus:ring-pink-500" required />
                                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider group-hover:text-pink-700 transition-colors">I agree to medical notifications & T&C</span>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={!isChecked}
                                        className={`w-full py-4 mt-4 rounded-xl text-white text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl
                                            ${isChecked ? 'bg-pink-700 hover:bg-pink-800' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}
                                        `}
                                    >
                                        Finalize Appointment
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
