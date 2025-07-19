// src/pages/index.js
import BannerSlider from '@/components/HomePage/BannerSlider';
import ClinicalExcellenceBanner from '@/components/HomePage/ClinicalExcellenceBanner';
import FAQ from '@/components/HomePage/FAQ';
import ImageGallery from '@/components/HomePage/ImageGallery';
import Layout from '@/components/Layouts/Layout';
import Locations from '@/components/HomePage/Locations';
import Talks_Blogs from '@/components/HomePage/talks-blogs';
import TestimonialBanner from '@/components/HomePage/TestimonialBanner';
import '@/styles/globals.css';

export default function HomePage() {
    return (
        <Layout>
            <BannerSlider />
            <ImageGallery />
            <ClinicalExcellenceBanner />
            <Talks_Blogs />
            <TestimonialBanner />
            <FAQ />
            <Locations />
        </Layout>
    );
}
