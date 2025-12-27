import useIsMobile from "@/hooks/useIsMobile";

export default function Speciality({ icon, title }) {

    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <div className="flex flex-col items-center text-center">
                    <img loading="lazy" src={icon} alt={title} className="h-10 w-10" />
                    <p className="font-inter text-xs mt-2 text-gray-800 font-medium">{title}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center text-center">
                    <img loading="lazy" src={icon} alt={title} className="h-24 w-24" />
                    <p className="font-inter text-sm mt-2 text-gray-800 font-medium">{title}</p>
                </div>
            )}
        </>
    );
}