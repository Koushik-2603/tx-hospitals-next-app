import React, { useState, useEffect } from "react";
import { RiPokerDiamondsFill } from "react-icons/ri";
import useIsMobile from "@/hooks/useIsMobile";

const BacklinkSection = ({ backlinkSchema }) => {

    const isMobile = useIsMobile();

    return (
        <>
            {!isMobile && (
                <div className="bg-white p-6 font-inter rounded-lg shadow-lg">
                    {backlinkSchema.map((section, index) => (
                        <div key={index} className="mb-8">
                            <h2 className="text-2xl font-bold mb-3">{section.headline}</h2>
                            <div className="flex flex-wrap gap-4">
                                {section.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        className="text-blue-700 flex items-center gap-1 text-sm"
                                    >
                                        <RiPokerDiamondsFill className="text-blue-700" /> {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {isMobile && (
                <div className="bg-white p-3 font-inter rounded-lg shadow-lg">
                    {backlinkSchema.map((section, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-xl font-bold mb-2">{section.headline}</h2>
                            <div className="flex flex-wrap gap-2">
                                {section.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        className="text-blue-700 flex items-center gap-1 text-sm"
                                    >
                                        <RiPokerDiamondsFill className="text-blue-700" /> {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default BacklinkSection;
