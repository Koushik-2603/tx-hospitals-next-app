import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

export default function WhyChooseHealthPackages() {

    const isMobile = useIsMobile();

    const items = [
        {
            title: "State-of-Art Facilities",
            description:
                "Advanced diagnostic equipment with latest medical technology for accurate results",
            image: "/assets/HP/State-of-Art Icon.webp",
        },
        {
            title: "Expert Doctors",
            description:
                "Experienced medical professionals providing personalized care and consultation",
            image: "/assets/HP/Expert Doctors Icon.webp",
        },
        {
            title: "Detailed Reports",
            description:
                "Comprehensive health reports with clear explanations and recommendations",
            image: "/assets/HP/Detailed Reports Icon.webp",
        },
        {
            title: "Quick Results",
            description:
                "Fast turnaround time for test results with online report access",
            image: "/assets/HP/Quick Results Icon.webp",
        },
    ];

    return (
        <>
            {isMobile ? (
                <div className="rounded-lg bg-pink-800 mx-2 px-2 py-2">
                    <div className="grid grid-cols-2 gap-5 text-center">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-white"
                            >
                                {/* Icon */}
                                <div className="relative w-16 h-16 mb-3">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-bold mb-2">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs leading-relaxed opacity-90">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div >
                </div >
            ) : (
                <div className="max-w-6xl rounded-lg bg-pink-800 mx-auto px-10 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-white"
                            >
                                {/* Icon */}
                                <div className="relative w-24 h-24 mb-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-4">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div >
                </div >
            )
            }
        </>
    );
}
