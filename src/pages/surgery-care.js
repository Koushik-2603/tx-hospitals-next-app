import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import SOLandingPage from '@/components/SecondOpinion/SOLandingPgae';

export default function Second_Opinipon() {
    return (
        <>
            <Head>
                <title>Surgery Care & Second Opinion in Hyderabad | TX Hospitals</title>
                <meta name="description" content="TX Hospitals offers advanced surgery care in Hyderabad with expert surgeons, minimally invasive options, and a reliable second opinion for your treatment decisions." />
                <meta name="keywords" content="Second opinion surgery Hyderabad, Surgery second opinion Hyderabad, Best second opinion hospital Hyderabad, Second opinion doctors Hyderabad, TX Hospitals second opinion" />
            </Head>
            <SecondaryLayout>
                <SOLandingPage />
            </SecondaryLayout>
        </>
    );
}