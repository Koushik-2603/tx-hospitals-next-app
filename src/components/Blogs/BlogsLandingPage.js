import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import CONFIG from "@/config";
import AppointmentForm from "@/components/Common/AppointmentForm";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function BlogsLandingPage() {

    const router = useRouter();
    const isMobile = useIsMobile();
    const [currentUrl, setCurrentUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [topBlogs, setTopBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ left: document.body.scrollWidth, top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const endpoint = `${CONFIG.API_BASE_URL}/blogs/getAllBlogs`;
                const response = await axios.get(endpoint);
                const sortedAndFilteredBlogs = response.data.Items
                    ?.filter(blog => blog.enabled === true)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBlogs(sortedAndFilteredBlogs);
                setFilteredBlogs(sortedAndFilteredBlogs);
                setTopBlogs(sortedAndFilteredBlogs.slice(0, 3));
                const allCategories = sortedAndFilteredBlogs.flatMap(blog => blog.categories || []);
                const uniqueCategories = [...new Set(allCategories)];
                setDepartments(uniqueCategories);
                const map = {};
                response.data.Items.forEach(blog => {
                    map[blog.url] = { id: blog.blogId, type: 'blog' };
                });
                localStorage.setItem('slugMap', JSON.stringify(map));
            } catch (error) {
                console.error("Error fetching blogs: ", error);
                setError("No data found!");
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    useEffect(() => {
        if (!searchTerm.trim()) {
            setFilteredBlogs(blogs);
            return;
        }

        const lowerSearch = searchTerm.toLowerCase();

        const filtered = filteredBlogs.filter(blog =>
            blog.blogTitle.toLowerCase().includes(lowerSearch) ||
            blog.categories?.some(cat => cat.toLowerCase().includes(lowerSearch)) ||
            blog.keywords?.some(keyword => keyword.name.toLowerCase().includes(lowerSearch))
        );

        setFilteredBlogs(filtered);
    }, [searchTerm, blogs]);

    if (loading) {
        return (
            <div className="flex flex-row justify-center items-center mt-20 mb-4 gap-2">
                <div className="w-8 h-8 border-2 border-pink-700 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-pink-700 text-lg font-medium animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }
    if (error) return <p className="text-center mt-28 font-inter p-4 text-lg text-pink-700 font-semibold">{error}</p>;

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Blogs" },
    ];

    const handleReadMore = async (blog) => {
        try {
            router.push(`/${blog.url.replace(/^\/|\/$/g, '')}/`);
        } catch (err) {
            console.error("Error fetching blog details:", err);
        }
    };

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/&/g, "&")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();

    const handleCategoryClick = (categoryName) => {
        const slug = slugify(categoryName);
        localStorage.setItem("departmentsList", JSON.stringify(departments));
        router.push(`/category/${slug}/`);
    };

    return (
        <>
            {isMobile ? (
                <></>
            ) : (
                <div className="my-6 pl-5">
                    <h1 className="text-5xl text-left font-bold text-pink-700">
                        Blogs
                    </h1>
                    <div className="pl-7 mt-4 -mb-4">
                        <Breadcrumb items={breadcrumbItems} />
                    </div>
                    <div className="flex gap-2 p-3">
                        <div className="flex-1 w-[65%]">
                            <div className="relative w-full min-h-full">
                                <div className="p-4 mx-w-full relative">
                                    <div className="grid grid-cols-3 gap-4">
                                        {filteredBlogs?.map((blog, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                                className="w-full h-[98%] cursor-pointer"
                                                onClick={() => handleReadMore(blog)}
                                            >
                                                <div className="mx-auto bg-white shadow-md overflow-hidden flex flex-col">
                                                    <motion.img
                                                        src={blog.blogImage}
                                                        alt={blog.blogTitle}
                                                        className="w-fit h-fit object-cover"
                                                        whileHover={{ scale: 1.1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                    <div className="p-5 text-center flex-1 flex flex-col">
                                                        <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                                                            {blog.blogTitle}
                                                        </h3>
                                                        <button
                                                            className="mt-4 mx-auto py-2 px-2 bg-[#c72b5b] text-white font-semibold rounded-md hover:bg-[#a41e46] transition-all cursor-pointer"
                                                            onClick={() => handleReadMore(blog)}
                                                        >
                                                            Read More »
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 w-[30%]">
                            <input
                                type="text"
                                placeholder="Search blog title, category, or keyword..."
                                className="w-full p-2 border border-gray-400 rounded mb-2"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <h2 className="text-2xl mt-4 font-bold mb-4 border-b-4 border-pink-600 inline-block pb-1">
                                Share this
                            </h2>
                            <div className="flex space-x-6 mb-6 flex-wrap">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsFacebook.webp" alt="Facebook" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check this out!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/txhospitalstwitter-68879ef165ce9.webp" alt="Twitter" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href="https://www.instagram.com/txhospitals/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsInstagram.webp" alt="Instagram" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCuHZd4Yi3wTHciJoMz7mq2A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsYoutub.webp" alt="YouTube" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/tx-hospitals/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsLinkidin.webp" alt="LinkedIn" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsWhatsup.webp" alt="WhatsApp" className="w-10 h-10 cursor-pointer" />
                                </a>
                            </div>
                            <h2 className="text-2xl font-bold border-b-4 border-pink-600 inline-block pb-1">
                                Book Appointment
                            </h2>
                            <AppointmentForm />
                            <h2 className="text-2xl font-bold border-b-4 border-pink-600 inline-block pb-1 mb-2">
                                Recent Posts
                            </h2>
                            <ul className="list-disc list-outside text-sm pl-4 text-gray-800 mb-2">
                                {topBlogs.map((blog, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleReadMore(blog)}
                                        className="cursor-pointer hover:text-pink-600 transition-colors"
                                    >
                                        {blog.blogTitle}
                                    </li>
                                ))}
                            </ul>
                            <h2 className="text-2xl mt-4 font-bold mb-4 border-b-4 border-pink-600 inline-block pb-1">
                                Categories
                            </h2>
                            <ul className="divide-y divide-gray-200">
                                {departments.map((dept, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleCategoryClick(dept)}
                                        className="py-2 hover:text-pink-600 cursor-pointer transition-colors"
                                    >
                                        {dept}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}