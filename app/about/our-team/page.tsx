"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Award, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "Ph.D. in Education Leadership",
    experience: "20+ years in education",
    email: "s.johnson@school.edu",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "Mr. John Smith",
    role: "Vice Principal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.Ed. in Educational Administration",
    experience: "15+ years in teaching",
    email: "j.smith@school.edu",
    phone: "+1 (555) 234-5678"
  },
  {
    name: "Ms. Emily Brown",
    role: "Head of Sciences",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.Sc. in Physics",
    experience: "12+ years in science education",
    email: "e.brown@school.edu",
    phone: "+1 (555) 345-6789"
  },
  {
    name: "Mr. David Wilson",
    role: "Head of Mathematics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.Sc. in Mathematics",
    experience: "10+ years in mathematics",
    email: "d.wilson@school.edu",
    phone: "+1 (555) 456-7890"
  },
  {
    name: "Mrs. Lisa Chen",
    role: "Head of Languages",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.A. in English Literature",
    experience: "14+ years in language teaching",
    email: "l.chen@school.edu",
    phone: "+1 (555) 567-8901"
  },
  {
    name: "Mr. Robert Taylor",
    role: "Head of Arts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.F.A. in Fine Arts",
    experience: "16+ years in arts education",
    email: "r.taylor@school.edu",
    phone: "+1 (555) 678-9012"
  }
];

const departments = [
  { name: "Science Department", description: "Innovative STEM programs and research opportunities" },
  { name: "Mathematics Department", description: "Developing analytical and problem-solving skills" },
  { name: "Languages Department", description: "Global communication and cultural understanding" },
  { name: "Arts Department", description: "Creative expression across multiple disciplines" },
  { name: "Physical Education", description: "Promoting health, wellness, and teamwork" },
  { name: "Counseling Department", description: "Supporting student growth and development" }
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-[#D41D33] bg-[#D41D33]/10 rounded-full mb-4">
            Faculty & Staff
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-[#D41D33]">Exceptional</span> Team
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated educators bring passion, expertise, and innovation to create an inspiring learning environment
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-[#FAA02E] font-medium">{member.role}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 mt-0.5 text-[#D41D33] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Qualifications</p>
                      <p className="text-gray-700">{member.qualifications}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 mt-0.5 text-[#D41D33] flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">Experience</p>
                      <p className="text-gray-700">{member.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#D41D33] text-white rounded-lg hover:bg-[#A3162A] transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Link>
                  <Link
                    href={`tel:${member.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#D41D33] text-[#D41D33] rounded-lg hover:bg-[#D41D33] hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Departments Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Academic Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized programs designed to foster excellence in every discipline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department, index) => (
              <motion.div
                key={department.name}
                className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#D41D33] transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#D41D33] transition-colors">
                  {department.name}
                </h3>
                <p className="text-gray-600 mb-4">{department.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[#D41D33] font-medium hover:text-[#A3162A] transition-colors"
                >
                  Learn more <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

     
      </div>
    </div>
  );
}