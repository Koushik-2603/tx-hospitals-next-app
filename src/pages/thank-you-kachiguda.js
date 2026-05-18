import React, { useEffect } from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import ThankYouPage from '@/components/HomePage/Thankyou';

export default function KachigudaThankYouPage() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Thank You - TX Hospitals Kachiguda</title>
                <meta
                    name="description"
                    content="Thank you for booking an appointment with TX Hospitals Kachiguda. We will get back to you shortly!"
                />
            </Head>
            <SecondaryLayout>
                <ThankYouPage />
            </SecondaryLayout>
        </>
    );
}
