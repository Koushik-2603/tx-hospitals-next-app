import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@/components/HomePage/HospitalNavbar';
import Footer from '@/components/HomePage/Footer';
import BranchSpecialityLanding from '@/components/BranchSpecialityLanding/BranchSpecialityLanding';

const BranchSpecialtyPage = () => {
    const router = useRouter();
    // Since we are inside [url] directory, Next.js params provides url
    const { url: location, speciality } = router.query;

    return (
        <>
            <Head>
                <title>{speciality ? `${speciality} at TX Hospitals ${location}` : 'Specialty | TX Hospitals'}</title>
                <meta name="description" content={`Expert ${speciality} care at TX Hospitals ${location}.`} />
            </Head>

            <Navbar />

            <main>
                {/* We render the component only when the router query parameters are available */}
                {location && speciality && (
                    <BranchSpecialityLanding location={location} speciality={speciality} />
                )}
            </main>

            <Footer />
        </>
    );
};

export default BranchSpecialtyPage;
