"use client";

import { motion } from "framer-motion";

export default function Support() {
    return (
        <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        We&apos;re Here to Help
                    </h2>
                    <p className="text-xl text-indigo-100 mb-12">
                        Get 24/7 support via WhatsApp or phone. Our team is always ready to assist you.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/8801700000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.992 1.504 9.88 9.88 0 00-2.82 2.14 9.82 9.82 0 00-1.54 2.79 9.73 9.73 0 00-.06 8.47 9.83 9.83 0 001.552 2.773 9.87 9.87 0 002.818 2.14 9.88 9.88 0 004.992 1.504h.005a9.885 9.885 0 004.995-1.504 9.877 9.877 0 002.82-2.14 9.822 9.822 0 001.543-2.79 9.733 9.733 0 00.06-8.47 9.837 9.837 0 00-1.555-2.773 9.866 9.866 0 00-2.82-2.14 9.878 9.878 0 00-4.995-1.503zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                            </svg>
                            WhatsApp Chat
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+8801700000000"
                            className="px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                        </motion.a>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 text-center">
                        <p className="text-white/90 text-lg mb-4">
                            📞 <span className="font-semibold">Phone:</span> +880 1700 000000
                        </p>
                        <p className="text-white/90 text-lg mb-4">
                            💬 <span className="font-semibold">WhatsApp:</span> +880 1700 000000
                        </p>
                        <p className="text-white/90 text-lg">
                            📧 <span className="font-semibold">Email:</span> support@campusbaba.bd
                        </p>
                        <p className="text-white/70 text-sm mt-6">
                            Available 24/7 • Response time: Under 5 minutes
                        </p>
                    </div>
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
