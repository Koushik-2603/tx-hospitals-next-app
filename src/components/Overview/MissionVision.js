"use client";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function MissionVision() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <section className="w-full bg-white px-2">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-3 items-start">
                        <div className="flex flex-col gap-2">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/Overview/Our Mission Icon.webp"
                                    alt="Mission Icon"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-gray-950 text-xs leading-relaxed">
                                    <strong>Our Mission:</strong> To deliver exceptional healthcare services with a focus on quality,
                                    affordability, and accessibility while upholding the highest ethical
                                    standards. We aim to bridge the gap between medical excellence and
                                    affordability, making sure that every patient receives the care they
                                    deserve without financial constraints.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/Overview/Overvision Icon.webp"
                                    alt="Vision Icon"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-gray-950 leading-relaxed text-xs">
                                    <strong>Our Vision:</strong> To be a leading healthcare provider recognized for excellence in
                                    patient care, innovation, and medical advancements, ensuring the
                                    well-being of communities across the nation.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/assets/Overview/Core Value icon.webp"
                                alt="Core Values Icon"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                            <div>
                                <h3 className="font-bold text-gray-950 text-base mb-2">
                                    Core Values:
                                </h3>
                                <ul className="space-y-1 text-gray-950 text-xs leading-relaxed">
                                    <li>
                                        <strong>Integrity –</strong> Upholding the highest ethical
                                        standards in patient care and treatment.
                                    </li>
                                    <li>
                                        <strong>Compassion –</strong> Providing empathetic and
                                        personalized care to every individual.
                                    </li>
                                    <li>
                                        <strong>Patient-Centered Care –</strong> Placing patients at the
                                        heart of every decision to ensure their needs, preferences, and
                                        well-being are prioritized.
                                    </li>
                                    <li>
                                        <strong>Respect –</strong> Treating every patient, caregiver,
                                        and team member with dignity, understanding, and professionalism.
                                    </li>
                                    <li>
                                        <strong>Accountability –</strong> Taking full responsibility for
                                        our actions, ensuring transparency, and maintaining trust in all
                                        aspects of healthcare.
                                    </li>
                                    <li>
                                        <strong>Innovation –</strong> Continuously advancing medical
                                        practices through research, technology, and evidence-based
                                        treatment.
                                    </li>
                                    <li>
                                        <strong>Accessibility –</strong> Ensuring that quality
                                        healthcare is available and affordable for all, regardless of
                                        background.
                                    </li>
                                    <li>
                                        <strong>Quality –</strong> Committed to delivering world-class
                                        medical care with precision, excellence, and continuous
                                        improvement.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="w-full bg-white px-24">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="flex flex-col gap-4">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/Overview/Our Mission Icon.webp"
                                    alt="Mission Icon"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-gray-950 leading-relaxed text-justify">
                                    <strong>Our Mission:</strong> To deliver exceptional healthcare services with a focus on quality,
                                    affordability, and accessibility while upholding the highest ethical
                                    standards. We aim to bridge the gap between medical excellence and
                                    affordability, making sure that every patient receives the care they
                                    deserve without financial constraints.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/Overview/Overvision Icon.webp"
                                    alt="Vision Icon"
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-gray-950 mt-2 leading-relaxed text-justify">
                                    <strong>Our Vision:</strong> To be a leading healthcare provider recognized for excellence in
                                    patient care, innovation, and medical advancements, ensuring the
                                    well-being of communities across the nation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto my-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <Image
                                src="/assets/Overview/Core Value icon.webp"
                                alt="Core Values Icon"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                            <div>
                                <h3 className="font-bold text-gray-950 text-lg mb-2">
                                    Core Values:
                                </h3>
                                <ul className="space-y-1 text-gray-950 leading-relaxed">
                                    <li>
                                        <strong>Integrity –</strong> Upholding the highest ethical
                                        standards in patient care and treatment.
                                    </li>
                                    <li>
                                        <strong>Compassion –</strong> Providing empathetic and
                                        personalized care to every individual.
                                    </li>
                                    <li>
                                        <strong>Patient-Centered Care –</strong> Placing patients at the
                                        heart of every decision to ensure their needs, preferences, and
                                        well-being are prioritized.
                                    </li>
                                    <li>
                                        <strong>Respect –</strong> Treating every patient, caregiver,
                                        and team member with dignity, understanding, and professionalism.
                                    </li>
                                    <li>
                                        <strong>Accountability –</strong> Taking full responsibility for
                                        our actions, ensuring transparency, and maintaining trust in all
                                        aspects of healthcare.
                                    </li>
                                    <li>
                                        <strong>Innovation –</strong> Continuously advancing medical
                                        practices through research, technology, and evidence-based
                                        treatment.
                                    </li>
                                    <li>
                                        <strong>Accessibility –</strong> Ensuring that quality
                                        healthcare is available and affordable for all, regardless of
                                        background.
                                    </li>
                                    <li>
                                        <strong>Quality –</strong> Committed to delivering world-class
                                        medical care with precision, excellence, and continuous
                                        improvement.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}