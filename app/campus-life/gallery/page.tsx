"use client";

import { Gallerycategories, GalleryImages } from "@/data/dummy";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Search, Share2, X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredImages = GalleryImages
    .filter(img => selectedCategory === "All" || img.category === selectedCategory)
    .filter(img =>
      img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const selectedImageData = GalleryImages.find(img => img.id === selectedImage);
  const currentIndex = selectedImage ? GalleryImages.findIndex(img => img.id === selectedImage) : -1;

  const handleDownload = () => {
    if (!selectedImageData) return;
    const link = document.createElement('a');
    link.href = selectedImageData.src;
    link.download = `image-${selectedImageData.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (!selectedImageData) return;
    try {
      await navigator.share({
        title: selectedImageData.title,
        text: selectedImageData.description,
        url: window.location.href,
      });
    } catch (err) {
      console.error('Error sharing:', err);
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#D41D33] mb-4">Photo Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore moments and memories from our school community through these captured images
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {Gallerycategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${selectedCategory === category
                  ? "bg-[#D41D33] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="relative w-full md:w-64"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group cursor-pointer bg-white rounded-sm shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-gray-700">
                  {image.date}
                </div>
              </div>
            </motion.div>
          ))}
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
                    handleShare();
                  }}
                  className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  title="Share"
                >
                  <Share2 className="h-5 w-5 text-gray-800" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
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
                    {currentIndex + 1} of {GalleryImages.length} • {selectedImageData?.date}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}