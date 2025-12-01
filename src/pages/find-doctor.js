import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import DoctorsLandingPage from '@/components/Doctors/DoctorsLandingPage';

export default function Doctors_Page() {
    return (
        <>
            <Head>
                <title>Find a Specialist Doctor in Hyderabad | TX Hospitals</title>
                <meta name="description" content="Easily find a doctor in Hyderabad at TX Hospitals—browse top specialists by specialty, location, and availability for expert multi-specialty care." />
                <meta name="keywords" content="find doctor in Hyderabad, Top Doctors in Hyderabad, Best Doctors in Hyderabad, Top Surgeons in Hyderabad, Best Surgeons in Hyderabad, Find a Surgeons in Hyderabad, Hyderabad Doctors list, Hyderabad Doctors" />
            </Head>
            <SecondaryLayout>
                <DoctorsLandingPage />
            </SecondaryLayout>
        </>
    );
}