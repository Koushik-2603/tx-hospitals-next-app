import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import BreadcrumbArrow from "@/utils/BreadcrumbArrow";
import DoctorsHeader from "@/components/Doctors/DoctorsHeader";
import CONFIG from "@/config";
import FiltersSidebar from "@/components/Doctors/FilterSidebar";
import useIsMobile from "@/hooks/useIsMobile";
import AppointmentModal from "@/components/Doctors/AppointmentModal";

const locations = [
    { value: "Uppal", label: "Uppal" },
    { value: "Kachiguda", label: "Kachiguda" },
    { value: "Banjara Hills", label: "Banjara Hills" },
];

export default function DoctorsLandingPage() {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [doctorsData, setDoctorsData] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedSpeciality, setSelectedSpeciality] = useState("CARDIAC SCIENCES");
    const [visibleDoctors, setVisibleDoctors] = useState(9);
    const isMobile = useIsMobile();
    const [locationSearch, setLocationSearch] = useState("");
    const [specialitySearch, setSpecialitySearch] = useState("");
    const [open, setOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        window.scrollTo({ left: document.body.scrollWidth, top: 0, behavior: "smooth" });
    }, []);

    const filteredDoctors = doctorsData.filter((doctor) => {
        const doctorCategory = doctor.category ? doctor.category.toLowerCase() : "";
        const selectedCat = selectedSpeciality ? selectedSpeciality.toLowerCase() : "";
        const doctorLoc = doctor.location ? doctor.location.toLowerCase() : "";

        return (
            (selectedCat === "" || doctorCategory.includes(selectedCat)) &&
            (searchTerm === "" || (doctor.name && doctor.name.toLowerCase().includes(searchTerm.toLowerCase()))) &&
            (selectedLocation === "" || selectedLocation === null || doctorLoc.includes(selectedLocation.toLowerCase()))
        );
    });

    const uniqueCategories = [...new Set(filteredDoctors.map(doctor => doctor.category))];
    const filteredCategories = uniqueCategories.length === 1 ? uniqueCategories : departments;

    const categoryOrder = [
        "CARDIAC SCIENCES",
        "NEURO SCIENCES",
        "RENAL SCIENCES",
        "GASTRO SCIENCES",
        "ONCOLOGY",
        "ORTHOPEDICS",
        "INTERNAL MEDICINE",
        "MOTHER AND CHILD CARE",
        "ANESTHESIA & PAIN MANAGEMENT",
        "DERMATOLOGY, COSMETIC CARE & PLASTIC SURGERY",
        "Eye / Ophthalmology",
        "DENTAL AND MAXILLOFACIAL CARE",
        "ENDOCRINOLOGY",
        "Transplant Medicine",
        "Wellness & Diagnostic Centre",
        "Robotic Sciences",
        "Pulmonology",
    ];

    const sortedCategories = filteredCategories
        .filter((category) => filteredDoctors.some((doctor) => doctor.category === category))
        .sort((a, b) => {
            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);

            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;

            return indexA - indexB;
        });

    // Load more doctors when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setVisibleDoctors(prev => prev + 9);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        fetch(`${CONFIG.API_BASE_URL}/getAllDoctors`)
            .then((response) => response.json())
            .then((data) => {

                // Group doctors by department for dropdown
                const groupedDoctors = data.reduce((acc, doctor) => {
                    const { department } = doctor;
                    if (!acc[department]) {
                        acc[department] = [];
                    }
                    acc[department].push(doctor);
                    return acc;
                }, {});

                // Extract unique department names for dropdown
                const uniqueDepartments = Object.keys(groupedDoctors);

                // Flatten the array for filtering & display
                const flatDoctorsArray = data.map((doctor) => ({
                    ...doctor,
                    category: doctor.department,
                }));

                setDoctorsData(flatDoctorsArray);
                setDepartments(uniqueDepartments);
                setError(null);
                setLoading(false);
                const map = {};
                data.forEach(doctor => {
                    map[doctor.url] = { id: doctor.id, type: 'doctor' };
                });
                localStorage.setItem('slugMap', JSON.stringify(map));
            })
            .catch((error) => console.error("Error fetching doctors data:", error));
    }, []);

    if (loading) {
        return (
            <div className="flex flex-row justify-center items-center mt-20 mb-4 gap-2">
                <div className="w-8 h-8 border-2 border-pink-700 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-pink-700 text-lg font-medium animate-pulse">
                    Loading...
                </div>
            </div>
        );
    }

    if (error) return <p className="text-center mt-28 font-inter p-4 text-lg text-pink-700 font-semibold">{error}</p>;

    const filteredLocations = locations.filter((loc) =>
        loc.label.toLowerCase().includes(locationSearch.toLowerCase())
    );

    const filteredDepartments = departments
        .filter((dept) => dept.toLowerCase().includes(specialitySearch.toLowerCase()))
        .sort((a, b) => {
            const indexA = categoryOrder.indexOf(a.toUpperCase());
            const indexB = categoryOrder.indexOf(b.toUpperCase());

            if (indexA === -1 && indexB === -1) return 0;
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });

    return (
        <>
            <DoctorsHeader
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            {isMobile ? (
                <div className="relative bg-gray-200 w-full min-h-full">
                    <div className="flex justify-between items-center pt-4 px-4">
                        {/* Breadcrumbs */}
                        <div className="text-white">
                            <nav className="flex items-center">
                                <a
                                    href="/"
                                    className="text-gray-800 hover:text-gray-900 text-md font-semibold"
                                >
                                    Home
                                </a>
                                <BreadcrumbArrow />
                                <span className="text-gray-950 text-md">Doctors</span>
                            </nav>
                        </div>
                    </div>
                    <div className="p-4 max-w-full relative flex flex-col gap-6 items-start">
                        {/* Filters Sidebar */}
                        <FiltersSidebar
                            filteredDepartments={filteredDepartments}
                            filteredLocations={filteredLocations}
                            selectedSpeciality={selectedSpeciality}
                            setSelectedSpeciality={setSelectedSpeciality}
                            selectedLocation={selectedLocation}
                            setSelectedLocation={setSelectedLocation}
                            locationSearch={locationSearch}
                            setLocationSearch={setLocationSearch}
                            specialitySearch={specialitySearch}
                            setSpecialitySearch={setSpecialitySearch}
                        />
                        {/* Doctors Content */}
                        <div className="flex-1">
                            {sortedCategories.map((category) => {
                                const doctorsInCategory = filteredDoctors
                                    .filter((doctor) => doctor.category?.toUpperCase() === category.toUpperCase())
                                    .sort((a, b) => Number(a.priorityOrder) - Number(b.priorityOrder))
                                    .slice(0, visibleDoctors); // Limit per scroll

                                return (
                                    <div key={category} className="mb-8">
                                        {/* Doctors Grid */}
                                        <div className="grid grid-cols-1 gap-4">
                                            {doctorsInCategory.length > 0 ? (
                                                doctorsInCategory.map((doctor, i) => (
                                                    <div
                                                        className="bg-white rounded-lg shadow-lg border border-gray-500 p-2 flex flex-col justify-between"
                                                        key={i}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 50 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5, delay: i * 0.2 }}
                                                            className="flex gap-2"
                                                        >
                                                            <div className="relative w-28 h-32 z-10">
                                                                <img
                                                                    loading="lazy"
                                                                    src="/assets/Doctors/image.png"
                                                                    alt="Background"
                                                                    className="absolute inset-0 w-full h-full"
                                                                />
                                                                <motion.img
                                                                    src={doctor.image}
                                                                    alt={doctor.name}
                                                                    className="relative z-10 w-28 rounded-sm object-cover"
                                                                    whileHover={{ scale: 1.1 }}
                                                                    transition={{ duration: 0.3 }}
                                                                />
                                                            </div>

                                                            <div className="flex-1">
                                                                <h3 className="text-base pb-1 font-bold text-pink-700">{doctor.name}</h3>
                                                                <p className="text-xs pb-1 text-gray-600">{doctor.designation}</p>
                                                                <div className="text-xs p-1 bg-gray-200 rounded-lg text-gray-600">
                                                                    {doctor.qualification}
                                                                </div>
                                                                <div className="text-gray-700 text-xs font-bold">
                                                                    Experience: {doctor.experience}
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <Image
                                                                        src="/assets/Doctors/Location Icon.webp"
                                                                        alt="Location Icon"
                                                                        width={10}
                                                                        height={10}
                                                                    />
                                                                    <div>{doctor.location.split(",")[0]}</div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                        <div className="flex flex-col justify-between mx-auto mt-4">
                                                            <button
                                                                className="w-full py-1 px-4 border border-pink-700 text-pink-700 font-semibold rounded-lg hover:scale-105 transition"
                                                                onClick={() => setOpen(true)}
                                                            >
                                                                Book Appointment
                                                            </button>
                                                            <button
                                                                className="w-full py-2 text-pink-700 underline font-semibold rounded-lg hover:scale-105 transition"
                                                                onClick={() => router.push(`/${doctor.url.replace(/^\/|\/$/g, '')}/`)}
                                                            >
                                                                View Profile
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center text-gray-600 col-span-2">
                                                    No doctors found in {category}.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative bg-gray-200 w-full min-h-full">
                    <div className="flex justify-between items-center pt-4 px-4">
                        {/* Breadcrumbs */}
                        <div className="text-white">
                            <nav className="flex items-center">
                                <a
                                    href="/"
                                    className="text-gray-800 hover:text-gray-900 text-md font-semibold"
                                >
                                    Home
                                </a>
                                <BreadcrumbArrow />
                                <span className="text-gray-950 text-md">Doctors</span>
                            </nav>
                        </div>
                    </div>
                    <div className="p-4 max-w-full relative flex gap-6 items-start">
                        {/* Filters Sidebar */}
                        <FiltersSidebar
                            filteredDepartments={filteredDepartments}
                            filteredLocations={filteredLocations}
                            selectedSpeciality={selectedSpeciality}
                            setSelectedSpeciality={setSelectedSpeciality}
                            selectedLocation={selectedLocation}
                            setSelectedLocation={setSelectedLocation}
                            locationSearch={locationSearch}
                            setLocationSearch={setLocationSearch}
                            specialitySearch={specialitySearch}
                            setSpecialitySearch={setSpecialitySearch}
                        />
                        {/* Doctors Content */}
                        <div className="flex-1">
                            {sortedCategories.map((category) => {
                                const doctorsInCategory = filteredDoctors
                                    .filter((doctor) => doctor.category?.toUpperCase() === category.toUpperCase())
                                    .sort((a, b) => Number(a.priorityOrder) - Number(b.priorityOrder))
                                    .slice(0, visibleDoctors); // Limit per scroll

                                return (
                                    <div key={category} className="mb-8">
                                        {/* Doctors Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {doctorsInCategory.length > 0 ? (
                                                doctorsInCategory.map((doctor, i) => (
                                                    <div
                                                        className="bg-white rounded-lg shadow-lg border border-gray-500 p-4 flex flex-col justify-between"
                                                        key={i}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 50 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5, delay: i * 0.2 }}
                                                            className="flex gap-4"
                                                        >
                                                            <div className="relative w-32 h-36 z-10">
                                                                <img
                                                                    loading="lazy"
                                                                    src="/assets/Doctors/image.png"
                                                                    alt="Background"
                                                                    className="absolute inset-0 w-full h-full"
                                                                />
                                                                <motion.img
                                                                    src={doctor.image}
                                                                    alt={doctor.name}
                                                                    className="relative z-10 w-32 h-34 rounded-sm object-cover"
                                                                    whileHover={{ scale: 1.1 }}
                                                                    transition={{ duration: 0.3 }}
                                                                />
                                                            </div>

                                                            <div className="flex-1">
                                                                <h3 className="text-xl pb-2 font-bold text-pink-700">{doctor.name}</h3>
                                                                <p className="text-sm pb-2 text-gray-600">{doctor.designation}</p>
                                                                <div className="text-sm p-2 bg-gray-200 rounded-lg text-gray-600">
                                                                    {doctor.qualification}
                                                                </div>
                                                                <div className="text-gray-700 text-sm font-bold">
                                                                    Experience: {doctor.experience}
                                                                </div>
                                                                <div className="flex items-center gap-3">
                                                                    <Image
                                                                        src="/assets/Doctors/Location Icon.webp"
                                                                        alt="Location Icon"
                                                                        width={12}
                                                                        height={12}
                                                                    />
                                                                    <div>{doctor.location.split(",")[0]}</div>
                                                                </div>
                                                            </div>
                                                        </motion.div>

                                                        {/* Buttons */}
                                                        <div className="flex flex-col justify-between mx-auto mt-4">
                                                            <button
                                                                className="w-full py-1 px-4 border border-pink-700 text-pink-700 font-semibold rounded-lg hover:scale-105 transition"
                                                                onClick={() => {
                                                                    setSelectedDoctor(doctor);
                                                                    setOpen(true);
                                                                }}
                                                            >
                                                                Book Appointment
                                                            </button>
                                                            <button
                                                                className="w-full py-2 text-pink-700 underline font-semibold rounded-lg hover:scale-105 transition"
                                                                onClick={() => router.push(`/${doctor.url.replace(/^\/|\/$/g, '')}/`)}
                                                            >
                                                                View Profile
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="text-center text-gray-600 col-span-2">
                                                    No doctors found in {category}.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
            {open && <AppointmentModal doctorData={selectedDoctor} closeModal={() => setOpen(false)} />}
        </>
    );
}