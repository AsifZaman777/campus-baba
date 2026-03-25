"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How does pricing work?",
            answer:
                "Our pricing is transparent and flexible. The Starter plan is ৳1,499/month for admin features. The Connect plan adds parent/student access at ৳1,499/month plus ৳15 per student per month. Enterprise plans are custom quoted based on your institution's size and needs.",
        },
        {
            question: "Can parents access the system?",
            answer:
                "Yes! With the Connect plan and above, parents get full access to view their child's attendance, grades, exam results, fee status, and receive notifications. They can also communicate with teachers through the platform.",
        },
        {
            question: "Is data secure?",
            answer:
                "Absolutely. We use enterprise-grade encryption (AES-256), secure SSL connections, regular security audits, and comply with international data protection standards. Your institution's data is backed up daily and stored in secure data centers.",
        },
        {
            question: "Do you provide support?",
            answer:
                "Yes, all plans include support. Starter plans get email support, Connect and Enterprise get 24/7 phone and chat support. We also provide onboarding assistance and staff training for all new customers.",
        },
        {
            question: "Can I customize the system?",
            answer:
                "Definitely! While standard features are available to all plans, Enterprise customers can request custom features, branding, and integrations with existing systems. We also have an API for advanced customization needs.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white via-blue-50 to-white relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Have a question? We&apos;ve got answers. Can&apos;t find what you&apos;re looking
                        for?{" "}
                        <span className="text-indigo-600 font-semibold cursor-pointer hover:text-indigo-700">
                            Contact us
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors duration-300"
                        >
                            <motion.button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between group"
                            >
                                <span className="text-lg font-semibold text-gray-900 text-left group-hover:text-indigo-600 transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0 ml-4"
                                >
                                    <svg
                                        className="w-6 h-6 text-indigo-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                    </svg>
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gray-50 border-t border-gray-200"
                                    >
                                        <p className="px-6 py-4 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
