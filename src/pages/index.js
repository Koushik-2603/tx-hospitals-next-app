import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layouts/Layout';
import DiseaseSearch from '@/components/HomePage/DiseaseSearch';
import Specialities from '@/components/HomePage/Specialities';
import WhyChooseUs from '@/components/HomePage/WhyChooseUs';
import LocationsBar from '@/components/HomePage/LocationsBar';
import Head from "next/head";

const SocialSidebar = dynamic(() => import('@/components/HomePage/SocialSidebar'), { ssr: false });
const VideoSection = dynamic(() => import('@/components/HomePage/VideoSection'), { ssr: false });
const HealthLibrary = dynamic(() => import('@/components/HomePage/HealthLibrary'), { ssr: false });
const FAQ = dynamic(() => import('@/components/HomePage/FAQ'), { ssr: false });
const OurLocations = dynamic(() => import('@/components/HomePage/OurLocations'), { ssr: false });

export default function HomePage() {
    const hospitalSchema = {
        "@context": "https://schema.org",
        "@type": "Hospital",
        "name": "TX Hospitals",
        "url": "https://txhospitals.in/",
        "logo": "https://txhospitals.in/TXlogoWB.jpg",
        "image": "https://txhospitals.in/TXlogoWB.jpg",
        "description": "TX Hospitals offers world-class multi-specialty care in Hyderabad across Uppal, Kachiguda & Banjara Hills—with advanced diagnostics, expert doctors, and patient-centric services.",
        "telephone": "+91 9144514459",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "# 2-6-71, Bharath Nagar Colony, Near Masjid Uppal",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500039",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "# 3-2-841/1, Kachiguda Station Rd, Mahalaxmi Nilayam, Kachiguda",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500027",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "# 8-2-680, Raichandani Construction, no:12, B Road, Sri Ram Nagar Colony, Banjara Hills",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500028",
                "addressCountry": "IN"
            }
        ],
        "geo": [
            {
                "@type": "GeoCoordinates",
                "latitude": 17.4019,
                "longitude": 78.5602
            },
            {
                "@type": "GeoCoordinates",
                "latitude": 17.3872,
                "longitude": 78.4907
            },
            {
                "@type": "GeoCoordinates",
                "latitude": 17.4144,
                "longitude": 78.4419
            }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/TXHOSPITALS",
            "https://www.instagram.com/txhospitals/",
            "https://www.youtube.com/@TXHOSPITALOfficial",
            "https://www.linkedin.com/company/tx-hospitals",
            "https://twitter.com/txhospitals"
        ]
    };

    return (
        <>
            <Head>
                <title>TX Hospitals – Leading Multi-Specialty Hospitals in Hyderabad</title>
                <meta name="description" content="TX Hospitals offers world-class multi-specialty care in Hyderabad across Uppal, Kachiguda & Banjara Hills—with advanced diagnostics, expert doctors, and patient-centric services." />
                <meta name="keywords" content="TX Hospitals Hyderabad, Multi-specialty hospital Hyderabad, Super specialty hospital Hyderabad, Best hospital in Hyderabad, Top Hospitals in Hyderabad" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TX Hospitals – Leading Multi-Specialty Hospitals in Hyderabad" />
                <meta property="og:description" content="TX Hospitals offers world-class multi-specialty care in Hyderabad across Uppal, Kachiguda & Banjara Hills—with advanced diagnostics, expert doctors, and patient-centric services." />
                <meta property="og:image" content="https://txhospitals.in/TXlogoWB.jpg" />
                <meta property="og:url" content="https://txhospitals.in/" />
                <meta property="og:site_name" content="TX Hospitals" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TX Hospitals – Leading Multi-Specialty Hospitals in Hyderabad" />
                <meta name="twitter:description" content="TX Hospitals offers world-class multi-specialty care in Hyderabad across Uppal, Kachiguda & Banjara Hills—with advanced diagnostics, expert doctors, and patient-centric services." />
                <meta name="twitter:image" content="https://txhospitals.in/TXlogoWB.jpg" />
                <meta name="twitter:site" content="@txhospitals" />

                {/* Local Business Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
                />
            </Head>
            <Layout>
                <h1 className="sr-only">TX Hospitals – Leading Multi-Specialty Hospitals in Hyderabad</h1>
                <SocialSidebar />
                <Specialities />
                <DiseaseSearch />
                <WhyChooseUs />
                <VideoSection />
                <HealthLibrary />
                <FAQ />
                <OurLocations />
            </Layout>
        </>
    );
}
