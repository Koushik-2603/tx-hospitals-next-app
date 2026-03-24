import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

export default function RiskOfDelay({ data }) {

    const isMobile = useIsMobile();
    const {
        heading,
        topDescription,
        lines,
        image,
        bottomDescription,
    } = data;

    return (
        <>
            {isMobile ? (
                <section className="w-full bg-pink-50 px-2 py-2">
                    <div className="text-center mb-10">
                        <h2 className="text-xl font-bold text-pink-700 mb-2">
                            {heading}
                        </h2>
                        <div
                            className="text-gray-800 text-xs"
                            dangerouslySetInnerHTML={{ __html: topDescription }}
                        />
                    </div>
                    <div className="relative bg-white rounded-3xl border border-gray-300 p-3">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                            <div className="w-20 h-20 relative">
                                <Image
                                    src={image}
                                    alt="Warning"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        <ul className="mt-6 list-disc ml-6 space-y-2">
                            {lines?.map((item, index) => (
                                <li key={index} className="text-gray-800 text-base">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="max-w-4xl mx-auto mt-2 text-center text-gray-800 text-sm"
                        dangerouslySetInnerHTML={{ __html: bottomDescription }}
                    />
                </section>
            ) : (
                <section className="w-full bg-pink-50 py-2">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-pink-700 mb-3">
                                {heading}
                            </h2>
                            <div
                                className="text-gray-800 text-lg"
                                dangerouslySetInnerHTML={{ __html: topDescription }}
                            />
                        </div>
                        <div className="relative bg-white rounded-3xl border border-gray-300 max-w-3xl mx-auto p-6">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                <div className="w-20 h-20 relative">
                                    <Image
                                        src={image}
                                        alt="Warning"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                            <ul className="mt-6 list-disc ml-6 space-y-2">
                                {lines?.map((item, index) => (
                                    <li key={index} className="text-gray-800 text-xl">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className="max-w-4xl mx-auto mt-8 text-center text-gray-800 text-base md:text-lg"
                            dangerouslySetInnerHTML={{ __html: bottomDescription }}
                        />
                    </div>
                </section>
            )}
        </>
    );
}
