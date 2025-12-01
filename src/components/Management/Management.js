"use client";
import Image from "next/image";

export default function Management() {

    const directors = [
        {
            id: "management-0",
            name: "Dr. Ghantasala Navaneeth",
            qualification: "MBBS, MS (Orthopaedics)",
            designation: "Director – Business growth & Strategy, TX Hospitals",
            image: "/assets/Management/Dr. Ghantasala Navaneeth.webp",
            description: `Dr. Ghantasala Navaneeth is an experienced Orthopaedic Surgeon 
and a key leader at TX Hospitals, overseeing Business growth & 
Strategy. With over 6 years in clinical practice and healthcare 
management, he ensures streamlined operations, strategic growth 
and excellence across hospital services. His dual expertise in 
medicine and administration strengthens TX Hospitals commitment 
to quality and innovation.`,
        },
        {
            id: "management-1",
            name: "L Panduranga Reddy",
            qualification: "B.Sc, B.E",
            designation: "Director – Group Facility",
            image: "/assets/Management/L Panduranga Reddy.webp",
            description: `Mr. L. Panduranga Reddy, Group Facility Director at TX Hospitals, 
holds a double graduation with over 16 years of extensive experience 
in hospital facility and infrastructure management. He is a key pillar in 
ensuring operational excellence across all hospital units. He oversees 
critical aspects such as infrastructure planning, safety standards and 
facility compliance. Mr. Reddy is also actively involved in implementing 
and maintaining NABH and JCI standards, ensuring that TX Hospitals 
consistently meets national and international benchmarks in quality and 
patient safety. His leadership continues to drive efficiency, compliance 
and a culture of continuous improvement.`,
        },
        {
            id: "management-2",
            name: "Dr. Srikanth Vodnala",
            qualification: "B.Sc, B.E",
            designation: " MBA, IIM Bangalore, LLB",
            image: "/assets/Management/Dr. Srikanth Vodnala.webp",
            description: ` Dr. Srikanth Vodnala is a seasoned healthcare administrator with over
 16 years of diverse experience in healthcare management. An alumnus
 of IIM Bangalore, he holds an MBA specializing in healthcare
 management, complemented by a Bachelor of Law (LLB). His expertise
 spans strategic healthcare leadership, operational efficiency and legal
 aspects of healthcare administration. He plays a pivotal role in shaping
 the hospital’s strategic direction, ensuring compliance and enhancing
 the delivery of quality care to patients.`,
        },
        {
            id: "management-3",
            name: "Navya Vani S",
            qualification: "MHM, LLB",
            designation: "",
            image: "/assets/Management/Navya Vani S.webp",
            description: `Navya Vani S is a distinguished healthcare management professional
 with over 19 years of experience in hospital operations, quality
 assurance and accreditations. With expertise in process development 
and implementation, she has significantly contributed to improving 
healthcare standards through her strategic leadership. She is skilled 
in driving continuous improvement initiatives while ensuring the 
hospital adheres to regulatory standards, enhancing operational
 excellence.`,
        },
        {
            id: "management-4",
            name: " Dr. Asna Zain",
            qualification: "MBBS, MBA",
            designation: "",
            image: "/assets/Management/Dr. Asna Zain.webp",
            description: `Dr. Asna Zain is a young and accomplished healthcare professional
 with extensive experience in healthcare administration and operations.
 She has previously served as Associate Vice President of Operations
 at a renowned hospital group in Hyderabad and gained clinical
 experience in the USA. Dr. Zain holds a diploma in Medical Law and
 Ethics from the National Law School University of India. Her expertise
 lies in patient care management and hospital operations, focusing on
 enhancing both clinical and administrative efficiency.`,
        },
    ];

    return (
        <section className="bg-[#f3f3f3] py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#a32035] mb-8">
                    Management
                </h2>

                <div className="flex flex-col gap-8">
                    {directors.map((director, index) => (
                        <div
                            key={index}
                            id={director.id}
                            className="bg-white shadow-md rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8"
                        >
                            {/* Left: Image */}
                            <div className="w-full md:w-[40%] flex justify-center">
                                <div className="relative w-60 h-60 md:w-64 md:h-64">
                                    <Image
                                        src="/assets/Management/Mangement Person Backside Box 2.webp"
                                        alt="Background"
                                        width={400}
                                        height={400}
                                        className="object-cover mt-12 rounded-xl"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image
                                            src={director.image}
                                            alt={director.name}
                                            width={250}
                                            height={250}
                                            className="rounded-xl object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="w-full md:w-[60%] text-left">
                                <h3 className="text-xl md:text-2xl font-bold text-[#a32035]">
                                    {director.name}
                                </h3>
                                <p className="text-base font-semibold mt-1">
                                    {director.qualification}
                                </p>
                                <p className="text-base font-semibold mt-1">
                                    {director.designation}
                                </p>
                                <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">
                                    {director.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
