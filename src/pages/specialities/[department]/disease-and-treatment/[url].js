import React from 'react';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import DTDDetailsPage from '@/components/DiseaseAndTreatment/DTDDetailsPage';

export default function DiseaseAndTreatmentPage() {
    return (
        <>
            <SecondaryLayout>
                <DTDDetailsPage />
            </SecondaryLayout>
        </>
    );
}