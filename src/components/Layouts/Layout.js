import React from 'react';
import Header from '@/components/HomePage/Header';
import CallbackFooterSection from '@/components/HomePage/CallbackFooterSection';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <CallbackFooterSection />
        </>
    );
}
