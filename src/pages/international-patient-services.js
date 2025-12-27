import React from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import IPLandingPage from '@/components/InternationalPatients/IPLandingPage';

export default function International_Patients() {
    return (
        <>
            <Head>
                <title>Medical Tourism & International Patient Care in Hyderabad – TX Hospitals</title>
                <meta name="description" content="TX Hospitals in Hyderabad offers dedicated international patient services—visa & travel planning, second opinions, translator support, and global-intelligent care." />
                <meta name="keywords" content="International Patient Services Hyderabad, Medical tourism Hyderabad, International patients hospital Hyderabad, TX Hospitals medical tourism, Global patient care Hyderabad, Medical visa assistance Hyderabad" />
            </Head>
            <SecondaryLayout>
                <IPLandingPage />
            </SecondaryLayout>
        </>
    );
}