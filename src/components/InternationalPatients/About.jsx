import useIsMobile from "@/hooks/useIsMobile";
import { services } from "@/utils/services";

export default function About() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <>
                    <div className="flex flex-col justify-between items-start gap-4 p-3 bg-white">
                        {/* Left Content */}
                        <div className="w-full">
                            <h2 className="text-2xl font-bold mb-2">
                                About <span className="font-inter font-extrabold">TX Hospitals.</span>
                            </h2>
                            <p className="text-base mb-4 font-inter leading-relaxed text-gray-700">
                                TX Hospitals in Hyderabad is a leading multispecialty healthcare
                                facility. With a dedicated team of experts and state-of-the-art
                                technology, we excel in Cardiology, Orthopaedics, Nephrology,
                                Neurology, and Organ Transplantation. We serve patients from all
                                backgrounds, both locally and internationally. Our hospital is
                                renowned for international standards in medical care, ensuring
                                patient satisfaction and well-being. We are committed to clinical
                                excellence, safety, transparency, and affordability, setting a new
                                benchmark in healthcare.
                            </p>
                            <iframe
                                className="rounded-lg shadow-lg w-full h-full transition-transform duration-300 transform hover:scale-105"
                                src="https://www.youtube.com/embed/3-80_dYP6uE?autoplay=1"
                                title="Hospital Overview Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <section className="py-1 px-5 bg-white">
                        <h2 className="font-inter text-3xl font-semibold text-center text-pink-800 mb-2">
                            Why Choose Us
                        </h2>
                        <p className="font-inter text-left text-base max-w-3xl mx-auto text-gray-700 mb-6">
                            Ultimately, the choice of a hospital should be based on your individual healthcare needs and priorities.
                            It’s a good idea to conduct thorough research and consult with medical professionals to make an
                            informed decision that aligns with your health goals.
                        </p>

                        <div className="grid grid-cols-1 gap-5">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-start gap-5">
                                    <img loading="lazy" src={service.icon} alt={service.title} className="w-16 h-16" />
                                    <div>
                                        <h4 className="font-inter text-base font-bold text-pink-800 mb-1">{service.title}</h4>
                                        <p className="text-gray-700 text-sm font-inter">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            ) : (
                <>
                    <div className="flex flex-row justify-between items-start gap-4 p-12 bg-white">
                        <div className="w-2/3">
                            <h2 className="text-3xl font-bold mb-4">
                                About <span className="font-inter font-extrabold">TX Hospitals.</span>
                            </h2>
                            <p className="text-lg font-inter leading-relaxed text-gray-700">
                                TX Hospitals in Hyderabad is a leading multispecialty healthcare
                                facility. With a dedicated team of experts and state-of-the-art
                                technology, we excel in Cardiology, Orthopaedics, Nephrology,
                                Neurology, and Organ Transplantation. We serve patients from all
                                backgrounds, both locally and internationally. Our hospital is
                                renowned for international standards in medical care, ensuring
                                patient satisfaction and well-being. We are committed to clinical
                                excellence, safety, transparency, and affordability, setting a new
                                benchmark in healthcare.
                            </p>
                        </div>
                        <div className="w-1/3 flex justify-center items-start">
                            <iframe
                                className="rounded-lg shadow-lg w-full h-60 transition-transform duration-300 transform hover:scale-105"
                                src="https://www.youtube.com/embed/3-80_dYP6uE?autoplay=1"
                                title="Hospital Overview Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <section className="px-20 bg-white">
                        <h2 className="font-inter text-4xl font-semibold text-center text-pink-800 mb-3">
                            Why Choose Us
                        </h2>
                        <p className="font-inter text-center max-w-3xl mx-auto text-gray-700 mb-6">
                            Ultimately, the choice of a hospital should be based on your individual healthcare needs and priorities.
                            It’s a good idea to conduct thorough research and consult with medical professionals to make an
                            informed decision that aligns with your health goals.
                        </p>
                        <div className="grid grid-cols-2 gap-10">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-start gap-5">
                                    <img loading="lazy" src={service.icon} alt={service.title} className="w-16 h-16" />
                                    <div>
                                        <h4 className="font-inter text-lg font-bold text-pink-800 mb-1">{service.title}</h4>
                                        <p className="text-gray-700 font-inter">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}
        </>
    );
}