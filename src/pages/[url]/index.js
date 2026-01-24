"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "@/config";
import BlogDetails from "@/components/Blogs/BlogDetails";
import ViewProfile from "@/components/Doctors/ViewProfile";
// import SecondOpinionDetail from "@/components/SecondOpinion/SecondOpinionDetail";
import { useRouter } from "next/router";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import SODetailsPage from "@/components/SecondOpinion/SODetailsPage";

export default function UniversalPage() {
    const router = useRouter();
    const { url } = router.query;

    const [loading, setLoading] = useState(true);
    const [type, setType] = useState(null);
    const [data, setData] = useState(null);
    const [departments, setDepartments] = useState([]);

    // Simple static cache to avoid re-fetching lists during the same session
    const apiCache = {
        blogs: null,
        doctors: null,
        opinions: null
    };

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                // 1. FAST PATH: Check local storage hint for instant resolution
                const slugMap = JSON.parse(localStorage.getItem('slugMap') || '{}');
                const cleanUrl = url.replace(/^\/|\/$/g, "");
                const hint = slugMap[cleanUrl];

                if (hint) {
                    if (hint.type === 'surgery') {
                        const res = await axios.get(`${CONFIG.API_BASE_URL}/new-secondopinion/getSecondOpinionbyId/${hint.id}`);
                        setType("surgery");
                        setData(res?.data?.Item);
                        setLoading(false);
                        return;
                    }
                    if (hint.type === 'doctor') {
                        const res = await axios.get(`${CONFIG.API_BASE_URL}/doctors/${hint.id}`);
                        setType("doctor");
                        setData(res.data);
                        setLoading(false);
                        return;
                    }
                }

                // 2. REGULAR PATH (Fallback): Search through all lists
                const [blogsRes, doctorsRes, soRes] = await Promise.all([
                    apiCache.blogs || axios.get(`${CONFIG.API_BASE_URL}/blogs/getAllBlogs`),
                    apiCache.doctors || axios.get(`${CONFIG.API_BASE_URL}/getAllDoctors`),
                    apiCache.opinions || axios.get(`${CONFIG.API_BASE_URL}/new-secondopinion/getAllSecondOpinion`)
                ]);

                // Cache the results for subsequent navigations
                apiCache.blogs = blogsRes;
                apiCache.doctors = doctorsRes;
                apiCache.opinions = soRes;

                const blogs = blogsRes.data.Items?.filter(b => b.enabled === true) || [];
                const doctors = doctorsRes.data;
                const opinions = soRes.data.Items;

                // Check Blogs
                const matchBlog = blogs.find(blog => cleanUrl === blog.url.replace(/^\/|\/$/g, ""));
                if (matchBlog) {
                    const allCats = blogs.flatMap(b => b.categories || []);
                    setDepartments([...new Set(allCats)]);
                    setType("blog");
                    setData(matchBlog);
                    setLoading(false);
                    return;
                }

                // Check Doctors
                const matchDoctor = doctors.find(d => cleanUrl === d.url.replace(/^\/|\/$/g, ""));
                if (matchDoctor) {
                    const res = await axios.get(`${CONFIG.API_BASE_URL}/doctors/${matchDoctor.id}`);
                    setType("doctor");
                    setData(res.data);
                    setLoading(false);
                    return;
                }

                // Check Second Opinion
                const matchOpinion = opinions.find(op => cleanUrl === op.url.replace(/^\/|\/$/g, ""));
                if (matchOpinion) {
                    const res = await axios.get(`${CONFIG.API_BASE_URL}/new-secondopinion/getSecondOpinionbyId/${matchOpinion.soId}`);
                    setType("surgery");
                    setData(res?.data?.Item);
                    setLoading(false);
                    return;
                }

                setType("404");
                setLoading(false);
            } catch (err) {
                console.error("Universal Error:", err);
                setType("404");
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    /* Loading state */
    if (loading) {
        return (
            <SecondaryLayout>
                <div className="flex flex-row justify-center items-center mt-20 mb-4 gap-2">
                    <div className="w-8 h-8 border-2 border-pink-700 border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-pink-700 text-lg font-medium animate-pulse">
                        Loading...
                    </div>
                </div>
            </SecondaryLayout>
        );
    }

    /* Blog */
    if (type === "blog") {
        return (
            <SecondaryLayout>
                <BlogDetails blogData={data} departments={departments} />
            </SecondaryLayout>
        );
    }

    /* Doctor */
    if (type === "doctor") {
        return (
            <SecondaryLayout>
                <ViewProfile doctorData={data} />
            </SecondaryLayout>
        );
    }

    /* Surgery */
    if (type === "surgery") {
        return (
            <SecondaryLayout>
                <SODetailsPage surgeryData={data} />
            </SecondaryLayout>
        );
    }

    /* 404 PAGE */
    return (
        <SecondaryLayout>
            <div className="mt-14 text-center text-pink-700">
                404 - Page Not Found
            </div>
        </SecondaryLayout>
    );
}
