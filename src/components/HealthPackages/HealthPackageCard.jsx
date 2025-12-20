"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

export default function HealthPackageCard({
    title,
    description,
    packageCovers = [],
    actualPrice,
    offerPrice,
    detailsUrl = "#",
}) {
    const router = useRouter();
    const [showAll, setShowAll] = useState(false);
    const isMobile = useIsMobile();

    const MAX_DESC_LENGTH = 100;
    const displayedDescription =
        description?.length > MAX_DESC_LENGTH
            ? description.slice(0, MAX_DESC_LENGTH) + "..."
            : description;

    const visibleCovers = showAll
        ? packageCovers
        : packageCovers.slice(0, 4);

    const handleRedirect = () => {
        if (detailsUrl) {
            router.push(detailsUrl);
        }
    };

    return (
        <>
            {isMobile ? (
                <div
                    onClick={handleRedirect}
                    className="relative bg-white rounded-2xl shadow-2xl p-4 w-full max-w-sm border border-gray-400 cursor-pointer hover:shadow-xl transition flex flex-col h-full"
                >
                    <div>
                        <h3 className="text-base font-bold text-pink-700 mb-2">
                            {title}
                        </h3>

                        {description && (
                            <p className="text-xs text-gray-500 mb-4">
                                {displayedDescription}
                            </p>
                        )}
                    </div>
                    <div className="flex-grow">
                        <ul className="space-y-2 mb-2">
                            {visibleCovers.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                    <img
                                        src="/assets/HP/Right Icon.webp"
                                        alt="Check"
                                        className="w-4 h-4 mt-1"
                                    />
                                    <span className="text-sm">{item.name}</span>
                                </li>
                            ))}
                        </ul>

                        {packageCovers.length > 4 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAll(!showAll);
                                }}
                                className="text-sm text-pink-700 font-semibold"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </div>
                    <div className="mt-auto">
                        <hr className="my-4" />

                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-end gap-8">
                                <div>
                                    <p className="text-xs text-gray-500">Actual Price</p>
                                    <p className="text-lg font-semibold text-gray-400 line-through decoration-pink-700 decoration-2">
                                        ₹{actualPrice}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">Offer Price</p>
                                    <p className="text-lg font-bold text-pink-700">
                                        ₹{offerPrice}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRedirect();
                                }}
                                className="bg-pink-700 hover:bg-pink-800 text-white font-semibold px-4 py-1 rounded-full transition whitespace-nowrap"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    onClick={handleRedirect}
                    className="relative bg-white rounded-2xl shadow-2xl p-4 w-full max-w-sm border border-gray-100 cursor-pointer hover:shadow-xl transition flex flex-col h-full"
                >
                    <div>
                        <h3 className="text-base font-bold text-pink-700 mb-2">
                            {title}
                        </h3>

                        {description && (
                            <p className="text-xs text-gray-500 mb-4">
                                {displayedDescription}
                            </p>
                        )}
                    </div>
                    <div className="flex-grow">
                        <ul className="space-y-2 mb-2">
                            {visibleCovers.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                    <img
                                        src="/assets/HP/Right Icon.webp"
                                        alt="Check"
                                        className="w-4 h-4 mt-1"
                                    />
                                    <span className="text-sm">{item.name}</span>
                                </li>
                            ))}
                        </ul>

                        {packageCovers.length > 4 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAll(!showAll);
                                }}
                                className="text-sm text-pink-700 font-semibold"
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </div>
                    <div className="mt-auto">
                        <hr className="my-4" />

                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-end gap-8">
                                <div>
                                    <p className="text-xs text-gray-500">Actual Price</p>
                                    <p className="text-xl font-semibold text-gray-400 line-through decoration-pink-700 decoration-2">
                                        ₹{actualPrice}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs text-gray-500">Offer Price</p>
                                    <p className="text-xl font-bold text-pink-700">
                                        ₹{offerPrice}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRedirect();
                                }}
                                className="bg-pink-700 hover:bg-pink-800 text-white font-semibold px-6 py-2 rounded-full transition whitespace-nowrap"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
