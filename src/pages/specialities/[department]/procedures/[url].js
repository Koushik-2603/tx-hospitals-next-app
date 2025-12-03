import React from 'react';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import ProcedureDetailsPage from '@/components/Procedures/ProcedureDetailsPage';

export default function ProceduresPage() {
    return (
        <>
            <SecondaryLayout>
                <ProcedureDetailsPage />
            </SecondaryLayout>
        </>
    );
}