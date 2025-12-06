import useIsMobile from "@/hooks/useIsMobile";

export default function RehabilitationServices() {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <>
                    <section className="bg-gray-100 px-2 py-2">
                        <h2 className="text-lg text-center font-semibold text-red-700 mb-2">
                            Rehabilitation & Wellness Services
                        </h2>

                        <div className="space-y-1 text-left text-xs text-gray-800">
                            <div>
                                <h3 className="font-semibold">
                                    Physiotherapy & Rehabilitation –
                                    <span className="font-normal">
                                        {" "}Post-surgical recovery, pain management, and mobility restoration.
                                    </span>
                                </h3>
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Diet & Nutrition Counselling –
                                    <span className="font-normal">
                                        {" "}Personalized plans for weight management, diabetes, and cardiac health.
                                    </span>
                                </h3>
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Pain Management Clinic –
                                    <span className="font-normal">
                                        {" "}Non-surgical treatments for chronic pain and nerve disorders.
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </section>
                    <div className="px-2 text-xs text-gray-950 text-center">
                        <p>
                            With world-class infrastructure, cuttinng-edge technology, and expert medical professionals, TX Hospitals ensures
                            comprehensive and compassionate care for every patient.
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <section className="bg-gray-100 py-6 px-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl font-semibold text-red-700 mb-4">
                                Rehabilitation & Wellness Services
                            </h2>

                            <div className="space-y-3 pl-24 text-left text-gray-800">
                                <div>
                                    <h3 className="font-semibold">
                                        Physiotherapy & Rehabilitation –
                                        <span className="font-normal">
                                            {" "}Post-surgical recovery, pain management, and mobility restoration.
                                        </span>
                                    </h3>
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Diet & Nutrition Counselling –
                                        <span className="font-normal">
                                            {" "}Personalized plans for weight management, diabetes, and cardiac health.
                                        </span>
                                    </h3>
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        Pain Management Clinic –
                                        <span className="font-normal">
                                            {" "}Non-surgical treatments for chronic pain and nerve disorders.
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="max-w-6xl mx-auto px-12 py-6 text-gray-950 text-justify">
                        <p>
                            With world-class infrastructure, cuttinng-edge technology, and expert medical professionals, TX Hospitals ensures
                            comprehensive and compassionate care for every patient.
                        </p>
                    </div>
                </>
            )}
        </>
    );
}
