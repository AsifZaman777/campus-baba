"use client";

import { motion } from "framer-motion";

export default function About() {
    const cards = [
        {
            icon: "⚡",
            title: "Real-time Updates",
            description:
                "Get instant notifications about attendance, results, and important announcements",
            gradient: "from-indigo-50 to-indigo-100",
            borderColor: "border-indigo-200",
            iconBg: "bg-indigo-100",
        },
        {
            icon: "🎯",
            title: "Centralized Management",
            description:
                "Manage students, teachers, fees, and schedules all from one dashboard",
            gradient: "from-purple-50 to-purple-100",
            borderColor: "border-purple-200",
            iconBg: "bg-purple-100",
        },
        {
            icon: "📊",
            title: "Data-driven Insights",
            description:
                "Make better decisions with detailed analytics and performance reports",
            gradient: "from-blue-50 to-blue-100",
            borderColor: "border-blue-200",
            iconBg: "bg-blue-100",
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-indigo-50 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="inline-block mb-4"
                    >
                        <span className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-semibold">
                            ✨ Why Choose Us
                        </span>
                    </motion.div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Why <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">CampusBaba</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        CampusBaba solves the biggest problem in education — lack of communication and transparency. From attendance to exam results, parents stay informed, teachers stay organized, and admins stay in control.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -15, boxShadow: "0 30px 60px -15px rgba(79, 70, 229, 0.3)" }}
                            className={`bg-linear-to-br ${card.gradient} p-8 rounded-2xl border-2 ${card.borderColor} hover:border-indigo-300 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                        >
                            {/* Background animation */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_50%,#e5e7eb_50%,#e5e7eb_75%,transparent_75%,transparent)] bg-size-[40px_40px]"></div>
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className={`${card.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {card.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
        </section>
    );
}