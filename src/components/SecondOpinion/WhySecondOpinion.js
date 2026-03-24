import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import sanitize from "@/utils/sanitize";

export default function WhySecondOpinion({ data }) {

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
                <section className="w-full bg-white px-2 py-2">
                    <h2 className="text-xl font-semibold text-pink-700 mb-1">
                        {heading}
                    </h2>
                    <div
                        className="text-gray-700 text-xs leading-relaxed mb-1"
                        dangerouslySetInnerHTML={{ __html: topDescription }}
                    />
                    {lines?.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 py-1"
                        >
                            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center border-2 border-pink-700 rounded-md bg-white">
                                <Image
                                    src="/assets/HP/Right Icon.webp"
                                    alt="Tick"
                                    width={12}
                                    height={12}
                                />
                            </div>
                            <div
                                className="text-xs text-gray-900 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                    __html: sanitize(item),
                                }}
                            />
                        </div>
                    ))}
                    <div
                        className="text-gray-700 text-xs leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: bottomDescription }}
                    />
                </section>
            ) : (
                <section className="max-w-6xl mx-auto bg-white py-2">
                    <div className="flex items-center gap-10">
                        <div>
                            <h2 className="text-3xl font-semibold text-pink-700 mb-2">
                                {heading}
                            </h2>
                            <div
                                className="text-gray-700 text-base leading-relaxed mb-3"
                                dangerouslySetInnerHTML={{ __html: topDescription }}
                            />
                            {lines?.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 py-2"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center border-2 border-pink-700 rounded-md bg-white">
                                        <Image
                                            src="/assets/HP/Right Icon.webp"
                                            alt="Tick"
                                            width={15}
                                            height={15}
                                        />
                                    </div>
                                    <div
                                        className="text-lg text-gray-900 leading-relaxed"
                                        dangerouslySetInnerHTML={{
                                            __html: sanitize(item),
                                        }}
                                    />
                                </div>
                            ))}
                            <div
                                className="text-gray-700 text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: bottomDescription }}
                            />
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-[360px] h-[360px]">
                                <Image
                                    src={image}
                                    alt={heading}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
