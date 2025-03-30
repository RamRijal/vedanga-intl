"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Award, BookOpen, Quote } from "lucide-react";
import Image from "next/image";

export default function PrincipalMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF981F]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D41D33]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#D41D33] bg-[#D41D33]/10 rounded-full mb-4 tracking-wider">
            MESSAGE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From the <span className="text-[#D41D33]">Principal&apos;s</span> Desk
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding Vedanga International School towards educational excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Principal Profile Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
              <div className="relative h-80 w-full">
                <Image
                  loading="lazy"
                  src="/images/ppp.png"
                  alt="Principal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">Dr. Bhawesh Sapkota</h2>
                  <p className="text-white/90">Principal</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FF981F]/10 rounded-lg">
                    <Award className="h-6 w-6 text-[#FF981F]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Qualifications</h3>
                    <p className="text-gray-700">Ph.D. in Education </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FF981F]/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-[#FF981F]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Experience</h3>
                    <p className="text-gray-700">20+ years in education</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FF981F]/10 rounded-lg">
                    <Mail className="h-6 w-6 text-[#FF981F]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="text-gray-700">sapkotabhaweshvedanga@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#FF981F]/10 rounded-lg">
                    <Phone className="h-6 w-6 text-[#FF981F]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <p className="text-gray-700">+977 98</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Dear Parents, Students, and Community Members,
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Welcome to Vedanga International School. As the Principal, it is my privilege to lead an institution that stands at the forefront of educational excellence. Our commitment to providing a world-class education is unwavering, and we take pride in nurturing young minds to become global citizens of tomorrow.
                </p>

                <div className="relative my-12 p-8 bg-[#D41D33]/5 rounded-xl border-l-4 border-[#D41D33]">
                  <Quote className="absolute top-3 left-4 h-8 w-8 text-[#D41D33]/30" />
                  <p className="text-xl italic text-gray-700 font-medium mt-2">
                    &quot;Education is not just about acquiring knowledge, but about shaping character and building futures.&quot;
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  At Vedanga, we believe in the power of holistic education. Our curriculum is designed to not only achieve academic excellence but also to develop character, creativity, and critical thinking skills. We emphasize the importance of values, cultural awareness, and social responsibility in shaping well-rounded individuals.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Our dedicated faculty members work tirelessly to create an engaging learning environment that encourages curiosity, innovation, and personal growth. We understand that each student is unique, and our personalized approach to education ensures that every child receives the attention and support they need to succeed.
                </p>

                <div className="my-12 p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-[#D41D33] mb-4">Our Core Commitments:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#D41D33] text-white text-sm font-bold">1</span>
                      <span className="text-gray-700">Academic excellence through innovative teaching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#FF981F] text-white text-sm font-bold">2</span>
                      <span className="text-gray-700">Character development and values education</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-[#D41D33] text-white text-sm font-bold">3</span>
                      <span className="text-gray-700">Global citizenship and cultural awareness</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  As we continue to grow and evolve, we remain committed to our core values and our mission of preparing students for the challenges and opportunities of the 21st century. Our state-of-the-art facilities, comprehensive curriculum, and focus on both academic and extracurricular excellence create an environment where students can truly thrive.
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  We believe that education is a partnership between the school, students, and parents. Your involvement and support are crucial in helping us achieve our mission of nurturing future leaders who are not only academically proficient but also socially responsible and emotionally intelligent.
                </p>

                <p className="text-gray-600 leading-relaxed mb-12">
                  Thank you for being part of our educational journey. Together, we can create a brighter future for our children.
                </p>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-xl font-semibold text-gray-900">
                    Warm regards,<br />
                    <span className="text-[#D41D33]">Dr. Sarah Johnson</span><br />
                    Principal, Vedanga International School
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}