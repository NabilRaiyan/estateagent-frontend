"use client";

import { Button } from "../components/ui/Button";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=1920&h=1080&fit=crop",
    title: "Historic Mosque Architecture",
    subtitle: "Beautiful traditional Bangladeshi architecture"
  },
  {
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=1920&h=1080&fit=crop",
    title: "Traditional Bangladesh Heritage",
    subtitle: "Discover the beauty of our cultural landmarks"
  },
  {
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=1920&h=1080&fit=crop",
    title: "Rural Bangladesh Beauty",
    subtitle: "Experience the natural countryside charm"
  },
  {
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop",
    title: "Modern Apartments in Dhaka",
    subtitle: "Premium living spaces in the heart of the city"
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop",
    title: "Investment Opportunities",
    subtitle: "Secure your future with prime properties"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Full glassmorphic overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-20">
        <div className="max-w-4xl px-4 py-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
            Find Your Dream Property
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover the best real estate opportunities in Bangladesh
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="gradient"
              size="lg"
              className="text-lg px-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-400"
            >
              Explore Properties
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-400"
            >
              Get Expert Consultation
            </Button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">5000+</div>
              <div className="text-white/90">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">2000+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-white/90">Expert Agents</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide description */}
      <div className="absolute bottom-8 left-8 text-white z-20 bg-black/2 px-4 py-2 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-1">
          {slides[currentSlide].title}
        </h3>
        <p className="text-white/80">
          {slides[currentSlide].subtitle}
        </p>
      </div>
    </section>
  );
};
