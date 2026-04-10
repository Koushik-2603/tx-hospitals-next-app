import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import SearchResults from "@/components/Search/SearchResults";

export default function SearchPage() {
    const router = useRouter();
    const { q = "" } = router.query;

    return (
        <>
            <Head>
                <title>
                    {q ? `Search: "${q}" – TX Hospitals` : "Search – TX Hospitals"}
                </title>
                <meta
                    name="description"
                    content="Search for diseases, treatments, surgeries, blogs, health packages and procedures at TX Hospitals Hyderabad."
                />
                <meta
                    name="keywords"
                    content="TX Hospitals search, diseases treatments Hyderabad, hospital search"
                />
            </Head>
            <SecondaryLayout>
                <SearchResults initialQuery={q} />
            </SecondaryLayout>
        </>
    );
}
