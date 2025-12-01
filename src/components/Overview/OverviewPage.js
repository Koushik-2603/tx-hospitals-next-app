"use client";
import OverviewSection from '@/components/Overview/OverviewSection';
import ComprehensiveHealthcare from '@/components/Overview/ComprehensiveHealthcare';
import DiagnosticSection from '@/components/Overview/DiagnosticSection';
import SurgicalSection from '@/components/Overview/SurgicalSection';
import RehabilitationServices from '@/components/Overview/RehabilitationServices';
import MissionVision from '@/components/Overview/MissionVision';

export default function OverviewPage() {
    return (
        <>
            <OverviewSection />
            <ComprehensiveHealthcare />
            <DiagnosticSection />
            <SurgicalSection />
            <RehabilitationServices />
            <MissionVision />
        </>
    );
}