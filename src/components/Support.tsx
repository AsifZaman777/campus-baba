"use client";

import { motion } from "framer-motion";

export default function Support() {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-gray-900 relative overflow-hidden">
            {/* Animated grid background - matching hero section style */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute -bottom-32 left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Hero style grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30"></div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3e62e305,transparent)]" />
            </div>

            {/* Animated circuit lines - Highly Detailed */}
            <svg className="absolute inset-0 w-full h-full z-0 circuit opacity-50" preserveAspectRatio="none" aria-hidden>
                {/* Primary Data Paths - Fluid */}
                <path d="M 0 200 C 300 200 400 600 700 600 C 1000 600 1100 200 1400 200" stroke="url(#circuit-glow)" strokeWidth="2.5" fill="none" />
                <path d="M 1400 400 C 1100 400 1000 100 700 100 C 400 100 300 400 0 400" stroke="url(#circuit-glow)" strokeWidth="2.5" fill="none" />

                {/* Secondary Geometric Traces - Technical Style */}
                <path d="M 100 100 L 200 100 L 200 200 L 300 200" stroke="url(#circuit-glow)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 1300 500 L 1200 500 L 1200 400 L 1100 400" stroke="url(#circuit-glow)" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 600 0 L 600 150 L 750 150 L 750 250" stroke="url(#circuit-glow)" strokeWidth="1.2" fill="none" opacity="0.4" />
                <path d="M 800 800 L 800 650 L 650 650 L 650 550" stroke="url(#circuit-glow)" strokeWidth="1.2" fill="none" opacity="0.4" />

                {/* Animated Data Packets (Pulsating Nodes) using Framer Motion */}
                <motion.circle cx="300" cy="200" r="3.5" fill="#4f46e5" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="1100" cy="400" r="3.5" fill="#4f46e5" animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                <motion.circle cx="750" cy="250" r="2.5" fill="#6366f1" animate={{ opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />
                <motion.circle cx="650" cy="550" r="2.5" fill="#6366f1" animate={{ opacity: [0.1, 0.8, 0.1] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />

                <defs>
                    <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6">
                            <animate attributeName="stopOpacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ staggerChildren: 0.2 }}
                    className="relative flex flex-col lg:flex-row items-center gap-10"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                        }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Support — <span className="text-indigo-600">Always On</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Our AI-assisted support team pairs with human experts to give instant, accurate answers. Reach us via WhatsApp or phone — we&apos;re here when you need us.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                whileHover={{ translateY: -3, boxShadow: "0 10px 20px rgba(34, 197, 94, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/8801824500704"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-all duration-200"
                                aria-label="WhatsApp Chat"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                </svg>
                                WhatsApp Chat
                            </motion.a>

                            <motion.a
                                whileHover={{ translateY: -3, boxShadow: "0 10px 20px rgba(79, 70, 229, 0.15)" }}
                                whileTap={{ scale: 0.98 }}
                                href="tel:+8801824500704"
                                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all duration-200"
                                aria-label="Call Now"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Now
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Contact card - Light version */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                        }}
                        whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)" }}
                        className="w-full sm:w-96 p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl text-gray-900 relative"
                    >
                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-indigo-500/10 blur-2xl" />
                        <div className="text-left space-y-6">
                            <div>
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">📞 Phone</p>
                                <p className="text-gray-900 text-xl font-bold">+880 1824 500704</p>
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">💬 WhatsApp</p>
                                <p className="text-gray-900 text-xl font-bold">+880 1824 500704</p>
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">📧 Email</p>
                                <p className="text-gray-900 font-bold">asifdev777@gmail.com</p>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available 24/7 • Response in &lt; 5m
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <style jsx>{`
                /* Circuit line drawing animation */
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
        </section>
    );
}
