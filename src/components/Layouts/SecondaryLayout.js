import React, { useEffect } from 'react';
import HospitalNavbar from '@/components/HomePage/HospitalNavbar';
import CallbackFooterSection from '@/components/HomePage/CallbackFooterSection';
import SocialSidebar from '@/components/HomePage/SocialSidebar';

export default function SecondaryLayout({ children }) {

    return (
        <>
            <HospitalNavbar
                variant="secondary"
            />
            <SocialSidebar />
            <main className="pt-24">
                {children}
            </main>
            <CallbackFooterSection />
        </>
    );
}
