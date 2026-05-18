import React, { useEffect } from 'react';
import Head from "next/head";
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import ThankYouPage from '@/components/HomePage/Thankyou';

export default function BanjaraHillsThankYouPage() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Thank You - TX Hospitals Banjara Hills</title>
                <meta
                    name="description"
                    content="Thank you for choosing TX Hospitals Banjara Hills. We have received your inquiry and our representative will get back to you shortly."
                />
            </Head>
            <SecondaryLayout>
                <ThankYouPage />
            </SecondaryLayout>
        </>
    );
}
