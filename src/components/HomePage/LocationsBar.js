import { MapPin } from "lucide-react";

export default function LocationsBar() {
    const locations = ["Uppal", "Kachiguda", "Banjara Hills", "Miyapur"];
    
    return (
        <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-100 py-3 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/4 w-64 h-full bg-pink-100/20 blur-3xl rounded-full"></div>
            
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4 relative z-10">
                <div className="flex items-center gap-2 text-pink-600">
                    <MapPin className="w-4 h-4 fill-pink-100" />
                    <span className="text-sm font-bold uppercase tracking-widest">Our Locations</span>
                </div>
                
                <div className="h-4 w-[1px] bg-gray-300 hidden sm:block"></div>
                
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    {locations.map((loc, i) => (
                        <div key={loc} className="flex items-center">
                            <span className="text-sm sm:text-base text-gray-700 font-semibold hover:text-pink-600 transition-colors cursor-default">
                                {loc}
                            </span>
                            {i < locations.length - 1 && (
                                <span className="ml-6 text-gray-300 font-light hidden sm:inline">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
