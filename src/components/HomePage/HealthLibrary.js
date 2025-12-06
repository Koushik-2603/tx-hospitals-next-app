"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import CONFIG from "@/config";
import { useRouter } from "next/router";

export default function HealthLibrary() {

    const router = useRouter();
    const [blogs, setBlogs] = useState([]);
    const isMobile = useIsMobile();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${CONFIG.API_BASE_URL}/blogs/getAllBlogs`);
                const data = await response.json();
                const sortedAndFilteredBlogs = data?.Items
                    ?.filter(blog => blog.enabled === true)
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setBlogs(sortedAndFilteredBlogs?.slice(0, 6));
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };
        fetchBlogs();
    }, []);

    const handleReadMore = async (blog) => {
        try {
            router.push(`/${blog.url.replace(/^\/|\/$/g, '')}/`);
        } catch (err) {
            console.error("Error fetching blog details:", err);
        }
    };

    return (
        <>
            {isMobile ? (
                <section className="bg-pink-100 py-1 px-2">
                    {/* Heading */}
                    <h2 className="text-xl text-center font-bold text-pink-700 mb-1">
                        Health Library
                    </h2>
                    <p className="text-sm leadinf relaxed mb-4 text-gray-700">
                        A reliable resource of easy-to-read articles on diseases, symptoms and treatments for informed health decisions.
                    </p>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-2 gap-2">
                        {blogs.map((blog, idx) => (
                            <div
                                key={idx}
                                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
                            >
                                <div className="aspect-video cursor-pointer w-full">
                                    <Image
                                        src={blog.blogImage}
                                        alt={blog.blogTitle}
                                        width={400}
                                        height={250}
                                        className="w-full h-full object-cover"
                                        onClick={() => { handleReadMore(blog) }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show More / Show Less Button */}
                    <div className="text-center">
                        <button
                            onClick={() => router.push("/blog")}
                            className="mt-3 text-pink-700 font-semibold hover:underline"
                        >
                            Show More
                        </button>
                    </div>
                </section>
            ) : (
                <section className="bg-pink-100 py-4 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4">
                            Health Library
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto mb-4 text-gray-700">
                            A reliable resource of easy-to-read articles on diseases, symptoms and treatments for informed health decisions.
                        </p>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-3 gap-6">
                            {blogs.map((blog, idx) => (
                                <div
                                    key={idx}
                                    className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
                                >
                                    <div className="aspect-video cursor-pointer w-full">
                                        <Image
                                            src={blog.blogImage}
                                            alt={blog.blogTitle}
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover"
                                            onClick={() => { handleReadMore(blog) }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show More / Show Less Button */}
                        <button
                            onClick={() => router.push("/blog")}
                            className="mt-6 text-pink-700 font-semibold hover:underline"
                        >
                            Show More
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}
