"use client";

import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Simplified Counter Component
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            const duration = 2000; // 2 seconds
            const increment = Math.max(1, Math.floor(value / (duration / 16))); // 60fps
            let start = 0;

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 16); // ~60fps

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {count}
            {suffix}
        </motion.span>
    );
};

export default function AdmissionCTA() {
    return (
        <div className="w-full min-h-full bg-[#b3182a]">
            <div className="max-w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-7">
                    {/* Statistics Section */}
                    <div className="lg:col-span-3 bg-[#D41D33] flex items-center justify-center h-full shadow-sm p-8 text-white overflow-hidden relative">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#b3182a] rounded-full opacity-40"></div>
                        <div className="absolute -left-40 -bottom-20 w-64 h-64 bg-[#b3182a] rounded-full opacity-40"></div>

                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            {[
                                { value: 90, suffix: "%", label: "Graduation Rate" },
                                { value: 30, suffix: "+", label: "Majors Offered" },
                                { value: 68, suffix: "", label: "Total Classrooms" },
                                { value: 2, suffix: "k+", label: "Total Graduates" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 rounded-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-6xl font-bold text-yellow-400 block mb-2">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </span>
                                    <span className="text-lg font-medium">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div
                        className="lg:col-span-4 shadow-sm p-8 flex flex-col justify-center relative min-h-[500px]"
                        style={{
                            backgroundImage: "url('/images/foto17.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="relative z-10 p-8 rounded-xl max-w-2xl mx-auto w-full">
                            <div className="text-center mb-8">
                                <h2 className="text-4xl font-bold text-gray-100 mb-2">Admissions are open!</h2>
                                <p className="text-gray-200">
                                    Start your journey with us by applying for admission.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd-d_vNtskX3Q-68EN1k_LkUHbD4k8BV_Jky95BNFvI9k8J2Q/viewform?usp=header"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-4 bg-[#D41D33] text-white rounded-lg font-medium hover:bg-[#b3182a] transition-all duration-300 flex items-center justify-center"
                                >
                                    Apply Now
                                </a>
                            </div>

                            <div className="mt-8 flex justify-center space-x-4">
                                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                                    <svg className="w-5 h-5 text-[#D41D33]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                                    <svg className="w-5 h-5 text-[#D41D33]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </button>
                                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                                    <svg className="w-5 h-5 text-[#D41D33]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
