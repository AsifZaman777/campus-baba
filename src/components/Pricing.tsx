"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Pricing() {
    const [activeCategory, setActiveCategory] = useState<'school' | 'tutor' | 'license'>('school');

    // Mouse tracking for interactive background
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const plans = [
        {
            name: "SME Plan",
            category: "school",
            price: "1,499",
            period: "/month",
            description: "Essential tools for admin & teacher management.",
            features: [
                "Admin & Teacher Management",
                "Free Teacher Portal",
                "Full Academic Control",
                "Student Payment Management",
                "Reports & Analytics",
                "Notice Management",
                "3 Admins & 10 Teachers Access",
            ],
            missing: [
                "Parent & Student Portal",
                "Parent Communication",
                "API support",
                "Data backup",
                "Custom Reports",
            ],
            cta: "Get Started",
            popular: false,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            name: "Individual Plan",
            category: "tutor",
            price: "1000",
            period: "/month",
            description: "Perfect for solo educators and tutors.",
            features: [
                "Admin & Teacher Management",
                "Free Teacher Portal",
                "Full Academic Control",
                "Student Payment Management",
                "Reports & Analytics",
                "Notice Management",
                "1 Admin & 1 Teachers Access",
            ],
            missing: [
                "Parent & Student Portal",
                "Parent Communication",
                "API support",
                "Data backup",
                "Custom Reports",
            ],
            cta: "Start Now",
            popular: true,
            badge: "Best Selling",
            gradient: "from-purple-500 to-pink-500",
        },

        {
            name: "Campus Connect Plan",
            category: "school",
            price: "1,499",
            period: "15/month (per student)",
            description: "Perfect combo of SME Plan + Student Pass.",
            features: [],
            groupedFeatures: [
                {
                    title: "Admin Features",
                    items: [
                        "Admin & Teacher Management",
                        "Free Teacher Portal",
                        "Full Academic Control",
                        "Student Payment Management",
                        "Reports & Analytics",
                        "Notice Management",
                        "Fee Tracking",
                        "4 Admins & 12 Teachers",
                        "Unlimited Support"
                    ]
                },
                {
                    title: "Parent Features",
                    items: [
                        "Parent & Student Portal",
                        "Class routine and schedule",
                        "Regular Attendance Tracking",
                        "Exam Performance Insights",
                        "Exam marks monitoring",
                        "Exam schedule update",
                        "Payment Status and History",
                        "Notice & Announcement"
                    ]
                }
            ],
            missing: [],
            cta: "Get Full Access",
            popular: true,
            badge: "Most Popular",
            gradient: "from-indigo-600 via-purple-600 to-pink-600",
        },
        {
            name: "Student Pass (For Students)",
            category: "school",
            price: "15",
            period: "/month (per student)",
            description: "Bridge the gap between teachers and parents with student pass",
            features: [],
            groupedFeatures: [

                {
                    title: "Parent / Student Features",
                    items: [
                        "Parent & Student Portal",
                        "1 student and 1 parent account",
                        "Class routine and schedule",
                        "Regular Attendance Tracking",
                        "Exam Performance Insights",
                        "Exam marks monitoring",
                        "Exam schedule update",
                        "Payment Status and History",
                        "Notice & Announcement",
                        "1:3 parent-student ratio"
                    ]
                }
            ],
            missing: [
                "Parent & Student Portal",
                "Parent Communication",
                "API support",
                "Data backup",
                "Custom Reports",
            ],
            cta: "Get Full Access",
            popular: false,
            badge: "Parents Demand",
            gradient: "from-indigo-600 via-purple-600 to-pink-600",
        },
        {
            name: "Student Pass (For Students)",
            category: "tutor",
            price: "15",
            period: "/month (per student)",
            description: "Bridge the gap between teachers and parents with student pass",
            features: [],
            groupedFeatures: [

                {
                    title: "Parent / Student Features",
                    items: [
                        "Parent & Student Portal",
                        "1 student and 1 parent account",
                        "Class routine and schedule",
                        "Regular Attendance Tracking",
                        "Exam Performance Insights",
                        "Exam marks monitoring",
                        "Exam schedule update",
                        "Payment Status and History",
                        "Notice & Announcement",
                        "1:3 parent-student ratio"
                    ]
                }
            ],
            missing: [
                "Parent & Student Portal",
                "Parent Communication",
                "API support",
                "Data backup",
                "Custom Reports",
            ],
            cta: "Get Full Access",
            popular: false,
            badge: "Parents Demand",
            gradient: "from-indigo-600 via-purple-600 to-pink-600",
        },
        {
            name: "Enterprise",
            category: "license",
            price: "1,50,000",
            period: "/one-time",
            description: "Perpetual license for large organizations",
            features: [
                "Unlimited Users & Roles",
                "Customized Development",
                "Self-Hosted Option",
                "Lifetime Ownership",
                "Priority 24/7 Support",
                "Email and Whatsapp API",
                "Full data backup",
                "Data Insights and Analytics",
                "Data handover per month",
                "On demand customization any time"
            ],
            missing: [],
            cta: "Contact Sales",
            popular: false,
            gradient: "from-amber-500 to-orange-600",
        },
    ];

    const filteredPlans = plans.filter(p => p.category === activeCategory);

    return (
        <section
            className="py-24 relative overflow-hidden bg-white group"
            id="pricing"
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Futuristic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                650px circle at ${mouseX}px ${mouseY}px,
                                rgba(79, 70, 229, 0.1),
                                transparent 80%
                            )
                        `,
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-indigo-600 font-semibold tracking-wide uppercase text-sm bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100"
                    >
                        Flexible Pricing
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight"
                    >
                        Plans that scale with your <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">Institution</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg text-gray-500"
                    >
                        Choose the perfect plan for your needs.
                    </motion.p>

                    {/* Category Toggle */}
                    <div className="mt-8 flex justify-center">
                        <div className="bg-white p-1 rounded-xl border border-gray-200 shadow-sm inline-flex relative">
                            <motion.div
                                className="absolute top-1 bottom-1 bg-indigo-600 rounded-lg shadow-sm z-0"
                                initial={false}
                                animate={{
                                    left: activeCategory === 'school' ? '4px' : activeCategory === 'tutor' ? 'calc(33.33% + 4px)' : 'calc(66.66% + 4px)',
                                    width: 'calc(33.33% - 5px)',
                                    x: 0
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveCategory('school')}
                                className={`relative z-10 w-32 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${activeCategory === 'school' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                Institutional
                            </button>
                            <button
                                onClick={() => setActiveCategory('tutor')}
                                className={`relative z-10 w-32 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${activeCategory === 'tutor' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                Tutors
                            </button>
                            <button
                                onClick={() => setActiveCategory('license')}
                                className={`relative z-10 w-32 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${activeCategory === 'license' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                License
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`grid gap-8 ${activeCategory === 'school'
                            ? 'grid-cols-1 md:grid-cols-3'
                            : activeCategory === 'tutor'
                                ? 'max-w-4xl mx-auto grid-cols-1 md:grid-cols-2'
                                : 'max-w-md mx-auto grid-cols-1'
                            }`}
                    >
                        {filteredPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative flex flex-col p-8 bg-white rounded-3xl transition-all duration-300 h-full ${plan.popular
                                    ? 'ring-2 ring-indigo-600 shadow-2xl scale-100 md:scale-105 z-10'
                                    : 'border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 -mt-4 mr-4">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                {plan.badge && !plan.popular && (
                                    <div className="absolute top-0 right-0 -mt-4 mr-4">
                                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 border border-emerald-200">
                                            {plan.badge}
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed min-h-10">{plan.description}</p>
                                </div>

                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{plan.price}</span>
                                    <span className={`text-base font-medium ml-1 text-gray-500`}>
                                        {plan.period === "(One-time)" ? "" : "৳"}
                                        {plan.period}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    {'groupedFeatures' in plan && plan.groupedFeatures ? (
                                        <div className="space-y-6 mb-8">
                                            {(plan.groupedFeatures as { title: string, items: string[] }[]).map((group, gIdx) => (
                                                <div key={gIdx}>
                                                    <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
                                                        {group.title}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {group.items.map((feature, fIdx) => (
                                                            <li key={fIdx} className="flex items-start">
                                                                <div className="shrink-0 mt-0.5">
                                                                    <CheckIcon />
                                                                </div>
                                                                <span className="ml-3 text-sm text-gray-700 font-medium">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            {plan.missing && plan.missing.length > 0 && (
                                                <div>
                                                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
                                                        Not Included
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {plan.missing.map((feature, idx) => (
                                                            <li key={idx} className="flex items-start opacity-60">
                                                                <div className="shrink-0 mt-0.5">
                                                                    <CrossIcon />
                                                                </div>
                                                                <span className="ml-3 text-sm text-gray-500 line-through">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <ul className="space-y-4 mb-8">
                                            {plan.features?.map((feature, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <div className="shrink-0 mt-0.5">
                                                        <CheckIcon />
                                                    </div>
                                                    <span className="ml-3 text-sm text-gray-700 font-medium">{feature}</span>
                                                </li>
                                            ))}
                                            {plan.missing.map((feature, idx) => (
                                                <li key={idx} className="flex items-start opacity-60">
                                                    <div className="shrink-0 mt-0.5">
                                                        <CrossIcon />
                                                    </div>
                                                    <span className="ml-3 text-sm text-gray-500 line-through">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <button
                                    className={`w-full block text-center rounded-xl px-6 py-4 text-sm font-bold transition-all duration-200 ${plan.popular
                                        ? 'bg-linear-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-300'
                                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800'
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
