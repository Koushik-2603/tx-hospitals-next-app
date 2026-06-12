"use client";
import CRHero from "./CRHero";
import CRTherapeutics from "./CRTherapeutics";
import CRCapabilities from "./CRCapabilities";
import CRWhyChooseUs from "./CRWhyChooseUs";
import CRRegulatory from "./CRRegulatory";
import CRPortfolio from "./CRPortfolio";
import CRFAQ from "./CRFAQ";
import CRChairmanMessage from "./CRChairmanMessage";

export default function ClinicalResearchLanding() {
    return (
        <main className="w-full flex flex-col font-inter -mt-2 md:mt-4">
            <CRHero />
            <CRTherapeutics />
            <div className="mb-5 md:mb-8">
                <CRCapabilities />
            </div>
            <div className="mb-5 md:mb-8">
                <CRWhyChooseUs />
            </div>
            <CRRegulatory />
            <CRPortfolio />
            <CRFAQ />
            <div className="mb-2 md:mb-4">
                <CRChairmanMessage />
            </div>
        </main>
    );
}
