"use client";

import { motion } from "framer-motion";
import { Download, Mail, ChevronRight } from "lucide-react";

// TODO: Replace with API data
const newsletters = [
  {
    id: 1,
    title: "Spring Term Newsletter 2024",
    date: "March 2024",
    description: "Highlights from our spring term including academic achievements, sports events, and upcoming activities.",
    coverImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Winter Special Edition",
    date: "December 2023",
    description: "Celebrating our winter festivities, student achievements, and community outreach programs.",
    coverImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Fall Term Newsletter 2023",
    date: "September 2023",
    description: "Back to school special featuring new faculty members, facility updates, and student success stories.",
    coverImage: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#D41D33] mb-4">School Newsletter</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay connected with our school community through our regular newsletters
            featuring updates, achievements, and upcoming events.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsletters.map((newsletter, index) => (
            <motion.div
              key={newsletter.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <img
                  src={newsletter.coverImage}
                  alt={newsletter.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FAA02E] text-white px-4 py-1 rounded-full text-sm">
                  {newsletter.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{newsletter.title}</h3>
                <p className="text-gray-600 mb-6">{newsletter.description}</p>
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-[#D41D33] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-[#D41D33] text-[#D41D33] rounded-lg hover:bg-[#D41D33] hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest updates from our school directly in your inbox.
                We send newsletters monthly with important announcements and highlights.
              </p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                />
                <button className="flex items-center space-x-2 px-6 py-2 bg-[#D41D33] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                  <span>Subscribe</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Newsletter"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}