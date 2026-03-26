"use client";

import { motion } from "framer-motion";

export default function About() {
    const cards = [
        {
            title: "Attendance Monitoring",
            description:
                "Real-time digital roll-call with automated instant alerts to parents, ensuring student safety and providing teachers with monthly attendance heatmaps.",
            pattern: "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]",
            accent: "from-indigo-600 to-blue-600",
        },
        {
            title: "Payment Tracking",
            description:
                "Seamless fee management with automated invoice generation and transparent payment history for both admins and parents.",
            pattern: "bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px]",
            accent: "from-emerald-600 to-teal-600",
        },
        {
            title: "Notice and Announcement",
            description:
                "Instantly broadcast critical updates, holidays, or emergency alerts across app-push, email, and SMS with smart read-receipt tracking for admins.",
            pattern: "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
            accent: "from-orange-600 to-red-600",
        },
        {
            title: "Monthly Reports",
            description:
                "Automated 360-degree academic summaries featuring attendance trends, test scores, and behavioral insights delivered directly to parents every month.",
            pattern: "bg-[dots_8px_8px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-10",
            accent: "from-purple-600 to-indigo-600",
        },
        {
            title: "Student Performance for Parents",
            description:
                "A dedicated transparency portal for parents to monitor real-time progress, GPA analytics, and personalized teacher feedback on their child's growth.",
            pattern: "bg-[repeating-linear-gradient(90deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_20px)]",
            accent: "from-blue-600 to-cyan-600",
        },
        {
            title: "Exam Mark Upload",
            description:
                "A streamlined, high-fidelity interface for faculty to securely upload marks and feedback from any device, reducing manual entry errors and delays.",
            pattern: "bg-[conic-gradient(at_top_right,#e5e7eb_0deg,transparent_90deg)] bg-[size:40px_40px]",
            accent: "from-pink-600 to-rose-600",
        },
        {
            title: "Seamless Exam Management",
            description:
                "End-to-end exam logistics including automated seat planning, digital admit card generation, and instant results publication upon mark approval.",
            pattern: "bg-[radial-gradient(circle_at_center,#e5e7eb_1px,transparent_1.5px)] bg-[size:15px_15px]",
            accent: "from-amber-600 to-orange-600",
        },
        {
            title: "Class assign to Teachers",
            description:
                "Effortless workload management for admins to assign batches and subjects to faculty, featuring real-time schedule syncing for the whole institution.",
            pattern: "bg-[linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100%_10px]",
            accent: "from-fuchsia-600 to-purple-600",
        },
        {
            title: "Expense Management",
            description:
                "Comprehensive fiscal oversight for admins to track institutional overheads, faculty salaries, and vendor payments for a healthy bottom line.",
            pattern: "bg-[path('M0_0L10_10M10_0L0_10')] bg-[size:12px_12px] opacity-10",
            accent: "from-cyan-600 to-blue-600",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: import("framer-motion").Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Futurisic Background Grid matching Hero */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-10 w-125 h-125 bg-indigo-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse"></div>
                <div className="absolute bottom-0 left-10 w-125 h-125 bg-purple-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.15]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-24"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold tracking-wider uppercase"
                    >
                        The CampusBaba Edge
                    </motion.div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tighter">
                        Empowering <br className="hidden md:block" />
                        <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent italic">
                            Modern Education
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed font-medium">
                        Our platform orchestrates a multi-layered digital architecture that synchronizes institutional data across
                        six core operational pillars, ensuring zero-latency communication and high-fidelity reporting.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -20, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Card Body */}
                            <div className="relative h-full bg-white rounded-3xl border border-gray-100 p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(79,70,229,0.12)] group-hover:border-indigo-100">

                                {/* Futuristic Card Pattern */}
                                <div className={`absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 ${card.pattern}`}></div>

                                {/* Accent Line */}
                                <div className={`h-1.5 w-12 rounded-full bg-linear-to-r ${card.accent} mb-8 transition-all duration-500 group-hover:w-full`}></div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed font-medium group-hover:text-gray-600 transition-colors duration-300">
                                    {card.description}
                                </p>

                                {/* Bottom Glow Effect */}
                                <div className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-linear-to-br ${card.accent} opacity-0 blur-[60px] group-hover:opacity-10 transition-opacity duration-700`}></div>
                            </div>

                            {/* Decorative Floating Number */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 font-bold group-hover:border-indigo-100 group-hover:text-indigo-500 transition-all duration-300">
                                0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}