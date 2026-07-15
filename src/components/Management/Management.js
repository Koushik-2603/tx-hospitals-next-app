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
            name: "Dr. J Ravi Kiran",
            qualification: "MBBS, MD - Paediatrics",
            designation: "",
            image: "/assets/Management/Dr. J Ravi Kiran.webp",
            description: `Dr. J Ravi Kiran is a Consultant Neonatologist and Paediatrician with over 10 years of experience in child healthcare and newborn care. He is experienced in diagnosing and treating common and complex paediatric conditions in infants, children, and adolescents. His areas of care include newborn health, viral fever treatment, childhood infections, growth monitoring, vaccination guidance, and general paediatric care.`,
        },
        {
            id: "management-3",
            name: "Dr. Srikanth Vodnala",
            qualification: "DMS, MBA- Healthcare, EGMP-IIMB, LLB",
            designation: "Group Chief Operating Officer",
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
            id: "management-4",
            name: "Sudha Rani Paranam",
            qualification: "FCA, DISA. Chartered Accountant",
            designation: "TX Hospitals",
            image: "/assets/Management/Sudha Rani Paranam.webp",
            description: `A Chartered Accountant with over 14 years of experience spanning Healthcare, Automobile, Infrastructure, Real Estate, Retail, and Cooperative Societies. Proven track record of delivering strategic financial insights, automating reporting processes, and driving compliance across sectors.`,
        },
        {
            id: "management-5",
            name: "Shrikant Patnaik",
            qualification: "M.com (Osmania University), Certification-M&A and Corporate Finance (Swayam)",
            designation: "TX Hospitals",
            image: "/assets/Management/Shrikant Patnaik.webp",
            description: `Accomplished Finance and Accounting professional with 8+ years of experience across healthcare, hospitals, biotech, and diverse industries. Expertise in financial reporting, accounting operations, Forex management, statutory and regulatory compliance, and internal controls. Proven ability to optimize financial processes, ensure compliance, and deliver accurate, timely financial insights that support business growth and operational excellence.`,
        },
        {
            id: "management-6",
            name: "Dr. Naveen Meesala",
            qualification: "Director - Tx Hospital, Uppal",
            designation: "Operations & Business Development",
            image: "/assets/Management/Dr. Naveen Meesala.webp",
            description: `Hospital administrator with 25 years of experience across private and government sectors.`,
        },
        {
            id: "management-7",
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
            id: "management-8",
            name: "Kishore Kumar Akula",
            qualification: "",
            designation: "TX Hospitals Uppal - COO",
            image: "/assets/Management/Kishore Kumar Akula.webp",
            description: `Mr Kishore Kumar Akula, a healthcare management professional with over 18 years of experience in hospital operations and administration. Had the privilege of working with several leading multi-specialty and specialty hospitals across India, holding key leadership roles in operations, administration, and business management. Expertise includes hospital operations, NABH accreditation, strategic planning, revenue growth, team development, and enhancing patient experience. committed to building efficient healthcare systems that deliver quality care while driving sustainable organizational growth.`,
        },
        {
            id: "management-9",
            name: "Vade Dileep Reddy",
            qualification: "",
            designation: "TX Hospitals Kachiguda - COO",
            image: "/assets/Management/Vade Dileep Reddy.webp",
            description: `Vade Dileep Reddy is a healthcare management professional with over 13 years of experience in hospital operations and administration. He holds a B.Tech degree and an MBA in Healthcare & Hospital Management from the University of Hyderabad.
Over the course of his career, he has worked with several leading hospitals, gaining extensive expertise in hospital administration, operational excellence, quality management, patient experience, strategic planning, and healthcare service delivery. He has been instrumental in streamlining hospital processes, enhancing operational efficiency, and ensuring high standards of patient care.`,
        },
        {
            id: "management-10",
            name: "Chantati Padma Janardhana Rao",
            qualification: "",
            designation: "TX Hospitals Miyapur - COO",
            image: "/assets/Management/Chantati Padma Janardhana Rao.webp",
            description: `Mr. Janardhan is a seasoned healthcare management professional with over 22 years of experience in hospital operations, administration, and strategic business management. Throughout his career, he has held key leadership positions across reputed healthcare institutions, successfully driving operational excellence, business growth, and organizational transformation. His expertise includes hospital operations, strategic planning, process optimization, revenue enhancement, quality initiatives, team development, and delivering an exceptional patient experience. As the Chief Operating Officer at TX Hospitals, Miyapur, he is committed to building efficient healthcare systems, fostering a culture of excellence, and ensuring high-quality, patient-centric care while driving sustainable organizational growth.`,
        },
        {
            id: "management-11",
            name: "M.V.Padmalatha",
            qualification: "MBA – HR",
            designation: "TX Hospitals - HR",
            image: "/assets/Management/M.V.Padmalatha.webp",
            description: `Padmalatha is a visionary Human Resource professional holding 2 decades of HR experience. She is specialized in implementing data driven HR metrics, workforce planning, strategic employee relations, retention initiatives for frontline healthcare staff, grievance resolutions. She has developed various HR initiatives aligning overall clinical & non – clinical competencies. With her good people management skills she collaborates with senior management to create a positive work place culture, shaping organizational culture, supports employee development by initiating various training programs contributing to overall success & sustainability.`,
        },
        {
            id: "management-12",
            name: "M Manoj Reddy",
            qualification: "PGDM",
            designation: "TX Hospitals Banjara Hills - HR",
            image: "/assets/Management/M Manoj Reddy.webp",
            description: `I have 7 years of experience in HR Operations and Payroll. During this time, I have handled end-to-end HR activities, including recruitment, onboarding, attendance and leave management, payroll processing, employee records, statutory compliance, and employee relations.\n\nI have worked in NABH and JCI-accredited hospitals, where I gained hands-on experience in maintaining HR processes in line with healthcare quality standards. I have also been involved in manpower planning, performance management, HR documentation, policy implementation, and coordinating with different departments to ensure smooth day-to-day HR operations.`,
        },
        {
            id: "management-13",
            name: "P. Buchi Babu",
            qualification: "MBA – Human Resources",
            designation: "TX Hospitals Miyapur - HR",
            image: "/assets/Management/P. Buchi Babu.webp",
            description: `Buchi Babu is a dynamic Human Resource professional with over a decade of extensive HR and administrative experience across the pharmaceutical, automobile and biotechnology sectors. He specializes in talent acquisition, end-to-end recruitment lifecycle management, strategic contract labor management, and ensuring absolute statutory compliance with labor laws. He has successfully spearheaded employee engagement calendars, robust reward and recognition programs, and seamless payroll and exit processes. Equipped with strong analytical and conflict-resolution skills, Buchi Babu effectively bridges plant operations with corporate HR strategy, driving organizational compliance through rigorous internal and external audits while fostering a positive, safe, and collaborative workplace culture.`,
        },
        {
            id: "management-14",
            name: "Kambham Nagajyothi",
            qualification: "MBA-HR & Finance",
            designation: "TX Hospitals Kachiguda - HR",
            image: "/assets/Management/Kambham Nagajyothi.webp",
            description: `Nagajyothi has 2 years experience in IT sector. 3 years experience in health sector in the department of Human Resource. She is managed employee recruitment and onboarding process.checked resumes and coordinated interview, completed joining formalities, prepared appointment letters, maintained HR documentation and employee records.Handled employee queries regarding benefits and HR policies. she processed attendance, Leaves, payroll information in greythr app. Monitored employee performance appraisals process. prepared HR reports. Approaces department HODs on workforce planning. coordinated background verification collected the document. Managed exit formalities, full and final settlement. Provided still working, for exit employees provided Service and experience letters, Payslips.`,
        },
        {
            id: "management-15",
            name: "Mohammad Abdul Khayyum",
            qualification: "MBA – Human Resource Management",
            designation: "TX Hospitals Uppal - HR",
            image: "/assets/Management/Mohammad Abdul Khayyum.webp",
            description: `Abdul Khayyum is a dedicated Human Resource professional with over 6 years of experience in the healthcare industry. He has expertise in employee onboarding and joining formalities, payroll processing, attendance and leave management, HR documentation, statutory compliance, employee records management, and HR operations. He is committed to ensuring smooth HR processes while maintaining accuracy, compliance, and confidentiality.\n\nWith strong organizational and interpersonal skills, he effectively coordinates with department heads and employees to streamline HR functions, support workforce management, and enhance employee experience. He actively contributes to policy implementation, employee engagement initiatives, and maintaining HR systems to support organizational growth. His proactive approach, attention to detail, and commitment to operational excellence enable him to deliver efficient HR services and contribute to the overall success of the organization.`,
        }
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
