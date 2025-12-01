"use client";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { format, addMinutes, parse, addDays } from "date-fns";
import CONFIG from "@/config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";

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
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());
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
        "12:30 AM", "01:30 PM",
        "02:30 AM", "03:30 PM",
        "04:30 AM", "05:30 PM",
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
    }, [selectedDate]);

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

        const selected = format(selectedDate, "yyyy-MM-dd");
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

    for (let i = 0; i < firstDay; i++) {
        calendarDays.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
        calendarDays.push(d);
    }

    const goToPrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
        setSelectedDate(null);
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
        setSelectedDate(null);
    };

    const isSunday = (index) => index % 7 === 0;

    const today = new Date();
    const isToday = (day) =>
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSendOtp = async () => {
        const otpCode = generateOtp();
        setGeneratedOtp(otpCode); // Save for verification

        const message = `Your verification code is ${otpCode} ,code is valid for 5 Mins. Team TX Hospitals`;

        const url = `https://smslogin.co/v3/api.php?username=txhospitalsb&apikey=99144762b4fba93f4621&mobile=91${mobileNumber}&senderid=TXHOTP&message=${encodeURIComponent(message)}&templateid=1707169485003007437`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            toast.success("OTP sent successfully!");
            setStep(3);
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Something went wrong while sending OTP.");
        }
    };

    const handleVerifyOtp = () => {
        if (otp === String(generatedOtp)) {
            toast.success("OTP Verified Successfully!");
            setStep(4);
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/send-email/appointment-booking`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    mobile: mobileNumber,
                    date: format(selectedDate, "EEE dd MMM"),
                    time: selectedSlot,
                    doctorName: doctorData.name,
                })
            });

            if (response.ok) {
                router.push({
                    pathname: "/thank-you",
                    query: {
                        name: formData.name,
                        mobile: mobileNumber,
                        email: formData.email,
                        type: "appointment"
                    },
                });
            } else {
                console.error("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999] px-2">
            <div className="bg-white rounded-3xl w-full max-w-md p-6 relative shadow-xl max-h-[90vh] overflow-y-auto hide-scrollbar">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-pink-700">
                        Book Appointment
                    </h2>

                    <button onClick={closeModal}>
                        <IoClose className="text-3xl text-gray-500" />
                    </button>
                </div>

                {step === 1 && (
                    <>
                        <p className="text-xl font-semibold mb-2">Select Date</p>
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-lg font-semibold">
                                {monthName} {year}
                            </p>

                            <div className="flex gap-2">
                                <button
                                    className="border px-3 py-1 rounded-md"
                                    onClick={goToPrevMonth}
                                >
                                    <GoChevronLeft />
                                </button>
                                <button
                                    className="border px-3 py-1 rounded-md"
                                    onClick={goToNextMonth}
                                >
                                    <GoChevronRight />
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 text-center mb-2">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                                <p
                                    key={d}
                                    className={`font-semibold ${d === "Sun" ? "text-pink-600" : "text-gray-600"
                                        }`}
                                >
                                    {d}
                                </p>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {calendarDays.map((day, index) => {
                                if (day === null) return <div key={index}></div>;

                                const dateObj = new Date(year, month, day);
                                const isPastDate = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                                const isSelected = selectedDate === day;
                                const todayCheck = isToday(day);

                                return (
                                    <button
                                        key={index}
                                        disabled={isPastDate}
                                        onClick={() => !isPastDate && setSelectedDate(day)}
                                        className={`py-2 rounded-md border text-center font-semibold
                                    ${isPastDate
                                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                                : isSelected
                                                    ? "bg-pink-500 text-white"
                                                    : todayCheck
                                                        ? "border-pink-600 text-pink-700 bg-pink-100"
                                                        : isSunday(index)
                                                            ? "text-pink-600 bg-gray-200"
                                                            : "text-gray-700 bg-gray-200"
                                            }
                                `}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                        {selectedDate && (
                            <>
                                <p className="text-xl font-semibold mt-6">
                                    {new Date(year, month, selectedDate).toLocaleDateString("en-US", {
                                        weekday: "short",
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </p>
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    {slots.map((slot) => {
                                        const available = isSlotAvailable(slot);

                                        return (
                                            <button
                                                key={slot}
                                                disabled={!available}
                                                onClick={() => available && setSelectedSlot(slot)}
                                                className={`border rounded-xl py-3 text-lg font-semibold
                                                    ${selectedSlot === slot
                                                        ? "bg-pink-700 text-white hover:bg-pink-800"
                                                        : available
                                                            ? "text-gray-800 hover:bg-gray-100"
                                                            : "bg-gray-400 text-gray-500 cursor-not-allowed"
                                                    }
                                                `}
                                            >
                                                {slot}
                                            </button>
                                        );
                                    })}
                                </div>
                                {selectedSlot && (
                                    <button
                                        ref={nextButtonRef}
                                        className="bg-pink-700 hover:bg-pink-800 text-white w-full mt-6 py-3 rounded-full text-xl font-semibold"
                                        onClick={() => setStep(2)}
                                    >
                                        Next
                                    </button>
                                )}
                            </>
                        )}
                    </>
                )}
                {step === 2 && (
                    <>
                        <h2 className="text-xl font-semibold text-pink-600 mb-2">
                            Welcome Guest!
                        </h2>
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">
                            Login using Mobile Number
                        </h3>
                        <div className="flex items-center border border-pink-500 rounded-md overflow-hidden">
                            <span className="px-3">+91</span>
                            <input
                                type="tel"
                                placeholder="---------------------------"
                                className="flex-grow p-2 outline-none text-lg"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            <button
                                className={`px-8 py-3 font-semibold transition-colors duration-300 ${mobileNumber.length === 10
                                    ? "bg-pink-600 text-white"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                                disabled={mobileNumber.length !== 10}
                                onClick={handleSendOtp}
                            >
                                Get OTP
                            </button>
                        </div>
                    </>
                )}
                {step === 3 && (
                    <>
                        <h2 className="text-xl font-semibold text-pink-600 mb-2">
                            Enter OTP
                        </h2>
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">
                            OTP valid for 5 min
                        </h3>
                        <div className="flex items-center border border-pink-500 rounded-md overflow-hidden">
                            <input
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                className="flex-grow p-2 outline-none text-lg"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <button
                                className={`px-8 py-3 font-semibold transition-colors duration-300 ${otp.length === 6
                                    ? "bg-pink-600 text-white"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                                disabled={otp.length !== 6}
                                onClick={handleVerifyOtp}
                            >
                                Verify OTP
                            </button>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                className="border border-gray-500 px-4 py-2 rounded-md"
                                onClick={() => setStep(2)}
                            >
                                Edit Phone No.
                            </button>

                            <button
                                className="border border-gray-500 px-4 py-2 rounded-md"
                                onClick={handleSendOtp}
                            >
                                Resend OTP
                            </button>
                        </div>
                    </>
                )}
                {step === 4 && (
                    <div className="mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
                        <form className="space-y-2" onSubmit={handleFormSubmit}>
                            <div className="flex flex-col">
                                <label className="text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="border-b border-gray-400 p-1 outline-none"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    className="border-b border-gray-400 p-1 outline-none"
                                    value={mobileNumber}
                                    readOnly
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="border-b border-gray-400 p-1 outline-none"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    className="border-b border-gray-400 p-1 outline-none"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700">Gender:</span>

                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formData.gender === "Male"}
                                        onChange={handleChange}
                                        className="accent-pink-600"
                                        required
                                    />
                                    <span>Male</span>
                                </label>

                                <label className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === "Female"}
                                        onChange={handleChange}
                                        className="accent-pink-600"
                                        required
                                    />
                                    <span>Female</span>
                                </label>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="flex flex-col">
                                    <label className="text-gray-700">Date</label>
                                    <input
                                        type="text"
                                        name="appointment_date"
                                        className="border border-gray-400 w-full rounded-md p-1 focus:border-pink-700 focus:ring-pink-700 focus:ring-1"
                                        value={format(
                                            new Date(year, month, selectedDate),
                                            "EEE dd MMM"
                                        )}
                                        readOnly
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-gray-700">Time</label>
                                    <input
                                        type="text"
                                        name="appointment_time"
                                        className="border border-gray-400 w-full rounded-md p-1 focus:border-pink-700 focus:ring-pink-700 focus:ring-1"
                                        value={selectedSlot}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={isChecked}
                                    onChange={() => setIsChecked(!isChecked)}
                                    className="accent-pink-600 w-5 h-5"
                                    required
                                />
                                <span className="text-gray-700">
                                    I agree to the terms & conditions
                                </span>
                            </div>
                            <button
                                type="submit"
                                className={`w-full py-3 mt-4 rounded-md text-white text-lg font-semibold ${isChecked
                                    ? "bg-pink-600"
                                    : "bg-gray-300 cursor-not-allowed"
                                    }`}
                                disabled={!isChecked}
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
