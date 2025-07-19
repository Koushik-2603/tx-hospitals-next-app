'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import CONFIG from "@/config";

const Talks_Blogs = () => {

    const router = useRouter();
    const [selected, setSelected] = useState("cardiac_sciences");
    const [isMobile, setIsMobile] = useState(false);
    const [videosData, setVideosData] = useState({});
    const [blogs, setBlogs] = useState([]);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window !== "undefined") {
                setIsMobile(window.innerWidth < 768);
            }
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        fetch(`${CONFIG.API_BASE_URL}/health-talks`)
            .then((response) => response.json())
            .then((data) => {
                const formattedData = {};
                data.forEach((item) => {
                    formattedData[item.category.toLowerCase().replace(/\s+/g, "_")] =
                        item.videos.map((video) =>
                            video.split("v=").pop().split("/").pop()
                        );
                });
                setVideosData(formattedData);
            })
            .catch((error) =>
                console.error("Error fetching health talks data:", error)
            );
    }, []);

    const categories = [
        { id: "cardiac_sciences", label: "Cardiac Sciences" },
        { id: "neuro_sciences", label: "Neuro Sciences" },
        { id: "renal_sciences", label: "Renal Sciences" },
        { id: "orthopedics", label: "Orthopedics" },
        { id: "gastro_sciences", label: "Gastro Sciences" },
        { id: "mother_and_child_care", label: "Mother & Child" },
        { id: "pulmonology", label: "Pulmonology" },
        { id: "internal_medicine", label: "Internal Medicine" },
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${CONFIG.API_BASE_URL}/blogs/getAllBlogs`);
                const sortedAndFiltered = response.data.Items
                    ?.filter((b) => b.enabled)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBlogs(sortedAndFiltered.slice(0, 6));
                const allCategories = sortedAndFiltered.flatMap((b) => b.categories || []);
                const uniqueDepartments = [...new Set(allCategories)];
                setDepartments(uniqueDepartments);
            } catch (err) {
                console.error("Error fetching blogs: ", err);
            }
        };
        fetchBlogs();
    }, []);

    const handleReadMore = async (blog) => {
        try {
            const response = await axios.get(`${CONFIG.API_BASE_URL}/blogs/getBlogById/${blog.blogId}`);
            const blogData = response.data.Item;
            router.push({
                pathname: `/${blog.url.replace(/^\/|\/$/g, "")}`,
                query: { state: JSON.stringify({ blog: blogData, departments }) },
            });
        } catch (err) {
            console.error("Error fetching blog details:", err);
        }
    };

    return (
        <>
            {!isMobile && (
                <>
                    <section className="font-spectral">
                        <h2 className="text-5xl mt-4 md:text-5xl font-semibold text-center text-pink-700 mb-4">
                            HEALTH TALKS
                        </h2>
                        <p className="text-gray-900 text-lg font-semibold text-center max-w-2xl mx-auto">
                            Our Health Talks bring you expert-driven insights on wellness, disease prevention, and advanced treatments led by our top doctors and specialists.
                        </p>
                        {/* Medical Videos Section */}
                        <div className="w-full p-4">
                            {/* Top Navigation */}
                            <div className="flex justify-center gap-5 w-auto h-auto">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className={`cursor-pointer text-center border-2 transition-all 
                ${selected === category.id ? "border-pink-700 bg-pink-700 text-white" : " mb-2 rounded-lg border-gray-300"
                                            }`}
                                        onClick={() => setSelected(category.id)}
                                    >
                                        <p className="p-[10px] text-base font-semibold">{category.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Video Content Section */}
                            <div className="p-4 w-full border-1 bg-pink-700 border-pink-700">
                                <div className="grid grid-cols-4 bg-pink-700 gap-4">
                                    {(videosData[selected] || []).map((video, index) => (
                                        <div key={index} className="bg-black rounded-lg overflow-hidden">
                                            <iframe
                                                width="100%"
                                                height="200"
                                                src={`https://www.youtube.com/embed/${video}`}
                                                title="Medical Video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="font-spectral flex justify-center items-center">
                        <div
                            className="rounded-full w-32 h-8 bg-cover bg-center text-lg font-bold text-white text-center cursor-pointer"
                            style={{ backgroundImage: "url('/assets/LandingPageImages/View more  button Box.png')" }}
                        >
                            View More
                        </div>
                    </section>

                    <section className="font-spectral">
                        <h2 className="text-5xl md:text-5xl font-semibold text-center text-pink-700 mb-4 mt-12">
                            HEALTH BLOGS
                        </h2>
                        <p className="text-gray-900 text-lg font-semibold text-center max-w-2xl mx-auto">
                            Our Health Blogs are your trusted source for expert health updates, wellness tips, and the latest medical advancements. Stay informed and take control of your well-being.
                        </p>
                        {/* Medical Videos Section */}
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {blogs.map((blog, index) => (
                                    <a key={index} href={blog.href} target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                            <Image
                                                loading="lazy"
                                                src={blog.blogImage}
                                                alt={blog.blogTitle}
                                                width={400}
                                                height={250}
                                                className="w-full h-auto cursor-pointer"
                                                onClick={() => handleReadMore(blog)}
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="font-spectral flex justify-center mt-8 items-center">
                        <div
                            className="rounded-full w-32 h-8 bg-cover bg-center text-lg font-bold text-white text-center cursor-pointer"
                            style={{ backgroundImage: "url('/assets/LandingPageImages/View more  button Box.png')" }}
                            onClick={() => navigate('/blog/')}
                        >
                            View More
                        </div>
                    </section>
                </>
            )}

            {isMobile && (
                <>
                    <section className="font-spectral">
                        <h2 className="text-2xl md:text-5xl font-bold text-center text-pink-700 mb-4">
                            HEALTH TALKS
                        </h2>
                        <p className="p-4 text-gray-900 text-xs font-semibold text-center">
                            Our Health Talks bring you expert-driven insignts on wellness, disease prevention, and advanced treatments led by our top doctors and sepcialists.
                        </p>
                        {/* Medical Videos Section */}
                        <div className="w-full p-4">
                            {/* Top Navigation */}
                            <div className="grid grid-cols-4 gap-2 w-auto h-auto">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className={`cursor-pointer text-center px-1 py-1 pt-1 border-2 transition-all 
                ${selected === category.id ? "border-pink-700 bg-pink-700 text-white pb-2" : " mb-2 rounded-lg border-gray-300 pb-1"
                                            }`}
                                        onClick={() => setSelected(category.id)}
                                    >
                                        <p className="p-1 text-[10px] text-justify font-semibold">{category.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Video Content Section */}
                            <div className="p-2 w-full border-2 bg-pink-700 border-pink-700">
                                <div className="grid grid-cols-2 bg-pink-700 gap-4">
                                    {(videosData[selected] || []).map((video, index) => (
                                        <div key={index} className="bg-black rounded-lg overflow-hidden">
                                            <iframe
                                                width="100%"
                                                height="100"
                                                src={`https://www.youtube.com/embed/${video}`}
                                                title="Medical Video"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="font-spectral p-2 flex justify-center items-center">
                        <div
                            className="rounded-full w-32 h-8 bg-cover bg-center text-lg font-semibold text-white text-center cursor-pointer"
                            style={{ backgroundImage: "url('/assets/LandingPageImages/View more  button Box.png')" }}
                        >
                            View More
                        </div>
                    </section>

                    <section className="font-spectral">
                        <h2 className="text-2xl md:text-5xl font-bold text-center text-pink-700">
                            HEALTH BLOGS
                        </h2>
                        <p className="p-4 text-gray-900 text-xs font-semibold text-center">
                            Our Health Blogs is your trusted source for expert health updates, wellness tips, and the latest medical advancements. Stay informed and take control of your well-being.
                        </p>
                        {/* Medical Videos Section */}
                        <div className="p-4 max-w-5xl mx-auto">
                            <div className="grid grid-cols-2 gap-4">
                                {blogs.map((blog, index) => (
                                    <a key={index} href={blog.href} target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                            <Image
                                                loading="lazy"
                                                src={blog.blogImage}
                                                alt={blog.blogTitle}
                                                width={200}
                                                height={150}
                                                className="w-full h-auto cursor-pointer"
                                                onClick={() => handleReadMore(blog)}
                                            />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="font-spectral p-2 flex justify-center items-center">
                        <div
                            className="rounded-full w-32 h-8 bg-cover bg-center text-lg font-semibold text-white text-center cursor-pointer"
                            style={{ backgroundImage: "url('/assets/LandingPageImages/View more  button Box.png')" }}
                            onClick={() => navigate('/blog/')}
                        >
                            View More
                        </div>
                    </section>
                </>
            )}
        </>
    );

}

export default Talks_Blogs;