// src/components/Layout.js
import React from 'react';
import Header from '@/components/HomePage/Header';
import Footer from '@/components/HomePage/Footer';
import SEO from '@/utils/SEO';

export default function Layout({ children }) {
    return (
        <>
            <SEO />
            <Header />
            <main className="pt-[93px] md:pt-[34px]">
                {children}
            </main>
            <Footer />
        </>
    );
}
