"use client";

import { motion } from "framer-motion";
import { Users, Book, Microscope, Palette, Music, Code, Globe, Camera, ChevronRight } from "lucide-react";

const clubs = [
  {
    name: "Science Club",
    description: "Explore the wonders of science through experiments and research projects",
    icon: <Microscope className="h-6 w-6" />,
    members: 45,
    meetingDay: "Tuesday",
    activities: ["Lab Experiments", "Science Fair", "Field Trips"],
    advisor: "Dr. Emily Brown",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Art & Design Club",
    description: "Express creativity through various art forms and design projects",
    icon: <Palette className="h-6 w-6" />,
    members: 32,
    meetingDay: "Wednesday",
    activities: ["Art Exhibitions", "Design Workshops", "Creative Projects"],
    advisor: "Mr. Robert Taylor",
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Coding Club",
    description: "Learn programming and build exciting software projects",
    icon: <Code className="h-6 w-6" />,
    members: 38,
    meetingDay: "Thursday",
    activities: ["Coding Workshops", "Hackathons", "App Development"],
    advisor: "Ms. Sarah Chen",
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Photography Club",
    description: "Capture moments and learn professional photography techniques",
    icon: <Camera className="h-6 w-6" />,
    members: 25,
    meetingDay: "Friday",
    activities: ["Photo Walks", "Exhibitions", "Workshops"],
    advisor: "Mr. James Wilson",
    color: "bg-amber-100 text-amber-600"
  },
  {
    name: "Music Club",
    description: "Explore musical talents and perform at school events",
    icon: <Music className="h-6 w-6" />,
    members: 40,
    meetingDay: "Monday",
    activities: ["Band Practice", "Concerts", "Music Theory"],
    advisor: "Mrs. Lisa Chen",
    color: "bg-red-100 text-red-600"
  },
  {
    name: "Global Culture Club",
    description: "Learn about different cultures and international relations",
    icon: <Globe className="h-6 w-6" />,
    members: 35,
    meetingDay: "Wednesday",
    activities: ["Cultural Events", "Language Exchange", "International Food Fair"],
    advisor: "Mr. David Park",
    color: "bg-indigo-100 text-indigo-600"
  }
];

export default function Clubs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#DB2139] mb-4">Student Clubs & Organizations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover your passion, develop new skills, and connect with like-minded peers through our diverse range of student-led clubs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clubs.map((club, index) => (
            <motion.div
              key={club.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 ${club.color} rounded-lg`}>
                    {club.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{club.members} members</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-5 flex-grow">{club.description}</p>

                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {club.activities.map((activity, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-600 border border-gray-200"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <span className="font-medium">Advisor:</span>
                      <span className="ml-1">{club.advisor}</span>
                    </div>
                    <div className="flex items-center">
                      <span>Meets {club.meetingDay}s</span>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center px-4 py-2.5 bg-[#DB2139] text-white rounded-lg hover:bg-[#e94158] transition-colors group">
                    <span className="font-medium">View details</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </div>
  );
}