"use client";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function ComprehensiveHealthcare() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <section className="w-full bg-white px-2">
                    <h2 className="text-xl font-semibold text-center text-pink-700 leading-snug">
                        Comprehensive Healthcare Services
                    </h2>
                    <div className="py-2 text-gray-900 text-xs leading-relaxed text-justify">
                        <p>
                            TX Hospitals provides an extensive range of medical, surgical, diagnostic,
                            and rehabilitative services — ensuring all healthcare needs are met under one
                            roof. With advanced technology and expert specialists, we deliver precision-
                            driven treatments across various disciplines.
                        </p>
                    </div>
                    <div className="w-full text-gray-800 text-xs leading-relaxed">
                        <h3 className="font-bold text-base mb-1">Core Specialties:</h3>
                        <p><strong>Cardiac Sciences –</strong> Advanced care for heart diseases including angioplasty & bypass surgery.</p>
                        <p><strong>Neurosciences –</strong> Treatment for stroke, epilepsy, spine disorders & neurosurgeries.</p>
                        <p><strong>Renal Sciences –</strong> Nephrology, dialysis & kidney transplantation.</p>
                        <p><strong>Gastroenterology & Hepatology –</strong> Digestive and liver disease management.</p>
                        <div className="float-right w-[160px]">
                            <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/Overview/Comprehensive Image Image.webp"
                                    alt="Comprehensive Healthcare Services"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <p><strong>Oncology –</strong> Complete cancer care with medical, surgical & radiation treatments.</p>
                        <p><strong>Orthopaedics & Sports Medicine –</strong> Joint replacements & sports injury care.</p>
                        <p><strong>Robotic Surgery –</strong> Minimally invasive precision procedures.</p>
                        <p><strong>Mother & Child Care –</strong> Gynecology, pregnancy care & NICU facilities.</p>
                        <p><strong>Pulmonology –</strong> Lung disease management & bronchoscopy.</p>
                        <p><strong>Endocrinology & Diabetes –</strong> Hormonal & diabetic care.</p>
                        <p><strong>Transplant Medicine –</strong> Liver, kidney & bone marrow transplants.</p>
                        <p><strong>ENT –</strong> Sinus surgeries, cochlear implants & voice disorder treatments.</p>
                        <p className="mb-4"><strong>Rheumatology –</strong> Autoimmune disease management.</p>
                        <div className="clear-both"></div>
                    </div>
                </section>
            ) : (
                <section className="w-full bg-white">
                    <div className="max-w-7xl mx-auto px-12">
                        <h2 className="text-4xl font-semibold text-center text-pink-700">
                            Comprehensive Healthcare Services
                        </h2>
                        <div className="max-w-6xl mx-auto px-12 py-6 text-gray-950 text-justify">
                            <p>
                                TX Hospitals provides an extensive range of medical, surgical, diagnostic, and rehabilitative services, ensuring that all healthcare needs are met under one roof. With cutting-edge technology, expert specialists, and patient-centric care, we deliver precision-driven treatments across various disciplines.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 px-14 gap-8 items-start">
                            <div className="space-y-3 text-gray-800">
                                <h3 className="font-bold text-lg mb-2">Core Specialties:</h3>
                                <p>
                                    <strong>Cardiac Sciences –</strong> Advanced care for heart
                                    diseases, including angioplasty, bypass surgery, and heart failure
                                    management.
                                </p>
                                <p>
                                    <strong>Neurosciences –</strong> Diagnosis and treatment of stroke,
                                    epilepsy, spine disorders, and neurosurgeries.
                                </p>
                                <p>
                                    <strong>Renal Sciences –</strong> Specialized nephrology, dialysis,
                                    and kidney transplantation services.
                                </p>
                                <p>
                                    <strong>Gastroenterology & Hepatology –</strong> Management of
                                    digestive disorders, liver diseases, and minimally invasive
                                    endoscopic procedures.
                                </p>
                                <p>
                                    <strong>Oncology –</strong> Comprehensive cancer treatment with
                                    medical, surgical, and radiation oncology.
                                </p>
                                <p>
                                    <strong>Orthopaedics & Sports Medicine –</strong> Joint
                                    replacements, arthroscopic surgeries, and sports injury
                                    rehabilitation.
                                </p>
                                <p>
                                    <strong>Robotic Surgery –</strong> Minimally invasive procedures
                                    for better precision and faster recovery.
                                </p>
                                <p>
                                    <strong>Mother & Child Care –</strong> Obstetrics, gynecology,
                                    high-risk pregnancy management, and neonatal intensive care.
                                </p>
                                <p>
                                    <strong>Pulmonology –</strong> Advanced lung disease management,
                                    bronchoscopy, and sleep studies.
                                </p>
                                <p>
                                    <strong>Endocrinology & Diabetes Care –</strong> Hormonal disorder
                                    treatments, diabetic care, and metabolic disease management.
                                </p>
                                <p>
                                    <strong>Transplant Medicine –</strong> Expert liver, kidney, and
                                    bone marrow transplantation services.
                                </p>
                                <p>
                                    <strong>ENT (Ear, Nose & Throat) –</strong> Advanced sinus
                                    surgeries, cochlear implants, and voice disorder treatments.
                                </p>
                                <p>
                                    <strong>Rheumatology & Immunology –</strong> Specialized care for
                                    autoimmune diseases like arthritis, lupus, and vasculitis.
                                </p>
                            </div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/assets/Overview/Comprehensive Image Image.webp"
                                    alt="Comprehensive Healthcare Services"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}