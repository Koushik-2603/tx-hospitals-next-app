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


export default function UppalPage() {
    return (
        <>
            <Head>
                <title>Best Hospital in Uppal, Hyderabad | TX Hospitals</title>
                <meta name="description" content="Your nearest multi-specialty hospital with expert care, 50+ doctors, and 24/7 emergency services. Serving Uppal and nearby areas in Hyderabad." />
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
