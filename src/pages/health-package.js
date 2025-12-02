import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import HPLandingPage from '@/components/HealthPackages/HPLandingPage';

export default function Health_Packages() {
    return (
        <>
            <Head>
                <title>Comprehensive Health Checks in Hyderabad | Preventive Care</title>
                <meta name="description" content="Get comprehensive health checks in Hyderabad. Early detection, expert analysis, and personalized care plans for a healthier life. Book your health checkup today!" />
            </Head>
            <SecondaryLayout>
                <HPLandingPage />
            </SecondaryLayout>
        </>
    );
}