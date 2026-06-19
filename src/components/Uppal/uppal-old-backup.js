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
                    {/* Hero Section */}
                    <UppalHero />

                    {/* Stats Section */}
                    <UppalStats />

                    {/* Specialties Section */}
                    <UppalSpecialties />

                    {/* About Section */}
                    <UppalAbout />

                    {/* Emergency Section */}
                    <UppalEmergency />

                    {/* Doctors Section */}
                    <UppalDoctors />

                    {/* Why Choose Us Section */}
                    <UppalWhyChoose />

                    {/* Insurance Section */}
                    <UppalInsurance />

                    {/* FAQ Section */}
                    <UppalFAQ />

                    {/* Final CTA Section */}
                    <UppalCTA />

                    {/* Additional sections can be added here as requested later */}
                </main>
            </SecondaryLayout>
        </>
    );
}
