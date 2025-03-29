"use client";

import GalleryDisplay from "@/components/GalleryDisplay";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import LatestEvents from "@/components/LatestEvents";
import LatestNews from "@/components/LatestNews";
import MapSection from "@/components/MapSection";
import Principal from "@/components/Principal";
import { galleryImages, latestEvents, latestNews } from "@/data/dummy";
import { Calendar, ChevronRight, MapPin, Phone, School } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {


  return (
    <main>
      <Hero />
      {/* Quick Info */}
      <Info />
      <Principal />
      {/* Gallery Preview */}
     <GalleryDisplay/>
      {/* Latest Events */}
      <LatestEvents/>
      {/* Latest News */}
     <LatestNews/>
      {/* Map Section */}
     <MapSection/>
    </main>
  );
}