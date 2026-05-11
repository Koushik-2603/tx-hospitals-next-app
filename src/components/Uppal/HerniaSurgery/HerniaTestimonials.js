import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HerniaTestimonials = () => {
    const testimonials = [
        {
            name: "Swetha Madlapelli",
            initial: "S",
            badge: "Hernia Repair Surgery",
            text: "I was treated by Dr VVN Paul for hernia repair surgery. The surgery went smoothly and the post-operative care was thorough. I'm satisfied with the treatment and grateful for the professional approach throughout.",
            rating: 5
        },
        {
            name: "Shirisha Begari",
            initial: "S",
            badge: "Laparoscopic Hernia Repair",
            text: "I visited Dr VVN Paul for hernia treatment. He explained everything clearly about the condition and the need for surgery. I underwent laparoscopic hernia repair and the entire process was handled very smoothly. I would recommend Dr VVN Paul for any hernia-related problems.",
            rating: 5
        },
        {
            name: "Kiran Varma",
            initial: "K",
            badge: "Hernia Surgery — Discharged Same Day",
            text: "I had surgery for hernia and just got discharged from hospital. The service and treatment provided by the professional team was great. Feeling good and recovering faster than expected. Thank you TX Hospitals.",
            rating: 5
        },
        {
            name: "Anuradha NC",
            initial: "A",
            badge: "High-Risk Hernia Surgery — Age 82",
            text: "Dr Chandrasekhar Azad and Dr Sudarshan Reddy performed hernia surgery on my father, who is 82 years old. They took enormous personal care despite the age-related and surgical risks involved. Extremely knowledgeable, experienced doctors with a rare human touch. Deeply grateful.",
            rating: 5
        }
    ];

    return (
        <section className="py-8 md:py-16 px-6 bg-gray-50 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <span className="text-[#be185d] font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        What Our Patients Say
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Real Patients. Real Recoveries.
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
                        Hundreds of patients from Uppal and across Hyderabad have trusted TX Hospitals for their hernia surgery. Here's what they experienced.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#be185d] flex items-center justify-center text-white font-bold text-lg">
                                    {item.initial}
                                </div>
                                <div>
                                    <h4 className="text-base md:text-lg font-extrabold text-gray-900 leading-tight">{item.name}</h4>
                                    <div className="flex gap-0.5 mt-1">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <span className="inline-block bg-pink-50 text-[#be185d] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tight">
                                    {item.badge}
                                </span>
                            </div>

                            <p className="text-gray-600 text-sm md:text-base italic leading-relaxed font-medium mb-6">
                                "{item.text}"
                            </p>

                            <div className="mt-auto flex items-center gap-2">
                                <img 
                                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" 
                                    alt="Google" 
                                    className="w-4 h-4 object-contain"
                                />
                                <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Google Review · Verified Patient</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HerniaTestimonials;
