import React from 'react';
import Head from 'next/head';
import SecondaryLayout from "@/components/Layouts/SecondaryLayout";
import HeroSection from "@/components/LiverTransplant/HeroSection";
import AboutSection from '@/components/LiverTransplant/AboutSection';
import ServicesSection from '@/components/LiverTransplant/ServicesSection';
import EvaluationTimeline from '@/components/KidneyTransplant/EvaluationTimeline';
import CtaSection from '@/components/LiverTransplant/CtaSection';
import InfrastructureSection from '@/components/LiverTransplant/InfrastructureSection';
import DonorSafetySection from '@/components/LiverTransplant/DonorSafetySection';
import WhyChooseSection from '@/components/LiverTransplant/WhyChooseSection';
import FinalCtaSection from '@/components/LiverTransplant/FinalCtaSection';

export default function LiverTransplantationSurgery() {

    const heroData = {
        highlightedTitle: "Kidney Transplantation Surgery",
        subtitle: "in Hyderabad, India",
        description: "Advanced Kidney Transplant Care with Compassion, Precision & Global Standards. A new beginning awaits — restored health, renewed freedom from dialysis and world-class expertise.",
        bannerImage: "/assets/surgeries/kidney-transplant/Transplantation Surgery  Banner Image.webp",
        backgroundImage: "/assets/surgeries/live-transplant/Transplantation Surgery  Banner Image Back Box.webp",
        buttons: [
            {
                text: "Book An Appointment",
                icon: "/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp",
                alt: "Calendar Icon",
                className: "bg-[#B12C49] text-white hover:bg-[#96253d]"
            },
            {
                text: "Call Now",
                icon: "/assets/surgeries/live-transplant/Call Icon 3.webp",
                alt: "Phone Icon",
                width: 20,
                height: 20,
                className: "border-2 border-[#B12C49] text-[#B12C49] bg-[#fde8eb] hover:bg-[#fbdada]"
            }
        ]
    };

    const aboutData = {
        whatIs: {
            title: "What is a Kidney Transplant?",
            paragraphs: [
                "A kidney transplant is a surgical procedure in which a diseased or non-functioning kidney is replaced with a healthy kidney from a living donor or a deceased donor. It is recommended for patients with end-stage kidney disease or irreversible kidney failure when dialysis is no longer sufficient to maintain quality of life.",
                <>With modern surgical techniques, meticulous patient selection and structured post-operative care, today <span className="text-[#B12C49] font-bold">Best Kidney Transplantation surgery in India</span> offers excellent long-term survival, improved energy levels and freedom from lifelong dialysis for eligible patients treated at <span className="text-[#B12C49] font-bold">TX Hospitals</span>.</>,
                <>Our expert nephrology and transplant team at <span className="text-black font-bold">TX Hospitals</span> carefully evaluates each patient to determine suitability, optimal timing and the safest transplant approach, ensuring outcomes aligned with international standards followed by the Best Kidney Transplant Hospitals in Hyderabad.</>
            ]
        },
        whoNeeds: {
            title: "Who Needs a Kidney Transplant?",
            subtitle: "You may be advised a Kidney transplant if you have:",
            icon: "/assets/surgeries/live-transplant/Right Icon.webp",
            list: [
                "End-stage kidney disease (ESRD)",
                "Chronic kidney disease (Stage 4 or 5)",
                "Long-term dialysis dependency",
                "Diabetic nephropathy",
                "Hypertensive kidney failure",
                "Genetic or congenital kidney disorders",
                "Glomerulonephritis or autoimmune kidney disease",
                "Kidney failure with complications such as fluid overload, electrolyte imbalance, anemia or bone disease"
            ]
        }
    };

    const servicesData = {
        header: {
            title: "Comprehensive",
            highlightedPart: "Kidney Transplant",
            subtitle: "Services",
            description: <>At <span className="text-[#B12C49] font-bold">TX Hospitals,</span> we provide a complete spectrum of kidney transplant services under one roof:</>
        },
        services: [
            {
                title: "Living Donor <br /> Kidney Transplantation (LDKT)",
                description: "A healthy donor donates one kidney, allowing timely transplantation with excellent long-term graft function & faster recovery for the recipient."
            },
            {
                title: "High Risk & Repeat Kidney <br /> Transplants",
                description: "Advanced expertise in managing complex cases including sensitized patients, ABO-incompatible transplants and repeat kidney transplantation."
            }
        ]
    };

    const evaluationData = {
        content: {
            title: "Comprehensive",
            highlightedPart: "Pre-Transplant",
            subtitle: "Evaluation",
            paragraphs: [
                "Successful kidney transplantation begins with thorough preparation. At TX Hospitals, our multidisciplinary transplant team conducts:",
                "This comprehensive approach ensures both recipient and donor are fully prepared under the supervision of an experienced Kidney Transplant Specialist."
            ]
        },
        items: [
            { title: "Medical Assessment", desc: "Detailed evaluation of kidney disease severity and overall health", icon: "Medical Assessment Icon.webp" },
            { title: "Blood Tests", desc: "Renal function tests, immunological matching and viral screening", icon: "Blood Tests Icon.webp" },
            { title: "Imaging Studies", desc: "Ultrasound, CT scan and vascular mapping", icon: "Imaging Studies Icon.webp" },
            { title: "Health Screening", desc: " Cardiac, pulmonary and infection risk assessment", icon: "Health Screening Icon.webp" },
            { title: "Nutrition", desc: "Nutritional counselling and metabolic optimization", icon: "Nutrition Icon.webp" },
            { title: "Donor Evaluation", desc: "Psychological assessment, donor safety checks and compatibility testing", icon: "Donor Evaluation Kindey Icon.webp" }
        ]
    };

    const ctaButtons = [
        {
            text: "Book An Appointment",
            icon: "/assets/surgeries/live-transplant/Book an Appointment  Icon 3.webp",
            alt: "Calendar Icon",
            className: "border-2 border-white text-white",
            iconBgClass: "p-2 rounded-lg",
            iconClass: "w-7 h-7 object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
        },
        {
            text: "Call Now",
            icon: "/assets/surgeries/live-transplant/Call Icon 3.webp",
            alt: "Phone Icon",
            width: 24,
            height: 24,
            className: "bg-white text-[#B12C49] shadow-2xl hover:bg-gray-100",
            iconBgClass: "p-2 rounded-lg",
            iconClass: "w-6 h-6 object-contain"
        }
    ];

    const infrastructureData = {
        header: {
            title: "Expert Surgical Care &",
            highlightedPart: "Advanced Infrastructure",
            description: `Kidney transplant surgeries at <span class="text-black font-bold">TX Hospitals</span> are performed by some of the most experienced <span class="text-black font-bold">Kidney transplant surgeons in India,</span> supported by advanced anaesthesia, critical care and surgical technology.`
        },
        infrastructure: {
            title: "Our Infrastructure",
            items: [
                { text: "Advanced transplant operating theaters", icon: "Our Infrastructure Icon 1.webp" },
                { text: "Dedicated renal transplant intensive care units", icon: "Our Infrastructure Icon 2.webp" },
                { text: "Strict infection-control and sterile transplant pathways", icon: "Our Infrastructure Icon 3.webp" },
                { text: "24/7 transplant emergency and dialysis support teams", icon: "Our Infrastructure Icon 4.webp" }
            ]
        },
        postCare: {
            title: "Post-Transplant Care & Long-Term Follow-Up",
            description: `Our commitment continues long after surgery. Post-transplant care at <span class="font-bold underline">TX Hospitals</span> includes:`,
            items: [
                { text: "Personalized immunosuppressive therapy management", icon: "Post Transplant Care  & Long -Term Follow up Ionc 1.webp" },
                { text: "Continuous monitoring for rejection and infections", icon: "Post Transplant Care  & Long -Term Follow up Ionc 2.webp" },
                { text: "Regular Kidney function and graft surveillance", icon: "Post Transplant Care  & Long -Term Follow up Ionc 3.webp" },
                { text: "Lifestyle modification guidance and preventive care", icon: "Post Transplant Care  & Long -Term Follow up Ionc 5.webp" },
                { text: "Lifelong follow-up through dedicated transplant clinics", icon: "Post Transplant Care  & Long -Term Follow up Ionc 6.webp" }
            ],
            footer: `This structured follow-up, guided by <span class="font-bold">Top Kidney Transplant Specialists in Hyderabad at TX Hospitals</span>, is vital for long-term graft survival and sustained quality of life.`
        }
    };

    const safetyData = {
        content: {
            title: "Living Donor Safety & ",
            highlightedPart: "Ethical Practices",
            description: "TX Hospitals follows the highest ethical and medical standards in kidney transplantation, with donor safety as the highest priority.",
            items: [
                "Strict donor eligibility and medical screening",
                "Independent donor counselling and informed consent",
                "Minimally invasive donor nephrectomy wherever appropriate",
                "Comprehensive short-term and long-term donor follow-up"
            ]
        },
        grid: {
            quote: "Donor safety is our top priority",
            items: [
                { title: "Safe Procedures", icon: "Safe Procedures Icon.webp" },
                { title: "Ethical Care", icon: "Ethical Care Icon.webp" },
                { title: "Expert Team", icon: "Expert Team Icon.webp" },
                { title: "Long term Support", icon: "Long term Support Icon.webp" }
            ]
        }
    };

    const whyChooseData = {
        header: {
            title: "Why Choose",
            highlightedPart: "TX Hospitals",
            subtitle: "for",
            subtitle2: "Kidney Transplantation?"
        },
        features: [
            { title: "Highly Experienced Team", desc: "Expert kidney transplant surgeons with global training and decades of experience", icon: "Highly Experienced Team icon.webp" },
            { title: "Advanced Technology", desc: "State-of-the-art surgical equipment and global transplant protocols", icon: "Advanced Technology icon.webp" },
            { title: "Ethical Practices", desc: "Transparent and ethical transplant practices with complete donor safety", icon: "Ethical Practices icon.webp" },
            { title: "Excellent Outcomes", desc: "Outstanding patient and graft survival rates above global standards", icon: "Excellent Outcomes icon.webp" },
            { title: "Comprehensive Care", desc: "Complete care under one roof from evaluation to lifelong follow-up", icon: "Comprehensive Care ixon.webp" },
            { title: "International Support", desc: "Dedicated support services for international patients and families", icon: "International Support ixon.webp" }
        ]
    };

    const finalCtaData = {
        title: "Start Your Kidney Transplant Journey",
        description: "If you or a loved one is living with advanced kidney disease, timely expert intervention can transform life. At TX Hospitals, we are committed to delivering safe, ethical and advanced kidney transplant care tailored to every patient. Contact TX Hospitals today to schedule a kidney transplant consultation and take the first step toward freedom from dialysis, renewed health and a brighter future.",
        buttons: ctaButtons
    };

    return (
        <>
            <Head>
                <title>Best Kidney Transplantation Surgery in Hyderabad, India | TX Hospitals</title>
                <meta name="description" content="TX Hospitals offers advanced kidney transplantation surgery in Hyderabad with expert surgeons and world-class facilities. Book your appointment today." />
            </Head>
            <SecondaryLayout>
                <div className="pt-4">
                    <HeroSection
                        title={heroData.title}
                        highlightedTitle={heroData.highlightedTitle}
                        subtitle={heroData.subtitle}
                        description={heroData.description}
                        buttons={heroData.buttons}
                        bannerImage={heroData.bannerImage}
                        backgroundImage={heroData.backgroundImage}
                    />
                    <AboutSection
                        whatIsData={aboutData.whatIs}
                        whoNeedsData={aboutData.whoNeeds}
                    />
                    <ServicesSection
                        headerData={servicesData.header}
                        servicesData={servicesData.services}
                    />
                    <EvaluationTimeline
                        headerData={{
                            ...evaluationData.content,
                            footer: "This comprehensive approach ensures both recipient and donor are fully prepared under the supervision of an experienced Kidney Transplant Specialist."
                        }}
                        steps={evaluationData.items}
                    />
                    <CtaSection
                        buttons={ctaButtons}
                    />
                    <InfrastructureSection
                        headerData={infrastructureData.header}
                        infrastructureData={infrastructureData.infrastructure}
                        postCareData={infrastructureData.postCare}
                    />
                    <DonorSafetySection
                        safetyData={safetyData.content}
                        gridData={safetyData.grid}
                    />
                    <WhyChooseSection
                        headerData={whyChooseData.header}
                        features={whyChooseData.features}
                    />
                    <FinalCtaSection
                        title={finalCtaData.title}
                        description={finalCtaData.description}
                        buttons={finalCtaData.buttons}
                    />
                </div>
            </SecondaryLayout>
        </>
    );
}