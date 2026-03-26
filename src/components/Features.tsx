"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Define the structure for a Feature Item
interface FeatureItem {
    title: string;
    description: string;
    image: string; // Path to image
    type: "desktop" | "mobile"; // Device frame type
}

interface FeatureCategory {
    title: string;
    description: string;
    items: FeatureItem[];
}

type TabType = "admin" | "teacher" | "parent";

export default function Features() {
    const [activeTab, setActiveTab] = useState<TabType>("admin");
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

    // Feature Data Categories
    const features: Record<TabType, FeatureCategory> = {
        admin: {
            title: "Admin Features",
            description: "Complete control over your entire campus with powerful administrative tools.",
            items: [
                { title: "Dashboard Overview", description: "", image: "/images/hero-sections/admin-dashboard.png", type: "desktop" },
                { title: "Student Management", description: "", image: "/images/feature/admin/student-management.png", type: "desktop" },
                { title: "Student payment Tracking", description: "", image: "/images/feature/admin/student-payment.png", type: "desktop" },
                { title: "Attendance Tracking", description: "", image: "/images/feature/admin/attendance-manage.png", type: "desktop" },
                { title: "Class Schedule Setup", description: "", image: "/images/feature/admin/routine-management.png", type: "desktop" },
                { title: "Exam Schedule", description: "", image: "/images/feature/admin/exam-schedule.png", type: "desktop" },
                { title: "Exam Mark Upload for Students/Parents", description: "", image: "/images/feature/admin/mark-upload.png", type: "desktop" },
                { title: "Expense Management", description: "", image: "/images/feature/admin/expense.png", type: "desktop" },
                { title: "Reports & Analytics", description: "", image: "/images/feature/admin/report.png", type: "desktop" },
                { title: "Student Enrollment Report", description: "", image: "/images/feature/admin/enrollement-rpt.png", type: "desktop" }
            ]
        },
        teacher: {
            title: "Teacher Features",
            description: "Empower teachers with tools to manage classrooms effectively.",
            items: [
                { title: "Teacher Portal Dashboard", description: "", image: "/images/feature/teacher/teacher-dashboard.png", type: "mobile" },
                { title: "Digital Attendance Sheet", description: "", image: "/images/feature/teacher/attendance.png", type: "mobile" },
                { title: "Exam Management", description: "", image: "/images/feature/teacher/exam-schedule.png", type: "mobile" },
                { title: "Exam Mark Upload", description: "", image: "/images/feature/teacher/mark-upload.png", type: "mobile" },
                { title: "Regular Class Routine", description: "", image: "/images/feature/teacher/routine.png", type: "mobile" },
                { title: "Notice Upload", description: "", image: "/images/feature/teacher/notice-manage.png", type: "mobile" },
            ]
        },
        parent: {
            title: "Parent Features",
            description: "Keep parents informed and involved in their child's academic journey.",
            items: [
                { title: "Parent Portal Dashboard", description: "", image: "/images/feature/parent/parent-dashboard.png", type: "mobile" },
                { title: "Student Attendance Monitoring", description: "", image: "/images/feature/parent/attendance.png", type: "mobile" },
                { title: "Your Children", description: "", image: "/images/feature/parent/children.png", type: "mobile" },
                { title: "Payment History", description: "", image: "/images/feature/parent/payment.png", type: "mobile" },
                { title: "Upcoming Exams Update", description: "", image: "/images/feature/parent/upcoming-exams.png", type: "mobile" },
                { title: "Exam Mark Update", description: "", image: "/images/feature/parent/exam-result.png", type: "mobile" },
                { title: "Class Schedule", description: "", image: "/images/feature/parent/routine.png", type: "mobile" },
                {title: "Notice Announcement", description: "", image: "/images/feature/parent/notice.png", type: "mobile"} 
            ]
        }
    };

    const tabs = [
        { id: "admin" as TabType, label: "Admin Portal", icon: "" },
        { id: "teacher" as TabType, label: "Teachers Portal", icon: "" },
        { id: "parent" as TabType, label: "Parent/Student Portal", icon: "" },
    ];

    const activeFeature = features[activeTab].items[activeFeatureIndex];

    const handleTabChange = (tabId: TabType) => {
        setActiveTab(tabId);
        setActiveFeatureIndex(0); // Reset index when switching tabs
    };

    return (
        <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
            <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-360 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-sm mb-4"
                    >
                        Feature Rich Platform
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Every Tool You Need to <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Succeed</span>
                    </motion.h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? "bg-linear-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-200"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            <span className="text-xl">{tab.icon}</span>
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Side: Feature List */}
                    <div className="space-y-6 lg:col-span-4">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                {features[activeTab].title}
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {features[activeTab].description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-x-2 gap-y-2">
                            {features[activeTab].items.map((feature, index) => (
                                <motion.div
                                    key={`${activeTab}-${index}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setActiveFeatureIndex(index)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 border ${activeFeatureIndex === index
                                        ? "bg-indigo-50 border-indigo-200 shadow-xs"
                                        : "hover:bg-gray-50 border-transparent"
                                        }`}
                                >
                                    <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${activeFeatureIndex === index
                                        ? "bg-indigo-600 text-white"
                                        : "bg-indigo-100 text-indigo-600"
                                        }`}>
                                        {/* Tick Icon */}
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className={`text-base font-medium ${activeFeatureIndex === index ? "text-indigo-900" : "text-gray-700"
                                        }`}>
                                        {feature.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-indigo-600 to-violet-600 text-white rounded-lg font-semibold shadow-lg shadow-indigo-200 transition-all duration-300 hover:shadow-xl mt-4"
                        >
                            Explore All Features
                        </motion.button> */}
                    </div>                    {/* Right Side: Device Preview (Mac / iPhone) */}
                    <div className="relative min-h-125 lg:min-h-175 flex items-center justify-center p-2 lg:p-0 group lg:col-span-8">
                        {/* Background Splashes */}
                        <div className="absolute inset-0 bg-linear-to-tr  rounded-3xl -z-10"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${activeTab}-${activeFeatureIndex}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className="relative w-full flex justify-center items-center"
                            >
                                {activeFeature.type === "desktop" ? (
                                    /* Mac-like Window Container */
                                    <div className="relative w-full max-w-none bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all hover:shadow-indigo-200/50">
                                        <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="relative aspect-video w-full bg-gray-100">
                                            <Image
                                                src={activeFeature.image}
                                                alt={activeFeature.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    /* iPhone-like Container - Realistic Design */
                                    <div className="relative w-75 h-150 rounded-[3.5rem] p-1 shadow-2xl bg-gray-800 border-[6px] border-gray-900 transform transition-transform hover:scale-[1.02]">

                                        {/* Outer Frame (Metallic finish effect) */}
                                        <div className="absolute inset-0 rounded-[3.2rem] border-2 border-gray-700/50 pointer-events-none z-10"></div>

                                        {/* Inner Bezel */}
                                        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden border-8 border-black">

                                            {/* Screen Content */}
                                            <div className="relative w-full h-full bg-gray-900">
                                                <Image
                                                    src={activeFeature.image}
                                                    alt={activeFeature.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Screen Reflection Overlay (Glass effect) */}
                                            <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[2.5rem]"></div>

                                            {/* Home Indicator */}
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/40 rounded-full z-20"></div>
                                        </div>

                                        {/* Side Buttons (Volume/Power) */}
                                        <div className="absolute top-24 -left-2 w-1 h-8 bg-gray-800 rounded-l-md"></div>
                                        <div className="absolute top-36 -left-2 w-1 h-12 bg-gray-800 rounded-l-md"></div>
                                        <div className="absolute top-32 -right-2 w-1 h-16 bg-gray-800 rounded-r-md"></div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
