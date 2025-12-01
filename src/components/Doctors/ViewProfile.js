import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";
import FAQSchema from "@/utils/FAQSchema";
import Breadcrumb from "@/components/Common/Breadcrumb";
import DoctorDetails from "@/components/Doctors/DoctorDetails";
import AppointmentModal from "@/components/Doctors/AppointmentModal";

export default function ViewProfile({ doctorData }) {
    const router = useRouter();
    const isMobile = useIsMobile();
    const [openIndex, setOpenIndex] = useState(null);
    const [open, setOpen] = useState(false);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (!doctorData) {
        return (
            <div className="flex flex-row justify-center items-center mt-20 mb-4 gap-2">
                <div className="w-8 h-8 border-2 border-pink-700 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-pink-700 text-lg font-medium animate-pulse">
                    Loading docotr details...
                </div>
            </div>
        );
    }

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Doctors", href: "/find-doctor/" },
        { label: doctorData?.name },
    ];

    return (
        <>
            <Head>
                <title>{doctorData?.seoTitle}</title>
                <meta name="description" content={doctorData?.metaDescription} />
                <meta name="keywords" content={doctorData?.metaKeywords} />
            </Head>

            {/* PC VIEW */}
            {isMobile ? (
                <div className="font-inter -mt-6">
                    {/* TOP SECTION */}
                    <section className="w-full bg-[#f4f4f4] py-4 px-3">
                        <Breadcrumb items={breadcrumbItems} />
                        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 mt-4">
                            <div className="relative w-[230px] h-[230px] flex-shrink-0 rounded-full">
                                <Image
                                    src="/assets/FYD/Circle.webp"
                                    alt="circle bg"
                                    fill
                                    className="object-fill pointer-events-none"
                                />
                                <Image
                                    src={doctorData?.image}
                                    alt={doctorData?.name}
                                    width={230}
                                    height={230}
                                    className="absolute w-full h-full object-fill rounded-full"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-[#b01752]">{doctorData?.name}</h2>
                                <p className="text-gray-700 mt-2">{doctorData?.designation}</p>
                                <p className="text-gray-600 mt-1 whitespace-pre-line">
                                    {doctorData.qualification}
                                </p>
                                <p className="text-gray-800 mt-3 font-medium">
                                    Experience: <span className="font-semibold">{doctorData?.experience}</span>
                                </p>
                                <p className="text-gray-800 mt-1 font-medium">
                                    {doctorData?.location}
                                </p>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="bg-[#1779c1] mt-5 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-md"
                                >
                                    <Image
                                        src="/assets/FYD/Book an appointment Icon.png"
                                        width={20}
                                        height={20}
                                        alt="icon"
                                    />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </section>

                    <DoctorDetails doctorData={doctorData} />

                    {/* FAQ */}
                    <div className="rounded-2xl px-2 mt-4 mb-2">
                        <h2 className="text-xl text-center font-bold mb-2 text-pink-700"> Frequently Asked Questions (FAQs)</h2>
                        <FAQSchema faqs={doctorData?.faqs} />
                        <div className="text-gray-700 leading-relaxed">
                            <div className="space-y-2">
                                {doctorData?.faqs.map((faq, idx) => (
                                    <div key={idx}>
                                        <button
                                            onClick={() => toggleFAQ(idx)}
                                            className={`w-full flex justify-between items-center px-3 py-2 rounded-full border text-left transition
                  ${openIndex === idx
                                                    ? "bg-pink-700 text-white font-medium"
                                                    : "border-pink-600 text-pink-700 hover:bg-pink-50"
                                                }`}
                                        >
                                            <span className="text-sm">{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 transform transition-transform ${openIndex === idx ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {openIndex === idx && (
                                            <div className="px-3 py-1 text-sm bg-gray-50 text-gray-700 rounded-full">
                                                <p dangerouslySetInnerHTML={{ __html: faq.description }} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-6 font-inter">

                    {/* TOP SECTION */}
                    <section className="w-full bg-[#f4f4f4] py-4 px-3">
                        <Breadcrumb items={breadcrumbItems} />
                        <div className="max-w-3xl mx-auto flex flex-row items-center gap-8 mt-4">
                            <div className="relative w-[230px] h-[230px] flex-shrink-0 rounded-full">
                                <Image
                                    src="/assets/FYD/Circle.webp"
                                    alt="circle bg"
                                    fill
                                    className="object-fill pointer-events-none"
                                />
                                <Image
                                    src={doctorData?.image}
                                    alt={doctorData?.name}
                                    width={230}
                                    height={230}
                                    className="absolute w-full h-full object-fill rounded-full"
                                />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-[#b01752]">{doctorData?.name}</h2>
                                <p className="text-gray-700 mt-2">{doctorData?.designation}</p>
                                <p className="text-gray-600 mt-1 whitespace-pre-line">
                                    {doctorData.qualification}
                                </p>
                                <p className="text-gray-800 mt-3 font-medium">
                                    Experience: <span className="font-semibold">{doctorData?.experience}</span>
                                </p>
                                <p className="text-gray-800 mt-1 font-medium">
                                    {doctorData?.location}
                                </p>
                                <button
                                    onClick={() => setOpen(true)}
                                    className="bg-[#1779c1] mt-5 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 shadow-md"
                                >
                                    <Image
                                        src="/assets/FYD/Book an appointment Icon.png"
                                        width={20}
                                        height={20}
                                        alt="icon"
                                    />
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </section>

                    <DoctorDetails doctorData={doctorData} />

                    {/* FAQ */}
                    <div className="rounded-2xl px-12 mt-8 mb-4">
                        <h2 className="text-3xl text-center font-bold mb-4 text-pink-700"> Frequently Asked Questions (FAQs)</h2>
                        <FAQSchema faqs={doctorData?.faqs} />
                        <div className="text-gray-700 leading-relaxed">
                            <div className="space-y-4">
                                {doctorData?.faqs.map((faq, idx) => (
                                    <div key={idx}>
                                        <button
                                            onClick={() => toggleFAQ(idx)}
                                            className={`w-full flex justify-between items-center px-6 py-4 rounded-full border text-left transition
                  ${openIndex === idx
                                                    ? "bg-pink-700 text-white font-medium"
                                                    : "border-pink-600 text-pink-700 hover:bg-pink-50"
                                                }`}
                                        >
                                            <span>{faq.question}</span>
                                            <svg
                                                className={`w-5 h-5 transform transition-transform ${openIndex === idx ? "rotate-180" : ""
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>

                                        {openIndex === idx && (
                                            <div className="px-6 py-4 bg-gray-50 text-gray-700 rounded-full">
                                                <p dangerouslySetInnerHTML={{ __html: faq.description }} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {open && <AppointmentModal doctorData={doctorData} closeModal={() => setOpen(false)} />}
        </>
    );
}