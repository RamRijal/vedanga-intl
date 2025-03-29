"use client";

import { heroSlides } from "@/data/dummy";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const slideVariants = {
        hidden: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        })
    };

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 0.8,
                duration: 0.5,
                ease: "backOut"
            }
        }
    };

    return (
        <section className="relative h-screen max-h-[1000px] min-h-[600px] overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Main image with gradient overlay */}
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                        style={{
                            backgroundImage: `url(${heroSlides[currentSlide].image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                </AnimatePresence>

                {/* New gradient overlay - dark left to light right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

                {/* Brand color overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D41D33]/50 to-[#FF981F]/10 " />

                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-50 bg-[url('/images/dot-pattern.svg')]" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl text-white"
                    >

                        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                            {heroSlides[currentSlide].title}
                        </motion.h1>
                        <motion.p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                            {heroSlides[currentSlide].subtitle}
                        </motion.p>
                        <motion.div variants={buttonVariants}>
                            <Link
                                href={"/contact"}
                                className="inline-flex items-center px-8 py-4 text-lg font-bold bg-[#da973e] text-white rounded-full hover:bg-[#c78835] transition-all duration-100 delay-100 shadow-lg hover:shadow-xl"
                            >
                                {"Contact us"}
                                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-all backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? 1 : -1);
                            setCurrentSlide(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-6" : "bg-white/50"}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>


        </section>
    );
};

export default Hero;