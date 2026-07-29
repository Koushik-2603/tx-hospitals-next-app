import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import BranchSpecialtiesLanding from '@/components/BranchSpecialtiesLanding/BranchSpecialtiesLanding';

export default function BranchSpecialtiesPage({ location }) {
    const formattedLocation = location
        ? location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : 'Miyapur';

    return (
        <>
            <Head>
                <title>Specialties at TX Hospitals {formattedLocation}</title>
                <meta name="description" content={`Explore all the medical specialties and advanced treatments available at TX Hospitals ${formattedLocation}.`} />
            </Head>
            <SecondaryLayout>
                <BranchSpecialtiesLanding location={location} />
            </SecondaryLayout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { url: location } = context.params;

    // Optional: Validate location or fetch global list of specialties for this branch
    // For now, we simply pass down the location identifier

    return {
        props: {
            location: location || null,
        }
    };
}
