import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import BlogsLandingPage from '@/components/Blogs/BlogsLandingPage';

export default function Doctors_Page() {
    return (
        <>
            <Head>
                <title>TX Hospitals Health Blog – Awareness, Tips & Medical Updates</title>
                <meta name="description" content="Explore medical insights, health tips, and awareness posts by TX Hospitals in Hyderabad—your go-to health and wellness blog for expert healthcare guidance." />
                <meta name="keywords" content="TX Hospitals health blog" />
            </Head>
            <SecondaryLayout>
                <BlogsLandingPage />
            </SecondaryLayout>
        </>
    );
}