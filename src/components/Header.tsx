"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 20);
        });
    }, [scrollY]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
                }`}
        >
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300`}>
                <div
                    className={`relative backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-between transition-all duration-500 ${isScrolled
                        ? "bg-white/80 shadow-lg shadow-indigo-500/5 px-6 py-3"
                        : "bg-transparent shadow-none border-transparent px-0 py-2"
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group bg-transparent">
                        <div className="relative w-12 h-12 transition-transform duration-300 bg-transparent group-hover:scale-110">
                            <Image
                                src="/logos/campusbaba_logo.png"
                                alt="CampusBaba Logo"
                                fill
                                className="object-contain mix-blend-multiply"
                            />
                        </div>
                        <span className={`font-bold bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}>
                            CampusBaba
                        </span>
                    </Link>

                    {/* Nav Items */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Features', 'Pricing', 'FAQ', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-md font-medium text-gray-600 hover:text-indigo-600 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
                            Sign In
                        </button>
                        <button className={`bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-medium shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:scale-105 transition-all duration-300 text-sm ${isScrolled ? "px-5 py-2" : "px-6 py-2.5"}`}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
