"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabType = "admin" | "teacher" | "parent";

export default function Features() {
    const [activeTab, setActiveTab] = useState<TabType>("admin");

    const features = {
        admin: {
            title: "Admin Features",
            description: "Complete control over your entire campus",
            items: [
                "Dashboard overview",
                "Student & teacher management",
                "Fee & expense tracking",
                "Reports & analytics",
                "Notice management",
            ],
            color: "indigo",
        },
        teacher: {
            title: "Teacher Features",
            description: "Tools to manage your classroom effectively",
            items: [
                "Attendance tracking",
                "Grade management",
                "Exam creation & management",
                "Class schedule view",
                "Student insights",
            ],
            color: "blue",
        },
        parent: {
            title: "Parent/Student Features",
            description: "Stay connected and informed",
            items: [
                "Attendance & result tracking",
                "Exam performance insights",
                "Notices & announcements",
                "Fee tracking",
                "Class & exam schedules",
            ],
            color: "purple",
        },
    };

    const tabs = [
        { id: "admin" as TabType, label: "Admin", icon: "🔧" },
        { id: "teacher" as TabType, label: "Teacher", icon: "📚" },
        { id: "parent" as TabType, label: "Parent/Student", icon: "👨‍👩‍👧" },
    ];

    return (
        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-purple-50 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
            <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Powerful Features for <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Everyone</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tailored features for admins, teachers, and parents. One platform, endless possibilities.
                    </p>
                </motion.div>

                {/* Tab buttons */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                ? "bg-linear-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-200"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            <span className="text-xl">{tab.icon}</span>
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Tab content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left - Features list */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                        {features[activeTab].title}
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        {features[activeTab].description}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {features[activeTab].items.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3 group cursor-pointer"
                                        >
                                            <div
                                                className={`w-6 h-6 rounded-full bg-linear-to-r from-${features[activeTab].color
                                                    }-100 to-${features[activeTab].color
                                                    }-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${features[activeTab].color === "indigo"
                                                        ? "from-indigo-100 to-indigo-50 text-indigo-600"
                                                        : features[activeTab].color === "blue"
                                                            ? "from-blue-100 to-blue-50 text-blue-600"
                                                            : "from-purple-100 to-purple-50 text-purple-600"
                                                    }`}
                                            >
                                                <svg
                                                    className="w-4 h-4 font-bold"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-lg text-gray-700 group-hover:text-indigo-600 transition-colors duration-300">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-8 px-8 py-3 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300"
                                >
                                    Learn More
                                </motion.button>
                            </div>

                            {/* Right - Mockup image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative hidden lg:block"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-indigo-400 to-blue-400 rounded-xl blur-2xl opacity-10"></div>
                                <div className="relative bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
                                    <div className="space-y-4">
                                        <div className="h-8 w-3/4 bg-linear-to-r from-indigo-200 to-blue-200 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="h-4 w-full bg-gray-100 rounded"></div>
                                            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                                            <div className="h-4 w-4/6 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div className="h-20 bg-indigo-50 rounded-lg"></div>
                                            <div className="h-20 bg-blue-50 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
