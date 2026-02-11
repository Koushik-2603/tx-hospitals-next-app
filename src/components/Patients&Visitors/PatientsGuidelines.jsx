import React from "react";
import Head from "next/head";
import useIsMobile from "@/hooks/useIsMobile";

export default function PatientsGuidelines() {
    const isMobile = useIsMobile();

    return (
        <>
            <Head>
                <title>Top Multispecialty Hospital in Hyderabad | TX Hospitals</title>
                <meta name="description" content="Important guidelines for patients at TX Hospitals. Find information on patient rights, responsibilities, and guidelines for a smooth hospital experience." />
                <meta name="keywords" content="tx hospitals in hyderabad, tx hospitals in uppal, tx hospitals in kachiguda, tx hospitals banjarahills, best multi speciality hospital in hyderabad, patient guidelines, patient rights." />
            </Head>

            {!isMobile && (
                <div className="w-full font-inter p-8 h-auto">
                    <p className="text-gray-700 text-lg font-bold mt-2 mb-8 leading-relaxed">
                        Welcome to the Patient and Visitor Information at TX Hospitals. We want your experience with us to be as smooth and comfortable as possible for you and your loved ones. We have outlined important information on your rights and responsibilities as well as some guidance whilst you are with us here. We aim to deliver the best care we can give, in a respectful, open and understanding atmosphere. Below are some key points to read through to ensure we serve you better.
                    </p>

                    <div className="mb-10 p-6 bg-pink-50 rounded-2xl border-l-4 border-pink-700 shadow-sm">
                        <h3 className="text-3xl font-bold mb-6 text-pink-700">Patient Guidelines: </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 list-disc list-outside pl-6 text-black text-lg font-semibold marker:text-pink-700">
                            <li>Ask Questions: Use the opportunity to ask questions regarding your treatment plan, medications, etc. with nursing.</li>
                            <li>Be Punctual: Arrive on time for scheduled consultations to avoid delays in your treatment.</li>
                            <li>Accurate Information: Make sure all personal details like Name, Mobile Number, Date Of Birth, Address etc., are correct and updated.</li>
                            <li>Keep Healthcare Providers Informed: Report back to your doctors about how the treatment is working for you.</li>
                            <li>Respect and Courtesy: Always act professionally and respectfully towards the staff of the hospital.</li>
                            <li>Understand Consent: Review and fully understand any instructions or forms before signing consent documents.</li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-3xl font-bold mb-6 text-pink-700">Patient Rights and Responsibilities: </h3>
                        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                            <ul className="list-disc list-outside pl-10 pr-6 py-6 text-black text-lg font-semibold space-y-4 marker:text-pink-700">
                                <li><span className="text-pink-700 font-bold">Right to information:</span> You have the right to get clear and precise information from your doctors regarding your present health condition, treatments and prognosis.</li>
                                <li><span className="text-pink-700 font-bold">Right to Informed Decision-Making:</span> You have the right to ask questions and make informed decisions about your treatment, as well as involve your family or a loved one in the process.</li>
                                <li><span className="text-pink-700 font-bold">Right to Change Your Mind:</span> You are under no obligation to provide consent, and may elect to modify, postpone, or reverse your decisions at any time — before but also during or after the event have taken place.</li>
                                <li>Your personal and medical information is confidential and may be disclosed only as required by law or with your consent.</li>
                                <li><span className="text-pink-700 font-bold">Privacy in Treatment:</span> You have the right to privacy in examinations and procedures.</li>
                                <li>Equal Care – You will be treated without bias with dignity and respect without regard to age, gender, race, ethnicity, disability or other factors.</li>
                                <li><span className="text-pink-700 font-bold">Transparent Treatment Scenarios:</span> You deserve honest answers about the price of your treatment.</li>
                                <li><span className="text-pink-700 font-bold">Right to Refusal of Recording:</span> In the event that any filming/photography/recording is needed for any educational or research purpose, your consent will be sought beforehand.</li>
                                <li><span className="text-pink-700 font-bold">Visitor Guidelines:</span> We welcome visitors and ask that they kindly respect visiting hours & other patient’s privacy.</li>
                                <li><span className="text-pink-700 font-bold">Stick to the Treatment Plan:</span> For the best recovery progress, follow the treatment instructions given by your health care provider.</li>
                                <li><span className="text-pink-700 font-bold">Read All Forms:</span> Before you sign anything medical, read it and make sure you understand it.</li>
                                <li><span className="text-pink-700 font-bold">Mobile Devices:</span> Just use mobile but no loud calls which will disturb others.</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-gray-700 text-lg font-semibold mt-6 p-4 bg-gray-100 rounded-xl italic border-l-4 border-gray-400">
                        These guidelines aim to create a safe, respectful, and efficient environment for all patients, ensuring the highest standard of care throughout your stay.
                    </p>
                </div>
            )}

            {isMobile && (
                <div className="w-full font-inter mt-4 px-4 pb-10 h-auto">
                    <p className="text-gray-700 text-sm text-center font-bold mb-6 leading-relaxed">
                        Welcome to the Patient and Visitor Information at TX Hospitals. We want your experience with us to be as smooth and comfortable as possible for you and your loved ones. We have outlined important information on your rights and responsibilities as well as some guidance whilst you are with us here. We aim to deliver the best care we can give, in a respectful, open and understanding atmosphere. Below are some key points to read through to ensure we serve you better.
                    </p>

                    <h3 className="text-xl font-bold text-center mb-4 text-pink-700 underline underline-offset-4">Patient Guidelines</h3>
                    <div className="bg-pink-50 p-4 rounded-xl mb-8">
                        <ul className="list-disc list-outside pl-6 text-black text-xs font-semibold space-y-3 marker:text-pink-700">
                            <li><span className="font-bold">Ask Questions:</span> Regarding treatment plan & medications.</li>
                            <li><span className="font-bold">Be Punctual:</span> Arrive on time for consultations.</li>
                            <li><span className="font-bold">Details:</span> Ensure Name, Phone, and Address are correct.</li>
                            <li><span className="font-bold">Feedback:</span> Inform doctors how treatment is working.</li>
                            <li><span className="font-bold">Courtesy:</span> Be respectful towards hospital staff.</li>
                            <li><span className="font-bold">Consent:</span> Read all forms before signing.</li>
                        </ul>
                    </div>

                    <h3 className="text-xl font-bold text-center mb-4 text-pink-700 underline underline-offset-4">Rights & Responsibilities</h3>
                    <div className="bg-white border border-gray-100 p-4 rounded-xl mb-8 shadow-sm">
                        <ul className="list-disc list-outside pl-6 text-black text-xs font-semibold space-y-3 marker:text-pink-700">
                            <li><span className="text-pink-700 font-bold">Right to information:</span> You have the right to get clear and precise information from your doctors regarding your present health condition, treatments and prognosis.</li>
                            <li><span className="text-pink-700 font-bold">Right to Informed Decision-Making:</span> You have the right to ask questions and make informed decisions about your treatment, as well as involve your family or a loved one in the process.</li>
                            <li><span className="text-pink-700 font-bold">Right to Change Your Mind:</span> You are under no obligation to provide consent, and may elect to modify, postpone, or reverse your decisions at any time — before but also during or after the event have taken place.</li>
                            <li>Your personal and medical information is confidential and may be disclosed only as required by law or with your consent.</li>
                            <li><span className="text-pink-700 font-bold">Privacy in Treatment:</span> You have the right to privacy in examinations and procedures.</li>
                            <li>Equal Care – You will be treated without bias with dignity and respect without regard to age, gender, race, ethnicity, disability or other factors.</li>
                            <li><span className="text-pink-700 font-bold">Transparent Treatment Scenarios:</span> You deserve honest answers about the price of your treatment.</li>
                            <li><span className="text-pink-700 font-bold">Right to Refusal of Recording:</span> In the event that any filming/photography/recording is needed for any educational or research purpose, your consent will be sought beforehand.</li>
                            <li><span className="text-pink-700 font-bold">Visitor Guidelines:</span> We welcome visitors and ask that they kindly respect visiting hours & other patient’s privacy.</li>
                            <li><span className="text-pink-700 font-bold">Stick to the Treatment Plan:</span> For the best recovery progress, follow the treatment instructions given by your health care provider.</li>
                            <li><span className="text-pink-700 font-bold">Read All Forms:</span> Before you sign anything medical, read it and make sure you understand it.</li>
                            <li><span className="text-pink-700 font-bold">Mobile Devices:</span> Just use mobile but no loud calls which will disturb others.</li>
                        </ul>
                    </div>

                    <p className="text-gray-700 text-xs text-center font-semibold bg-gray-50 p-3 rounded-lg border border-gray-200">
                        These guidelines aim to create a safe, respectful, and efficient environment for all patients, ensuring the highest standard of care throughout your stay.
                    </p>
                </div >
            )
            }
        </>
    );
}
