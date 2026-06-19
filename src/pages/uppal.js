/*
import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import UppalHero from '@/components/Uppal/UppalHero';
import UppalStats from '@/components/Uppal/UppalStats';
import UppalAbout from '@/components/Uppal/UppalAbout';
import UppalSpecialties from '@/components/Uppal/UppalSpecialties';
import UppalEmergency from '@/components/Uppal/UppalEmergency';
import UppalDoctors from '@/components/Uppal/UppalDoctors';
import UppalWhyChoose from '@/components/Uppal/UppalWhyChoose';
import UppalInsurance from '@/components/Uppal/UppalInsurance';
import UppalFAQ from '@/components/Uppal/UppalFAQ';
import UppalCTA from '@/components/Uppal/UppalCTA';


export default function UppalPageOld() {
    return (
        <>
            <Head>
                <title>Best Hospital in Uppal, Hyderabad | TX Hospitals Uppal</title>
                <meta name="description" content="TX Hospitals Uppal is a leading multi-specialty hospitals in Uppal, Hyderabad offering expert doctors, 24/7 emergency care, advanced treatments, ICU, and cashless insurance facilities." />
                <meta name="keywords" content="TX Hospitals Uppal, Best Hospital in Uppal, Multi Specialty Hospital in Uppal, Hospital in Uppal Hyderabad, Best Hospital Near Uppal, Emergency Hospital in Uppal, 24/7 Hospital in Uppal, Healthcare Services in Uppal" />
            </Head>
            <SecondaryLayout>
                <main>
                    <UppalHero />

                    <UppalStats />

                    <UppalSpecialties />

                    <UppalAbout />

                    <UppalEmergency />

                    <UppalDoctors />

                    <UppalWhyChoose />

                    <UppalInsurance />

                    <UppalFAQ />

                    <UppalCTA />

                </main>
            </SecondaryLayout>
        </>
    );
}
*/

import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import UppalNewHero from '@/components/Uppal/UppalNewHero';
import UppalNewAbout from '@/components/Uppal/UppalNewAbout';
import UppalNewSpecialties from '@/components/Uppal/UppalNewSpecialties';
import UppalNewCTScan from '@/components/Uppal/UppalNewCTScan';
import UppalNewEmergency from '@/components/Uppal/UppalNewEmergency';
import UppalNewDoctors from '@/components/Uppal/UppalNewDoctors';
import UppalNewTestimonials from '@/components/Uppal/UppalNewTestimonials';
import UppalNewLocations from '@/components/Uppal/UppalNewLocations';
import UppalNewBlogs from '@/components/Uppal/UppalNewBlogs';
import UppalNewFAQ from '@/components/Uppal/UppalNewFAQ';

export default function UppalPage() {
    return (
        <>
            <Head>
                <title>Best Hospital in Uppal, Hyderabad | TX Hospitals Uppal</title>
                <meta name="description" content="TX Hospitals Uppal is a leading multi-specialty hospitals in Uppal, Hyderabad offering expert doctors, 24/7 emergency care, advanced treatments, ICU, and cashless insurance facilities." />
                <meta name="keywords" content="TX Hospitals Uppal, Best Hospital in Uppal, Multi Specialty Hospital in Uppal, Hospital in Uppal Hyderabad, Best Hospital Near Uppal, Emergency Hospital in Uppal, 24/7 Hospital in Uppal, Healthcare Services in Uppal" />
            </Head>
            <SecondaryLayout>
                <main>
                    {/* Hero Section */}
                    <UppalNewHero />

                    {/* Welcome Section */}
                    <UppalNewAbout />

                    {/* Specialties Section */}
                    <UppalNewSpecialties />

                    {/* CT Scan Section */}
                    <UppalNewCTScan />

                    {/* Emergency Section */}
                    <UppalNewEmergency />

                    {/* Doctors Section */}
                    <UppalNewDoctors />

                    {/* Testimonials Section */}
                    <UppalNewTestimonials />

                    {/* Locations Section */}
                    <UppalNewLocations />

                    {/* Blogs Section */}
                    <UppalNewBlogs />

                    {/* FAQ Section */}
                    <UppalNewFAQ />
                </main>
            </SecondaryLayout>
        </>
    );
}

