import useIsMobile from "@/hooks/useIsMobile";
import Speciality from "@/components/InternationalPatients/Speciality";

export default function OurSpecialities() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <div>
                    <div className="bg-white text-center relative">
                        <div className="px-4 pt-6">
                            <h2 className="font-inter text-2xl text-[#a8233d] font-bold">Our Specialities</h2>
                            <p className="font-inter mx-auto text-gray-700 text-base text-left mt-2">
                                At TX Hospital, we’re dedicated to serving your healthcare needs with excellence.
                                Our specialties represent our commitment to providing you with the highest
                                quality care possible. Your health and well-being are our top priorities.
                            </p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center gap-16 items-center px-6 pt-4">
                            <div>
                                <div className="grid grid-cols-4 mb-4">
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Cardiac Science.png" title="Cardiac Science" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/oncology logo.png" title="Oncology" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Internal Medicine.png" title="Internal Medicine" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Endocrinology.png" title="Endocrinology" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Pulmonology.png" title="Pulmonology" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Neuro Science.png" title="Neuro Science" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Gastro Science.png" title="Gastro Science" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Orthopedics Logo.png" title="Orthopedics & Rheumatology" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Mother & Child care Logo.png" title="Mother & Child" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Skin care.png" title="Skin Science" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Transplant Centre.png" title="Transplant Center" />
                                    <Speciality icon="/assets/International_Patients/Our Specialities/Dental logo.png" title="Dental Science" />
                                </div>
                                <button className="bg-[#a8233d] hover:bg-[#921b34] text-white font-bold py-1 px-2 rounded-full shadow">
                                    <span className="font-inter text-sm">ENQUIRE NOW</span>
                                </button>
                            </div>
                            <div className="flex flex-col items-center pr-4">
                                <img loading="lazy" src="/assets/International_Patients/Our Specialities/ISO Logo.png" alt="ISO Certified" className="h-20 mb-2" />
                                <div className="flex justify-center gap-10">
                                    <img loading="lazy" src="/assets/International_Patients/Our Specialities/Nabh Logo.png" alt="NABH" className="h-20" />
                                    <img loading="lazy" src="/assets/International_Patients/Our Specialities/JCI logo.png" alt="JCI" className="h-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center bg-white py-6 px-4">
                        <h2 className="text-2xl font-inter font-semibold text-[#9C2C45] mb-2">
                            Plan At Our Hospital
                        </h2>
                        <div className="w-full flex justify-center">
                            <img loading="lazy"
                                src="/assets/International_Patients/Plan At Our Hospital Image.png"
                                alt="Doctor with Patient"
                                className="rounded-xl w-full max-w-lg object-cover"
                            />
                        </div>
                        <div className="w-full mb-2">
                            <p className="text-gray-700 font-inter text-base mb-2">
                                When you plan to come to TX Hospitals for medical treatment, it’s crucial to
                                schedule it well in advance due to the distance you’ll be traveling.
                                <br />
                                Our International Patients Department will contact you and provide the
                                admission date and arrival time at the hospital. If any pre-tests are needed,
                                we’ll also schedule them accordingly.
                            </p>
                            <button className="bg-[#9C2C45] text-white font-semibold py-1 px-3 rounded-full">
                                <span className="font-inter text-sm">ENQUIRE NOW</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="bg-white text-center relative">
                        <div className="px-4 pt-12">
                            <h2 className="font-inter text-4xl text-[#a8233d] font-bold">Our Specialities</h2>
                            <p className="font-inter max-w-3xl mx-auto text-gray-700 text-lg mt-4">
                                At TX Hospital, we’re dedicated to serving your healthcare needs with excellence.
                                Our specialties represent our commitment to providing you with the highest
                                quality care possible. Your health and well-being are our top priorities.
                            </p>
                        </div>
                        <div className="relative z-0">
                            <img
                                loading="lazy"
                                src="/assets/International_Patients/Our Specialities/Our Specialities BG.png"
                                alt="Curved Background"
                                className="w-full object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-center gap-32 items-center px-12 pt-36 pb-16">
                                <div>
                                    <div className="grid grid-cols-6 mb-8">
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Cardiac Science.png" title="Cardiac Science" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/oncology logo.png" title="Oncology" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Internal Medicine.png" title="Internal Medicine" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Endocrinology.png" title="Endocrinology" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Pulmonology.png" title="Pulmonology" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Neuro Science.png" title="Neuro Science" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Gastro Science.png" title="Gastro Science" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Orthopedics Logo.png" title="Orthopedics & Rheumatology" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Mother & Child care Logo.png" title="Mother & Child" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Skin care.png" title="Skin Science" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Transplant Centre.png" title="Transplant Center" />
                                        <Speciality icon="/assets/International_Patients/Our Specialities/Dental logo.png" title="Dental Science" />
                                    </div>
                                    <button className="bg-[#a8233d] hover:bg-[#921b34] text-white font-bold py-2 px-6 rounded-full text-lg shadow">
                                        <span className="font-inter">ENQUIRE NOW</span>
                                    </button>
                                </div>
                                <div className="flex flex-col items-center mb-6 pr-4">
                                    <img loading="lazy" src="/assets/International_Patients/Our Specialities/ISO Logo.png" alt="ISO Certified" className="h-28 mb-4" />
                                    <div className="flex justify-center gap-10">
                                        <img loading="lazy" src="/assets/International_Patients/Our Specialities/Nabh Logo.png" alt="NABH" className="h-28" />
                                        <img loading="lazy" src="/assets/International_Patients/Our Specialities/JCI logo.png" alt="JCI" className="h-28" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center bg-white py-12 px-16">
                        {/* Left Section */}
                        <div className="w-1/2 mb-8 md:mb-0">
                            <h2 className="text-5xl font-inter font-semibold text-[#9C2C45] mb-4">
                                Plan At Our Hospital
                            </h2>
                            <p className="text-gray-700 font-inter text-lg mb-6">
                                When you plan to come to TX Hospitals for medical treatment, it’s crucial to
                                schedule it well in advance due to the distance you’ll be traveling.
                                <br />
                                Our International Patients Department will contact you and provide the
                                admission date and arrival time at the hospital. If any pre-tests are needed,
                                we’ll also schedule them accordingly.
                            </p>
                            <button className="bg-[#9C2C45] text-white font-semibold py-2 px-6 rounded-full">
                                <span className="font-inter">ENQUIRE NOW</span>
                            </button>
                        </div>

                        {/* Right Section - Image */}
                        <div className="w-1/2 flex justify-center">
                            <img loading="lazy"
                                src="/assets/International_Patients/Plan At Our Hospital Image.png"
                                alt="Doctor with Patient"
                                className="rounded-xl w-full max-w-lg object-cover"
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}