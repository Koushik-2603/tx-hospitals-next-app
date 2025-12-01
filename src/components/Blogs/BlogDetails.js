import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useIsMobile from "@/hooks/useIsMobile";
import { FaTags } from "react-icons/fa";
import { IoPlay, IoPause, IoStop, IoPlaySkipForward } from "react-icons/io5";
import { franc } from "franc";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import AppointmentForm from "@/components/Common/AppointmentForm";
import BookAppointmentForm from "@/components/Blogs/BookAppointemntForm";

export default function BlogDetails({ blogData, departments }) {

    const router = useRouter();
    const isMobile = useIsMobile();
    const [currentUrl, setCurrentUrl] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    useEffect(() => {
        window.scrollTo({ left: document.body.scrollWidth, top: 0, behavior: "smooth" });
    }, []);

    const getLangCode = (text) => {
        const lang = franc(text);
        const map = {
            eng: "en-US",
            hin: "hi-IN",
            spa: "es-ES",
            fra: "fr-FR",
            deu: "de-DE",
            tam: "ta-IN",
            tel: "te-IN",
        };
        return map[lang] || "en-US";
    };

    const getFemaleVoice = (lang) => {
        const voices = speechSynthesis.getVoices();

        // Try to get a voice with 'female' indicators
        const femaleVoices = voices.filter(voice =>
            voice.lang.startsWith(lang) &&
            /female|woman|zira|susan|karen|samantha|lucia|microsoft (.*) female/i.test(voice.name)
        );

        if (femaleVoices.length) return femaleVoices[0];

        // Fallback to any voice in the desired language
        return voices.find(voice => voice.lang.startsWith(lang));
    };

    // TTS play handler
    const handlePlay = () => {
        if (!blogData) return;

        // Retry after voices load if not ready yet
        if (!speechSynthesis.getVoices().length) {
            speechSynthesis.onvoiceschanged = () => {
                handlePlay();
            };
            return;
        }

        handleStop();

        const utterances = [];
        const title = blogData?.blogTitle;
        const titleLang = getLangCode(title);
        const utterTitle = new SpeechSynthesisUtterance(title);
        utterTitle.lang = titleLang;
        utterTitle.voice = getFemaleVoice(titleLang);
        utterances.push(utterTitle);

        blogData?.extraFields.forEach(field => {
            const heading = field?.heading;
            const description = field?.description?.replace(/<[^>]+>/g, '');

            const headingLang = getLangCode(heading);
            const descLang = getLangCode(description);

            const utterHeading = new SpeechSynthesisUtterance(heading);
            utterHeading.lang = headingLang;
            utterHeading.voice = getFemaleVoice(headingLang);
            utterances.push(utterHeading);

            const utterDesc = new SpeechSynthesisUtterance(description);
            utterDesc.lang = descLang;
            utterDesc.voice = getFemaleVoice(descLang);
            utterances.push(utterDesc);
        });

        let index = 0;
        const speakNext = () => {
            if (index < utterances.length) {
                const utter = utterances[index];
                utter.onend = () => {
                    index++;
                    speakNext();
                };
                speechSynthesis.speak(utter);
            } else {
                setIsSpeaking(false);
                setIsPaused(false);
            }
        };

        speakNext();
        setIsSpeaking(true);
        setIsPaused(false);
    };

    // Pause TTS
    const handlePause = () => {
        speechSynthesis.pause();
        setIsPaused(true);
    };

    // Resume TTS
    const handleResume = () => {
        speechSynthesis.resume();
        setIsPaused(false);
    };

    // Stop TTS
    const handleStop = () => {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        setIsPaused(false);
    };

    // Load voices on mount and log them for debugging
    useEffect(() => {
        const loadVoices = () => {
            const voices = speechSynthesis.getVoices();
        };

        speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices(); // in case voices are already available

        return () => {
            speechSynthesis.cancel();
        };
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            speechSynthesis.cancel();
        };
    }, []);

    function fixOrderedListNumbering(html) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");

        let lists = doc.querySelectorAll("ol");
        let currentNumber = 1;

        lists.forEach((ol) => {
            if (currentNumber > 1) {
                ol.setAttribute("start", currentNumber);
            }
            let count = ol.querySelectorAll("li").length;
            currentNumber += count;
        });

        return doc.body.innerHTML;
    }

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/&/g, "&")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();

    const handleCategoryClick = (categoryName) => {
        const slug = slugify(categoryName);
        localStorage.setItem("departmentsList", JSON.stringify(departments));
        router.push(`/category/${slug}/`);
    };

    const tagSlugify = (text) =>
        text
            .replace(/&/g, "&")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();

    const handleTagClick = (tagName) => {
        const slug = tagSlugify(tagName);
        localStorage.setItem("departmentsList", JSON.stringify(departments));
        router.push(`/tag/${slug}/`);
    };

    return (
        <>
            <Head>
                <title>{blogData?.seoTitle}</title>
                <meta name="description" content={blogData?.metaKeywords} />
                <meta name="keywords" content={blogData?.metaDescription} />
            </Head>
            {isMobile ? (
                <></>
            ) : (
                <div className="mt-7 px-4 font-inter">
                    <h1 className="text-4xl text-pink-700 font-bold pl-6 mt-4">{blogData?.blogTitle}</h1>
                    <div className="flex gap-4 p-3">
                        <div className="flex-1 w-[65%]">
                            <div className="relative w-full min-h-full">
                                <div className="p-4 relative">
                                    <motion.img
                                        src={blogData?.blogImage}
                                        alt={blogData?.blogTitle}
                                        className="w-full h-full object-cover rounded-md shadow-lg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                                <div className="pl-4">
                                    <div className="mt-4 flex gap-4 items-center">
                                        {!isSpeaking ? (
                                            <button
                                                onClick={handlePlay}
                                                className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
                                            >
                                                <IoPlay size={20} />
                                                Play
                                            </button>
                                        ) : isPaused ? (
                                            <button
                                                onClick={handleResume}
                                                className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
                                            >
                                                <IoPlaySkipForward size={20} />
                                                Resume
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handlePause}
                                                className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
                                            >
                                                <IoPause size={20} />
                                                Pause
                                            </button>
                                        )}

                                        {isSpeaking && (
                                            <button
                                                onClick={handleStop}
                                                className="bg-pink-600 text-white px-4 py-2 rounded flex items-center gap-2"
                                            >
                                                <IoStop size={20} />
                                                Stop
                                            </button>
                                        )}
                                    </div>
                                    {blogData?.extraFields?.map((field, index) => {
                                        const getHeadingTag = () => {
                                            if (index === 0 || index === 1) return 'h2';
                                            return 'h3';
                                        };

                                        const HeadingTag = getHeadingTag();
                                        return (
                                            <div key={index}>
                                                <HeadingTag className={`${index <= 1 ? 'text-2xl' : 'text-xl'} font-bold text-pink-700 mb-2`}>{field.heading}</HeadingTag>
                                                {(() => {
                                                    let html = field.description;

                                                    html = html
                                                        .replace(/<ul>/g, '<ul class="list-disc ml-6">')
                                                        .replace(/<ol>/g, '<ol class="list-decimal ml-6">');

                                                    html = fixOrderedListNumbering(html);

                                                    const sanitized = DOMPurify.sanitize(html);

                                                    return (
                                                        <div
                                                            className="text-gray-700 pl-6 leading-relaxed"
                                                            dangerouslySetInnerHTML={{ __html: sanitized }}
                                                        ></div>
                                                    );
                                                })()}
                                                {/* Show appointment CTA after every 2 fields */}
                                                {index === 1 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                        className="bg-pink-100 flex items-center justify-center gap-6 border-l-4 border-pink-600 p-4 mt-6 rounded-md shadow-md animate-zoomBlink"
                                                    >
                                                        <p className="text-lg m-0 font-semibold text-pink-700">Need an Appointment?</p>
                                                        <button
                                                            onClick={() => setShowModal(true)}
                                                            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
                                                        >
                                                            Click here
                                                        </button>
                                                    </motion.div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <h2 className="text-2xl mt-4 font-bold mb-4 border-b-4 border-pink-600 inline-block pb-1">
                                Share this
                            </h2>
                            <div className="flex space-x-6 mb-6 flex-wrap">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsFacebook.webp" alt="Facebook" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check this out!`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/txhospitalstwitter-68879ef165ce9.webp" alt="Twitter" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href="https://www.instagram.com/txhospitals/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsInstagram.webp" alt="Instagram" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCuHZd4Yi3wTHciJoMz7mq2A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsYoutub.webp" alt="YouTube" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/tx-hospitals/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsLinkidin.webp" alt="LinkedIn" className="w-10 h-10 cursor-pointer" />
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img loading="lazy" src="/assets/Blogs/TXHospitalsWhatsup.webp" alt="WhatsApp" className="w-10 h-10 cursor-pointer" />
                                </a>
                            </div>
                            <h2 className="text-2xl font-bold border-b-4 border-pink-600 inline-block pb-1">
                                Book Appointment
                            </h2>
                            <AppointmentForm />
                            <h2 className="text-2xl mt-4 font-bold mb-4 border-b-4 border-pink-600 inline-block pb-1">
                                Categories
                            </h2>
                            <ul className="divide-y divide-gray-200">
                                {departments.map((dept, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleCategoryClick(dept)}
                                        className="py-2 hover:text-pink-600 cursor-pointer transition-colors"
                                    >
                                        {dept}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {blogData?.tags && blogData.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4 mb-4 pl-8">
                            <FaTags className="text-pink-700 w-5 h-5 mt-1" />
                            <p className="text-gray-600">
                                {blogData.tags.map((tag, index) => (
                                    <span key={index}>
                                        <button
                                            onClick={() => handleTagClick(tag.name)}
                                            className="hover:text-pink-700 transition-colors"
                                        >
                                            {tag.name}
                                        </button>
                                        {index < blogData.tags.length - 1 && ', '}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                </div>
            )}
            <BookAppointmentForm showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}