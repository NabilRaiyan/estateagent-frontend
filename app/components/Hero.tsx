"use client";

import Image from "next/image";
import { Button } from "../components/ui/Button";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "/hero-img-1.jpg",
    title: "Historic Modern Architecture",
    subtitle: "Beautiful traditional Bangladeshi architecture"
  },
  {
    image: "/hero-img-4.jpg",
    title: "Traditional Bangladesh Heritage",
    subtitle: "Discover the beauty of our cultural landmarks"
  },
  {
    image: "/hero-img-2.jpg",
    title: "Rural Bangladesh Beauty",
    subtitle: "Experience the natural countryside charm"
  },
  {
    image: "/hero-img-3.jpg",
    title: "Modern Apartments in Dhaka",
    subtitle: "Premium living spaces in the heart of the city"
  },
  {
    image: "/hero-img-5.jpg",
    title: "Investment Opportunities",
    subtitle: "Secure your future with prime properties"
  }
];

// Custom hook for count up animation
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 40); // update every ~30ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Use count up hook for each stat
  const propertiesCount = useCountUp(5000);
  const clientsCount = useCountUp(2000);
  const agentsCount = useCountUp(500);

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
          <Image
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}   // example width (adjust as needed)
            height={1080}          />
        </div>
      ))}

      {/* Full glassmorphic overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] z-10" />

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
            <div className="text-center bg-zinc-900 p-3 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#77d9f7] mb-2">
                {propertiesCount}+
              </div>
              <div className="text-white/90">Properties Listed</div>
            </div>
            <div className="text-center bg-zinc-900 p-3 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#77d9f7] mb-2">
                {clientsCount}+
              </div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div className="text-center bg-zinc-900 p-3 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#77d9f7] mb-2">
                {agentsCount}+
              </div>
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
      <div className="absolute bottom-8 left-8 text-white z-20 bg-black/20 px-4 py-2 rounded-lg shadow-md">
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
