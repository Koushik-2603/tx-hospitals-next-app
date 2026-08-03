import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const formatTime12Hour = (time24) => {
    if (!time24) return '';
    const [hourStr, minStr] = time24.split(':');
    let h = parseInt(hourStr, 10);
    const m = minStr || '00';
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m} ${ampm}`;
};

const DoctorAvailability = ({ doctorId }) => {
    const [availabilities, setAvailabilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dayPrefix, setDayPrefix] = useState('Available');
    const [notAvailPrefix, setNotAvailPrefix] = useState('today');

    useEffect(() => {
        if (!doctorId) {
            setLoading(false);
            return;
        }

        const fetchAvailability = async () => {
            try {
                let dateCursor = new Date();

                // If it is 11:00 PM or later, automatically push cursor to tomorrow
                if (dateCursor.getHours() >= 23) {
                    dateCursor.setDate(dateCursor.getDate() + 1);
                }

                let validSlots = [];
                let fallbackSlots = [];
                let attempts = 0;
                let firstCheckDate = new Date(dateCursor);

                while (attempts < 5) {
                    if (dateCursor.getDay() === 0) { // Skip Sunday
                        dateCursor.setDate(dateCursor.getDate() + 1);
                        if (attempts === 0) {
                            firstCheckDate = new Date(dateCursor);
                        }
                        continue;
                    }

                    const yyyy = dateCursor.getFullYear();
                    const mm = String(dateCursor.getMonth() + 1).padStart(2, '0');
                    const dd = String(dateCursor.getDate()).padStart(2, '0');
                    const dateStr = `${yyyy}-${mm}-${dd}`;

                    const res = await fetch(`https://api.txhospitals.vgworld.in/getDoctorAvailabilityByDate/${doctorId}/${dateStr}`);
                    let data = [];
                    if (res.ok) {
                        const parsedData = await res.json();
                        data = parsedData || [];
                    }

                    // Default fallback if no valid API items are returned
                    if (!data || data.length === 0) {
                        data = [{
                            available: true,
                            startTime: '10:00',
                            endTime: '17:00',
                            location: 'Hospital'
                        }];
                    }

                    const today = new Date();
                    const isToday = dateCursor.toDateString() === today.toDateString();

                    const processedData = data.map(item => {
                        let expired = false;
                        if (item.available && item.endTime) {
                            if (isToday) {
                                const currentHours = today.getHours();
                                const currentMinutes = today.getMinutes();
                                const currentTotalMins = currentHours * 60 + currentMinutes;

                                const [endH, endM] = item.endTime.split(':').map(Number);
                                const endTotalMins = endH * 60 + (endM || 0);

                                // Expired?
                                if (currentTotalMins >= endTotalMins) {
                                    expired = true;
                                }
                            }
                        }
                        return { ...item, expired };
                    });

                    // Store the first processed day in case we never find anything
                    if (attempts === 0) {
                        fallbackSlots = processedData;
                    }

                    const isExplicitAPIFalse = data.length > 0 && !data.some(item => item.available);
                    const hasAnActiveSlot = processedData.some(item => item.available && !item.expired);

                    if (hasAnActiveSlot) {
                        validSlots = processedData.filter(item => !item.expired);
                        break;
                    }

                    if (isExplicitAPIFalse) {
                        validSlots = processedData;
                        break;
                    }

                    // We only ever look ahead max 1 day manually (e.g. from Today => Tomorrow)
                    if (attempts === 1) {
                        validSlots = processedData;
                        break;
                    }

                    // Otherwise, move to tomorrow and try again
                    dateCursor.setDate(dateCursor.getDate() + 1);
                    attempts++;
                }

                if (validSlots.length === 0) {
                    // Safety fallback if entirely exhausted
                    validSlots = fallbackSlots.map(item => ({ ...item, available: false })); // Force render red banner
                    dateCursor = new Date(firstCheckDate);
                }

                const today = new Date();
                const tomorrow = new Date(today);
                tomorrow.setDate(tomorrow.getDate() + 1);

                let df = "Available";
                let nf = "today";
                if (dateCursor.toDateString() === tomorrow.toDateString()) {
                    df = "Available tomorrow";
                    nf = "tomorrow";
                } else if (dateCursor.toDateString() !== today.toDateString()) {
                    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    df = `Available ${days[dateCursor.getDay()]}`;
                    nf = days[dateCursor.getDay()];
                }

                setDayPrefix(df);
                setNotAvailPrefix(nf);
                setAvailabilities(validSlots);
            } catch (error) {
                console.error("Error fetching availability:", error);
                setAvailabilities([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAvailability();
    }, [doctorId]);

    if (loading) {
        return <div className="text-[10px] sm:text-xs text-gray-400 mt-2 mb-2 animate-pulse">Checking availability...</div>;
    }

    if (!availabilities || availabilities.length === 0) {
        return (
            <div className="mt-2 mb-2 text-[10px] sm:text-xs font-semibold text-red-600 bg-red-50 p-1.5 rounded flex items-center gap-1 border border-red-100">
                <Calendar size={14} /> Not available {notAvailPrefix}
            </div>
        );
    }

    return (
        <div className="mt-2 mb-2 space-y-1 w-full text-left">
            {availabilities.map((av, idx) => {
                const showLocation = availabilities.length > 1;

                if (av.available) {
                    return (
                        <div key={idx} className="text-[10px] sm:text-xs text-gray-700 bg-green-50 p-1.5 rounded flex flex-col border border-green-200">
                            {showLocation && (
                                <span className="flex items-center gap-1 font-semibold text-green-700 mb-1">
                                    <MapPin size={12} /> {av.location || 'Hospital'}
                                </span>
                            )}
                            <span className={"flex items-center gap-1 font-medium text-gray-600 " + (showLocation ? "ml-1" : "")}>
                                <Clock size={12} />
                                {dayPrefix}: {formatTime12Hour(av.startTime)} - {formatTime12Hour(av.endTime)}
                            </span>
                        </div>
                    );
                } else {
                    return (
                        <div key={idx} className="text-[10px] sm:text-xs text-gray-700 bg-red-50 p-1.5 rounded flex flex-col border border-red-200">
                            {showLocation && (
                                <span className="flex items-center gap-1 font-semibold text-red-600 mb-1">
                                    <MapPin size={12} /> {av.location || 'Hospital'}
                                </span>
                            )}
                            <span className={"flex items-center gap-1 font-medium text-red-500 " + (showLocation ? "ml-1" : "")}>
                                <Calendar size={12} />
                                Not available {notAvailPrefix}
                            </span>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default DoctorAvailability;
