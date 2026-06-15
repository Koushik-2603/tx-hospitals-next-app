import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import MiyapurHero from '@/components/Miyapur/MiyapurHero';
import MiyapurAbout from '@/components/Miyapur/MiyapurAbout';
import MiyapurSpecialties from '@/components/Miyapur/MiyapurSpecialties';
import MiyapurRoboticKnee from '@/components/Miyapur/MiyapurRoboticKnee';
import MiyapurDoctors from '@/components/Miyapur/MiyapurDoctors';
import MiyapurWhyChoose from '@/components/Miyapur/MiyapurWhyChoose';
import MiyapurTestimonials from '@/components/Miyapur/MiyapurTestimonials';
import MiyapurBookConsultation from '@/components/Miyapur/MiyapurBookConsultation';
import MiyapurLocations from '@/components/Miyapur/MiyapurLocations';
import MiyapurBlogs from '@/components/Miyapur/MiyapurBlogs';
import MiyapurFAQ from '@/components/Miyapur/MiyapurFAQ';
import MiyapurFloatingBar from '@/components/Miyapur/MiyapurFloatingBar';

export default function MiyapurPage() {
    return (
        <>
            <Head>
                <title>Best Hospital in Miyapur, Hyderabad | TX Hospitals</title>
                <meta name="description" content="Your nearest multi-specialty hospital with expert care, 50+ doctors, and 24/7 emergency services. Serving Miyapur and nearby areas in Hyderabad." />
            </Head>
            <SecondaryLayout>
                <main>
                    {/* Hero Section */}
                    <MiyapurHero />

                    {/* About Section */}
                    <MiyapurAbout />

                    {/* Specialties Section */}
                    <MiyapurSpecialties />

                    {/* Robotic Knee Section */}
                    <MiyapurRoboticKnee />

                    {/* Doctors Section */}
                    <MiyapurDoctors />

                    {/* Why Choose Section */}
                    <MiyapurWhyChoose />

                    {/* Testimonials Section */}
                    <MiyapurTestimonials />

                    {/* Book Consultation Section */}
                    <MiyapurBookConsultation />

                    {/* Locations Section */}
                    <MiyapurLocations />

                    {/* Blogs Section */}
                    <MiyapurBlogs />

                    {/* FAQ Section */}
                    <MiyapurFAQ />
                </main>
                <MiyapurFloatingBar />
            </SecondaryLayout>
        </>
    );
}
