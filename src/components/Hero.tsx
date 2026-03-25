"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import dashboard from "../../public/images/hero-sections/admin-dashboard.png"
import attendance from "../../public/images/hero-sections/attendance.png"

export default function Hero() {
    const heroImages = [
        dashboard,
        attendance,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [heroImages.length]);

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
                            <motion.a
                                href="https://demo.campusbaba.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-block"
                            >
                                Experience Demo
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                            >
                                Book Live Demo
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

                    {/* Right side - Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden"
                        >
                            {/* Browser/Window Bar for realism */}
                            <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                <div className="ml-4 h-4 w-64 bg-white rounded-md border border-gray-200 opacity-50"></div>
                            </div>

                            <div className="relative w-full aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 p-1"
                                    >
                                        <Image
                                            src={heroImages[currentImageIndex]}
                                            alt={`CampusBaba Dashboard Interface ${currentImageIndex + 1}`}
                                            fill
                                            className="object-contain"
                                            priority={currentImageIndex === 0}
                                            placeholder="blur"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                                {heroImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                            ? "bg-indigo-600 w-6"
                                            : "bg-gray-300 hover:bg-gray-400"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
