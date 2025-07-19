'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CONFIG from '@/config';

const TestimonialBanner = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`${CONFIG.API_BASE_URL}/patient-testimonials`);
                const data = await response.json();
                const formattedVideos = data.videos.map((url) => {
                    const videoId = new URL(url).pathname.split('/').pop();
                    return { id: videoId, title: 'Patient Testimonial' };
                });
                setVideos(formattedVideos);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <>
            {!isMobile && (
                <>
                    <section className="font-spectral">
                        <h2 className="text-5xl font-semibold text-center text-pink-700 mb-4 mt-20">
                            PATIENT TESTIMONIALS
                        </h2>
                        <p className="text-gray-900 text-lg font-semibold text-center max-w-2xl mx-auto">
                            Hear directly from our patients about their experiences at TX Hospitals. Our testimonials highlight the compassionate care, expert treatments, and life-changing results that define our commitment to your health and well-being.
                        </p>
                        {selectedVideo ? (
                            <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="mb-4 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600"
                                >
                                    Back to Videos
                                </button>
                                <iframe
                                    className="w-full max-w-3xl h-64 sm:h-96 rounded-lg shadow-lg"
                                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="max-w-7xl mx-auto">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {videos.map((video) => (
                                        <div
                                            key={video.id}
                                            className="p-2 border rounded-lg cursor-pointer shadow-sm hover:shadow-lg transition-all"
                                            onClick={() => setSelectedVideo(video.id)}
                                        >
                                            <Image
                                                unoptimized
                                                loading="lazy"
                                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                                alt={video.title}
                                                width={320}
                                                height={180}
                                                className="w-full rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="font-spectral flex justify-center items-center p-4">
                        <div className="relative w-32 h-8 text-lg font-bold text-white text-center cursor-pointer">
                            <Image
                                src='/assets/LandingPageImages/View more  button Box.png'
                                alt="View More Button"
                                fill
                                className="rounded-full object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                View More
                            </div>
                        </div>
                    </section>
                </>
            )}

            {isMobile && (
                <>
                    <section className="font-spectral">
                        <h2 className="p-4 text-2xl font-bold text-center text-pink-700">
                            PATIENT TESTIMONIALS
                        </h2>
                        <p className="p-4 text-gray-900 text-xs font-semibold text-center">
                            Hear directly from our patients about their experiences at TX Hospitals. Our testimonials highlight the compassionate care, expert treatments, and life-changing results that define our commitment to your health and well-being.
                        </p>
                        {selectedVideo ? (
                            <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="mb-4 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600"
                                >
                                    Back to Videos
                                </button>
                                <iframe
                                    className="w-full max-w-3xl h-64 sm:h-96 rounded-lg shadow-lg"
                                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <div className="p-4 max-w-7xl mx-auto">
                                <div className="grid grid-cols-2 gap-2">
                                    {videos.map((video) => (
                                        <div
                                            key={video.id}
                                            className="p-2 border rounded-lg cursor-pointer shadow-sm hover:shadow-lg transition-all"
                                            onClick={() => setSelectedVideo(video.id)}
                                        >
                                            <Image
                                                unoptimized
                                                loading="lazy"
                                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                                alt={video.title}
                                                width={320}
                                                height={180}
                                                className="w-full rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    <section className="font-spectral p-2 flex justify-center items-center">
                        <div className="relative w-32 h-8 text-lg font-semibold text-white text-center cursor-pointer">
                            <Image
                                src='/assets/LandingPageImages/View more  button Box.png'
                                alt="View More Button"
                                fill
                                className="rounded-full object-cover"
                            />
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                View More
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default TestimonialBanner;
