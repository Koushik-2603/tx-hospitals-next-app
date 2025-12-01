import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterSection = ({ title, children }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [open, setOpen] = useState(() => window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setOpen(!mobile);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!isMobile && (
                <div className="border-b rounded-lg bg-white mb-4">
                    {/* Header */}
                    <div
                        className="flex justify-between items-center p-3 cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <h3 className="font-semibold text-gray-800">{title}</h3>
                        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {/* Content */}
                    {open && <div className="p-2 text-sm space-y-2">{children}</div>}
                </div>
            )}
            {isMobile && (
                <div className="border-b rounded-lg bg-white mb-4">
                    {/* Header */}
                    <div
                        className="flex justify-between items-center p-3 cursor-pointer"
                        onClick={() => setOpen(!open)}
                    >
                        <h3 className="font-semibold text-gray-800">{title}</h3>
                        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>

                    {/* Content */}
                    {open && <div className="p-2 text-sm space-y-2">{children}</div>}
                </div>
            )}
        </>
    );
};

export default FilterSection;
