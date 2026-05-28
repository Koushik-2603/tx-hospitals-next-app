import React from "react";
import Head from "next/head";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import SecondOpinionLanding from "@/components/SecondOpinion/Landing/SecondOpinionLanding";

export default function SecondOpinionPage() {
    return (
        <>
            <Head>
                <title>Expert First Opinion Consultation in Hyderabad | TX Hospitals</title>
                <meta 
                    name="description" 
                    content="Your health decision deserves the right first opinion. Get expert evaluation, accurate diagnosis and the right treatment guidance from our senior specialists at TX Hospitals." 
                />
                <meta 
                    name="keywords" 
                    content="First opinion consultation Hyderabad, Medical first opinion Hyderabad, Best specialists Hyderabad, TX Hospitals first opinion" 
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <SecondaryLayout>
                <SecondOpinionLanding 
                    opinionType="First" 
                    customTitle="Your Health Decision Deserves the Right First Opinion"
                />
            </SecondaryLayout>
        </>
    );
}
