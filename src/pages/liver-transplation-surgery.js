import React from 'react';
import Head from 'next/head';
import SecondaryLayout from '@/components/Layouts/SecondaryLayout';
import Image from 'next/image';

export default function LiverTransplantationSurgery() {
    return (
        <>
            <Head>
                <title>Best Liver Transplantation Surgery in Hyderabad, India | TX Hospitals</title>
                <meta name="description" content="TX Hospitals offers advanced liver transplantation surgery in Hyderabad with expert surgeons and world-class facilities. Book your appointment today." />
            </Head>
            <SecondaryLayout>
                <div className="pt-4">
                    <section className="w-full bg-[#fde8e8] px-16 overflow-hidden">
                        <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6">
                            {/* Left Content */}
                            <div className="w-1/2 space-y-8">
                                <h1 className="text-4xl font-bold text-[#1a1a1a] leading-tight">
                                    <span className="text-[#B12C49]">Liver Transplantation Surgery</span> <br className="hidden md:block" />
                                    in Hyderabad, India
                                </h1>
                                <p className="text-[#4a4a4a] text-xl leading-relaxed max-w-xl font-medium">
                                    Advanced Liver Transplant Care with Compassion, Precision & Global Standards. A new beginning awaits — hope, healing and world-class expertise.
                                </p>
                                <div className="flex flex-row items-center gap-4 pt-4">
                                    <button className="bg-[#B12C49] text-white px-6 py-2 rounded-xl flex items-center justify-center gap-3 text-lg font-bold shadow-lg hover:bg-[#96253d] transition-all transform hover:scale-105 active:scale-95">
                                        <Image
                                            src="/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp"
                                            alt="Calendar Icon"
                                            width={32}
                                            height={32}
                                            className="w-8 h-8 object-contain"
                                        />
                                        Book An Appointment
                                    </button>
                                    <button className="border-2 border-[#B12C49] text-[#B12C49] px-6 py-2 rounded-xl flex items-center justify-center gap-3 text-lg font-bold bg-[#fde8eb] shadow-sm hover:bg-[#fbdada] transition-all transform hover:scale-105 active:scale-95">
                                        <Image
                                            src="/assets/surgeries/live-transplant/Call Icon 3.webp"
                                            alt="Phone Icon"
                                            width={20}
                                            height={20}
                                            className="w-8 h-8 object-contain"
                                        />
                                        Call Now
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-1/2 relative flex justify-center items-center">
                                <div className="relative w-full max-w-[550px]">
                                    {/* The background box/frame */}
                                    <Image
                                        src="/assets/surgeries/live-transplant/Transplantation Surgery  Banner Image Back Box.webp"
                                        alt="Transplantation Background Box"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto drop-shadow-2xl"
                                        priority
                                    />
                                    {/* The Actual Liver Image inside */}
                                    <div className="absolute inset-0 flex items-center justify-center p-[15%]">
                                        <Image
                                            src="/assets/surgeries/live-transplant/Transplantation Surgery  Banner Image.webp"
                                            alt="Liver Transplantation Surgery Illustration"
                                            width={450}
                                            height={450}
                                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto py-8 px-16 flex flex-row gap-12 items-start">
                        {/* What is a Liver Transplant Section */}
                        <div className="w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-[#B12C49]">
                                What is a Liver Transplant?
                            </h2>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                A liver transplant is a surgical procedure in which a diseased or failing liver is replaced with a healthy liver from living donor or deceased donor. It is recommended for patients with end-stage liver disease or acute liver failure when medical treatment is no longer effective.
                            </p>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                With modern surgical techniques, meticulous patient selection and structured post-operative care, Liver Transplantation surgery in India today offers excellent survival outcomes.
                            </p>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed pt-2">
                                Our expert hepatology team at <span className="text-[#B12C49] font-bold">TX Hospitals</span> carefully evaluates every patient to determine the right timing, suitability and safest transplant approach, ensuring outcomes that meet international benchmarks followed by the <span className="text-[#B12C49] font-bold underline">Best Liver Transplant Hospitals in Hyderabad.</span>
                            </p>
                        </div>

                        {/* Who Needs a Liver Transplant Section */}
                        <div className="w-1/2 bg-white rounded-2xl p-3 shadow-[0_20px_60px_rgba(177,44,73,0.2)] border border-[#B12C49]/10 relative">
                            <h2 className="text-4xl font-bold text-[#B12C49] mb-6">
                                Who Needs a Liver Transplant?
                            </h2>
                            <p className="text-[#1a1a1a] text-lg font-semibold mb-6">
                                You may be advised a liver transplant if you have:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "End-stage liver disease or liver cirrhosis",
                                    "Acute liver failure",
                                    "Alcohol-related liver disease",
                                    "Chronic hepatitis B or C with liver damage",
                                    "Fatty liver disease (NASH / NAFLD)",
                                    "Metabolic or genetic liver disorders",
                                    "Pediatric liver diseases",
                                    "Liver failure with complications such as ascites, jaundice, bleeding or encephalopathy"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                            <Image
                                                src="/assets/surgeries/live-transplant/Right Icon.webp"
                                                alt="Right Icon"
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>
                                        <span className="text-[#4a4a4a] text-lg leading-tight group-hover:text-black transition-colors duration-300">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="bg-[#FAF8F6] py-16 px-6 md:px-16">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                                    Comprehensive <span className="text-[#B12C49]">Liver Transplant</span> Services
                                </h2>
                                <p className="text-lg text-[#4a4a4a] mt-4">
                                    At <span className="text-[#B12C49] font-bold">TX Hospitals,</span> we provide a complete spectrum of liver transplant services under one roof:
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-8">
                                {/* Service Card 1 */}
                                <div className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-[#EBC5CB] rounded-xl p-4 mb-6">
                                        <h3 className="text-[#B12C49] text-xl font-bold leading-tight">
                                            Living Donor <br /> Liver Transplantation (LDLT)
                                        </h3>
                                    </div>
                                    <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                        A healthy donor donates a portion of their liver, which regenerates naturally in both donor and recipient. This allows timely transplantation with excellent long-term outcomes.
                                    </p>
                                </div>

                                {/* Service Card 2 */}
                                <div className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-[#EBC5CB] rounded-xl p-4 mb-6">
                                        <h3 className="text-[#B12C49] text-xl font-bold leading-tight">
                                            Emergency <br /> Liver Transplant
                                        </h3>
                                    </div>
                                    <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                        Rapid evaluation and prioritization for patients with acute liver failure or life-threatening complications requiring immediate intervention.
                                    </p>
                                </div>

                                {/* Service Card 3 */}
                                <div className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                                    <div className="bg-[#EBC5CB] rounded-xl p-4 mb-6">
                                        <h3 className="text-[#B12C49] text-xl font-bold leading-tight">
                                            Pediatric <br /> Liver Transplantation
                                        </h3>
                                    </div>
                                    <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                        Specialized transplant care for children with congenital or acquired liver diseases, led by the best pediatric liver transplant specialist in India, supported by multidisciplinary team
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-16 px-6 md:px-16 flex flex-col md:flex-row gap-12 items-center">
                        {/* Evaluation Description (Left) */}
                        <div className="md:w-[40%] space-y-8 text-left">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
                                Comprehensive <span className="text-[#B12C49]">Pre-Transplant</span> Evaluation
                            </h2>
                            <p className="text-lg text-[#4a4a4a] leading-relaxed">
                                Successful liver transplantation begins with thorough preparation. At TX Hospitals, our multidisciplinary transplant team conducts:
                            </p>
                            <p className="text-lg text-[#4a4a4a] leading-relaxed">
                                This holistic approach ensures that every patient is physically, emotionally and medically prepared before surgery under the supervision of a dedicated Liver Transplant Specialist.
                            </p>
                        </div>

                        {/* Evaluation Cards (Right) */}
                        <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Medical Assessment", desc: "Detailed medical assessment and liver disease staging", icon: "Medical Assessment Icon.webp" },
                                { title: "Blood Tests", desc: "Advanced blood tests and liver function evaluation", icon: "Blood Tests Icon.webp" },
                                { title: "Imaging Studies", desc: "CT, MRI, Doppler ultrasound imaging", icon: "Imaging Studies Icon.webp" },
                                { title: "Health Screening", desc: "Cardiac, pulmonary, and infection screening", icon: "Health Screening Icon.webp" },
                                { title: "Nutrition", desc: "Nutritional assessment and optimization", icon: "Nutrition Icon.webp" },
                                { title: "Donor Evaluation", desc: "Psychological evaluation and donor compatibility testing", icon: "Donor Evaluation Icon.webp" }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#FAF1F2] rounded-2xl p-6 flex flex-col items-start text-left hover:shadow-md transition-all duration-300 h-full">
                                    <div className="bg-white rounded-xl p-3 mb-4 shadow-sm">
                                        <Image
                                            src={`/assets/surgeries/live-transplant/${item.icon}`}
                                            alt={item.title}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-[#1a1a1a] text-xl font-bold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#666] text-base leading-snug">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="w-full bg-[#B12C49] py-12 px-6 md:px-16">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            {/* Book An Appointment - Outline Button */}
                            <button className="w-full md:w-auto border-2 border-white text-white px-8 md:px-10 py-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold hover:bg-white hover:text-[#B12C49] transition-all transform hover:scale-105 active:scale-95 group">
                                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-[#B12C49]/10">
                                    <Image
                                        src="/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp"
                                        alt="Calendar Icon"
                                        width={32}
                                        height={32}
                                        className="w-7 h-7 object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
                                    />
                                </div>
                                Book An Appointment
                            </button>

                            {/* Call Now - Solid White Button */}
                            <button className="w-full md:w-auto bg-white text-[#B12C49] px-8 md:px-10 py-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 group">
                                <div className="bg-[#FAF1F2] p-2 rounded-lg">
                                    <Image
                                        src="/assets/surgeries/live-transplant/Call Icon 3.webp"
                                        alt="Phone Icon"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                                Call Now
                            </button>
                        </div>
                    </section>

                    <section className="bg-gray-50 py-16 px-6 md:px-16">
                        <div className="max-w-7xl mx-auto space-y-12">
                            <div className="text-center space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                                    Expert Surgical Care & <span className="text-[#B12C49]">Advanced Infrastructure</span>
                                </h2>
                                <p className="text-lg text-[#4a4a4a] max-w-5xl mx-auto font-medium">
                                    Liver transplant surgeries at TX Hospitals are performed by some of the <span className="text-[#B12C49] font-bold">Top Liver Transplantation Surgeons in Hyderabad</span>, using state-of-the-art operating theaters and advanced anesthesia systems.
                                </p>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                                {/* Our Infrastructure - White Card */}
                                <div className="lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col">
                                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 pb-4 border-b border-gray-100">
                                        Our Infrastructure
                                    </h3>
                                    <div className="space-y-6 flex-grow">
                                        {[
                                            { text: "Advanced organ preservation and surgical technologies", icon: "Our Infrastructure Icon 1.webp" },
                                            { text: "Dedicated liver transplant intensive care units", icon: "Our Infrastructure Icon 2.webp" },
                                            { text: "Strict infection-control protocols and sterile pathways", icon: "Our Infrastructure Icon 3.webp" },
                                            { text: "24/7 transplant emergency response teams", icon: "Our Infrastructure Icon 4.webp" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-6 bg-gray-50 rounded-2xl p-4 hover:bg-white hover:shadow-md transition-all duration-300">
                                                <div className="w-16 h-16 bg-[#B12C49] rounded-xl flex items-center justify-center flex-shrink-0 p-3">
                                                    <Image
                                                        src={`/assets/surgeries/live-transplant/${item.icon}`}
                                                        alt="Icon"
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-contain brightness-0 invert"
                                                    />
                                                </div>
                                                <p className="text-[#4a4a4a] text-lg font-semibold leading-tight">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Post-Transplant Care - Maroon Card */}
                                <div className="lg:w-1/2 bg-[#B12C49] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(177,44,73,0.15)] flex flex-col text-white">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Post-Transplant Care & Long-Term Follow-Up
                                    </h3>
                                    <p className="text-white/90 text-lg mb-8">
                                        Our commitment to patients extends well beyond surgery. Post-transplant care at <span className="font-bold underline">TX Hospitals</span> includes:
                                    </p>
                                    <div className="space-y-4 flex-grow">
                                        {[
                                            { text: "Personalized immunosuppression management", icon: "Post Transplant Care  & Long -Term Follow up Ionc 1.webp" },
                                            { text: "Continuous monitoring for rejection and infections", icon: "Post Transplant Care  & Long -Term Follow up Ionc 2.webp" },
                                            { text: "Regular liver function and graft surveillance", icon: "Post Transplant Care  & Long -Term Follow up Ionc 3.webp" },
                                            { text: "Nutrition therapy, physiotherapy and rehabilitation", icon: "Post Transplant Care  & Long -Term Follow up Ionc 4.webp" },
                                            { text: "Lifestyle guidance and preventive health monitoring", icon: "Post Transplant Care  & Long -Term Follow up Ionc 5.webp" },
                                            { text: "Lifelong follow-up through specialized transplant clinics", icon: "Post Transplant Care  & Long -Term Follow up Ionc 6.webp" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-5 bg-white/10 rounded-2xl p-3 border border-white/5 hover:bg-white/20 transition-all cursor-default">
                                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 p-2.5">
                                                    <Image
                                                        src={`/assets/surgeries/live-transplant/${item.icon}`}
                                                        alt="Icon"
                                                        width={30}
                                                        height={30}
                                                        className="w-full h-full object-contain brightness-0 invert"
                                                    />
                                                </div>
                                                <p className="text-base md:text-lg font-medium leading-tight">
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white/80 text-sm mt-8 pt-4 border-t border-white/10 italic">
                                        This structured follow-up model, guided by <span className="font-bold">Liver Transplant Specialists in Hyderabad at TX Hospitals</span>, is essential for long-term graft survival and sustained quality of life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white py-16 px-6 md:px-16 flex flex-col lg:flex-row gap-12 items-center">
                        {/* Living Donor Safety Section (Left) */}
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-[#1a1a1a]">
                                Living Donor Safety & <span className="text-[#B12C49]">Ethical Practices</span>
                            </h2>
                            <p className="text-[#4a4a4a] text-lg leading-relaxed">
                                TX Hospitals follows the highest ethical standards in living donor liver transplantation. We are committed to complete transparency and donor well-being at every stage.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    "Strict donor eligibility and medical screening",
                                    "Independent donor counselling and informed consent",
                                    "Minimally invasive surgical techniques wherever feasible",
                                    "Comprehensive long-term donor follow-up and care"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 border-l-4 border-l-[#B12C49]">
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                            <Image
                                                src="/assets/surgeries/live-transplant/Right Icon.webp"
                                                alt="Right Icon"
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                        <span className="text-[#1a1a1a] text-lg font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Icon Card (Right) */}
                        <div className="lg:w-1/2 bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Safe Procedures", icon: "Safe Procedures Icon.webp" },
                                    { title: "Ethical Care", icon: "Ethical Care Icon.webp" },
                                    { title: "Expert Team", icon: "Expert Team Icon.webp" },
                                    { title: "Long term Support", icon: "Long term Support Icon.webp" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-[#FAF1F2] rounded-2xl p-6 flex flex-col items-center text-center gap-3">
                                        <Image
                                            src={`/assets/surgeries/live-transplant/${item.icon}`}
                                            alt={item.title}
                                            width={60}
                                            height={60}
                                            className="w-12 h-12 object-contain"
                                        />
                                        <p className="text-[#1a1a1a] font-bold text-base">{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 bg-[#FAF1F2] rounded-xl p-4 text-center">
                                <p className="text-[#B12C49] font-bold text-xl italic">
                                    "Donor safety is our top priority"
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#FAF8F6] py-16 px-6 md:px-16">
                        <div className="max-w-7xl mx-auto space-y-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center">
                                Why Choose <span className="text-[#B12C49]">TX Hospitals</span> for <br /> Liver Transplantation?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { title: "Highly Experienced Team", desc: "Expert liver transplant surgeons with global training and decades of experience", icon: "Highly Experienced Team icon.webp" },
                                    { title: "Advanced Technology", desc: "State-of-the-art surgical equipment and global transplant protocols", icon: "Advanced Technology icon.webp" },
                                    { title: "Ethical Practices", desc: "Transparent and ethical transplant practices with complete donor safety", icon: "Ethical Practices icon.webp" },
                                    { title: "Excellent Outcomes", desc: "Outstanding patient and graft survival rates above global standards", icon: "Excellent Outcomes icon.webp" },
                                    { title: "Comprehensive Care", desc: "Complete care under one roof from evaluation to lifelong follow-up", icon: "Comprehensive Care ixon.webp" },
                                    { title: "International Support", desc: "Dedicated support services for international patients and families", icon: "International Support ixon.webp" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col gap-4">
                                        <div className="bg-[#FAF1F2] w-16 h-16 rounded-2xl flex items-center justify-center p-3">
                                            <Image
                                                src={`/assets/surgeries/live-transplant/${item.icon}`}
                                                alt={item.title}
                                                width={50}
                                                height={50}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                                            <p className="text-[#666] leading-relaxed text-base">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="w-full bg-[#B12C49] py-20 px-6 md:px-16 text-center text-white">
                        <div className="max-w-5xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Start Your Liver Transplant Journey
                            </h2>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                                If you or a loved one is facing advanced liver disease, timely expert care can be life-changing.
                                At TX Hospitals, we are committed to delivering safe, advanced and compassionate liver transplant care
                                tailored to every patient’s needs. Contact TX Hospitals today to schedule a liver transplant consultation and
                                take the first step toward renewed health, confidence and a brighter future.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                                <button className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-10 py-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold hover:bg-white hover:text-[#B12C49] transition-all transform hover:scale-105 active:scale-95 group">
                                    <div className="bg-white/20 p-2 rounded-lg group-hover:bg-[#B12C49]/10">
                                        <Image
                                            src="/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp"
                                            alt="Calendar Icon"
                                            width={32}
                                            height={32}
                                            className="w-7 h-7 object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
                                        />
                                    </div>
                                    Book An Appointment
                                </button>
                                <button className="w-full sm:w-auto bg-white text-[#B12C49] px-8 md:px-10 py-4 rounded-xl flex items-center justify-center gap-3 text-xl font-bold shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95">
                                    <div className="bg-[#FAF1F2] p-2 rounded-lg">
                                        <Image
                                            src="/assets/surgeries/live-transplant/Call Icon 3.webp"
                                            alt="Phone Icon"
                                            width={24}
                                            height={24}
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>
                                    Call Now
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </SecondaryLayout>
        </>
    );
}
