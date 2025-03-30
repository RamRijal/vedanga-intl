"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// TODO: Replace with API data
const latestNotice = {
  id: 1,
  title: "Important: Admission Open for 2024-25",
  date: "March 15, 2024",
  content: "Applications are now being accepted for all grades. Limited seats available.",
  image: "/images/foto2.jpg"
};

export default function NoticeOverlay() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (pathname !== "/") return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-full">
              <Image
                loading="lazy"
                src={latestNotice.image}
                alt={latestNotice.title}
                className="w-full h-[640px] object-cover"
                width={1000}
                height={640}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h2 className="text-2xl font-bold mb-2">{latestNotice.title}</h2>
                <p className="text-white/90">{latestNotice.date}</p>
                <Link target="blank" href={'https://docs.google.com/forms/d/e/1FAIpQLSd-d_vNtskX3Q-68EN1k_LkUHbD4k8BV_Jky95BNFvI9k8J2Q/viewform?usp=header'}>
                  <button className="px-6 py-2 my-2 bg-[#D41D33] text-white rounded-lg hover:bg-opacity-90 transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
