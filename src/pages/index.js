import React from 'react';
import Layout from '@/components/Layouts/Layout';
import DiseaseSearch from '@/components/HomePage/DiseaseSearch';
import Specialities from '@/components/HomePage/Specialities';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import HealthLibrary from '@/components/HomePage/HealthLibrary';
import FAQ from '@/components/HomePage/FAQ';
import LocationsBar from '@/components/HomePage/LocationsBar';
import Head from "next/head";
import SocialSidebar from '@/components/HomePage/SocialSidebar';
import VideoSection from '@/components/HomePage/VideoSection';
import OurLocations from '@/components/HomePage/OurLocations';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>TX Hospitals – Leading Multi-Specialty Hospitals in Hyderabad</title>
                <meta name="description" content="TX Hospitals offers world-class multi-specialty care in Hyderabad across Uppal, Kachiguda & Banjara Hills—with advanced diagnostics, expert doctors, and patient-centric services." />
                <meta name="keywords" content="TX Hospitals Hyderabad, Multi-specialty hospital Hyderabad, Super specialty hospital Hyderabad, Best hospital in Hyderabad, Top Hospitals in Hyderabad" />
            </Head>
            <Layout>
                <SocialSidebar />
                <Specialities />
                <DiseaseSearch />
                <WhyChooseUs />
                <VideoSection />
                <HealthLibrary />
                <FAQ />
                <OurLocations />
            </Layout>
        </>
    );
}
