import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BariatricWhyChoose = ({
    badge = "Our Promise",
    title = "Why Choose TX Hospitals?",
    subtitle = "The only dedicated bariatric hospital in Uppal — with the experience, technology, and care you deserve.",
    reasons = [
        {
            title: "Treated Thousands in Hyderabad",
            description: "Over 10,000 successful surgeries with proven outcomes across all bariatric procedures."
        },
        {
            title: "25+ Years Experienced Surgeons",
            description: "Our lead surgeons hold international fellowships from USA, UK, France, and Korea."
        },
        {
            title: "Latest Medical Devices & Methods",
            description: "State-of-the-art laparoscopic and robotic surgical equipment for precision and safety."
        },
        {
            title: "All Insurances Covered",
            description: "Complete documentation and cashless insurance assistance — zero hassle for you."
        },
        {
            title: "Most Trusted, High Success Rates",
            description: "4.8★ patient rating across 800+ reviews. Our results speak for themselves."
        }
    ],
    journeyTitle = "Your Journey to a Healthier Life",
    journeySubtitle = "From your first consultation to long-term follow-up, we're with you every step of the way.",
    journeySteps = [
        "Initial consultation & BMI assessment",
        "Personalised procedure recommendation",
        "Pre-surgery diet planning & clearance",
        "Minimally invasive laparoscopic surgery",
        "1-3 day hospital stay with full care",
        "Lifetime doctor follow-ups post procedure"
    ],
    onBookClick
}) => {
    return (
        <section className="bg-gray-50 py-8 md:py-16 px-6 font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="text-pink-700 font-bold text-xs md:text-sm uppercase tracking-widest block mb-2">
                        {badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Left Column: Reasons */}
                    <div className="space-y-4">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="bg-pink-700 rounded-full p-1 text-white shrink-0 mt-1">
                                    <Check className="w-4 h-4" strokeWidth={3} />
                                </div>
                                <div>
                                    <h3 className="text-base md:text-lg font-extrabold text-gray-900 mb-1 leading-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column: Journey Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-pink-700 text-white p-8 md:p-10 rounded-[32px] shadow-2xl relative overflow-hidden"
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10">
                            {journeyTitle}
                        </h3>
                        <p className="text-pink-50/80 text-sm md:text-base mb-8 font-medium leading-relaxed relative z-10">
                            {journeySubtitle}
                        </p>

                        <ul className="space-y-4 mb-10 relative z-10">
                            {journeySteps.map((step, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm md:text-base font-semibold">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0"></div>
                                    {step}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => onBookClick()}
                            className="bg-white text-pink-700 hover:bg-pink-50 font-extrabold py-4 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl relative z-10 text-sm md:text-base"
                        >
                            Book an Appointment
                        </button>

                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BariatricWhyChoose;
