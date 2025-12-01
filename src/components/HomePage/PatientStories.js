// components/PatientStories.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const getYoutubeId = (url) => {
    const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

export default function PatientStories() {
    const [videos, setVideos] = useState([]);

    // Fetch videos from API
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch("https://api.txhospitals.vgworld.in/patient-testimonials");
                const data = await res.json();
                setVideos(data.videos || []);
            } catch (err) {
                console.error("Error fetching testimonials:", err);
            }
        };
        fetchVideos();
    }, []);

    return (
        <section className="py-6">
            <div className="w-full">
                {/* Heading */}
                <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-700 mb-8">
                    Patient Success Stories
                </h2>

                {/* Videos + Show More */}
                <div className="relative flex items-center">
                    {/* Scrolling container */}
                    <div className="overflow-hidden w-full">
                        <div className="scroll-container flex flex-1 gap-6">
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
                                                alt={`Patient Story ${idx + 1}`}
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
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-container {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
          animation-play-state: running;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
