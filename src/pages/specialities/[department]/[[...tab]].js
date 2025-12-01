"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile";
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import COEOverview from "@/components/COE/COEOverview";
import DiseasesTreatments from "@/components/COE/DiseasesTreatments";
import Diagnosties from "@/components/COE/Diagnosties";
import Procedures from "@/components/COE/Procedures";
import Doctors from "@/components/COE/Doctors";
import { getDepartmentDetails } from "@/utils/departmentUtils";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function CenterOfExcellencePage() {
    const router = useRouter();
    const { department, tab } = router.query;
    const { title, image } = getDepartmentDetails(department);
    const currentTab = Array.isArray(tab) ? tab[0] : "";

    const isMobile = useIsMobile();
    const [selectedTab, setSelectedTab] = useState("");

    useEffect(() => {
        if (!router.isReady) return;
        const current = Array.isArray(router.query.tab) ? router.query.tab[0] : router.query.tab || "";
        setSelectedTab(current);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [router.isReady, router.query.tab]);


    const handleTabClick = (key) => {
        setSelectedTab(key);
        router.push(`/specialities/${department}/${key ? `${key}/` : ""}`);
    };

    const tabs = [
        { name: "Overview", key: "" },
        { name: "Diseases and Treatment", key: "disease-and-treatment" },
        { name: "Diagnostics", key: "diagnostics" },
        { name: "Procedures", key: "procedures" },
        { name: "Doctors", key: "our-clinical-team" },
    ];

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Specialities", href: "/specialities" },
        { label: title },
    ];

    return (
        <SecondaryLayout>
            {!isMobile ? (
                <div className="mt-10 font-inter mx-[5%]">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 className="text-4xl font-bold text-pink-700 text-center">{title}</h1>
                    <img src={image} alt={title} className="w-full h-full mt-2" />
                    <motion.div
                        className="flex items-center justify-center gap-10 mx-[1%] mt-6"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {tabs.map(({ name, key }, index) => (
                            <motion.button
                                key={key}
                                onClick={() => handleTabClick(key)}
                                className="relative w-auto border border-gray-800 font-semibold text-black text-2xl px-4 py-1 rounded-2xl overflow-hidden whitespace-nowrap"
                                initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                            >
                                {selectedTab === key && (
                                    <motion.div
                                        className="absolute inset-0 bg-pink-700"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ type: "tween", duration: 0.4 }}
                                    />
                                )}
                                <motion.span
                                    className={`relative text-lg ${selectedTab === key ? "text-white" : "text-black"
                                        }`}
                                >
                                    {name}
                                </motion.span>
                            </motion.button>
                        ))}
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {selectedTab === "" && <COEOverview />}
                        {selectedTab === "disease-and-treatment" && <DiseasesTreatments />}
                        {selectedTab === "diagnostics" && <Diagnosties />}
                        {selectedTab === "procedures" && <Procedures />}
                        {selectedTab === "our-clinical-team" && <Doctors />}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="-mt-4 font-inter">
                    <Breadcrumb items={breadcrumbItems} />
                    <h1 className="text-2xl font-bold text-pink-700 text-center">{title}</h1>
                    <img src={image} alt={title} className="w-full h-full" />
                    <motion.div
                        className="grid grid-cols-2 gap-2 m-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {tabs.map(({ name, key }, index) => (
                            <motion.button
                                key={key}
                                onClick={() => handleTabClick(key)}
                                className={`relative border border-gray-800 font-semibold text-black text-sm px-1 py-1 rounded-2xl overflow-hidden 
                ${selectedTab === key ? "bg-pink-700 text-white" : ""}
                ${index === tabs.length - 1 && tabs.length % 2 !== 0 ? "col-span-2 justify-self-center w-1/2" : ""}
            `}
                                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            >
                                <motion.span
                                    className={`relative ${selectedTab === key ? "text-white" : "text-black"
                                        }`}
                                >
                                    {name}
                                </motion.span>
                            </motion.button>
                        ))}
                    </motion.div>
                    <AnimatePresence mode="wait">
                        {selectedTab === "" && <COEOverview />}
                        {selectedTab === "disease-and-treatment" && <DiseasesTreatments />}
                        {selectedTab === "diagnostics" && <Diagnosties />}
                        {selectedTab === "procedures" && <Procedures />}
                        {selectedTab === "our-clinical-team" && <Doctors />}
                    </AnimatePresence>
                </div>
            )}
        </SecondaryLayout>
    );
}