"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

const CrossIcon = () => (
    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Pricing() {
    // const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            price: "1,499",
            period: "/month",
            description: "Essential tools for admin & teacher management.",
            features: [
                "Admin & Teacher Management",
                "Financial Management",
                "Reports & Analytics",
                "Notice Management",
                "3 Admins",
                "10 Teachers",
            ],
            missing: [
                "Parent & Student Portal",
                "Exam Performance Insights",
                "Daily Backups",
            ],
            cta: "Get Started",
            popular: false,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            name: "Individual",
            price: "1,000",
            period: "/month",
            description: "Perfect for solo educators and tutors.",
            features: [
                "Basic Admin Features",
                "Attendance Tracking",
                "Grade Management",
                "Schedule View",
                "1 Admin",
                "5 Teachers",
            ],
            missing: [
                "Parent Portal",
                "Financial Management",
                "Custom Reports",
            ],
            cta: "Start Now",
            popular: false,
            badge: "Best Selling",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            name: "CampusBaba",
            price: "1,499",
            period: "/mo + ৳15/student",
            description: "Complete solution for growing institutions.",
            features: [
                "Everything in Starter",
                "Parent & Student Portal",
                "Exam Performance Insights",
                "Fee Tracking & Online Payment",
                "Unlimited Support",
                "4 Admins & 12 Teachers",
            ],
            missing: [],
            cta: "Get Full Access",
            popular: true,
            badge: "Most Popular",
            gradient: "from-indigo-600 via-purple-600 to-pink-600",
        },
        {
            name: "Enterprise",
            price: "1,50,000",
            period: "(One-time)",
            description: "Perpetual license for large universities.",
            features: [
                "Unlimited Users & Roles",
                "Custom Development",
                "Self-Hosted Option",
                "Lifetime Ownership",
                "Priority 24/7 Support",
                "API Access",
            ],
            missing: [],
            cta: "Contact Sales",
            popular: false,
            gradient: "from-amber-500 to-orange-600",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50 h-full" id="pricing">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-purple-200/40 blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] left-[-10%] w-100 h-100 rounded-full bg-indigo-200/40 blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-150 h-150 rounded-full bg-blue-200/40 blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
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
                        className="mt-6 text-xl text-gray-500"
                    >
                        Choose the perfect plan for your needs. No hidden fees. Cancel anytime.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col p-8 bg-white rounded-3xl transition-all duration-300 ${plan.popular
                                ? 'ring-2 ring-indigo-600 shadow-2xl scale-105 z-10'
                                : 'border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
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
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
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
                            </div>

                            <button
                                className={`w-full block text-center rounded-xl px-6 py-4 text-sm font-bold transition-all duration-200 ${plan.popular
                                    ? 'bg-linear-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-300'
                                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Trust Section */}
                <div className="mt-24 border-t border-gray-100 pt-16">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">🛡️</div>
                            <h3 className="font-bold text-gray-900 mb-2">Secure & Private</h3>
                            <p className="text-sm text-gray-500">Your institution&apos;s data is encrypted and backed up daily.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">💬</div>
                            <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                            <p className="text-sm text-gray-500">Dedicated support team available via WhatsApp and phone.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl">⚡</div>
                            <h3 className="font-bold text-gray-900 mb-2">Fast Setup</h3>
                            <p className="text-sm text-gray-500">Get your institution running in less than 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
