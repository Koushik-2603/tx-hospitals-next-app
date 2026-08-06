import React, { useState, useEffect } from 'react';
import { Play, Star, User } from 'lucide-react';
import CONFIG from '@/config';

const getYoutubeThumbnail = (url) => {
    if (!url) return "";
    try {
        let videoId = "";
        if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1]?.split("?")[0];
        } else if (url.includes("youtube.com/shorts/")) {
            videoId = url.split("youtube.com/shorts/")[1]?.split("?")[0];
        } else if (url.includes("v=")) {
            videoId = url.split("v=")[1]?.split("&")[0];
        }
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
    } catch (e) {
        console.error("Error parsing youtube thumbnail:", e);
    }
    return "";
};

const cleanDescription = (htmlText) => {
    if (!htmlText) return "";
    let cleaned = htmlText;
    cleaned = cleaned.replace(/<p>Every patient story reflects the trust, care and commitment we work for every day\.<\/p>/gi, "");
    cleaned = cleaned.replace(/<p><br><\/p>/gi, "");
    cleaned = cleaned.replace(/<p>&nbsp;<\/p>/gi, "");
    return cleaned;
};

const BanjaraHillsNewTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const locationName = "Banjara Hills";
        fetch(`${CONFIG.API_BASE_URL}/patient-testimonials/location/${encodeURIComponent(locationName)}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.testimonials && data.testimonials.length > 0) {
                    const formatted = data.testimonials.map(item => ({
                        videoImg: getYoutubeThumbnail(item.youtubeLink),
                        profileImg: item.patientImage || "",
                        text: cleanDescription(item.description),
                        name: item.patientName,
                        location: item.patientLocation || "Banjara Hills, Hyderabad",
                        youtubeLink: item.youtubeLink
                    }));
                    setTestimonials(formatted);
                } else {
                    setTestimonials([]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching Banjara Hills testimonials:", err);
                setTestimonials([]);
                setLoading(false);
            });
    }, []);

    return (
        <section id="testimonials" className="py-10 md:py-12" style={{ background: 'linear-gradient(rgba(189, 56, 92, 0.1) 0%, rgba(31, 17, 50, 0.08) 100%)' }}>
            <div className="max-w-[1170px] mx-auto px-6">
                
                <div className="text-center mb-10">
                    <h2 
                        className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold font-poppins" 
                        style={{ color: 'rgb(189, 56, 92)' }}
                    >
                        Patient Testimonials
                    </h2>
                    <p 
                        className="max-w-[700px] mx-auto text-sm md:text-base text-gray-700 leading-relaxed font-normal"
                        
                    >
                        Every patient story reflects the trust, care and commitment we work for every day.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-12">
                        <div className="w-8 h-8 border-2 border-pink-700 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : testimonials.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-lg overflow-hidden flex flex-col" 
                                style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1.5px' }}
                            >
                                {/* Video Play Container */}
                                <div 
                                    onClick={() => item.youtubeLink && window.open(item.youtubeLink, '_blank')}
                                    className="relative w-full h-[180px] overflow-hidden group cursor-pointer bg-gray-100"
                                >
                                    {item.videoImg ? (
                                        <img 
                                            src={item.videoImg} 
                                            alt={`${item.name} testimonial video`} 
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">
                                            <Play className="w-12 h-12" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.35)' }}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-full transition-transform duration-200 group-hover:scale-110" style={{ background: 'rgb(189, 56, 92)', boxShadow: 'rgba(189, 56, 92, 0.5) 0px 4px 16px' }}>
                                            <Play className="w-5 h-5 ml-1 text-white" fill="currentColor" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded" style={{ background: 'rgba(0, 0, 0, 0.65)' }}>
                                        <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgb(255, 255, 255)' }}>Video</span>
                                    </div>
                                </div>

                                {/* Card Details */}
                                <div className="flex flex-col gap-3 p-5 flex-1 justify-between">
                                    <div>
                                        <div className="flex gap-0.5 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3.5 h-3.5 text-[#BD385C]" fill="currentColor" strokeWidth={2} />
                                            ))}
                                        </div>
                                        <div 
                                            style={{ fontSize: '13px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7 }}
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 pt-3 border-t border-[#F0DFE5] mt-4">
                                        {item.profileImg ? (
                                            <img 
                                                src={item.profileImg} 
                                                alt={item.name} 
                                                className="w-9 h-9 rounded-full object-cover" 
                                            />
                                        ) : (
                                            <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-[#BD385C] flex-shrink-0">
                                                <User className="w-5 h-5" />
                                            </div>
                                        )}
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                                                {item.name}
                                            </div>
                                            <div style={{ fontSize: '11px', fontWeight: 400, color: 'rgb(108, 108, 108)' }}>
                                                {item.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 px-6 rounded-2xl bg-white border border-dashed border-gray-300 max-w-[500px] mx-auto text-center shadow-sm">
                        <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-4 text-[#BD385C]">
                            <Play className="w-8 h-8 ml-0.5" fill="currentColor" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1" >
                            Testimonials Coming Soon
                        </h3>
                        <p className="text-sm text-gray-500 max-w-[320px]" >
                            We are in the process of gathering inspiring stories from our patients. Stay tuned!
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default BanjaraHillsNewTestimonials;
