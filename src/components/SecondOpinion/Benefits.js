
import useIsMobile from "@/hooks/useIsMobile";
import DOMPurify from "dompurify";

export default function Benefits({ data }) {
    const isMobile = useIsMobile();

    // Safely destructure data
    if (!data) return null;

    const {
        heading,
        description
    } = data;

    // Remove background-color: transparent from the HTML string to avoid conflicts
    const cleanDescription = description ? description.replace(/background-color:\s*transparent;?/g, '') : '';

    return (
        <section className="w-full bg-[#EAEAEA] py-4 px-2 md:py-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#C21B4E] mb-6 text-center">
                    {heading}
                </h2>

                <div
                    className="benefits-content text-gray-900 text-sm md:text-base leading-relaxed w-full
                    [&_p]:mb-4 [&_p]:text-center [&_p]:mx-auto [&_p]:max-w-3xl
                    [&_ul]:text-left [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:mb-6 [&_ul]:mx-auto [&_ul]:max-w-3xl
                    [&_li]:pl-1
                    [&_strong]:font-semibold"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(cleanDescription)
                    }}
                />
            </div>
        </section>
    );
}
