// components/DiseaseSearch.js
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import useIsMobile from "@/hooks/useIsMobile";

export default function DiseaseSearch() {

    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <div className="w-full px-3 py-2 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4 items-start">
                        {/* Left: Alphabet grid */}
                        <div className="bg-pink-50 p-2 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold text-gray-800 mb-3">
                                Find Diseases & Conditions By Alphabet
                            </h2>
                            <div className="grid grid-cols-8 gap-2">
                                {alphabets.map((letter) => (
                                    <button
                                        key={letter}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 font-medium hover:bg-pink-600 hover:text-white transition"
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Search section */}
                        <div>
                            <h2 className="font-semibold text-center text-gray-800 mb-3">
                                Search Diseases and Conditions
                            </h2>
                            <div className="flex items-center w-full max-w-md mb-2">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-pink-500"
                                />
                                <button className="bg-pink-600 text-white px-4 py-3 rounded-r-full hover:bg-pink-700 transition flex items-center justify-center">
                                    <FiSearch size={20} />
                                </button>
                            </div>
                            <p className="text-gray-600 text-xs leading-relaxed">
                                Quickly find the information you need. Search our database to
                                explore detailed information on various diseases and conditions,
                                including symptoms, causes, and treatment options.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full px-3 py-3 bg-white">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 items-start">
                        {/* Left: Alphabet grid */}
                        <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                                Find Diseases & Conditions By Alphabet
                            </h2>
                            <div className="grid grid-cols-9 gap-4">
                                {alphabets.map((letter) => (
                                    <button
                                        key={letter}
                                        className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 font-medium hover:bg-pink-600 hover:text-white transition"
                                    >
                                        {letter}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Search section */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">
                                Search Diseases and Conditions
                            </h2>
                            <div className="flex items-center w-full max-w-md mb-4">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                                />
                                <button className="bg-pink-600 text-white px-4 py-3 rounded-r-full hover:bg-pink-700 transition flex items-center justify-center">
                                    <FiSearch size={20} />
                                </button>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Quickly find the information you need. Search our database to
                                explore detailed information on various diseases and conditions,
                                including symptoms, causes, and treatment options.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
