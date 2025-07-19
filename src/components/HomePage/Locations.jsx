'use client'; // Only if using App Router; remove for Pages Router

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const locations = [
    {
        id: 1,
        name: "TX Hospitals, Uppal, Hyderabad",
        address: "# 2-6-71, Bharath Nagar Colony, Near Masjid Uppal, Hyderabad, Telangana, 500039 India",
        phone: "+91-40-43 108 108",
        mapCoords: [17.402346, 78.566958],
        image: '/assets/AboutUs/Uppalunit Picture.png',
        slug: "uppal"
    },
    {
        id: 2,
        name: "TX Hospitals, Kachiguda, Hyderabad",
        address: "3-2-848/1, Station Road, Kachiguda, Hyderabad-500 027, Telangana, India",
        phone: "+91-40-48 108 108",
        mapCoords: [17.389563, 78.495454],
        image: '/assets/AboutUs/Kachiguda Unit Picture.png',
        slug: "kachiguda"
    },
    {
        id: 3,
        name: "TX Hospitals, Banjara Hills, Hyderabad",
        address: "8-2-680/A, Road No.12, Banjara Hills, Hyderabad – 500034 Telangana, India",
        phone: "040-66529999",
        mapCoords: [17.4126183, 78.4321413],
        image: '/assets/AboutUs/Banjara Hills Unit Picture.png',
        slug: "banjara-hills1"
    },
    {
        id: 4,
        name: "TX Children's Hospital, Banjara Hills, Hyderabad.",
        address: "8-2-679/A, Road No.12, Banjara Hills, Hyderabad – 500034 Telangana, India",
        phone: "040-66529999",
        mapCoords: [17.4076601, 78.4448542],
        image: '/assets/AboutUs/Banjara Hills Unit 2 Picture.png',
        slug: "banjara-hills2"
    },
];

const animations = "transition-transform duration-300 hover:scale-105 hover:shadow-xl";

const LocationCard = ({ name, image, location, isMobile }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: `/contact-us/${location.slug}`,
            query: { selected: location.slug }
        });
    };

    return (
        <>
            {!isMobile && (
                <div
                    className={`overflow-hidden font-spectral flex items-center cursor-pointer justify-center rounded-lg ${animations}`}
                    onClick={handleClick}
                >
                    <Image
                        src={image}
                        alt={name}
                        width={208} // 52 * 4 = 208px
                        height={208}
                        className="w-52 h-52 object-contain"
                    />
                </div>
            )}
            {isMobile && (
                <div
                    className={`rounded-xl font-spectral border cursor-pointer border-gray-200 bg-white shadow-lg p-2 ${animations}`}
                    onClick={handleClick}
                >
                    <div className="w-full h-32 overflow-hidden flex items-center justify-center rounded-lg">
                        <Image
                            src={image}
                            alt={name}
                            width={128}
                            height={128}
                            className="max-w-full max-h-full w-auto h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const Locations = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="font-spectral py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-pink-700 mb-4">
                    Our Locations
                </h2>
                {!isMobile ? (
                    <div className='flex items-center justify-center gap-10'>
                        {locations.map((location, index) => (
                            <LocationCard key={index} {...location} location={location} isMobile={isMobile} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        {locations.map((location, index) => (
                            <LocationCard key={index} {...location} location={location} isMobile={isMobile} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Locations;
