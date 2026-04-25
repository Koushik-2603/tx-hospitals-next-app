import React from 'react';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import Head from "next/head";
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
                <title>TX Hospitals Uppal – Best Multi-Specialty Hospital in Uppal</title>
                <meta name="description" content="TX Hospitals Uppal offers world-class multi-specialty care with advanced diagnostics, expert doctors, and 24/7 emergency services in Uppal, Hyderabad." />
                <meta name="keywords" content="TX Hospitals Uppal, Best hospital in Uppal, Multi-specialty hospital Uppal, Emergency care Uppal" />
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
