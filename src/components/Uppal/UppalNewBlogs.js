import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const UppalNewBlogs = () => {
    const blogs = [
        {
            title: "World Thyroid Day: Why Thyroid Health Matters?",
            description: "Important tips for better awareness on thyroid conditions, early detection and how timely care can improve your quality of life.",
            date: "May 25, 2026",
            category: "Thyroid Health",
            readTime: "4 min read",
            image: "https://tx-hospital-blog-images.s3.ap-south-2.amazonaws.com/blogs/1779712356409-World%20Thyroid%20Day%202026%201.webp",
            slug: "/world-thyroid-day-2026/"
        },
        {
            title: "World Pre-Eclampsia Day: How Early Detection Can Save Mothers and Babies?",
            description: "Understanding pre-eclampsia, its warning signs and why early screening during pregnancy is critical for the safety of both mother and baby.",
            date: "May 22, 2026",
            category: "Women's Health",
            readTime: "5 min read",
            image: "https://tx-hospital-blog-images.s3.ap-south-2.amazonaws.com/blogs/1779711418022-World%20Preeclampsia%20Day%201.webp",
            slug: "/world-preeclampsia-day-2026/"
        },
        {
            title: "World IBD Day 2026: Breaking Barriers to IBD Care",
            description: "On World Inflammatory Bowel Disease Day, we explore the challenges patients face and how modern gastroenterology is improving outcomes.",
            date: "May 19, 2026",
            category: "Gastroenterology",
            readTime: "4 min read",
            image: "https://tx-hospital-blog-images.s3.ap-south-2.amazonaws.com/blogs/1779709814051-IBD.webp",
            slug: "/world-ibd-day-2026/"
        }
    ];

    return (
        <section id="blogs" className="py-16" style={{ background: 'rgb(243, 243, 245)' }}>
            <div className="max-w-[1170px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="mb-3" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'rgb(3, 2, 19)' }}>
                        Health Insights &amp; <span style={{ color: 'rgb(189, 56, 92)' }}>Articles</span>
                    </h2>
                    <p className="max-w-[560px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 400, color: 'rgb(30, 30, 30)', lineHeight: 1.7 }}>
                        Explore easy-to-read health articles from TX Hospitals specialists for informed and confident care decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog, idx) => (
                        <Link href={blog.slug} key={idx} className="flex flex-col rounded-xl bg-white overflow-hidden hover:shadow-md transition-shadow cursor-pointer group" style={{ border: '0.5px solid rgb(183, 183, 183)', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 1px' }}>
                            <div className="overflow-hidden" style={{ height: '200px' }}>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-5 gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="px-2.5 py-0.5 rounded-full" style={{ background: 'rgb(240, 223, 229)', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 500, color: 'rgb(189, 56, 92)' }}>
                                        {blog.category}
                                    </span>
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgb(108, 108, 108)' }}>
                                        {blog.readTime}
                                    </span>
                                </div>
                                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 600, color: 'rgb(3, 2, 19)', lineHeight: 1.5, margin: '0px' }}>
                                    {blog.title}
                                </h3>
                                <p className="flex-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgb(108, 108, 108)', lineHeight: 1.65, margin: '0px' }}>
                                    {blog.description}
                                </p>
                                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgb(240, 223, 229)' }}>
                                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'rgb(108, 108, 108)' }}>
                                        {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 500, color: 'rgb(189, 56, 92)' }}>
                                        Read More <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UppalNewBlogs;
