import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import HeroSection from '@/components/BranchSpecialityLanding/HeroSection';
import TreatmentsSection from '@/components/BranchSpecialityLanding/TreatmentsSection';
import ConditionsTreatedSection from '@/components/BranchSpecialityLanding/ConditionsTreatedSection';
import SpecialistsSection from '@/components/BranchSpecialityLanding/SpecialistsSection';
import DiagnosticsAndWhenToSeeSection from '@/components/BranchSpecialityLanding/DiagnosticsAndWhenToSeeSection';
import CTASection from '@/components/BranchSpecialityLanding/CTASection';
import FAQSection from '@/components/BranchSpecialityLanding/FAQSection';
import CONFIG from '@/config';

const BranchSpecialtyPage = ({ pageData, error }) => {
    const router = useRouter();
    const { url: location, speciality } = router.query;

    useEffect(() => {
        // Update browser url to match canonical API seo url
        if (pageData) {
            const canonicalUrl = pageData?.seo?.url || pageData?.seo?.Url || pageData?.seoUrl;
            if (canonicalUrl) {
                window.history.replaceState(null, '', canonicalUrl);
            }
        }
    }, [pageData]);

    if (error || !pageData) {
        return (
            <>
                <Navbar />
                <div className="w-full min-h-[60vh] flex items-center justify-center bg-gray-50">
                    <p className="text-xl text-gray-500 font-semibold font-['Poppins']">Specialty page data not found.</p>
                </div>
                <Footer />
            </>
        );
    }

    const defaultTitle = speciality ? `${speciality} at TX Hospitals ${location}` : 'Specialty | TX Hospitals';
    const defaultDescription = `Expert ${speciality} care at TX Hospitals ${location}.`;

    const content = pageData.PageData || {};

    return (
        <>
            <Head>
                <title>{content?.seo?.title || defaultTitle}</title>
                <meta name="description" content={content?.seo?.metaDescription || defaultDescription} key="description" />
                {content?.seo?.keywords && <meta name="keywords" content={content.seo.keywords} key="keywords" />}
            </Head>

            <SecondaryLayout>

                <main className="w-full bg-white font-['Poppins']">
                    {/* 1. Hero / Header Section */}
                    <HeroSection pageData={content} location={location} speciality={speciality} />

                    {/* 2. Treatments Section */}
                    {content.treatments && (
                        <TreatmentsSection data={content.treatments} />
                    )}

                    {/* 3. Conditions Treated Section */}
                    {content.conditionsTreated && (
                        <ConditionsTreatedSection data={content.conditionsTreated} />
                    )}

                    {/* 4. Specialists Section */}
                    {content.specialists && (
                        <SpecialistsSection data={content.specialists} location={location} speciality={speciality} />
                    )}

                    {/* 5. Diagnostics and When To See Section */}
                    {(content.diagnostics || content.whenToSee) && (
                        <DiagnosticsAndWhenToSeeSection diagnostics={content.diagnostics} whenToSee={content.whenToSee} speciality={speciality} />
                    )}

                    {/* 6. CTA Section */}
                    {content.cta && (
                        <CTASection data={content.cta} />
                    )}

                    {/* 7. FAQ Section */}
                    {content.faqs && (
                        <FAQSection data={content.faqs} />
                    )}
                </main>
            </SecondaryLayout>
        </>
    );
};

export async function getServerSideProps(context) {
    const { url: location, speciality } = context.params;
    let pageData = null;
    let error = false;

    try {
        const canonicalPath = `/${location}/specialties/${speciality}/`;
        const apiUrl = `${CONFIG.API_BASE_URL}/api/speciality-landing-pages/by-url?url=${encodeURIComponent(canonicalPath)}`;
        const res = await fetch(apiUrl);
        if (res.ok) {
            pageData = await res.json();
        } else {
            error = true;
        }
    } catch (err) {
        console.error("Error fetching specialty landing page data:", err);
        error = true;
    }

    return {
        props: {
            pageData,
            error
        }
    };
}

export default BranchSpecialtyPage;
