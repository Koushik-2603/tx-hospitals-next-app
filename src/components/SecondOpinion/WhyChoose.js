import useIsMobile from "@/hooks/useIsMobile";

export default function WhyChoose({ data }) {

    const isMobile = useIsMobile();
    const {
        heading,
        topDescription,
        items,
        bottomDescription,
    } = data;

    return (
        <>
            {isMobile ? (
                <section className="w-full bg-white px-2 py-2">
                    <h2 className="text-xl text-center font-bold text-pink-700 mb-2">
                        {heading}
                    </h2>
                    <div
                        className="text-sm text-center text-gray-800 mb-5"
                        dangerouslySetInnerHTML={{ __html: topDescription }}
                    />
                    <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mb-3">
                        {items.map((item, index) => (
                            <div className="flex flex-col bg-[#EEDADD] rounded-2xl text-center px-2 py-2 shadow-sm gap-2">
                                <div
                                    key={index}
                                    className="text-gray-900 text-sm font-medium"
                                >
                                    {item?.name}
                                </div>
                                <div className="text-xs">
                                    {item?.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="text-sm text-center text-gray-800 mb-2"
                        dangerouslySetInnerHTML={{ __html: bottomDescription }}
                    />
                </section>
            ) : (
                <section className="max-w-6xl mx-auto bg-white py-2">
                    <h2 className="text-4xl text-center font-bold text-pink-700 mb-3">
                        {heading}
                    </h2>
                    <div
                        className="text-xl text-center text-gray-800 mb-5"
                        dangerouslySetInnerHTML={{ __html: topDescription }}
                    />
                    <div className="grid grid-cols-3 gap-5 max-w-5xl mx-auto mb-6">
                        {items.map((item, index) => (
                            <div className="flex flex-col bg-[#EEDADD] rounded-2xl text-center px-6 py-4 shadow-sm gap-2">
                                <div
                                    key={index}
                                    className="text-gray-900 font-medium"
                                >
                                    {item?.name}
                                </div>
                                <div>
                                    {item?.description}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="text-xl text-center text-gray-800 mb-5"
                        dangerouslySetInnerHTML={{ __html: bottomDescription }}
                    />
                </section>
            )}
        </>
    );
}