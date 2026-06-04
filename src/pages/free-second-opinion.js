import React from "react";
import Head from "next/head";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import SecondOpinionLanding from "@/components/SecondOpinion/Landing/SecondOpinionLanding";

export default function SecondOpinionPage() {
    return (
        <>
            <Head>
                <title>Expert Free Second Opinion Consultation in Hyderabad | TX Hospitals</title>
                <meta 
                    name="description" 
                    content="Get a free second opinion from our expert specialists at TX Hospitals. Make informed decisions about your health with accurate diagnosis and treatment guidance." 
                />
                <meta 
                    name="keywords" 
                    content="Second opinion consultation Hyderabad, Medical second opinion Hyderabad, Best specialists Hyderabad, TX Hospitals second opinion" 
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SecondaryLayout>
                <SecondOpinionLanding 
                    opinionType="First" 
                    customTitle="Your Health Decision Deserves the Right  Opinion"
                />
            </SecondaryLayout>
        </>
    );
}
