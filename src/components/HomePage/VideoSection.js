"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

export default function VideoSection() {
    const [activeTab, setActiveTab] = useState("patient");
    const [patientVideos, setPatientVideos] = useState([]);
    const [doctorVideos, setDoctorVideos] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [current, setCurrent] = useState(0);
    const router = useRouter();
    const isMobile = useIsMobile();

    // Fetch Patient Success Stories
    useEffect(() => {
        const fetchPatientVideos = async () => {
            try {
                const res = await fetch("https://api.txhospitals.vgworld.in/testimonials/getAll");
                const data = await res.json();

                if (Array.isArray(data) && data.length > 0) {
                    const allTestimonials = data[0]?.testimonials || [];
                    setPatientVideos(allTestimonials);
                }
            } catch (err) {
                console.error("Error fetching patient testimonials:", err);
            }
        };
        fetchPatientVideos();
    }, []);

    // Fetch Doctor Talks (unchanged)
    useEffect(() => {
        const fetchDoctorVideos = async () => {
            try {
                const res = await fetch("https://api.txhospitals.vgworld.in/doctortalks/getAll");
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    const allDoctorTalks = data[0]?.doctorTalks || [];
                    setDoctorVideos(allDoctorTalks);
                }
            } catch (err) {
                console.error("Error fetching doctor talks:", err);
            }
        };
        fetchDoctorVideos();
    }, []);

    // Function to extract YouTube video ID
    const getYouTubeId = (url) => {
        const regExp = /^.*(?:youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|shorts\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[1].length === 11 ? match[1] : null;
    };

    const handleShowMore = () => {
        if (activeTab === "patient") {
            router.push("/patientTalks");
        } else {
            router.push("/doctorTalks");
        }
    };

    const videos = activeTab === "patient" ? patientVideos : doctorVideos;

    const nextSlide = () => setCurrent((prev) => (prev + 1) % videos.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);

    useEffect(() => {
        if (isMobile && videos.length > 0) {
            const timer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % videos.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isMobile, videos.length]);

    return (
        <>
            {isMobile ? (
                <>
                    <section className="relative bg-white px-2 pt-2 pb-2">
                        <h2 className="text-xl font-bold text-pink-700 text-center">
                            Patient Success Stories
                        </h2>
                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                            Real stories of recovery and hope, where patients share their healing journeys with TX Hospitals.
                        </p>
                        <div className="relative w-full overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {patientVideos.map((item, index) => {
                                    const url = item.urlPath;
                                    const videoId = getYouTubeId(url);
                                    const thumbnail = item.image;
                                    return (
                                        <div
                                            key={index}
                                            className="w-full flex-shrink-0 flex flex-col items-center"
                                        >
                                            <div
                                                onClick={() => setSelectedVideo(videoId)}
                                                className="relative rounded-2xl overflow-hidden shadow-md w-[80%] mx-auto cursor-pointer"
                                            >
                                                <Image
                                                    src={thumbnail}
                                                    alt={item.title || "Video thumbnail"}
                                                    width={300}
                                                    height={250}
                                                    className="w-full h-56 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col justify-end text-white p-3">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-6 h-6 text-pink-700"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M6 4l10 6-10 6V4z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="relative z-10 text-xs sm:text-sm font-medium line-clamp-2">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {patientVideos.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md"
                                    >
                                        <FiChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md"
                                    >
                                        <FiChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </div>
                        {patientVideos.length > 3 && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => router.push("/patientTalks")}
                                    className="text-pink-700 font-semibold hover:underline"
                                >
                                    Show More
                                </button>
                            </div>
                        )}
                    </section>
                    <section className="relative bg-white px-2 pt-1 pb-2">
                        <h2 className="text-xl font-bold text-pink-700 text-center">
                            Doctor Talks
                        </h2>
                        <p className="text-sm text-gray-700 leading-relaxed mb-2">
                            Expert insights from our specialists on health, wellness and advanced treatments—delivered in simple, easy-to-understand talks.
                        </p>
                        <div className="relative w-full overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${current * 100}%)` }}
                            >
                                {doctorVideos.map((item, index) => {
                                    const url = item.urlPath;
                                    const videoId = getYouTubeId(url);
                                    const thumbnail = item.image;
                                    return (
                                        <div
                                            key={index}
                                            className="w-full flex-shrink-0 flex flex-col items-center"
                                        >
                                            <div
                                                onClick={() => setSelectedVideo(videoId)}
                                                className="relative rounded-2xl overflow-hidden shadow-md w-[80%] mx-auto cursor-pointer"
                                            >
                                                <Image
                                                    src={thumbnail}
                                                    alt={item.title || "Video thumbnail"}
                                                    width={300}
                                                    height={250}
                                                    className="w-full h-56 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col justify-end text-white p-3">
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-6 h-6 text-pink-700"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path d="M6 4l10 6-10 6V4z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p className="relative z-10 text-xs sm:text-sm font-medium line-clamp-2">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {doctorVideos.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md"
                                    >
                                        <FiChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white text-pink-700 p-2 rounded-full shadow-md"
                                    >
                                        <FiChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </div>
                        {doctorVideos.length > 3 && (
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => router.push("/doctorTalks")}
                                    className="text-pink-700 font-semibold hover:underline"
                                >
                                    Show More
                                </button>
                            </div>
                        )}
                    </section>
                    {selectedVideo && (
                        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 p-4">
                            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl shadow-lg">
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="absolute -top-3 -right-2 translate-x-1/2 -translate-y-1/2 text-white p-2 transition"
                                >
                                    <FiX className="text-2xl" />
                                </button>

                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <section className="relative bg-white px-6">
                    <div className="max-w-6xl mx-auto flex items-start gap-6">
                        {/* Left side: Videos */}
                        <div className="flex-1">
                            {/* Tabs */}
                            <div className="flex gap-6 mb-1 mt-6 text-lg font-semibold pb-2">
                                <button
                                    className={`${activeTab === "patient"
                                        ? "text-pink-700 border-b-2 border-pink-700"
                                        : "text-gray-600 hover:text-pink-700"
                                        }`}
                                    onClick={() => {
                                        setActiveTab("patient");
                                        setShowAll(false);
                                    }}
                                >
                                    Patient Success Stories
                                </button>
                                <button
                                    className={`${activeTab === "doctor"
                                        ? "text-pink-700 border-b-2 border-pink-700"
                                        : "text-gray-600 hover:text-pink-700"
                                        }`}
                                    onClick={() => {
                                        setActiveTab("doctor");
                                        setShowAll(false);
                                    }}
                                >
                                    Doctor Talks
                                </button>
                            </div>

                            <p className="text-base mx-auto mb-4 text-gray-700">
                                {activeTab === "doctor"
                                    ? "Expert insights from our specialists on health, wellness and advanced treatments—delivered in simple, easy-to-understand talks."
                                    : "Real stories of recovery and hope, where patients share their healing journeys with TX Hospitals."}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {(showAll ? videos : videos.slice(0, 3)).map((item, idx) => {
                                    const url = item.urlPath;
                                    const videoId = getYouTubeId(url);
                                    const thumbnail = item.image;

                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedVideo(videoId)}
                                            className="relative rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition group cursor-pointer"
                                        >
                                            <Image
                                                src={thumbnail}
                                                alt={item.title || "Video thumbnail"}
                                                width={400}
                                                height={250}
                                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition flex flex-col justify-end text-white p-4">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="w-7 h-7 text-pink-700"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M6 4l10 6-10 6V4z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="relative z-10 text-sm line-clamp-2">
                                                    {item.title}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={handleShowMore}
                                className="mt-2 text-pink-700 font-semibold hover:underline"
                            >
                                Show More
                            </button>
                        </div>

                        {/* Right side: Doctor Image */}
                        <div className="hidden md:flex justify-center">
                            <Image
                                src="/assets/Header/Docotor Image.png"
                                alt="Doctor"
                                width={300}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {selectedVideo && (
                        <div className="fixed inset-0 bg-black bg-opacity-85 flex items-center justify-center z-50 p-4 overflow-visible">
                            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-visible shadow-lg">
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="absolute -top-1 -right-6 translate-x-1/2 -translate-y-1/2 text-white p-2 transition"
                                >
                                    <FiX className="text-2xl" />
                                </button>

                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </section>
            )}
        </>
    );
}
