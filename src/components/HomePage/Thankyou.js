"use client";
import { useSearchParams } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect } from "react";
import Link from "next/link";

export default function ThankYouPage() {
    const isMobile = useIsMobile();
    const searchParams = useSearchParams();

    const name = searchParams.get("name");
    const mobile = searchParams.get("mobile");
    const email = searchParams.get("email");
    const isAppointment = name && mobile && email;

    useEffect(() => {
        window.scrollTo({ left: document.body.scrollWidth, top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            {isAppointment ? (
                <>
                    {isMobile ? (
                        <div className="mt-24 font-inter">
                            <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
                                    <div className="relative w-20 h-20 mx-auto mb-4">
                                        <img src="/assets/FYD/Thank You Round logo.png" className="absolute inset-0 w-full h-full" />
                                        <img src="/assets/FYD/Thank You Icon.png" className="absolute inset-0 w-10 h-10 m-auto" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-800">Thank you!</h2>
                                    <p className="text-gray-800">for choosing us</p>
                                    <p className="text-lg font-medium text-gray-700 mt-1">Your appointment has been Confirmed</p>

                                    <div className="mt-4 space-y-2 text-right">
                                        <p className="flex gap-4 text-gray-700">
                                            <span className="font-semibold">Name:</span>
                                            <span className="text-gray-900">{name}</span>
                                        </p>
                                        <p className="flex gap-4 text-gray-700">
                                            <span className="font-semibold">Phone:</span>
                                            <span className="text-gray-900">{mobile}</span>
                                        </p>
                                        <p className="flex gap-4 text-gray-700">
                                            <span className="font-semibold">Email:</span>
                                            <span className="text-gray-900">{email}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-5 font-inter">
                            <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
                                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
                                    <div className="relative w-20 h-20 mx-auto mb-4">
                                        <img src="/assets/FYD/Thank You Round logo.png" className="absolute inset-0 w-full h-full" />
                                        <img src="/assets/FYD/Thank You Icon.png" className="absolute inset-0 w-10 h-10 m-auto" />
                                    </div>
                                    <h2 className="text-xl font-semibold text-gray-800">Thank you!</h2>
                                    <p className="text-gray-800">for choosing us</p>
                                    <p className="text-lg font-medium text-gray-700 mt-1">Your appointment has been Confirmed</p>

                                    <div className="mt-4 space-y-2 text-right">
                                        <p className="flex gap-4 text-gray-700">
                                            <span className="font-semibold">Name:</span>
                                            <span className="text-gray-900">{name}</span>
                                        </p>
                                        <p className="flex gap-4 text-gray-700">
                                            <span className="font-semibold">Phone:</span>
                                            <span className="text-gray-900">{mobile}</span>
                                        </p>
                                        <p className="flex gap-4 text-gray-700">
                                            <span className="font-semibold">Email:</span>
                                            <span className="text-gray-900">{email}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    {!isMobile ? (
                        <div className="flex flex-col items-center justify-center h-screen bg-white">
                            <h1 className="text-7xl font-bold text-pink-700 mb-4">Thank You</h1>
                            <p className="text-5xl font-semibold text-black mb-6">
                                Your form submitted successfully
                            </p>
                            <Link href="/" className="bg-pink-700 text-white px-6 py-2 rounded hover:bg-pink-800">
                                Home
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-screen bg-white">
                            <h1 className="text-5xl font-bold text-pink-700 mb-4">Thank You</h1>
                            <p className="text-2xl text-center font-semibold text-black mb-6">
                                Your form submitted successfully
                            </p>
                            <Link href="/" className="bg-pink-700 text-white px-6 py-2 rounded hover:bg-pink-800">
                                Home
                            </Link>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
