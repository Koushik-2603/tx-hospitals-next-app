"use client";
import Image from "next/image";

export default function OverviewSection() {
    return (
        <section className="w-full">
            <div className="bg-gray-50 pl-16 text-center py-8">
                <h2 className="text-4xl font-semibold text-pink-700">Overview</h2>
            </div>
            <div className="relative -mt-4 w-full h-[300px]">
                <Image
                    src="/assets/Overview/Overview Banner Iamge.webp"
                    alt="TX Hospitals Overview"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex flex-col justify-center px-24 text-white">
                    <h3 className="text-4xl font-semibold leading-snug max-w-[600px]">
                        Redefining Healthcare <br /> Excellence Across India
                    </h3>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-12 py-12 text-gray-950 space-y-8 text-justify">
                <p>
                    TX Hospitals Group is one of the country’s largest and fastest-growing chains of multi-super specialty hospitals. We have opened six healthcare facilities (including projects under development) in five years since opening our first hospital in Hyderabad in 2020. With our expansion across the country, we plan to open more locations than just Hyderabad, including Mumbai, Delhi, and Bangalore, in addition to six fully functional hospitals with 100 beds.
                </p>
                <p>
                    TX brand and logo projects that offer treatment or therapy for every disease. TX offers a comprehensive array of integrated healthcare services, ranging from clinics, retail pharmacies, wellness centres, diagnostic labs, health insurance, home healthcare, Fertility Centres and quaternary care facilities. Thousands of patients are treated by the TX hospitals every year with a clear focus on raising the standards of health care in the country. Considering the strategic locations of our TX hospitals within the cities of India, they are easy to reach in an emergency situation.
                </p>
                <p>
                    TX hospitals has world-renowned medical teams that utilize the latest technologies, including international evidence-based protocols, to provide the most comprehensive treatment in all specialties of medicine across a wide range of terms. Upon providing quality, compassionate care to all of its patients, it places a high priority on clinical excellence, patient safety, dignity, transparency, affordability, and accessibility of quality care in order to ensure that all of its patients receive the best possible care in a patient-friendly environment.
                </p>
            </div>
        </section>
    );
}
