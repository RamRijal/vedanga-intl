"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Clock, MapPin, ChevronRight, XCircle } from "lucide-react";

const jobOpenings: any[] = []; // Example of an empty job openings array
/*const jobOpenings = [
{
  id: 1,
    title: "Mathematics Teacher",
      department: "Secondary Education",
        type: "Full-time",
          location: "On-campus",
            experience: "3+ years",
              education: "Master's Degree in Mathematics",
                description: "We are seeking an experienced Mathematics teacher for our secondary classes who can inspire students and make complex concepts easy to understand.",
                  color: "bg-blue-100 text-blue-600"
},
{
  id: 2,
    title: "Science Lab Assistant",
      department: "Science Department",
        type: "Full-time",
          location: "On-campus",
            experience: "2+ years",
              education: "Bachelor's in Science",
                description: "Looking for a dedicated lab assistant to support our science faculty and maintain laboratory equipment and materials.",
                  color: "bg-green-100 text-green-600"
},
{
  id: 3,
    title: "Physical Education Instructor",
      department: "Sports",
        type: "Full-time",
          location: "On-campus",
            experience: "3+ years",
              education: "Bachelor's in Physical Education",
                description: "Seeking an energetic PE instructor to develop and implement comprehensive physical education programs.",
                  color: "bg-red-100 text-red-600"
}
];
*/
export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#DB2139] mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore career opportunities at Vedanga International School
          </p>
        </motion.div>

        {jobOpenings.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-red-100 text-red-600 rounded-full">
              <XCircle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">No Job Openings Available</h2>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: index * 0.025 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 ${job.color} rounded-lg`}>
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <div className="mt-1">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                          {job.department}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-5 flex-grow">{job.description}</p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{job.experience} experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{job.education}</span>
                    </div>
                  </div>

                  <button className="mt-auto w-full flex items-center justify-between px-4 py-2.5 bg-[#DB2139] text-white rounded-lg hover:bg-[#e94158] transition-colors group">
                    <span className="font-medium">Apply Now</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
