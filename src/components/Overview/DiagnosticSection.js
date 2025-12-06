import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function DiagnosticSection() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <section className="relative w-full px-2 flex flex-col items-center bg-transparent">
                    <h2 className="mb-8 text-base font-bold text-pink-700 leading-tight">
                        Advanced Diagnostic & Imaging Services
                    </h2>
                    <div className="relative w-full h-[200px] rounded-xl overflow-hidden">
                        <Image
                            src="/assets/Overview/Diagnostic Banner BG.webp"
                            alt="Diagnostic Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative -mt-56 z-20 flex flex-col items-center text-center px-4">
                        <Image
                            src="/assets/Overview/Diagnostic Banner Image.webp"
                            alt="Diagnostic Imaging"
                            width={180}
                            height={180}
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                    <div className="relative z-10 mt-2 w-full text-black">
                        <ul className="space-y-1 text-xs leading-relaxed">
                            <li>
                                <strong>MRI (Magnetic Resonance Imaging)</strong> – High-resolution scans for brain, spine, joints & soft tissues.
                            </li>
                            <li>
                                <strong>CT Scan</strong> – Advanced cross-sectional imaging for accurate diagnosis.
                            </li>
                            <li>
                                <strong>Ultrasound & Doppler</strong> – Non-invasive imaging for pregnancy & organ diagnostics.
                            </li>
                            <li>
                                <strong>X-Ray & Digital Radiology</strong> – High-definition imaging for fractures & internal assessments.
                            </li>
                            <li>
                                <strong>Mammography</strong> – Early detection of breast cancer.
                            </li>
                            <li>
                                <strong>Endoscopy & Colonoscopy</strong> – Minimally invasive GI tract assessments.
                            </li>
                            <li>
                                <strong>EEG & EMG</strong> – Neurological tests for epilepsy & nerve/muscle disorders.
                            </li>
                        </ul>
                    </div>
                </section>
            ) : (
                <section className="relative w-full overflow-visible flex justify-center items-center py-24 px-10 bg-transparent">
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/assets/Overview/Diagnostic Banner BG.webp"
                            alt="Diagnostic Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="absolute inset-0 flex justify-center items-center gap-5 px-10">
                        <div className="relative -mt-28 -mb-28 z-20 w-[40%] flex justify-center items-center">
                            <Image
                                src="/assets/Overview/Diagnostic Banner Image.webp"
                                alt="Diagnostic Imaging"
                                width={350}
                                height={350}
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                            <h2 className="absolute px-5 -top-1 left-full text-3xl font-bold text-pink-700 whitespace-nowrap">
                                Advanced Diagnostic & Imaging Services
                            </h2>
                        </div>
                        <div className="relative z-10 w-[60%] text-white rounded-r-2xl py-6 px-2">
                            <ul className="space-y-4 text-base leading-relaxed drop-shadow-lg">
                                <li>
                                    <strong>MRI (Magnetic Resonance Imaging)</strong> – High-resolution
                                    scans for detailed imaging of brain, spine, joints, and soft tissues.
                                </li>
                                <li>
                                    <strong>CT Scan (Computed Tomography)</strong> – Advanced
                                    cross-sectional imaging for accurate diagnosis.
                                </li>
                                <li>
                                    <strong>Ultrasound & Doppler Scans</strong> – Non-invasive imaging
                                    for pregnancy, vascular conditions, and organ diagnostics.
                                </li>
                                <li>
                                    <strong>X-Ray & Digital Radiology</strong> – High-definition imaging
                                    for accurate fracture and internal condition assessments.
                                </li>
                                <li>
                                    <strong>Mammography</strong> – Early detection of breast cancer with
                                    mammography.
                                </li>
                                <li>
                                    <strong>Endoscopy & Colonoscopy</strong> – Minimally invasive
                                    procedures for GI tract assessment.
                                </li>
                                <li>
                                    <strong>EEG & EMG</strong> – Neurological diagnostic tests for
                                    epilepsy, nerve function, and muscle disorders.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
