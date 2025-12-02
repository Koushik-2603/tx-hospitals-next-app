"use client";
import Image from "next/image";

export default function WhenToSeekSecondOpinion() {

    const cards = [
        {
            img: "/assets/SO/major or risk surgery ICon.webp",
            text: "When you’re advised a major or risky surgery",
        },
        {
            img: "/assets/SO/Uncertain or Conflicting Icon.webp",
            text: "If your diagnosis seems uncertain or conflicting"
        },
        {
            img: "/assets/SO/expected Improvement Icon.webp",
            text: "When treatment doesn’t bring expected improvement"
        },
        {
            img: "/assets/SO/Cancer, Cardiac or neurological Treatment Icon.webp",
            text: "Before starting Cancer, Cardiac or Neurological treatments"
        },
        {
            img: "/assets/SO/Rare or Chronic Illnesses Icon.webp",
            text: "To confirm a diagnosis for rare or chronic illnesses"
        },
    ];

    return (
        <section className="w-full bg-gray-200 mt-4 px-12 rounded-3xl">
            <h2 className="text-center text-4xl font-bold text-pink-700 mb-5">
                When Should You Seek a Second Opinion?
            </h2>
            <div className="grid grid-cols-3 gap-24 place-items-center max-w-5xl mx-auto mb-2">
                {cards.slice(0, 3).map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-[#FAF1E7] rounded-3xl shadow-md py-12 w-full h-full text-center border border-pink-700"
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src={card.img}
                                alt="Second opinion icon"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed">{card.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-24 mt-4 max-w-xl mx-auto">
                {cards.slice(3).map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-[#FAF1E7] rounded-3xl shadow-md py-12 w-full h-full text-center border border-pink-700"
                    >
                        <div className="flex justify-center mb-4">
                            <Image
                                src={card.img}
                                alt="Second opinion icon"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
