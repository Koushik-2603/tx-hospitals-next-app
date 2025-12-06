import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function SurgicalSection() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <section className="relative w-full px-2 flex flex-col items-center bg-transparent">
                    <h2 className="mb-8 text-base font-bold text-pink-700 leading-tight">
                        Surgical & Interventional Services
                    </h2>
                    <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                        <Image
                            src="/assets/Overview/Surgical Banner.webp"
                            alt="Surgical Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative -mt-56 z-20 flex flex-col items-center text-center px-4">
                        <Image
                            src="/assets/Overview/Surgical Banner Image.webp"
                            alt="Surgical Imaging"
                            width={180}
                            height={180}
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                    <div className="relative z-10 mt-2 w-full text-black">
                        <ul className="space-y-1 text-xs leading-relaxed">
                            <li>
                                <strong>Laparoscopic & Minimal Access Surgery</strong> – Advanced
                                keyhole surgeries for faster recovery.
                            </li>
                            <li>
                                <strong>Interventional Radiology</strong> – Non-surgical
                                image-guided treatments for vascular and organ diseases.
                            </li>
                            <li>
                                <strong>Plastic & Reconstructive Surgery</strong> – Aesthetic,
                                corrective, and burn reconstruction procedures.
                            </li>
                            <li>
                                <strong>Bariatric & Metabolic Surgery</strong> – Weight-loss
                                surgery for obesity and diabetes management.
                            </li>
                            <li>
                                <strong>Advanced Trauma & Emergency Care</strong> – 24/7 critical
                                care and rapid response units.
                            </li>
                            <li>
                                <strong>Pediatric & Neonatal Surgery</strong> – Specialized
                                surgeries for newborns & children.
                            </li>
                        </ul>
                    </div>
                </section>
            ) : (
                <section className="relative w-full overflow-visible flex justify-center items-center py-16 px-10 bg-transparent">
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/assets/Overview/Surgical Banner.webp"
                            alt="Surgical Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center gap-5 px-10">
                        <div className="relative z-10 w-[60%] text-white rounded-l-2xl py-6 px-12">
                            <ul className="space-y-4 text-base leading-relaxed drop-shadow-lg">
                                <li>
                                    <strong>Laparoscopic & Minimal Access Surgery</strong> – Advanced
                                    keyhole surgeries for faster recovery.
                                </li>
                                <li>
                                    <strong>Interventional Radiology</strong> – Non-surgical
                                    image-guided treatments for vascular and organ diseases.
                                </li>
                                <li>
                                    <strong>Plastic & Reconstructive Surgery</strong> – Aesthetic,
                                    corrective, and burn reconstruction procedures.
                                </li>
                                <li>
                                    <strong>Bariatric & Metabolic Surgery</strong> – Weight-loss
                                    surgery for obesity and diabetes management.
                                </li>
                                <li>
                                    <strong>Advanced Trauma & Emergency Care</strong> – 24/7 critical
                                    care and rapid response units.
                                </li>
                                <li>
                                    <strong>Pediatric & Neonatal Surgery</strong> – Specialized
                                    surgeries for newborns & children.
                                </li>
                            </ul>
                        </div>
                        <div className="relative -mt-28 -mb-28 z-20 w-[40%] flex justify-center items-center">
                            <Image
                                src="/assets/Overview/Surgical Banner Image.webp"
                                alt="Surgical & Interventional"
                                width={350}
                                height={350}
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                            <h2 className="absolute -top-2 right-full mr-40 text-3xl font-bold text-pink-700 whitespace-nowrap">
                                Surgical & Interventional Services
                            </h2>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
