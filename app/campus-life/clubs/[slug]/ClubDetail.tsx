"use client";

import { ChevronRight, Facebook, Linkedin, Share2, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Club {
    name: string;
    slug: string;
    description: string;
    icon: JSX.Element;
    members: number;
    meetingDay: string;
    activities: string[];
    advisor: string;
    color: string;
    image: string; // Add image field
}

export const ClubDetail = ({ club }: { club: Club }) => {
    const pathname = usePathname();
    const [showShareTooltip, setShowShareTooltip] = useState(false);

    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
    const shareTitle = club.name;

    const handleShare = async () => {
        try {
            await navigator.share({
                title: shareTitle,
                url: shareUrl,
            });
        } catch (err) {
            navigator.clipboard.writeText(shareUrl);
            setShowShareTooltip(true);
            setTimeout(() => setShowShareTooltip(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumbs */}
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2">
                        <li className="inline-flex items-center">
                            <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#D41D33] transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                                <Link href="/campus-life" className="ml-1 text-sm text-gray-500 hover:text-[#D41D33] transition-colors md:ml-2">
                                    Campus Life
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                                <Link href="/campus-life/clubs" className="ml-1 text-sm text-gray-500 hover:text-[#D41D33] transition-colors md:ml-2">
                                    Clubs
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                                <span className="ml-1 text-sm font-medium text-[#D41D33] md:ml-2">{club.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Hero Section */}
                    <div className="relative h-[50vh] max-h-[600px]">
                        <Image
                            src={club.image}
                            alt={club.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">{club.name}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-white">
                                    <div className="flex items-center gap-2 text-sm">
                                        {club.icon}
                                        <span>{club.description}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-10">
                        <div className="prose prose-lg max-w-none mb-12 text-justify" dangerouslySetInnerHTML={{ __html: club.description }} />

                        {/* Club Details */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Club Details</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#D41D33] rounded-full mt-2 mr-2"></span>
                                        <span className="text-gray-600">Members: {club.members}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#D41D33] rounded-full mt-2 mr-2"></span>
                                        <span className="text-gray-600">Meeting Day: {club.meetingDay}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-[#D41D33] rounded-full mt-2 mr-2"></span>
                                        <span className="text-gray-600">Advisor: {club.advisor}</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {club.activities.map((activity, idx) => (
                                        <li key={idx} className="text-gray-600">
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                      
                    </div>
                </article>
            </div>
        </div>
    );
};
