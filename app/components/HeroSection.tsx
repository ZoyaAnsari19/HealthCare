'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  // High-quality medical/healthcare stock images from Unsplash
  const slides = [
    {
      image: '/img/img1.jpg',
      alt: 'Professional medical team consultation'
    },
    {
      image: '/img/img2.jpg',
      alt: 'Doctor examining patient with care'
    },
    {
      image: '/img/img3.jpg',
      alt: 'Surgent performing operation in modern OR'
    },
    {
      image: '/img/img4.jpg',
      alt: 'Compassionate healthcare professional'
    },
    {
      image: '/img/img5.jpg',
      alt: 'Cardiologist reviewing heart scans'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // Handle slide transition
  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  // Navigate to specific slide
  const goToSlide = (index: any) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

   const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-5xl mx-auto transition-all duration-700 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We've reimagined
              <span className="block mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                healthcare for you.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Our team of top-tier doctors delivers integrative care in a modern,
              patient-centered environment.
            </p>

            {/* CTA Button */}
            <button onClick={() => scrollToSection("appointment")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 text-white text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
              
              <span className="relative">Book Appointment</span>
              <ChevronDown className="relative w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Secondary CTA */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection("departments")}
              className="px-6 py-3 text-white border-2 border-white/40 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                Explore Departments
              </button>
              <button onClick={() => scrollToSection("doctors")}
              className="px-6 py-3 text-white border-2 border-white/40 backdrop-blur-sm rounded-full font-medium hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                Meet Our Doctors
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-10 h-3 bg-teal-500'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  );
}