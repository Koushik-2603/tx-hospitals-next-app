import React from 'react';
import SpecialitiesHomepage from '@/components/Specialities/SpecialitiesHomepage';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import Breadcrumb from "@/components/Common/Breadcrumb";
import useIsMobile from '@/hooks/useIsMobile';

export default function Specialities() {

    const isMobile = useIsMobile();

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Specialities" },
    ];

    return (
        <>
            <Head>
                <title>TX Hospitals – Leading Multi-Specialty Hospitals in Hyderabad</title>
                <meta name="description" content="TX Hospitals offers world-class multi-specialty care in Hyderabad across Uppal, Kachiguda & Banjara Hills—with advanced diagnostics, expert doctors, and patient-centric services." />
                <meta name="keywords" content="TX Hospitals Hyderabad, Multi-specialty hospital Hyderabad, Super specialty hospital Hyderabad, Best hospital in Hyderabad, Top Hospitals in Hyderabad" />
            </Head>
            <SecondaryLayout>
                <div className={`ml-4 absolute z-20 ${isMobile ? "-mt-3" : "mt-8"}`}>
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <SpecialitiesHomepage />
            </SecondaryLayout>
        </>
    );
}