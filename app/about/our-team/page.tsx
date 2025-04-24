"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Award, BookOpen, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const academicTeam = [
  {
    name: "Mr. Bhawesh Chhatkuli",
    role: "Principal",
    image: "/images/ppp.png",
    qualifications: "Masters in Humanities (TU)",
    subject: "Science and Mathematics",
    email: "s.johnson@school.edu",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "Sharada Adhikari",
    role: "Academic Director",
    image: "/images/Team8.png",
    qualifications: "M.Ed. in Educational Administration",
    subject: "Steam Educator",
    email: "j.smith@school.edu",
    phone: "+1 (555) 234-5678"
  },
  {
    name: "Ms. Emily Brown",
    role: "Head of Sciences",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.Sc. in Physics",
    subject: "Health education",
    email: "e.brown@school.edu",
    phone: "+1 (555) 345-6789"
  },
  {
    name: "Mr. David Wilson",
    role: "Head of Mathematics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.Sc. in Mathematics",
    subject: "Social studies",
    email: "d.wilson@school.edu",
    phone: "+1 (555) 456-7890"
  },
  {
    name: "Mrs. Lisa Chen",
    role: "Head of Languages",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.A. in English Literature",
    subject: "English and Grammar",
    email: "l.chen@school.edu",
    phone: "+1 (555) 567-8901"
  },
  {
    name: "Mr. Robert Taylor",
    role: "Head of Arts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    qualifications: "M.F.A. in Fine Arts",
    subject: "Nepali",
    email: "r.taylor@school.edu",
    phone: "+1 (555) 678-9012"
  }
];
const ecaTeam = [
  {
    name: "Sudip Shrestha",
    role: "ECA Coordinator/Futsal Coach (ANFA 1st Batch)",
    image: "/images/Team5.jpg",
    qualifications: "Former National Player, Former APF Coach 'A' Division, AFC 'C' Licence Coach",
    subject: "Physical Education",
    email: "s.shrestha@school.edu",
    phone: "+977 (123) 456-7890"
  },
  {
    name: "Dambar Bahadur Ale Magar",
    role: "Karate Instructor",
    image: "/images/Team2.jpg",
    qualifications: "Former Karate National Player, National Referee, Nepal",
    subject: "Karate",
    email: "d.magar@school.edu",
    phone: "+977 (123) 567-8901"
  },
  {
    name: "Yogina Shrestha",
    role: "Skater Instructor",
    image: "/images/Team1.jpg",
    qualifications: "National Player Roll Ball, Indo-Nepal Skate Race Gold Medalist (2015)",
    subject: "Skating",
    email: "y.shrestha@school.edu",
    phone: "+977 (123) 678-9012"
  },
  {
    name: "Bishnu Shrestha",
    role: "Arts & Crafts Instructor (Visual and Sculpting)",
    image: "/images/Team7.jpg",
    qualifications: "Lecturer of Arts (Tribhuvan University)",
    subject: "Arts & Crafts",
    email: "b.shrestha@school.edu",
    phone: "+977 (123) 789-0123"
  },
  {
    name: "Raj Shrestha",
    role: "Dance Instructor",
    image: "/images/Team6.jpg",
    qualifications: "Director, Let's Dance",
    subject: "Dance",
    email: "r.shrestha@school.edu",
    phone: "+977 (123) 890-1234"
  },
  {
    name: "Subash Chandra Joshi",
    role: "Senior Music Instructor (Eastern Music)",
    image: "/images/Team3.jpg",
    qualifications: "Music Composer/Singer, Image Fm Music Award Winner",
    subject: "Eastern Music",
    email: "s.joshi@school.edu",
    phone: "+977 (123) 901-2345"
  },
  // {
  //   name: "Anil Lama",
  //   role: "Music Instructor (Western Music)",
  //   image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  //   qualifications: "Music Composer/Singer",
  //   subject: "Western Music",
  //   email: "a.lama@school.edu",
  //   phone: "+977 (123) 012-3456"
  // }
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
  const [activeTab, setActiveTab] = useState('academic');

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
            Meet Our <span className="text-[#D41D33]">Professionals</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated educators bring passion, expertise, and innovation to create an inspiring learning environment
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${activeTab === 'academic' ? 'bg-white text-[#D41D33] shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Academic Team
            </button>
            <button
              onClick={() => setActiveTab('eca')}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-colors ${activeTab === 'eca' ? 'bg-white text-[#D41D33] shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}
            >
              ECA Team
            </button>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {(activeTab === 'academic' ? academicTeam : ecaTeam).map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  loading="lazy"
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
                      <p className="text-sm font-medium text-gray-500">Experience</p>
                      <p className="text-gray-700">{member.qualifications}</p>
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


      </div>
    </div>
  );
}