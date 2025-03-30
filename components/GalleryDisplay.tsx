"use client";

import { GalleryImages } from '@/data/dummy';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Share2, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

const GalleryDisplay = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const visibleImages = [
        GalleryImages[(currentIndex - 1 + GalleryImages.length) % GalleryImages.length],
        GalleryImages[currentIndex],
        GalleryImages[(currentIndex + 1) % GalleryImages.length]
    ];

    const navigateImage = (dir: 'prev' | 'next') => {
        setDirection(dir === 'prev' ? 'left' : 'right');

        if (dir === 'prev') {
            setCurrentIndex(prev => (prev - 1 + GalleryImages.length) % GalleryImages.length);
        } else {
            setCurrentIndex(prev => (prev + 1) % GalleryImages.length);
        }
    };

    const openImage = (id: number) => {
        const index = GalleryImages.findIndex(img => img.id === id);
        setCurrentIndex(index);
        setSelectedImage(id);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;

            switch (e.key) {
                case 'ArrowLeft':
                    navigateImage('prev');
                    break;
                case 'ArrowRight':
                    navigateImage('next');
                    break;
                case 'Escape':
                    setSelectedImage(null);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex]);

    return (
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-[#D41D33] bg-[#D41D33]/10 rounded-full mb-4">
                        Campus Life
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-[#D41D33]">Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore moments that capture the spirit of our school community
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative h-[540px] w-full overflow-hidden">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                        <ChevronLeft className="h-6 w-6 text-[#D41D33]" />
                    </button>
                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                        <ChevronRight className="h-6 w-6 text-[#D41D33]" />
                    </button>

                    {/* Carousel Images */}
                    <div className="relative h-full w-full flex items-center justify-center">
                        <AnimatePresence custom={direction} initial={false}>
                            {visibleImages.map((image, index) => (
                                <motion.div
                                    key={`${image.id}-${currentIndex}`}
                                    className={`absolute flex items-center justify-center ${index === 1 ? 'z-10' : 'z-0'}`}
                                    style={{
                                        width: index === 1 ? '60%' : '30%',
                                        height: index === 1 ? '80%' : '70%',
                                    }}
                                    custom={direction}
                                    initial={{
                                        x: index === 0 ? '-100%' : index === 2 ? '100%' : '0%',
                                        opacity: index === 1 ? 1 : 0.7,
                                        scale: index === 1 ? 1 : 0.8
                                    }}
                                    animate={{
                                        x: index === 0 ? '-50%' : index === 2 ? '50%' : '0%',
                                        opacity: index === 1 ? 1 : 0.7,
                                        scale: index === 1 ? 1 : 0.9
                                    }}
                                    exit={{
                                        x: direction === 'right' ? '-100%' : '100%',
                                        opacity: 0,
                                        scale: 0.8
                                    }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => openImage(image.id)}
                                >
                                    <div className={`relative w-full h-full bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300}`}>
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            className="object-cover"
                                            priority={index === 1}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <div className="text-white text-center w-full">
                                                <h3 className="text-lg font-semibold">{image.title}</h3>
                                                <p className="text-sm line-clamp-2">{image.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Image Indicator */}
                <div className="flex justify-center mt-8 gap-2">
                    {GalleryImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-[#D41D33] w-6' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>

                {/* Fullscreen Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="relative w-full max-w-6xl h-full  flex flex-col">
                                {/* Top action bar */}
                                <div className="flex justify-between items-center p-4 bg-black/50 rounded-t-lg">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(window.location.href);
                                                toast.success('Link copied to clipboard!');
                                            }}
                                            className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                                            title="Share"
                                        >
                                            <Share2 className="h-5 w-5 text-gray-800" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                const link = document.createElement('a');
                                                link.href = GalleryImages[currentIndex].src;
                                                link.download = `image-${GalleryImages[currentIndex].id}.jpg`;
                                                document.body.appendChild(link);
                                                link.click();
                                                document.body.removeChild(link);
                                            }}
                                            className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                                            title="Download"
                                        >
                                            <Download className="h-5 w-5 text-gray-800" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="p-2 text-white hover:text-gray-300 transition-colors"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                {/* Image container */}
                                <div className="relative flex-1 flex items-center justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigateImage('prev');
                                        }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
                                    >
                                        <ChevronLeft className="h-6 w-6 text-[#D41D33]" />
                                    </button>

                                    <motion.div
                                        key={currentIndex}
                                        className="w-full h-full flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Image
                                            src={GalleryImages[currentIndex].src}
                                            alt={GalleryImages[currentIndex].title}
                                            width={1200}
                                            height={800}
                                            className="object-contain max-w-full max-h-[500px]"
                                            priority
                                        />
                                    </motion.div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigateImage('next');
                                        }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full hover:bg-white transition-colors z-10"
                                    >
                                        <ChevronRight className="h-6 w-6 text-[#D41D33]" />
                                    </button>
                                </div>

                                {/* Image info */}
                                <div className="p-4 bg-black/50 rounded-b-lg text-white text-center">
                                    <h3 className="text-lg font-semibold">{GalleryImages[currentIndex].title}</h3>
                                    <p className="text-gray-300 text-sm">{GalleryImages[currentIndex].description}</p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        {currentIndex + 1} of {GalleryImages.length}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GalleryDisplay;