import { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";

export default function PhoneDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                aria-label="Call"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="flex items-center gap-1 px-1 py-1 bg-red-600 rounded-full hover:bg-red-700 transition relative z-10"
            >
                <MdPhoneInTalk size={18} className="text-white" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute top-6 bg-transparent w-52 z-20"
                >
                    <ul className="flex flex-col gap-2 py-2 text-sm text-black">
                        <li>
                            <button className="flex items-center gap-2 w-full py-2 text-left bg-white rounded-full hover:text-white hover:bg-pink-700 transition">
                                <IoWarning className="text-yellow-500 ml-4" size={18} /> Call Emergency
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-2 w-full py-2 text-left bg-white rounded-full hover:text-white hover:bg-pink-700 transition">
                                <PiPhoneCallFill className="text-black ml-4" size={18} /> Call Domestic
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center gap-2 w-full py-2 text-left bg-white rounded-full hover:text-white hover:bg-pink-700 transition">
                                <PiPhoneCallFill className="text-black ml-4" size={18} /> Call International
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
