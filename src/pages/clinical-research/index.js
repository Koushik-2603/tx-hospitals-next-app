import Head from "next/head";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import ClinicalResearchLanding from "@/components/ClinicalResearch/ClinicalResearchLanding";

export default function ClinicalResearchPage() {
    return (
        <>
            <Head>
                <title>Clinical Research & Trials | TX Hospitals</title>
                <meta name="description" content="Discover advanced clinical research and trials at TX Hospitals. We conduct Phase II-IV studies, BA/BE, and observational research with ethical excellence and patient safety." />
            </Head>
            <SecondaryLayout hideFooter={true} isClinicalResearch={true}>
                <ClinicalResearchLanding />
            </SecondaryLayout>
        </>
    );
}
