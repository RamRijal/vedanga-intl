import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MainNav } from "@/components/main-nav";
import { School } from 'lucide-react';
import Link from 'next/link';
import NoticeOverlay from './components/NoticeOverlay';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vedanga International School',
  description: 'Excellence in Education since 2022',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NoticeOverlay />
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
            <MainNav />
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <School className="h-8 w-8" />
                  <span className="font-bold text-xl">Vedanga</span>
                </div>
                <p className="text-gray-400">Nurturing Minds, Shaping Futures</p>
                <div className="space-y-2">
                  <p className="text-gray-400">Rabi Bhawan, Kathmandu</p>
                  <p className="text-gray-400">Phone: 015372578</p>
                  <p className="text-gray-400">Email: info@vedanga.edu.np</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="/about/principal-message" className="block text-gray-400 hover:text-white transition-colors">Principal&apos;s Message</Link>
                  <Link href="/academics/programs" className="block text-gray-400 hover:text-white transition-colors">Programs</Link>
                  <Link href="/campus-life/events" className="block text-gray-400 hover:text-white transition-colors">Events</Link>
                  <Link href="/news/notices" className="block text-gray-400 hover:text-white transition-colors">Notices</Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Academics</h3>
                <div className="space-y-2">
                  <Link href="/academics/curriculum" className="block text-gray-400 hover:text-white transition-colors">Curriculum</Link>
                  <Link href="/academics/calendar" className="block text-gray-400 hover:text-white transition-colors">Academic Calendar</Link>
                  <Link href="/campus-life/clubs" className="block text-gray-400 hover:text-white transition-colors">Student Clubs</Link>
                  <Link href="/careers" className="block text-gray-400 hover:text-white transition-colors">Career Opportunities</Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="space-y-2">
                  <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</Link>
                  <Link href="/about/our-team" className="block text-gray-400 hover:text-white transition-colors">Our Team</Link>
                  <Link href="/news/newsletter" className="block text-gray-400 hover:text-white transition-colors">Newsletter</Link>
                  <Link href="/about/vision-mission" className="block text-gray-400 hover:text-white transition-colors">Vision & Mission</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Vedanga International School. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}