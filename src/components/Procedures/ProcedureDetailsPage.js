import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Head from "next/head";
import DOMPurify from "dompurify";
import CONFIG from "@/config";
import useIsMobile from "@/hooks/useIsMobile";
import AppointmentForm from "@/components/DiseaseAndTreatment/AppointmentForm";
import FAQSchema from "@/utils/FAQSchema";

export default function ProcedureDetailsPage() {

    const router = useRouter();
    const { department, url } = router.query;
    const isMobile = useIsMobile();
    const [loading, setLoading] = useState(true);
    const [procedureData, setProcedureData] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        window.scrollTo({ left: document.body.scrollWidth, top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deptName = decodeURIComponent(department).replace(/-/g, " ").toUpperCase();
                const deptRes = await axios.get(`${CONFIG.API_BASE_URL}/procedures/getProceduresbydept/${deptName}`);
                const procedure = deptRes.data.find(p =>
                    p.url?.toLowerCase() === `/specialities/${department}/procedures/${url}/`
                );
                if (!procedure) {
                    setLoading(false);
                    return;
                }
                const pId = procedure.pId;
                const procedureDetailsRes = await axios.get(`${CONFIG.API_BASE_URL}/procedures/getProceduresbyId/${pId}`);
                setProcedureData(procedureDetailsRes.data.Item);
            } catch (err) {
                console.error("Error fetching procedure data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [department, url]);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    if (loading) {
        return (
            <div className="flex flex-row justify-center items-center mt-20 mb-4 gap-2">
                <div className="w-8 h-8 border-2 border-pink-700 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-pink-700 text-lg font-medium animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }
    if (!procedureData) return <p className="text-center mt-14 font-inter p-4 text-lg text-pink-700 font-semibold">No Data Found!</p>;

    return (
        <>
            <Head>
                <title>{procedureData.seoTitle}</title>
                <meta name="description" content={procedureData.metaKeywords} />
                <meta name="keywords" content={procedureData.metaDescription} />
            </Head>
            {isMobile ? (
                <div className="-mt-5 font-inter">
                    <div className="flex items-center gap-2 justify-between bg-pink-700 p-1 mx-auto rounded-xl w-[95%] text-white mb-2">
                        <div className="bg-inherit w-36 h-36 flex items-center justify-center">
                            <img loading="lazy" src={procedureData.pImage} alt="icon" className="w-16 h-16 rounded-full bg-white" />
                        </div>
                        <h1 className="text-xl font-bold">{procedureData.pTitle}</h1>
                    </div>
                    <div className="flex flex-col justify-between items-start gap-6 mb-2 px-2">
                        <div className="w-full">
                            <AppointmentForm />
                        </div>
                        <div>
                            {procedureData.extraFields?.map((field, index) => {
                                const getHeadingTag = () => {
                                    if (index === 0 || index === 1) return 'h2';
                                    return 'h3';
                                };

                                const HeadingTag = getHeadingTag();
                                return (
                                    <div key={index}>
                                        <HeadingTag className={`text-pink-700 ${index <= 1 ? 'text-lg' : 'text-base'
                                            } font-semibold`}>{field.heading}</HeadingTag>
                                        <div
                                            className="text-gray-700 text-sm pl-4 leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                    field.description.replace(/<ul>/g, '<ul class="list-disc ml-6">')
                                                        .replace(/<ol>/g, '<ol class="list-decimal ml-6">')
                                                )
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {procedureData.faqs?.length > 0 && (
                        <div className="mt-2">
                            <div className="bg-white m-4">
                                <h2 className="text-lg font-bold text-pink-700 mb-2">FAQs</h2>
                                <FAQSchema faqs={procedureData.faqs} />
                                <div className="text-gray-700 pl-6 leading-relaxed space-y-4">
                                    {procedureData.faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className={`border-2 rounded-lg ${activeIndex === index
                                                ? "border-pink-600"
                                                : "border-pink-300"
                                                }`}
                                        >
                                            <button
                                                className={`w-full p-1 flex justify-between text-sm items-center text-left font-medium ${activeIndex === index ? "text-white bg-pink-600 border-b border-white" : "text-pink-600"
                                                    }`}
                                                onClick={() => toggleFAQ(index)}
                                            >
                                                {faq.question}
                                                {activeIndex === index ? (
                                                    <FaChevronDown className="text-white" />
                                                ) : (
                                                    <FaChevronUp className="text-pink-600" />
                                                )}
                                            </button>
                                            {activeIndex === index && (
                                                <div className="p-4 text-sm text-black">
                                                    <p dangerouslySetInnerHTML={{ __html: faq.description }} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="mt-8 font-inter">
                    <div className="flex items-center gap-4 bg-pink-700 px-8 py-4 mx-auto rounded-xl max-w-6xl text-white mb-4">
                        <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shrink-0 mr-6">
                            <img loading="lazy" src={procedureData.pImage} alt="icon" className="w-32 h-32 object-contain" />
                        </div>
                        <h1 className="text-3xl font-bold text-left w-full">{procedureData.pTitle}</h1>
                    </div>
                    <div className="flex flex-row justify-between items-start gap-6 mb-2 max-w-6xl mx-auto">
                        <div className="w-[70%] hide-scrollbar flex-1 overflow-y-auto max-h-[calc(100vh-40px)]">
                            {procedureData.extraFields?.map((field, index) => {
                                const getHeadingTag = () => {
                                    if (index === 0 || index === 1) return 'h2';
                                    return 'h3';
                                };

                                const HeadingTag = getHeadingTag();
                                return (
                                    <div key={index}>
                                        <HeadingTag className={`${index <= 1 ? 'text-2xl' : 'text-xl'
                                            } font-bold text-pink-700 mb-2`}>{field.heading}</HeadingTag>
                                        <div
                                            className="text-gray-700 pl-6 leading-relaxed"
                                            dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(
                                                    field.description.replace(/<ul>/g, '<ul class="list-disc ml-6">')
                                                        .replace(/<ol>/g, '<ol class="list-decimal ml-6">')
                                                )
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-[30%] flex justify-end">
                            <AppointmentForm />
                        </div>
                    </div>
                    {procedureData.faqs?.length > 0 && (
                        <div className="mt-2 mx-[2%]">
                            <div className="bg-white pl-4 m-4">
                                <h2 className="text-2xl font-bold text-pink-700 mb-2">FAQs</h2>
                                <FAQSchema faqs={procedureData.faqs} />
                                <div className="text-gray-700 pl-6 leading-relaxed space-y-4">
                                    {procedureData.faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className={`border-2 rounded-lg ${activeIndex === index
                                                ? "border-pink-600"
                                                : "border-pink-300"
                                                }`}
                                        >
                                            <button
                                                className={`w-full p-4 flex justify-between items-center text-left font-medium ${activeIndex === index ? "text-white bg-pink-600 border-b border-white" : "text-pink-600"
                                                    }`}
                                                onClick={() => toggleFAQ(index)}
                                            >
                                                {faq.question}
                                                {activeIndex === index ? (
                                                    <FaChevronDown className="text-white" />
                                                ) : (
                                                    <FaChevronUp className="text-pink-600" />
                                                )}
                                            </button>
                                            {activeIndex === index && (
                                                <div className="p-4 text-black">
                                                    <p dangerouslySetInnerHTML={{ __html: faq.description }} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}