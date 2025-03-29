"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, BookOpen, Users, Star, ChevronRight, ChevronLeft } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";
import { addDays, format, isSameDay } from "date-fns";

const events = [
  {
    id: 1,
    date: new Date(2024, 2, 15), // March 15, 2024
    title: "First Term Begins",
    type: "Academic",
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-600",
    description: "Opening ceremony and orientation for all students at the main auditorium."
  },
  {
    id: 2,
    date: new Date(2024, 3, 5), // April 5, 2024
    title: "Parent-Teacher Meeting",
    type: "Meeting",
    icon: <Users className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-600",
    description: "Quarterly progress review meeting with subject teachers."
  },
  {
    id: 3,
    date: new Date(2024, 4, 20), // May 20, 2024
    title: "Annual Sports Day",
    type: "Event",
    icon: <Star className="h-5 w-5" />,
    color: "bg-green-100 text-green-600",
    description: "All-day sports competition with inter-house events."
  },
  {
    id: 4,
    date: new Date(2024, 5, 10), // June 10, 2024
    title: "Mid-Term Examinations",
    type: "Exam",
    icon: <BookOpen className="h-5 w-5" />,
    color: "bg-red-100 text-red-600",
    description: "Examinations covering first half of term curriculum."
  }
];

export default function AcademicCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  const [month, setMonth] = useState<Date>(new Date());

  // Update selected events when date changes
  useEffect(() => {
    if (date) {
      const eventsOnDate = events.filter(event => isSameDay(event.date, date));
      setSelectedEvents(eventsOnDate);
    } else {
      setSelectedEvents([]);
    }
  }, [date]);

  // Highlight days with events
  const eventDays = events.map(event => event.date);

  const handlePrevMonth = () => {
    setMonth(addDays(month, -30));
  };

  const handleNextMonth = () => {
    setMonth(addDays(month, 30));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
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
            ACADEMIC SCHEDULE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic <span className="text-[#D41D33]">Calendar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important dates, events, and schedules for the academic year
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <CalendarIcon className="h-6 w-6 text-[#D41D33]" />
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    className="group relative overflow-hidden rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${event.color} rounded-lg`}>
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800">{event.title}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${event.color}`}>
                            {event.type}
                          </span>
                          <span className="text-sm text-gray-500 flex items-center">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {format(event.date, 'MMM dd, yyyy')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#D41D33] transition-colors mt-2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Yearly Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Yearly Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#D41D33]">
                    <Clock className="h-5 w-5" />
                    Term Dates
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { term: "First Term", date: "March - June" },
                      { term: "Second Term", date: "July - November" },
                      { term: "Third Term", date: "December - February" }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-100"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span>{item.term}</span>
                        <span className="font-medium">{item.date}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#D41D33]">
                    <BookOpen className="h-5 w-5" />
                    Examination Schedule
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { exam: "First Term", date: "June" },
                      { exam: "Mid-Term", date: "September" },
                      { exam: "Final Term", date: "February" }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center justify-between py-2 border-b border-gray-100"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <span>{item.exam}</span>
                        <span className="font-medium">{item.date}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Calendar Widget */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 sticky top-24">
              <div className="p-6 bg-[#D41D33] text-white">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Academic Calendar
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-1 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="text-white/90 text-sm mt-1">
                  Select a date to view events
                </p>
              </div>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  month={month}
                  onMonthChange={setMonth}
                  className="p-6"
                  modifiers={{
                    hasEvent: eventDays
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      border: '2px solid #D41D33',
                      borderRadius: '50%'
                    }
                  }}
                />
              </div>
              {/* Events for selected date */}
              {selectedEvents.length > 0 ? (
                <div className="p-6 border-t border-gray-100">
                  <h3 className="font-semibold mb-3">
                    Events on {date && format(date, 'MMMM d, yyyy')}
                  </h3>
                  <ul className="space-y-3">
                    {selectedEvents.map(event => (
                      <li key={event.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`p-2 ${event.color} rounded-lg mt-1`}>
                          {event.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-6 border-t border-gray-100 text-center text-gray-500">
                  {date ? `No events scheduled for ${format(date, 'MMMM d, yyyy')}` : "Select a date to view events"}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Holidays Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Star className="h-6 w-6 text-[#FF981F]" />
            School Holidays & Breaks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Summer Break", period: "June - July", color: "blue" },
              { title: "Dashain Break", period: "October", color: "purple" },
              { title: "Winter Break", period: "December", color: "green" },
              { title: "Public Holidays", period: "As per government calendar", color: "amber" }
            ].map((holiday, index) => (
              <motion.div
                key={holiday.title}
                className={`p-5 bg-${holiday.color}-50 rounded-xl border border-${holiday.color}-100`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className={`font-semibold text-${holiday.color}-800 mb-2`}>{holiday.title}</h3>
                <p className={`text-${holiday.color}-600`}>{holiday.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}