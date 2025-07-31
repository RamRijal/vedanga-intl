// app/campus-life/events/[slug]/EventDetail.tsx (Client Component)
"use client";

import { Calendar, ChevronRight, Facebook, Linkedin, MapPin, Share2, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Event {
    title: string;
    date: string;
    time: string;
    venue: string;
    image: string;
    description: string;
    schedule: {
        day: string;
        date: string;
        events: string[];
    }[];
}

export function EventDetail({ event }: { event: Event }) {
    const pathname = usePathname();
    const [showShareTooltip, setShowShareTooltip] = useState(false);

    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
    const shareTitle = event.title;

    const handleShare = async () => {
        try {
            await navigator.share({
                title: shareTitle,
                url: shareUrl
            });
        } catch (err) {
            navigator.clipboard.writeText(shareUrl);
            setShowShareTooltip(true);
            setTimeout(() => setShowShareTooltip(false), 2000);
        }
    };

    const getFormattedDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
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
                                <Link href="/campus-life/events" className="ml-1 text-sm text-gray-500 hover:text-[#D41D33] transition-colors md:ml-2">
                                    Events
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                                <span className="ml-1 text-sm font-medium text-[#D41D33] md:ml-2">
                                    {event.title}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Hero Image Section */}
                    <div className="relative h-[50vh] max-h-[600px]">
                        <Image
                            loading="lazy"
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                                    {event.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 text-white">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="h-4 w-4" />
                                        <span>{getFormattedDate(event.date)} • {event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="h-4 w-4" />
                                        <span>{event.venue}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl mx-auto p-6 sm:p-8 md:p-10">
                        <div
                            className="prose prose-lg max-w-none mb-12 text-justify"
                            dangerouslySetInnerHTML={{ __html: event.description }}
                        />

                        {/* Schedule Section */}
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Schedule</h2>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            {event.schedule.map((day, index) => (
                                <div
                                    key={day.day}
                                    className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-[#D41D33] transition-colors"
                                >
                                    <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
                                    <p className="text-[#FAA02E] font-medium mb-4">{day.date}</p>
                                    <ul className="space-y-3">
                                        {day.events.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="inline-block w-2 h-2 bg-[#D41D33] rounded-full mt-2 mr-2"></span>
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-8">
                            <button className="w-full md:w-auto px-8 py-3 bg-[#D41D33] text-white rounded-lg hover:bg-[#A3162A] transition-colors shadow-md hover:shadow-lg font-medium">
                                Register for Event
                            </button>

                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <button
                                        onClick={handleShare}
                                        className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors relative"
                                        aria-label="Share event"
                                    >
                                        <Share2 className="h-5 w-5 text-gray-600" />
                                    </button>
                                    {showShareTooltip && (
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                            Link copied!
                                        </div>
                                    )}
                                </div>
                                <span className="text-gray-500 text-sm hidden sm:inline">Share:</span>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook className="h-5 w-5 text-blue-600" />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter className="h-5 w-5 text-blue-400" />
                                </a>
                                <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5 text-blue-700" />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </article>
            </div>
        </div>
    );
}