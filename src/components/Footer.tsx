"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logos/campusbaba_logo_dark.png"

export default function Footer() {
    const footerLinks = {
        Product: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Security", href: "#" },
            { label: "Roadmap", href: "#" },
        ],
        Company: [
            { label: "About Us", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Contact", href: "#contact" },
        ],
        Legal: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
            { label: "GDPR Compliance", href: "#" },
        ],
    };

    return (
        <footer className="bg-linear-to-br from-[#060617] via-[#121224] to-[#060617] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated grid background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,#3e62e340,transparent)]" />
            </div>

            {/* Animated circuit lines - Synchronized with Support */}
            <svg className="absolute inset-0 w-full h-full z-0 circuit opacity-40" preserveAspectRatio="none" aria-hidden>
                {/* Primary Data Paths - Fluid */}
                <path d="M 0 200 C 300 200 400 600 700 600 C 1000 600 1100 200 1400 200" stroke="url(#circuit-glow-footer)" strokeWidth="2.5" fill="none" />
                <path d="M 1400 400 C 1100 400 1000 100 700 100 C 400 100 300 400 0 400" stroke="url(#circuit-glow-footer)" strokeWidth="2.5" fill="none" />

                {/* Secondary Geometric Traces - Technical Style */}
                <path d="M 100 100 L 200 100 L 200 200 L 300 200" stroke="url(#circuit-glow-footer)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 1300 500 L 1200 500 L 1200 400 L 1100 400" stroke="url(#circuit-glow-footer)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 600 0 L 600 150 L 750 150 L 750 250" stroke="url(#circuit-glow-footer)" strokeWidth="1.2" fill="none" opacity="0.4" />

                {/* Animated Data Packets (Pulsating Nodes) */}
                <motion.circle cx="300" cy="200" r="3.5" fill="#4f46e5" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="1100" cy="400" r="3.5" fill="#4f46e5" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <motion.circle cx="750" cy="250" r="2.5" fill="#6366f1" animate={{ opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />

                <defs>
                    <linearGradient id="circuit-glow-footer" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6">
                            <animate attributeName="stopOpacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Logo and description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src={logo}
                                alt="CampusBaba Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                                CampusBaba
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            Bridge the gap between parents, teachers, and students with our complete campus management platform.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 hover:bg-indigo-600/50 flex items-center justify-center transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 hover:bg-indigo-600/50 flex items-center justify-center transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20v-7.21H5.5V9.25h2.79V7.07c0-2.77 1.694-4.286 4.154-4.286 1.182 0 2.198.088 2.49.127v2.888h-1.71c-1.342 0-1.592.638-1.592 1.57v2.05h3.18l-4.143 3.546V20z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 hover:bg-indigo-600/50 flex items-center justify-center transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.661 1.196-1.605 2.908-1.605 2.122 0 3.715 1.39 3.715 4.38v5.507zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.951.77-1.71 1.915-1.71 1.144 0 1.915.759 1.915 1.71 0 .951-.771 1.71-1.915 1.71zm1.6 11.019H3.738V9.814h3.199v10.638zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Link sections */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-gray-800/30 backdrop-blur-sm border border-blue-500/10 rounded-2xl"
                        >
                            <h3 className="text-white font-semibold mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800/50 pt-8"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-500 text-sm">
                            &copy; 2026 CampusBaba. All rights reserved.
                        </p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .circuit path {
                    stroke-dasharray: 2000;
                    stroke-dashoffset: 2000;
                    animation: draw 8s linear infinite;
                    stroke-linecap: round;
                }
                @keyframes draw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </footer>
    );
}
