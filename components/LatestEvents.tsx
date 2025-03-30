import { latestEvents } from '@/data/dummy'
import Image from 'next/image'
import { Calendar, ChevronRight, MapPin } from 'lucide-react'
import Link from 'next/link'

const LatestEvents = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-[#D41D33] bg-[#D41D33]/10 rounded-full mb-4">
                        What&apos;s Happening
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Latest <span className="text-[#D41D33]">Events</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our upcoming activities and join the community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestEvents.map((event, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute top-4 right-4 bg-[#D41D33] text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {event.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="h-4 w-4 text-[#D41D33]" />
                                    <span>{event.date}</span>
                                    <MapPin className="h-4 w-4 text-[#D41D33] ml-2" />
                                    <span>{event.venue}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D41D33] transition-colors">
                                    {event.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {event.description}
                                </p>

                                <Link
                                    href={`/campus-life/events/${event.slug}`}
                                    className="inline-flex items-center text-[#D41D33] font-medium group-hover:text-[#A3162A] transition-colors"
                                >
                                    View Details
                                  <ChevronRight size={20}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/campus-life/events"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#D41D33] hover:bg-[#A3162A] transition-colors shadow-lg hover:shadow-xl"
                    >
                        View All Events
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LatestEvents