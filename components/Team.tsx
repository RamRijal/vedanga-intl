'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const teamMembers = [
    {
        name: 'Bhawesh Chhatkuli, M.Sc.Humanities (TU)',
        position: 'Principal',
        image: '/images/ppp.png',
    },
    {
        name: 'XYZ',
        position: 'BOD',
        image: '',
    },
    {
        name: 'Sharada Adhikari, STEAM Educator',
        position: 'Academic Director',
        image: '/images/Team8.png'
    },
    {
        name: 'Dhurba Luitel ',
        position: 'Chairman',
        image: '',
    },
   
];

const placeholderImage = '/images/NoImage.png'; // Path to your placeholder image

const Team = () => {
    return (
        <div className="py-16 bg-gray-50">
            <motion.div
                className="text-center mb-10 sm:mb-12 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold text-[#D41D33] bg-[#D41D33]/10 rounded-full mb-3 sm:mb-4">
                    Our team
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Our <span className="text-[#D41D33]">Board</span> Members
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    The driving force of our institute ensuring the best results
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-md cursor-pointer shadow-md">
                        <div className="absolute z-40 bottom-0 h-full left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent hover:bg-gradient-to-t hover:from-black/50 hover:via-black/30 hover:to-transparent px-4 py-3"></div>
                        <Image
                            loading='lazy'
                            src={member.image || placeholderImage}
                            alt={member.name}
                            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition duration-300"
                            height={100}
                            width={100}
                        />
                        <div className="absolute z-50 bottom-0 left-0 right-0 px-4 py-3">
                            <h4 className="text-white font-semibold text-lg">{member.name}</h4>
                            <p className="text-gray-300 text-sm">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
