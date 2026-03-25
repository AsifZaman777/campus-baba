"use client";

import { motion } from "framer-motion";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="relative overflow-hidden pt-40 pb-40 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Animated gradient background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
                <div className="absolute -top-40 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="space-y-3">
                            <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200">
                                <span className="text-sm font-semibold text-indigo-600">
                                    Welcome to the Future of Education
                                </span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Bridge the Gap Between{" "}
                                <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                                    Parents, Teachers & Students
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 leading-relaxed"
                        >
                            A complete campus management platform with real-time communication,
                            academic control, and smart insights. Everything you need to manage
                            a modern school in one place.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                            >
                                Get Started Free
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                            >
                                Book Demo
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-8 pt-8 border-t border-gray-200"
                        >
                            <div>
                                <p className="text-3xl font-bold text-indigo-600">500+</p>
                                <p className="text-gray-600 mt-1">Schools Connected</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-blue-600">50K+</p>
                                <p className="text-gray-600 mt-1">Active Users</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-indigo-600">98%</p>
                                <p className="text-gray-600 mt-1">Satisfaction Rate</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Enhanced animated mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

                        {/* Dashboard mockup - Premium Design */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotateX: [0, 2, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 overflow-hidden"
                            style={{ perspective: '1200px' }}
                        >
                            {/* Header with gradient */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600"></div>

                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_50%,#e5e7eb_50%,#e5e7eb_75%,transparent_75%,transparent)] bg-size-[40px_40px]"></div>
                            </div>

                            <div className="relative space-y-6">
                                {/* Top bar with user avatar */}
                                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                                    <div className="space-y-1 flex-1">
                                        <div className="h-3 w-40 bg-linear-to-r from-indigo-200 to-blue-200 rounded-full"></div>
                                        <div className="h-2 w-56 bg-gray-100 rounded-full mt-2"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 bg-linear-to-br from-indigo-500 to-blue-600 rounded-full"></div>
                                        <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* KPI Cards with animation */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ delay: i * 0.1, duration: 3, repeat: Infinity }}
                                            className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-100 hover:border-indigo-300 transition-colors"
                                        >
                                            <div className="h-2 w-16 bg-indigo-300 rounded-full mb-3"></div>
                                            <div className="h-6 w-20 bg-linear-to-r from-indigo-600 to-blue-600 rounded-lg"></div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Chart area */}
                                <div className="space-y-3">
                                    <div className="h-2 w-32 bg-gray-200 rounded-full"></div>
                                    <div className="h-32 bg-gray-50 rounded-xl p-4 relative overflow-hidden">
                                        {/* Animated bars */}
                                        <div className="flex items-end gap-2 h-full">
                                            {[40, 65, 45, 70, 50, 80, 55].map((height, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${height}%` }}
                                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                                    className="flex-1 bg-linear-to-t from-indigo-500 to-blue-400 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                                                ></motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Table preview */}
                                <div className="space-y-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ delay: i * 0.15, duration: 2, repeat: Infinity }}
                                            className="flex gap-2 items-center"
                                        >
                                            <div className="w-8 h-8 bg-linear-to-br from-purple-400 to-blue-400 rounded-lg shrink-0"></div>
                                            <div className="flex-1 h-2 bg-gray-100 rounded-full"></div>
                                            <div className="w-12 h-2 bg-green-200 rounded-full"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
