import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import BanjaraHillsHero from '@/components/BanjaraHills/BanjaraHillsHero';
import BanjaraHillsStats from '@/components/BanjaraHills/BanjaraHillsStats';
import BanjaraHillsSpecialities from '@/components/BanjaraHills/BanjaraHillsSpecialities';
import BanjaraHillsAdvancedHealthcare from '@/components/BanjaraHills/BanjaraHillsAdvancedHealthcare';
import BanjaraHillsDoctors from '@/components/BanjaraHills/BanjaraHillsDoctors';
import BanjaraHillsTreatmentsAndAreas from '@/components/BanjaraHills/BanjaraHillsTreatmentsAndAreas';
import BanjaraHillsWhyChooseUs from '@/components/BanjaraHills/BanjaraHillsWhyChooseUs';
import BanjaraHillsFaqsAndVisit from '@/components/BanjaraHills/BanjaraHillsFaqsAndVisit';

export default function BanjaraHillsPage() {
    return (
        <>
            <Head>
                <title>Best Multi Speciality Hospital in Banjara Hills, Hyderabad | TX Hospitals</title>
                <meta 
                    name="description" 
                    content="Looking for the best hospital in Banjara Hills? TX Hospitals offers expert doctors, 24x7 emergency care, advanced ICU, cashless insurance, and specialist consultations. Book your free consultation today!" 
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SecondaryLayout>
                <main>
                    {/* First Section: Hero Section with Appointment Form & Background Image */}
                    <BanjaraHillsHero />
                    
                    {/* Second Section: Dynamic Stats Counter Bar */}
                    <BanjaraHillsStats />

                    {/* Third Section: Our Specialities Grid */}
                    <BanjaraHillsSpecialities />

                    {/* Fourth Section: Advanced Multispeciality Healthcare Grid */}
                    <BanjaraHillsAdvancedHealthcare />

                    {/* Fifth Section: Expert Doctors Row */}
                    <BanjaraHillsDoctors />

                    {/* Sixth Section: Treatments & Serving Areas Dual Grid */}
                    <BanjaraHillsTreatmentsAndAreas />

                    {/* Seventh Section: Why Choose TX Hospitals & Google Reviews */}
                    <BanjaraHillsWhyChooseUs />

                    {/* Eighth Section: FAQs & Live Location Visit Details Card */}
                    <BanjaraHillsFaqsAndVisit />
                </main>
            </SecondaryLayout>
        </>
    );
}
