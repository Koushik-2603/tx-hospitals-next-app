import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import AcademicsSection1 from '@/components/Academics/AcademicsSection1';
import AcademicsSection2 from '@/components/Academics/AcademicsSection2';
import AcademicsSection3 from '@/components/Academics/AcademicsSection3';

export default function AcademicPage() {
    // Data to be passed to the child component
    const section1Data = {
        imageSrc: "", // Image will be added later
        altText: "Medical trainees at TX Hospitals academics program",
        width: 1600,
        height: 1100
    };

    return (
        <>
            <Head>
                <title>Academics | TX Hospitals</title>
                <meta name="description" content="TX Hospitals academics program for medical trainees." />
            </Head>
            <SecondaryLayout>
                {/* Passing data to child component */}
                <AcademicsSection1 {...section1Data} />
                <AcademicsSection2 />
                <AcademicsSection3 />
            </SecondaryLayout>
        </>
    );
}
