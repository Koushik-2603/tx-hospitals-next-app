import React from 'react';
import HeroSection from './HeroSection';
import SpecialtiesSection from './SpecialtiesSection';
import DoctorsSection from './DoctorsSection';
import SecondOpinionSection from './SecondOpinionSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';

const BranchSpecialtiesLanding = ({ location }) => {
    return (
        <div className="w-full flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {/* 1. Hero Section */}
            <HeroSection location={location} />

            {/* 2. Specialties Section */}
            <SpecialtiesSection location={location} />

            {/* 3. Doctors Section */}
            <DoctorsSection location={location} />

            {/* 4. Second Opinion Support Section */}
            <SecondOpinionSection location={location} />

            {/* 5. CTA Section */}
            <CTASection location={location} />

            {/* 6. FAQ Section */}
            <FAQSection location={location} />

        </div>
    );
};

export default BranchSpecialtiesLanding;
