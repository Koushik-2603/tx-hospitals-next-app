"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";

export default function DoctorTalks() {
    const [doctorVideos, setDoctorVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

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

    const getYouTubeId = (url) => {
        const regExp = /^.*(?:youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|shorts\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[1].length === 11 ? match[1] : null;
    };

    return (
        <section className="py-5">
            <div className="bg-[#E888A3] rounded-3xl flex items-center justify-center gap-24 px-12 py-4 w-full max-w-6xl mx-auto mt-1 mb-8">
                <div className="relative">
                    <Image
                        src="/assets/Images/Doctor Talk Logo.webp"
                        alt="Doctor Talk Icon"
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                </div>
                <h2 className="text-6xl text-center font-semibold text-black">
                    Doctor Talks
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-4 md:px-0">
                {doctorVideos.map((item, idx) => {
                    const videoId = getYouTubeId(item.urlPath);
                    const thumbnail = item.image;

                    return (
                        <div
                            key={idx}
                            onClick={() => setSelectedVideo(videoId)}
                            className="relative rounded-[25px] overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                        >
                            <Image
                                src={thumbnail}
                                alt={item.title || "Video thumbnail"}
                                width={400}
                                height={250}
                                className="w-full h-56 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition flex flex-col justify-end text-white p-4">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 text-[#E888A3]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M6 4l10 6-10 6V4z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="relative z-10 text-sm text-center font-medium mt-2">
                                    {item.title || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"}
                                </p>
                            </div>
                        </div>
                    );
                })}
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
    );
}
