"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "@/config";
import BlogDetails from "@/components/Blogs/BlogDetails";
import ViewProfile from "@/components/Doctors/ViewProfile";
// import SecondOpinionDetail from "@/components/SecondOpinion/SecondOpinionDetail";
import { useRouter } from "next/router";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";

export default function UniversalPage() {
    const router = useRouter();
    const { url } = router.query;

    const [loading, setLoading] = useState(true);
    const [type, setType] = useState(null);
    const [data, setData] = useState(null);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                /* 1️⃣ Blogs */
                const blogsRes = await axios.get(`${CONFIG.API_BASE_URL}/blogs/getAllBlogs`);
                const blogs = blogsRes.data.Items?.filter(b => b.enabled === true) || [];

                const matchBlog = blogs.find(
                    blog => url === blog.url.replace(/^\/|\/$/g, "")
                );

                if (matchBlog) {
                    const allCats = blogs.flatMap(b => b.categories || []);
                    setDepartments([...new Set(allCats)]);

                    setType("blog");
                    setData(matchBlog);
                    setLoading(false);
                    return;
                }

                /* 2️⃣ Doctors */
                const doctorsRes = await axios.get(`${CONFIG.API_BASE_URL}/getAllDoctors`);
                const doctors = doctorsRes.data;

                const matchDoctor = doctors.find(
                    d => url === d.url.replace(/^\/|\/$/g, "")
                );

                if (matchDoctor) {
                    const doctorDetails = await axios.get(
                        `${CONFIG.API_BASE_URL}/doctors/${matchDoctor.id}`
                    );

                    setType("doctor");
                    setData(doctorDetails.data);
                    setLoading(false);
                    return;
                }

                /* 3️⃣ Second Opinion */
                const soRes = await axios.get(`${CONFIG.API_BASE_URL}/secondopinion/getAllSecondOpinion`);
                const opinions = soRes.data.Items;

                const matchOpinion = opinions.find(
                    op => url === op.url.replace(/^\/|\/$/g, "")
                );

                if (matchOpinion) {
                    setType("surgery");
                    setData(matchOpinion);
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
                {/* <SecondOpinionDetail surgeryData={data} /> */}
                <div className="mt-28 text-center text-pink-700">
                    Surgery UI Coming Soon
                </div>
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
