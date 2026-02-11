import React from "react";
import Head from "next/head";
import useIsMobile from "@/hooks/useIsMobile";

export default function VisitorsGuidelines() {
    const isMobile = useIsMobile();

    return (
        <>
            <Head>
                <title>Visitor Guidelines | TX Hospitals</title>
                <meta name="description" content="Visitors’ guidelines at TX hospitals include visiting hours, social distancing, and precautions that should be taken while visiting patients. We use a range of security measures including the use of CCTV cameras." />
                <meta name="keywords" content="tx hospitals in hyderabad, tx hospitals in uppal, tx hospitals in kachiguda, tx hospitals banjarahills, best multi speciality hospital in hyderabad,multi speciality hospital in uppal, multi speciality hospital in banjara hills,best patient care hospital,visitors guidelines." />
            </Head>

            {!isMobile && (
                <div className="w-full font-inter p-8 h-auto">
                    <p className="text-gray-700 text-lg font-bold mt-2 mb-6">
                        At TX Hospitals, we strive to create a welcoming and respectful environment for both patients and visitors. To ensure the comfort and safety of all, we have established clear guidelines for visiting hours, access, and conduct. These measures are designed to support the healing process while maintaining a peaceful atmosphere for everyone.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-3xl font-bold mb-4 text-pink-700">Visitor Guidelines: </h3>
                        <ul className="list-disc list-outside pl-10 text-black text-lg font-semibold space-y-3 marker:text-pink-700">
                            <li><span className="text-pink-700 font-bold">Visiting Hours:</span> Do not visit patients in wards and ICUs except during visiting hours. The visiting hours are between 5PM to 7PM.</li>
                            <li><span className="text-pink-700 font-bold">Visitor Passes:</span> Visitors are required to keep their visitor passes with them at all times. One visitor is permitted per individual pass.</li>
                            <li><span className="text-pink-700 font-bold">Child Restrictions:</span> No children under the age of 10 are allowed on the patient floors. No visitation by children under 10-12 years of age unless there is a necessity for care.</li>
                            <li><span className="text-pink-700 font-bold">Sanitize:</span> All visitors must sanitize their hands prior to and after their visit.</li>
                            <li><span className="text-pink-700 font-bold">Criteria Related to Patients:</span> Certain patients will not be in a position to have visitors because of treatment – patient-specific restrictions.</li>
                            <li><span className="text-pink-700 font-bold">ICU Access:</span> ICUs have limited access; only 1 or 2 visitors at a time.</li>
                            <li>Mobile Phones– Mobile phones are completely banned around patient monitoring systems, ICUs and in the reading-room of the radiology department.</li>
                            <li><span className="text-pink-700 font-bold">Health Aspects:</span> Do not visit when you have any cold, flu or infective symptoms. If someone coughs or sneezes, a mask is required.</li>
                        </ul>
                    </div>

                    <div className="mb-8 p-6 bg-pink-50 rounded-2xl border-l-4 border-pink-700">
                        <h3 className="text-3xl font-bold mb-4 text-pink-700">Visitor Dos and Don’ts: </h3>

                        <div className="grid grid-cols-2 gap-8 mt-6">
                            <div>
                                <span className="text-2xl font-bold mb-4 block text-green-700">Do’s: </span>
                                <ul className="list-disc list-outside pl-10 text-black text-lg font-semibold space-y-2 marker:text-green-700">
                                    <li>Obtain a visitor pass.</li>
                                    <li>Use hand sanitiser before and after making a visit.</li>
                                    <li>Provide other patients with privacy and space.</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-2xl font-bold mb-4 block text-red-700">Don’ts: </span>
                                <ul className="list-disc list-outside pl-10 text-black text-lg font-semibold space-y-2 marker:text-red-700">
                                    <li>The hospital has a no-smoking policy.</li>
                                    <li>Patients or visitors would not be permitted to bring in outside food.</li>
                                    <li>Children 10 years of age and older should not be brought unless they are the patient.</li>
                                    <li>Please do not come if you are unwell or have a cough or sneeze</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-3xl font-bold mb-4 text-pink-700">Visitor Policy</h3>
                        <ul className="list-disc list-outside pl-10 text-black text-lg font-semibold space-y-3 marker:text-pink-700">
                            <li><span className="text-pink-700 font-bold">Visiting hours:</span> There are visiting hours from 5.00PM – 7.00PM where visitors are able to visit.</li>
                            <li><span className="text-pink-700 font-bold">ICU Access:</span> Only one or two visitors at a time are allowed to enter the ICU.</li>
                            <li>Visitor Passes - One visitor per pass. Keep the pass visible the entire time while visiting.</li>
                            <li><span className="text-pink-700 font-bold">Kids:</span> No one under the age of 10–12 is allowed to visit unless it is necessary for patient care.</li>
                            <li><span className="text-pink-700 font-bold">Care for Visitors:</span> Remember to be aware of your valuables as well as to comply with every direction and sign issued by the hospital</li>
                        </ul>
                    </div>

                    <p className="text-gray-700 text-lg font-semibold mt-6 p-4 bg-gray-100 rounded-xl italic border-l-4 border-gray-400">
                        We appreciate your compliance with these guidelines. Following visitor policies ensure that patients, families and hospital staff can be in a respectful, safe and comfortable environment. TX Hospitals appreciates your patience & cooperation while visiting Hospitals.
                    </p>
                </div>
            )}

            {isMobile && (
                <div className="w-full font-inter mt-4 px-4 pb-10 h-auto">
                    <p className="text-gray-700 text-sm text-center font-bold mb-6 leading-relaxed">
                        At TX Hospitals, we strive to create a welcoming and respectful environment for both patients and visitors. To ensure the comfort and safety of all, we have established clear guidelines for visiting hours, access, and conduct. These measures are designed to support the healing process while maintaining a peaceful atmosphere for everyone.
                    </p>

                    <h3 className="text-xl font-bold text-center mb-4 text-pink-700 underline underline-offset-4">Visitor Guidelines</h3>
                    <ul className="list-disc list-outside pl-6 pr-2 text-black text-xs font-semibold space-y-3 marker:text-pink-700 mb-8">
                        <li><span className="text-pink-700 font-bold">Visiting Hours:</span> Do not visit patients in wards and ICUs except during visiting hours. The visiting hours are between 5PM to 7PM.</li>
                        <li><span className="text-pink-700 font-bold">Visitor Passes:</span> Visitors are required to keep their visitor passes with them at all times. One visitor is permitted per individual pass.</li>
                        <li><span className="text-pink-700 font-bold">Child Restrictions:</span> No children under the age of 10 are allowed on the patient floors. No visitation by children under 10-12 years of age unless there is a necessity for care.</li>
                        <li><span className="text-pink-700 font-bold">Sanitize:</span> All visitors must sanitize their hands prior to and after their visit.</li>
                        <li><span className="text-pink-700 font-bold">Criteria Related to Patients:</span> Certain patients will not be in a position to have visitors because of treatment – patient-specific restrictions.</li>
                        <li><span className="text-pink-700 font-bold">ICU Access:</span> ICUs have limited access; only 1 or 2 visitors at a time.</li>
                        <li>Mobile Phones– Mobile phones are completely banned around patient monitoring systems, ICUs and in the reading-room of the radiology department.</li>
                        <li><span className="text-pink-700 font-bold">Health Aspects:</span> Do not visit when you have any cold, flu or infective symptoms. If someone coughs or sneezes, a mask is required.</li>
                    </ul>

                    <div className="bg-pink-50 p-4 rounded-xl mb-8">
                        <h3 className="text-lg font-bold text-center mb-4 text-pink-700">Visitor Dos and Don’ts:</h3>

                        <div className="mb-4">
                            <span className="text-sm font-bold text-green-700 block mb-2">Do’s: </span>
                            <ul className="list-disc list-outside pl-6 text-black text-[11px] font-semibold space-y-1">
                                <li>Obtain a visitor pass.</li>
                                <li>Use hand sanitiser before and after making a visit.</li>
                                <li>Provide other patients with privacy and space.</li>
                            </ul>
                        </div>

                        <div>
                            <span className="text-sm font-bold text-red-700 block mb-2">Don’ts: </span>
                            <ul className="list-disc list-outside pl-6 text-black text-[11px] font-semibold space-y-1">
                                <li>The hospital has a no-smoking policy.</li>
                                <li>Patients or visitors would not be permitted to bring in outside food.</li>
                                <li>Children 10 years of age and older should not be brought unless they are the patient.</li>
                                <li>Please do not come if you are unwell or have a cough or sneeze</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-center mb-4 text-pink-700 underline underline-offset-4">Visitor Policy</h3>
                    <ul className="list-disc list-outside pl-6 pr-2 text-black text-xs font-semibold space-y-3 marker:text-pink-700 mb-8">
                        <li><span className="text-pink-700 font-bold">Visiting hours:</span> There are visiting hours from 5.00PM – 7.00PM where visitors are able to visit.</li>
                        <li><span className="text-pink-700 font-bold">ICU Access:</span> Only one or two visitors at a time are allowed to enter the ICU.</li>
                        <li>Visitor Passes - One visitor per pass. Keep the pass visible the entire time while visiting.</li>
                        <li><span className="text-pink-700 font-bold">Kids:</span> No one under the age of 10–12 is allowed to visit unless it is necessary for patient care.</li>
                        <li><span className="text-pink-700 font-bold">Care for Visitors:</span> Remember to be aware of your valuables as well as to comply with every direction and sign issued by the hospital</li>
                    </ul>

                    <p className="text-gray-700 text-xs text-center font-semibold bg-gray-50 p-3 rounded-lg border border-gray-200">
                        We appreciate your compliance with these guidelines. Following visitor policies ensure that patients, families and hospital staff can be in a respectful, safe and comfortable environment. TX Hospitals appreciates your patience & cooperation while visiting Hospitals.
                    </p>
                </div>
            )}
        </>
    );
}
