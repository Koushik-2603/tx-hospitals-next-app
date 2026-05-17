import React, { useEffect } from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import ThankYouPage from '@/components/HomePage/Thankyou';

export default function Doctors_Page() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Thank You - TX Hospitals</title>
                <meta
                    name="description"
                    content="You're welcome! If you need anything else, feel free to ask. Have a great day!"
                />
            </Head>
            <SecondaryLayout>
                <ThankYouPage />
            </SecondaryLayout>
        </>
    );
}