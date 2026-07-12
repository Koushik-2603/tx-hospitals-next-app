import React, { useState, useEffect } from "react";

const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-4 mb-6 mt-10 first:mt-2">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 shrink-0">{title}</h3>
        <div className="h-px bg-gray-200 w-full"></div>
    </div>
);

const DigitalMedia = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        window.scrollTo({ left: document.body.scrollWidth, top: 0, behavior: "smooth" });
    }, []);

    const banjaraInaugurationVideos = [
        "https://youtu.be/0hvii1FWFn4",
        "https://youtu.be/mEpQgyh9WdI"
    ];

    const kachigudaInaugurationVideos = [
        "https://youtu.be/taVsIUEMzgU",
        "https://youtu.be/FZV-rJen3X0",
        "https://youtu.be/wvLr1WshKwI",
        "https://youtu.be/FGFhPRtovj0"
    ];

    const eventsVideos = [
        "https://youtu.be/__rosrMxnRQ",
        "https://youtu.be/zaWKjf2bEfs",
        "https://youtu.be/pycAyIrDDNc",
        "https://youtu.be/JGP6HnEyrko",
        "https://youtu.be/-qUGe8EynpY"
    ];

    return (
        <div className="p-2 md:p-4">
            
            {/* Banjara Hills Unit Inauguration */}
            <SectionHeader title="Banjara Hills Unit Inauguration" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {banjaraInaugurationVideos.map((video, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 aspect-video group relative">
                        <iframe
                            title={video}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${new URL(video).pathname.split("/").pop()}`}
                            frameBorder="0"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                        />
                    </div>
                ))}
            </div>

            {/* Kachiguda Unit Inauguration */}
            <SectionHeader title="Kachiguda Unit Inauguration" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {kachigudaInaugurationVideos.map((video, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 aspect-video group relative">
                        <iframe
                            title={video}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${new URL(video).pathname.split("/").pop()}`}
                            frameBorder="0"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                        />
                    </div>
                ))}
            </div>

            {/* Events */}
            <SectionHeader title="Events" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {eventsVideos.map((video, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 aspect-video group relative">
                        <iframe
                            title={video}
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${new URL(video).pathname.split("/").pop()}`}
                            frameBorder="0"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 group-hover:opacity-90"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DigitalMedia;
