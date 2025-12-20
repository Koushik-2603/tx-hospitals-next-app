import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import HealthPackageDetails from '@/components/HealthPackages/HealthPackageDetails';

export default function Health_Package_Details() {
    return (
        <>
            <Head>
                <title>Comprehensive Health Checks in Hyderabad | Preventive Care</title>
                <meta name="description" content="Get comprehensive health checks in Hyderabad. Early detection, expert analysis, and personalized care plans for a healthier life. Book your health checkup today!" />
            </Head>
            <SecondaryLayout>
                <HealthPackageDetails />
            </SecondaryLayout>
        </>
    );
}