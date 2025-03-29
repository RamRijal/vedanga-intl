"use client";

import { GalleryImages } from '@/data/dummy';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Expand, Search, Share2, X, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const GalleryDisplay = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredImages = GalleryImages.filter(img =>
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selectedImageData = GalleryImages.find(img => img.id === selectedImage);
    const currentIndex = selectedImage ? GalleryImages.findIndex(img => img.id === selectedImage) : -1;

    const navigateImage = (direction: 'prev' | 'next') => {
        if (currentIndex === -1) return;

        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentIndex - 1 + GalleryImages.length) % GalleryImages.length;
        } else {
            newIndex = (currentIndex + 1) % GalleryImages.length;
        }

        setSelectedImage(GalleryImages[newIndex].id);
        setIsZoomed(false);
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
                    setIsZoomed(false);
                    break;
                case 'z':
                case 'Z':
                    setIsZoomed(!isZoomed);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, isZoomed, currentIndex]);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
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

                <motion.div
                    className="relative w-full md:w-64 mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search gallery..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D41D33] focus:border-transparent"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredImages.slice(0, 8).map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="relative group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(image.id)}
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Expand className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white font-medium">{image.title}</h3>
                                    <p className="text-white/80 text-sm line-clamp-1">{image.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/campus-life/gallery"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#D41D33] hover:bg-[#A3162A] transition-colors shadow-lg hover:shadow-xl"
                    >
                        View Full Gallery
                        <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Enhanced Modal with Carousel */}
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsZoomed(false)}
                    >
                        <div className="relative max-w-6xl w-full max-h-screen">
                            {/* Close button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedImage(null);
                                    setIsZoomed(false);
                                }}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                            >
                                <X className="h-8 w-8" />
                            </button>

                            {/* Navigation arrows */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('prev');
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full transition-colors z-10"
                            >
                                <ChevronLeft className="h-8 w-8 text-white" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('next');
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/30 hover:bg-white/50 rounded-full transition-colors z-10"
                            >
                                <ChevronRight className="h-8 w-8 text-white" />
                            </button>

                            {/* Action buttons */}
                            <div className="absolute top-4 right-4 flex gap-2 z-10">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link copied to clipboard!');
                                    }}
                                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                                    title="Share"
                                >
                                    <Share2 className="h-5 w-5 text-gray-800" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const link = document.createElement('a');
                                        link.href = selectedImageData?.src || '';
                                        link.download = `image-${selectedImageData?.id}.jpg`;
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                                    title="Download"
                                >
                                    <Download className="h-5 w-5 text-gray-800" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsZoomed(!isZoomed);
                                    }}
                                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                                >
                                    {isZoomed ? (
                                        <ZoomOut className="h-5 w-5 text-gray-800" />
                                    ) : (
                                        <ZoomIn className="h-5 w-5 text-gray-800" />
                                    )}
                                </button>
                            </div>

                            {/* Image display */}
                            <motion.div
                                className="relative w-full h-full"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className={`overflow-auto ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
                                    <Image
                                        src={selectedImageData?.src || ''}
                                        alt={selectedImageData?.title || 'Selected image'}
                                        width={1200}
                                        height={800}
                                        className={`mx-auto ${isZoomed ? 'w-auto h-auto max-w-none' : 'w-full h-auto max-h-[80vh] object-contain'}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsZoomed(!isZoomed);
                                        }}
                                    />
                                </div>

                                {/* Image info */}
                                <div className="mt-4 text-white text-center">
                                    <h3 className="text-xl font-semibold">{selectedImageData?.title}</h3>
                                    <p className="text-gray-300">{selectedImageData?.description}</p>
                                    <p className="text-sm text-gray-400 mt-2">
                                        {currentIndex + 1} of {GalleryImages.length}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default GalleryDisplay;