// components/DoctorTalks.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

export default function DoctorTalks() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch("https://api.txhospitals.vgworld.in/health-talks");
                const data = await res.json();

                // flatten all categories into one array of video URLs
                const allVideos = data.flatMap((cat) => cat.videos);
                setVideos(allVideos || []);
            } catch (err) {
                console.error("Error fetching doctor talks:", err);
            }
        };
        fetchVideos();
    }, []);

    return (
        <section className="py-6">
            <div className="w-full">
                {/* Heading */}
                <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-700 mb-8">
                    Doctor Talks
                </h2>

                {/* Videos */}
                <div className="relative flex items-center">
                    <div className="overflow-hidden w-full">
                        <div className="scroll-container-rtl flex flex-1 gap-6">
                            {videos.concat(videos).map((url, idx) => {
                                const videoId = getYoutubeId(url);
                                const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                                return (
                                    <a
                                        key={idx}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 w-72 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                                    >
                                        <div className="aspect-video w-full">
                                            <img
                                                src={thumbnail}
                                                alt={`Doctor Talk ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
        @keyframes scrollRtl {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .scroll-container-rtl {
          display: flex;
          width: max-content;
          animation: scrollRtl 120s linear infinite;
          animation-play-state: running;
        }
        .scroll-container-rtl:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
