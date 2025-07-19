// components/SEO.js
import Head from 'next/head';

export default function SEO({ title, description }) {
    return (
        <Head>
            <title>{title || 'TX Hospitals: Best Mutli-Speciality In Hyderabad'}</title>
            <meta name="description" content={description || 'TX Hospitals: Multi-specialty hospitals in Hyderabad Kachiguda, Uppal, and Banjara Hills for various health disorders. Best in class Technology Robotic Surgery · Achieving Surgical Excellence with Robotics!'} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href="https://txhospitals.in/" />
            <link rel="alternate" hrefLang="en-IN" href="https://txhospitals.in/" />
        </Head>
    );
}
